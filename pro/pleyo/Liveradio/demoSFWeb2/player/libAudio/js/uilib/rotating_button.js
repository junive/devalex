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

