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
};CodecTable = $H({
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
var Casing = Class.create();
Casing.prototype = Object.extend(new AbstractPlugin(), {
  initialize: function(eventHandler) {
  	// browser and plugin detection
    detect = new Detect();
    this.browser = detect.browser;
    this.browserVersion = detect.version;
    this.OS = detect.OS;
    this.plugins = new Plugins();
    this.eventHandler = eventHandler;
    this.asset = null;
    this.previous_pstatus = null;
    this.attach_plugins();
    this.timeout = null;
    new PeriodicalExecuter(
      this.status_poller.bindAsEventListener(this),
      audiolib_latency);
  },
  
  attach_plugins: function() {
  	this.wmqtp = null;
  	switch(this.OS) {
  		case 'Windows':  		
  			switch(this.browser) {
  				case 'Firefox':
  					if(this.plugins.WMPFirefoxDetected)
  						this.wmqtp = new WMP();
  					else
  						report_missing_plugin('wmp_firefox', this.eventHandler);
  					break;
  					
  				default:
  					this.wmqtp = new WMP();  				
  			}
  			break;
  			
  		case 'Mac':  		
  			switch(this.browser) {
  				case 'Safari':
  					if(this.plugins.QTDetected)
  						this.wmqtp = new QTP();
  					else
  						report_missing_plugin('qt', this.eventHandler);
  					break;
  				default:
  					this.wmqtp = new WMP();
  			}
  			break;
  			
  		case 'Linux':
  			if(this.plugins.WMDetected)
  				this.wmqtp = new WMP_Linux();
  			else
  				report_missing_plugin('wmp', this.eventHandler);
  			break;
  			
  		default:
  			this.wmptp = new WMP();
  	}
  	
		this.rp = this.plugins.RealDetected ? new RPL() : null;		    
    this.current_player = this.wmqtp;
  },

  setAsset: function(asset) {
    this.asset = asset;
    this.use_next_url();
  },
  
  setUrl: function(url, codec) {
  	this.stop();

  	switch (codec) {
  		case 'real':
  			if (null != this.rp) {
  				this.current_player = this.rp;
  				this.current_player.setUrl(url);
  			} else {
  			  report_missing_plugin('rp', this.eventHandler);

  			}
  		break;	
  		
  		case 'mp3':
  		case 'wma':
  		case 'asf':
  			if (null != this.wmqtp) {
  				this.current_player = this.wmqtp;
  				this.current_player.setUrl(url);
  			} else
  			  report_missing_plugin('wmp', this.eventHandler);
  		break;
  		
  		default:
  		  if (this.eventHandler)
  		   this.eventHandler('pluginStatus', 'UnsupportedCodec', null);
  	}  	
  },
  
  get_timestamp: function() {
    return (new Date()).getTime();
  },
  
  start_timeout: function() {
    this.timeout = this.get_timestamp();
  },
  
  stop_timeout: function() {
    this.timeout = null;
  },
  
  play: function() {    
    this.current_player.play();
    this.start_timeout();
  },

  pause: function() {
    this.current_player.pause();
    this.stop_timeout();
  },

  stop: function() {
    this.current_player.stop();
    this.stop_timeout();
  },

  fastForward: function() {
    this.current_player.fastForward();
  },

  fastReverse: function() {
    this.current_player.fastReverse();
  },

  getVolume: function() {
    return this.current_player.getVolume();
  },
  
  setVolume: function(vol) {
    this.wmqtp.setVolume(vol);
    this.rp.setVolume(vol);
  },

  getPluginInfo: function() {
    return this.current_player.getPluginInfo();
  },

  getPluginStatus: function() {
  	pstatus = 'Error';
  	try {
  	  if(!this.current_player)
  	    pstatus = 'NoPlayer';
  	  else if ('' == this.current_player.url)
  		  pstatus = 'Idle';
  		else
  		  pstatus = this.current_player.getPluginStatus();
  	} catch(err) {  		
  	}

  	return pstatus;
  },
  
  getCurrentCapabilities: function() {
    this.current_player.getCurrentCapabilities();
  },
  
  status_poller: function() {
    pstatus = this.getPluginStatus();
    
    // use the event to implement the asset logic.
    // i.e. fallback on the next url when a server doesn't reply
 		this.asset_watchdog(pstatus);
 		
 		// report pstatus changes to the client's listener
  	if (this.eventHandler && pstatus != this.previous_pstatus)
  		this.eventHandler('pluginStatus', pstatus, null);
    this.previous_pstatus = pstatus;
  },
  
  use_next_url: function() {
	  if(this.asset && this.asset.has_url()) {
	    next_url = this.asset.next_url();
	    codec = this.asset.get_codec();
	    
	    //spy('use next url: ' + next_url + ' (' + codec + ')');
  		this.setUrl(next_url, codec);
  		return true;
	  } else {
	    this.asset = null;
	    return false;
	  }
  },
  
  asset_watchdog: function(pstatus) {
    // did we reach timeout ?
    if(this.timeout && this.get_timestamp() - this.timeout > audiolib_timeout*1000) {
      //spy('timeout: ' + audiolib_timeout);
      // a connection timeout occured, switch to the next url
      this.stop_timeout();
      if (this.eventHandler)
  		  this.eventHandler('pluginStatus', 'TimeOut', null);

      if (this.use_next_url())
     		this.play();
    }
    
    // interrupt the timeout event
    if (pstatus == 'Playing') {
      this.stop_timeout();
    }
    
  	// if an error occured while connecting to an asset
  	// use the next url if possible
  	if (pstatus == 'Error' && this.asset) {
  	  if (this.use_next_url())
  	    this.play();
  	}
  }, 
  
  getMediaInfo: function() {
  	this.current_player.getMediaInfo();
  }
});
var audiolib_latency = 0.2;
var audiolib_timeout = 10;
// Based on Peter-Paul Koch browser detection script (http://www.quirksmode.org/js/detect.html)
var Detect = Class.create();
Detect.prototype = {
	initialize: function() {
		// detecting browser, version & OS 
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
		this.plugins = new Plugins();
	},
	
	searchString: function (data) {
		for (var i=0;i<data.length;i++)	{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			}
			else if (dataProp)
				return data[i].identity;
		}
	},
	
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},
	
	dataBrowser: [
		{ 	string: navigator.userAgent,
			subString: "OmniWeb",
			versionSearch: "OmniWeb/",
			identity: "OmniWeb"
		},
		{
			string: navigator.vendor,
			subString: "Apple",
			identity: "Safari"
		},
		{
			prop: window.opera,
			identity: "Opera"
		},
		{
			string: navigator.vendor,
			subString: "iCab",
			identity: "iCab"
		},
		{
			string: navigator.vendor,
			subString: "KDE",
			identity: "Konqueror"
		},
		{
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "Firefox"
		},
		{
			string: navigator.vendor,
			subString: "Camino",
			identity: "Camino"
		},
		{		// for newer Netscapes (6+)
			string: navigator.userAgent,
			subString: "Netscape",
			identity: "Netscape"
		},
		{
			string: navigator.userAgent,
			subString: "MSIE",
			identity: "Explorer",
			versionSearch: "MSIE"
		},
		{
			string: navigator.userAgent,
			subString: "Gecko",
			identity: "Mozilla",
			versionSearch: "rv"
		},
		{ 		// for older Netscapes (4-)
			string: navigator.userAgent,
			subString: "Mozilla",
			identity: "Netscape",
			versionSearch: "Mozilla"
		}
	],
	
	dataOS : [
		{
			string: navigator.platform,
			subString: "Win",
			identity: "Windows"
		},
		{
			string: navigator.platform,
			subString: "Mac",
			identity: "Mac"
		},
		{
			string: navigator.platform,
			subString: "Linux",
			identity: "Linux"
		}
	]
};

