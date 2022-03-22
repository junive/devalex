/** @constructor to minify **/
function Classes() {

	var param = { // All the options specifics with class
		super : false, // Activate super for all class{ 
		superName : {super:""}, // the name of super to use
		superInit : false, // allow to use super in const
		init : {const:""}, // The name to init a constructor
		in : {in:""}, // The name to use in extends.in
		safe : ju.safe // need for minify
	}
	
	// We can add methods on a child, without affecting parent
	this.synchParent = function(ctor, parent) {
		/** @constructor to minify **/
		var trick = function() {}; // allow instanceof == Class/ctor
		trick.prototype = parent.prototype; // always has to be a function
		ctor.prototype = new trick; // copy parent's methods into a the constructor
	}
	
	// Will allow to add methods outside our class/extends
	// elem can be Class or ctor (same proto after synch)
	this.addMethods = function(elem, methods) { 
		methods = ju.objize(methods); // In case we forget the new
		// Copy all the methods on the Class's prototype
		for (var key in methods) elem.prototype[key] = methods[key];
	}
	
	// Synchronize the methods with the class and constructor
	// Easier to do a Dog.fn.waf = "" than a Dog.constructor.prototype.waf = ""
	this.synchConstructor = function(ctor, Class) {
		Class.fn = Class.prototype = ctor.prototype; // keep same instanceof
		Class.constructor = Class.fn.constructor = ctor; 
	}

	// Synchronize a constructor with a Class, then add the methods
	this.synchClass = function(ctor, Class, methods, parent) {
		 // Always before ! else ctor.prototype != Class.prototype
		if (parent) this.synchParent(ctor, parent)
		this.synchConstructor(ctor, Class);
		this.addMethods(ctor, methods);	
	}
	
	// Synchronize all the children's prototype using extend(this, ...)
	/* A = class (func(), func() { // Read Last by browser
		  B = extends.in(this, func() { // Read 4
			 C = extends.in (this, func() { }) // Read 1
			 D = extends (C, funct() {}) // Read 2
			 E = extends (D, funct() {}) // Read 3 })
		  F = extends(B, func() {}); Read 5 )) */
	this.synchNow = function(parent, parCtor) {
		var children = parCtor.children;
		if (!children) return; // Avoid useless loop just after
		
		for (var i = 0; i < children.length; i++) {
			var child = children[i],
				methods = child.methods,
				Class = child.Class,
				ctor = Class.constructor;
				
			// Resynchronize the A = new prototype with B
			this.synchClass(ctor, Class, methods, parent); 
			this.synchNow(Class, methods.constructor); // Synchronize the C
			this.synchNow(Class, ctor); // synchronize D & E & F;
		}
		delete parCtor.children;
	}

	// The class Instance that will be called Ex toto("foo")
	this.setInstance = function(ctor) {
		return function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t) {
			// this : the class that is calling the extends.in (thanks to its args)
			// If use arguments instead, very slow on IE / FF, when class[args] = arguments
			return new ctor(ju.getArgs(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t), this); 
		}
	}
	
	// Creating the function and prototype for ju(selector)
	/** @param {...Object} options ** (minify : not mandatory) **/
	this.class = function(methods, options) {
		methods = ju.objize(methods);
		var safe = param.safe.name,
			init = methods[ju.norm(param.init)],
			hasInit = init !== undefined,
			isTheIn = options && options.in === true, 
			inName = ju.norm(param.in);

		// Only way to make a constructor fast is to avoid the word arguments
		var ctor = function(args, kaller) {
			if (this.constructor === ctor) this[safe] = {args : args}; // Use if extends.in
			if (isTheIn && kaller != null) this[inName] = kaller; // Call the the last class
			if (hasInit) init.apply(this, args); // Calling the init function
		}
		
		// return a Class without the use of new (for chaining)
		// Better performance rather than !(this instanceof myFunc) when this === window
		var Class = this.setInstance(ctor);
		
		// Synchronize the prototype between the constructor and the Class
		this.synchClass(ctor, Class, methods, null);
		// because class is called in last, it can apply its prototype
		this.synchNow(Class, methods.constructor);
		
		return Class;
	}

	// Just an easy understand without the options
	this.class.in = function(methods) {
		return this.class(methods, {in : true });
	}.bind(this);
	
	// Extends a class outside or inside one
	/** @param {...Object} options ** (minify no mandatory) **/
	this.extends = function(parent, methods, options) {
		methods = ju.objize(methods);
		
		var safe = param.safe.name, // For speed reason, do not use the ju.setSafe, etc...
			sup = ju.norm(param.superName),
			parCtor = parent.constructor,
			wantSup = param.super === true || methods[sup] === true,
			init = methods[ju.norm(param.init)],
			hasInit = init !== undefined,
			isTheIn = options && options.in === true,
			isExtendsIn = isTheIn || parCtor.isExtendsIn;
		
		// Cannot call/apply a [native] Function or on a this, 
		// having a class as parent is mandatory (for args)
		if (!isExtendsIn && !parent.fn) {
			var parent = this.class(parent);
			parCtor = parent.constructor;
		}
		
		// It's faster to use call, than using the word apply(arguments), very slow with IE/Edge, and all :)
		var ctor = function(args, kaller) {
			if (args === undefined) return;
			
			var kallerIn = isExtendsIn && kaller ? kaller[safe] : null,
				previousSup = null,
				addSup = false,
				callSup = false;
			
			if (this.constructor === ctor) { // new constructor()
				this[safe] = {args : args}; // use in the class has child extends.in
				this[sup] = "" // Just speed the chain (because it try to find a super)
				if (kallerIn) { // Class inside : call the ctor of the parent we're in
					var chain = this[safe].chain = kaller;
					while (chain) { // We apply all the parent's into this class
						var cn = chain[safe];
						chain.constructor.call(this, cn.args);
						chain = cn.chain;
					}
				}
				
				previousSup = this[sup] = "initMe"; // Always after (avoid new super on chain)
				addSup = wantSup;
			} else { // apply / call the constructor
				previousSup = this[sup]; // If sup != initMe, then just apply the args
				addSup = wantSup && previousSup === "initMe";
			}

			if (isTheIn) { // already called the parent args above,
				if (hasInit) init.apply(this, args); // call the init set in our methods
				if (addSup && kallerIn) {
					this[sup] = new kaller.constructor(kallerIn.args, kallerIn.chain);
				}
			} else { // extend a simple class or an extends.in
				var parArgs = null,
					hasParArgs = false;
				
				if (hasInit) {
					init.apply(this, args);  // call the init set in our methods
					parArgs = this[sup]; // Check if we have defined the args
					hasParArgs = parArgs && parArgs.constructor === Array;  // array only on init
				}
				
				// Ex parent(foo1) / child(foo2, foo1) { this.foo2 = foo2 ; this.super = [foo1] }	
				parArgs = (hasParArgs && parArgs.length > 0) ? parArgs : args;
				
				// Create a new super, else we can create it on call
				if (addSup) this[sup] = new parCtor(parArgs, kaller);
				 // on call : if super == constructor && wantSup, then do not create
				 // on call : if super == "initMe" && wantSup, then create a new sup
				 else if (hasParArgs) this[sup] = previousSup; // Restore the previous super,
				 
				// Init the arguments of parents and set a super, if not done before
				parCtor.call(this, parArgs, kaller); 
			}

			// Only way to get super.foo() in constructor, is to call init twice !
			//if (hasInit) {  // We should had a superConst = true in prototype.
				//self.callFunction(methCtor, this, a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);} }
		}
		
		var Class = this.setInstance(ctor);
		ctor.isExtendsIn = isExtendsIn;
		Class.constructor = ctor;

		// extends.in(this, ...) or we extend an in(this,...)
		if (isExtendsIn && !parent.fn) {  // "this" has no methods/fn yet
		    // child waiting for a synch with its parent
			if (!parCtor.children) parCtor.children = []
			parCtor.children.push({Class : Class, methods : methods});
			return Class;
		}

		// Synchronize the prototype with its constructor and parent
		this.synchClass(ctor, Class, methods, parent); 
		// Resolve the problem of B.prototype = A.prototype when A.prototype = this (and not methods) !
		this.synchNow(Class, methods.constructor);
		
		return Class;
	}

	// Allow to configure the names put in our classes
	this.class.setup = function(others) {
		if (!others) return param;
		 else ju.merge(param, others);
	}
	
	// Return an extends class without having to put super = true in methods
	this.extends.super = function(parent, methods) {
		var meths = ju.objize(methods);
		meths.super = true;
		return this.extends(parent, meths);
	}.bind(this);

	// Just an easy understand of the extends
	this.extends.in = function(parent, methods) {
		return this.extends(parent, methods, {in : true });
	}.bind(this);

	// Just an easy understand of the extends.in without having to put super = true 
	this.extends.in.super = function(parent, methods) {
		var meths = ju.objize(methods);
		meths.super = true;
		return this.extends(parent, methods, {in : true });
	}.bind(this);
}


