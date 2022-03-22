
/******************************** FONCTIONS DIVERSE : fonctions.js   **************************************************/

//Permet de retrouver la taille initiale d'une fenêtre après son agrandissement
function changerTaille(id)
{
	var tabPos;
	var boolFind=false; // Vérifie si la fenetre est agrandie ou rétrécie
	for(i=0;i<positionFenetre.length;i++)
	{
	tabPos=positionFenetre[i].split('/'); // On casse la sauvegarde des infos de la fenêtre
		if(tabPos[4]==id)  //id de l'élément à réduire
		{ 
			dimensionne(id,tabPos[0]+'px',tabPos[1]+'px'); 
			positionne(id, tabPos[2], tabPos[3]);
			positionFenetre.splice(i,1);
			boolFind=true;
			break;
		};
	};	
	if (!boolFind) agrandirFenetre(id);
};

// On va ici effacer un élément lorsqu'on l'aura déposé dans un autre élément
function effacer(id)
{
	var carreVise = new getPositionCarre('tomove4');
	var carreSelection = new getPositionCarre(id);
	
	if (carreSelection.droite>carreVise.gauche && carreSelection.gauche<carreVise.droite && carreSelection.haut< carreVise.bas && carreSelection.bas> carreVise.haut)
	{
		// on vérifie d'abord que la fenetre n'est pas agrandie (serait effacer sinon...)
		var boolPoub=false;
		for (i=0; i<positionFenetre.length ;i++)
		{ var tabPosi=positionFenetre[i].split('/');
			if (tabPosi[4] == id) {boolPoub=true; break; };
		};
		if (!boolPoub)
		{
			barreCache(id);
			tabId[tabId.length]=id;
		};
	};
};


// Permet de changer la couleur d'un élément visé par un autre élément
function deposer(id)
{
	var carreVise = new getPositionCarre('tomove4');
	var carreSelection = new getPositionCarre(id);
	
	if (isClicked)
	{
		if (carreSelection.droite>carreVise.gauche && carreSelection.gauche<carreVise.droite && carreSelection.haut< carreVise.bas && carreSelection.bas> carreVise.haut)
				{dG('tomove4').style.background='#990000';};
	};
};

// Permet de remettre la couleur d'un élément lors de la sortie d'un autre élément
function quitter(id)
{
	var carreVise = new getPositionCarre('tomove4');
	var carreSelection = new getPositionCarre(id);
	
	if (isClicked)
	{
		if ( carreSelection.droite < carreVise.gauche ||  carreSelection.gauche > carreVise.droite ||  carreSelection.haut >  carreVise.bas ||  carreSelection.bas<  carreVise.haut)
				{dG('tomove4').style.background='#eee none';};
	};
};

// Remet par défaut la couleur d'un élément lorsqu'on relache le bouton de la souris
function quitterCarre()
{
	dG('tomove4').style.background='#eee none';
};



//Permet de sortir tous les élements d'un autre élément
function interieur()
{	
	for (i=0;i<tabId.length;i++)
		{ barreMontre(tabId[i]); };
	tabId=new Array(); 	  
};

// Va vérifier que la la selection d'un élement en cours existe => évite les erreurs
function selectExiste()
{
	var temp=false;
		for (i=0;i<elementGrand.length;i++)
		if(elementGrand[i].getAttribute('id')==selectionId) //Si on trouve la selection
			{ temp=true; break; };
	return temp;
};


//Fonction qui permet d'adapter le document aux (re)dimensions du navigateur
function repositionneBarre() 
{
	barreMontre('barreMenuPetit');
	barreMontre('barreMenuGrand');
	
	//On réapplique la taille du document à celle du navigateur
	document.body.style.width=docW()+'px'; 
	document.body.style.height=docH()+'px';
	
	//On réajuste la hauteur de la barre de menu
	dG('barreMenuPetit').style.height=docH()+'px';
	dG('barreMenuGrand').style.height=docH()+'px';				
	barreCache('barreMenuGrand');
	barreCacheReduit();	
	
	
};

// Permet de mettre en plein écran une fenêtre
function agrandirFenetre(id) 
{	
	//On va conserver dans un tableau l'id et la position de chaque fenetre
	positionFenetre[positionFenetre.length]=largeur(id)+"/"+hauteur(id)+"/"+posX(id)+"/"+posY(id)+"/"+id;
	//On applique la taille de l'écran
	dimensionne(id, docW()-9+'px', docH()-2+'px');
	positionne(id, '7px', '0px');
};




//Fonction qui permet de sélectionner le haut d'une fenêtre pour la déplacer
function verifBarreClickDedans(id)
{
	//Si la position de la souris se situe en haut
	if (curY<=parseInt(posY(id))+18) { verifBarreDedans=true; }
		else { verifBarreDedans=false; };	
};




