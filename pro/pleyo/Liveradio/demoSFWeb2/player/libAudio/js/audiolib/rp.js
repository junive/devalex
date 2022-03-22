// Real Player
var RPL = Class.create();
RPL.prototype = Object.extend(new AbstractPlugin(), {
	initialize: function() {
		object = document.createElement('object');
		document.body.appendChild(object);
		object.id = 'real_plugin';
		object.classid = 'clsid:CFCDAA03-8BE4-11cf-B84B-0020AFBBCCFA';
		object.setAttribute('width', 0);
		object.setAttribute('height', 0);
		param = document.createElement('param');
		param.name = 'autostart';
		param.value = false;
		object.appendChild(param);
		param = document.createElement('param');
		param.name = 'controls';
		param.value = 'ImageWindow';
		object.appendChild(param);
		param = document.createElement('param');
		param.name = 'nolabels';
		param.value = true;
		object.appendChild(param);
		param = document.createElement('param');
		param.name = 'nologo';
		param.value = true;
		object.appendChild(param);
		param = document.createElement('param');
		param.name = 'autogotourl';
		param.value = true;
		object.appendChild(param);
		param = document.createElement('param');
		param.name = 'maintainaspect';
		param.value = true;
		object.appendChild(param);
		embed = document.createElement('embed');
		embed.setAttribute('name', 'real_plugin');
		embed.setAttribute('width', 0);
		embed.setAttribute('height', 0);
		embed.setAttribute('type', 'audio/x-pn-realaudio-plugin');
		embed.setAttribute('controls', 'ImageWindow');
		embed.setAttribute('nologo', 'true');
		embed.setAttribute('autostart', 'false');
		try {
			object.appendChild(embed);
		} catch (err) {
			
		}
		this.rpl = document.real_plugin;
		this.isOK = this.rpl ? true : false;
	},
	
	setUrl: function(url) {
  	if(this.rpl)
  		this.rpl.SetSource(url);
		this.url = url;
	},
	
	play: function() {
		AudioLib.AudioPlayer.rp.clearRealInterval();
		if(this.rpl)
		  this.rpl.DoPlay();
	},
	
	stop: function() {
		AudioLib.AudioPlayer.rp.clearRealInterval();
	  if(this.rpl)
  		this.rpl.DoStop();
	},
	
	pause: function() {
	  if(this.rpl)
  		this.rpl.DoPause();  	
	},

	getVolume: function() {
		return this.rpl.GetVolume();
	},
	
	setVolume: function (vol) {
		if (vol < 0) {
			vol = 0;
		} else if (vol > 100) {
			vol = 100;
		} else {
			vol = parseInt(vol);
		}
		
		try {
			if(this.rpl)
  			this.rpl.SetVolume(vol);
  	} catch(err) {}
	},	
	
	fastForward: function () {
		AudioLib.AudioPlayer.rp.clearRealInterval();
		AudioLib.AudioPlayer.RealInterval = setInterval('AudioLib.AudioPlayer.rp.rpl.SetPosition(AudioLib.AudioPlayer.rp.rpl.GetPosition() + 500)', 250);
	},
	
	fastReverse: function () {
		AudioLib.AudioPlayer.rp.clearRealInterval();
		AudioLib.AudioPlayer.RealInterval = setInterval('AudioLib.AudioPlayer.rp.rpl.SetPosition(AudioLib.AudioPlayer.rp.rpl.GetPosition() - 500)', 250);
	},

	clearRealInterval: function() {
		if ('undefined' != typeof(AudioLib.AudioPlayer.RealInterval)) {
			clearInterval(AudioLib.AudioPlayer.RealInterval);
		}
	},
	
	getPluginInfo: function() {
	  return "Real " + this.rpl.GetVersionInfo();
	},
	
  getPluginStatus: function() {
  	if ('undefined' == typeof(this.rpl.GetLastErrorRMACode()) ||
  	    'undefined' == typeof(this.rpl.GetPlayState())) {
  		return 'Idle';
  	}
  	
  	error = parseInt(this.rpl.GetLastErrorRMACode());
  	switch (error) {
  		case 0:
  			error = '';
  			break;
  			
  		case 16389:
  			error = 'Operation failed';
  			break;
  			
  		case 262153:
  			error = 'Unexpected call or method is not implemented';
  			break;
  			
  		default:
  			error = 'Error';
  			break;
  	}
  	
  	playStates = new Array('Stopped', 'Connecting', 'Buffering', 'Playing', 'Paused', 'Seeking');
  	playState = playStates[parseInt(this.rpl.GetPlayState())];
  	
  	endOfStream = (this.rpl.GetLength() == this.rpl.GetPosition() && this.rpl.GetPosition() > 0) ? 'End of stream' : '';

  	//error takes precedence over endOfStream and playState
  	if ('' != error) {
  		return error;
  	} else if ('' != endOfStream) {
  		return endOfStream;
  	} else {
  		return playState;
  	}
  },	
	
    getCurrentCapabilities: function() {
      return $H({
        play: true, pause: true, stop: true,
        fastForward: true, fastReverse: true,
        getVolume: true, setVolume: true });
    },
    
    getMediaInfo: function() {
    	alert(this.rpl.GetEntryAbstract(0));
    }
});