/** @constructor to minify **/
function Core() {
	this.browser = navigator.userAgent;
	
	// This a way to safe gobal things (node, function, etc..)
	this.safe = { name : "__junive__" };
	this.setSafe = function(elem, obj) { elem[this.safe.name] = obj; }
	this.getSafe = function(elem) { return elem[this.safe.name]; }
	this.isSafe = function(elem) { return elem[this.safe.name] != null; }
	
	/*
	Array.prototype.callLoop = function(self, callFunc) {
		callFunc.list = this;
		for (var i = 0; i < this.length ; i++) {
			if (callFunc.breakMe)  break;
			callFunc.call(self, this[i], i);
		}
	}
	*/
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
	
	
	// 2016/05/20 : Solve the this[args] = arguments of FF / IE , 
	// Because arguments is always called  Even  if (!IE && !Firefox) ) 
	this.getArgs = function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t) {
		if (t !== undefined) return [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t];
		 else if (s !== undefined) return [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s];
		 else if (r !== undefined) return [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r];
		 else if (q !== undefined) return [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q];
		 else if (p !== undefined) return [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p];
		 else if (o !== undefined) return [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o];
		 else if (n !== undefined) return [a,b,c,d,e,f,g,h,i,j,k,l,m,n];
		 else if (m !== undefined) return [a,b,c,d,e,f,g,h,i,j,k,l,m];
		 else if (l !== undefined) return [a,b,c,d,e,f,g,h,i,j,k,l];
		 else if (k !== undefined) return [a,b,c,d,e,f,g,h,i,j,k];
		 else if (j !== undefined) return [a,b,c,d,e,f,g,h,i,j];
		 else if (i !== undefined) return [a,b,c,d,e,f,g,h,i];
		 else if (h !== undefined) return [a,b,c,d,e,f,g,h];
		 else if (g !== undefined) return [a,b,c,d,e,f,g];
		 else if (f !== undefined) return [a,b,c,d,e,f];
		 else if (e !== undefined) return [a,b,c,d,e];
		 else if (d !== undefined) return [a,b,c,d];
		 else if (c !== undefined) return [a,b,c];
		 else if (b !== undefined) return [a,b];
		 else if (a !== undefined) return [a];
		 else return [];
	}
	
