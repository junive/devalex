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
