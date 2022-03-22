(function(window){
var junive = null;


/* Notes :
	1/ Why keys needs a button ? 
	-> Because of the attachs / open button need one / and the code is easier to maintain
	2/ Why calling this.observer(observer).callButton in prototope observer ?
	-> still don't know...
	3/ Why All my button are not Display ?
	-> Because of autoDisplayParent ! You need to change the autoDisplayParent, or create a new Data, with a different autoDisplayParent
	4/ Cannot put prefix on DataKey for this reason :
		it's better to do  : data.button.play ( key : 32 ) or data.button.play.key = 32
		rather than data.button.play( key { auto : 32 }} or data.button.play.key.auto = 32
	5/ Cue.startTime, cue.text... are read-only in IE 11 !
*/


/* To Improve :

	0/ When opening twice the same file, play it again !!!
	1/ junive.copyList( {}, domy.global ); to not attach action and role on data, is right ?
	7/ Remove prefixHtml and replace it by dataName/attachedData
*/

/* To Fix :
	1/ myData(myHtml(playerControl).play).toggle = false; 
		Bug : Doesn't work, because play is not a node
		Fix : attach box to it or simply add html() and event() to it
*/

// Shortcut to put safe properties on node
var GLOB = function(node, type, init)  { // init : avoid to put a global name to all node
	var globalName = "juniveCdrFrKLpdkdlGzad";
	if (!node) { console.error("[junive] : no node set on "+type+"() access"); return;}
	if (init === true) { // Ex we create a node.jundzzdzdz.data = {};
		if (!node[globalName]) node[globalName] = {};
		if (!node[globalName][type]) node[globalName][type] = {};
	}
	return node[globalName] !== undefined ?  node[globalName][type] : undefined;
}

// Shortcut to put safe data properties on node
var DATA = function(node, init) {
	var domy = GLOB(node, "data", init);
	if (domy !== undefined && domy.global !== undefined) {
		// This allow to manage the button's data in global mode (we concat them on the fly)
		if (junive.isArray(domy.global)) return junive.copyList( {}, domy.global );
		return domy.global;
	}
	return domy; // Return undefined if not initiated once
}

// Shortcut to put safe html properties on node
var HTML = function(node, init) {
	return GLOB(node, "html", init);
}

// Shortcut to put safe event properties on node
var EVENT = function(node, init) {
	return GLOB(node, "event", init);
}

// This is junive, free from html
var control = new ControlClass();

// return the control Class, with access by node
junive = function(node) {
	if (!node) { console.error("[junive] : no node set in junive()"); return; }
	return control.getPrototype(node);
}

// Only copy the function included in function ControlClass(), not its prototypes
for (key in control) {	
	junive[key] = control[key];
}


junive.setControlProto = function(protoName, func) {
	var name = junive.match(protoName).name;
	var oldProto = control.__proto__[name];
	control.__proto__[name] = function() {
		oldProto.apply(control, arguments);
		for (var funcName in func) this[funcName] = func[funcName];
		return this;
	};
}

junive.getControl = function() {
	return control;
}


// Get the html Class, and return the html attached to a node
junive.Html = function(dataHtml) {
	var out = function(node) { return HTML(node); }
	var cl = new HtmlClass(dataHtml);
	for (key in cl) { out[key] = cl[key]; }
	return out;
}

// Get the event Class, and return the event attached to a node
junive.Event = function(dataEvent) {
	var out = function(node) { return EVENT(node); }
	var cl = new EventClass(dataEvent);
	for (key in cl) { out[key] = cl[key]; }
	return out;
}

// Get all datas into one, with merge function : Ex data.player({})
junive.Data = function() { 
	
	var out = function(elem) { 
		// return all data attached to player,box,button etc...
		if (junive.isNode(elem) || elem === document) return DATA(elem); 
		 // merge this data with new ones Ex data({player:{}, button{}, ...);
		 else if (junive.isObject(elem)) junive.merge(out, elem);
	}
	
	// Default data that will be called in every cases
	var dataList = [ junive.DataEvent, new junive.DataHtml(), junive.DataInclude,
		junive.DataButton, junive.DataBox, junive.DataControl ];
	
	// Using function to replace a value Ex  data.player({autoDisplay : false})
	var funcReplace = function(obj, key) { // Reminder : doesn't work diretly in the loop
		// This allow to get the current key in loop for() (and not the last one)
		return outFunc = function(newData) { junive.merge(obj[key], newData); }
	}

	// We add data from dataList && arguments setted in junive.Data(argument1, argument2)
	var handleData = function(arg) {
		// In case we forgot to instantiate a function with datas EX : new Data(junive.DataHtml())
		var	newdata = junive.isFunction(arg) ? new arg : arg,
			options = {};
			
		options.init = funcReplace; // For test, quote this
		options.merge = true;
		if (newdata.prefix != null) { // We add a prefix if it's not a junive.Data();
			var prefixName = junive.match(newdata.prefix).name;
			if (newdata.prefix[prefixName] === false) {
				//out[prefixName] = funcReplace(out, prefixName);
				options.prefix = prefixName;
			}
		}
		junive.copy(out, newdata, options);
	}
	
	junive.callList(dataList, handleData); // We put our default datas in out
	junive.callList(arguments, handleData); // We replace default
	
	//for (var key in out) console.log(key, out[key]); // for Test dequote
	
	return out;
}

//The basics of html data
junive.DataHtml = function() {

	this.prefix = { html : false };

	// This is what is not going to show in dom, and node attributes
	this.forbid =  { content : true, tag : true };

	this.player =  { tag : "video" };
	this.pop =     { tag : "div" };
	this.source =  { tag : "source" };
	this.track =   { tag : "track" };
	this.menu =    { tag : "ul"};
	this.file =    { tag : "li"};
	this.folder =  { tag : "li"};
	this.embed =   { tag : "embed"};
	this.check =   { tag : "input" , type : "checkbox"}

}

/*
junive.player({
	box : {tag : "div" }
	include : {play : true, random : true }
	
	autoDisplay : true, toogle : false

})
junive({
	play : {
		box : { }
		autoDisplay : 
		button : { }
		slide : {
			button : { }
			include : true
		}
	}
}
*/

junive.DataButton = {
	prefix : { button : false },

	//tag : "div",
	
	button : {
		tag : "div", 
		slide : { tag : "input" , type : "range"},
	},
	
	
	openInput : {
		tag : "input",
		file :   { "type" : 'file', "multiple" : ''},
		folder : { "type" : 'file', "webkitdirectory" : '', "directory" : ''}
	}
}

junive.DataBox = {
	prefix : { box : false },

	//tag = "div",
	
	box : { tag : "div" },

	openInput : { "style" : "width: 0px; height: 0px; overflow: hidden;"}
}

junive.DataControl =  {
	// To improve : should be call boxButton !
	prefix : { control : false },
	
	//tag = "div",
	
	control : { tag : "div" }
}


junive.DataInclude = {

	prefix : { include : false },
	
	//this.volume = { slide : false, plus : true, less : true } // For Example
	
	source : { play : true, full : true, time : true, volume : true, mute : true, stop : true },
	track  : { delay : true, line : true, size : true, color : true, background : false, trackStyle : false},
	local  : { open : true, openInput : true },
	menu   : { random : true, loop : true, next : true },
	player : {} // set after
}

// This only avoid to manually put each button on above
junive.copyValues(junive.DataInclude.player, junive.DataInclude.source);
junive.copyValues(junive.DataInclude.player, junive.DataInclude.track);

// Basic of event data
junive.DataEvent =  {

	// This Allow to use data on node Ex DATA(myPlayer).play = true;
	global : true,
	
	listener : { // To : improve : put a all : false on addFire
		click : true,  change : true, input: true, drop : true,  dragover : true, keydown : true,
		ended : true, loadedmetadata : true, loadstart : true, durationchange : true, timeupdate : true,
		play : true, pause : true, error : true, volumechange : true, fullchange : true
	},
	
	document : {
		drop : { prevent : true, add : true },
		//key : { prevent : true, firutton : true }
	},
	
	player : {
		convert : { 
			toVtt : true,
			//method : 0 
		},
		
		drop : { prevent : false, add : false, fullscreen : false},
		add  : { play : true},
		
		autoDisplay : true,
		autoDisplayParent : 1,
		toggle : true,
		sliding : true,
		//controlsDef : true,
		
		
		//SlideClick
		//MouseDown
		//initiate : { track : false, source : false }, // Use to initiate only once on set/add source/track
		fire   : {}, // Use in multiple player attach
		reset  : { all : false, delay : true, time : true},
		play   : false,
		full   : false,
		time   : 0,
		volume : 0.30,
		mute   : false,
		delay  : 0,
		line   : 12,
		size   : 1.2,
		color  : "#fff",
		background  : "none",
		trackStyle : {
			"font-family" : "'Trebuchet MS',Helvetica,sans-serif",
			"text-shadow" : "-1px 0 black,0 1px black,1px 0 black,0 -1px #000"
		}
	},
	
	menu : {
		drop : { prevent : false, add : false, fullscreen : false },
		add  : { play : true, replace : true, dual : true }, //, limit : 1000 },
		
		file :   {
			play : true, pause : false, move : true 
		},
		folder : { 
			extend : true, move : true 
		},
		
		autoDisplay : true,
		autoDisplayParent : 1,
		toggle : true,
		sliding : true,
	
		reset   : { all : false },
		random  : false,
		loop    : true,
		indexPlay : 0,
	},
	
	play :  {
		toggle : true, step : "auto",
		on :  { step : false},
		off : { step : true}
	},
	stop : {
		step : true
	},
	full :  { 
		toggle : true, step : "auto",
		on :  { step : false},
		off : { step : true}
	},
	time :  {
		autoDisplay : true, step : 1
	},
	volume :  { 
		step : 0.1
	},
	mute :  { 
		toggle : true, step : "auto", 
		on :  { step : false},
		off : { step : true}
	},
	delay : {
		autoDisplay : true, step : 0.5
	},
	line : {
		autoDisplay : true, step : 1
	}, 
	size :   {
		autoDisplay : true, step : 0.1
		//plus : { step : 0.1 }, // for the example 
		//less : { step : 0.3 }  // for the example 
	},
	color :   {
		autoDisplay : true,
		change : { step : "blue" }
	},
	random : {
		toggle : true, step : "auto", 
		on :  { step : false},
		off : { step : true}
		//, all :  { content : "Random all", "title" : "Random Off" }
	},
	loop :   {
		step : "auto", toggle : true
	},
	next :   {
		step : 1
	},
	open : { step : true },
	openInput : { step : true },


	text : {
		pop : { 
			track: { delay : "Track Delay", line : "Track Position", size : "Track Size" },
			source: { play : "", full : "" },
			navig: { random : "Random", next : "Play" },
			key:   { full : "Keys disable (Please use F)" }
		}
	}
}

// This is just a shortcut from junive.DataEvent(), no mandatory from basic
junive.DataKey = {

	preventKey : [32],
	play   : { key : 32 }, // Space
	full   : { key : 70 }, // F
	volume : { 
		plus : { key : 90 },
		less : { key : 69 },
	}, 
	delay  : {
		plus : { key : 71 }, // G 
		less : { key : 72 }  // H
	},
	line   : {
		plus : { key : 74 }, // J
		less : { key : 75 }  // K
	}, 
	size   : {
		plus : { key : 76 }, // L
		less : { key : 77  }  //M
	},
	color  : {
		change : { key :  1000 },
	},
	time : {
		less : {key : 81},
		plus : {key : 83}
	},
	random : { key : 1000 },
	loop   : { key : 1000 },
	next :   {
		plus : { key : 1000 },
		less : { key : 1000 }
	},
	openInput : {
		file   : { key : 79 }, // O
		folder : { key : 1000 }
	}
}

/**
 * @constructor
 * @description : return the Html nodes
 */
function HtmlClass(newData) {

	var param = newData ? newData : new junive.Data();
	var prefixName = param.prefix.html;
	// If it's not a new Junive.Data(), we merge with defaults
	// param = new junive.DataHtml(); // resole the uncomplete datas
	// if (prefixName === false && newData) junive.merge(param, newData)
	
	// Ex if data.player.html : comming from new Data(), or  data.player from new DataHtml() 
	var prefix = function(datas) {
		if (datas === undefined) return undefined; // Careful Ex box.color is not defined but button.color is
		// In order to work without prefix, datas need to be complete !
		return prefixName === false ? datas : datas[prefixName];
	}
	
	this.prefix = prefix.bind(this); // var prefix is just a easy pretty understanding access
	
	this.getData = function() { return param; }

	this.getNode = function(parent, props) { 
		var n = this.Node(props); HTML(n).init(parent);  return n; }
	this.getPlayer = function(parent, props) {
		var n = this.Player(props); HTML(n).init(parent); return n; }
	this.getTrack = function(parent, props) { 
		var n = this.Track(props);  HTML(n).init(parent); return n; }
	this.getSource = function(parent, props) { 
		var n = this.Source(props); HTML(n).init(parent);  return n; }
	this.getFile = function(parent, props) { 
		var n = this.File(props);  HTML(n).init(parent);  return n; }
	this.getFolder = function(parent, props) { 
		var n = this.Folder(props); HTML(n).init(parent);  return n; }		
	this.getPop = function(parent, props) { 
		var n = this.Pop(props); HTML(n).init(parent);  return n; }
	this.getMenu = function(parent, props) {
		var n = this.Menu(props); HTML(n).init(parent); return n; }
	this.getButton = function(action, role, parent, props) {
		var n = this.Button(action, role, props); if (n) HTML(n).init(parent); return n; }
	this.getBox = function(action, parent, props) {
		var n = this.Box(action, props); HTML(n).init(parent); return n;}
	this.getControl = function(control, parent, props) {
		var n = this.Control(control, props); HTML(n).init(parent); return n;}
	this.getEmbed = function(parent, props) { 
		var n = this.Embed(props); HTML(n).init(parent); return n;}

	this.addFunction = function(name, callBack) {
		var func = junive.match(callBack).name;
		this[func][name] = junive.bind(this, function(parent, props) {
			return this[func](name, parent, props);
		});
	}

	for (var control in param) this.addFunction(control, {getControl:""});
	for (var action in param) this.addFunction(action, {getBox:""});
	for (var action in param) this.addFunction(action, {getButton:""});
		

	// Replace / Add the default properties by next/new ones
	this.getCleanNode = function(newProps, list) {
		var props = {} ;
		// To : improve : should newProps use merge() instead ?
		if (newProps) props = junive.clone(newProps);// Replace everything, always
		 else junive.copyList(props, list);

		return this.Node(props);
	}
		
	this.createTag = function(o) {
		if (o && o.tag) {
			var node = document.createElement(o.tag);
			for (att in o) {
				// To improve : should !junive.isObject be here ?
				// If param is html attribute and not an object
				if (!prefix(param.forbid)[att] && !junive.isObject(o[att])) node.setAttribute(att, o[att]);
			}
			return node;
		} else { console.log("No tag set to Create Element"); return document.createDocumentFragment(); }	
	}

	this.Node = function(props) {
		if (!props) { console.error("Node(props) : No props set to create a new Element"); return null};
		var node = this.createTag(props);
		var safe = HTML(node, true);
		safe.props = props;
		//if (settingsNeeds.content != "") safe.setContent(settingsNeeds.content);

		safe.init = function(newParent) { 
			if (props.content && props.content != "") junive(node).setContent(props.content);
			if (newParent) safe.parent = newParent;
			safe.appendNode();
		}
		
		//safe.superinit = safe.init.bind(safe);

		safe.getQuery = function(nodeParse) {
			return junive.isString(nodeParse) ? document.querySelector(nodeParse) : nodeParse
		}
		
		safe.appendNode = function() { if (safe.parent) safe.getQuery(safe.parent).appendChild(node); }
		safe.deleteNode = function() { if (node.parentNode) node.parentNode.removeChild(node); }
		return node;
	}

	this.Player = function(props) {
		return this.Node(props ? props : prefix(param.player));
	}
	
	this.Pop = function(s) {
		return this.Node(s ? s : prefix(param.pop));
	}
	
	this.Source = function(props) {
		return this.Node(props ? props : prefix(param.source)); 
	}
	
	this.Track = function(props) { 
		return node = this.Node(props ? props : prefix(param.track));
	}

/*	
	this.Box = function(name, props) {
		var boxName = junive.match(name).name;
		var box = this.getCleanNode(props, [param.box, param[boxName].box]);
		
		var safe = HTML(box);
		safe.name = boxName;
		
		//safe.getButton = this.getButton.bind(this);
		//safe.getBox = this.getBox.bind(this);

		safe.addBox =  junive.bind(this, function(childBoxName, props) {
			var newBox = this.getBox(childBoxName, box, props);
			safe[childBoxName] = newBox;
			var htmlChild = prefix(param.box[childBoxName]);
			if (!htmlChild) { console.log("[error] : (addBox) cannot get the children of the box"); return; }
			HTML(newBox).addBoxButtonAll();
			//if (htmlChild.boxes) HTML(newBox).addBoxAll();
		});
		 Not to remove !!!!! 
		safe.addBoxAll = function(props) {
			var boxesToAdd = param.box[boxName].boxes
			if (!boxesToAdd) { console.log("[addBoxAll] : Cannot get the list of boxes to add"); return; }
			for (child in boxesToAdd) {
				if (boxesToAdd[child] == true) {
					safe.addBox(child, props);
				}
			}
		}
	
		return box;
	
	}
		*/

	this.Box = function(action, props) {
		var	paramAction = param[action],
			paramInc = paramAction.include,
			box = this.getCleanNode(props, [ param.box, paramAction.box ]),
			safe = HTML(box);
		
		safe.buttonList = [];
		safe.name = action;
	
		for (var role in paramAction) {
			// If defined, we include the buttons set on include
			if (paramInc !== undefined && paramInc[role] === false) continue;
			
			// Prevent any attributes inserted here (Ex play.tag : "div" / play.step = "auto"
			if (junive.isObject(paramAction[role]))  {
				var button = this.getButton(action, role, box);
				if (!button) continue;
				safe.buttonList.push(button);
				safe[role] = button;
			}
		}
		
		
		return box;
	}
	
	this.Control = function(control, props) {
		var includeBox = param[control].include,
			box = this.getCleanNode(props, [ param.control, param[control].control ]),
			safe = HTML(box);
		
		safe.name = control;
		safe.buttonList = [];
			
		for (action in includeBox) {
			if (includeBox[action] !== true) continue;
			
			var newBox = this.getBox(action, box);
			safe[action] = {};
			var rapatButton = function(button) {
				safe.buttonList.push(button);
				safe[action][HTML(button).role] = button;
			}
			junive.callList(HTML(newBox).buttonList, rapatButton);
		}
		
		return box;
		
	}
/*	
	this.Box = function(name, props) {
		var boxName = junive.match(name).name;
		return param[boxName] != null ? 
			this.ButtonAll(boxName, props) : this.ButtonBox(boxName, props);
		
	}
*/	
	this.Button = function(action, role, props) {
		// Will get the last properties from the list
		var htmlBut = param.button,
			htmlButRole = param.button[role],
			htmlAction = param[action].button,
			htmlRole = param[action][role] ? param[action][role].button : undefined;
		
		// Include on button : if doesn't have html on action/role
		if (!props) { // If no new properties
			// In case it's html, include param on button
			if (param.prefix[role] != null) return null;
			 // If no action is defined
			 else if (htmlAction == null) return null;
			 // If using basic role on button, html become mandatory on them
			 else if (htmlRole == null && junive.basicRole[role] !== undefined) return null;
		}

		var cleanList = [htmlBut, htmlButRole, htmlAction, htmlRole ];
		var button = this.getCleanNode(props, cleanList);
		var safe = HTML(button);
		safe.action = action;
		safe.role = role;
		return button;
	}
	
	this.File = function(props) {
		return this.Node(props ? props : prefix(param.file));
	}
	
	this.Folder = function(props) {
		return this.Node(props ? props : prefix(param.folder));
	}
	
	this.Menu = function(props) {
		var menu = this.Node(props ? props : prefix(param.menu));
		HTML(menu).menu = "name";
		return menu;
	}

	this.Embed = function(props) {
		return this.Node(props ? props : prefix(param.embed));
	}
	
	this.Slide = function(props) {
		return this.Node(props ? props : prefix(param.slide));
	}
}

/**
 * @constructor
 * param united data or DataEvent
 */
function EventClass(newData) {

	// Can be (dataHtml() and/or dataEvent()) OR data();
	//var param = junive.DataArguments(newData);
	var param = newData ? newData : new junive.Data();
	
	// Use to attach function on nodes (getSource(), autoDisplay, etc...)
	this.htmlClass = new HtmlClass(param);

	// We attach data just once on ours nodes
	this.hasData = function(node) { return (DATA(node) !== undefined); }
	
	// Attach the event/html datas properties to a node
	this.attachData = function(node, newData, glob) {
		var stg = DATA(node, true);
		// stg = this.clone(newData) doesn't work
		if (glob) {
			stg.global = newData;
			stg.global.original = junive.clone(newData); // Use in reset;
		} else { // Not in use yet !
			if (junive.isArray(newData) ) junive.copyList(stg, newData);
			 else junive.copy(stg, junive.clone(newData)); // Settings attached
			
			 stg.original = junive.clone(newData); // Use in reset;
		}
	}
	
	// Add and event Listener to node
	this.addListener = function(node, eventType, callFunc) {
		if (eventType == null || callFunc == null) return;
		// true : This is just use in case the function is used before attaching event
		var evt = EVENT(node, true);
		
		// Link the list of event to node
		if (!evt.listeners) evt.listeners = [];
		evt.listeners.push({ type : eventType, fire : callFunc} );
		node.addEventListener(eventType, callFunc);
	}
	
	// Allow to addListener from a fire list Ex : fire["load"] = function();
	this.addFire = function(node, fire) {
		if (node == null || fire == null) return;
		for (eventType in fire) {
			var fireEvent = fire[eventType];
			// fireEvent.custom is use in case of differents browsers Ex : fullscreenchange
			if (!param.listener[eventType] && !fireEvent.custom && !fire.custom) continue;
			if (!junive.match(eventType).custom) this.addListener(node, eventType, fireEvent);
		}
	}

	// Shortcut to get the the event from a type Ex : "drop" or "all" /null
	this.getListeners = function(node, eventType) {
		var listenersCut = [],
			evt = EVENT(node),
			undefEvent = (!eventType || eventType === "all"); // Just check if we have an eventType
		if (!evt || !evt.listeners) return listenersCut;
		
		var add = function(myEvent) {
			// Prevent from an eventType setted that not match
			if (eventType && myEvent.type === eventType) listenersCut.push(myEvent); // Ex { button , "click")
			 else if (undefEvent) listenersCut.push(myEvent); // Ex { button , "all"/null)
		}
		junive.callList(evt.listeners, add);
		
		return listenersCut;
	}
	
	this.getFire = function(node, eventType) {
		
	}
	
	// Shortcut to see if an event has already been added
	this.hasListener = function(node, eventType) {
		return this.getListeners(node, eventType).length > 0;
	}
	
	// Shortcut to remove all the event from a type
	this.removeListener = function(node, eventType) {
		var evt = EVENT(node);
		if (!evt || !evt.listeners) return;
		
		// Avoid to write again matchEvent, undef....
		var listenersCut = this.getListeners(node, eventType);
		
		var remove = function(listener) {
			node.removeEventListener(listener.type, listener.fire);
			var index = evt.listeners.indexOf(listener);
			evt.listeners.splice(index, 1); // remove a specfic event
		}
		// Because using a splice, we call the list with a while
		junive.callListLast(listenersCut, remove);
	}

	// we addFile on attached player or menu
	var fireBlob = function(e, observer) {
		// Check the browser type of blobs on insert
		var getBlobs = function(e) {
			var blobList = [];
			if (e.target.files) blobList = e.target.files;
			 else if (e.dataTransfer.files) blobList = e.dataTransfer.files;
			 else console.log("Can't Open File");
			return blobList;
		}

		junive(observer).addBlobs(getBlobs(e));
		// Full screen is only available on drop (not working with open button)
		if (DATA(observer).drop.fullscreen && e.type === "drop") junive(observer).fullscreen();
	}

	// Tell the button to do something (when click or key or else)
	var fireButton = junive.bind(this, function(e, trigger) {
		// Callings all button from box / button

		var fire = junive.bind(this, function(button) {
			var evt = EVENT(button),
				stg = DATA(button),
				action = junive.match(evt.action), // Use name if direct
				role = junive.match(evt.role);  // Use name if direct

			EVENT(e, true).breakEvent = false;
			
			// button.click() also fire this method (even if we doesn't have a direct addEventListener() because of box !
			if (evt.isTrusted === false) return;  // Make sure it's only call by the trigger
			EVENT(button).isTrusted = true; 
		
			// e.target is very important, on box !!! And also works with button
			var isClick = (e.type == "click" && e.target == button);
			// Change the volume or the currentTime of video 
			var isSliding = (e.type == "input" && e.target == button);
			// The document.keydown doesn't care of the e.target, it does not have one !
			var isKey = e.type === "keydown" && stg.key === e.keyCode;
			// On slide, we check the action plus/less/on/off (stg.step of slide cannot be true/false)
			if (e.type === "keydown" && !isKey && junive(button).isSlide()) {
				role = evt.getBasicKey(e.keyCode);
				isKey = (role !== null);
			}
			
			// Full screen with keyboard IE is not available on IE
			if (isKey && action.full && junive.isIE()) return;

			// To improve : how to handle on = true // off = false with a key == 70 ?
			if (isClick || isKey || isSliding) { // We only fire the buttons once by box
				// Ex add Key(player) with attach on butPlay1/butPlay2 or add Key(butPlay1 & butPlay2)
				if (isKey) {  EVENT(e).breakEvent = true; }// Prevent Double on keydown
				// This is used to cut the loop in a box on click/keys or break an auto button on keys
				if (!junive.isBool(stg.step)) fire.breakMe = true; // Ex : button play / pause == 70 with step == "auto"
			} else return; // we go to next button	


			// We manage the openings button here
			if (junive(button).isInput()) {
				// check if we have attached the button input to a fake, or input is directly calling
				var localControl = action.open ? evt.attachs.openMe[0] : button;
				EVENT(localControl).isTrusted = false;
				
				this.removeListener(localControl, "change"); // We remove the previous Fire
				
				// Callings attached Menu/Player addFiles
				var fireObserveOpen = junive.bind(this, function(observer) {		
					// here we attach the observers with the input
					var fireFiles = function(eChange) {
						fireBlob(eChange, observer);
					}
					// we add the files on all the observers attached
					this.addFire(localControl, { "change" : fireFiles });
				});
				
				junive(trigger).callAttachs({observer:true}, fireObserveOpen);
				
				// This is prevented thanks to isTrusted,  need to be after addFire, because of ie
				localControl.click(); // We simulate the open of files
				
			} else {
				//var vals = (isKey) ? evt.getBasic(e.keyCode) : 
				// cannot use isSliding on adding, because of the click on the end of slide
	/*			var value = stg.step;
				
				if (role.slide) {
					value = button.value;
					todo.adding = false;
				} else todo.adding = true;
				//if   value = -value;
			
				todo[evt.action] = role.less ? -value : value;
		*/		
				// Ex force the volume on mute click, Add Value instead of replacing it
				var todo = { force : true, adding : !role.slide}, 
					val = todo.adding ? stg.step : button.value; // Get button or slide value
				todo[evt.action] = role.less ? -val : val;	
				//var todo[evt.action] = role.less ? -val : val; // We assume that a less button is not a slide

				// Callings attached Menu/Player options
				var fireObserveOption = junive.bind(this, function(observer) {
					var evtObs = EVENT(observer);
					// Ex : button play / pause == 70 with step "true/false"
					if (junive.isBool(stg.step) && stg.step !== DATA(observer)[evt.action]) fire.breakMe = true;
					// Here we apply the button on the observer
					//if (!EVENT(observer).nofire[action.name]) junive(observer).option(todo);
					if (!evtObs.fireAction[action.name]) junive(observer).option(todo);
				});
				
				junive(trigger).callAttachs({observer:true}, fireObserveOption);
			}
		});
		
		// If this function is not call from key Event a second time
		if (!EVENT(e) || !EVENT(e).breakEvent) junive(trigger).callButton(fire);
	});

	// Equivalent of addMenu, addButton.... But for junive.Html elements
	this.handle = function(node, options) {
		//if (node === document) { this.addDocument(); return true; }
		if (!junive.isNode(node)) return false; // If it's not a junive.Html node, we don't care

		if (junive(node).tag.video === true ) this.addPlayer(node, options); // Should be attached with html() ?
		 else if (HTML(node) !== undefined) {  // If it's a node created by this framework
			if (HTML(node).menu !== undefined) this.addMenu(node, options);
			 else if (HTML(node).buttonList !== undefined) {
				 this.addBox(node, options);
			} else if (HTML(node).action !== undefined && HTML(node).role !== undefined)  {
				 this.addButton(node, HTML(node).action, HTML(node).role, options);
			}
		}
		return true;
	}
	
	// Handle the node posted in argument of function
	this.handleArguments = function() {
		var kind = {},
			sizeArgs = arguments.length;
		
		// arguments are setted automaticly when this function is called
		for (var i = 0; i < sizeArgs; i++)  {
			var arg = arguments[i]; // This are node
			// options should always be the last argument
			if (!this.handle(arg, arguments[sizeArgs-1])) continue; // Attach (event)
			// This is gone be used to differentiates each node set in arguments
			if (EVENT(arg).kind !== undefined)	for (key in EVENT(arg).kind) kind[key] = arg;
		}
		return kind;
	}
	
	// Init the data/kind of player, button....
	this.handleInit = function(node, kind, datas) {
		if (this.hasData(node)) return true;
		var event = EVENT(node, true); // Doesn't matter if we init the EVENT again
		if (!event.kind) event.kind = kind; // We create the first kind Ex : observer
		 else junive.copyValues(event.kind, kind); // We merge the kinds together Ex observer with player
		event.callProto = junive.match(kind).name; // We replace the prototype that will be called EX : observer by player 
		event.safeName = "junive"+junive.randomName(); // Use to set set Style on document.head Ex on setCueStyle()
		if (datas != null) this.attachData(node, datas, param.global); // Careful on attaching datas twice...
		return false;
	}
	
	// need this for drop and key Event
	this.addDocument = function() {
		if (this.handleInit(document, {docu : true}, param.document )) return; // In case we want to add something after
		/*
		if (DATA(document) !== undefined) return; // Attach just once
		var evt = EVENT(document, true);
		evt.kind = { docu : true };
		junive(document).attachData(param.document, param.global);
		*/
	}
	
	// Shortcut between player and menu, we know which one is at this point
	this.addObserver = function(observer, options) {
		if (this.handleInit(observer, {observer : true})) return; // do nothing if childs has datas..

		var evt = EVENT(observer),
			fire = {};
		
		evt.fireAction = {}; // Allow to detach some action from a player/menu
		
		//EVENT(observer).nofire = {}; // Allow to disable an action on player
		//var name = junive.match(nodeName).name;
		
		//if (this.hasData(node)) return true; // Attach just once
		
		// We init event on observer 
		//var evt = EVENT(node, true);
		
		// Use in controler
		//evt.kind = JSON.parse( '{ "' + name +'":'+ true +'}');
		//evt.kind.observer = true;	
		//evt.proto.observer = true;
		
		//evt.safeName = "junive"+junive.randomName();

		// Attach Data to Menu/Player
		//junive(node).attachData(param[name], param.global);
		
		if (options && options.event === false) return;
		
		// We add it for both player/menu
		fire["drop"] = function(e) {
			if (DATA(observer).drop.prevent === true ) e.preventDefault();
			if (DATA(observer).drop.add) fireBlob(e, observer);
		};
		
		// Use to not redirect the drop on an other page
		fire["dragover"] = function(e) {
			if (DATA(observer).drop.prevent === true ) e.preventDefault();
		};
		
		this.addFire(observer, fire);
	}

	// Add All the events to player
	this.addPlayer = function(player, options) {
		this.addObserver(player, options); // Extend the function of observe, and set its kind
		// This has always has to be after addObserver, in order to set the prototype called
		// We cannot use !player.controls on events in case we change an attr on player via js
		if (this.handleInit(player, {player:true}, param.player)) return; // Attach data and event to player just once
		//var firstMute = false; // Corect a bug from browser that set player.muted = false when sliding to player volume 0, and release the mouse
		
		//if (this.hasData(node)) return true;
		//if (this.addObserver(player, options)) return;
		
		var evt = EVENT(player),
			stg = DATA(player),
			fire = {},
			include = {};

		
		
		for (var action in param) {
			var inc = param[action].include
			if (inc != null) include[action] = inc;
		}
		
		/*
		var include = junive.bind(this, function(name) { // The buttons to autoDisplay
			return param[junive.match(name).name].include;
		});
		*/
		
		var createNode =  junive.bind(this, function(props) {
			return this.htmlClass.getNode(player, props);	
		});
		
		// revoke the url and delete the childs if specified
		evt.cleanChilds = function(childName) {
			var match = junive.match(childName);
			
			// If we clean the player.src
			if (match.source && player.src != "") {
				var url = player.src;
				player.src = "";
				player.removeAttribute("src");
				console.log("REMOVED player :"+url);
				URL.revokeObjectURL(url);
				delete url;
			// clleaning the sources/tracks of video tag
			} else if (player.childNodes.length > 0) {
				var cleanChild = function(child, key) {
					if (!HTML(child) || HTML(child).nameTo !== match.name) return;
					//console.log("REMOVED :"+child.src);
					URL.revokeObjectURL(child.src);
					player.removeChild(child);
				}
				junive.callList(player.childNodes, cleanChild); 
			}

			// Nothing happen if player.auutoDisplay.media = false
			junive(player).autoDisplayButtons(include[match.name], false); 
		}
 
		evt.createChild = function(childName, propsIn) {
			// Reminder : junive.merge(param.track.html, trackClean);  merge doesn't work with blobs
			// Reminder : junive.merge(trackClean, {default:""});  default not working twice
			var match = junive.match(childName), // Use to minify
				clean = junive.hasContent(propsIn) ? propsIn : {content : propsIn}, // Add a content if necessary
				props = junive.getCopy(param[match.name].html, clean); // add <source> Tag if not set;
			var childNode = createNode(props);
			HTML(childNode).nameTo = match.name; // Use on clean up
			
			if (match.track) { // We show by default the track, if not set by user
				if (!propsIn.default || !propsIn.trackMode) childNode.track.mode = "showing";
				 else if (propsIn.trackMode) childNode.track.mode = attrs.trackMode;
			}	
			
			//stg.initiate[match.name] = true; // Initiate button/track on load metadata
			
			return childNode;
		}
		
		// Set Src directly on player, not on its childs
		evt.setSrc = function(src) {
			junive(player).setContent(src);
			//stg.initiate.source = true;
			//junive(player).autoDisplayButtons(include.source, true);
		}
		
		if (options && options.event === false) return;
		
		fire["error"] = function(e) {
			// We do not display the empty string error
//			if (player.src !== "")
			console.error("[junive] : Can't play this source");
		}
		
		fire["loadedmetadata"] = function(e) {
			// TextTrack is loaded before "loadedmetadata" but not its cues !
			var textTrack = junive(player).activeTextTrack();
			// We add a <c.cssName> to cues, do nothing if exist
			if (textTrack != null) junive(textTrack).changeCuesCss(evt.safeName);

			var inc = (textTrack != null) ? include.player : include.source;
			junive(player).resetData(inc);
			junive(player).autoDisplayButtons(inc, true);
			//stg.initiate[match.name] === true;
			//junive(player).resetData(include.track);
			//junive(player).resetData(include.source);  // Reset Data each time we play a new Video
			// To improve : Where do I have to put the reset menu ?
			//junive(player).callAttachs({menu:true}, function(menu) {junive(menu).resetData()})
		}
		
		// We set the slide max
		fire["durationchange"] = function(e) {
			 // Why we reset here ? because we need to force the currentTime
			if (stg.reset.time === true) junive(player).option({time : stg.original.time, force : true});
			//stg.time = stg.original.time; // reset the currentTime
			var setDuration = function(button) {
				if (junive(button).isSlide()) {
					button.setAttribute("min" , 0);
					button.setAttribute("max" , player.duration);
				}
			}
			junive(player).callButton(setDuration, {time:""})
		}
		
		fire["timeupdate"] = function(e) {
			if (stg.time === player.currentTime) return;
			// We only shift the button here :
			junive(player).option({ time :  player.currentTime });
		}
	
		fire["volumechange"] = function(e) {
			//junive(player).option( { "volume" :  (- (DATA(player).volume - player.volume)) });

			
			// call from defaults controls, reset or mute, we apply the changes on buttons or slide
			//if (!stg.controlsDef) return;
			if (stg.volume !== player.volume) // Will manage the volume and the shift of mute
				junive(player).option( {volume : player.volume, force : true }) ;
			 else if (stg.mute !== player.muted)  // Use an else because of the click on it
				junive(player).option( {mute : player.muted, force : true }) ;

		}
		
		// Menu will fire next file on Player 1 or 2 at ended, first attached menu taken
		fire["ended"] = function(e) {
			if (!evt.attachs || !evt.attachs.menu) return;
			// To improve : should attach(menu1, menu2) or choose the menu to loop
			var menu = evt.attachs.menu[0];
			var dataMenu = DATA(menu);
			if (dataMenu.random === false) { // If random is on, we always play a next
				// Check if it's the last file playing
				var isLast = dataMenu.indexPlay === (junive(menu).getFiles().length -1)
				if (dataMenu.loop === false && isLast)  return;
				//if (DATA(menu).loop === false)  return; // When all will be implemented
				if (dataMenu.loop === "all" && isLast)  return;
			}
			junive(menu).option({ next : 1 });
		}
		
		// Allow to toggle button with default controls
		var firePlayPause = function(e) {
			//if (!stg.controlsDef) return;
			// Only works when controls are available, we toggle/slide the buttons
			var toPlay = (e.type === "play"); // Careful if buttons are called twice in auto !!
			// Reverse : if (stg.play !== e.type && player.controls == true)
			if (stg.play === toPlay) return;
			junive(player).option({ play : toPlay });
		}
		
		fire["play"] = firePlayPause;
		fire["pause"] = firePlayPause;
		
		// Need to do this because full event listener depends on browsers
		var fireFullScreen = function(e) {
			//if (!stg.controlsDef) return;
			if (stg.full === junive.isFull()) return;
			junive(player).option({ full : junive.isFull() });
		}
		fireFullScreen.custom = true; // Use this when junive data has it's own name Ex param.listener["fullchange"]
		
		// param.listener is normally handle by addOnce, but in order to simply it, we use it here as custom
		if (param.listener.fullchange === true) {
			fireFull = {}
			if (document.fullscreenEnabled) fireFull["fullscreenchange"] = fireFullScreen;
			 else if (document.msFullscreenEnabled) fireFull["MSFullscreenChange"] = fireFullScreen; //IE 11
			 else if (document.mozFullScreenEnabled) fireFull["mozfullscreenchange"] = fireFullScreen;
			 else if (document.webkitFullscreenEnabled) fireFull["webkitfullscreenchange"] = fireFullScreen;
			this.addFire(document, fireFull);
		}
		
		this.addFire(player, fire);
	}

	// Add All the events to menu
	this.addMenu = function(menu, options) {
		// Attach data and event to menu just once
		this.addObserver(menu, options); // Extend the function of observe, and set its kind
		// This has always has to be after addObserver, in order to set the prototype called
		if (this.handleInit(menu, {menu:true}, param.menu)) return; // Attach data and event to menu just once
		
		var evt = EVENT(menu),
			includeMenu = param.menu.include; // Use to autoDisplay button;

		// Add a new file to menu source/track defined on proto.player
		evt.addPlug = junive.bind(this, function(sourceContext, trackContext, propsIn) {
			var fileFire = {},
				clean = junive.hasContent(propsIn) ? propsIn : {content : propsIn} , // If no filePut : {content : undefined}
				copy = junive.getCopy(param.file.html, clean), // copy/replace with default datas
				fileNode = this.htmlClass.getFile(menu, copy),
				fileEvt = EVENT(fileNode, true);

			// This is use in Menu to play attached source / tracks
			fileEvt.sourceContext = sourceContext ? sourceContext : []; // To improve : should be undefined by default
			fileEvt.trackContext = trackContext ? trackContext : []; // To improve : should be undefined by default
			fileEvt.kind = { plug : true };//, trigger : true };
	
			fileFire["click"] = function() {
				if (!DATA(menu).file.play) return;
				
				junive(menu).playFile(fileNode);
				//junive(menu).playFile(evt.attachs.plug.indexOf(plug));
			};
			
			this.attach(fileNode, menu);
			this.addFire(fileNode, fileFire);
			
			junive(menu).autoDisplayButtons(includeMenu, true);
			//delete fileFire;
			return fileNode;
		});
		
		if (options && options.event === false) return;
		
	}
	
	// Resolve the problem of data in addBox be fore dequote
	// Shortcut between box and button, we know which one is at this point
	this.addTrigger = function(trigger, options) {
		//var name = junive.match(nodeName).name;
		
		if (this.handleInit(trigger, {trigger : true})) return; // do nothing if childs has datas..
		
		
		var fire = {};
		
		if (options && options.event === false) return;
		

		fire["click"] = function(e) {
			fireButton(e, trigger);
		}
		
		fire["input"] = function(e) {
			fireButton(e, trigger);
		}
		
		this.addFire(trigger, fire);
		
	}


	
	// Attach any box to this system, use to replace box.buttonList and that it !
	this.addBox = function(box, options) {
		//if (EVENT(box) !== undefined) return; // we do not have data on box, so we check on EVENT added
		this.addTrigger(box, options); // Extend the function of Trigger, and set its kind
		if (this.handleInit(box, {box:true}, {"none":""})) return; // No data to attach ! but needed to prevent an other add of same box
			
		var evt = EVENT(box),
			buttonList = HTML(box).buttonList,
			fire = {};
		
		//evt.kind = { box : true, trigger : true };
		
		// Here we attach the html button with box
		var attachButton = junive.bind(this, function(button) {
			var action = HTML(button).action,
				role = HTML(button).role;

			// The events are handle by this box, attached/add(box) somewhere
			this.attach(box, button, {event : false}); // Do not want default event on button
			
			if (junive.match(action).open) { // If it is a simple <div> that want to use <input file>
				var searchInput = junive.bind(this, function(newButton) {
					var newAction = HTML(newButton).action;
					isOpenInput = junive.match(newAction).openInput;  // If it is the <input file>
					if (!isOpenInput || role !== HTML(newButton).role) return; // if <div> match with <input file>
					this.attach(newButton, button, {event : false}); 
					//event(button).openMe = newButton;
				});
				// we a call again the list on input to search for matching input button
				junive.callList(buttonList, searchInput); 
			}
			
		});
		junive.callList(buttonList, attachButton); // Callings all html buttons
		

		
		// Allow to not handle keydown from player/menu
		if (options && options.event === false) return;
		
		// In case we need something specfics to box
		
		this.addFire(box, fire);
	}

	
	// Attach any button to this system
	this.addButton = function(button, action, role, options) {
		this.addTrigger(button, options); // Extend the function of trigger, and set its kind
		var data = [param[action], param[action][role]];
		if (this.handleInit(button, {button:true}, data)) return; // Attach data and event to button just once
		
		var evt = EVENT(button),
			fire = {};
			
		//evt.kind = { button : true, trigger : true };
		
		// Use to attach a <div> with an <input file>
		if (junive.match(action).openInput) evt.kind.openMe = true;
		
		// Use to increase access on button when calling by player (old player.buttons)
		evt.kind[action] = true;
		
		evt.action = action;
		evt.role = role;
		
		
		//evt.basicData = data[0]; // param.button[action]
		
		evt.getBasicKey = function(key, defRole) {
			//var dataAction = param.button[action];
			//	out = (dataAction.key === key) ? defRole : null; // It's a key on on/off
			for (var r in junive.basicRole) { // Equivalent of DATA() { copyList }
				var dataRole = param[action][r];
				if  (dataRole && dataRole.key === key) return junive.match(r);
			}
			return null;
		}
/*		
		evt.getBasic = function(search) {
			for (var roleBasic in data[0]) { // We'll check all baasic button matching
				var dataBasic = junive.copyList(data[0], data[0][roleBasic]);
				var basicRole = evt.basicData[r]; // We search the associated button to data
				if (basicRole && basicRole[search === key) return r; // We return the role matching
			}
		}
		
		// Allow to get attach on slide/single from on/off/plus/less keys
		evt.getRoleKey = function(key) {
			if (!key) return null; // We do nothing if not a key event
			 // we return the defaults data if on/plus...
			if (junive.basicRole[role] != null) {
				if (key === DATA(button).key) return role;
			} else {
				return evt.getBasic(key);
			}
			return null;
		}
*/		
			

		// Last data will called
		//junive(button).attachData([param.button[action], param.button[action][role]], param.global);
			
		// Allow to not handle the click from box
		if (options && options.event === false) return;
		
		
		// In case we need something specfics to button
		

		//addInputEvent(button);
		this.addFire(button, fire);
	}
	
	// Attach Event Betwteen box/buttons and player/menu
	this.attach = function(node1, node2, options) {
		// Allow To distinguish node in this function
		var kind = this.handleArguments(node1, node2, options);

		if (!kind.trigger && !kind.observer) { console.log("[error] : Cannot get a valid node to attach"); return; }

		// Use for setDisplay / toggleButton / handle input
		var buttonObserve = function(button) {
			var action = EVENT(button).action,
				dataObs = DATA(kind.observer);
			
			// Here we toggle the buttons if true (such as on/off)
			var todo = junive.shorto(action, dataObs[action]);	

			if (dataObs.autoDisplay) { // Ex : if player.autoDisplay == true
				//console.log(button);
				var autoParent = dataObs.autoDisplayParent // Use to display a whole box, instead of button
				junive(button).autoDisplayButton(false , autoParent ); // If button.autoDisplay == true, we hide it
			}
			
			// Always after auto display ! Else, it will show the button
			junive(kind.observer).option(todo);
		};
		

		// Here's our old EVENT(player).buttons
		var attachBoth = function(first, second) {
			var evt1 = EVENT(first),
				evt2 = EVENT(second);
			if (!evt1 || !evt2) { console.error("[junive] : Cannot attach those node :", first, second ); return }
			// We create a list of kind (attachs.trigger, attachs.button...)
			if (!evt1.attachs) evt1.attachs = {};
			for (var key in evt2.kind) { // kind : {button:true, trigger:true}
				if (!evt1.attachs[key]) evt1.attachs[key] = [];
				if (evt1.attachs[key].indexOf(second) === -1) evt1.attachs[key].push(second); // We add the node just once
			}
		}
		
		if (this.hasAttach(node1, node2)) return;
		
		attachBoth(node1, node2);
		attachBoth(node2, node1);
				
		if (kind.trigger && kind.observer) {
			if (!options || !options.noShift) junive(kind.trigger).callButton(buttonObserve);
		}

	}

	
	// Shortcut to see if a node is attached with an other
	this.hasAttach = function(node1, node2) {
		var evt1 = EVENT(node1),
			evt2 = EVENT(node2);
		if (!evt1 || !evt1.attachs || !evt2 || !evt2.attachs) return false;
		var kind = junive.match(evt2.kind).name; // Get the first kind
		return junive(node1).callAttachs(kind, function() {});
	}
	
	// Shortcut to see if a node is attached with an other
	this.hasAttachKind = function(node, kinds) {
		var evt = EVENT(node);
		if (!evt || !evt.attachs) return false;
		return junive(node1).callAttachs(kinds, function() {});
	}

	// Detach a box/button from player/menu
	this.detach = function(node1, node2) {
		var remove = junive.bind(this, function(first, second) {
			var evt1 = EVENT(first);
			if (!evt1 || !evt1.attachs) return false;

			for (var kind in evt1.attachs) { // keys : observer / button / trigger....
				var splice = function(node, key) {
					if (node === second) {
						evt1.attachs[kind].splice(key, 1); // delete the second
						if (evt1.attachs[kind].length === 0) delete evt1.attachs[kind];
						splice.breakMe = true; // It should be attached just once by kind
					}
				}
				junive.callListLast(evt1.attachs[kind], splice);
			}
			
			//if (junive.getSize(evt1.attachs) === 0) this.removeListener(first);
			
		});
		remove(node1, node2);
		remove(node2, node1);
	}
	
	// activate/desactive an action on an observer
	this.observeAction = function(observer, action, doit) {
		if (!EVENT(observer)) { console.error("[junive] : Please attach/add the observer before"); return;}
		EVENT(observer).fireAction[junive.match(action).name] = !doit;
	}
	
	// Need to be outside because /1 : it's general /2 :document can add many drop as he want 3/ No mandatory for document
	this.addDrop = function(observer) {
		var kind = this.handleArguments(observer),
			fire = {};
		
		if (!kind.observer) { console.log("[error] : Cannot add document drop on this node : " + observer); return; };
		this.addDocument();
		
		fire["drop"] = function(e) {
			if (DATA(document).drop.prevent === true ) e.preventDefault();
			if (kind.observer && DATA(document).drop.add) fireBlob(e, kind.observer);
		};
		
		// Use to not redirect the drop on an other page
		fire["dragover"] = function(e) {
			if (DATA(document).drop.prevent === true ) e.preventDefault();
		};
		
		this.addFire(document, fire);
	};
	
	this.addKey = function(node, opt) {
		var kind = this.handleArguments(node),
			evt = EVENT(node),
			fire = {};

		if (!kind.observer && !kind.trigger) { console.log("[error] : Cannot add document key on this node : " + node); return; };
		
		this.addDocument(opt);
		
		if (opt == null) { // We create the defaults key
			opt = junive.DataKey;
			junive.mergeKeep(param, opt);
		} else if (evt.kind.button && opt.key) {  // Ex : add Key(playBut, { prevent : 32, key : 32,});
			junive.merge(param[evt.action][evt.role], opt);
		} else  junive.merge(param, opt);  // Ex add Key(box, { prevent : [32, 33], play : {...}}
		
/*		else if (opt.key) { // to improve it's a mess ?
			if (evt.action.single) junive.merge(param.button[evt.action], opt); // Ex : add Key(playBut, { prevent : 32, key : 32,});
			 else junive.merge(param.button[evt.action][evt.role], opt); // Ex : add Key(sizeBut, {prevent: 33, plus : {key : 33});
		 }
		 */
		 
		// To improve : put fakeBox directly on this.addKey (and not fire["keydown"]);
		// Create fakes button that will be handle on key down (in case we have an extern player OR don't want the buttons)
		var fakeHtml = junive.bind(this, function(e) {
			// If duplicate the input addKey(player) && addKey(menu) : should be handle in fireButton
			// Such as a addKey(player) && addKey(player) 
			var fakeInput = this.htmlClass.getBox.openInput(node.parentNode);
			var fakeBox = null;
			
			if (kind.menu) fakeBox = this.htmlClass.getControl.menu();
			 else if (kind.player) fakeBox = this.htmlClass.getControl.player();
			
			// We do not need the event (click, ...) of the fake trigger
			this.attach(fakeInput, node, {event : false});
			this.attach(fakeBox, node, {event : false});
			
			// This need to be binded/cloned because we detach after
			fireButton(e, fakeInput);
			fireButton(e, fakeBox);
			
			this.detach(fakeInput, node);
			this.detach(fakeBox, node);
			if (node.parentNode)  node.parentNode.removeChild(fakeInput);
			delete fakeInput;
			delete fakeBox;
		});
		
		fire["keydown"] = junive.bind(this, function(e) {
			var key = e.keyCode;
			if (opt.preventKey) { // Prevent in integer or array
				var prev = opt.preventKey;
				if (junive.isArray(prev) && prev.indexOf(key) !== -1) e.preventDefault(); // Ex prevent = [32, 35...]
				 else if (prev === key) e.preventDefault(); // Ex prevent = 32
			}
			
			var setOption = function(trigger) {
				fireButton(e, trigger);
			}
			
			if (kind.trigger) setOption(node); // If box/button
			 else if (kind.observer){ // If player/menu
				// If player/menu hasn't attached box/button, we call the fakes

				// To improve : Mettre le fake html dans le addKey direct !!!!!
				if (!junive(node).callAttachs( {trigger:true}, setOption ) ) fakeHtml(e);
			}
		});
		this.addFire(document, fire);
	}


	/*	
	this.setPopEvent = function(player) {
		if (param.listener.player.pop == true) {
			//if (player.settings.parent != null && !newPopNode) var popNode = html.getPop("", player.settings.parent);
			// else console.log("Parent's player have been initiated after the pop");
			//if(!player.pop) player.pop = newPopNode ? newPopNode : popNode;
			//if(!player.pop && newPopNode) player.pop = newPopNode ;
			player.pop.message = function(msg) {
				if (msg != "" && msg != "true" && msg != "false") {
					clearTimeout(player.pop.isShow);
					player.pop.settings.setContent(msg);
					player.pop.show();
					player.pop.isShow = setTimeout( function() {
						player.pop.hide(); 
					}, this.stg.pop.action.delay );
				}
			}
		}
	}
*/
	this.popMessage = function(button, observer) {
		/*
		var buttonType = button.settings.controls;
		if (this.stg.text.pop[buttonType] && this.stg.text.pop[buttonType][button.settings.action]) {
			var popText = this.stg.text.pop[buttonType][button.settings.action] ;
			if (popText != "") {
				if (button.settings.track && control.textTrack.activeTextTrack(observer) == null) popText = "";
				 else popText = popText + " " + observer.stg[buttonType][button.settings.action];
				if (observer.pop && observer.pop.message) observer.pop.message(popText);
				 else if (observer.playerList) {
					observer.playerList.forEach(function(player) {
						//if (player.pop) player.pop.message(popText); 
					});
				 } 
			}
		}	
		*/
	}
}


/**
 * @constructor
 */
function ControlClass() { 

	this.basicRole = { // basic that we'll used in toggle or keydown
		off : false, on : true, all: "tog", plus : "step", less : "step"
	}

	this.initStyle = function() {
		if (this.style !== undefined) return;
		this.style = document.createElement("style");
		this.style.type = "text/css";

		if (document.head) document.head.appendChild(this.style);
		 else document.addEventListener("DOMContentLoaded", function(event) {
			 document.head.appendChild(this.style);
		 });
	}

	/*
	this.cleanStyle = function() {
		if (this.style === undefined) return;
		document.head.removeChild(this.child);
		delete this.child;
	}
	*/

	this.setStyle = function(newStyle, oldStyle) {
		if (oldStyle !== undefined) { // Replace it if exist
			this.style.innerHTML = this.style.innerHTML.replace(oldStyle, newStyle);
		} else this.style.innerHTML = this.style.innerHTML + newStyle;
	}
	 
	// Check if elem is an object and not null/undefined
	this.isObject = function(elem) { return (elem != null && elem instanceof Object ); }
	
	// Check if elem is an array
	this.isArray = function(elem) { return elem instanceof Array; }
	
	// Check if elem is an array
	this.isFunction = function(elem) { return typeof elem === "function" }

	// Check if elem is a boolean
	this.isBool = function(elem) { return typeof elem === "boolean" }
	
	// Not have elem != "" because Ex volume = "" or controls = "";
	this.isString = function(elem) { return (typeof(elem) === "string" && elem != null); }
	
	// Check if elem is Blob or File
	this.isBlob = function(elem) { return elem instanceof Blob || elem.codec; }
	
	// Check if elem is a dom element
	this.isNode = function(elem) { return elem instanceof HTMLElement; }

	this.browser = navigator.userAgent;
	
	// Check if it is Internet Explorer browser
	this.isIE = function() { return /*@cc_on!@*/false || !!document.documentMode; }
	
	// Check if it is Edge browser
	this.isEdge = function() { return !this.isIE() && !!window.StyleMedia; }
	
	// Check if it is both IE and edge
	this.isMicro =  function() { return this.isIE() || this.isEdge(); }
	
	// Check if elem is a TextTrack (correcting bug on old safari)
	this.isTextTrack = function(elem) { 
		try { return elem instanceof TextTrack; }
		 catch(e) { return false; }
	}
	
	// When we do not not know if receive a string, int or bool (EX input range (slide) return a string "1" / "0")
	this.getBool = function(value, valAuto) {
		if (value === false || value === 0 || value === "0" || value === "false") return false;
		 else if (value === true || value === 1 || value === "1" || value === "true") return true;
		 else if (valAuto != null && value == "auto") return valAuto;
		 else { console.log("[error] : cannot get the boolean value of "+value); return undefined;}
	}

	// will return the content of property, else return the elem itself
	this.getContent = function(props) { // If undefined, do nothing on isBlob() or setContent()
		if (!props) return undefined;
		 else if (props.content !== undefined) return props.content;
		 else if (props.src !== undefined) return props.src;
		 else return props;
	}
	
	// Will check if property is object with a content
	this.hasContent = function(props) { // if props is undefined, do nothing thanks to setContent()
		return this.getContent(props) !== (props || undefined);
	}
	
	// Deprecated : Resolve the JSON.parse( {action : true} ) and then if action === true
	this.parse = function(obj1, obj2) {
		if (this.isString(obj2)) return JSON.parse( '{ "' + obj1 +'":"'+ obj2 +'"}');
		 else if (obj2 !== undefined) return JSON.parse( '{ "' + obj1 +'":'+ obj2 +'}');
		 else return JSON.parse( '{ "' + obj1 +'":""}');
	}
	
	// This is our old parse function
	this.shorto = function(obj1, obj2) {
		var obj = {};
		// We cannot put key of object if it is a function or object...
		if (this.isObject(obj1)) return undefined;
		obj[obj1] = obj2;
		return obj;
	}
	
	
	// Allow to use "this" on a var / safe function
	this.bind = function(caller, func) { 
		return function() {
			return func.apply(caller, arguments);
		}
	}
	
	// Correct a bug coming from the add of float value (that give 1.0000000000001)
	this.twoDecimal = function(number) {
		return Math.round(number * 100) / 100;
	}
	
	// Return the value between min and max
	this.safeMinMax = function(number, min, max) {
		var newValue = this.twoDecimal(number);
		if (number < min) newValue = min;
		 else if (number > max) newValue = max;
		return newValue;
	}
	
	// max is exclude from return value, exludeVal is never return
	this.getRandomInt = function(min, max, excludeVal) {
		var newValue = Math.floor(Math.random() * (max - min)) + min;
		if (newValue === excludeVal && (max - min) > 1) // Need 3 values
			return this.getRandomInt(min, max, excludeVal)
		 else return newValue;
	}
	
	// Check if player is in fullscreenmode
	this.isFull = function() {
		if (document.fullscreenElement) return true;
		else if (document.msFullscreenElement) return true;
		else if (document.mozFullScreenElement) return true;
		else if (document.webkitFullscreenElement) return true;
		return false;
	}
	
	// Create a random string
	this.randomName = function() {
		return Math.random().toString(36).substr(2, 15);
	}
	
    // This allow an hard minify Ex {source:""} === "source"
	this.match = function(elem) {				
		var match = {};
		var name = "";
		if (this.isString(elem)) name = elem;
		 else if (this.isObject(elem)) {
			 for (value in elem) { name = value; break;}
		 }
		if (name === "") return undefined;
		match[name] = true;
		match.name = name;
		return match;
	}
	
	// Get the number of key in an object
	this.getSize = function(obj) {
		var size = 0;
		for (var key in obj) size++;
		return size;
	}
	
	// Include an other script
	this.includeScript = function(url, callback){
		var nodeScript = document.createElement('script');
		nodeScript.type = 'text/javascript';
		nodeScript.src = url + '?' + (new Date().getTime());
		if (callback) {
			nodeScript.onreadystatechange = callback;
			nodeScript.onload = nodeScript.onreadystatechange;
		}
		document.getElementsByTagName('head')[0].appendChild(nodeScript);
	}

	// Replace the loop with a callback, breakMe help to break the callFunc
	this.callList = function(list, callFunc) {
		for (var i = 0; i < list.length ; i++) {
			if (callFunc.breakMe)  break;
			callFunc.call(callFunc, list[i], i);
		}
	}
	
	// If we use splice into list
	this.callListLast = function(list, callFunc) {
		var i = list.length;
		while (i-- && i >= 0) { // Because of th
			if (callFunc.breakMe)  break;
			callFunc.call(callFunc, list[i], i);
		}
	}
	
	// Check if calling function return true, and break the loop
	this.callListBool = function(list, callFunc) {
		for (var i = 0; i < list.length; i++) {
			if (callFunc.call(callFunc, list[i]) === true) return true; 
		}
		return false;
	}
	
	// Call an array if defined, else call the function
	this.callContext = function(context, callFunc) {
		if (!context) return;
		if (!this.isArray(context)) callFunc(context);
		 else this.callList(context, callFunc);
	}
	
	// return a new copy of two values
	this.getCopy = function(obj1, obj2) {
		var newCopy = {};
		this.copyValues(newCopy, obj1); // We get only the defaults attributes (that we can rewrite)
		this.copy(newCopy, obj2); // We get the new Param (need to be copy because of blob)
		return newCopy;
	}
	
	// Shortcut from copy function
	this.merge = function(obj, obj2) { this.copy(obj, obj2, {merge:true}); }
	
	// Shortcut from copy function do not replace value if exist
	this.mergeKeep = function(obj, obj2) { this.copy(obj, obj2, {merge:true, keep:true}); }
	
	// Shortcut from copy function
	this.copyValues = function(obj, obj2) { this.copy(obj, obj2, {values:true}); 	}
	
	// Shorcut that copy values from a list of object Ex param.button with param.button.play
	this.copyList = function(obj, list, todo) {
		for (var i = 0; i < list.length; i++ ) { //Then, if firstObj has child
			if (list[i] != null) this.copyValues(obj, list[i]);
		}
		return obj;
	}

	// Simply copy the values of an object
	this.copy = function(obj, obj2, todo) {
		if (!obj || !obj2) return;
		// Important !!!! : Always use var on loop !!!!! moreover on recusrive

		for (var key in obj2) {
			var value = obj2[key],
				isObj = this.isFunction(value) || this.isObject(value);
			
			// Simple copy between the objects
			if (todo == null) { obj[key] = value; continue;}
			// We only copy the value of obj2 Ex : we do not copy button.play.html {}
			if (todo.values === true) { if (!isObj) obj[key] = value; continue; }
			if (todo.merge === true) { // We merge obj with obj2
				//if (obj2.button) console.log(key, obj[key], obj2.button, todo);
				var initObj = this.bind(this, function(newKey) {
					// If we want to assign a function to the object to copy
					if (todo.init) obj[newKey] = todo.init(obj, newKey);
					 // We create a simple new Object/function
					 else obj[newKey] = this.isFunction(value) ? value.bind({}) : {};
				});
				
				if (todo.prefix != null) { // We add a prefix to each object
					// We create a prefix (object or not) EX data.play.on[button]
					if (obj[todo.prefix] === undefined) initObj(todo.prefix);
					// Avoid any misunderstanding in all the object ! just add name on the specifics prefix
					if (this.match(key).prefix && obj2.prefix[todo.prefix] === false) {
						if (obj.prefix === undefined) obj.prefix = {}; // We create a new prefix to obj if not set before
						obj.prefix[todo.prefix] = todo.prefix; // We replace prefix.html = false by prefix.html = "html";
					}
				}
				
				// We create a new Object if not defined 
				if (obj[key] === undefined && isObj) initObj(key);
				
				if (isObj) {
					var newTodo = this.clone(todo); // Not messing with the global object todo
					if (newTodo.prefix === key) delete newTodo.prefix;  // we do not add prefix on object with same name
					this.copy(obj[key], value, newTodo); // call recursive
				} else if (todo.prefix) obj[todo.prefix][key] = value; // Ex data.button.html.tag = "div"
				 else if (!todo.keep) obj[key] = value; // We replace the value;
				 else if (!obj[key]) obj[key] = value; // We only add value if obj[key] doesn't exist

			}
		}
	}
	
	// Avoid to mix the properties (ex player1.delay != player2.delay)
	this.clone = function(obj) {
		//try { // First try to clone as String (faster)
			//return JSON.parse(JSON.stringify(obj));
		//} catch(error) { // If obj : { attr : function() }
			// We first define the copy as function or object
			var copy = this.isFunction(obj) ? obj.bind({}) : {};
			this.merge(copy, obj);
			return copy;	
		//}
	}
		
	// Return the type of node to control
	this.getPrototypeName = function(elem) {
		//if (!elem) { console.log("[getPrototypeName] : elemnt is null"); return; }
		var evt = EVENT(elem);
		
		if (evt !== undefined && evt.callProto !== undefined) return evt.callProto; // evt.kind.player = true
		 else if (this.isTextTrack(elem)) return { textTrack : true }; 
		 else if (this.isBlob(elem)) return { blob : true };
		 else if (this.isNode(elem)) return { node : true };
		 // Reminder : Never Ever use this follow !! Ex : document is an Object,
		 // and use the general junive.node.tag of others setted before....
		 // else if (typeof elem === "object") {console.log("Titi"); return { object : true }; }
		 else return null;
	}
	
	// Return the controler called
	this.getPrototype = function(elem) {
		if (!elem) return;
		var ctrl = this.getPrototypeName(elem);
		if (ctrl == null) { console.log("[error] : Cannot get the prototype of : " + elem); return; }
		return this[this.match(ctrl).name](elem);
	}
}

// Because it's a singleton, prototype is only use to reduce tabulation 
// This is the same as function ControlClass() { this.node = function() }
// This can be tricky if you try to call a prototype on top !

ControlClass.prototype.textTrack = function(textTrack) {

	// Add an option directly to cue Ex : line
	this.changeCuesOpt = function(opt, value) {
		var cues = textTrack.cues;
		for (var i = 0; i < cues.length; i++) {
			cues[i][opt] = value; 
		}
	}
	
	// Add a new css to track
	this.addCuesCss = function(cssName) {
		var cues = textTrack.cues;
		for (var i = 0; i < cues.length; i++) {
			cues[i].text =  "<c.pp."+ cssName +'.colo>'+ cues[i].text +"</c>"; 
		}
	}
	
	// Replace the current Css By a new one
	this.replaceCuesCss = function(newCssName, oldCssName) {
		var cues = textTrack.cues;
		//this.style.innerHTML = "::cue(.colo){ color:blue }"
		this.style.innerHTML = "::cue(.pp.colo){ color:blue }"
		for (var i = 0; i < cues.length; i++) {
			var cue = cues[i];
			cue.text = cue.text.replace(oldCssName, newCssName);
		}
	}
	
	// Check if css already exist in cue, and replace it
	this.changeCuesCss = function(newCssName, oldCssName) {
		var firstCue = textTrack.cues[0];
		// We check it is the first time we set the size
		if (firstCue === undefined) { console.log("warning: cannot find first cue"); return; } // Correct a bug from browser
		if (firstCue.text.indexOf(newCssName) === -1) {
			this.addCuesCss(newCssName);
		} else if (oldCssName !== undefined) { // If size already set
			this.replaceCuesCss(newCssName, oldCssName);
		}
	}
	
	// Change the delay of a textTrack
	this.changeCuesTime = function(value) {
		if (!textTrack.removedCues) textTrack.removedCues = [];
		var restauredCue = [];
		var removedCuesSize = textTrack.removedCues.length;

		// Reproduce the start/end Time with negative value
		var setFloatTime = function(cue) {
			// We init the float value
			if (!cue.floatStart) cue.floatStart = cue.startTime;
			if (!cue.floatEnd) cue.floatEnd = cue.endTime;
			// set the new value
			cue.floatStart = cue.floatStart + value;
			cue.floatEnd = cue.floatEnd + value;
			
			if (cue.floatEnd > 0) { // If it is a cue to show
				// We we have a end positive, we show at startTime = 0
				var isZeroStart = cue.floatEnd > 0 && cue.floatStart < 0;
				cue.startTime = parseFloat(isZeroStart ? 0 : cue.floatStart);
				cue.endTime = parseFloat(cue.floatEnd);
			}
		}
		
		// Restaure the cues if it has been deleted
		for (var i = 0; i < removedCuesSize; i++) {
			cue = textTrack.removedCues[i];
			setFloatTime(cue);
			if (cue.floatEnd > 0) { // If end time back to positive
				textTrack.addCue(cue);
				textTrack.removedCues.splice(i, 1);
				restauredCue.push[cue];
			}
		}
		
		// We set the new value on cues
		for (var i = 0; i < textTrack.cues.length; i++) {
			var cue =  textTrack.cues[i];
			if (restauredCue.indexOf(cue) == -1) { // If not a cue already treated
				setFloatTime(cue);
				if (cue.floatEnd <= 0) { // Then we remove it
					textTrack.removedCues.push(cue);
				}
			}
		}
		
		// We have to remove it here, because skip the next i on the above loop
		for (var i = removedCuesSize; i < textTrack.removedCues.length; i++) {
			textTrack.removeCue(textTrack.removedCues[i]);
		}
	}
	
	return this;
}

ControlClass.prototype.blob = function(blob) {
	var evt = EVENT(blob, true);

	// Check if blob file can be play by browser
	var playable = function(search) {
		var checkPlayable = function (blob, searchName) {
			if (blob.name.lastIndexOf("." + searchName) > -1) return true;
			 else if (blob.type.indexOf(searchName) > -1) return true;
			 else if (blob.codec && blob.codec.indexOf(searchName) > -1) return true;
			return false;
		}
		
		if (typeof(search) == "string") {
			return checkPlayable(blob, search);
		} else if (search instanceof Array ) { 
			for (var i = 0; i < search.length; i++) {
				if (checkPlayable(blob, search[i])) return true;
			};
			return false;
		} else {
			console.log("[Error][Fatal] : No String or Array given in playableBlob()");
			return false;
		}
	}
	
	// Create an Url from a blob
	this.getUrl = function() {
		if ( window.URL && window.URL.createObjectURL ) return window.URL.createObjectURL(blob);
		 else if ( window.webkitURL ) return window.webkitURL.createObjectURL(blob);
	}
	
	this.is = {
		support : { // The only supported Blob File by the framework.
			blobTrack: [ "srt" , "vtt" ],
			blobSource: [ "video/",  "audio/" ] // Problem with video/mp4 or video/x-matroska
		},
		same : function(blob2) {
			return blob.name == blob2.name && blob.size == blob2.size && blob.type == blob2.type;
		},
		sameName : function(blob2) {
			return blob.name.substring( 0 , blob.name.lastIndexOf( "." )) 
				== blob2.name.substring( 0 , blob2.name.lastIndexOf( "." ));
		},
		playable :  function(search) { return playable(search);	},
		track : function() { return playable(this.support.blobTrack);	},
		srt : function() { return playable("srt"); },
		vtt : function() { return playable( "vtt"); },
		source : function() { return playable(this.support.blobSource); }
	};
	
	
	this.convertTrack = function(callBack) {
		var is = this.is;
		//trackList.forEach(function(file, key) {

		// To Improve : split on line, not on "-->"
		var getSrtToVtt = function(text) {
			var vttOut = "WEBVTT \r\n\r\n";
			var trackTab = text.split('-->');
			for (var i = 0; i < trackTab.length; i++) {
				var line = trackTab[i];
				var tempo =  line.substring( 0 , line.indexOf( "," )) 
							  + ((i == 0 || i == (trackTab.length-1)) ? "" : '.'
									+ line.substring( line.indexOf( "," )+1 , line.lastIndexOf( "," )) )
							  +  '.' + line.substring( line.lastIndexOf( "," )+1 , line.length);
				vttOut = vttOut + ((i == 0) ? "" :'-->') + tempo;
			};
			//vttOut = vttOut + "\n\n";
			return vttOut;
		}
		
		
		// If file is already converted, we do not convert it again
		if (evt.converted) callBack(evt.converted);
		 else if (!is.vtt())  {
			if(window.FileReader) {
				var r = new FileReader();
				r.onload = function(e) { 
					var textOut = e.target.result;
					if (is.srt()) textOut = getSrtToVtt(textOut); 
					//var textUtf8 = unescape(encodeURIComponent(textOut));
					//evt.converted =  new File([textOut], blob.name, { "type" : "text/vtt" });
								 var a = document.createElement('a');

					
					
					evt.converted =  new Blob([textOut], { "type" : "text/vtt" });
					
					/* a.download = "_out.vtt";
					a.href = window.URL.createObjectURL(evt.converted);
					a.textContent = 'Click Here';
					document.getElementById("options").appendChild(a);*/
					
					callBack(evt.converted);
				} 
				
				if (this.isMicro()) r.readAsText(blob, "ISO 8859-1"); // Work only for UTF-8 file
				 else r.readAsText(blob, "ASCII"); // Seems to work with all type and language...
				//r.readAsBinaryString(blob) // Work only for ANSI file, but not with IE
			} else {
				console.log("[error] Cannot convert track because your browser doesn't support FileReader API");
				//callBack(thisCall, blob, hide);;
			}
		} else callBack(blob);
		//});
	}

	return this;
	// Check if two blob are same (ex : myblob.avi == myblob.srt)

}

ControlClass.prototype.node = function(node) {
	// Reminder : set url on <video> and not <source> tag
	// this.setSource = function(player, f) { return player.src = control.blob.getUrl(f); }
	
	//var attachs = evt.attachs; // Has to check if defined in each function;
	var evt = EVENT(node);

	// Reminder : if we call TextTrack or blob on this, it will return the last junive(node)
	this.tag = {
		video   : (node.tagName === "VIDEO" || node.tagName === "AUDIO"),
		track   : (node.tagName === "TRACK"),
		source  : (node.tagName === "SOURCE"),
		image   : (node.tagName === "IMAGE"),
	}

	// Not working with video, because it can append child such as track or source
	this.isSrc = function() { return this.tag.video || this.tag.image || this.tag.source || this.tag.track ; }
	
	this.callAttachs = function(kinds, callFunc) {
		if (!evt || !evt.attachs) return false;
		var hasAttach = false;
		for (var key in kinds) { // Ex {button:true, box:true}
			if (!evt.attachs[key]) continue;
			for (var i = 0; i < evt.attachs[key].length; i++) {
				if (callFunc.breakMe)  break;
				hasAttach = true;
				var attachNode = evt.attachs[key][i];
				// Check that the node attached has been defined
				callFunc.call(callFunc, attachNode, i);
			}
		}
		return hasAttach;
	}
/*
	// Call all the attached Button/box
	this.callFirer = function(callFuncFirer) {
		return this.callAttachs({fire:true}, callFuncFirer);
	}
	
	// Call all the attached player/menu
	this.callObserver = function(callFuncObserver) {
		return this.callAttachs({observer:true}, callFuncObserver);
	}
*/	
	/*
	// Call specifics type (observer, button, player...) from the attached node at fireNode
	this.callAttachsType = function(callFunc, typeAttachs) {
		this.callAttachs(function(attachNode) {
			for (var key in typeAttachs) { // Ex {button:true, box:true}
				if (!EVENT(attachNode).type[key]) continue; // If attachNode != player
				callFunc.call(callFunc, attachNode);
			}
		});
	}
	*/
	
	// Use in auto Display, we hide the x parent
	this.getParentUp = function(index) {
		var nextParent = node.parentNode;
		while (nextParent && index > 1) {
			var nextParent = nextParent.parentNode;
			index--;
		}
		return nextParent;
	}

	/*
	// To improve : source && track should be attached
	this.getTagChilds = function(name) {
		var tags = node.getElementsByTagName(name);
		if (tags != undefined && tags.length > 0) return tags;
		 else return null;
	}

	
	// Create a new node if needed
	this.setSrc = function(nodeName, src) {
		var match = this.match(nodeName);
		var child = null;
		if (match.track === true) {
			//child = html.getTrack(src, content);
			child = EVENT(node).getTrack(src, node);
		} else if (match.source === true) {
			 // To improve : multi source
			 var tagSource = this.getTagChilds(match.name);
			 if (tagSource != null) { // We set the existant source src if exist
				child = tagSource[0];
				child.src = src;
			 } //else child = html.getSource(src, node);
			 else child = EVENT(node).getSource(src, node); 
		}
		return child;
	}
*/
	this.removeAllChild = function() {
		while (node.firstChild) node.removeChild(node.firstChild); 
	}
	
	// Set src to any Object that has one
	this.setContent = function(content) {
		if (content === undefined) return; // content can be "null"/"false"
		if (this.isNode(content)) {
			//this.removeAllChild();
			node.appendChild(content); // IF content is a node
		} else if (this.isString(content)) {
			if (this.isSrc()) node.src = content;
			 else node.innerHTML = content;
		} else if (this.isBlob(content)) {
			// is anything else we can do with blob ?
			node.src = this.blob(content).getUrl();
		}
	}
	
	this.setVisible = function(toShow) {
		if (toShow) node.style.visibility = "visible";
		 else node.style.visibility = "hidden";
	}
	
	this.setDisplay = function(visible) {
		if (visible) { 
			this.setVisible(visible); 
			node.style.display = "";
		} else { 
			this.setVisible(visible);
			node.style.display = "none"; 
		}
	}
	
	this.isDisplay = function() { return node.style.display === "";}
	
	this.isVisible = function() { return node.style.visibility != "hidden"; }

	return this;
}

/*
ControlClass.prototype.boxBut = function(fireNode) { 
	this.node.call(this, fireNode); //Extend
	
	// Cannot use this.evt because of return this in the child...
	var evt = EVENT(fireNode);
	if (!evt) return; // just in case

	// Need this to avoid any junive in control class, and we secure the attachs from user
	this.callBoxBut = function(callFuncButton) {
		if (!evt.type || ( !evt.type.box && !evt.type.button)) return;
		//this.applyConcat(fireNode, this.getPrototype(fireNode).callButton, arguments);
		this.getPrototype(fireNode).callButton(callFuncButton);
	}
	
	return this;
}
*/

ControlClass.prototype.docu = function(docu) {
	this.node.call(this, docu); //Extend
	/*
	this.addFiles = function(fileList) {
		var addFilesObserve = function(observeNode) {
			this.getPrototype(observeNode).addFiles(fileList);
		}
		this.callAttachs({observer:""}, addFilesObserve);
	}
	*/
	return this;
}

ControlClass.prototype.box = function(box) { 
	this.node.call(this, box); //Extend
	
	var evt = EVENT(box);
	//var buttonList = evt.buttonList;
	
	// Shortcut that avoid to use the loop each time we need it
	// Need to be the same name as prototype.button
	this.callButton = function(callFuncButton, action) { // action : no mandatory
		// This is much faster way to access directly to button by its action
		var kind = (action != null && action != "") ? this.shorto(action, true) : { button : true };
		this.callAttachs(kind, callFuncButton);
	/*
		for (var i = 0; i < buttonList.length; i++) {
			// We do not handle arguments thanks to applyConcat
			callFuncButton.call(callFuncButton, buttonList[i]); 
		}
		*/
	}
	
	return this;
}

ControlClass.prototype.button = function(button) { 
	this.node.call(this, button); //Extend
	
	var evt = EVENT(button),
		action = this.match(evt.action),
		role = this.match(evt.role),
		stg = DATA(button);
	
	// Internal : We return current nodeClass if button has no data yet 
	// Because if we put attachData after event.action = "play", this.param return error !
	//if (!this.node(button).hasData()) return this;
	if (!stg) return this;
	
	// Need to be the same name as prototype.box (doesn't need an action argument)
	this.callButton = function(callFuncButton, actionName) {
		// act is used when player.callButton is used
		if (actionName == null || actionName == action.name) callFuncButton.call(callFuncButton, button); 
		//this.applyConcat(button, arguments);
	}

	// Check the type of button
	this.isSlide = function() { return role.slide; }
	this.isSingle = function() { return role.single; }
	this.isInput = function() {	return action.open || action.openInput;	}
	this.isToggle = function() { return role.on || role.off; }
	this.toggleBool = function() { return role.on ? true : false; }
	this.isStep = function() { return role.plus || role.less;}
	
	
	this.autoDisplayButton = function(visible, lastParent) {
		if (!stg.autoDisplay) return;
		var butLastParent = stg.autoDisplayParent //from button
		// If button hast a superior autoDisplayParent
		if (lastParent !== undefined && butLastParent && butLastParent > lastParrent) lastParent = butLastParent;
		
		if (lastParent > 0) {
			var parent = this.node(button).getParentUp(lastParent);
			// Here we display the last parent only !
			//if (visible !== this.node(parent).isVisible()) 
			this.node(parent).setDisplay(visible);
		// We display button by button
		} else {
			// Allow to not display directly the button on toggle ! 
			evt.waitToggle = (stg.toggle != null && visible);
			if (!evt.waitToggle) this.node(button).setDisplay(visible);
		}
	}
	
	// To Improve ?: ValueOf should not be here
	this.toggleButton = function(valueOf) {
		if (!valueOf || !stg.toggle) return; 
		/* DO NOT REMOVE UNTIL TESTTTTT
		if (!valueOf || stg.toggle == null) return; // If toggle not set
		// Correcting a bug when using Ex data.button.play.on.toggle = false after the attach(button, player)
		if (stg.toggle === false ) { // Only work after opening a video
			if (this.node(button).isDisplay()) return;
			 else { this.node(button).setDisplay(true); return; }		
		} // To be right : you need to set data before the attach */
		
		//var match = junive.match(evt.role);
		
		// Check if button is Tooglable Ex : {button.play == true)
		if (valueOf[action.name] === undefined) return;
	
		// We exclude thoses values from toggling
		//var exclude = match.single || match.slide;
		//var toDisplay = exclude || this.displayToggle(valueOf[action]);
		//var isTogglable = this.isBool(this.basicRole[evt.role]);
		
		//if (evt.role == role) return true; // If button.on == valueOf {play : on } 
		
		
		// If not a direct autoDisplay , then show the reverse
		if (this.isToggle() && (evt.waitToggle == null || evt.waitToggle)) {
			var toDisplay = this.toggleBool() === Boolean(valueOf[action.name]);
			this.node(button).setDisplay(toDisplay);
		}
	}
	
		// To Improve ?: ValueOf should not be here
	this.slideButton = function(valueOf) {
		// We call all slide on reset or just one on volumechange, size....
		if (!valueOf || !this.isSlide()) return; // If not a button slide
		
		// Check if button is Slideable Ex : {button.play == true)
		if (valueOf[action.name] === undefined) return;
	
		
	
		// Such as !player.controls in "volumechange" : do not apply the slide if it is itself calling
		//if (evt.eventType != "input") {
			var val = valueOf[action.name],
				valNum = this.isBool(val) ? + val : val;  // The + convert bool to int
//if (action ==="play") console.log(val);
			 // Make sure we slide only once Ex : on play click, we slide, not on the slide itself
			if (valNum != button.value) {
				//console.log("slide : "+valNum);
				button.value = valNum;
			}
		//}
		//evt.eventType = undefined;
		// If valueOf.random = on/off/all
	//	var matchToggle = this.matchToggleRole(evt.role, valueOf[action]);
		
		//this.node(button).setDisplay(matchToggle);
	}
	
	return this;
}

ControlClass.prototype.observer = function(observer) { 
	this.node.call(this, observer); //Extend

	var evt = EVENT(observer);
	var stg = DATA(observer);
	//var attachs = evt.attachs;

	
	// Shortcut that avoid to use the loop multiple time
	this.callButton = function(callFuncButton, action) { // action : no mandatory
		var callTrigger = this.bind(this, function(trigger) {
			this.getPrototype(trigger).callButton(callFuncButton, this.match(action).name);
		});
		
		this.node(observer).callAttachs({trigger:true}, callTrigger);
	}

	
	// Reset and apply all options setted in previews videos / menu
	this.resetData = function (listOfAction) {
		var valueOf = {};

		// Reset the original settings
		var reset = function(action) {
			var valueOrigin = stg.original[action];
			if (valueOrigin != null){
				stg[action] = valueOrigin;
				valueOf[action] = valueOrigin;
			}
		}
		
		// Restaure default setting
		for (action in listOfAction) { // Ex line = 12
			var value = stg[action]; // Remember : Carefull not set it !
			if (value != null) {
				if (stg.reset.all === true) reset(action); // All
				 else if (stg.reset[action] === true) reset(action); // One by one
				 else valueOf[action] = stg[action];
			}
		}
		
		this.getPrototype(observer).option(valueOf);
	}
	

	
	this.autoDisplayButtons = function(listOfAction, visible) {
		if (!listOfAction || !stg.autoDisplay) return;
		var setDisplayAction = this.bind(this, function(action) {
			// If action = "play" / {play:""} return "play";
			// We apply the autoDisplay on all Node;
			var displayAction = this.bind(this, function(button) {
				if (EVENT(button).action !== action) return;
				this.button(button).autoDisplayButton(visible, stg.autoDisplayParent);
			});
			this.observer(observer).callButton(displayAction, action);
		});
		
		
		if (this.isObject(listOfAction)) { // Ex  { delay : true, size : true }
			for (action in listOfAction) setDisplayAction(action);
		} else if (this.isArray(listOfAction)) { // Ex ["delay", "size"]
			for (var i = 0; i < listOfAction.length; i++) setDisplayAction(listOfAction[i]);
		} else if (this.isString(listOfAction)) { // It's a lonly action Ex : listOfAction == "delay"
			setDisplayAction(listOfAction);
		}
	}
	
	
	
	// Toggle between between on/off or slide between plus/less, 
	this.shiftButton = function(valueOf) {
		// reverse : If valueOf && (isToggle || isSlide)
		if (!valueOf || (!stg.toggle && !stg.sliding) ) return; 
		
		// If no box/buttons attached to player/menu or player.toggle == false;
		//if (!stg || !buttons || !stg.toggle) return; 

		
		// We get the value of action (Ex { play :  true })
		for (var action in valueOf) {
			var shift = this.bind(this, function(button) {
				if (EVENT(button).action !== action) return;
				
				// Why a if.stg.toggle/slide : because we call the button only once !
				if (stg.toggle) this.button(button).toggleButton(valueOf);
				if (stg.sliding) this.button(button).slideButton(valueOf);
			});	
			// Need to keep this.observer(), else it call the last action
			this.observer(observer).callButton(shift, action);
		}
	}
	
	/*
	this.slideButtons = function(valueOf) {
		if (!valueOf || !stg.sliding) return; // If no parameters
		
		for (action in valueOf) {
			var slide = this.bind(this, function(button) {
				if (EVENT(button).action !== action) return;
				this.button(button).slideButton(valueOf);
			});
			this.callAllButton(slide);
		}
	}*/
	
	// Allow to separate sources from tracks, and eject what is not playable
	this.splitBlobs = function(blobFiles) {
		var out = {};
		out.sources = []; // new BlobList purge from duplicate
		out.tracks = []; // new BlobList purge from duplicate
		
		// Inserting the source into the menu, we'll deal with track later
		var separateBlob = this.bind(this, function(blob) {
			if (!this.isBlob(blob)) return;
			var is = this.blob(blob).is;
			if (is.source()) out.sources.push(blob)
			 else if (is.track()) out.tracks.push(blob);
		});
		
		// We duplicate fileList, because it cannot use the splice method
		this.callList(blobFiles, separateBlob);
		return out;
	}
	
	return this;	
}

ControlClass.prototype.player = function(player) {
	this.observer.call(this, player); //Extend
	
	var stg = DATA(player),
		evt = EVENT(player);
	
	// Shortcut to full screen a player
	this.fullscreen = function() {
		this.option({full : true} );
	}
	
	this.cleanSource = function() { evt.cleanChilds({source:""}); } // Remove the previous medias
	this.cleanTrack = function() { evt.cleanChilds({track:""}); } // Remove the previous tracks
	
	// Clean all source / tracks setted to player
	this.cleanAll = function() {
		this.cleanSource();
		this.cleanTrack();
	}
	// Change the style of cues
	this.setCueStyle = function(styleName, value, isGeneral ) {
		this.initStyle(); // Do nothing if exist
		
		// use document because background cannot be set on cues, only with general
		var evtStyle = isGeneral ? EVENT(document, true) : evt;

		var newStyle = styleName + ":" + value + ";";
		
		// Here we init for first time our style
		if (evtStyle.cue === undefined) { 
			evtStyle.cue = {};
			if (isGeneral) evtStyle.cue.content = "::cue {}"; // Css for all tracks
			 else evtStyle.cue.content = "::cue(."+evtStyle.safeName+"){}"; // Css for this player only
			this.setStyle( evtStyle.cue.content );
		}
		
		// Now that a style has been set, we replace it
		var oldContent = evtStyle.cue.content;
		if (evtStyle.cue[styleName] === undefined) { // we add a style
			evtStyle.cue.content = oldContent.replace("}", newStyle + "}"); // in the end
		} else evtStyle.cue.content = oldContent.replace(evtStyle.cue[styleName], newStyle); // if exist, we just replace it
		
		// Then we apply the css on style tag
		this.setStyle(evtStyle.cue.content, oldContent);
		evtStyle.cue[styleName] = newStyle;
	}
	
	// Ex : "toto.mp4" / blob / {content/src : "toto.mp4"/blob, encode:"mp4"} / Array(@previousExamples)
	this.addSource = function(context) { // content/src is mandatory in {}
		if (!context) return;
		var create = function(propsIn) { // Can be a string/blob/{}
			evt.createChild({source:""}, propsIn);
		}
		// If array of props, call them, else, call the props directly
		this.callContext(context, create); 
	}
	
	// We set new sources to video, cleaning all the previews ones
	this.setSource = function(context) { // See addSource for content
		this.cleanSource(); // remove all tag source from player
		// If [dataSource1, dataSource2], we add the tag <source>
		if (this.isArray(context)) this.addSource(context); 
		 // Ex {content : "toto.mp4", encode:"mp4"}, we add the tag <source>
		 else if (this.hasContent(context) && this.getSize(context) > 1) this.addSource(context);
		 // Ex {content : "toto.mp4"} / "toto.mp4" / blob, we set the source directly on tag <video>
		 else evt.setSrc(context); // We set the source directly on player !
	}
	
	// Ex : "toto.vtt" / blob / {content : "toto.srt", srclang:"en"} / {content : blob, srclang:"en"}
	this.addTrack = function(context) {

		var create = this.bind(this, function(propsIn) {	
			var content = this.getContent(propsIn);

			// We don't convert the src or string for now
			if (stg.convert.toVtt === true && this.isBlob(content)) { 
				var convert = this.bind(this, function(newBlob) { // If the newContent need to be converted
					if (this.hasContent(propsIn)) {
						propsIn.content = newBlob;  // We replace the srt by vtt
						evt.createChild({track:""}, propsIn);
					} else evt.createChild({track:""}, newBlob);
				});
				this.blob(content).convertTrack(convert);
			} else evt.createChild({track:""}, propsIn);
		});

		// If array of props, call them, else, call the props directly
		this.callContext(context, create); 
	}

	// We set new tracks to video, cleaning all the previews ones
	this.setTrack = function(context) {
		this.cleanTrack();
		this.addTrack(context);
	}
	
	// We set both source and tracks "context" at same time 
	this.set = function(sourceContext, trackContext) {
		this.setSource(sourceContext);
		this.setTrack(trackContext);
	}
	
	// Experimental : [split only blobs] : Add list of file to player 
	this.addBlobs = function(blobList) {
		if (!blobList || blobList.length === 0) return;

		/* Important : This is not necessary : you can attach the button input on the different menus
		// we add Files on attached menu
		var addMenu = this.bind(this, function(menu) {
			 this.menu(menu).addBlobs(blobs);
		});
		// If player has attached menus, then we add the files on them
		if ( this.node(player).callAttachs({menu:""}, addMenu) )  return;
		*/
		
		// Else we simply add file directly on player
		var blob = this.splitBlobs(blobList);
		if (blob.sources.length > 0) { // If we have a source to play
			if (stg.add.play === true) this.play(blob.sources[0], blob.tracks);
			 else this.set(blob.sources[0], blob.tracks);
		}
	}
	
	// Set source and tracks "context", and play it
	this.play = function(sourceContext, trackContext) {
		this.set(sourceContext, trackContext);
		player.load();
		player.play();
	}
	
	// Return the current TextTrack of player
	this.activeTextTrack = function() {
		if (!player.textTracks) return null;
		// if (evt.tracks.length === 0) return null; // Doesn't work Check it's defined by user
		for (var i = 0; i < player.textTracks.length; i++) {
			var textTrack = player.textTracks[i];
			if (textTrack.mode == "showing") return textTrack;
		}
		return null;
	}
	
	// Change the different settings from player
	this.option = function(valueOf) {
		
		if (valueOf.play != null) {
			// "auto" : get the reverse mode, it has to be called once only !
			stg.play = this.getBool(valueOf.play, player.paused);
			
			if (valueOf.force) {  // Prevent an action that is not a click/keydown, such as resetData() / attach
				if (stg.play === true && player.paused) player.play();
				 else if (stg.play === false && !player.paused) player.pause();
			}
			 
			// If we want to toggle/slide/etc... the buttons, do it by default
			this.observer(player).shiftButton({play : stg.play});
		}
		
		if (valueOf.time != null) {
			
			var newTime =  parseFloat(valueOf.time);
			stg.time = this.safeMinMax((valueOf.adding ? stg.time : 0) + newTime, 0, player.duration);

			//if (valueOf.force) {
			// We do not fore the currentTime on durationchange event
			if (valueOf.force && stg.time !== player.currentTime ) player.currentTime = stg.time;
			this.observer(player).shiftButton({ time : stg.time });
			//}

		}
		
		if (valueOf.stop != null) {
			this.player(player).option( {play : false });
			this.player(player).cleanAll();
		}
		
		if (valueOf.full != null) {
			// Auto get the reverse mode, has to be called once only Before !
			stg.full = this.getBool(valueOf.full, !this.isFull());

			if (valueOf.force) { // Prevent an action that is not a click/keydown, and error on console.log
				if (stg.full === true && !this.isFull()) { // if we force full while it's already full, do nothing
					if (player.requestFullscreen) player.requestFullscreen();
					 else if (player.msRequestFullscreen) player.msRequestFullscreen();
					 else if (player.mozRequestFullScreen) player.mozRequestFullScreen();
					 else if (player.webkitRequestFullScreen) player.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT); 
				} else if (stg.full == false && this.isFull()) {
					if (player.exitFullscreen) player.exitFullscreen();
					 else if (player.msExitFullscreen) player.msExitFullscreen();
					 else if(document.mozCancelFullScreen) document.mozCancelFullScreen();
					 else if(document.webkitExitFullscreen) document.webkitExitFullscreen();
				}
			}
			
			// Set the button to result (isFull ? Then when we show the full On button !)
			this.observer(player).shiftButton({full : stg.full});
		}

		if (valueOf.volume != null) {
			// we add the value if set, else just set the volume get by slide
			//this.observer(player).setInt(valueOf, {volume:""}, 0, 1)
			
			var newVolume =  parseFloat(valueOf.volume);
			stg.volume = this.safeMinMax((valueOf.adding ? stg.volume : 0) + newVolume, 0, 1);

			// In case we change the volume, Not on init
			if (stg.mute === true && valueOf.force){ 
				// only happen on click, slide ... 
				//console.log("vol will force mute", stg.volume);
				// if click on mute, then click on the plus/less vol button
				//if (stg.volume !== 0)
				if (valueOf.adding) stg.volume = newVolume > 0 ? newVolume : 0;
				this.player(player).option( {mute : false });
					//}

			} 
			
			// In every case, we shift the vol/mute button if vol == 0
			this.observer(player).shiftButton( { volume : stg.volume, mute : stg.volume === 0 });

			
			if (player.volume !== stg.volume) {
				
				//console.log("volume new", stg.volume);
				// In case we have scrolled the volume to 0, just shif the button
				//this.observer(player).shiftButton({ volume : stg.volume });
				player.volume = stg.volume;
				
			}
		}
	
		
	
		if (valueOf.mute != null) {
			// Not concerned by (stg.volume === 0) above in auto mode, else force the value
			
			stg.mute = this.getBool(valueOf.mute, !stg.mute);

			if (player.volume === 0) { 				
				// We just shift the button mute here, that's it !
				
				// This function is recursive and should call the shift button or just change the mute
				if (valueOf.force) {
					//console.log("vol only");
					var vol = stg.original.volume === 0 ? 1 : stg.original.volume;
					
					this.player(player).option( {volume : vol, force : true} );
				}
				// else this.observer(player).shiftButton({ mute : stg.mute});
			} else { // when scrolling until volume = 0, the click on mute button doesn't work, so we force it
				//console.log("muted only", stg.mute);
				var shiftVol = stg.mute ? 0 : stg.volume;
				this.observer(player).shiftButton({ mute : stg.mute, volume : shiftVol});
			}
			
			if (player.muted !== stg.mute) {
				//console.log("mute new", player.muted, stg.mute);
				player.muted = stg.mute;
			}
			
		}


		
		//var textTrack = valueOf.textTrack ? valueOf.textTrack : this.activeTextTrack();
		if (this.activeTextTrack() != null) {
			var textTrack = this.activeTextTrack();

			// We add a <c.cssName> to cues, do nothing if exist
			// To improve : shouldn't it be in setCueStyle ? (even if we set css just once)
			// this.textTrack(textTrack).changeCuesCss(EVENT(player).safeName);
			
			// To Improve : Look for webkit-media-text-track-display in order to save rewriting on cues 
			if (valueOf.line != null) { // Important : != null include undefined.  !== does not
				stg.line = this.safeMinMax((valueOf.adding ? stg.line : 0) + parseFloat(valueOf.line), 0, 15);
				this.textTrack(textTrack).changeCuesOpt("line", stg.line);
			}
			
			if (valueOf.delay != null) {
				
				var delayValue = parseFloat(valueOf.delay);
				stg.delay = (valueOf.adding ? stg.delay : 0) + delayValue;
				console.log(stg.delay, delayValue);
				// A bit tricky because you move into subtitle, you do not set a value
				this.textTrack(textTrack).changeCuesTime(delayValue);
				
				//stg.delay = (valueOf.adding ? stg.delay : 0) + parseFloat(valueOf.delay);
				//this.textTrack(textTrack).changeCuesTime(delayValue);
			}
			
			if (valueOf.background != null) {
				stg.background = valueOf.background;
				this.setCueStyle( "background",  stg.background, true);
			}
			
			if (valueOf.size != null) {
				stg.size = this.safeMinMax((valueOf.adding ? stg.size : 0) + parseFloat(valueOf.size), 0.5, 2.5);
				this.setCueStyle( "font-size",  stg.size + "em" );
			}
			
			if (valueOf.color != null) {
				stg.color = valueOf.color;
				this.setCueStyle( "color",  stg.color);
			}
			
			if (valueOf.trackStyle != null) {
				for (var key in valueOf.trackStyle) {
					stg.trackStyle[key] = valueOf.trackStyle[key];
					this.setCueStyle( key, stg.trackStyle[key]);
				}
			}
			

			
			//if (valueOf.style !== null) {
				// Here add css to cues, if not already setted
			/*	
				var newStyle = "::cue(."+EVENT(player).randomName+")" +"{"
				
				// We'll create a new css with the received/existing values
				for (var key in stg) {
					// To improve : It's ugly using player.style to determine if stg can be setted
					if (player.style[key] === undefined) continue;
					var newValue = valueOf[key];
					if (key === "font-size" && newValue) {
						// We keep and int in data
						stg[key] = this.safeMinMax(parseFloat(stg[key]) + parseFloat(newValue), 0.5, 2.5);
						newValue = newValue + " em";	// And apply the px/em on it
					} else stg[key] = newValue ? newValue : stg[key];
					newStyle = newStyle + key +":"+  stg[key] +";";
					
				}
				var newStyle = newStyle + "}";
				var oldStyle = EVENT(player).style;
				console.log(newStyle);
				// We put the new Css into the document head
				this.setStyle(newStyle, oldStyle);
				
				EVENT(player).style = newStyle;
			//}
			*/


		}

		// If we have trouble with sliding/toogling, it's need t handle before Ex "volumechange" with stg.volume != player.volume)
	//	for (var key in valueOf) {
			// To improve : should use this directly on reset (because calling button x times by stg
			// We slide/toggle with the new values setted
			
		//}
		
	}
	return this;
}

// Everything with a kind / attach should have it's prototype
ControlClass.prototype.plug = function(plug) {
	this.node.call(this, plug); //Extend
	return this;
}

ControlClass.prototype.folder = function(folder) {
	this.node.call(this, folder); //Extend
	return this;
}

ControlClass.prototype.menu = function(menu) {
	this.observer.call(this, menu); //Extend
	
	var evt = EVENT(menu);
	var stg = DATA(menu);
	if (!evt || !stg) return this;
	
	// Simple add of sources and tracks : addFileTrack(sources, tracks, elem)
	this.addFileTrack = evt.addPlug.bind(this); 

	// Simple add of sources without the tracks
	this.addFile = function(sourceContext, attributes) {
		evt.addPlug(sourceContext, null, attributes);
	}
	
	// Here the array of sources is added on menu (not on player)
	// list = [{source : "s.mp4"/blob/node OR [{content1:, type:""}, ..] OR {content:},
			// track : "s.vtt"/blob/node OR [{content1:, kind:""}, ..] OR {content:}, 
			// file : "myFile1"/node  OR {content:, style="color:blue"}  }, .... ]
	this.addFiles = function(contextList) { 
		var create = function(elem, key) {
			evt.addPlug(elem.source, elem.track, elem.file);
		}
		this.callList(contextList, create);
	}

	// Return the files attached to menu
	this.getFiles = function() {
		// We use an attach in case we add other nodes, 
		// and because it's faster than checking all nodes with evt(child).plug,
		// The only problem is that we need the removeFile method to detach
		return evt.attachs && evt.attachs.plug ? evt.attachs.plug : [];
	}
	
	// Return the indexed file on menu
	this.getFile = function(numNode) { // number or node
		if (!this.isNode(numNode))  return this.getFiles()[numNode];
		 else return this.getFiles()[this.getFiles().indexOf(numNode)];
	}
	
	// remove the indexed file on menu
	this.removeFile = function(numNode) { // number or node
		var file = this.isNode(numNode) ? numNode : this.getFile(numNode);
		var index = !this.isNode(numNode) ? this.getFiles().indexOf(file) : numNode;
		this.getFiles().splice(index, 0);
		menu.removeChild(file);
	}
	
	// remove all indexed file on menu
	this.removeAll = function() {
		var removeFile = this.bind(this, function(fileNode, key) {
			this.removeFile(key);
		});
		this.callListLast(this.getFiles(), removeFile);
	}

	// Full the first player indexed to menu
	this.fullscreen = function() {
		var fullPlayer = this.bind(this, function(player, key) {
			if (key === 0) this.player(player).fullscreen();
		});
		this.node(observer).callAttachs({player:true}, fullPlayer);
	}
	
	// Insert a list of FileEvent
	this.addBlobs = function(blobList, attributes) { // fileData : content no mandatory
		if (!blobList || blobList.length === 0) return;
		//if (blobs.length > stg.insert.limit) { console.log("To many files ! max : "+stg.insert.limit); }
		
		var blob = this.splitBlobs(blobList),
			oldSize = this.getFiles().length;
		
		// Purge the blobs from duplicate
		var compare = this.bind(this, function(fileNode) {
			var fileEvt = EVENT(fileNode);
			
			var isSameSource = this.bind(this, function(newBlob) {
				// To improve : should be calling a list ?
				return this.blob(fileEvt.sourceContext).is.same(newBlob);
			});
			
			var isSameTrack = this.bind(this, function(newBlob) {
				if (fileEvt.trackContext.length === 0) return false;
				return this.callListBool(fileEvt.trackContext, this.blob(newBlob).is.same)
			});
			
			var compareSources = function(newBlob, key) {
				if (isSameSource(newBlob)) blob.sources.splice(key, 1);
			}
			
			var compareTracks = function(newBlob, key) {
				if (isSameTrack(newBlob)) blob.tracks.splice(key, 1);
			}
			
			this.callListLast(blob.sources, compareSources);
			this.callListLast(blob.tracks, compareTracks);
		});
	
		// We compare the current files with new ones
		if (this.getFiles().length > 0 && stg.add.replace === true) 
			this.callList(this.getFiles(), compare);
		
		var insert = function(blob) {
			// If we doesn't set datas to create a fileNode, we set the blob name
			var attrs = !attributes ? {content : blob.name} : attributes;
			// If the param setted has no content/src, we set one
			if (!attrs.content && !attrs.src) attrs.content = blob.name;
			var newNode = evt.addPlug(blob, null, attrs); // We add the tracks after
			if (blob.encode) newNode.style.color= "yellow"; // For test
		}
		
		// After purge of duplicate, we insert the new blobs
		if (blob.sources.length > 0) this.callList(blob.sources, insert);
		 else if (blob.tracks.length == 0) return; // If no new file, we stop here
		
		var newSize = this.getFiles().length;
		
		// Check If the two last inserted media are video and subtitle, and link it
		if (stg.add.dual === true && blob.tracks.length === 1 && blob.sources.length === 1) {
			var lastFile = this.getFile(newSize - 1);
			EVENT(lastFile).trackContext.push(blob.tracks[0]);
		} else if (blob.tracks.length > 0) { // attach track to file
			var compareFiles = this.bind(this, function(plug) {
				var fileEvt = EVENT(plug); // Getting the file from list
				var compareTracks = this.bind(this, function(blobTrack) {
					// If the name of track match with the file's one
					if (this.blob(blobTrack).is.sameName(fileEvt.sourceContext)) {
						if (fileEvt.trackContext.indexOf(blobTrack) === -1) {
							fileEvt.trackContext.push(blobTrack);
						}
					}
				});
				this.callList(blob.tracks, compareTracks);
			});
			this.callList(this.getFiles(), compareFiles);
		}
		
		// We play the first file added on Menu
		if (stg.add.play && newSize > oldSize) this.playFile(oldSize === 0 ? 0 : oldSize);
	}
	
	// Elem can be the index of file, or the file itself
	this.playFile = function(elem) { // number or node
		if (this.getFiles().length === 0) { console.log("[warning] : Menu as no Files to play"); return;} 
		if (!evt.attachs.player) { console.log("[error] : Menu as no Player to play"); return;}
		var fileNode = this.getFile(elem); // Faster to separate, if has a lot of file
		if (!fileNode) { console.log("[error] : Menu cannot play this index"); return;}
		
		var fileEvt = EVENT(fileNode);
		stg.indexPlay = this.getFiles().indexOf(fileNode);
		var playMenu = this.bind(this, function(player) {
			this.player(player).play(fileEvt.sourceContext, fileEvt.trackContext);
		});
		this.node(menu).callAttachs({player:true}, playMenu);
	}

	this.getCleanIndex = function(index) {
		var sizeFiles = this.getFiles().length;
		if (sizeFiles === 0) return 0; // If no file in menu
		 else if (index >= sizeFiles) return 0; // If next is > menu size
		 else if (index < 0)  return (sizeFiles - 1); // If previous is < menu size
		 else return index;
	}
	
	this.option = function(valueOf) {
		var stg = DATA(menu);
		
		if (valueOf.random != null) { // Important : != null include undefined.  !== does not
			var toRandom = valueOf.random;
			if (toRandom == "auto") toRandom = !stg.random;
			stg.random = toRandom;
			this.observer(menu).shiftButton({ random : toRandom });
		}
		
		if (valueOf.loop != null) {
			var toLoop = valueOf.loop;
			if (toLoop == "auto") toLoop = !stg.loop;
			stg.loop = toLoop;
			this.observer(menu).shiftButton({ loop : toLoop });
		}		
		
		if (valueOf.next != null) {
			var newValue = 0;
			if (stg.random === true) newValue = this.getRandomInt(0, this.getFiles().length, stg.indexPlay);
			 else newValue = stg.indexPlay + parseFloat(valueOf.next);
			stg.indexPlay = this.getCleanIndex(newValue);
			this.playFile(stg.indexPlay);
		}
	}
	
	return this;
}

/*
// This is junive, free from html
var control2 = new ControlClass();
control2.menu("toto");
*/

if (window.junive) {
	throw new Error('junive has already been defined, please use $junive');
} else {
	window["junive"] = window.$junive = junive;
}
})(typeof window === 'undefined' ? this : window);












































