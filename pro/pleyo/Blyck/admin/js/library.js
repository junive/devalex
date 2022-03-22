/*** Raccourcis ***/

function dg(elem) {
	return document.getElementById(elem);
}

function dn(elem, type) {
	return elem.getElementsByTagName(type);
}

/*** Fonction de menus CSS **/

function cssMenuClick(obj, select, norm, curr) {
	if (obj != curr) {
		obj.className = select;
		curr.className = norm;
	}
}

function cssMenuOver(obj, select) {
	obj.className = select;
}
function cssMenuNorm(obj, norm, curr) {
	if (obj != curr)
		obj.className = norm;
}

/*** Fonction de manipulation d'arbre ***/

function getChildIndex(parent, toFind) {
    var count = 0, child = parent.firstChild;
    while (child) {
      if (child.isSameNode(toFind)) {
        return count;
      }
      if (child.nodeType == 1) {
        ++count;
      }
      child = child.nextSibling;
    }
    return -1;
}

function getChild(elem, index) {
    var child = dn(elem, "ul")[index];
    return child || null;
}

/** Fonction de Position souris **/

// Get the X coordinate of the mouse
function getX(e) {
	if(document.all) return event.clientX;
	if(document.layers) return e.pageX;
	if (dg) return e.clientX;
}

// Get the Y coordinate of the mouse
function getY(e) {
	if (document.all) return event.clientY;
	if (document.layers) return e.pageY;
	if (dg) return e.clientY;
}



/*** Fonction de Listener général ***/

// Add a serie of event to childs
function addEventChild(elem, type, fn, tag) {
	var nodes = elem.getElementsByTagName(tag);
	for (var i = 0; i < nodes.length ; i++) {
		addEvent(nodes[i], type, fn);
		nodes[i].setAttribute("posi", i);
	}
}
// Add an event to an element
function addEvent(obj, type, fn ) {
	if (obj.addEventListener) {
		obj.addEventListener(type, fn, false );
	} else if (obj.attachEvent) {
		obj["e"+type+fn] = fn;
		obj[type+fn] = function() { obj["e"+type+fn]( window.event ); }
		obj.attachEvent( "on"+type, obj[type+fn] );
	}
}
// Remove an event from an element
function removeEvent( obj, type, fn ) {
	if (obj.removeEventListener) {
		obj.removeEventListener( type, fn, false );
	} else if (obj.detachEvent) {
		obj.detachEvent( "on"+type, obj[type+fn] );
		obj[type+fn] = null;
		obj["e"+type+fn] = null;
	}
}

/** Controle du resize des colonnes de tableau **/

// Resize mother class
function resizeClass(e) {
	if (dg && !document.all) e.preventDefault();
	this.clicPos = 0;
	this.clicPos = 0;
	this.side = 0;
	var myObjs = new Array();
	var mySizes = new Array();


	this.setObject = function(elem) {
		myObjs[myObjs.length] = elem;
		if (this.side == 0) mySizes[mySizes.length] = parseInt(elem.offsetWidth);
		else mySizes[mySizes.length] = parseInt(elem.offsetHeight);
	};

	this.resize = function(e) {
		for(var i = 0; i < myObjs.length; i++) {
			if (this.side == 0) myObjs[i].style.width = mySizes[i] - (this.clicPos - getX(e)) + "px";
			else myObjs[i].style.height = mySizes[i] - (this.clicPos - getY(e)) + "px";
		}
	};
}

// Resize child class Horizontal
function resizeWidth(e, bar) {
	resizeClass.call(this, e);
	this.clicPos = getX(e);
	this.side = 0;
	var barWidth = parseInt(bar.offsetWidth);
}

// Resize child class Vertical
function resizeHeight(e) {
	resizeClass.call(this, e);
	this.clicPos = getY(e);	
	this.side = 1;
	var autoMySizes = new Array();
	var autoMyObjs = new Array();

	this.setAutoObject = function(elem) {
		autoMyObjs[autoMyObjs.length] = elem;
		autoMySizes[autoMySizes.length] = parseInt(elem.offsetHeight);
	}
	
	this.autoResize = function(e) {
		for(var i = 0; i < autoMyObjs.length; i++) {
			autoMyObjs[i].style.height = autoMySizes[i] + (this.clicPos - getY(e)) + "px";
		}
	}

}
