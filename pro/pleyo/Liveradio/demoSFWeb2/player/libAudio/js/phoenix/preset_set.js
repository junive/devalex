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