/*


html(myPlayer).setSource

junive(player).setSource()

var data = new junive.Data();
data.player({

});
var html = new junive.Html(data);
var event = new junive.Event(data);

event.attach(player, menu);
event.attach(loop, menu);

event.remove(player, 
junive.html.set(data); 
var player = new junve.html.Player()

html(myMedia).play.on;
junive.html(myMedia).play.on;

data.player({
	
	
});



control(data, player).


data.player {
	
}

junive.player.toggle = 
	toggle....
})

junive.button({
	play....
})

var html = junive.Html(data);
var myPlayer = html.getButton();
junive(

data.player.delay.

var myMedia = html.getBox()

var event = new junive.Event(data);

event.attach(myPlayer)

data(myPlayer).delay = 12;

html(myPlayer).delay




(function(global){ 
var VOZ;

//console.log(typeof factory);

	
	VOZ = function(tata) {console.log(tata)}

	
	
	VOZ.toto = "tata";


	if (global.$$) {
		throw new Error('$$ has already been defined');
	} else {
		global.$$ = VOZ;
	}
})(typeof window === 'undefined' ? this : window);


	function VOZ() {
		var toto;
		toto = function (tata) {
			console.log(tata);
		}
		toto.tata = "tutu";
		return toto;
	//VOZ.toto = "tata";	
	}

	
	
	

var vv = new VOZ();

vv("titi");

console.log(vv.tata);







var newtoto = control.object.clone(mySettings.player);

newtoto({
	autoDisplay : {activate : false }
});
var toto = mySettings.player.toggle;
newtoto.toggle.activate = false;
console.log(toto);
console.log(newtoto.autoDisplay);
console.log(mySettings.player.autoDisplay);

Listen.prototype = html;
//Listen.prototype.constructor = Listen;

 
*/



