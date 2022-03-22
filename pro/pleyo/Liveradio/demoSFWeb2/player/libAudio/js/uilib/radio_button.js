var radio_group = Class.create();
radio_group.prototype = {
  initialize: function(listener) {
    this.buttons = $H({});
    this.num_buttons = 0;
    this.listener = listener;
    this.selected_button = null;
    this.selected_index = -1;
    this.num_buttons = 0;
  },
  
  select_button: function(event, button_index) {
		// if a different button is already pressed, depress it
  	if(this.selected_button) {
  		this.selected_button.set_norm();
  		this.selected_button.unblock();
  	}
  	
  	// block events from the button that is already selected
  	this.selected_button = this.buttons[button_index];
  	this.selected_index = button_index;
  	this.selected_button.block();

		// report the event  		
	  if(this.listener)
	  	this.listener();
  },

  get_new_listener: function(my_button) {
  	var current_index = ++this.num_buttons;
    this.buttons[current_index] = my_button;
    return this.select_button.bindAsEventListener(this, current_index);
  },
  
  get_selected: function() {
  	return this.selected_button ? this.selected_button.tag_name : null;
  },
  
  get_selected_index: function() {
  	return this.selected_index;
  }
};

var radio_button = Class.create();
radio_button.prototype = Object.extend(new button(), {
  initialize: function(
    tag_name, norm_img_file, over_img_file, down_img_file,
    x, y, w, h, group) {
      button.prototype.initialize.call(
        this,
        tag_name, norm_img_file, over_img_file, down_img_file,
        x, y, w, h,
        true, false,
        group.get_new_listener(this));
      this.attach();
    }
});

