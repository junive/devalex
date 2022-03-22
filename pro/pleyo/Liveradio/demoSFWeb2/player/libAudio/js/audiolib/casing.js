var Casing = Class.create();
Casing.prototype = {
	initialize: function (eventHandler) {
		this.letter = new Letter(eventHandler);
	},
	
	setUrl: function(url, codec) {
		try {
			this.letter.setUrl(url, codec);
		} catch(err) {
			spy(translator._('errorMessageCaughtIn') + ' setUrl(' + url + ', ' + codec + '): ' + err);
		}
	},
	
	play: function() {
		try {
			this.letter.play();
		} catch (err) {
			spy(translator._('errorMessageCaughtIn') + ' play(): ' + err);
		}
	},
	
	pause: function() {
		try {
			this.letter.pause();
		} catch (err) {
			spy(translator._('errorMessageCaughtIn') + ' pause(): ' + err);
		}
	},

	stop: function() {
		try {
			this.letter.stop();
		} catch (err) {
			spy(translator._('errorMessageCaughtIn') + ' stop(): ' + err);
		}
	},

	fastForward: function() {
		try {
			this.letter.fastForward();
		} catch (err) {
			spy(translator._('errorMessageCaughtIn') + ' fastForward(): ' + err);
		}
	},

	fastReverse: function() {
		try {
			this.letter.fastReverse();
		} catch (err) {
			spy(translator._('errorMessageCaughtIn') + ' fastReverse(): ' + err);
		}
	},
	
	getVolume: function() {
		try {
			return this.letter.getVolume();
		} catch (err) {
			spy(translator._('errorMessageCaughtIn') + ' getVolume(): ' + err);
		}
	},

	setVolume: function(vol) {
		try {
			this.letter.setVolume(vol);
		} catch (err) {
			spy(translator._('errorMessageCaughtIn') + ' setVolume(' + vol + '): ' + err);
		}
	},
	
	getPluginInfo: function() {
		try {
			return this.letter.getPluginInfo();
		} catch (err) {
			spy(translator._('errorMessageCaughtIn') + ' getPluginInfo(): ' + err);
		}
	},
	
	getPluginStatus: function() {
		try {
			return this.letter.getPluginStatus();
		} catch (err) {
			spy(translator._('errorMessageCaughtIn') + ' getPluginStatus(): ' + err);
		}
	},
	
	getCurrentCapabilities: function() {
		try {
			return this.letter.getCurrentCapabilities();
		} catch (err) {
			spy(translator._('errorMessageCaughtIn') + ' getCurrentCapabilities(): ' + err);
		}
	},
	
	setAsset: function(asset) {
		try {
			this.letter.setAsset(asset);
		} catch (err) {
			spy(translator._('errorMessageCaughtIn') + ' setAsset(' + asset + '): ' + err);
		}
	}
};
