function include_button(tag_name, norm_img, x, y, w, h) {
  tag = $(document.createElement('img'));
  tag.setStyle({'cursor': 'pointer', 'position': 'absolute', 'z-index': 100 });
  tag.src = norm_img.src;
  tag.width = w;
  tag.height = h;
  tag.style.left = x;
  tag.style.top = y;
  document.body.appendChild(tag);
  return tag;
}

var button = Class.create();
button.prototype = {
  initialize: function(
      tag_name, norm_img_file, over_img_file, down_img_file,
      x, y, w, h,
      is_persistent, is_toggle,
      listener) {
    if(arguments.length == 0)
    	return;

    this.tag_name = tag_name;
		this.title = '';
    this.norm_img = new Image();
    this.norm_img.src = norm_img_file;
    
    this.over_img = new Image();
    this.over_img.src = over_img_file;
    
    this.down_img = new Image();
    this.down_img.src = down_img_file;
    
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.down_offset = 1;
    
    this.is_persistent = is_persistent;
    this.is_toggle = is_toggle;
    this.is_blocked = false;
    
    // valid states are 'norm', 'down', 'clicked', 'over'
    this.state = 'norm';
    this.listener = listener;
  },
  
  attach: function() {
    this.tag = include_button(this.tag_name, this.norm_img, this.x, this.y, this.w, this.h); 
    this.tag.onmouseover = this.in_listener.bindAsEventListener(this);
    this.tag.onmouseout = this.out_listener.bindAsEventListener(this);
    this.tag.onmousedown = this.down_listener.bindAsEventListener(this);
    this.tag.onmouseup = this.up_listener.bindAsEventListener(this);
  },

  set_title: function(title) {
    this.title = title;
	  this.tag.title = title;
  },
  
  set_norm: function() {
    this.state = 'norm';
    this.tag.src = this.norm_img.src;
    this.tag.style.left = this.x; 
    this.tag.style.top = this.y;
  },

  set_over: function() {
    this.state = 'over';
    this.tag.src = this.over_img.src;
    this.tag.style.left = this.x; 
    this.tag.style.top = this.y;
  },

  set_down: function() {
    this.state = 'down';
    this.tag.src = this.down_img.src;
    this.tag.style.left = this.x + this.down_offset; 
    this.tag.style.top = this.y + this.down_offset;
  },
  
  in_listener: function() {
    if(this.state == 'norm')
      this.set_over();
  },
  
  block: function() {
  	this.is_blocked = true;
  },
  
  unblock: function() {
   	this.is_blocked = false;
  },

  out_listener: function() {
    if(this.state == 'over' ||
      this.state == 'down' )
    this.set_norm();
  },

  down_listener: function() {
    if(this.state == 'over')
      this.set_down();
  },

  up_listener: function() {
  	var new_state = this.is_toggle && this.state == 'clicked' ? false : true;
  	if(this.listener && !this.is_blocked)
	  	this.listener(this, new_state);

    if(this.state == 'down') {
      if(this.is_persistent)
        this.state = 'clicked';
      else
        this.set_over();
    } else if(this.state == 'clicked' && this.is_toggle)
      this.set_over();
  },
  
  click: function() {
  	this.in_listener();
  	this.down_listener();
  	this.up_listener();
  	this.out_listener();
  }
};

var push_button = Class.create();
push_button.prototype = Object.extend(new button(), {
  initialize: function(
    tag_name, norm_img_file, over_img_file, down_img_file,
    x, y, w, h, listener) {
      button.prototype.initialize.call(
        this,
        tag_name, norm_img_file, over_img_file, down_img_file,
        x, y, w, h,
        false, false,
        listener);
      this.attach();
  }
});

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

function include_rotating_button(tag_name, norm_img, indicator_img, mask_img, x, y, w, h) {
  tag = $(document.createElement('img'));
  tag.setStyle({'cursor': 'pointer', 'position': 'absolute', 'z-index': 100 });
  tag.src = norm_img.src;
  tag.width = w;
  tag.height = h;
  tag.style.left = x;
  tag.style.top = y;
  document.body.appendChild(tag);
  
  indicator = $(document.createElement('img'));
  indicator.src = indicator_img.src;
  indicator.setStyle({ 'z-index': 1000, 'position': 'absolute', 'cursor': 'pointer' });
  document.body.appendChild(indicator);
  
  mask = $(document.createElement('img'));
  mask.src = mask_img.src;
  mask.setStyle({
    'z-index': 1001,
    'position': 'absolute',
    'cursor': 'pointer',
    'display': 'none'
  });
  mask.style.left = 0;
  mask.style.top = 0;
  document.body.appendChild(mask);
  
  return [tag, indicator, mask];
}

MIN_DEG = -170;
MAX_DEG = 130;

