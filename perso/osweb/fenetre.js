
/******************************** FENETRES ET ICONES : fenetre.js   **************************************************/

function createFenetreGrand()
{ 	
	var fin=elementGrand.length; // Dernier indice de l'élément à insérer
	var indice=getMaxId(elementGrand, 'indice'); // indice propre unique
	var nomId=indice+"fenetreGrand"; // nom de notre fenetre	
		
		var leFond=new selectFond(); // On va selectionner le fond choisie
		var grandMeRedimensionner = meRedimensionner; // On sauvegarde le choix de redimension pour l'élément

		//On créé notre élement
		elementGrand[fin]=document.createElement("div"); 
		
		elementGrand[fin].setAttribute('typoFond', leFond.getAttribute('id'));	
		leFond.id=nomId+"monF"; //fond propre à la fênetre

		elementGrand[fin].setAttribute('indice', indice);
		elementGrand[fin].id=nomId;	
		elementGrand[fin].className='fenetreGrand'; //Style Css
		elementGrand[fin].setAttribute("fondGrandId", numFond);
		elementGrand[fin].setAttribute("fondGrandUrl", monUrl);
		if( elementGrand.length==1 ) elementGrand[fin].style.zIndex=0; //initialisation
		elementGrand[fin].style.zIndex=getMaxId(elementGrand, 'z' );
		if (grandMeRedimensionner) elementGrand[fin].style.textAlign='center'; 
		
		
		
		// quand on clic sur un bouton
		elementGrand[fin].onmousedown=function()
		{
			selectionId=nomId;	// On indique la selection en cours	
			downAction(this);	// On va appliquer une action pour le drag
			verifBarreClickDedans(nomId); //On vérifie si on se trouve dans la barre de titre
			var newIndice=getMaxId(elementGrand, 'z'); 
			dG(nomId).style.zIndex=newIndice;// Affichage de la priorité

		};	

		//Permet le drag and drop
		elementGrand[fin].onmousemove=function()
		{ 
			moveAction(this);
			deposer(nomId);
			quitter(nomId);
			if (isClicked&&grandMeRedimensionner) 
			dimensionne(leFond.getAttribute('id'), largeur(nomId)-padFondL+'px', hauteur(nomId) -padFondH+'px');
		};	
		elementGrand[fin].onmouseup=function(){ effacer(nomId);quitterCarre(); };
		//Fond haut = 0d18ae / blanc
		var hautFenetre=document.createElement("div"); //barre de titre	
		hautFenetre.style.cssText="background:url('image/hautFenetre.gif') repeat-x;border-bottom:1px solid #990000; height: 16px; text-align:right ;";
		
		hautFenetre.onclick=function(){ selectionId=nomId; };		
		// Agrandissement ou réduction de la fenetre au double clic
		hautFenetre.ondblclick=function()
		{
			changerTaille(nomId);
			
			
			if (grandMeRedimensionner) 
			{ 
				dimensionne(leFond.getAttribute('id'), largeur(nomId)-padFondL+'px', hauteur(nomId) -padFondH+'px');
				elementGrand[fin].style.background="#000000";
				barreCache('menuDeFenetre'+indice);
			};
		};	
		
		var titre=document.createElement("div"); //Le nom du titre
		titre.style.cssText='position: absolute; left:5px; text-align:left ; font-size:12px; line-height:14px;';
		titre.innerHTML=leFond.getAttribute("titre");
		
		
		var reduction=document.createElement("div"); // Permet de réduire en icone dans le menu
		reduction.style.cssText='cursor:default; position: absolute; border:1px solid #990000; width: 10px;height: 10px; top:3px; right:33px;bottom:2px; background-color:#990000; font-size:0px ';
		reduction.onclick=function()
		{	
			selectionId=nomId;
			verifEnReduction=true; // Permet de ne pas emmeler les actions (montrer barre et cache barre)
			if(!boolFinishReduit) // Permet d'attendre la fin de la réduction (évite d'emmeler les icones)
			{	
				// L'espace est libre, on réduit
				boolFinishReduit=true; 
				reduireFenetreDansBarreInit(nomId);
				reduireFenetreDansBarre();
			};
			barreCache(nomId); //On masque la grande Fenetre
		};
		
		var devientGrand=document.createElement("div"); // plein ecran
		devientGrand.style.cssText='cursor:default; position: absolute; border:1px solid #990000; width: 10px;height: 10px; right:18px; top:3px; bottom:2px; background-color:#3366FF; font-size:0px ';		
		//On change la taille de la fenetre (plein ecran / Dimninuer
		devientGrand.onclick=function() 
		{
			selectionId=nomId;
			changerTaille(nomId); 
			if (grandMeRedimensionner) 
			{ 	
				
				dimensionne(leFond.getAttribute('id'), largeur(nomId)-padFondL+'px', hauteur(nomId) -padFondH+'px');
				elementGrand[fin].style.background="#F5F5FE";
				barreMontre('menuDeFenetre'+indice);
			};
		};
			
		// Détruit une fenetre
		var virerFenetre=document.createElement("div");
		virerFenetre.style.cssText='cursor:default;position: absolute; border:1px solid #990000; width: 10px;height: 10px; right:2px; top:3px; bottom:2px";'; 
		virerFenetre.onclick=function()
		{	
			for(i=0;i<elementGrand.length;i++)
			{
				if(nomId==elementGrand[i].getAttribute('id')) // vérifie l'id de la fenetre
				{
					// On détruit la fenetre correspondante
					document.body.removeChild(elementGrand[i]);	
					elementGrand.splice(i,1);
					break;
				};
			};
		};
		
		// les menus de nos fenetres
		var barreDesMenus=document.createElement("div");
		barreDesMenus.style.cssText='cursor:default; border-bottom:1px solid  #3399FF; height: 16px; text-align:center; ';
		barreDesMenus.id='menuDeFenetre'+indice;
		// Le menu fichier
		var menuFichier=document.createElement("div");
		menuFichier.style.cssText='font-size:10px; line-height:10px;position: absolute; left:2px; top:20px;  width:38px; height:12px  ';
		menuFichier.id=indice+'fichier';
		menuFichier.innerHTML="Fichier"; //titre
		menuFichier.onmouseout=function() // Masque du menu
		{		
			dG(indice+'fichier').style.background='none';
			barreCache('menuFichier');	
		};
		menuFichier.onmouseover=function() //Afiche du menu
		{	
			dG(indice+'fichier').style.background='#33FFFF '; 
			// On vérifie qu'on a activé l'affichage des menus et on affiche au passage de la souris
			if(verifClickMenu) 
			{
				barreMontre('menuFichier');
				positionneMenu(indice+'fenetreGrand');
			
			};
		};	
		menuFichier.onclick=function()
		{
			// On affiche nos menus et les active pour le passage de la souris
			barreMontre('menuFichier');
			positionneMenu(nomId);
				if(!verifClickMenu){ verifClickMenu=true; }
					else { verifClickMenu=false; };	
			 
		};
		
		// Le menu affichage
		var menuAffichage=document.createElement("div");
		menuAffichage.style.cssText='font-size:10px; line-height:10px;position:absolute; left:42px; top:20px; width:50px; height:12px';
		menuAffichage.id=indice+'affichage';
		menuAffichage.innerHTML="Affichage"; //titre
		menuAffichage.onmouseover=function(){dG(indice+'affichage').style.background='#33FFFF';};
		menuAffichage.onmouseout=function(){dG(indice+'affichage').style.background='none';};
		
		var menuAide=document.createElement("div");
		menuAide.style.cssText='font-size:10px; line-height:10px;position:absolute; left:85px; top:20px; width:50px; height:12px';
		menuAide.id=indice+'aide';
		menuAide.innerHTML="Aide"; //titre
		menuAide.onmouseover=function(){dG(indice+'aide').style.background='#33FFFF';};
		menuAide.onmouseout=function(){dG(indice+'aide').style.background='none';};
		
		// On encapsule nos différents éléments
		hautFenetre.appendChild(titre);
		hautFenetre.appendChild(reduction);
		hautFenetre.appendChild(devientGrand);
		hautFenetre.appendChild(virerFenetre);
		barreDesMenus.appendChild(menuFichier);
		barreDesMenus.appendChild(menuAffichage);
		barreDesMenus.appendChild(menuAide);
		
	
		elementGrand[fin].appendChild(hautFenetre);
		elementGrand[fin].appendChild(barreDesMenus); 
		elementGrand[fin].appendChild(leFond);
			
		
		// On rajoute l'élément principale à notre document
		document.body.appendChild(elementGrand[fin]);

		if (grandMeRedimensionner)
		 {dimensionne(elementGrand[fin].getAttribute('id'), largeur(leFond.getAttribute('id'))+padFondL+'px',hauteur(leFond.getAttribute('id'))+padFondH+'px'); }
		else
		{ 	
			if (largeurFen==0||hauteurFen==0) {dimensionne(elementGrand[fin].getAttribute('id'), '380px', '250px');}
			else {dimensionne(elementGrand[fin].getAttribute('id'), largeurFen+'px', hauteurFen+'px');};
			
		};
		
		var milieuL=docW()/2-parseInt(elementGrand[fin].style.width)/2;
		var milieuH=docH()/2-parseInt(elementGrand[fin].style.height)/2;
		positionne(nomId, milieuL+'px', milieuH+'px');

		
};



