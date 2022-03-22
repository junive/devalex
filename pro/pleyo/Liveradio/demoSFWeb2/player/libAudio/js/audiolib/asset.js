CodecTable = $H({
  'mp3': 'mp3',
  'MP3': 'mp3',
  'ASF': 'asf',
  'asf': 'asf',
  'WMA': 'wma',
  'wma': 'wma',
  'rm': 'real',
  'ram': 'real',
  'UNK': 'mp3'
});

var Asset = Class.create();
Asset.prototype = {
	initialize: function(codec, urls) {
		this.codec = CodecTable[codec];
		this.urls = urls;		
		this.current = 0;
	},
	
	next_url: function() {
	  if(this.current == this.urls.length)
	    return null;
	  else {
	    url = this.urls[this.current];
	    this.current += 1;
	    return url;
	  }
	},
	
	has_url: function() {
	  return this.current < this.urls.length;
	},
	
	get_codec: function() {
	  return this.codec;
	}
}