var rotating_button = Class.create();
rotating_button.prototype = Object.extend(new button(), {
  initialize: function(
    tag_name,
    norm_img_file, over_img_file, down_img_file,
    indicator_img_file, mask_img_file,
    x, y, w, h, listener) {
    this.tag_name = tag_name;

    this.norm_img = new Image();
    this.norm_img.src = norm_img_file;
    
    this.over_img = new Image();
    this.over_img.src = over_img_file;
    
    this.down_img = new Image();
    this.down_img.src = down_img_file;
    
    this.indicator_img = new Image();
    this.indicator_img.src = indicator_img_file;
    
    this.mask_img = new Image();
    this.mask_img.src = mask_img_file;
    
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.ref_x = this.x + this.w/2 - 6;
    this.ref_y = this.y + this.h/2 - 6;
    this.down_offset = 0;
    
    this.prev_x = 0;
    this.prev_y = 0;
    this.old_value = 0;
    
    // valid states are 'norm', 'down', 'clicked', 'over'
    this.state = 'norm';
    this.listener = listener;
    this.master_value = 50;
    
    tags = include_rotating_button(
      tag_name,
      this.norm_img, this.indicator_img, this.mask_img,
      x, y, w, h);
    this.tag = tags[0];
    this.indicator = tags[1];
    this.mask = tags[2];
    
    this.down_listener = this.on_down.bindAsEventListener(this);
    this.up_listener = this.on_up.bindAsEventListener(this);
    this.out_listener = this.on_out.bindAsEventListener(this);
    this.move_listener = this.on_move.bindAsEventListener(this);
    this.in_listener = this.on_in.bindAsEventListener(this);
    this.wheel_listener = this.on_wheel.bindAsEventListener(this);
    
    this.mask.onmousemove = this.move_listener;
    this.mask.onmouseup = this.up_listener;
    
    this.tag.onmousedown = this.down_listener;
    this.tag.onmouseout = this.out_listener;
    this.tag.onmousewheel = this.wheel_listener;
    this.tag.onmouseover = this.in_listener;
    
    this.show_value();
  },

  compute_angle: function(x1, y1, x2, y2, w, h) {
    vx1 = x1 - w/2;
    vy1 = y1 - h/2;
    vx2 = x2 - w/2;
    vy2 = y2 - h/2;
    
    return (Math.atan2(vy1, vx1) - Math.atan2(vy2, vx2))*180/Math.PI;
  },

  compute_value: function(x, y) {
  /*
    new_angle = this.compute_angle(
      x, y,
      this.prev_x, this.prev_y,
      this.w, this.h);
  */
  	new_angle = (x - this.prev_x)*3;
    this.master_value = this.old_value + Math.round(new_angle*100/(MAX_DEG - MIN_DEG));
    this.master_value = this.master_value >= 100 ? 100 : this.master_value;
    this.master_value = this.master_value < 0 ? 0 : this.master_value;
  },

  show_value: function() {
    deg = parseInt(((MAX_DEG - MIN_DEG)/100)*this.master_value) + MIN_DEG;
    deg = deg < MIN_DEG ? MIN_DEG : deg;
    deg = deg > MAX_DEG ? MAX_DEG : deg;
    rad = deg*Math.PI/180;
    
    w = this.w/2 - 15;
    h = this.h/2 - 15;
    this.indicator.style.left = this.ref_x + w*Math.cos(rad);
    this.indicator.style.top = this.ref_y + h*Math.sin(rad);
  },

  on_move: function(event) {
    var x = Event.pointerX(event) - this.x;
    var y = Event.pointerY(event) - this.y;
    this.compute_value(x, y);
    this.show_value();
    
    if(this.listener)
      this.listener(this.master_value);
  },

  on_wheel: function(event) {
    this.master_value += event.wheelDelta > 0 ? 5 : -5;
    this.master_value = this.master_value > 100 ? 100 : this.master_value;
    this.master_value = this.master_value < 0 ? 0 : this.master_value;  
    this.show_value();
  },

  do_nothing: function() {
  },

  on_up: function(event) {
    var x = Event.pointerX(event) - this.x;
    var y = Event.pointerY(event) - this.y;
    this.compute_value(x, y);
    this.show_value();

    if(this.listener)
      this.listener(this.master_value);
    
    document.body.onmouseup = this.do_nothing;
    this.tag.onmousemove = this.do_nothing;
    this.tag.onmouseup = this.do_nothing; 
    
    this.tag.src = this.norm_img.src;
    this.set_norm();
    Event.stopObserving(document, 'mouseup', this.up_listener);
    Event.stopObserving(document, 'mousemove', this.move_listener);
  },
  
  on_out: function() {
  	if(this.state != 'dragging')
	  	this.set_norm();
  },

  on_down: function(event) {
    this.prev_x = Event.pointerX(event) - this.x;
    this.prev_y = Event.pointerY(event) - this.y;
    this.old_value = this.master_value;
    this.tag.src = this.down_img.src;
    
    this.tag.onmousemove = this.on_move.bindAsEventListener(this);
    this.tag.onmouseup = this.on_up.bindAsEventListener(this);
    this.set_down();
    this.state = 'dragging';
    Event.observe(document, 'mouseup', this.up_listener);
    Event.observe(document, 'mousemove', this.move_listener);    
    Event.stop(event);
  },

  on_in: function(event) {
    if(this.state == 'norm')
      this.set_over();
  },
  
  set_value: function(value) {
    this.master_value = value;
    this.show_value(this);
  }
});

