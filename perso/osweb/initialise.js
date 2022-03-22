
/****************************** INITIALISATION DES ELEMENTS : initialise.js   ************************************************/

/* Charge une fenetre de login si pas de cookies, sinon, r�cup�re les infos de la base */
function createFenetreSession() 
{
	
	if (document.cookie) //si les cookies existent
	{
		numFond=1;largeurFen=0;hauteurFen=0; //on r�initialise les valeurs
		//var backG= goTrouver(getCookie('myCookOsLog'), 1) ; // on r�cup�re e background de l'utilisateur
		//document.body.background=backG; //on applique le background trouv� en base
		getInfoBase(2, nbDeFond); //on r�cup�re toutes les informations de notre base de donn�es
	}
	else 
	{	
		numFond=0; // S�lection du fond de la session
		largeurFen=230;hauteurFen=260; //Largeur de notre fenetre login
		createFenetreGrand(); //on cr�e notre fenetre
	};
	
};

/* R�cup�re les informations de la BDD et les stockent dans "maBDD" */
function getInfoBase(debut, fin)  
{
	
	for(i=debut;i<=fin;i++)
	{ 
		/* on r�cup�re les infos de la base de la table debut � la table fin */
//		var tempText = goTrouver(getCookie('myCookOsLog'), i); 
		maBDD[i]=new Array();
//		maBDD[i]=tempText.split('/**/');
	};
};

//On va cr�� nos cookies
function createSession() 
{
	/* Date d'expiration du cookie */
	var expire = new Date(); 
	var unAn = expire.getTime() + (3600 * 1000 * 24 * 365 );
	expire.setTime(unAn);
	
	/* On �crit notre cookie avec le login et la date d'expiration */
	document.cookie = "myCookOsLog="+escape(dG('monLogin').value)+"; expires=" + expire.toGMTString(); 
	
	/* Si le login sasie n'existe pas en base, on va l'inserer */
	var infoL=goTrouver( dG('monLogin').value, 0) ;
	var infoLog= infoL.split('/'); 
	
	/* On rajoute les donn�es � notre base de donn�e via Ajax */
	if (infoLog[1] != dG('monLogin').value) 
	{
		goPoster(dG('monLogin').value,dG('monPass').value, dG('monMail').value , 0); 
		goPoster(dG('monLogin').value,'image/Co6.jpg' , "", 1);
		goPoster(dG('monLogin').value,'http://www.yahoo.fr', 'Yahoo' ,3);
	}
};

/* Recup�re le contenu des cookies */
function getCookie(nom)
{	
	var debut = document.cookie.indexOf( nom );
	
	/* Il n'existe pas */
	if( debut == -1 )	return null;

	/* On recherche la fin du cookie */
	var fin = document.cookie.indexOf( ";", debut+nom.length+1 );
	if( fin == -1 ) fin = document.cookie.length;

	/* On renvoie la valeur en la d�s�chappant */
	return unescape( document.cookie.substring( debut+nom.length+1, fin ) );
};



function initialiseBarreMenu()
{
	
	
	var H = docH()+'px';
	var W = docW()+'px';
	//On affecte ici la taille de notre "document" � la r�solution de l'utilisateur
	document.body.style.width= W;
	document.body.style.height= H;
	document.body.background="image/Co6.jpg"; //fond d�cran
	
	createMenu(); // Menu start
	createFenetreSession(); // Cr�ation de la session
	createSousMenu(); // Sous menu et les �lements de la session
	dG('starto').innerHTML ="START";
	
	 //On affecte une largeur et la hauteur de l'�cran � la barre 
	dimensionne('barreMenuPetit', '5px', H); // Barre r�duite
	dimensionne('barreMenuGrand', '30px' , H);	// Barre Agrandie
	dimensionne('menuStart',150+'px',300+'px'); //Les menus du bouton 'Start'
	dimensionne('cadreClicDroit', 150+'px', 250+'px'); // Le menu du clic droit
	dimensionne('menuFichier', 100+'px', 100+'px'); // Sous menu 'Fichier d'une fen�tre
	
	//On positionne les �lements
	positionne('barreMenuPetit', '0px', '0px');				
	positionne('barreMenuGrand', '0px', '0px');
	positionne('menuStart', '30px', '0px');
	positionne('menuSousStart', '180px', '0px');
	positionne('tomove4', '1400px', '100px');
	positionne('ic', '30px', '30px');
	
	// On affecte des valeurs d'index (�lements au dessus de l'autre)
	dG('barreMenuPetit').style.zIndex = 99990;
	dG('barreMenuGrand').style.zIndex =  99991;
	dG('menuStart').style.zIndex =  99990;
	dG('menuSousStart').style.zIndex =  99990;
	dG('cadreClicDroit').style.zIndex= 99999;
	
	// On cache certains �lements pour l'initialisation
	barreCache('barreMenuGrand'); 
	barreCache('menuFichier'); 
	barreCache('menuStart');
	barreCache('menuSousStart');
	barreCache('cadreClicDroit');
};