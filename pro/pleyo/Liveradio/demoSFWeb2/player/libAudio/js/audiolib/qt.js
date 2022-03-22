// QuickTime
var QTP = Class.create();
QTP.prototype = Object.extend(new AbstractPlugin(), {
	initialize: function() {
		// if function is call with arguments, url is the first argument; otherwise default url value is set
		url = (null != arguments[0]) ? arguments[0] : './init.mov';

		object = document.createElement('object');
		object.id = 'qt_plugin';
		object.setAttribute('codebase', 'http://www.apple.com/qtactivex/qtplugin.cab');
		object.setAttribute('width', 0);	
		object.setAttribute('height', 0);	
		
		param = document.createElement('param');
		param.name = 'src';
		param.value = url;
		object.appendChild(param);
		param = document.createElement('param');
		param = document.createElement('param');
		param.name = 'autoplay';
		param.value = false;
		object.appendChild(param);
		param = document.createElement('param');
		param.name = 'controller';
		param.value = true;
		object.appendChild(param);
		if (null == $('qt_plugin')) {
			document.body.appendChild(object);
		} else {
			document.body.replaceChild(object, $('qt_plugin'));
		}		
		embed = document.createElement('embed');
		embed.setAttribute('width', 0);
		embed.setAttribute('height', 0);
		embed.setAttribute('src', url);
		embed.setAttribute('name', 'qt_plugin');
		embed.setAttribute('enablejavascript', true);
		embed.setAttribute('autoplay', false);
		embed.setAttribute('controller', true);
		try {
			object.appendChild(embed);
		} catch(err) {
			//alert(err);
		}
		object.setAttribute('classid', 'clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B');
		
		this.qtp = document.qt_plugin;
		this.isOK =  this.qtp ? true : false;
		this.emulatedStatus = 'Idle';
	},
	
	setUrl: function(url) {
		this.initialize(url);
		if ('function' == typeof(this.qtp.Stop))
			this.qtp.Stop(); 
		this.url = url;
	},
	
	play: function() {
		this.emulatedStatus = 'Playing';
		if ('function' == typeof(this.qtp.Play))
			this.qtp.Play();
	},
	
	stop: function() {
		this.emulatedStatus = 'Stopped';
		if ('undefined' != typeof(this.qtp)) {
			this.qtp.Rewind();
			this.qtp.Stop();
		}
	},
	
	pause: function() {
		this.emulatedStatus = 'Paused';
		this.qtp.Stop();
	},

	getVolume: function() {
		return this.qtp.GetVolume();
	},
	
	setVolume: function (vol) {
		if (vol < 0) {
			vol = 0;
		} else if (vol > 100) {
			vol = 100;
		} else {
			vol = parseInt(vol);
		}
		this.qtp.SetVolume(vol);
	},	
	
	fastForward: function () {
		this.emulatedStatus = 'Seeking';
		this.qtp.SetRate(2);
	},
	
	fastReverse: function () {
		this.emulatedStatus = 'Seeking';
		this.qtp.SetRate(-2);
	},	
	
	getPluginInfo: function() { return "QuickTime " + this.qtp.GetQuickTimeVersion(); },
	
	getPluginStatus: function() {
		playState = this.qtp.GetPluginStatus();
		if ('Complete' == playState) {
			if (this.qtp.GetEndTime() == this.qtp.GetTime()) {
				playState = 'End of stream';
			} else {
				playState = this.emulatedStatus;
			}
		} else {
			if (playState.indexOf('Error') != -1) {
				playState = 'Error';
			} else {
				if ('Waiting' == playState) {
					playState = 'Connecting';
				} else {
					playState = 'Buffering';
				}
			}
		}
		return playState;
	},

    getCurrentCapabilities: function() {
      return $H({
        play: true, pause: true, stop: true,
        fastForward: true, fastReverse: true,
        getVolume: true, setVolume: true });
    }
});

