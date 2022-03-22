host_url = 'http://fxtel.fr/~laurent/liveradio/';
stats_commit_period = 15*60;
preset_group = null;
preset_buttons = $H({});
presets = null;
lcd = null;
play_button = null;
audio_player = null;
loaded_presets = 0;
sel_preset = 0;
sel_title = '';

function spy(msg) {
/*
	var contents = $('debug').innerHTML;
	contents += msg + '<br>';
	$('debug').innerHTML = contents;
*/
}

function on_preset_button() {
	selected_button = preset_group.get_selected();
	spy('on_preset_button(' + selected_button + ')');
	
	selected_index = preset_group.get_selected_index();
	sel_preset = presets.get_item(selected_index);
	
	if(sel_preset) {
		sel_title = sel_preset.get_title();
		lcd.set_line(1, 'selection: ' + sel_title);
		audio_player.setAsset(sel_preset.get_asset());	
	
		// simulate a player restart: this will trigger a stop/play
		play_button.depress(true);
		play_button.press(true);
	} else
		lcd.set_line(1, 'no presets');
}

function on_home_button() {
	lcd.set_line(2, 'Opening http://liveradio.orange.fr');
	window.open( "http://liveradio.orange.fr" )
	get_datetime();
}

function on_favorite_button() {
	lcd.set_line(2, audio_player.getPluginStatus());
}

function on_volume_change(val) {
  lcd.set_line(0, 'Volume: ' + val + '%');
  audio_player.setVolume(val);
}

function on_play_button(triggering_button, new_state) {
	if(new_state) {		
		spy('play()');
		audio_player.play();
		presets.notify_play();
	} else {
		spy('stop()');
	  audio_player.stop();
	  presets.notify_stop();
	}
}

function on_audiolib_event(event_type, attribute, url) {
	spy('listener: ' + event_type + ', ' + attribute + ', ' + url);
  if(event_type == 'missingPlugin')
    alert('missing plugin: ' + attribute + '. This plugin can be found at: ' + url);
	else if(event_type == 'pluginStatus')
		lcd.set_line(2, attribute);
}

function load_preset() {
	loaded_presets++;
	lcd.set_line(0, 'loading: ' + loaded_presets + '/8');
}

function liveradio_startup() {
  $(document.body).setStyle({
	'margin-left': '0px',
	'margin-right': '0px',
	'margin-top': '0px',
	'margin-bottom': '0px',
	background: "url('" + host_url + "img_small/liveradio.png') top left no-repeat"
  });

  presets = new presets_set(load_preset, stats_commit_period);

  preset_group = new radio_group(on_preset_button);
  preset_buttons[1] = new radio_button(
    'preset_1', host_url + 'img_small/norm/Preset_1.png', host_url + 'img_small/over/Preset_1.png', host_url + 'img_small/down/Preset_1.png',
    35, 127, 23, 20, preset_group);
  preset_buttons[2] = new radio_button(
    'preset_2', host_url + 'img_small/norm/Preset_2.png', host_url + 'img_small/over/Preset_2.png', host_url + 'img_small/down/Preset_2.png',
    59, 127, 23, 20, preset_group);
  preset_buttons[3] = new radio_button(
    'preset_3', host_url + 'img_small/norm/Preset_3.png', host_url + 'img_small/over/Preset_3.png', host_url + 'img_small/down/Preset_3.png',
    82, 127, 23, 20, preset_group);
  preset_buttons[4] = new radio_button(
    'preset_4', host_url + 'img_small/norm/Preset_4.png', host_url + 'img_small/over/Preset_4.png', host_url + 'img_small/down/Preset_4.png',
    106, 127, 22, 20, preset_group);
  preset_buttons[5] = new radio_button(
    'preset_5', host_url + 'img_small/norm/Preset_5.png', host_url + 'img_small/over/Preset_5.png', host_url + 'img_small/down/Preset_5.png',
    202, 127, 20, 20, preset_group);
  preset_buttons[6] = new radio_button(
    'preset_6', host_url + 'img_small/norm/Preset_6.png', host_url + 'img_small/over/Preset_6.png', host_url + 'img_small/down/Preset_6.png',
    226, 127, 20, 20, preset_group);
  preset_buttons[7] = new radio_button(
    'preset_7', host_url + 'img_small/norm/Preset_7.png', host_url + 'img_small/over/Preset_7.png', host_url + 'img_small/down/Preset_7.png',
    249, 127, 20, 20, preset_group);
  preset_buttons[8] = new radio_button(
    'preset_8', host_url + 'img_small/norm/Preset_8.png', host_url + 'img_small/over/Preset_8.png', host_url + 'img_small/down/Preset_8.png',
    272, 127, 20, 20, preset_group);

  presets.push_titles(preset_buttons);

  home_button = new push_button(
    'home_button', host_url + 'img_small/norm/Home.png', host_url + 'img_small/over/Home.png', host_url + 'img_small/down/Home.png',
    133, 127, 29, 20, on_home_button);
  home_button.set_title('Open liveradio website');

  favorite_button = new push_button(
    'favorite_button', host_url + 'img_small/norm/Favourite.png', host_url + 'img_small/over/Favourite.png', host_url + 'img_small/down/Favourite.png',
    168, 127, 29, 20, on_favorite_button);
  favorite_button.set_title('Set as favorite_button');

  play_button = new toggle_button(
    'play_button', host_url + 'img_small/norm/LeftBloc_Play_norm.png', host_url + 'img_small/over/LeftBloc_Play_over.png', host_url + 'img_small/down/LeftBloc_Play_down.png',
    102, 80, 42, 38, on_play_button);
    
  volume_button = new rotating_button(
    'volume',
    host_url + 'img_small/norm/Volume.png', host_url + 'img_small/over/Volume.png', host_url + 'img_small/down/Volume.png', host_url + 'img_small/volume_indicator.png',
    host_url + 'img_small/liveradioMask.png',
    181, 73, 50, 50, on_volume_change);
    
  lcd = new lcd_screen('lcd', host_url + 'img_small/screen.png', 122, 23, 82, 38, 11, 3);
  
  ticker = new lcd_screen('ticker', host_url + 'img_small/screen.png', 59, 151, 210, 12, 33, 1);
  get_ticker_info(function(info) { ticker.set_line(0, info); });
  
  audio_player = AudioLib.getPlayer(on_audiolib_event);
}
