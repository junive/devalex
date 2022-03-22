var infoPreset = Class.create();
infoPreset.prototype = {
  initialize: function(ID, title, cover) {
  	this.ID = ID;
	this.title = title;
    this.cover = cover;
  },
  
  getID : function() {
  	return this.ID;
  },
  
  getTitle : function() {
	return this.title;
  },
  
  getCover : function() {
	return this.cover;
  }
  
};

var ProductAsset = Class.create();
ProductAsset.prototype = {
	initialize: function(codec, urls, description) {
		this.codec = codec;
		this.urls = urls;
		this.description = description;
	},

	getCodec: function() {
		return this.codec;
	},

	getUrls: function() {
		return this.urls;
	},

	getDescription: function() {
		return this.description;
	}
};

var jsPlayer = Class.create();
jsPlayer.prototype = {
  initialize: function() {
  	this.composite = false;
	this.mute = false;
	this.currentVolume = 0;
	this.libAudio = null;
  },
  
  UpdateProductInfo : function(title, status, bitrate, cover) {
  	document.getElementById("playerTextLine1").innerHTML = "";
	document.getElementById("playerTextLine2").innerHTML = "";
	document.getElementById("playerTextLine3").innerHTML = "";
	document.getElementById("playerTextLine4").innerHTML = "";
	//document.getElementById("playerTextLine5").innerHTML = "";
	
	document.getElementById("playerTextLine1").innerHTML = title;
	if (bitrate != null && bitrate != "") {
		document.getElementById("playerTextLine2").innerHTML = bitrate +" kbps";
	}
	if (audio_player.getAsset() != null && audio_player.getAsset().getDescription() != null) {
		document.getElementById("playerTextLine3").innerHTML = audio_player.getAsset().getDescription();
	}
	document.getElementById("playerTextLine4").innerHTML = status;
	document.getElementById("playerLogo").src = cover;
	//document.getElementById("playerCover").src = cover;
  },
  
  setTitle : function(namo) {
  	document.getElementById("playerTextLine0").innerHTML = namo;
  },
  
  UpdateInformation : function(site, country, genre) {
  	document.getElementById("playerCountry").innerHTML = country;
	document.getElementById("playerGenre").innerHTML = genre;
	document.getElementById("playerWeb").href = site;
	document.getElementById("playerWeb").innerHTML = webo == true ? "Web" : "";
  },
  
  isComposite : function() {
  	return this.composite;
  },
  
  isMute : function() {
  	return this.mute;
  },
  
  getCurrentVolume : function() {
  	return this.currentVolume;
  },

  setCurrentVolume : function(newVol) {
  	this.currentVolume = newVol;
  },
  
  setLibAudio : function(aud) {
  	this.libAudio = aud;
  },
  
  SetProductCapabilities : function(skip, paus, webo, infor, persoa, buya) {
	if (skip == false) {
		document.getElementById("playerPrevious").src ="img/img_us/bt_back_off.png";
		document.getElementById("playerNext").src ="img/img_us/bt_fwd_off.png";
		this.composite = false;
	} else {
		document.getElementById("playerPrevious").src ="img/img_us/bt_back_roll.png";
		document.getElementById("playerNext").src ="img/img_us/bt_fwd_roll.png";	
		this.composite = true;
	}
  },
  
  ChangePlayState : function(state) {
  	if (state == "pause") {
		document.getElementById("playerPlay").src ="img/img_us/bt_pause_roll.png";
	} else if (state == "stop") {
		document.getElementById("playerPlay").src ="img/img_us/bt_pause_roll.png";
	} else if (state == "play") {
		document.getElementById("playerPlay").src ="img/img_us/bt_play_on.png";
	} else {
		document.getElementById("playerPlay").src ="img/img_us/bt_pause_roll.png";
	}
  },
  
  ChangeVolumeState : function(aud) {
	this.libAudio.setVolume(aud);
	if (aud != 0) {
		this.currentVolume = aud;
	}
  },
  
  UpdateStatusLine : function(text) {
	document.getElementById("playerTextLine5").innerHTML = text;
  },
  
  getCover : function() {
	return this.cover;
  }
  
};