// Repositionne automatiquement un élément dans le document si jamais on le sort du corps
function repositionneDansCadre()
{

	if ( selectExiste() )
	{
	var posX2 = parseInt(posX(selectionId))+largeur(selectionId) ; // Position de droite en abcsisse d'un élement
	var posY2 = parseInt(posY(selectionId))+hauteur(selectionId) ; // Position du bas en ordonnée d'un élement
	var x = docW() - largeur(selectionId)+'px'; // Reposition sur l'axe des abcisses
	var y = docH() - hauteur(selectionId)+'px'; // Reposition sur l'axe des ordonnées
	if( posX2+5 > docW() && posY2+10 > docH() ) { positionne(selectionId, x, y); };	// diagonale bas + droite
	if( posY2+10 > docH() ) { dG(selectionId).style.top = y; }; // Si l'élément dépasse la droite
	if( posX2+5 > docW() ) { dG(selectionId).style.left = x; }; // Si l'élément dépasse le bas
	if( parseInt(posX(selectionId)) <= 0 ) { dG(selectionId).style.left=7+'px';}; // Si l'élément dépasse la gauche
	if( parseInt(posY(selectionId)) <= 0 ) { dG(selectionId).style.top=0+'px'; }; //Si l'élement dépasse le haut
	};
};

// Fonction qui va permettre de réduire un élement dans notre barre de menu, et d'afficher la progression
function reduireFenetreDansBarreInit(id)
{
	// On créé notre fenetre qui va se réduire en icone
 	createFenetreReduit(id);
 
  	// Position du dernier élement inséré
	var fin = elementReduit.length-1;
	
 	// On détermine la position de la dernière icone réduit
	decalage=0;
 	for(i=0 ; i <= fin -1 ; i++)
 		{ decalage = decalage+espace;}; 
 
 	//On applique un fond pendant la réduction de barre
	if (document.all) //Bug sur IE; le repeat x n'est pas assez rapide pour la récusrvité
 	{elementReduit[fin].style.background = "#33389f"; }
		else 
		{ elementReduit[fin].style.background = "url('image/reduitHorizontal.gif') repeat-x"; };
 
	//On montre le menu et les icones tant que l'icone se réduit
 	barreMontre('barreMenuGrand');
	barreMontreReduit() ;
	
	// On calcule les espaces séparant la barre de menu de notre élement.
	var ecartWidth=(docH() - parseInt(posX(id))+5) /5; 
	var ecartHeight = hauteur('boutStart')+decalage-parseInt(posY(id))+50;//50 => centre la réduction
	
	// On calcule le coefficient de réduction sur l'axe des abcsisses
	if ( parseInt(posX(id)) < 300 ) { coefWidth=10; } //Serait trop rapide sinon
	else { coefWidth=parseInt( posX(id) ) / 30; }; 
	
 	// On calcule le coefficient de vitesse de progression en fonction du coefficient de distance
	tempsReduction= ( parseInt(posX(id))+ecartWidth ) / coefWidth;

	// Coefficient de réduction de la largeur de la fenêtre qui se réduit progressivement
	coefLargeur = largeur(id) / tempsReduction;
	// On calcule le coefficient de réduction sur l'axe des ordonées
 	coefHeight = ecartHeight / tempsReduction;

	// On initialise les positions qui vont variées
	posXFenetreReduit = parseInt( posY(id) );
	posYFenetreReduit = parseInt( posX(id) ) + ecartWidth; //On décale les fenetres trop proche de la barre de menu
	largeurFenetreReduit = largeur(id);

	// On positionne et initialise la barre qui va se réduire progessivement 
 	positionne(elementReduit[fin].getAttribute('id'), posX(id), posY(id) );
 	dG(elementReduit[fin].getAttribute('id')).style.width=largeur(id)+'px';
 	dG(elementReduit[fin].getAttribute('id')).style.zIndex= 99992;	
};


