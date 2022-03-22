var phoenix_item = Class.create();
phoenix_item.prototype = {
	initialize: function(title, menu_id) {
		this.title = title;
		this.menu_id = menu_id;
		this.asset = null;
	},
	
	set_asset: function(asset) {
	  this.asset = asset;
	},
	
	get_title: function() {
		return this.title;
	},

	get_id: function() {
		return this.menu_id;
	},

	get_asset: function() {
		return this.asset;
	}
};

