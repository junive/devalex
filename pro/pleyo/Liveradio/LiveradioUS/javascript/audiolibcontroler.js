var AudiolibController = Class.create();
AudiolibController.prototype = {
	initialize: function(flash,  language) {
		this.products = [];
		this.position = 0;
		this.currentAsset = null;
		this.audiolib = null;
		this.flash = flash;
		this.playPolicy = null;
		this.isPaused = false;
		this.isRadio = true;
		this.language = language;
	},
	
	setProducts: function(products) {
		this.products = [];
		for (i=0; i<products.length; i++) {
			prodId = parseInt(products[i]);
			this.products.push(prodId);
		}
		
	},
	
	setPosition: function(position) {
		this.position = parseInt(position);
	},
	
	setPlayPolicy: function(playPolicy) {
		this.playPolicy = parseInt(playPolicy);
	},
	
	audioLibListener: function(missingPluginListener, event_type, attribute, url) {
		updateStatusLine = true;
		if ('missingPlugin' == event_type || 'notSupportedProduct' == event_type) {
			missingPluginListener(event_type, attribute, url);
		} else {
			if ('pluginStatus' == event_type && 'playing' == attribute.toLowerCase()) {
				try {
					attribute = this.audiolib.description;
				} catch (err) {
				}
			}
			if ('pluginStatus' == event_type && 'WMPReplay' == attribute) {
			    updateStatusLine = false;
				attribute = __('Connecting');
				this.play();
			}
			if (updateStatusLine) {
				this.flash.UpdateStatusLine(attribute);
			}	
		}
	},
	
	getAudioLib: function(missingPluginListener) {
		if ('function' == typeof missingPluginListener) {
			this.audiolib = AudioLib.getPlayer(this.audioLibListener.bind(this, missingPluginListener), this.language);
		}
		return this.audiolib;
	},
	
	setCurrentAsset: function() {
		this.currentAsset = new ProductAsset("", "", "");
	},
	
	setAtomicProduct: function(productId) {
		this.setProducts([productId]);
		this.setPosition(0);
		this.isRadio = true;
		//this.attemptToPlay();
	},
	
	setCompositeProduct: function(productIds, initialPosition, playPolicy) {
		this.setProducts(productIds);
		this.setPosition(initialPosition);
		this.setPlayPolicy(playPolicy);
		this.isRadio = false;
		//this.attemptToPlay();
	},
	
	getAsset : function() {
		return this.currentAsset;
	},
		
	setNewAsset: function(newAsset) {
		this.currentAsset = newAsset;
	},
	
	attemptToPlay: function() {
	/*	if (null == this.audiolib) {
			return false;
		}
		//this.setCurrentAsset();
		if (!this.isPaused) {
		// setting .mov redirect for wma and asf radios
		if ('wma' == this.currentAsset.getCodec().toLowerCase() || 'asf' == this.currentAsset.getCodec().toLowerCase()) {
			this.isRadio = false;
		}
		this.audiolib.setAsset(new Asset(this.currentAsset.getCodec(), this.currentAsset.getUrls(), this.isRadio));
		this.audiolib.description = this.currentAsset.getDescription();
		}
		this.audiolib.play();
		*/
		
				if (null == this.audiolib) {
			return false;
		}
		//this.setCurrentAsset();
		//if (!this.isPaused) {
		// setting .mov redirect for wma and asf radios
		try {
			this.currentAsset.getCodec();
		} catch (err) {
			this.currentAsset = new ProductAsset("", "", "", 0);
		}
		if ('wma' == this.currentAsset.getCodec().toLowerCase() || 'asf' == this.currentAsset.getCodec().toLowerCase()) {
			this.isRadio = false;
		}
		this.audiolib.setAsset(new Asset(this.currentAsset.getCodec(), this.currentAsset.getUrls(), this.isRadio));
		this.audiolib.description = this.currentAsset.getDescription();
		//}
		//this.stats.push(new Stat(this.currentAsset.getProductId()));
		try {
			this.audiolib.play();
		} catch(err) {}
		
	},

	play: function() {
		if (null != this.audiolib) {
			if (this.isPaused){
					this.audiolib.play();
			} else {
				this.attemptToPlay();
			}
			this.isPaused = false;
		}
	},
	
	stop: function() {
		this.isPaused = false;
		if (null != this.audiolib) {
			try {this.audiolib.stop();} catch(err) {}
		}
	},
	
	pause: function() {
		this.isPaused = true;
		if (null != this.audiolib) {
			try{this.audiolib.pause();
			this.isPaused = true;} catch(err) {}
		}
	},
	
	setVolume: function(volume) {
		if (null != this.audiolib) {
			this.audiolib.setVolume(10 * volume);
		}
	},

	notLast: function() {
		return this.products.length > (this.position + 1);
	},

	notFirst: function() {
		return this.position > 0;
	},

	next: function() {
		if (this.products.length > (this.position + 1)) {
			this.position++;
			getAssetJSNI("", this.products[this.position]);
		}
		//overBackFwd(true, 2);
		overBackFwd(false, 1);
	},
	
	previous: function() {
		if (this.position > 0) {
			this.position--;
			getAssetJSNI("", this.products[this.position]);
		}
		//overBackFwd(true, 1);
		overBackFwd(false, 2);
	}
}