/*
	// Allow to add new code inside an existing method
	this.expand = function(method, newMethod) {
		var oldMethod = method; // In case we directly set the old one

		return function() {
			var oldReturn = oldMethod.apply(this, arguments),
				newReturn = newMethod.apply(this, arguments);
			// To improve : return boolean, this, etc...
			return (oldReturn != null) ? oldReturn : newReturn;
		};
	};
*/

	// The default error message in console
	this.err = function(text) { console.error("[ju] : " + text);  return null; }
	
	// Check if elem is an object and not null/undefined
	this.isObject = function(elem) { 
		return (elem != null && elem.constructor === {}.constructor);
	}
	
	// Check if elem is an array
	this.isArray = function(elem) { 
		return elem instanceof Array  
		//return elem.constructor === Array
	}
	
	// Check if elem is an array
	this.isFunction = function(elem) { return typeof elem === "function" }

	// Check if elem is a boolean
	this.isBool = function(elem) { return typeof elem === "boolean" }
	
	// Not have elem != "" because Ex volume = "" or controls = "";
	this.isString = function(elem) { return (typeof(elem) === "string" && elem != null); }
	
	// Check if elem is Blob or File
	//this.isBlob = function(elem) { return elem instanceof Blob || elem.codec; }
	this.isBlob = function(elem) { return elem instanceof Blob }

	// Check If is a list of blobs (from open input)
	this.isFileList = function(elem) { return elem instanceof FileList; }
	
	// FileList or arguments are array, but there instance is not !
	// To improve : need to add a isArguments....
	this.isArrayLike = function(elem) {
		return this.isArray(elem) || this.isFileList(elem);
	}
	
	// Check if arguments has call back
	this.noCall = function(opt) { return (!opt.resolve && !opt.reject); }
	
