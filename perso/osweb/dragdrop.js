
/*************************** BIBLIOETHEQUE DEPLACEMENT / REDIMENSION : dragdrop.js ****************************/

//On récupère la position du curseur selon les navigateurs
function getPositionCurseur(e)
{
	//ie
	if(document.all)
	{
		curX = event.clientX;
		curY = event.clientY;
	}
	
	//netscape 4
	if(document.layers)
	{
		curX = e.pageX;
		curY = e.pageY;
	}
	
	//mozilla
	if(dG)
	{
		curX = e.clientX;
		curY = e.clientY;		
	}
}


function downAction(p_obj)
{
	isClicked = true;
	objectToDrag = p_obj;
	
	ecartX = curX - parseInt(objectToDrag.style.left);
	ecartY = curY - parseInt(objectToDrag.style.top);
				
	initialWidth = objectToDrag.offsetWidth;
	initialHeight = objectToDrag.offsetHeight;
	initialCurX = curX;
	initialCurY = curY;
	
	theAction = modifCurseur(p_obj);
}

function moveAction(p_obj)
{
	if(isClicked == false)
		{modifCurseur(p_obj);}
}

function moveAllAction()
{
	var newPosX;
	var newPosY;

	if(isClicked == true)
	{
		switch (theAction)
		{
			case _MOVE_ :
				newPosX = curX - ecartX;
				newPosY = curY - ecartY;
				 objectToDrag.style.left = newPosX + 'px';
				 objectToDrag.style.top = newPosY + 'px';
				break;
		}
	}
}

function resizeAllAction()
{
	if(isClicked == true)
	{	
		switch (theAction)
		{
			case _RESIZE_N_ :
				resizeByTop(curY);
				break;
			case _RESIZE_S_ :
				resizeByBottom(curY);
				break;
			case _RESIZE_W_ :
				 resizeByLeft(curX);
				break;
			case _RESIZE_E_ :
				 resizeByRight(curX);
				break;
			case _RESIZE_NW_ :
				resizeByTop(curY);
				resizeByLeft(curX);
				break;
			case _RESIZE_NE_ :
				resizeByTop(curY);
				resizeByRight(curX);
				break;
			case _RESIZE_SW_ :
				resizeByBottom(curY);
				resizeByLeft(curX);
				break;
			case _RESIZE_SE_ :
				resizeByBottom(curY);
				resizeByRight(curX);
				break;
		}
	}
}

function leaveAction(p_obj)
{
	if(p_obj == objectToDrag){
		isClicked = false;
	}
}

function leaveAllAction()
{
	if (isClicked) 
		{isClicked = false;}
}

function modifCurseur(p_obj)
{
	//p_obj.onmousemove=getPositionCurseur;
	
	// haut gauche
	if(((curY - parseInt(p_obj.style.top)) < thePadding) &&
		((curX - parseInt(p_obj.style.left)) < thePadding )){
			p_obj.style.cursor = 'nw-resize';
			return _RESIZE_NW_;
		}
	
	// haut droit
	if(((curY - parseInt(p_obj.style.top)) < thePadding) &&
		(((parseInt(p_obj.style.left) +  p_obj.offsetWidth) - curX) < thePadding)){
			p_obj.style.cursor = 'ne-resize';
			return _RESIZE_NE_;
		}
		
	// bas gauche
	if((((parseInt(p_obj.style.top) +  p_obj.offsetHeight) - curY) < thePadding) &&
		((curX - parseInt(p_obj.style.left)) < thePadding )){
			p_obj.style.cursor = 'sw-resize';
			return _RESIZE_SW_;
		}
		
	// bas droit
	if((((parseInt(p_obj.style.top) + p_obj.offsetHeight) - curY) < thePadding) &&
		(((parseInt(p_obj.style.left) +  p_obj.offsetWidth) - curX) < thePadding)){
			p_obj.style.cursor = 'se-resize';
			return _RESIZE_SE_;
		}
		
	// cote gauche
	if((curX - parseInt(p_obj.style.left)) < thePadding ){
			p_obj.style.cursor = 'w-resize';
			return _RESIZE_W_;
		}
		
	// cote droit
	if(((parseInt(p_obj.style.left) +  p_obj.offsetWidth) - curX) < thePadding){
			p_obj.style.cursor = 'e-resize';
			return _RESIZE_E_;
		}
		
	// haut
	if((curY - parseInt(p_obj.style.top)) < thePadding){
			p_obj.style.cursor = 'n-resize';
			return _RESIZE_N_;
		}
		
	// bas
	if(((parseInt(p_obj.style.top) +  p_obj.offsetHeight) - curY) < thePadding){
			p_obj.style.cursor = 's-resize';
			return _RESIZE_S_;
		}
		
	p_obj.style.cursor = 'default';
	return _MOVE_;
}

function resizeByTop(p_curY)
{
	var newPosY;
	var newHeight;
	newHeight = (initialHeight + (initialCurY - p_curY));
	if(newHeight>docH()) newHeight=docH()-15;
	if(newHeight > minHeight){
		newPosY = p_curY - ecartY;
		objectToDrag.style.top = newPosY + 'px';
		objectToDrag.style.height = newHeight + 'px';
	}
}

function resizeByBottom(p_curY)
{
	var newHeight;
	newHeight = (initialHeight - (initialCurY - p_curY));
	if(newHeight>docH()) newHeight=docH()-15;
	if(newHeight > minHeight)	
		objectToDrag.style.height = newHeight + 'px';
}

function resizeByLeft(p_curX)
{
	var newPosX;
	var newWidth;
	newWidth = (initialWidth + (initialCurX - p_curX));
	if(newWidth>docW()) newWidth=docW()-15;
	if(newWidth > minWidth){
		newPosX = p_curX - ecartX;
		objectToDrag.style.left = newPosX + 'px';
		objectToDrag.style.width = newWidth + 'px';
	}
}

function resizeByRight(p_curX)
{
	var newWidth;
	newWidth = (initialWidth - (initialCurX - p_curX));
	if(newWidth>docW()) newWidth=docW()-15;
	if(newWidth > minWidth)
		objectToDrag.style.width = newWidth + 'px';
}
