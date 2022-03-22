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
	var contents = $('debug').innerHTML;
	contents += msg + '<br>';
	$('debug').innerHTML = contents;
}

function on_preset_button() {
	selected_button = preset_group.get_selected();
	spy('on_preset_button(' + selected_button + ')');
	
	selected_index = preset_group.get_selected_index();
	
	if(sel_preset) {
		sel_preset = presets.get_item(selected_index);
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
	background: "url('img/liveradio.png') top left no-repeat"
  });

  presets = new presets_set(load_preset, stats_commit_period);

  preset_group = new radio_group(on_preset_button);
  preset_buttons[1] = new radio_button(
    'preset_1', 'img/norm/Preset_1.png', 'img/over/Preset_1.png', 'img/down/Preset_1.png',
    43, 156, 28, 25, preset_group);
  preset_buttons[2] = new radio_button(
    'preset_2', 'img/norm/Preset_2.png', 'img/over/Preset_2.png', 'img/down/Preset_2.png',
    72, 156, 28, 25, preset_group);
  preset_buttons[3] = new radio_button(
    'preset_3', 'img/norm/Preset_3.png', 'img/over/Preset_3.png', 'img/down/Preset_3.png',
    101, 156, 28, 25, preset_group);
  preset_buttons[4] = new radio_button(
    'preset_4', 'img/norm/Preset_4.png', 'img/over/Preset_4.png', 'img/down/Preset_4.png',
    130, 156, 27, 25, preset_group);
  preset_buttons[5] = new radio_button(
    'preset_5', 'img/norm/Preset_5.png', 'img/over/Preset_5.png', 'img/down/Preset_5.png',
    249, 156, 25, 25, preset_group);
  preset_buttons[6] = new radio_button(
    'preset_6', 'img/norm/Preset_6.png', 'img/over/Preset_6.png', 'img/down/Preset_6.png',
    277, 156, 25, 25, preset_group);
  preset_buttons[7] = new radio_button(
    'preset_7', 'img/norm/Preset_7.png', 'img/over/Preset_7.png', 'img/down/Preset_7.png',
    306, 156, 25, 25, preset_group);
  preset_buttons[8] = new radio_button(
    'preset_8', 'img/norm/Preset_8.png', 'img/over/Preset_8.png', 'img/down/Preset_8.png',
    334, 156, 25, 25, preset_group);

  presets.push_titles(preset_buttons);

  home_button = new push_button(
    'home_button', 'img/norm/Home.png', 'img/over/Home.png', 'img/down/Home.png',
    163, 156, 36, 25, on_home_button);
  home_button.set_title('Open liveradio website');

  favorite_button = new push_button(
    'favorite_button', 'img/norm/Favourite.png', 'img/over/Favourite.png', 'img/down/Favourite.png',
    206, 156, 36, 25, on_favorite_button);
  favorite_button.set_title('Set as favorite_button');

  play_button = new toggle_button(
    'play_button', 'img/norm/LeftBloc_Play_norm.png', 'img/over/LeftBloc_Play_over.png', 'img/down/LeftBloc_Play_down.png',
    125, 98, 51, 47, on_play_button);
    
  volume_button = new rotating_button(
    'volume',
    'img/norm/Volume.png', 'img/over/Volume.png', 'img/down/Volume.png', 'img/volume_indicator.png',
    'img/liveradioMask.png',
    221, 90, 61, 61, on_volume_change);
    
  lcd = new lcd_screen('lcd', 'img/screen.png', 150, 27, 101, 48, 14, 3);
  
  ticker = new lcd_screen('ticker', 'img/screen.png', 72, 190, 259, 12, 45, 1);
  get_ticker_info(function(info) { ticker.set_line(0, info); });
  
  audio_player = AudioLib.getPlayer(on_audiolib_event);
}
