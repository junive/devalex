
/******************************** LES MENUS DU SITE : menus.js   **************************************************/

/* Contrôleur qui va sélectionner le type de fond en fonction de ceux des menus */
function selectFond()
{
			if(numFond==0){meRedimensionner=false;return selectFondSession();}
			if(numFond==1){meRedimensionner=false;return selectFondEcran();}
			if(numFond==2){meRedimensionner=true;return selectVideo("https://www.youtube.com/embed/OUi9-jqq_i0");}
			if(numFond==3){meRedimensionner=true;return selectPage("https://seriesaddict.fr/news");}
			if(numFond==4){meRedimensionner=true;return selectRadio("http://novazz.ice.infomaniak.ch/novazz-128.mp3");}
			if(numFond==5){meRedimensionner=false;return selectFondInsertion();}
			if(numFond==6){meRedimensionner=false;return selectFondRecherche();}		
};

/* Menu Principal de la barre de menu */
function createMenu()
{
		var menu=document.createElement("div"); 
		menu.id='menuStart';
		menu.style.cssText="cursor:default; border:1px solid #000000; position:relative; font-size:14px; line-height:14px; text-align:center; font-weight:bold; font-family:Comic Sans MS; " ;
		menu.innerHTML="Mon Menu<br /><br />";

		//On implémente nos menus et applique un numéro de fond
		menu.appendChild(mesMenu ( 1,'image/ico1.gif', 'Selection du fond', false));
		menu.appendChild(mesMenu ( 2,'image/ico1.gif', 'Ma Vidéo', false));
		menu.appendChild(mesMenu ( 3,'image/ico1.gif', 'Ma Page', false));
		menu.appendChild(mesMenu ( 4,'image/ico1.gif', 'Ma radio', false));
		menu.appendChild(mesMenu ( 4,'image/ico1.gif', 'Sous menu', true));
		menu.appendChild(mesMenu ( 5,'image/ico1.gif', 'Ajouter un lien', false));
		//menu.appendChild(mesMenu ( 6,'image/ico1.gif', 'Rechercher une vidéo', false));
		document.body.appendChild(menu);
};


// On crée et applique les méthodes de notre menu start (instancier pendant l'iniatilsation)
function mesMenu(numMenu, ico, titre, voirSousMenu)
{
		var menu1=document.createElement("div"); 
		var nomId='menuSous'+numMenu;
		menu1.id=nomId;
		menu1.style.cssText="cursor:default; position:relative; font-size:14px; line-height:14px; text-align:left; font-weight:bold; font-family:Comic Sans MS;height:20; " ;
		
		var imag1=document.createElement("img");
		imag1.src=ico;
		imag1.style.width='10px';
		imag1.style.height='10px';
		menu1.appendChild(imag1);
		
		var tit=document.createTextNode(" "+titre);
		menu1.appendChild(tit);

		//Si le menu possède des sous menus
		if(voirSousMenu)
		{
			//on affiche un menu sans évènement qui fera apparaitre les sous menu
			var imag2=document.createElement("img");
			imag2.style.cssText="position:absolute; right: 5px; top :4px;";
			imag2.src='image/fleche.gif';
			menu1.appendChild(imag2);
		}
		else
		{
			menu1.onclick=function()
			{

				numFond=numMenu;
				createFenetreGrand(); 
				jeSuisLeMenu=true; 
				enleverMenuStart(); 
			};
		};
		
		menu1.onmouseover=function() 
		{
			
			menu1.style.background='#990000';
			if (voirSousMenu)
			{
				//On fait apparaitre un sous menu contenant les éléments de la base de données
				removeAllChild(dG('menuSousStart'));
				addAllChild(dG('menuSousStart'), numMenu);
				barreMontre('menuSousStart');
				positionne('menuSousStart', parseInt(posX('menuStart'))+largeur('menuStart')+'px', parseInt(curY)-15+'px');
			}
			else
			{
				barreCache('menuSousStart');	
			};
		};
		menu1.onmouseout=function() {menu1.style.background='none';};
		return menu1;
};


/* Créé une sous fenetre au Menus */
function createSousMenu()
{
		var menuS=document.createElement("div"); 
		menuS.id='menuSousStart';
		menuS.style.cssText="background-color:blue;cursor:default; border:1px solid #000000; position:absolute; font-size:14px; line-height:14px; text-align:center; font-weight:bold; font-family:Comic Sans MS; " ;
		menuS.style.width='150px';
		
		menuS.onclick=function()
		{
			jeSuisLeMenu=true; 
			enleverMenuStart(); 	
		};
		menuS.onmouseout=function()
		{			
			barreCache('menuSousStart');
		};
		menuS.onmouseover=function()
		{			
			barreMontre('menuSousStart');
		};
		document.body.appendChild(menuS);
};

/* On implémente ce que qu'on veut mettre dans nos sous menus */
function mesSousMenu(numMenu, ico, titre, url)
{
		var menu1=document.createElement("div"); 
		var nomId='menuSous'+numMenu;
		menu1.id=nomId;
		menu1.style.cssText="cursor:default; position:relative; font-size:14px; line-height:14px; text-align:left; font-weight:bold; font-family:Comic Sans MS;height:20; " ;
		
		var imag1=document.createElement("img");
		imag1.src=ico;
		imag1.style.width='10px';
		imag1.style.height='10px';
		menu1.appendChild(imag1);
		
		var tit=document.createTextNode(" "+titre);
		menu1.appendChild(tit);

		//on crée une fenetre contenant le type de fond choisie
		menu1.onclick=function()
		{
			numFond=numMenu; monUrl=url;
			createFenetreGrand(); 
			jeSuisLeMenu=true; 
			enleverMenuStart(); 
		};
		menu1.onmouseover=function() 
		{
			barreMontre('menuSousStart');
			menu1.style.background='#990000';
		};
		menu1.onmouseout=function() {menu1.style.background='none';};
		return menu1;
};

/* Efface le contenu des sous Menus pour les rafraichir */
function removeAllChild(elem)
{ 
	while (elem.hasChildNodes())
	{
	  elem.removeChild(elem.firstChild);
	}
}

/* Ajoute les sous Menu en fonction du type de fond que l'on veut leur appliquer*/
function addAllChild(elem, indic)
{
	elem.innerHTML="Sous Menu<br /><br />";
	var haute=50;
	for(i=1;i<maBDD[indic].length;i++)
		{	
			var page=maBDD[indic][i].split('/@@/');	//réponse texte que l'on casse
			elem.appendChild(mesSousMenu (indic,'image/ico1.gif', page[0], page[1]));
			haute=haute+20;
			elem.style.height=haute+'px';
			
		};
}