//Control.prototype = myEvent
////Control.prototype.constructor = Control;

//var junive =  new Control();

//console.log(junive.getPlayer());


/*
Junive.prototype = myEvent;
Junive.prototype = html;
Junive.prototype = control;
Junive.prototype.constructor = Junive;

var junive =  new Junive();
*/

/**
 * @constructor
 */
function MyDataHtml() {
	
	this.prefix = { html : false };
	
	this.css = {
		player : 	"player",
		pop : 		"pop",
		menu : 		"menu",
		file :		"file",
		fold :		"fold",
		embed : 	"embed"
	};
	
	this.player =  { "class" : this.css.player, "volume" : "", "controls" :"controls"  };
	this.pop =     { tag : "div", "class" : this.css.pop };
	this.menu =    { tag : "ul", "class" : this.css.menu };
	this.file =    { tag : "li", "class" : this.css.file };
	this.folder =  { tag : "li", "class" : this.css.fold };
	this.embed =   { tag : "embed",  "class" : this.css.embed, width : "0", height : "0", type : "", src : "" };


	
}

var MyDataButton = {
	prefix : { button : false },

	// tag : "div",  "class" : "button",	
	
	button : {
		//tag : "div",  "class" : "button"
	},
	
	play :   { 
		//slide : { step:1, min:0, max:1 },
		//single  : { content : "Single Play" },
		on  :  { content : "Pause", "title" : "Pause" },
		off :  { content : "Play", "title" : "Play"}
	},
	stop :   { 
		single  : { content : "Stop" }
	},
	full :   { 
		on  :  { content : "Full Reduce", "title" : "Full Screen" /* visible : "disable",*/ },
		off :  { content : "Full Screen", "title" : "Full Screen" }
	},
	time :   { 
		slide : {step:1},
		//plus  :  { content : "Time Plus", "title" : "Time" },
		//less :  { content : "Time Less", "title" : "Time" }
	},
	volume : {
		slide : {step:0.1, min:0, max:1},		
		//plus : { content : "Vol+", "title" : "VolPlus" },
		//less : { content : "Vol-", "title" : "VolLess" },	
	},
	mute :   {
		on  :  { content : "Mute On", "title" : "Mute" },
		off :  { content : "Mute Off", "title" : "Mute" }
	},
	delay :  {
		plus : { content : "Delay Up", "title" : "Sub Delay Up" },
		less : { content : "Delay Down", "title" : "Sub Delay Down" }
	},
	line :   {
		plus : { content : "Line Down", "title" : "Sub Line Down" },
		less : { content : "Line Up", "title" : "Sub Line Up" }
	}, 
	size :   {
		plus : { content : "Size Up", "title" : "Sub Size Up" },
		less : { content : "Size Down", "title" : "Sub Size Down" },
		slide : {step:0.1, min:1, max:50},
	},
	color :   {
		content : "Color", "title" : "Change Track color",
		change : { }
	},
	random : {
		on :   { content : "Random On", "title" : "Random On" },
		off :  { content : "Random Off", "title" : "Random Off"}
	},
	loop :   {
		on :   { content : "Loop On", "title" : "Loop On" },
		off :  { content : "Loop Off", "title" : "Loop Off" }
	},
	next :   {
		plus : { content : "Next", "title" : "Next" },
		less : { content : "Prev", "title" : "Preview" }
	},
	open : {
		file :   { content : "Open Files", "title" : "Open Files" }, 
		folder : { content : "Open Folder", "title" : "Open Folder" }
	},
	
	openInput : {
		tag : "input", "class" : "localControl",
		file :   { "type" : 'file', "multiple" : ''},
		folder : { "type" : 'file', "webkitdirectory" : '', "directory" : ''}
	}
		
}

