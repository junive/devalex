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
