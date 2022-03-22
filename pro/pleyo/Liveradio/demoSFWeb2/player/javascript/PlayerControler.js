// Initialisation lib audio
var selected_preset = "";
var flashPlayer;
stats_commit_period = 15*60;
presets = null;
audio_player = null;
loaded_presets = 0;
sel_preset = 0;
sel_title = '';
var calculLoad = 0;

// State of player
play_state = "stop";
is_pausable = false;
hasAssets = false;

// Initialisation Of Presets
var presetTable = $H({});
var cover_urls = [];
var tooltips = [];
var default_cover = 'player/images/radio5.jpg';

function on_audiolib_event(event_type, attribute, url) {
  if(event_type == 'missingPlugin')
    	alert('missing plugin: ' + attribute + '. This plugin can be found at: ' + url);
	else if(event_type == 'pluginStatus') {
		//alert(event_type +"/"+ attribute+"/"+ url);
	}
		
}

function starto() {
  presets = new presets_set(loaded_presets, stats_commit_period);
  audio_player = AudioLib.getPlayer(on_audiolib_event);
}

function test_UpdateProductInfo(title, status, bitrate, cover) {
  var res = get_flash().UpdateProductInfo(
      title, status, bitrate, cover);
}

function get_flash() {
  if(navigator.appName.indexOf('Microsoft') != -1)
    return window['my_flash'];
  else
    return document['my_flash'];
}

function OnPlayerReady() {

}

function OnButtonPressed(button_name) {

var status_text = "";
selected_preset = button_name;
	if (is_pausable) {
		status_text = "pause";
	} else {
		status_text = "stop";
	}

	if (button_name == "play_pause_stop") {
		if (play_state == "play") {
			test_ChangePlayState(status_text);
			audio_player.play();	
		} else {
			test_ChangePlayState("play");
			audio_player.stop();
		}		
	} 
}


function OnPresetSelection(n) {
//var myAsset = new Asset(presetTable[n].getUrl(),presetTable[n].getCodec());
audio_player.setUrl(presetTable[n].getUrl(), presetTable[n].getCodec());
//audio_player.setAsset(presetTable[n].getUrl(), presetTable[n].getCodec())
audio_player.play();
test_UpdateProductInfo(presetTable[n].getTitle(), 
	'', '', presetTable[n].getCover());

/*
 	sel_preset = presets.get_item(n);
 	if(sel_preset) {
 		audio_player.setAsset(sel_preset.get_asset());
		sel_title = sel_preset.get_title();
		status = audio_player.getPluginStatus();		
		test_UpdateProductInfo(sel_title, status, status, "128k");

		audio_player.play();
		audio_player.setVolume(10);
		
		//audio_player.setUrl("http://streaming.radio.rtl.fr:80/rtl-1-44-96", "mp3");
		//test_ChangePlayState();
		//alert(audio_player.getPluginStatus());
		//OnVolumeChange(5);
	
			
	//var ass = new Asset("http://64.236.34.106:80/stream/1006", "mp3");
	//alert(sel_preset.get_codec() +"/"+ sel_preset.has_url() );
	// simulate a player restart: this will trigger a stop/play
	//play_button.depress(true);
	//play_button.press(true);	
	//}
*/

}

function OnVolumeChange(n) {
	audio_player.setVolume(n);
}

function test_ChangePlayState(state) {
  var res = get_flash().ChangePlayState(state);
  if (state == "play") {
  	play_state = state;
  } else if (state == "stop") {
    play_state = state;
  } else if (state == "pause") {
    play_state = state;
  }

}

function test_ProductDroppedAt(url, x, y) {
	var num_preset = get_flash().ProductDroppedAt(url, x, y, "tooltip");
	return num_preset;
}

function test_ProductDraggedAt(url, x, y) {
  	var num_preset = get_flash().ProductDraggedAt(url, x, y, "tooltip");
}

function playRadios(url, codec, title, bitrate, cover) {
 	audio_player.setUrl(url, codec);
 	audio_player.play();
 	test_UpdateProductInfo(title, audio_player.getPluginStatus(), bitrate, cover);
 	test_ChangePlayState("stop");
}

function createPreset(numPreset, title, url, cover, codec, bitrate) {
  presetTable[numPreset] = new infoPreset(title, url, cover, codec, bitrate);
}

function pushPresetToFlash() {
 	//get_flash().InitPresets(default_cover, cover_urls, tooltips);
}

function loadCalcul() {
	calculLoad = 1;
}
