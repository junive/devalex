var AbstractPlugin = Class.create();
AbstractPlugin.prototype = {
  initialize: function() {
    this.url = "";
    this.listener = null;
    this.isOK = false;
  },

  setUrl: function(url) {
    this.url = url;
  },

  setListener: function(listener) {
    this.listener = listener;
  },

  play: function() {},

  pause: function() {},

  stop: function() {},

  fastForward: function() {},

  fastReverse: function() {},

  getVolume: function() { return 0; },

  setVolume: function(vol) {},

  getPluginInfo: function() { return "Abstract"; },
  
  isPluginOK: function() { return this.isOK;},
  
  getCurrentCapabilities: function() {
    return $H({
      play: false, pause: false, stop: false,
      fastForward: false, fastReverse: false,
      getVolume: false, setVolume: false });
  }
};