function report_missing_plugin(plugin, listener) {
  var name = 'uknown plugin';
  var url = 'unknown location';
  switch(plugin) {
    case 'wmp':
      name = 'Windows Media Player';
      url = 'http://www.microsoft.com/windows/windowsmedia/download/AllDownloads.aspx?displang=en&qstechnology=';
      break;
     case 'wmp_firefox':
     	name = 'Windows Media Player Firefox Plugin';
     	url = 'http://port25.technet.com/pages/windows-media-player-firefox-plugin-download.aspx';
     	break;
    case 'rp':
      name = 'Real Player';
      url = 'http://www.real.com/R/RDX.fail-click.R/software-dl.real.com/200592664f2d26cddb05/windows/mrkt/R30EUD/RealPlayer10-5GOLD.exe';
      break;
    case 'qt':
      name = 'QuickTime';
      url = 'http://www.apple.com/quicktime/download/';
      break;
  }
  
  if (listener)
    listener('missingPlugin', name, url);
}

var detectableWithVB = false;
var pluginFound = false;


function canDetectPlugins() {
    if( detectableWithVB || (navigator.plugins && navigator.plugins.length > 0) ) {
	return true;
    } else {
	return false;
    }
}

function detectFlash() {
    pluginFound = detectPlugin('Shockwave','Flash'); 
    if(!pluginFound && detectableWithVB) {
	pluginFound = detectActiveXControl('ShockwaveFlash.ShockwaveFlash.1');
    }
    return pluginFound;
}

function detectDirector() { 
    pluginFound = detectPlugin('Shockwave','Director'); 
    if(!pluginFound && detectableWithVB) {
	pluginFound = detectActiveXControl('SWCtl.SWCtl.1');
    }
    return pluginFound;
}

function detectQuickTime() {
    pluginFound = detectPlugin('QuickTime');
    if(!pluginFound && detectableWithVB) {
	pluginFound = detectQuickTimeActiveXControl();
    }
    return pluginFound;
}

