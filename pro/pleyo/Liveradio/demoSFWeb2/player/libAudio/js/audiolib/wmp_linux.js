var WMP_Linux = Class.create();
WMP_Linux.prototype = Object.extend(new AbstractPlugin(), {
	initialize: function() {
		this.container = document.createElement('div');
		this.container.setAttribute('id', 'wmp_plugin_container');
		this.container.setAttribute('style', 'position:absolute; top:0; left:0; width:0; height:0');
		document.body.appendChild(this.container);
		this.url = '';
		this.status = 'unknown';
		// when using the linux plugin, we have no way of knowing if the stream is playing
		// or not. Therefore, we disable timeouts
		audiolib_timeout = 9999999;
	},
	
	setUrl: function(url) {
		this.url = url;
	},
	
	play: function() {
		this.stop();
		this.wmp = document.createElement('embed');
  	this.wmp.setAttribute('type','application/x-mplayer2');
  	this.wmp.setAttribute('id', 'wmp_plugin');
  	this.wmp.setAttribute('width', 1);
  	this.wmp.setAttribute('height', 1);
  	this.wmp.setAttribute('autostart', 1);
  	this.wmp.setAttribute('showcontrols', 0);
  	this.wmp.setAttribute('src', this.url);
  	this.container.appendChild(this.wmp);
  	this.status = 'Connecting';
	},
	
	stop: function() {
		if(this.wmp) {
			this.container.removeChild(this.wmp);
			this.container.innerHTML = '';
			this.wmp = null;
			this.status = 'Stopped';
		}
	},
	
	pause: function() {
		this.stop();
	},
	
	getVolume: function() {
	 if(this.wmp.settings && this.wmp.settings.volume)
      return this.wmp.settings.volume;
    else
      return 50;
	},
	
	setVolume: function(vol) {
	 if (vol < 0) {
		  vol = 0;
	  } else if (vol > 100) {
		  vol = 100;
	  } else {
		  vol = parseInt(vol);
	  }
	  
	  try {
		  if(this.wmp.settings)
  		  this.wmp.settings.volume = vol;
  	} catch(err) {}
	},
	
	getPluginInfo: function() {
    return "WMP " + this.wmp.versionInfo;
  },
	
	getPluginStatus: function() {
		// Linux WMP does not support this
		return this.status;
	},
	
	getCurrentCapabilities: function() {
    return $H({
      play: true, pause: true, stop: true,
      fastForward: false, fastReverse: false,
      getVolume: true, setVolume: true });
  }
});

