// Initialisation lib audio
var selected_preset = "";
var flashPlayer;
stats_commit_period = 15*60;
presets = null;
audio_player = null;
loaded_presets = 0;
sel_preset = 0;
sel_title = '';
var calculBodyLoad = 0;
var plugStatus = "initiate";
var plugUrl = null;
var plugAttribute = null;
var ieCheck = 0;
var currentPlayingSite;
// State of player
play_state = "stop";
hasAssets = false;
var safariCheck = navigator.userAgent.indexOf('Safari');
// Initialisation Of Presets
var presetTable = $H({});
var cover_urls = [];
var tooltips = [];
var default_cover = 'player/images/radio5.jpg';
var assetPlayTable = $H({});
var isMute = false;
var ctimer;
var selectSong = "select a content to play";

function checkStatus() {/*
	if (plugStatus == 'missingPlugin' || plugStatus == 'notSupportedProduct') {		
		checkPluginStatusJSNI();
		return false;
	} else */ return true;
}

function muteVolume() {
	if (checkStatus()) {
		if (isMute) {
			document.getElementById("playerMute").src="img/img_us/bt_volume_on.png";
			get_flash().ChangeVolumeState(get_flash().getCurrentVolume());
			isMute = false;
		} else {
			document.getElementById("playerMute").src="img/img_us/bt_volume_off.png";
			get_flash().ChangeVolumeState(0);
			isMute = true;
		}
	}
}

function setAllLogo(elem, linko, num) {
	document.getElementById("playerBook").src="img/img_us/bt_adtrack_off.png"
	document.getElementById("playerInfo").src="img/img_us/bt_info_off.png"
	document.getElementById("playerRate").src="img/img_us/bt_rate_off.png"
	if (document.getElementById(elem) != null && diplayLogoJSNI(num)) {
		document.getElementById(elem).src = linko;
	}
}

function on_audiolib_event(event_type, attribute, url) {
		if (event_type == 'missingPlugin' || event_type == 'notSupportedProduct') {
			 plugStatus =  event_type;
			 plugAttribute = attribute;
			 plugUrl = url;
			 try {
			 	get_flash().UpdateStatusLine('Missing::' + attribute);
			 } catch (err) {}
		} else if (plugStatus != 'missingPlugin'){
			 	try {
					get_flash().UpdateStatusLine(attribute);
				} catch (err) {}
		} else {
			plugStatus = "initiate";
			plugAttribute = null;
			plugUrl = null;
		}
}


function setInformationPlay(idNumber, url, codec, title, bitrate, cover, infoDisplay, site, country, genre) {

	currentPlayingSite = site;
	if (currentPlayingSite == "noneWeb") {
		webo = false;
	} else {
		webo = true;
	}
	//setProductCapabilities();
	if (url.length > 0) {
		plugStatus = "initiate";
		audio_player.setNewAsset(new ProductAsset(codec, url, infoDisplay, idNumber));
		plugAttribute = null;
		plugUrl = null;
		audio_player.attemptToPlay();	
		if (ctimer != null)  clearTimeout(ctimer);
		if (plugStatus == 'missingPlugin' || plugStatus == 'notSupportedProduct') {
			checkPluginStatusJSNI();
			setStatus(false);
		} else {
			setLimitPlay();
		}
	} else {
		audio_player.setNewAsset(null);
		setStatus(false);
	}
		test_UpdateProductInfo(title, "", bitrate, cover);
		get_flash().UpdateInformation(site, country, genre);
}

// Play a radio and set the information of the player
function playRadios(isComposite, idProduct) {

	if (isComposite) {
		skip = true;
		paus = true;
		audio_player.setCompositeProduct(idProduct, 0, 1);
	} else {
		skip = false;
		paus = false;
		audio_player.setAtomicProduct(idProduct[0]);
	}
	setProductCapabilities();
	setStatus(true);
	if (skip == true) overBackFwd(true, 1);
}

function setCompositeTitle(namo) {
	get_flash().setTitle(namo);
}

function resetAllPlayer(messag) {
	test_UpdateProductInfo(messag, "", "", "");
	setStatus(false);
}

// Apply all the preset to the player
function pushPresetToFlash() {
	js_player = new jsPlayer();
	
	skip = false;
	infor = false;

	audio_player = new AudiolibController(get_flash(),  getLanguageJSNI());
	audio_player.getAudioLib(on_audiolib_event);
	
	get_flash().setLibAudio(audio_player);	
	get_flash().ChangePlayState("pause");
	get_flash().ChangeVolumeState(5);
	setProductCapabilities();
		
	if (plugStatus == 'missingPlugin') {
    	try {
          get_flash().UpdateStatusLine('Missing::' + plugAttribute);
        } catch (err) { }
	}

}

// Switch the play or stop, setting a state
function setStatus(toPlay) {
	if (toPlay) {
		play_state = "stop";
		if (paus) {
			get_flash().ChangePlayState("pause");
		} else {	
			get_flash().ChangePlayState("stop");
		}
	} else {
		if (paus == true) {
			audio_player.pause();
		} else {
			audio_player.stop();
		}
		play_state = "play";
		get_flash().ChangePlayState("play");
	}
}