function detectReal() {
    pluginFound = detectPlugin('RealPlayer');
    if(!pluginFound && detectableWithVB) {
	pluginFound = (detectActiveXControl('rmocx.RealPlayer G2 Control') ||
		       detectActiveXControl('RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)') ||
		       detectActiveXControl('RealVideo.RealVideo(tm) ActiveX Control (32-bit)'));
    }	
    return pluginFound;
}

function detectWindowsMedia() {
    pluginFound = detectPlugin('Windows Media');
    if(!pluginFound && detectableWithVB) {
	pluginFound = detectActiveXControl('MediaPlayer.MediaPlayer.1');
    }
    return pluginFound;
}

function detectActiveX() {
	pluginFound = (window.ActiveXObject || window.GeckoActiveXObject);
	return pluginFound;
}

function detectActiveXWM() {
	pluginFound = false;
	try {
		if (player = new ActiveXObject("WMPlayer.OCX.7")) {
			pluginFound = true;
		} else if (player = new GeckoActiveXObject("WMPlayer.OCX.7")) {
			pluginFound = true;
		}
	} catch (err) {
		
	}
	return pluginFound;
}

function detectWMPlayerFirefoxPlugin() {
	pluginFound = detectPlugin('Windows Media Player Firefox Plugin');
	return pluginFound;
}

function detectPlugin() {
    var daPlugins = detectPlugin.arguments;
    var pluginFound = false;
    if (navigator.plugins && navigator.plugins.length > 0) {
	var pluginsArrayLength = navigator.plugins.length;
	for (pluginsArrayCounter=0; pluginsArrayCounter < pluginsArrayLength; pluginsArrayCounter++ ) {
	    var numFound = 0;
	    for(namesCounter=0; namesCounter < daPlugins.length; namesCounter++) {
		if( (navigator.plugins[pluginsArrayCounter].name.indexOf(daPlugins[namesCounter]) >= 0) || 
		    (navigator.plugins[pluginsArrayCounter].description.indexOf(daPlugins[namesCounter]) >= 0) ) {
		    numFound++;
		}   
	    }
	    if(numFound == daPlugins.length) {
		pluginFound = true;
		break;
	    }
	}
    }
    return pluginFound;
}

if ((navigator.userAgent.indexOf('MSIE') != -1) && (navigator.userAgent.indexOf('Win') != -1)) {
    document.writeln('<script language="VBscript">');

    document.writeln('\'do a one-time test for a version of VBScript that can handle this code');
    document.writeln('detectableWithVB = False');
    document.writeln('If ScriptEngineMajorVersion >= 2 then');
    document.writeln('  detectableWithVB = True');
    document.writeln('End If');

    document.writeln('\'this next function will detect most plugins');
    document.writeln('Function detectActiveXControl(activeXControlName)');
    document.writeln('  on error resume next');
    document.writeln('  detectActiveXControl = False');
    document.writeln('  If detectableWithVB Then');
    document.writeln('     detectActiveXControl = IsObject(CreateObject(activeXControlName))');
    document.writeln('  End If');
    document.writeln('End Function');

    document.writeln('\'and the following function handles QuickTime');
    document.writeln('Function detectQuickTimeActiveXControl()');
    document.writeln('  on error resume next');
    document.writeln('  detectQuickTimeActiveXControl = False');
    document.writeln('  If detectableWithVB Then');
    document.writeln('    detectQuickTimeActiveXControl = False');
    document.writeln('    hasQuickTimeChecker = false');
    document.writeln('    Set hasQuickTimeChecker = CreateObject("QuickTimeCheckObject.QuickTimeCheck.1")');
    document.writeln('    If IsObject(hasQuickTimeChecker) Then');
    document.writeln('      If hasQuickTimeChecker.IsQuickTimeAvailable(0) Then ');
    document.writeln('        detectQuickTimeActiveXControl = True');
    document.writeln('      End If');
    document.writeln('    End If');
    document.writeln('  End If');
    document.writeln('End Function');

    document.writeln('</scr' + 'ipt>');
}

var Plugins = Class.create();
Plugins.prototype = {
 initialize: function () {	
 	this.canDetectPlugins = canDetectPlugins();
 	this.FlashDetected = (this.canDetectPlugins && detectFlash());
 	this.DirectorDetected = (this.canDetectPlugins && detectDirector());
 	this.QTDetected = (this.canDetectPlugins && detectQuickTime());
 	this.RealDetected = (this.canDetectPlugins && detectReal());
 	this.WMDetected = (this.canDetectPlugins && detectWindowsMedia());
 	this.ActiveXDetected = detectActiveX();
 	this.ActiveXWMDetected = (this.ActiveXDetected && detectActiveXWM());
 	this.WMPFirefoxDetected = (this.canDetectPlugins && detectWMPlayerFirefoxPlugin());
 }
}
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

var AudioLib = {
  AudioPlayer: null,
  
  getPlayer: function(eventHandler) {
    if(!AudioLib.AudioPlayer)
      AudioLib.AudioPlayer = new Casing(eventHandler);
    return AudioLib.AudioPlayer;
  }
};



