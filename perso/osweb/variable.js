
/********************************  VARIABLES : variables.js  *******************/

var isClicked = false; // V�rifie que l'on a cliqu� sur un �l�ment (dragDrop)
var objectToDrag = 0;
var ecartX;
var ecartY;
var curX; // Position de la souris (abscisse)
var curY; // Position de la souris (ordonn�e)

var verifBarreDroit=false;  // permet de garder la barre de menu ouverte sur une icone
var verifMenuStart=false; // Verifie si l'on a ouvert la barre de menu
var verifClickMenu=false; // V�rifie si l'on a cliqu� sur le menu Start
var boolFinishReduit=false; // V�rifie que l'on a termin� la r�duction d'une fenetre
var verifEnReduction=false; // V�rifie que l'on est pas en train de r�duire une fenetre
var jeSuisLeMenu=false; //Lorsque qu'on clique sur un menu, il disparait
var meRedimensionner=false; //Fond que l'on va redimensionner ou non dans une fenetre

var rem=0; // Variable de position pour les icones
var cptdefil=0; // Va incr�menter le d�filement de notre barre de menu

var opacite=0; // Selectionnne le niveau d'opacit� par d�faut
var decalage; // Position de la derni�re icone r�duite
var espace=60; // Espace entre chaque icone r�duit dans la barre de menu

var tempsReduction;  // coefficient qui d�termine le temps pour r�duire une fenetre
var coefWidth; // * coefficient proportionnelle � l'�cart s�parant un �l�ment de la barre de menu (horizontale)
var coefHeight; // * (vertical)
var coefLargeur; // * (largeur de la fenetre a r�duire)
var posXFenetreReduit; // + Position qui varie en fonction de la r�duction en icone (abscisse)
var posYFenetreReduit; // + (ordonn�e)
var largeurFenetreReduit; // + (largeur de la fenetre a r�duire)

var selectionId='ic'; // Id de d'�l�ment s�lectionn�
var verifBarreDedans=false; // V�rifie que l'on a cliqu� sur la barre de titre pour d�placer un �l�ment

var tabId= new Array(); // contient les Id d'�l�ment mis dans un autre �l�ment
var elementGrand=new Array(); // Tableau de fenetre Grande
var elementReduit=new Array(); // Tableau de fenetres r�duite (icone)1
var positionFenetre=new Array(); // Tableau qui contient les positions de chaque fen�tre redimensionn�

var initialHeight; 
var initialWidth;
var initialCurX;
var initialCurY;
var theAction;
var minWidth = 150; // Largeur minimum de redimension
var minHeight = 100; // Hauteur minimum de redimension
var thePadding = 7; // espace en pixel qui d�termine la largeur pour la redimension

/*  variables qui d�termine quel redimension doit on aplliquer (gauche-droite, diagonale, bas etc...) */
var _MOVE_ 		= 0;
var _RESIZE_N_ 	= 1;
var _RESIZE_S_ 	= 2;
var _RESIZE_W_ 	= 3;
var _RESIZE_E_ 	= 4;
var _RESIZE_NW_ = 5;
var _RESIZE_NE_ = 6;
var _RESIZE_SW_ = 7;
var _RESIZE_SE_ = 8;

var padFondL=50; // Marge du fond (largeur)
var padFondH=50; // Marge du fond (hauteur)
var largeurFen=0; // Largeur d'une fenetre
var hauteurFen=0; //Hauteur d'une fenetre
var numFond=1; // Valeur num�rique de notre fond
var docXML; // R�cup�re les r�ponses Ajax
var maBDD=new Array(); // Tableau a double dimension qui contiendra les infos de la BDD
var monUrl; //Url que l'on va introduire dans nos �l�ments
var selectValue=2; // Permet de switcher la valeur num�rique du fond
var nbDeFond=5; // Nombre de fond disponible (pour l'initialisation