function buttonOver(isOver) {
	if (isOver) {
		if (play_state == "stop") {
			document.getElementById("playerPlay").src = 'img/img_us/bt_pause_off.png';
		} else {
			document.getElementById("playerPlay").src = 'img/img_us/bt_play_off.png';
		}
	} else {
		if (play_state == "stop") {
			document.getElementById("playerPlay").src = 'img/img_us/bt_pause_roll.png';
		} else {
			document.getElementById("playerPlay").src = 'img/img_us/bt_play_on.png';
		}
	}
}

// When clicking on a player button
function OnButtonPressed(button_name) {
	if (checkStatus()) {
		if (audio_player.getAsset() != null) {
			if (button_name == "perso") {
				checkWassupJSNI();
			} else if (button_name == "back" && get_flash().isComposite()) {
				audio_player.previous();
			} else if (button_name == "next" && get_flash().isComposite()) {
				audio_player.next();
			} else if (button_name == "play_pause_stop") {
				playOrStop();
			} else if (button_name== "home_page" && currentPlayingSite != "noneWeb") {
				open(currentPlayingSite, '_blank');
			}
		} else {
			alert(selectSong);	
		}
	}
}

// Switch the play or stop, without having to know what is the state
function playOrStop() {
	if (play_state == "play") {
		setStatus(true);
		audio_player.play();
		setLimitPlay();
	} else {
		setStatus(false);
	}	
}

function setLimitPlay() {
	ctimer = setTimeout(function(){
		if (play_state == "stop") {
			//if (!checkAuthentJSNI() || !hasDeviceJSNI()) {
				//setStatus(false);	
			//}
		}
	},30000);
}

// Calcul the load, when the body is ready
function loadCalcul() {
	calculBodyLoad = 1;
}

// When drop a preset onto the player
function test_ProductDroppedAt(url, tooltip, x, y) {
	//var num_preset = get_flash().ProductDroppedAt(url, x, y, tooltip);
	//return num_preset;
	return 0;
}

// When drag a product over the player
function test_ProductDraggedAt(url, x, y) {
  	//var num_preset = get_flash().ProductDraggedAt(url, x, y, "tooltip");
}

// When the player volume is changing
function OnVolumeChange(n) {
	get_flash().ChangeVolumeState(n);
}

// Get the current Flash Player
var js_player;
function get_flash() {
	return js_player;
}

// Set the visual information to show on the player
var skip = true, paus = true, webo = false, infor = true, persoa = true, buya = true;
function setProductCapabilities() {
	get_flash().SetProductCapabilities(skip, paus, webo, infor, persoa, buya);
}

// Update all infos of the player
function test_UpdateProductInfo(title, status, bitrate, cover) {
  var res = get_flash().UpdateProductInfo(title, status, bitrate, cover);
}

function refreshTheFrame() {

}

function getParame(strParamName) {
	var strReturn = "";
  	var strHref = window.location.search;
  	if ( strHref.indexOf("?") > -1 ){
    	var strQueryString = strHref.substr(strHref.indexOf("?")).toLowerCase();
    	var aQueryString = strQueryString.split("&");
    	for ( var iParam = 0; iParam < aQueryString.length; iParam++ ){
      		if (aQueryString[iParam].indexOf(strParamName.toLowerCase() + "=") > -1 ){
        		var aParam = aQueryString[iParam].split("=");
        		strReturn = aParam[1];
        		break;
      		}
    	}
  	}
  	return unescape(strReturn);
}

function loadFlag() {
	if (getParame("locale") != null 
		&& (getParame("locale")=="en" || getParame("locale") == "fr"
		||getParame("locale") == "es" || getParame("locale")=="gb")) {
		if(getParame("locale")=="en"){
			currentFlag = "flagUs";
			document.getElementById("flagUs").src='img/img_us/flag_us_on.gif';
		} 
		if(getParame("locale")=="fr") {
			currentFlag = "flagFr";
			document.getElementById("flagFr").src='img/img_us/flag_fr_on.gif';	
		}
		if(getParame("locale")=="es") {
			currentFlag = "flagEs";
			document.getElementById("flagEs").src='img/img_us/flag_es_on.gif';
		} 
		if(getParame("locale")=="gb") {
			currentFlag = "flagGb";
			document.getElementById("flagGb").src='img/img_us/flag_uk_on.gif';
		} 
	} else 	{
		currentFlag = "flagUs";
		document.getElementById("flagUs").src='img/img_us/flag_us_on.gif';	
	}
}
var currentFlag = "flagUs";

function overFlag(elem, langa, over) {
	if (currentFlag != elem) {
		if (over) document.getElementById(elem).src = "img/img_us/flag_"+langa+"_on.gif";
			else  document.getElementById(elem).src = "img/img_us/flag_"+langa+"_off.gif";
	}
}

function overBackFwd(isIn, num) {
		if (skip == true) {
			if (isIn) {
				if (num == 1) document.getElementById("playerPrevious").src ="img/img_us/bt_back_off.png";
				if (num == 2) document.getElementById("playerNext").src ="img/img_us/bt_fwd_off.png";
			} else {
				if (num == 1 && audio_player.notFirst()) document.getElementById("playerPrevious").src ="img/img_us/bt_back_roll.png";
				if (num == 2 && audio_player.notLast()) document.getElementById("playerNext").src ="img/img_us/bt_fwd_roll.png";
			}
		}
}