var infoPreset = Class.create();
infoPreset.prototype = {
  initialize: function(title, url, cover, codec, bitrate) {
	this.title = title;
    this.url = url;
    this.cover = cover;
    this.codec = codec;
    this.bitrate = bitrate;
  },
  
  getTitle : function() {
	return this.title;
  },
  
  getUrl: function() {
	return this.url;
  },
  
  getCover : function() {
	return this.cover;
  },
  getCodec : function() {
	return this.codec;
  },
  getBitrate : function() {
	return this.bitrate;
  } 
};