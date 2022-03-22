document.addEventListener("DOMContentLoaded", function(event) {

var time = null,
	msg = "";

function id(id, txt) {
	document.getElementById(id).innerHTML = ">>> Time : " + txt + "ms";
}

function Foo(toto) { 
	this.args = toto;
}

function Foo0() { 
	var args = arguments;
}
	
function Foo1() {
	this.args = arguments;
}

var dumb = false;
function Foo2() {
	if (dumb) this.args = arguments;
}

var isFirefox = typeof InstallTrigger !== 'undefined';
function Foo3() {
	if (!isFirefox) this.args = arguments;
}

function Foo4() {
	this.args = [];
	for (var i = 0; i < arguments.length; i++) {
		this.args[i] = arguments[i];
	}
}

function Foo6(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
	this.args = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10];
}


var before = Date.now();
for (var i = 0; i < 1000000 ; i++) { var toto = new Foo() }
id("foo", Date.now() - before);

var before = Date.now();
for (var i = 0; i < 1000000 ; i++) { var toto = new Foo0() }
id("foo0", Date.now() - before);

var before = Date.now();
for (var i = 0; i < 1000000 ; i++) { var toto = new Foo1("a1", "a2", "a3", "a4", "a5", "a6", "a7") }
id("foo1", Date.now() - before);

var before = Date.now();
for (var i = 0; i < 1000000 ; i++) { var toto = new Foo2() }
id("foo2", Date.now() - before);

var before = Date.now();
for (var i = 0; i < 1000000 ; i++) { var toto = new Foo3() }
id("foo3", Date.now() - before);

var before = Date.now();
for (var i = 0; i < 1000000 ; i++) { var toto = new Foo4("a1", "a2", "a3", "a4", "a5") }
id("foo45", Date.now() - before);

var before = Date.now();
for (var i = 0; i < 1000000 ; i++) { var toto = new Foo4("a1", "a2", "a3", "a4", "a5", "a6") }
id("foo46", Date.now() - before);

var before = Date.now();
for (var i = 0; i < 1000000 ; i++) { var toto = new Foo4("a1", "a2", "a3", "a4", "a5", "a6", "a7") }
id("foo47", Date.now() - before);

var before = Date.now();
for (var i = 0; i < 1000000 ; i++) { var toto = new Foo6("a1", "a2", "a3", "a4", "a5", "a6", "a7") }
id("foo6", Date.now() - before);



var loop = function(text, callBack, ids) {
	var timing = Date.now();
	for (var i = 0; i<1000000; i++) {
		callBack.call(callBack)
	}
	var t = (Date.now() - timing);
	if(ids) id(ids, text + " : " + t);
	 else console.log("Toto " + text + t);
}

function Simple(one, two) {
	return one + two;
}

function FuncThis(one) {
	this.basic = function(two) {
		return one + two;
	}
	this.first = function() {}
	this.second = function() {}
	this.third = function() {}

	return this;
}

function FuncVar(one) {
	this.basic = function(two) {
		return one + two;
	}
	var first = function() {}
	var second = function() {}
	var third = function() {}
	
	return this;
}

function FuncProto(one) {
	this.one = one;
	return this;
}

FuncProto.prototype = new function() {
	this.basic = function(two) {
		return this.one + two;
	}
	this.first = function() {}
	this.second = function() {}
	this.third = function() {}
	
}

var Obj = {
	one : "",
	basic : function(two) {
		return one + two;
	},
	first : function() {},
	second : function() {},
	third : function() {},
}


var loopSimple = function(one, two) {
	loop("Simple", function() { 
		Simple(one, two);
	}, "a");
}

var loopVarChain = function(one, two) {
	loop("Var Chain", function() {
		FuncVar(one).basic(two);
	}, "b");
}

var loopThisChain = function(one, two) {
	loop("This Chain", function() {
		FuncThis(one).basic(two);
	}, "c");
}

var loopProtoChain = function(one, two) {
	loop("Proto Chain", function() {
		FuncProto(one).basic(two);
	}, "d");
}



var loopVarObjectIn = function(one, two) {
	loop("Var Separate", function() {
		var obj = FuncVar(one);
		obj.basic(two);
	}, "l" );
}

var loopThisObjectIn = function(one, two) {
	loop("This Seperate", function() {
		var obj = new FuncThis(one);
		obj.basic(two);
	}, "m");
}

var loopProtoObjectIn = function(one, two) {
	loop("Proto Seperate", function() {
		var obj = new FuncProto(one);
		obj.basic(two);
	}, "n" );
}


var loopObjIn = function(one, two) {
	loop("Object Seperate", function() {
		var obj = Object.create(Obj);
		obj.one = one;
		obj.basic(two);
	}, "o" );	
}


// The bind's function

var loopSimpleBindOut = function(one, two) {
	this.hasToBeBinded = function() {}
	var bindOut = function() {
		//this.hasToBeBinded();
		Simple(one, two);
	}.bind(this);
	loop("Simple Bind Out", bindOut, "f");
}

var loopEmptyBindIn = function() {
	loop("Empty Bind In", function() {
		var bindIn = function() { }.bind(this);
	}, "g" );
}

// Loop on instance

var loopVarObjectOut = function(one, two) {
	var obj = FuncVar(one);
	loop("Var Object Out", function() {
		obj.basic(two);
	}, "h" );
}

var loopThisObjectOut = function(one, two) {
	var obj = FuncThis(one);
	loop("This Object Out", function() {
		obj.basic(two);
	}, "i" );	
}


var loopProtoObjectOut = function(one, two) {
	var obj = FuncProto(one);
	loop("Proto Object Out", function() {
		obj.basic(two);
	}, "j");	
}

var loopObjOut = function(one, two) {
	var obj = Object.create(Obj);
	obj.one = one;
	loop("Pure Object Out", function() {
		obj.basic(two);
	}, "k" );	
}




loopSimple("one", "two");
loopVarChain("one", "two");
loopThisChain("one", "two");
loopProtoChain("one", "two");

loopVarObjectIn("one", "two");
loopThisObjectIn("one", "two");
loopProtoObjectIn("one", "two");
loopObjIn("one", "two");

// It's enough to show the bad result
loopSimpleBindOut("one", "two");
loopEmptyBindIn();

loopVarObjectOut("one", "two");
loopThisObjectOut("one", "two");
loopProtoObjectOut("one", "two");
loopObjOut("one", "two");







// Test the access of obj and its __proto__
var attr = {};

var before = Date.now();
	for (var i = 0; i<10000; i++) { attr["M"+i] = function() { }; }
id("p", Date.now() - before);

var before = Date.now();
	for (var i = 0; i<10000; i++) { window["W"+i] = function() { } }
id("q", Date.now() - before);

var direct = attr.M1000(),
	pointer = attr,
	func = function() {};

func.prototype = attr;
var proto = new func();

loop("chain access", function() {
	attr.M1000(); attr.M1000(); attr.M1000(); attr.M1000(); attr.M1000(); attr.M1000();
}, "r");

loop("direct access", function() {
	direct;direct;direct;direct;direct;direct;
}, "s")

loop("global access", function() {
	W1000(); W1000(); W1000(); W1000();	W1000(); W1000();
}, "t")

loop("pointing access", function() {
	pointer.M1000(); pointer.M1000(); pointer.M1000(); pointer.M1000(); pointer.M1000(); pointer.M1000();
}, "u");


loop("prototype access", function() {
	proto.M1000(); proto.M1000(); proto.M1000(); proto.M1000(); proto.M1000(); proto.M1000();
}, "v");

// Not good in firefox
loop("specific prototype access", function() {
	proto.__proto__.M1000(); proto.__proto__.M1000(); proto.__proto__.M1000(); proto.__proto__.M1000(); proto.__proto__.M1000(); proto.__proto__.M1000();
}, "w");



});