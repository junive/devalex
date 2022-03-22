function report_missing_plugin(plugin, listener) {
  var name = 'uknown plugin';
  var url = 'unknown location';
  switch(plugin) {
    case 'wmp':
      name = 'Windows Media Player';
      url = 'http://www.microsoft.com/windows/windowsmedia/download/AllDownloads.aspx?displang=en&qstechnology=';
      break;
     case 'wmp_firefox':
     	name = 'Windows Media Player Firefox Plugin';
     	url = 'http://port25.technet.com/pages/windows-media-player-firefox-plugin-download.aspx';
     	break;
    case 'rp':
      name = 'Real Player';
      url = 'http://www.real.com/R/RDX.fail-click.R/software-dl.real.com/200592664f2d26cddb05/windows/mrkt/R30EUD/RealPlayer10-5GOLD.exe';
      break;
    case 'qt':
      name = 'QuickTime';
      url = 'http://www.apple.com/quicktime/download/';
      break;
  }
  
  if (listener)
    listener('missingPlugin', name, url);
}