function include_screen(tag_name, img, x, y, w, h) {
  tag = $(document.createElement('img'));
  tag.setStyle({
  	'position': 'absolute',
  	'z-index': 100,
  	'font-family': 'Monospace, Consolas, Courier',
  	'font-size': '8pt',
  	'overflow': 'hidden' });
  tag.src = img.src;
  tag.width = w;
  tag.height = h;
  tag.style.left = x;
  tag.style.top = y;
  document.body.appendChild(tag);
  return tag;
}

function include_screen_lines(tag, geom) {
	screen_div = $(document.createElement('div'));
	screen_div.setStyle({
		'position': 'absolute',
		'left': tag.offsetLeft,
		'top': tag.offsetTop - 1,
		'width': tag.offsetWidth - 1,
		'overflow': 'hidden',
		'padding': 0,
		'margin': 1,
		'z-index': 105 });
		
	lines = $H({});
	
	$R(0, geom - 1).each(function(i) {
		line = $(document.createElement('div'));
		line.setStyle({
			'position': 'relative',
			'left': 0,
			'top': 0,
			'z-index': 10,
			'width': '100%',
			'height': 13,
			'padding-left': 0,
			'font-family': 'Monospace, Consolas, Courier',
  			'font-size': '8pt',
  			'overflow': 'hidden',
			'z-index': 110 });
		line.setAttribute('nowrap', true);
		screen_div.appendChild(line);
		lines[i] = line;
	});
	
	document.body.appendChild(screen_div);
	return lines;
}

var auto_scroll = Class.create();
auto_scroll.prototype = {
	initialize: function(my_div, max_size, period) {
		this.my_div = my_div;
		this.max_size = max_size;
		this.period = period;
		this.message = '';
		this.dir = +1;
		this.offset = 0;
		this.pe = null;
	},

	do_scroll: function() {
		this.compute_shift();
		this.refresh_div();
	},

	refresh_div: function() {
		sub_msg = this.message.substring(this.offset, this.offset + this.max_size);
		this.my_div.innerHTML = sub_msg;
	},

	compute_shift: function() {
		if(this.dir == +1) {
			if(this.message.length - this.offset <= this.max_size)
				this.dir = -1;
			else
				this.offset += 1;
		} else {
			if(this.offset == 0)
				this.dir = +1;	
			else
				this.offset -= 1;
		}
	},

	set_message: function(message) {
		if(this.pe) {
			this.pe.stop();
			this.pe = null;
		}

		this.message = message;
		this.offset = 0;
		this.dir = +1;

		if(message.length > this.max_size) {
			this.pe = new PeriodicalExecuter(
			  this.do_scroll.bindAsEventListener(this),
			  this.period);
		}

		this.refresh_div();
	}
};

var lcd_screen = Class.create();
lcd_screen.prototype = {
	initialize: function(tag_name, back_img_file, x, y, w, h, geom_x, geom_y) {
		this.tag_name = tag_name;
    this.status_name = tag_name + '_status';
		this.back_img = new Image();
		this.back_img.src = back_img_file;
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;

		this.tag = include_screen(this.tag_name, this.back_img, this.x, this.y, this.w, this.h);
		this.scrollers = $H({});

		tmp_scrollers = this.scrollers;
		scroll_period = 0.3;
		line_tags = include_screen_lines(this.tag, geom_y).each(
			function(pair) {
				tmp_scrollers[pair.key] = new auto_scroll(pair.value, geom_x, scroll_period);
			});
	},
	
	set_line: function(n, text) {
	    this.scrollers[n].set_message(text);
	}
};
var toggle_button = Class.create();
toggle_button.prototype = Object.extend(new button(), {
  initialize: function(
    tag_name, norm_img_file, over_img_file, down_img_file,
    x, y, w, h, listener) {
      button.prototype.initialize.call(
        this,
        tag_name, norm_img_file, over_img_file, down_img_file,
        x, y, w, h,
        true, true,
        listener);
      this.attach();
  },
  
  depress: function() {
  	if(this.state == 'clicked') {
  		// simulate a click to depress
  		this.click();
		}
  },
  
  press: function() {
  	if(this.state == 'norm') {
  		// simulate a click to press
  		this.click();
  	}
  }
});