//Fonction récursive qui réduit progressevement les positions et tailles
function reduireFenetreDansBarre()
{

	//Position du dernier élement inséré
	var fin = elementReduit.length-1;
	
	// On positionne la fenetre qui se réduit et on réduit sa largeur
	positionne(  elementReduit[fin].getAttribute('id'),posYFenetreReduit+'px',posXFenetreReduit+'px');
	dG( elementReduit[fin].getAttribute('id')).style.width=largeurFenetreReduit+'px';
	
	
	// On incrémente les positions 
	posXFenetreReduit = posXFenetreReduit + coefHeight;
	posYFenetreReduit = posYFenetreReduit - coefWidth;

	//Si la largeur de la fenetre en réduction est supérieur à la largeur de l'icone
 	if ( elementReduit[fin].offsetWidth >=50 )
		{largeurFenetreReduit=largeurFenetreReduit-coefLargeur; };

	// Tant que la fenetre n'est pas arrivée à la gauche de l'écran
	if (posYFenetreReduit>=0) 
	{	
		//On applique une méthode récursive
		setTimeout("reduireFenetreDansBarre()",1);
	}
	else
	{
		// Au finale, on positionne nos différentes icones réduits sur notre barre de menu
		positionne( elementReduit[fin].getAttribute('id'), 5+'px', hauteur('starto')+5+decalage+'px');
		dimensionne( elementReduit[fin].getAttribute('id'), 20+'px', 50+'px');
		
		//On met un fond aux icones (selon le navigateur)
		if (document.all) 
		{ elementReduit[fin].style.setAttribute("background","url('image/reduitVertical.gif') repeat-y;");}
		else {elementReduit[fin].style.background="url('image/reduitVertical.gif') repeat-y;";};
	
		barreCacheReduit();
		barreCache('barreMenuGrand');
		barreMontre('barreMenuPetit');
		barreCache('menuStart');
		
		//Pour l'affichage des éléments pendant la réduction
		verifEnReduction=false; 
		boolFinishReduit=false;
	};
};

//Fonction qui permet d'agrandir les icones situés dans la barre de menu
function agrandireFenetreDansBarre(id)
{
	decalage=decalage-espace; //On enlève un décalage entre les icones

	var boolTrouver=false;
	compteurReduit=0; // Incrémente la progression de défilement

	for(i=0;i<elementReduit.length;i++)
	{
		//On le met au début car on ne s'occuppe pas de l'élement qui va être trouvé après	
		if (boolTrouver)
		{ 
			decaleReduit();
			break;
		};
		// On recherche la fenetre à agrandire
		if (id==elementReduit[i].getAttribute('idGrand'))
		{ 
			boolTrouver=true;
			rem=i; //indice du tableau
		};
	};
	
	barreMontre(id); // On réaffiche la grande Fenetre
	dG(id).style.zIndex=getMaxId(elementGrand, 'z'); // On la met en premier plan
	document.body.removeChild(elementReduit[rem]); // On détruit l'icone
	elementReduit.splice(rem,1);
};

// Permet de décaler progressivement les icones situées dans notre barre de menu
function decaleReduit()
{ 
	var temp=10; // Valeur de décalage
	// On prend la position de l'icone qui va disparaitre, et on remonte les icones suivantes
	for (i=rem;i<elementReduit.length;i++)
	{
		 dG(elementReduit[i].getAttribute('id')).style.top=parseInt(dG(elementReduit[i].getAttribute('id')).style.top)-temp+'px'; 
	};
	
	compteurReduit=compteurReduit+10; // Incrémente le compteur de remonte
	// Recursivité sur la fonction tant que les icones ne se sont pas rejointe
	if (compteurReduit<espace)
	{ setTimeout("decaleReduit()",10);	};
};

// Fait défiler la barre de menu principale
function defilMenuGrand()
{
	dG('barreMenuPetit').style.width=5+cptdefil+"px"; // agrandie la taille de la barre
	cptdefil=cptdefil+2;
	
	if (cptdefil<30) // récusrsivité pour incrémenter le compteur
		{ setTimeout("defilMenuGrand()",10); }
	else 
	{
		dG('barreMenuPetit').style.width='5px';
		barreMontre('barreMenuGrand');
		barreCache('barreMenuPetit');
		barreMontreReduit();
		cptdefil=0;
	};
};



// Fonction qui initialise les menus de fichier, edition, etc...
function positionneMenu(id)
{
	positionne('menuFichier',parseInt(posX(id))+'px', parseInt(posY(id))+34+'px' );
	dG('menuFichier').style.zIndex=9990;
};

// Fonction qui permet de bloquer le clic droit
/*
function ejs_nodroit()
	{return(false);};
document.oncontextmenu = ejs_nodroit;
*/

function droite(e)
{
	//Si on clic droit	(mozilla ou IE)
	if ((!document.all && e.which == 3) || (document.all && event.button==2))
	{
		barreMontre('cadreClicDroit'); // Affichage du menu clic droit
		positionne('cadreClicDroit', curX+'px', curY+'px'); // Positionnement du cadre
		opacite=10; // Opacite initiale
		opaciteMax('cadreClicDroit'); // On affiche progressivement le cadre

			//si ca sort du cadre, on remet le cadre dans le document
			if(curX+dG('cadreClicDroit').offsetWidth+2>=docW())
				dG('cadreClicDroit').style.left=docW()-largeur('cadreClicDroit')-2+'px';
			if(curY+dG('cadreClicDroit').offsetHeight+10>=docH())
				dG('cadreClicDroit').style.top=docH()-hauteur('cadreClicDroit')-10+'px';
	};
	
	// Si on clique gauche, on masque le cadre
	if ((!document.all && (e.which == 1 || e.which == 2) ) || (document.all && (event.button==1 || event.button==4) ))
		{ barreCache('cadreClicDroit'); };
	
};

