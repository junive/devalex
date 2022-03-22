function com_baracoda_www_Liveradio_Liveradio(){
  var $wnd = window, $doc = document, external = $wnd.external, scriptsDone, loadDone, bodyDone, base = '', metaProps = {}, values = [], providers = [], answers = [], onLoadErrorFunc, propertyErrorFunc;
  if (!$wnd.__gwt_stylesLoaded) {
    $wnd.__gwt_stylesLoaded = {};
  }
  if (!$wnd.__gwt_scriptsLoaded) {
    $wnd.__gwt_scriptsLoaded = {};
  }
  var oldOnLoad = $wnd.onload;
  $wnd.onload = function(evt){
    if (oldOnLoad) {
      $wnd.onload = oldOnLoad;
      $wnd.onload(evt);
    }
    bodyDone = true;
    maybeStartModule();
  }
  ;
  function isHostedMode(){
    try {
      return external && (external.gwtOnLoad && $wnd.location.search.indexOf('gwt.hybrid') == -1);
    }
     catch (e) {
      return false;
    }
  }

  function maybeStartModule(){
    if (scriptsDone && (loadDone && bodyDone)) {
      var iframe = $doc.getElementById('com.baracoda.www.Liveradio.Liveradio');
      var frameWnd = iframe.contentWindow;
      frameWnd.__gwt_initHandlers = com_baracoda_www_Liveradio_Liveradio.__gwt_initHandlers;
      if (isHostedMode()) {
        frameWnd.__gwt_getProperty = function(name){
          return computePropValue(name);
        }
        ;
      }
      com_baracoda_www_Liveradio_Liveradio = null;
      frameWnd.gwtOnLoad(onLoadErrorFunc, 'com.baracoda.www.Liveradio.Liveradio', base);
    }
  }

  function computeScriptBase(){
    var thisScript, markerScript = $doc.getElementById('__gwt_js_marker_com.baracoda.www.Liveradio.Liveradio');
    if (markerScript) {
      thisScript = markerScript.nextSibling;
    }
     else {
      $doc.write('<script id="__gwt_marker_com.baracoda.www.Liveradio.Liveradio"><\/script>');
      markerScript = $doc.getElementById('__gwt_marker_com.baracoda.www.Liveradio.Liveradio');
      if (markerScript) {
        thisScript = markerScript.previousSibling;
      }
    }
    function getDirectoryOfFile(path){
      var eq = path.lastIndexOf('/');
      return eq >= 0?path.substring(0, eq + 1):'';
    }

    ;
    if (thisScript && thisScript.src) {
      base = getDirectoryOfFile(thisScript.src);
    }
    if (base == '') {
      base = getDirectoryOfFile($doc.location.href);
    }
     else if (base.match(/^\w+:\/\//)) {
    }
     else {
      var img = $doc.createElement('img');
      img.src = base + 'clear.cache.gif';
      base = getDirectoryOfFile(img.src);
    }
    if (markerScript) {
      markerScript.parentNode.removeChild(markerScript);
    }
  }

  function processMetas(){
    var metas = document.getElementsByTagName('meta');
    for (var i = 0, n = metas.length; i < n; ++i) {
      var meta = metas[i], name = meta.getAttribute('name'), content;
      if (name) {
        if (name == 'gwt:property') {
          content = meta.getAttribute('content');
          if (content) {
            var value, eq = content.indexOf('=');
            if (eq >= 0) {
              name = content.substring(0, eq);
              value = content.substring(eq + 1);
            }
             else {
              name = content;
              value = '';
            }
            metaProps[name] = value;
          }
        }
         else if (name == 'gwt:onPropertyErrorFn') {
          content = meta.getAttribute('content');
          if (content) {
            try {
              propertyErrorFunc = eval(content);
            }
             catch (e) {
              alert('Bad handler "' + content + '" for "gwt:onPropertyErrorFn"');
            }
          }
        }
         else if (name == 'gwt:onLoadErrorFn') {
          content = meta.getAttribute('content');
          if (content) {
            try {
              onLoadErrorFunc = eval(content);
            }
             catch (e) {
              alert('Bad handler "' + content + '" for "gwt:onLoadErrorFn"');
            }
          }
        }
      }
    }
  }

  function __gwt_isKnownPropertyValue(propName, propValue){
    return propValue in values[propName];
  }

  function __gwt_getMetaProperty(name){
    var value = metaProps[name];
    return value == null?null:value;
  }

  function unflattenKeylistIntoAnswers(propValArray, value){
    var answer = answers;
    for (var i = 0, n = propValArray.length - 1; i < n; ++i) {
      answer = answer[propValArray[i]] || (answer[propValArray[i]] = []);
    }
    answer[propValArray[n]] = value;
  }

  function computePropValue(propName){
    var value = providers[propName](), allowedValuesMap = values[propName];
    if (value in allowedValuesMap) {
      return value;
    }
    var allowedValuesList = [];
    for (var k in allowedValuesMap) {
      allowedValuesList[allowedValuesMap[k]] = k;
    }
    if (propertyErrorFunc) {
      propertyErrorFunc(propName, allowedValuesList, value);
    }
    throw null;
  }

  providers['locale'] = function(){
    try {
      var locale;
      if (locale == null) {
        var args = location.search;
        var startLang = args.indexOf('locale');
        if (startLang >= 0) {
          var language = args.substring(startLang);
          var begin = language.indexOf('=') + 1;
          var end = language.indexOf('&');
          if (end == -1) {
            end = language.length;
          }
          locale = language.substring(begin, end);
        }
      }
      if (locale == null) {
        locale = __gwt_getMetaProperty('locale');
      }
      if (locale == null) {
        return 'default';
      }
      while (!__gwt_isKnownPropertyValue('locale', locale)) {
        var lastIndex = locale.lastIndexOf('_');
        if (lastIndex == -1) {
          locale = 'default';
          break;
        }
         else {
          locale = locale.substring(0, lastIndex);
        }
      }
      return locale;
    }
     catch (e) {
      alert('Unexpected exception in locale detection, using default: ' + e);
      return 'default';
    }
  }
  ;
  values['locale'] = {'default':0, 'en':1, 'fr':2};
  providers['user.agent'] = function(){
    var ua = navigator.userAgent.toLowerCase();
    var makeVersion = function(result){
      return parseInt(result[1]) * 1000 + parseInt(result[2]);
    }
    ;
    if (ua.indexOf('opera') != -1) {
      return 'opera';
    }
     else if (ua.indexOf('webkit') != -1) {
      return 'safari';
    }
     else if (ua.indexOf('msie') != -1) {
      var result = /msie ([0-9]+)\.([0-9]+)/.exec(ua);
      if (result && result.length == 3) {
        if (makeVersion(result) >= 6000) {
          return 'ie6';
        }
      }
    }
     else if (ua.indexOf('gecko') != -1) {
      var result = /rv:([0-9]+)\.([0-9]+)/.exec(ua);
      if (result && result.length == 3) {
        if (makeVersion(result) >= 1008)
          return 'gecko1_8';
      }
      return 'gecko';
    }
    return 'unknown';
  }
  ;
  values['user.agent'] = {'gecko':0, 'gecko1_8':1, 'ie6':2, 'opera':3, 'safari':4};
  com_baracoda_www_Liveradio_Liveradio.onInjectionDone = function(){
    scriptsDone = true;
    maybeStartModule();
  }
  ;
  com_baracoda_www_Liveradio_Liveradio.onScriptLoad = function(){
    loadDone = true;
    maybeStartModule();
  }
  ;
  computeScriptBase();
  processMetas();
  var strongName;
  if (isHostedMode()) {
    strongName = 'hosted.html?com_baracoda_www_Liveradio_Liveradio';
  }
   else {
    try {
      unflattenKeylistIntoAnswers(['en', 'opera'], '0FC3725AB6938DBDD23ED577923AA90C');
      unflattenKeylistIntoAnswers(['fr', 'ie6'], '19A07E07C2F2B438BF056E7C0F62AF8A');
      unflattenKeylistIntoAnswers(['fr', 'opera'], '244622FC17459B7263548A6AC96DE1DF');
      unflattenKeylistIntoAnswers(['default', 'gecko'], '2F496A92BCF033503ABF4292D12B4D42');
      unflattenKeylistIntoAnswers(['en', 'gecko'], '4FDE7F7130D8E9DD622B4AAE3437A657');
      unflattenKeylistIntoAnswers(['en', 'gecko1_8'], '5FA609CA87ED04A11D80A4D713019051');
      unflattenKeylistIntoAnswers(['en', 'safari'], '72E66C633F4AC982C69DC0A7AF5AE838');
      unflattenKeylistIntoAnswers(['default', 'ie6'], '7DD2BA236B375EEFB799D6769FA02E15');
      unflattenKeylistIntoAnswers(['default', 'opera'], '8271DCA3127772EDA079931BCB0E0267');
      unflattenKeylistIntoAnswers(['fr', 'safari'], '9A0795E4922B95CD98D0636ABB6C61D6');
      unflattenKeylistIntoAnswers(['en', 'ie6'], 'A075843F144BE709697CCDA61AD63049');
      unflattenKeylistIntoAnswers(['default', 'safari'], 'A9D4B9F49231B0D460469D1F28C29130');
      unflattenKeylistIntoAnswers(['fr', 'gecko1_8'], 'C71632F9145B1CFFCA9829D88A4B2B48');
      unflattenKeylistIntoAnswers(['fr', 'gecko'], 'CDCD701331FB1CD3DE4472EE28BE1387');
      unflattenKeylistIntoAnswers(['default', 'gecko1_8'], 'E519D66CED7A00128F492492FB653449');
      strongName = answers[computePropValue('locale')][computePropValue('user.agent')];
    }
     catch (e) {
      return;
    }
    strongName += '.cache.html';
  }
  $doc.write('<iframe id="com.baracoda.www.Liveradio.Liveradio" style="width:0;height:0;border:0" src="' + base + strongName + '"><\/iframe>');
  $doc.write("<script>com_baracoda_www_Liveradio_Liveradio.onInjectionDone('com.baracoda.www.Liveradio.Liveradio')<\/script>");
}

com_baracoda_www_Liveradio_Liveradio.__gwt_initHandlers = function(resize, beforeunload, unload){
  var $wnd = window, oldOnResize = $wnd.onresize, oldOnBeforeUnload = $wnd.onbeforeunload, oldOnUnload = $wnd.onunload;
  $wnd.onresize = function(evt){
    resize();
    if (oldOnResize)
      oldOnResize(evt);
  }
  ;
  $wnd.onbeforeunload = function(evt){
    var ret = beforeunload();
    var oldRet;
    if (oldOnBeforeUnload)
      oldRet = oldOnBeforeUnload(evt);
    if (ret !== null)
      return ret;
    return oldRet;
  }
  ;
  $wnd.onunload = function(evt){
    unload();
    if (oldOnUnload)
      oldOnUnload(evt);
  }
  ;
}
;
com_baracoda_www_Liveradio_Liveradio();
