var disclamer = function() {
/*
Copyright blabla

*/ 
}

var globalName = window.pl = {};  //Only for globalScript
var lastBackupOS; 
var lastBackupImg;
var loadOnDOMContent = true; // Only for sync && async scripts

var globalScript = [ //toto

	'client/html.js', //my comment2
	"client/event.js",
	"client/setting.js"  
];


var syncScript = [
// mycomment

	"client/setting.js",
	/*
	balbla */
	"main.pp",
	
	"client/html.js", //my comment2
	"client/event.js",

	 /* /etoile /comment* "client/control.js",*/ 
	"server/request.js"
	
	
	/* ememe
	eeeazea
	*/ 
];

var asyncScript = [

];


var includeScript = function(url, asynchrone){ 
	var nodeScript = document.createElement('script'); 
	nodeScript.type = 'text/javascript';
	if (asynchrone != null && asynchrone == false) nodeScript.asynch = asynchrone;
	nodeScript.src = url;
	var head = document.head || document.getElementsByTagName('head')[0];
	head.appendChild(nodeScript);
	return nodeScript;
}

var loadSyncScript = function (index) {
	if (index < syncScript.length) {
		var nodeScript = includeScript(syncScript[index], false);
		nodeScript.addEventListener("load", function() {
			loadSyncScript(index + 1);
		});
	}
}

var loadAsyncScript = function() {
	if (asyncScript.length > 0) {
		asyncScript.forEach(function(url) {
			includeScript(url, true);
		});
	}
}

var loadGlobalScript = function() {
	if (globalScript.length > 0) {
		globalScript.forEach(function(url) {
			document.write("<script type='text/javascript' src='"+url+"'></script>")
		});
	}
}

if (loadOnDOMContent) {
	document.addEventListener("DOMContentLoaded", function(event) {
		loadSyncScript(0);
		loadAsyncScript();
		console.log("DOMContent Loaded");
	});
} else {
	loadSyncScript(0);
	loadAsyncScript();
}

loadGlobalScript();

console.log("configure loaded");