var MyDataBox = {
	prefix : { box : false },
	"class" : "box",
	"tag"  : "div"
}



var myData = new junive.Data(MyDataHtml, MyDataButton, MyDataBox);
var myHtml = new junive.Html(myData);
var myEvent = new junive.Event(myData);



myData.button( {
	"class" : "button" 
} )


var playerBox = "#videoCont",
	player,
	menu,
	localControl,
	menuControl,
	playerControl;

document.addEventListener("DOMContentLoaded", function(event) {
	var opt = document.querySelector("#options");
	
	//myData.button.size({autoDisplay : false});
	//myData.button.size.autoDisplay = false;
	//myData({button:{ size : {autoDisplay : false} } });
	
		var dateBeforeL = Date.now();

	var setAutoOptions = function() {
		var coef = 1366 / screen.width;
		coef = coef > 1 ? coef : 1;
		opt.style.width= 20 * coef + "%";
		opt.style.fontSize = 15 * coef + "px";
		opt.style.fontSize = 15 * coef + "px";
		//alert(opt.style.fontSize +"///"+screen.width);
	}

	// Button toggle show/hide the menu
	var toggleOptions = function() {
		if (opt.style.visibility == "" || opt.style.visibility == "visible") { 
			opt.style.visibility = "hidden"; 
			opt.style.width="0";
			document.querySelector("#buttonShow").style.left="-20px";
			document.querySelector("#buttonShow").style.right="auto";
		} else { 
			opt.style.visibility = "visible"; 
			setAutoOptions();
			document.querySelector("#buttonShow").style.left="auto";
			document.querySelector("#buttonShow").style.right="0";
		}
		document.querySelector("#buttonShow").style.visibility = "visible";
	}
	
	window.onresize = function() {
		setAutoOptions();
	}
	
	document.querySelector("#buttonShow").onclick = function() {
		toggleOptions();
	}

	player =  myHtml.getPlayer(playerBox);
	
	menu = myHtml.getMenu("#menuCont");
	
	localControl = myHtml.getControl.local("#buttonCont");
	menuControl = myHtml.getControl.menu("#buttonCont");
	playerControl = myHtml.getControl.player("#buttonCont");

	myEvent.attach(menu, player);
	
	myEvent.attach(menuControl, menu);
	myEvent.attach(playerControl, player);
	myEvent.attach(localControl, menu);
	
	
	
	//junive.control.__proto__.menu = "toto";
	

	//playFile.call(control, arguments);
	
	//myEvent.detach(menuControl, menu);
	// Use to drop on document
/*	myData.player({ 
		html :()
		box : { }
		include : { }
		drop : { fullscreen : true } }
	})
*/

//myHtml.getBox.input()
	
	myData.player.drop.fullscreen = true;
	
	myEvent.addDrop(player);
	
	//var myKeys = new junive.DataKey();
	
	//myEvent.addKey(player);
	myEvent.addKey(playerControl);
	//myEvent.addKey(localControl);
	//myEvent.addKey(playerControl, {button : {play: {key: 32}}});
	//console.log(myHtml(localControl).open.file);
	//myEvent.addKey(localControl, {openInput: { file : {key:80}}})
	//myEvent.addKey(myHtml(localControl).openInput.file, {key:79}) doesn't work because has not any click listener

	//myData.menu.add.drop = true;
	
	/*
	var data2 = new junive.Data();
	var myEvent2 = new junive.Event(data2);
	
	
	var player2 = myHtml.getPlayer("#videoCont2", {tag:"video", controls:"controls"});
	myEvent2.attach(playerControl, player2);
	myEvent.attach(menu, player2);
	
	data2.play.step = "auto";
	var butplay2 = myHtml.getButton("play", "on", "#buttonCont");
	var butplay3 = myHtml.getButton("play", "off", "#buttonCont");
	var full = myHtml.getBox("full", "#buttonCont");
	

	myEvent2.attach(player, butplay2);
	myEvent2.attach(player, butplay3);
	myEvent2.attach(player, full);
	
	
	data2.play.off.toggle = false;
*/


	//console.log(Date.now() - dateBeforeL);


	setAutoOptions();
	
	if (window.chrome && chrome.runtime && chrome.runtime.id) {		
		getChromeApp();
	}
	
});