/*	
	// If no call back, we return a new promise
	this.prom = function(self, opt, args) {
		// We call the function itself, with its arguments
		var initPromise = function(resolve, reject) {
			opt.resolve = resolve;
			opt.reject = reject;
			self[opt.funcName].apply(self, args ? args.concat(opt) : [opt]);
		}
		
		var angularjs = ju.$q ? ju.$q : (opt.$q ? opt.$q : null);
		if (angularjs) return new angularjs(initPromise); // Angular promise
		 else if (window.Promise) return new Promise(initPromise);
		 else return this.err("Promise is not handle by this browser");
	}
*/	
	// Get a portion of an array, workings with arguments (which is an array, but isn't, pfff)
	this.slice = function(elem, beg, last) {
		return this.isArray(elem) ? elem.slice(beg, last) : Array.prototype.slice.call(elem, beg, last);
	}

	
	// Check if elem is a node / dom / element
	this.isElem = function(elem) { return elem instanceof HTMLElement; }
	
	// return the node by string or the elem itself
	this.getElem = function(elem) {
		if (this.isString(elem)) return document.querySelector(elem);
		 else if (this.isElem(elem)) return elem;
		 else return this.err("Cannot get the element : " +elem);
	}

	// Will set attribute on an element
	this.createElem = function(obj) { // ju.setElem(elem, {inner : "toto"});
		if (!obj) return this.err("No Object set to create an element");
		var tag = obj.tag ? obj.tag : "div",
			elem = document.createElement(tag);
			
		if (obj.attr) { // Set all the attributes of the node
			for (var key in obj.attr) {
				elem.setAttribute(key, obj.attr[key]);
			}
		}
		if (obj.append) elem.appendChild(obj.append);
		if (obj.inner) elem.innerHTML = obj.inner;
		 else if (obj.text) elem.innerText = obj.text;
		 //else if (obj.content) elem.textContent = obj.content
		if (obj.src) elem.setAttribute("src", obj.src);
		if (obj.parent) this.getElem(obj.parent).appendChild(elem);
		return elem;
	}
	
	
	// Can be a "#div" / ".class" / node
	//this.isDom = function(elem) { return this.getElem(elem) != null || elem === document; }

	
	// Check if it is Internet Explorer browser 6 to 11
	this.isIE = /*@cc_on!@*/false || !!document.documentMode;
	
	// Check if it is Edge 20+ // IF bug : then use !!window.StyleMedia
	this.isEdge = !this.isIE && typeof window.StyleMedia == 'function';
	
	// Check if it is both IE and  Edge 20+
	this.isMicro =  this.isIE || this.isEdge;

	// Check if it is firefox 1.0 +
	this.isFirefox = typeof InstallTrigger !== 'undefined';

	// Check if it is Chrome 1+
	this.isChrome = !!window.chrome && !!window.chrome.webstore;
	
	 // Check if it is Opera 8.0+ // IF bug : then use (!!window.opr && !!opr.addons)
	this.isOpera = (window.opr && opr.addons) != null || !!window.opera 
					|| navigator.userAgent.indexOf(' OPR/') >= 0;

	// Check if it is Safari 3+
	this.isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
	
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
	this.getContent = function(props) { // If undefined, do nothing on isBlob() or inner()
		if (!props) return undefined;
		 else if (props.content !== undefined) return props.content;
		 else if (props.src !== undefined) return props.src;
		 else return props;
	}
	
	// Will check if property is object with a content
	this.hasContent = function(props) { // if props is undefined, do nothing thanks to inner()
		return this.getContent(props) !== (props || undefined);
	}
	
	// This is our old parse function
	this.shorto = function(obj1, obj2) {
		var obj = {};
		// We cannot put key of object if it is a function or object...
		if (this.isObject(obj1)) return undefined;
		obj[obj1] = obj2;
		return obj;
	}
