var AudioLib = {
  AudioPlayer: null,
  
  getPlayer: function(eventHandler) {
    if(!AudioLib.AudioPlayer)
      AudioLib.AudioPlayer = new Casing(eventHandler);
    return AudioLib.AudioPlayer;
  }
};