/**
 * @constructor
 */
function getChromeApp() {
	
	var app = {
		extension : window.location.href,
		codec : { 
			video: "avc1 vp8 vp9 theora",
			audio: "mp3 aac vorbis pcm_u8",
			subtitle: "srt vtt"
		}
	}

	var naclNode = document.querySelector("#naclBox"),
		naclBin = getEmbedNacl(naclNode,  "application/x-nacl",  "./junive.nmf");
	
	// Html contents
	var player1 = null,
		player2 = null,
		bufferwait = null,
		inputFile = myHtml(localControl).open.file,
		inputFolder = myHtml(localControl).open.folder;

	// Playing contents
	var buffer = new Array(),
		memDelay = 0.04, // Before && After : Use to resolve the sound synchro between buffers;
		firstTimeBuffer = 3, // The length of the first buffer video to play (.ts need at least 10 !)
		nextTimeBuffer = 3, // The length of the others buffers (.ts need at least 10 !)
		//isFirstBuffer = totalBuffer == buffer.length, // The first buffer to be played
		//isNextBuffer = false, // The next Buffer to be played
		totalBuffer = 0,
		//safeLoadTime = 300, // Manual Timer that estimate the max time to load the next buffer
							// Time of encode must always be > to (previousDuration - this number)
		maxBuffer = 4, // Number of buffer before stopping process
		//minBuffer = 2, // Number of buffer buffer restart process
		timerStart = 0,
		//isLate = false, // Cannot use the paused method because to slow
		
		//timeoutPlay = null,
		//currentTime = 0,

		timeoutLoad = null;
		
	var blobsFromSys = {},
		blobsDual = [], // If video + subtitle;
		chooseApp = null,
		numCallData = 0,
		playingBlob = null,
		ffcmd = " -vsync drop -vcodec libx264 -preset ultrafast -threads 8 -pix_fmt yuv420p -vprofile high -vlevel 4.1 -crf 24 -acodec libvorbis -ac 2 -f matroska",
		msgToMount = { "in" : "sys", "out" : "mem", "cmd" : "sel", "fileList" : [] },
		msgToRun = { "in" : "sys", "out" : "mem", "cmd" : "run",
			"tauto" : "3 -vsync drop",
			"cman" : "3"
			//"wman" : "3",
			//"sman" : "4",
			//"zauto" : "48000",
			//"mauto" : "100k",
			//"whauto" : "720:480",
			//"rauto" : "24", 
			//"avioncanapeout" : ffcmd 
		};

	// refresh the app in case of error
	document.querySelector("#buttonRefresh").onclick = function() {
		if (chooseApp != null) chooseApp.close();
		window.location.reload();
	}
	
	attachDefaultListeners(naclNode);
	
	myData.menu.add.play = false; // Playing on insert menu
	
	
	myData.listener.durationchange = false; // Set the slide min/off
	myData.listener.timeupdate = false;	 // The slide updating time
	myData.listener.play = false; // button play/pause
	myData.listener.pause = false;	
	myData.listener.volume = false;	
	
		
	myEvent.removeListener(localControl);
	addEventChoose(inputFile, "file=1&dir=0");
	addEventChoose(inputFolder, "file=0&dir=1");


	function getSecondPlayer() {

		var initPlayer = function() {
			
			var player = myHtml.getPlayer(playerBox);
			//myEvent.addPlayer(player);

			//player1.removeAttribute("controls");  
			var fire = {custom: true}
			
			
			var firePlayPause = function(e) {

				// In case we play on bufferring
				var toPlay = (e.type === "play");
				
				//if (player.currentTime <= memDelay || player.currentTime >= (nextTimeBuffer+memDelay) || !toPlay) return;
				if (player.currentTime <= memDelay || !toPlay) return;
				
				playNextBuffer(nextTimeBuffer - player.currentTime);
				console.log("TITI" ,toPlay, player.currentTime, player.duration);
				
				//if (myData.player.play === toPlay && !isDisplaying(player)) return;
				//junive(player).setOption({ play : toPlay });
			}
			
			var fireMeta = function(e) {
				myEvent.removeListener(player, "loadedmetadata");
				player.removeEventListener("loadedmetadata", fireMeta);
			}
			
			fire["play"] = firePlayPause;
			fire["pause"] = firePlayPause;
	
			myEvent.addFire(player, fire);
			myEvent.attach(playerControl, player, {noShift : true});
			
			// Need to stay after attach, else, doesn't fire reset, autoDisplay....
			player.addEventListener("loadedmetadata", fireMeta);
			
			player.pause();
			return player;
		}
		
		if (!player2) {
			junive(player).cleanAll();
			player1 = initPlayer();
			player2 = initPlayer();
		
			var bufferwaitProps = {tag : "img", src : "img/bufferwait.gif", "class": "bufferwait"}
			bufferwait = myHtml.getNode("#videoCont", bufferwaitProps);
			
			player1.style.zIndex = 9;
			player2.style.zIndex = 10;
			
	/*		
			var observer = new MutationObserver(function(mutations) {
				mutations.forEach(function(mutationRecord) {
					console.log('style changed!');
				});    
			});

			observer.observe(player1, { attributes : true, attributeFilter : ['style'] });
	*/


			// if not set, data.original get the current datas on attach
			myData.player.time = 0; 
			//myData.player.delay = 0;
			
			// Because of callButton in autoDisplay 
			//myEvent.attach(playerControl, player1, {noShift : true});
			//myEvent.addPlayer(player2); // Avoid the button to play both player
			//player1.style.zIndex = "101";
			
		}
	}
	
	// Use on first Buffer and newt buffer to play
	function cleanAllPlayer() {
		
		var cleanPlayer = function(player) {
			junive(player).cleanAll();
			myEvent.detach(playerControl, player);
			myHtml(player).deleteNode();
		}

		if (player2 != null) {
			cleanPlayer(player1);
			cleanPlayer(player2);
			player1 = null;
			player2 = null;	
		}
		
		clearBuffer(); // Clear the current Time out buffer playing
		myHtml(bufferwait).deleteNode();
		
		// Reset the buffer if exist
		buffer.splice(0, buffer.length)
		buffer = null;
		buffer = [];
		totalBuffer = 0;

	}



	var oldPlay = junive(menu).playFile;
	var newPlayFile = function(index) {
		playingBlob = myEvent(junive(menu).getFile(index));
		var isEnconding = playingBlob.sourceContext.encode;
		
		//myData.player.controlsDef = !isEnconding; //Toogle default controls
		//myData.player.reset.delay = !isEnconding; // Reset delay on player load

		cleanAllPlayer(); // Remove player1 && player2
		
		// In every Case : Desactivate nacl bin and stop all function
		if (naclBin.parentNode != null) naclNode.removeChild(naclBin); 
		
		if (!isEnconding) oldPlay.call(junive.getControl(), index);
		else  naclNode.appendChild(naclBin); // This call moduleDidLoad and runFirstBuffer();
	}

	junive.setControlProto({menu:""}, { playFile : newPlayFile});
	

	// Check if user has not paused the player
	function shouldPlay() { return myData.player.play === true; }
	
	// Return the current playing player
	function currentShow() {return parseInt(player1.style.zIndex) > parseInt(player2.style.zIndex) ? player1 : player2; }
	
	// Return the player behind the playing one
	function currentHide() { return (currentShow() === player1) ? player2 : player1; }
	
	// If current Playing player is paused (ended), while we do not have pause manually
	//function isLate() { return currentShow().paused && shouldPlay(); }
	
	// Check if should add a new buffer after playing or each Time we receive the buffer from nacl
	function hasEnoughtToCall() { return totalBuffer >= maxBuffer && buffer.length === maxBuffer }
	
	// Check if we can load the next player or not
	function hasEnoughtToPlay() { return buffer.length >= 2 }
	
	// Show or hide the loading buffer image
	function showBuffer(visible) { junive(bufferwait).setVisible(visible);}
	
	// If current Playing player is paused (ended), while we do not have pause manually
	function isLate() { return junive(bufferwait).isVisible(); }
	
	// Cancel the next playing 
	function clearBuffer() { clearTimeout(timeoutLoad); }
	
	function switchPlay() {
		var	playerToPlay = currentHide(),
			playerToStop = currentShow();
		
		var firePlay = function(e) { 
			var timeBeforePlay = Date.now();
			// In case we have a user action between play and this function, we put it here
			playerToPlay.removeEventListener("play", firePlay);	
		
			setTimeout( function() { //Let the time on player to complete its zIndex transition

				//for (var i = 0; i<110000000; i++) { }
			
				if (totalBuffer > 1) { // If it's the second call
					// Synchronize the delay with the current playing
					setDelay(playerToStop, totalBuffer === buffer.length); // meen that it's the first buffer

					// Call the next buffer on nacl
					if (hasEnoughtToCall()) naclBin.postMessage(msgToRun);
					
					// Remove the previous buffer from the list
					buffer[0] = null;
					buffer.splice(0, 1);

					console.log("buffer length : " +buffer.length);
				}
				
				// Load next player if we have enough buffer, 
				if (hasEnoughtToPlay()) loadBuffer(buffer[1]); 
				
				playNextBuffer(nextTimeBuffer - ((Date.now() - timeBeforePlay)/1000));  // Call the next buffer to be played
			}, 50);
			
			console.log("AFTER PLAY :" + ( Date.now() - timeBeforePlay) );
		}
		playerToPlay.addEventListener("play", firePlay);
		if (shouldPlay()) {
			
			playerToPlay.play();
		}
		console.log("HHOOOOHOHO", playerToStop.currentTime);
		playerToPlay.style.zIndex = (parseInt(playerToStop.style.zIndex) + 1);
		playerToStop.pause();
		// Disable the button/key play on the stopped player
		myEvent.observeAction(playerToPlay, {play:""}, true);
		myEvent.observeAction(playerToStop, {play:""}, false);
		//isLate = false;
	}
	
	function setDelay(player, isFirst) {
		if ( playingBlob.trackContext.length === 0 ) return;
		var newDelay = (isFirst) ? firstTimeBuffer : nextTimeBuffer;
		junive(player).option({ delay : - newDelay , adding : true });
	}

	function loadBuffer(newBuffer) {

		var playerToLoad = currentHide();

		// Check we do not have load the player a first time 
		if (playerToLoad.currentTime === memDelay) return;

		var fireMeta = function(e) {
			console.log("LOAD ME");
			playerToLoad.currentTime = memDelay;
			setDelay(playerToLoad, totalBuffer === 2);
			playerToLoad.removeEventListener("loadedmetadata", fireMeta);
		}

		playerToLoad.addEventListener("loadedmetadata", fireMeta);

		junive(playerToLoad).setSource(newBuffer);
		playerToLoad.load();

	}
	

	
	function playNextBuffer(durationSec) {
		clearBuffer();
		var duration = durationSec * 1000;

		if (buffer.length === 0)  return;
		// The loading is asynchrone, so we make sûre that the video is loaded before playing it
		timeoutLoad = setTimeout(function() {
					
			if (shouldPlay()) {
				if (hasEnoughtToPlay()) switchPlay();
				 else {
					 //isLate = true;
					 showBuffer(true);
					 junive(bufferwait).setVisible(true);
					 /*
					 setTimeout(function() {
						 currentShow().pause();
					 },  currentShow().duration - currentShow().currentTime - memDelay/1000)
					 */
					 console.log("REMOVE ACTION", currentShow().currentTime, duration)
					  myEvent.observeAction(currentShow(), {play:""}, false);
				 }
				 // else show loading image 
			}
		}, duration);
	}
	
	function handleMessage(evt) {
		var datas = evt.data;
		
		if ((typeof(datas) === 'string' || datas instanceof String)) {

			var jmsg = null;
			
		    try { 
				jmsg = JSON.parse(datas);
				//console.log("[Apps][Json]: ", jmsg);
		    } catch (e) {
				if (datas.lastIndexOf("Time of encode") > -1)
				console.log("[Apps] : " + datas);
				return;
		    }
			
			if (jmsg["proc"] == "start") {
				timerStart = Date.now();
			}
			if (jmsg["probe"]) {
				
				// If it's not a call to play (ok or nook)
				if (jmsg["probe"] != "none") 	playingBlob = null;
				console.log(jmsg);
				// We analyse the files for first time
				if (jmsg["probe"] ==  "ok") {
					
					addProbeToMenu(jmsg);
				} else if (jmsg["probe"] ==  "nook") {
					// pathName is usefull if I cannot have a blob and his name
					var pathsName = jmsg["pathName"].split("/");
					var fileName = pathsName.length > 1 ? pathsName[pathsName.length-1] : jmsg["pathName"];
					console.log("[User] : Not a media : \""+ fileName + "\"");
				}
			}
			
			if (jmsg["end"] ==  "mount" && jmsg["in"] == "sys") {
				
				if (playingBlob != null) runFirstBuffer();// if control.menu.playList called
				
				if (blobsDual.length > 0 ) { // If ffprobe called
					console.log("in dual !!");
//					if (blobsDual.length == 1)
						junive(menu).addBlobs(blobsDual); // If lonely File Media
					var newSize = junive(menu).getFiles().length;
					if (newSize > 0) junive(menu).playFile(newSize-1);
				}
				
				// Do not need them after mounting
				blobsFromSys = {}; 
				blobsDual = []; 
			}
			
			if (jmsg["end"] ==  "proc" && jmsg["out"] == "mem") { }
			if (jmsg["end"] ==  "proc" && jmsg["out"] == "loc") { }
		} else if (datas instanceof Object) {
		//	console.log("[Apps][Obj] : ", datas );
			if (player2 != null && buffer.length  < maxBuffer) { // Remove buffer< after test
				if (datas["myCallBack"+numCallData]) {
					totalBuffer++;
					buffer.push(new File([datas["myCallBack"+numCallData]], "myFile"+totalBuffer, { "type" : "video" }));
					
					//console.log("Buffer " + buffer.length);

					//console.log("Caster à " + player1.currentTime)
					//console.log("Time execute : " + (Date.now() - timerStart));

					
					var playAfterLoad = function() {
						var fireMeta = function(e) {
							currentHide().removeEventListener("loadedmetadata", fireMeta);
							switchPlay();
						}
						
						currentHide().addEventListener("loadedmetadata", fireMeta);
					}
					
					if (totalBuffer === 1) {
						playAfterLoad();
						junive(player1).option({ play : true}); // just set data and shift button on init
						//naclBin.postMessage(msgToRun); // In every case, we call the next buffer
						// Will fire the original loadedmetadata and resetData....
						junive(player1).set(buffer[0], playingBlob.trackContext);
						junive(player2).set(buffer[0], playingBlob.trackContext);
					} else if (buffer.length === 2) { // Prepare the next player
						console.log("SET BUFFER ON POST");
						if (isLate()) {
//							if (shouldPlay())
								playAfterLoad();
	//						 else 
						}
						console.log("LATE",  currentShow().currentTime, currentShow().paused, shouldPlay());
						// else promiseDelete.
						//naclBin.postMessage(msgToRun); // In every case, we call the next buffer
						loadBuffer(buffer[1]);
					} 
					
					// Ex : Next buffer start à 1.95
					var bufferStart = ( totalBuffer * nextTimeBuffer ) - memDelay;
					msgToRun["start"] = bufferStart.toString();
					// Ex : 2.10 (between 1.95 and 3.05)
					var bufferTime =  nextTimeBuffer + memDelay*2;
					//console.log("Buffer Time :"+bufferStart.toString() +"//"+ bufferTime.toString());
					msgToRun["time"] = bufferTime.toString();
					
					
					showBuffer(false);
					
					if (!hasEnoughtToCall()) naclBin.postMessage(msgToRun);
					
					
					//if (totalBuffer < maxBuffer) naclBin.postMessage(msgToRun);
				}
			}

		}
	}
	
	function mountFiles(fileList) {
		var fileCount = fileList.length;
		
		if (fileCount > 0) {
			
			// Using recursive because of .file() which is asynchrone
			var getNextFileSys = function(i) {
				if (i == fileCount) { // If finish 
					naclBin.postMessage(msgToMount);
					msgToMount["fileList"] = [];
					return;
				}
				var fileSelected = fileList[i];

				// If not a call from an existing blob, we create new name,
				// no prob again, and check if blob has already pathName
				var newName = fileSelected.goodName ? fileSelected.goodName
							  : "/" + Math.random().toString(36).substr(2, 15);
				var toProbe = fileSelected.codec ? "no" : "yes";
				var userName = fileSelected.myName ? fileSelected.myName : fileSelected["fullPath"];
				var sysId = fileSelected["filesystem"];
				
				// Informations that chrome app need to mount file 
				var fileSys = { "prob" : toProbe, "goodName" : newName,  "pathName" : userName, "filesystem" : sysId };
				msgToMount["fileList"].push(fileSys);
				
				// We get the the blob, asynchronously
				if (fileSelected.isFile) {
					fileSelected.file(function(fileBlob) {
						// We copy fileSystem infos into the blob (Dangerous with MAJ of browser)
						for (objName in fileSys) fileBlob[objName] = fileSys[objName];
						fileBlob.myName = userName; // Bug with blob.pathName, must be a browser Name
						blobsFromSys[newName] = fileBlob; // We'll use it later
						getNextFileSys(++i); // Once getting blob, get the next fileSys
					});
				} else {
					//blobsFromSys[newName] = userName;
					getNextFileSys(++i);
				}
			}
			
			getNextFileSys(0); // get the first occurrence 
			
		}
	}

	function receiveMessageChoose(event) {
		if (chooseApp != null) {
			mountFiles(chooseApp.getFileResults);
			chooseApp.close();
			chooseApp = null;
		} else console.log("[JS] > Error : cannot get the files");
	}

	function addEventChoose(button, param) {
		var getChooseWindow = function(newWindow) {
			newWindow.contentWindow.onload = function(e) { 
				chooseApp = newWindow.contentWindow;
				chooseApp.postMessage("Coucou", app.extension);
			}
		} 
		
		var fireInput = function() {
			if (chooseApp != null) chooseApp.close();
			if (chrome.app && chrome.app.window) { // if apps
				chrome.app.window.create('../html/choose.html?'+param, 
					{bounds: {width: 100,  height: 100}, 
					minWidth: 100, minHeight: 100}, getChooseWindow	);
			};
		}
		
		myEvent.addListener(button, "click", fireInput);
	}
	
	function getCodec(infos, type) {
		var codec = { num : 0 };
		var match = function (search) { return app.codec[type].lastIndexOf(search) > -1}
		var hasType = false;
		for (var i = 0; i < infos["streams"].length; i++) {
			var streamy = infos["streams"][i];
			if (streamy["codec_type"] == type) { // if video == video
				if ( match(streamy["codec_name"]) // Is playable by browser
					|| match(streamy["codec_tag_string"]) )  return { num : 1 };
				 else codec = { num : 2 , stream : streamy }
			}
		}
		return codec;
	}
	
	function addProbeToMenu(jmsg) {
		var infos = jmsg["infos"];
		var goodName = jmsg["goodName"];
		if (!infos && !goodName) { console.log("[User] Error > Cannot get the infos from file"); return; }
		
		//var size = infos["format"]["size"];
		//var type = infos["streams"][0]["codec_type"];
		
		var streamLen = infos["streams"].length;

		var codecVid = getCodec(infos, "video");
		var codecAud = getCodec(infos, "audio");
		var codecSub = getCodec(infos, "subtitle");
		
		// If Video.mp4 and (Audio.mp3 or No Audio)
		var isPlayableVid = (codecVid.num == 1 && (codecAud.num == 1 || codecAud.num == 0));
		// If Audio.mp3 and No video
		var isPlayableAud = (codecAud.num == 1 && codecVid.num == 0);
		// IF Subtitle.Srt and No Audio and No Video
		var isPlayableSub = (codecSub.num == 1 && streamLen == 1);
		
		var fileBlob = blobsFromSys[jmsg["goodName"]];
		//fileBlob.goodName = jmsg["goodName"];

		if (isPlayableVid || isPlayableAud || isPlayableSub){
			// Set for control.blob.is.source or control.blob.is.track
			fileBlob.codec = isPlayableVid ? "video/"  : 
				(isPlayableAud ? "audio/" : 
				(isPlayableSub ? infos["streams"][0]["codec_name"] : "none") );
			//fileBlob.encode = {}; // Do not care about the infos, the browser has to play it
		} else if (codecVid.num == 2)  { // If not playable Video (Image have also codec_type = "video")
			fileBlob.codec = "video/"; // Use in framework control.blob.playable
			fileBlob.encode = { format : infos["format"], stream : codecVid.stream }
		} else if(codecAud.num == 2) { // If not playable Audio
			fileBlob.codec = "audio/"; // Use in framework control.blob.playable
			fileBlob.encode = { format : infos["format"], stream : codecAud.stream }
		}
		
		if (fileBlob.codec != null) {
			if (blobsDual.length < 2) { 
				blobsDual.push(fileBlob);
				// Use to check if video + Subtitle, else whatever
				if (blobsDual.length == 2) {
					junive(menu).addBlobs(blobsDual);
				}
			} else junive(menu).addBlobs([fileBlob]);
		} else console.log("[User] : Not Playable : \""+ fileBlob.name + "\"" );

	}
	
	function runFirstBuffer() {
		getSecondPlayer();
		msgToRun["playName"] = playingBlob.sourceContext.goodName;
		numCallData++;
		msgToRun["callb"] = "myCallBack"+numCallData.toString();
		msgToRun["start"] = "0";
		msgToRun["time"] = (firstTimeBuffer + memDelay).toString();
		naclBin.postMessage(msgToRun);	
	}
	
	function moduleDidLoad() {
		console.log('[User] Success > Message : Module loaded SUCCESS');
		if (playingBlob != null) {
			mountFiles([playingBlob.sourceContext].concat(playingBlob.trackContext)); // We remount the file into reloaded nacl bin
		}
    }
	
	function getEmbedNacl(parent, type, nmf) {
		var newSetting = myData.embed.html;
		newSetting.type = type;
		newSetting.src = nmf;
		return myHtml.getEmbed(parent, newSetting);
	}
	
	function attachDefaultListeners(naclNode) {
		naclNode.addEventListener('load', moduleDidLoad, true);
		naclNode.addEventListener('message', handleMessage, true);
		naclNode.addEventListener('error', handleError, true);
		naclNode.addEventListener('crash', handleCrash, true);
		window.addEventListener("message", receiveMessageChoose, false);
	}
	
	function handleError() {
	}
	function handleCrash() {
	}
}