/*
	// Create an array, and push the child in it
	this.push = function(elem, name, child) {
		name = this.norm(name);
		if (!elem[name]) elem[name] = [];
		elem[name].push(child);
	}
*/
	/*
	// This function is much faster than Array.prototype.slice.call
	this.arrize = function(arrayLike) {
		if (this.isArray(arrayLike)) return arrayLike;
		var arr = [];
		for (var i = 0; i < arrayLike.length; i++) {
			arr.push(arrrayLike[i]);
		}
		return arr;
	}
	*/

	// This function is much faster than [].concat, and works with arrayLike
	this.concat = function(arr1, arr2) {
		var arr = [];
		if (!arr1) arr1 = [];
		if (!arr2) arr2 = [];
		for (var i = 0; i < arr1.length; i++) {
			arr.push(arr1[i]);
		}
		for (var i = 0; i < arr2.length; i++) {
			arr.push(arr2[i]);
		}
		return arr;
	}
	
	// Allow to use "this" on a var function
	this.bind = function(self, func) { 
		return function() {
			return func.apply(self ? self : this, arguments);
		}
	}
	
	// Return a function, with its owns this/methods/properties
	this.func = function(func) {  
		return this.bind(null, func); 
	}
	
	// Allow to bind functions inside a loop;
	this.funcs = function(func) {
		var self = this;
		return function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t) { // The function call in the loop
			var args = self.getArgs(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t),
				kaller = this; // caller is already taken by js...
			return function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t) { // The function to return
				this.kaller = kaller;
				argsFunc = self.getArgs(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
				return func.apply(this, self.concat(args, argsFunc));
			}
		}
	}
	
	// Correct a bug coming from the add of float value EX : 1.0000000000001
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
			 for (var value in elem) { name = value; break;}
		 }
		if (name === "") return undefined;
		match[name] = true;
		match.name = name;
		return match;
	}
	
	// Return the first key of an object (use in advanced minify)
	this.norm = function(elem) { // Ex { sub : "" } == "sub"
		if (this.isObject(elem)) for (var name in elem) return name;
		 else if (this.isString(elem)) return elem;
		 else return this.err("Cannot get the name of " + elem);
	}
	
	// Return the object of a function
	this.objize = function(elem) { 
		return this.isFunction(elem) ?  new elem : elem; 
	}
	
	// Intern method that allow hard minify Ex mini(play:"") == "play"
	this.mini = function(obj) { return this.match(obj).name	}
	
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
		callFunc.list = list;
		for (var i = 0; i < list.length ; i++) {
			if (callFunc.breakMe)  break;
			callFunc.call(callFunc, list[i], i);
		}
	}
	
	// If we use splice into list
	this.callListLast = function(list, callFunc) {
		callFunc.list = list;
		var i = list.length;
		while (i-- && i >= 0) { // Because of th
			if (callFunc.breakMe)  break;
			callFunc.call(callFunc, list[i], i);
		}
	}


	
