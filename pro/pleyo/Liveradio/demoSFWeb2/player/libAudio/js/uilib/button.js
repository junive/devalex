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

