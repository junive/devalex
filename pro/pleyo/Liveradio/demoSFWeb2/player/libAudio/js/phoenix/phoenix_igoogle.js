phoenix_url = "http://www.dragmovedrop.com/Test/LiveTest/player/liveradio/proxy/SvcRadioIP.php";
//phoenix_url = 'http://localhost/liveradio/proxy/SvcRadioIP.php';
function query_phoenix(params, handler) {
  var query = phoenix_url + '?' + $H(params).toQueryString();
  _IG_FetchXmlContent(query, handler);
}


var stat_report = Class.create();
stat_report.prototype = {
  initialize: function(refresh_time) {
    this.current_id = 0;
    this.start_time = 0;
    this.report = [];
    new PeriodicalExecuter(this.flush.bindAsEventListener(this), refresh_time);
  },
  
  get_time_of_day: function() {
    return (new Date()).getTime();
  },
  
  set_id: function(id) {
		spy('report: set_id ' + id);
    this.current_id = id;
  },
  
  start_listening: function() {
		spy('report: start');
    this.start_time = this.get_time_of_day();
  },
  
  stop_listening: function() {
		spy('report: stop');
    if(this.start_time > 0) {
      var interval = Math.round((this.get_time_of_day() - this.start_time)/1000);
      this.report.push($H({ id: this.current_id, duration: interval }));
      this.start_time = 0;
    }
  },
  
  flush: function() {
    spy('flush');
    // if we're listening to something, include it in the report
    if(this.start_time>0) {
      this.stop_listening();
      this.start_listening();
    }
    
    var header = '';
    $A(this.report).each(function(entry) {
      header += entry.id + ':1:200:' + entry.duration + ',';
    });
    
    if(header.length>0) {
      spy('report: ' + header);
      query_phoenix({ WRequest: 'DateTime', 'HTTP_device_items': header });
    }
    
    this.report = [];
  }
};

function get_ticker_info(listener) {
  query_phoenix({ WRequest: 'Infos' }, function(xml) {
    info_item = xml.getElementsByTagName('InfoItem')[0];
    scrolling_text = unescape(info_item.getAttribute('ScrollingText'));
    spy('ticker: ' + scrolling_text);
    listener(scrolling_text);
  });
}
var phoenix_item = Class.create();
phoenix_item.prototype = {
	initialize: function(title, menu_id) {
		this.title = title;
		this.menu_id = menu_id;
		this.asset = null;
	},
	
	set_asset: function(asset) {
	  this.asset = asset;
	},
	
	get_title: function() {
		return this.title;
	},

	get_id: function() {
		return this.menu_id;
	},

	get_asset: function() {
		return this.asset;
	}
};

var abstract_set = Class.create();
abstract_set.prototype = {
	initialize: function() {
	},
	
	get_item: function(n) {
		return null;
	},
	
	push_titles: function(presets) {
	},
	
	notify_play: function() {
	},
	
	notify_stop: function() {
	}
};
var presets_set = Class.create();
presets_set.prototype = Object.extend(new abstract_set(), {
	initialize: function(load_listener, refresh_period, buttons) {
		this.load_listener = load_listener;
		this.report = new stat_report(refresh_period);
		this.items = $H({});
		
		this.query_presets();
	},

  query_presets: function() {
    query_phoenix(
      { WRequest: 'Presets' },
			this.query_presets_handler.bindAsEventListener(this));
  },

	query_presets_handler: function(xml) {
    presets_tag = xml.getElementsByTagName('Presets');
    preset_tags = $A(presets_tag[0].getElementsByTagName('Preset'));

    my_this = this;
    preset_tags.each(function(p) {
      var bt = parseInt(p.getAttribute('Button')); 
			var title = unescape(p.getAttribute('Title'));
      var menu_id = parseInt(p.getAttribute('MenuID'));

			var item = new phoenix_item(title, menu_id);
      my_this.items[bt] = item;
      
			my_this.query_stream_urls(
				item,
				my_this.query_stream_urls_handler.bindAsEventListener(my_this, item));
    });
	},

  query_stream_urls: function(item, handler) {
    query_phoenix(
			{ WRequest: 'Menu', WMenuID: item.get_id() },
			handler);
  },

	query_stream_urls_handler: function(xml, item) {
	  urls = [];
		stream_urls = xml.getElementsByTagName('StreamURLs')[0];
		$A(stream_urls.getElementsByTagName('StreamURL')).each(function(url_tag) {
      url_content = url_tag.text ? url_tag.text : url_tag.textContent;
		  url =
		    'http://' +
			  decodeURIComponent(url_tag.getAttribute('Host')) + ':' +
			  decodeURIComponent(url_tag.getAttribute('Port')) +
			  decodeURIComponent(url_content);
			urls.push(url);
		});
	
    codec_cont = xml.getElementsByTagName('Format')[0];
	  codec = codec_cont.text ? codec_cont.text : codec_cont.textContent;

    var asset = new Asset(codec, urls);
    item.set_asset(asset);
		this.load_listener();
	},
	
	get_item: function(n) {
	  return this.items[n]
	},	

	push_titles: function(presets) {
		this.items.each(function(pair) {
			presets[pair.key].set_title(pair.value.get_title());
		});
	},
	
	notify_play: function() {
	  this.report.stop_listening();
	  this.report.start_listening();
	},
	
	notify_stop: function() {
	  this.report.stop_listening();
	}
});