// Permet d'afficher petit à petit le menu Start
function opaciteMenuStart()
{
	opacite=10;
	opaciteMax('menuStart');
};


function opaciteMax(id)
{	
	dG(id).style.filter="Alpha( Opacity = "+opacite+" )"; // opacite IE
	if(opacite!=100) { dG(id).style.MozOpacity = '0.'+opacite; }//opacite Mozilla
	else { dG(id).style.MozOpacity = '1';};
	opacite=opacite+5; // incrémente l'opacité

	if (opacite<=100) //récursivité jusqu'a l'opacité maximale
	 { setTimeout("opaciteMax('"+id+"')", 15); }; 		
};	

// Réduction de l'opacité au passage de la souris (notament icone)
function opaciteReduitMin(id)
{
	if (document.all) {dG(id).style.filter="Alpha( Opacity = 50 )";} //IE
	else {dG(id).style.MozOpacity = '0.5';}; // Mozila
};

// On remet l'opacité initiale
function opaciteReduitMax(id)
{
	if (document.all) { dG(id).style.filter="Alpha( Opacity = 100 )";}
	else {dG(id).style.MozOpacity = '1';};
};


// Permet de retrouver la valeur maximal d'un tableau
function maxiValue(tab)
{
	var maxi=tab[0]; // Initialisation
	for(i=0 ; i < tab.length ; i++)
		{ if( maxi < tab[i] ) {maxi = tab[i];}; }; // On comparer les nombres
	return maxi; //on retourne la valeur max du tableau
};

// Attribut un numéro unique et maximum
function getMaxId(element, attribut)
{
	//On va maintenant s'assurer que chaque élément est un indice unique
	var indice=element.length;
	var tabIndice= new Array(); 
	//On récupère les indices de tous des élements dans tabIndice
	for(i=0;i<element.length;i++)
		{ 
			if (attribut != 'z') { tabIndice[i]=element[i].getAttribute(attribut); }
			else {tabIndice[i] = element[i].style.zIndex;}; //Pour gérer l'affichage 'priorité'
		};
	if (indice!=0) indice = parseInt(maxiValue(tabIndice))+1 ; // On attribue la valeur maximale + 1	
	return indice ;
};



// Permet d'afficher toutes les icones de la barre de menu
function barreMontreReduit()
{
	for(i=0;i<elementReduit.length;i++)
		{barreMontre(elementReduit[i].getAttribute('id'));};
};

// Permet de masquer toutes les icones de la barre de Menu
function barreCacheReduit()
{
	for(i=0;i<elementReduit.length;i++)
		{barreCache(elementReduit[i].getAttribute('id'));};
};


//Permet de masquer "tous" les élements de la barre de menu
function barreCacheMenuGrand()
{ 
	if (!verifMenuStart) 
		{
			barreCache('barreMenuGrand');
			barreCacheReduit();
			barreMontre('barreMenuPetit');
		};	
};

// Permet d'afficher tous les élements de la barre de menu
function barreMontreMenuGrand()
{
	if (curX<=5) 
		{
			barreMontre('barreMenuGrand');
			barreMontreReduit();
			barreCache('barreMenuPetit');
		};
};

// Permet de retirer tous les élements de menu (au clic gauche)
function enleverMenuStart()
{
	var men= new getMenuStartTaille();
	// On vérifie que l'on se trouve pas sur le menu
	if(jeSuisLeMenu|| (!verifEnReduction&&curX>32&&(curX>=men.menuStartLeft||curY>=men.menuStartTop) ) )
	{
		barreCache('menuStart');
		barreCache('menuSousStart');
		barreCache('barreMenuGrand');
		barreCacheReduit();
		barreMontre('barreMenuPetit');
		verifMenuStart=false;
		verifBarreDroit=false;
		jeSuisLeMenu=false;
	};
};

// Permet de conserver l'affichage des élements de la barre de menu quand on clique sur le bouton "start"
function gardeClicDroit(e)
{
	//Si on clique sur le bouton droit et qu'on se trouve sur une icone
	if ((!document.all && e.which == 3) || (document.all && event.button==2))
	{	
		barreMontre('barreMenuGrand');
		barreMontreReduit();
		barreCache('barreMenuPetit');
		verifBarreDroit=true;
	};
};