/*	
	// Check if calling function return true, and break the loop
	this.callListBool = function(list, callFunc) {
		console.log(list, callFunc);
		for (var i = 0; i < list.length; i++) {
			if (callFunc.call(callFunc, list[i]) === true) return true; 
		}
		return false;
	}
	*/
	
	// Allow to convert an object name into string EX [{keyName : {name:""}, ]
/*	this.minifyList = function(list, name) {
		var keyName = this.match(name).name;
		for (var i = 0, key = list[i]; i < list.length; i++) {
			key[keyName] = this.match(key[keyName]).name;
		}
	}
*/	
	// Call an array if defined, else call the function
	this.callContext = function(self, context, callFunc) {
		if (!context) return;
		if (this.isArray(context)) {
			for (var i = 0; i < context.length; i++) {
				callFunc.call(self, context[i]);
			}
		} else callFunc.call(self, context);
	}

	// Shorcut from merge function, but with a list of object
	this.mergeList = function(obj, list, todo) {
		for (var i = 0; i < list.length; i++ ) { //Then, if firstObj has child
			if (list[i] != null) this.merge(obj, list[i], todo);
		}
	}
	
	// Create a new object, different from obj
	this.clone = function(obj, todo) {
		var copy = this.isFunction(obj) ? obj.bind({}) : {};
		this.merge(copy, obj, todo);
		return copy;
	}
	
/*
	// Shortcut from copy function, keep obj1[key] if exist, else create
	this.mergeKeep = function(obj, obj2) { 
		this.merge(obj, obj2, {keep:true}); 
	}
*/
	// The objects that that can use recursive, but cannot be copy inside
	this.cannotClone = function(value) {
		return this.isBlob(value) || this.isElem(value);  // We cannot clone a blob or a node
	}

	// Simply copy the values of an object
	/** @param {...Object} todo ** (minify : not mandatory) **/
	this.merge = function(obj, obj2, todo) {
		if (obj == null || obj2 == null) return this.err("No object to merge : "+obj+ " with " +obj2);
		
		if (!todo) todo = {};

		 // Should not be a problem on recursive, else bug
		 if (this.isArray(obj2)) return this.mergeList(obj, obj2, todo);
		  // If it's a blob or dom/node, even if constructor == object,
		  // We cannot merge/clone them, so we just copy them
		  // Doesn't work because we set the argument, not the obj we have put
		  else if (this.cannotClone(obj2) || !this.isObject(obj2)) {
			  return this.err("Cannot merge "+obj+" with " +obj2 );
		  }
		
		// Important !!!! : Always use var on loop !!!!! moreover on recusrive
		for (var key in obj2) {
			
			var value = obj2[key],
				isObject = (this.isFunction(value) || this.isObject(value)),
				isWritable = isObject && !this.cannotClone(value);  // Array, blob, dom !== isWritable
			
			// remove the values we don't want to merge
			if (todo.include && todo.include[key] === false) continue;
			
			// We create a new Object if not defined 
			if (obj[key] === undefined && isWritable) { // In case obj[key] is undefined
				// If we want to assign a function to the object to copy
				if (todo.init) obj[key] = todo.init(obj, key);
				 else if (this.isFunction(value)) obj[key] = value.bind({});
				 else if (this.isArray(value)) obj[key] = [];
				// else if (this.isBlob(value)) obj[initKey] = null;
				 else obj[key] = {};	
			}
			
			if (isWritable) this.merge(obj[key], value, todo); 
			 //else if (todo.keys) continue; // We do not copy the values on the data, on keys
			 else if (!todo.keep) obj[key] = value; // We replace the value;
			 else if (!obj[key]) obj[key] = value; // if keep, add value if doesn't exist
		}

	}
}