// Fonction qui permet de créer à la volée des icones pour la barre de menu
function createFenetreReduit(id) 
{ 
		
		var fin=elementReduit.length; // Indice du dernier élément à insérer
		var indice=getMaxId(elementReduit, 'indice'); // indice propre unique
		var nomId=indice+"fenetreQuiSeReduit"; // nom de notre icone	

		
		//On créé notre élement
		elementReduit[fin]=document.createElement("div");
		elementReduit[fin].setAttribute("idGrand",id); // id de l'élément agrandie correspondant
		elementReduit[fin].setAttribute("indice",indice); // Indice propre et unique
		elementReduit[fin].id=nomId; // nom de l'élément
		elementReduit[fin].style.cssText="cursor:default; border:1px solid #000000; position:absolute; font-size:12px; line-height:14px; text-align:center;  -moz-border-radius: 4px;"; //style
		
		var infoRed=document.createElement("div");
		infoRed.id=indice+'infReduit';

		infoRed.style.cssText="cursor:default; border:1px solid #000000; position:absolute; font-size:12px; line-height:14px; vertical-align:top;text-align:center;  -moz-border-radius: 6px;  background:#F5F5FE; z-Index:99992 ;overflow:hidden" ; //style
		
	 	//background:url(image/menuStart.gif) repeat-y; 
		//On va récupérer le fond de la fenetre pour l'appliquer à l'info

		numFond=dG(id).getAttribute('fondGrandId');
		monUrl==dG(id).getAttribute('fondGrandUrl');

		
		//On va créer un objet fond pour les informations
		var fondInfoReduit=new selectFond();
		fondInfoReduit.id= id+"mof";
		
		//Si le fond a des fond (en l'occurence monFondEcran)
		if (dG(id).getAttribute('typoFond')=='monFondEcran' ) 
		{
				for (i=0;i<fondInfoReduit.childNodes.length;i++)
				{ 
					fondInfoReduit.childNodes[i].style.width='35px';
					fondInfoReduit.childNodes[i].style.height='35px'; 
					fondInfoReduit.childNodes[i].style.margin='2px'; 
				};	
		}; 
		
		//fondInfoReduit.id='fondReduit'+indice;
		fondInfoReduit.style.position='relative';
		infoRed.innerHTML=fondInfoReduit.getAttribute('titre');

		infoRed.appendChild( fondInfoReduit ) ; 
		document.body.appendChild(infoRed) ;
				
		dimensionne(infoRed.getAttribute('id'), "130px", "130px");
		dimensionne(fondInfoReduit.getAttribute('id'), "120px", "120px");
		barreCache(infoRed.getAttribute('id'));
	
		elementReduit[fin].onmousedown=gardeClicDroit; //conserve les élément de la barre de menu
		elementReduit[fin].onclick=function()
		{
			
			document.body.removeChild(infoRed) ;
			agrandireFenetreDansBarre(id);
			
		};
		// On agrandie la fenetre
		elementReduit[fin].onmouseover=function()
		{
			barreMontreReduit();
			barreMontre("barreMenuGrand");
			opaciteReduitMin(nomId);
			if(!boolFinishReduit)
			{
				barreMontre(infoRed.getAttribute('id')) ;
				positionne(infoRed.getAttribute('id'), largeur('barreMenuGrand')+'px', parseInt(posY(nomId))-30+'px');
				
			};

			
		};  
		
		elementReduit[fin].onmouseout=function()
		{
			//barreCache(id );
			if(!boolFinishReduit)barreCache(infoRed.getAttribute('id')) ;
			opaciteReduitMax(nomId); 
			if(!verifEnReduction&&!verifBarreDroit)barreCacheMenuGrand();
		};
		
		elementReduit[fin].innerHTML=indice; // Titre de l'icone
		
		document.body.appendChild(elementReduit[fin]); //On ajoute l'icone au document

};


