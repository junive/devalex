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

