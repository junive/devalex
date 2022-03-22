
/** Variables générales des Id **/

/* Variables ID */

// The menus
var ID_p_menu1 = dg("p_menu1");
// The principals contents
var ID_p_content = dg("p_content");
var ID_s_content = dg("s_content");
// The criteria colums 
//var ID_p_tab_crit = dg("p_tab_crit");
// The datas principal
//var ID_p_content_datas = dg("p_content_datas");
//var ID_s_content_datas = dg("s_content_datas");
// The borders of content
var ID_p_content_c_center = dg("p_content_c_center");
var ID_s_content_c_center = dg("s_content_c_center");
// The body
var bdy = document.body;

/* Variables CSS */

var c_men_norm = "p_menu1_norm";
var c_men_selec = "p_menu1_select";
var c_men_curr = null;

/** Loading of all listeners **/ 

function loadAll() {
	loadJs();
	document.onkeydown = getTouchDown;
	document.onkeyup = getTouchUp;
}

function loadJs() {

	addEventChild(ID_p_menu1, "click", menu1Click, "ul");
	addEventChild(ID_p_menu1, "mouseover", menu1Over, "ul");
	addEventChild(ID_p_menu1, "mouseout", menu1Norm, "ul");
	//addEventChild(ID_p_tab_crit, "dblclick", setColSize, "ul");
	//addEventChild(dg("s_tab_col_up"), "click", setUp, "ul");
	//addEventChild(dg("s_tab_col_down"), "click", setDown, "ul");
	//addEventChild(ID_p_tab_crit, "mousedown", resizeColDown, "span");
	addEvent(ID_p_content_c_center, "mousedown", resizeRowDown);
	addEvent(ID_s_content_c_center, "mousedown", resizeRowDown);
	addEvent(bdy, "mousemove", bodyMove );
	addEvent(bdy, "mouseup", bodyUp);


	//setSelectListener();

}



function setSelectListener() {
	var colParents = dn(ID_p_content_datas , "div");
	for (var i = 0; i <  colParents.length; i++) {
		addEventChild(colParents[i], "mousedown", selectLineClick, "ul");
	}
}

/** Control of mouse over on menus **/

function menu1Click() {
	cssMenuClick(this, c_men_selec , c_men_norm , c_men_curr );
	c_men_curr  = this;
}

function menu1Over() {
	cssMenuOver(this, c_men_selec);
}

function menu1Norm() {
	cssMenuNorm(this, c_men_norm , c_men_curr );
}


/** Controle du resize des colonnes de tableau **/

var rezWObj = null;
var rezHObj = null;

// Resize of Columns in Width
function resizeColDown(e) {
	rezWObj = new resizeWidth(e, this);
	rezWObj.setObject(this.previousSibling);
	rezWObj.setObject(dn(this.parentNode.nextSibling, "div")[parseInt(this.getAttribute("posiRow"))]);
	//rezWObj.setObject(this.parentNode.parentNode);
	rezWObj.setObject(this.parentNode);
}

// Resize of panel in Height
function resizeRowDown(e) {
	rezHObj = new resizeHeight(e);
	rezHObj.setObject(ID_p_content);
	rezHObj.setAutoObject(ID_s_content);
}


// The body mouse Move listener
function bodyMove(e) {
	if (rezWObj != null) {
		rezWObj.resize(e);
	}
	if (rezHObj != null) {
		rezHObj.resize(e);
		rezHObj.autoResize(e);
	}
}

// The body mouse up listener
function bodyUp(e) {
	if (rezWObj != null) rezWObj = null;
	if (rezHObj != null) rezHObj = null;
}

/* Double Clic on a column */
/*
function setColSize() {
	var newSize = parseInt(ID_p_tab_crit.offsetWidth) + 300;
	ID_p_tab_crit.style.width = newSize + "px";
	ID_p_content_datas.style.width = newSize + "px";
	this.style.width ="300px";
	if (this.getAttribute("posi") != null) {
		var sepaSize = parseInt(dn(ID_p_tab_crit, "span")[0].offsetWidth);
		dn(ID_p_content_datas, "div")[parseInt(this.getAttribute("posi"))].style.width=300 + sepaSize + "px";	
	}
}
*/
/** Control of up && down of lines table **/

function setUp() {
	upAndDown("s_tab_col_up", 0, this);
}

function setDown() {
	upAndDown("s_tab_col_down", 1, this);
}

function upAndDown(colRef, sens, elem) {
	var pos = parseInt(elem.getAttribute("posi"));
	var colChildUp = dn(dg("col_up"), "ul");
		var colChildDown = dn(dg("col_down"), "ul");
	var colParents = dn(elem.parentNode.parentNode, "div");

	if (pos > 0 && sens == 0) pos = pos - 1;
	for (var i = 0; i < colParents.length  ; i++) {
		var colChilds = dn(colParents[i], "ul");
		var child1 = colChilds[pos + 1];
		var child2 = colChilds[pos];
		var oldCss = child1.className;
		child1.className =  colChilds[pos].className;
		child2.className = oldCss;
		child1.setAttribute("posi", pos);
		child2.setAttribute("posi", pos +1);
		colParents[i].insertBefore(child1, child2);
	}
	if (pos == colChildUp.length - 2) {
		colChildDown[pos].innerHTML ="<span><img src='images/bout_down.gif' class ='s_image_col_upDown' alt=''></span>";
		colChildDown[pos + 1].innerHTML = "<span>&nbsp;</span>";
	} else if (pos == 0) {
		colChildUp[pos].innerHTML = "<span>&nbsp;</span>";
		colChildUp[pos + 1].innerHTML ="<span><img src='images/bout_up.gif' class ='s_image_col_upDown' alt=''></span>";
	}
}

/** Selection de la ligne **/

var currentSel = new Array();
var currentPos = new Array();
var shiftDown = false;

function selectLineClick(e) {
	selectLine(e, this, parseInt(this.getAttribute("posi")));
}

function selectLine(e, elem, pos) {



	if (shiftDown) {
		if (dg && !document.all) e.preventDefault();
		lastChild = parseInt(currentPos[currentPos.length -1]);
		if (pos > lastChild)
			for (var i = lastChild + 1; i <= pos; i++) {
				selectChilds(i);
			}
		else {
			for (var i = lastChild - 1; i >= pos; i--) {
				selectChilds(i);
			}
		}
	} else {
		selectChilds(pos)
	}

	function selectChilds(line) {
		var colParents = dn(elem.parentNode.parentNode, "div");
		for (var i = 0; i < colParents.length  ; i++) {
			var colChilds = dn(colParents[i], "ul");
			var child = colChilds[line];
			if (currentSel[line] != null) {
				child.className = currentSel[line];
				if (i == colParents.length - 1) {
					currentSel[line] = null;
					currentPos.splice(currentPos.indexOf(line), 1);
				}
			} else {
				if (i == colParents.length - 1) {
					currentSel[line] = child.className;
					currentPos[currentPos.length] = line;
				}
				child.className = "p_selected_line";
			}

		}
	}
}


/** Listener de touche **/


function getTouchDown(evt) {
	var touche = window.event ? evt.keyCode : evt.which;

	// Key shift
	if (touche == 16) shiftDown = true;

}

function getTouchUp(evt) {
	var touche = window.event ? evt.keyCode : evt.which;

	// Key shift
	if (touche == 16) shiftDown = false;
}
