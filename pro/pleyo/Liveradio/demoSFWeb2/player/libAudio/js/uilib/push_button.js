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

