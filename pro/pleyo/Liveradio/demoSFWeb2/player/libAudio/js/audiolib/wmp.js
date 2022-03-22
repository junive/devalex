var WMP = Class.create();
WMP.prototype = Object.extend(new AbstractPlugin(), {
  initialize: function() {
    try {
    	this.wmp = new ActiveXObject("WMPlayer.OCX.7");
    	this.wmp.settings.autoStart = false;
    } catch (err) {
    	div = document.createElement('div');
    	div.setAttribute('style', 'position:absolute; top:0; left:0; width:0; height:0');
    	plugin = document.createElement('object');
    	plugin.setAttribute('type','application/x-mplayer2');
    	plugin.setAttribute('id', 'wmp_plugin');
    	plugin.setAttribute('width', 1);
    	plugin.setAttribute('height', 1);
    	plugin.setAttribute('autostart', 0);
    	plugin.setAttribute('showcontrols', 0);
    	
    	div.appendChild(plugin);
    	document.body.appendChild(div);
	    this.wmp = $('wmp_plugin');
    }
    this.isOK = this.wmp ? true : false;
    this.lastErrorCount = 0;
  },
  
  setUrl: function(url) {
    try {
  	  this.wmp.URL = url;
  	} catch(err) {  	  
  	}
  	this.url = url;
  },
  
  play: function() {
    if(this.wmp.controls)
      this.wmp.controls.play();
  },
  
  pause: function() {
    if(this.wmp.controls)
      this.wmp.controls.pause();
  },
  
  stop: function() {
    if(this.wmp.controls)
      this.wmp.controls.stop();
  },
  
  getVolume: function() {
    if(this.wmp.settings)
      return this.wmp.settings.volume;
    else
      return 50;
  },

  setVolume: function(vol) {
    if (vol < 0)
      vol = 0;
	  else if (vol > 100)
		  vol = 100;
	  else
		  vol = parseInt(vol);
	  
    if(this.wmp.settings)
      this.wmp.settings.volume = vol;
  },

  fastForward: function () {
	  if (this.wmp.controls &&
	      this.wmp.controls.isAvailable('fastForward'))
		  this.wmp.controls.fastForward();
  },
	
  fastReverse: function () {
    if (this.wmp.controls &&
        this.wmp.controls.isAvailable('fastReverse'))
		  this.wmp.controls.fastReverse();
  },  
  
  getPluginInfo: function() {
    return "WMP " + this.wmp.versionInfo;
  },
  
  getPluginStatus: function() {
  	if ('undefined' == typeof(this.wmp.error) ||
  	    'undefined' == typeof(this.wmp.openState) ||
  	    'undefined' == this.wmp.playState) {
  	  audiolib_timeout = 999999;
  		return 'Idle';
  	}

  	try {
  		error = (this.wmp.error.errorCount > this.lastErrorCount) ? 'Error' : '';
  	} catch (err) {
  		error = '';
  	}

  	openState = (13 != this.wmp.openState) ? 'Connecting' : '';
  	playStates = new Array('', 'Stopped', 'Paused', 'Playing', 'Seeking', 'Seeking', 'Buffering', 'Connecting', 'End of stream', 'Connecting', 'Stopped', 'Connecting');
  	playState = playStates[this.wmp.playState];
  	if ('' != error) {
  		this.lastErrorCount = this.wmp.error.errorCount;
  		return error;
  	} else if('' != playState) {
  		return playState;
  	} else {
  		return openState;
  	}
  },
  
  getCurrentCapabilities: function() {
    return $H({
      play: true, pause: true, stop: true,
      fastForward: true, fastReverse: true,
      getVolume: true, setVolume: true });
  }
});

