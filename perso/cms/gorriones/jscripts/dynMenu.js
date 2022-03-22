var timeout = 1000;

// creat timeout variables for list item
// it's for avoid some warning with IE
for( var i = 0; i < 100; i++ ) {
    eval("var timeoutli" + i + " = false;");
}

// this fonction apply the CSS style and the event
function initMenu() {
    // a test to avoid some browser like IE4, Opera 6, and IE Mac

    if ( browser.isDOM1 
    && !( browser.isMac && browser.isIE ) 
    && !( browser.isOpera && browser.versionMajor < 7 )
    && !( browser.isIE && browser.versionMajor < 5 ) ) {

        // get some element
        var menu = document.getElementById('menu'); // the root element

		//menu.style['visibility'] = 'visible';
		//menu.style['width'] = getDirectChildNumber(menu) * widthMenu + "px";
        var lis = menu.getElementsByTagName('li'); // all the li

        // change the class name of the menu, 
        // it's usefull for compatibility with old browser
        menu.className='menu';

		// Correction of the panel position to view
		var first_children =  getDirectChildren(menu);
		for (i = 0; i < first_children.length; i++) {
			ul =  first_children[i].getElementsByTagName('ul').item(0);
			if (ul != null) {
				var ie_margin = (browser.isIE) ? 3 : -1;
				ul.style.marginTop  = ie_margin + 25 +"px";
			 	ul.style.marginLeft  = - first_children[i].offsetWidth + 1 +"px";
				var second_children = ul.getElementsByTagName('ul');
				for (j = 0; j < second_children.length; j++) {
					uls =  second_children[j];
					if (uls != null) {
						uls.style.marginTop  = - 28 +"px";
						uls.style.marginLeft  = ul.offsetWidth + 1 +"px";
					}
				}
			}
		}
		
        // i am searching for ul element in li element
        for ( var i=0; i<lis.length; i++ ) {
            // is there a ul element ?
			uls = lis.item(i).getElementsByTagName('ul');
            if ( uls.length > 0 ) {
                // improve IE key navigation
				
				first_ul_children = getDirectChildren(uls.item(0));
				for (j = 0; j < first_ul_children.length; j++) {
					first_ul_children[j].getElementsByTagName('a').item(0).style.width 
						= uls.item(0).offsetWidth - 12 +"px";
				}
				
                if ( browser.isIE ) {
                    addAnEvent(lis.item(i),'keyup',show);
                }
                // link events to list item
                addAnEvent(lis.item(i),'mouseover',show);
                addAnEvent(lis.item(i),'mouseout',timeoutHide);
                addAnEvent(lis.item(i),'blur',timeoutHide);
                addAnEvent(lis.item(i),'focus',show);
				
                lis.item(i).setAttribute( 'id', "li"+i ); // add an id to list item
				hideUlUnderLi(lis.item(i)); // Put hidden value /*m*/
            }
        }
    }
}

function addAnEvent( target, eventName, functionName ) {
    // apply the method to IE
    if ( browser.isIE ) {  //attachEvent dont work properly with this
        eval('target.on'+eventName+'=functionName');
    } else { // apply the method to DOM compliant browsers
        target.addEventListener( eventName , functionName , true ); // true is important for Opera7
    }
}
    
// hide the first ul element of the current element
function timeoutHide() {     // start the timeout
    eval( "timeout" + this.id + " = window.setTimeout('hideUlUnder( \"" + this.id + "\" )', " + timeout + " );");
}

// hide the ul elements under the element identified by id
function hideUlUnder( id ) {
	document.getElementById(id).getElementsByTagName('a')[0].className="";/*m*/
    document.getElementById(id).getElementsByTagName('ul')[0].style['visibility'] = 'hidden';
}

// show the first ul element found under this element
function show() {     // show the sub menu

	ul = this.getElementsByTagName('ul')[0];
	// Apply progressive show
	if (ul.style.visibility == 'hidden') { /*m*/
		ul.style.overflow = 'hidden';
		first_ul_children = getDirectChildren(ul);
		var ul_height = 0;
		for (j = 0; j < first_ul_children.length; j++) {
			ul_height = ul_height + first_ul_children[0].offsetHeight + 2; 
		}
		increaseHeight(this, ul, 5, ul_height); 
	}
	ul.style['visibility'] = 'visible';

    var currentNode=this;
    while(currentNode) {
            if( currentNode.nodeName=='LI') {
                currentNode.getElementsByTagName('a')[0].className = 'linkOver';
            }
            currentNode=currentNode.parentNode;
    }
    // clear the timeout
    eval ( "clearTimeout( timeout"+ this.id +");" );
    hideAllOthersUls( this );
}

// Progressive show to menu /*m*/
function increaseHeight(li, ul, cptH, limit_height) {
	cptH = cptH + 5;
	ul.style.height = cptH + "px";
	if (!document.all) {setOpacity(ul, cptH / limit_height);}
	if (cptH < limit_height) {
		setTimeout (function() {increaseHeight(li, ul, cptH, limit_height);}, 15);	
	} else {
		ul.style.height = limit_height + "px";
		if (!document.all) {setOpacity(ul, 1);}
		ul.style.overflow = 'visible';
	}
}

// Set Opcity of an element /*m*/
function setOpacity(obj, num) { 
	if (document.all) {	 
		obj.style['filter']="Alpha( Opacity = "+ num*100 +")";
	} //IE
		else {obj.style.MozOpacity = ""+num+""; }; // Mozila
}

// Count the direct child number /*m*/
function getDirectChildren(ul) {
	children = new Array();
	lis = ul.getElementsByTagName('li');
	for (var j = 0; j < lis.length; j++) {
		if (lis.item(j).parentNode == ul)  {
			children.push(lis.item(j));
		}
	}
	return children;
}

// hide all ul on the same level of  this list item
function hideAllOthersUls( currentLi ) {
    var lis = currentLi.parentNode;
	//currentLi.getElementsByTagName('a')[0].className="";
    for ( var i=0; i<lis.childNodes.length; i++ ) {
        if ( lis.childNodes[i].nodeName=='LI' && lis.childNodes[i].id != currentLi.id ) {
            hideUlUnderLi( lis.childNodes[i] );
        }
    }
}

// hide all the ul wich are in the li element
function hideUlUnderLi( li ) {
    var as = li.getElementsByTagName('a');
    for ( var i=0; i<as.length; i++ ) {
        as.item(i).className="";
    }
    var uls = li.getElementsByTagName('ul');
    for ( var i=0; i<uls.length; i++ ) {
        uls.item(i).style['visibility'] = 'hidden';
    }
}

// JavaScript Document