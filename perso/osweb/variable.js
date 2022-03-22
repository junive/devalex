
/********************************  VARIABLES : variables.js  *******************/

var isClicked = false; // Vérifie que l'on a cliqué sur un élément (dragDrop)
var objectToDrag = 0;
var ecartX;
var ecartY;
var curX; // Position de la souris (abscisse)
var curY; // Position de la souris (ordonnée)

var verifBarreDroit=false;  // permet de garder la barre de menu ouverte sur une icone
var verifMenuStart=false; // Verifie si l'on a ouvert la barre de menu
var verifClickMenu=false; // Vérifie si l'on a cliqué sur le menu Start
var boolFinishReduit=false; // Vérifie que l'on a terminé la réduction d'une fenetre
var verifEnReduction=false; // Vérifie que l'on est pas en train de réduire une fenetre
var jeSuisLeMenu=false; //Lorsque qu'on clique sur un menu, il disparait
var meRedimensionner=false; //Fond que l'on va redimensionner ou non dans une fenetre

var rem=0; // Variable de position pour les icones
var cptdefil=0; // Va incrémenter le défilement de notre barre de menu

var opacite=0; // Selectionnne le niveau d'opacité par défaut
var decalage; // Position de la dernière icone réduite
var espace=60; // Espace entre chaque icone réduit dans la barre de menu

var tempsReduction;  // coefficient qui détermine le temps pour réduire une fenetre
var coefWidth; // * coefficient proportionnelle à l'écart séparant un élément de la barre de menu (horizontale)
var coefHeight; // * (vertical)
var coefLargeur; // * (largeur de la fenetre a réduire)
var posXFenetreReduit; // + Position qui varie en fonction de la réduction en icone (abscisse)
var posYFenetreReduit; // + (ordonnée)
var largeurFenetreReduit; // + (largeur de la fenetre a réduire)

var selectionId='ic'; // Id de d'élément sélectionné
var verifBarreDedans=false; // Vérifie que l'on a cliqué sur la barre de titre pour déplacer un élément

var tabId= new Array(); // contient les Id d'élément mis dans un autre élément
var elementGrand=new Array(); // Tableau de fenetre Grande
var elementReduit=new Array(); // Tableau de fenetres réduite (icone)1
var positionFenetre=new Array(); // Tableau qui contient les positions de chaque fenêtre redimensionné

var initialHeight; 
var initialWidth;
var initialCurX;
var initialCurY;
var theAction;
var minWidth = 150; // Largeur minimum de redimension
var minHeight = 100; // Hauteur minimum de redimension
var thePadding = 7; // espace en pixel qui détermine la largeur pour la redimension

/*  variables qui détermine quel redimension doit on aplliquer (gauche-droite, diagonale, bas etc...) */
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
var numFond=1; // Valeur numérique de notre fond
var docXML; // Récupère les réponses Ajax
var maBDD=new Array(); // Tableau a double dimension qui contiendra les infos de la BDD
var monUrl; //Url que l'on va introduire dans nos éléments
var selectValue=2; // Permet de switcher la valeur numérique du fond
var nbDeFond=5; // Nombre de fond disponible (pour l'initialisation