
/********************************LES RACCOURCIS : raccourcis.js   **************************************************/

/* Racourcis pour simplifier la programmation */

function dG(id) //r�cup�re un �l�ment par son id
	{ return document.getElementById(id); }
function docH() //hauteur de l'�cran
	{ return document.documentElement.clientHeight ; }
function docW() //largeur de l'�cran
	{ return document.documentElement.clientWidth ; }
function largeur(id) //largeur d'un �lement
	{ return dG(id).offsetWidth; }
function hauteur(id) //hauteur d'un �lement
	{ return dG(id).offsetHeight; }
function posX(id) //Position sur l'axe des abscisses
	{ return dG(id).style.left; }
function posY(id) // Position sur l'axe des ordonn�es
	{ return dG(id).style.top; }
function dC(info) // Position sur l'axe des ordonn�es
	{ return document.write(info); }
	
// Permet de positionner un �lement
function positionne(id, posX, posY)
{	
	dG(id).style.left = posX;
	dG(id).style.top = posY;
}

//Permet de (re)dimensionner un �l�ment
function dimensionne(id, largeur, longueur)
{
	dG(id).style.width=largeur;
	dG(id).style.height=longueur;
}

//Fonction qui va cacher un �lement
function barreCache(id)
{
	dG(id).style.visibility='hidden';
    dG(id).style.display='none' ; 
}

//Fonction qui va faire r�aparaitre un �lement
function barreMontre(id)
{
	dG(id).style.visibility='visible';
    dG(id).style.display='block';
}

// Objet qui r�cup�re la taille de notre menu	(utile ?)		
function getMenuStartTaille()
{
	 this.menuStartLeft=parseInt(posX('menuStart'))+largeur('menuStart');
	 this.menuStartTop=parseInt(posY('menuStart'))+hauteur('menuStart');
}

// Objet qui retourne les positions d'un �l�ment
function getPositionCarre(nomCarre)
{
	this.gauche = parseInt( posX(nomCarre) );
	this.droite = this.gauche + largeur(nomCarre);
	this.haut = parseInt( posY(nomCarre) );
	this.bas = this.haut + hauteur(nomCarre);		
}

/* Fin Racourcis */