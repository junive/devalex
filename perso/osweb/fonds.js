
/******************************** LES OBJETS DU FONDS : fonds.js   **************************************************/

/*  Formumlaire de saisie des liens vers notre base*/
function selectFondRecherche() 
{
		largeurFen=400;hauteurFen=400;
		this.cFond=document.createElement("form"); 
		this.cFond.id='maRecherche';
		this.cFond.action="";
		this.cFond.method="post";
		this.cFond.setAttribute("titre", "Recherche de vidéo");
		this.cFond.style.cssText="position:relative;display : inline;cursor:default; margin:6px; font-size:14px; line-height:14px; text-align:left; font-weight:bold; font-family:Comic Sans MS; width:500px;height:500px;" ;
		
		//Mot clés que l'on va rechercher dans le serveur de Youtube
		this.cFond.innerHTML="<br />Saississez votre recherche : <br />";
		var titrR=document.createElement("input");
		titrR.type="text";
		titrR.id='maRechercheVid';
		titrR.setAttribute("maxlength",'39');
		titrR.setAttribute("size",'35');
		this.cFond.appendChild(titrR);

		var self = this.cFond;
		
		var ajout = function(docXML) {
			// on va vider le fond puis afficher notre recherche
			self.innerHTML+="<input type='button' id='boutRecherche' value='Chercher' onclick='enleverRecherche(cFond, docXML);docXML=goRechercheVid(dG(\"maRechercheVid\").value, 1);ajouterRecherche(cFond, docXML);'><br /><br />";		
			ajouterRecherche(self, docXML) ;	
			
		}
		//On Récupère les vidéos de la page d'accueil
		goRechercheVid( "toto", 0, ajout ) ;
		
		return this.cFond;
};

/* Récupère tous les élément du fichiers Xml et les ajoute au fond */
function ajouterRecherche(fond, docu)
{
		for(i=0;i<docu.getElementsByTagName("videos").length;i++)
		{
			var leSrc=docu.getElementsByTagName("image")[i].childNodes[0].data;
			var lurl=docu.getElementsByTagName("url")[i].childNodes[0].data ;
			var leTitre=docu.getElementsByTagName("titre")[i].childNodes[0].data;
			fond.appendChild(afficheRecherche(lurl, leSrc, leTitre) );
		};
	
};

/* Vide le fond et tous ces éléments */
function enleverRecherche(fond, docu)
{
		for(i=0;i<docu.getElementsByTagName("videos").length;i++)
		{
			fond.removeChild(fond.lastChild);	
		};
};

/* Permet d'afficher les images de notre recherche avec son titre */
function afficheRecherche(lurl, leSrc, leTitre)
{

		//Conteneur	
		var monSDiv=document.createElement("div");
		monSDiv.id="resultatRec";
		monSDiv.style.position = 'relative';
		monSDiv.style.display = 'inline';
		monSDiv.style.overflow = 'hidden';
		monSDiv.style.cursor='move';
		monSDiv.style.width='150px';
		monSDiv.style.height='250px';

				//Titre de la vidéo
				var titre=document.createElement("div");
				titre.style.position='absolute';
				titre.style.display = 'inline';
				titre.style.bottom = '0px';
				titre.style.left = '10px';
				titre.style.right = '4px';
				titre.style.width = '150px';
				titre.style.height = '15px';
				//si le titre est trop long
				if (leTitre.length>=20) leTitre=leTitre.substring(0,20);
				titre.innerHTML=leTitre;
				
				//Image représentant la vidéos
				var monImage=document.createElement("img"); 
				monImage.style.position='relative';
				monImage.style.display = 'inline';
				monImage.id="monIma";
				monImage.style.margin='10px';
				monImage.style.cursor='pointer';
				monImage.src=leSrc;
				
				// Au clic on va ouvrir une fenetre de type Flash, contenant la vidéo à lire
				monImage.onclick=function()
				{
					monUrl=transformUrl( lurl );
					numFond=2;
					createFenetreGrand(); 	
					
				};
				monSDiv.appendChild(titre);
			monSDiv.appendChild(monImage);
		
		return monSDiv;	
};

/* Permet de transformer les url de flux de Youtube pour les rendre lisible */
function transformUrl(url)
{	
	var debut = url.indexOf( "=" );
	
	/* Il n'existe pas */
	if( debut == -1 )	return null;

	/* On recherche la fin de l'url */
	var fin = url.length;
	if( fin == -1 ) return null;

	/* On renvoie la valeur en la déséchappant */
	return unescape("http://www.youtube.com/v/"+url.substring( debut+1, fin ) );
};

/*  Formumlaire de saisie des liens vers notre base*/
function selectFondInsertion() 
{
		//Conteneur
		this.iFond=document.createElement("form"); 
		this.iFond.id='monInsertion';
		this.iFond.action="";
		this.iFond.method="post";
		this.iFond.setAttribute("titre", "Insertion de lien");
		this.iFond.style.cssText="position:relative;cursor:default;  font-size:14px; line-height:14px; text-align:center; font-weight:bold; font-family:Comic Sans MS; " ;
		
		//Titre à insérer pour nos sous Menus
		this.iFond.innerHTML="<br />Saississez le titre du lien : <br />";
		var titr=document.createElement("input");
		titr.type="text";
		titr.id='monTitreLien';
		titr.setAttribute("maxlength",'39');
		titr.setAttribute("size",'35');
		this.iFond.appendChild(titr);
		
		// Le lien a insérer pour la lecture des flux
		this.iFond.innerHTML+="<br /><br />Saississez le lien : <br />";
		var lien=document.createElement("input");
		lien.type="text";
		lien.id='monLien';
		lien.setAttribute("maxlength",'199');
		lien.setAttribute("size",'50');
		this.iFond.appendChild(lien);	
		
		//Type d'objet que l'on veut lire
		this.iFond.innerHTML+="<br /><br /><input type='radio' name='monBoutRadio'  onclick='changeValue(2)' checked='checked'>Vidéo<input type='radio' onclick='changeValue(3)' name='monBoutRadio'>Page<input onclick='changeValue(4)' type='radio' name='monBoutRadio' >Radio";
		
		var valid=document.createElement("input");
		valid.type="button";
		valid.id='monSub';
		valid.value='Valider';
		this.iFond.innerHTML+="<br /><br />";
		this.iFond.appendChild(valid);
		
		//Au clic, on va insérer les informations 
		valid.onclick=function () 
		{
			goPoster(getCookie('myCookOsLog'),dG('monLien').value,dG('monTitreLien').value, selectValue);
			alert("Votre lien a été ajouté");
			
			//On rafraichie le sous Menu pour afficher le lien
			removeAllChild(dG('menuSousStart')); 
			getInfoBase(selectValue, selectValue);
			addAllChild(dG('menuSousStart'), selectValue);
		
		}; 

		return this.iFond;
		
		
};

/* Permet de switcher le numéro de la base pour les boutons radios */
function changeValue(nb)
{
	selectValue=nb;
};

/* Fond qui permet de créer une session*/
function selectFondSession() 
{
		//Conteneur
		this.sFond=document.createElement("form"); 
		this.sFond.id='maSession';
		this.sFond.action="";
		this.sFond.method="post";
		this.sFond.setAttribute("titre", "Votre Session");
		this.sFond.style.cssText="position:relative;cursor:default;  font-size:14px; line-height:14px; text-align:center; font-weight:bold; font-family:Comic Sans MS; " ;
		
		// Nom d'utilisateur
		this.sFond.innerHTML="Inscription automatique <br /><br />Votre login : <br />";
		var login=document.createElement("input");
		login.type="text";
		login.id='monLogin';
		login.setAttribute("maxlength",'49');
		this.sFond.appendChild(login);
		
		//Son password
		this.sFond.innerHTML+="<br /><br />Votre password : <br />";
		var pass=document.createElement("input");
		pass.type="password";
		pass.id='monPass';
		pass.setAttribute("maxlength",'49');
		this.sFond.appendChild(pass);
		
		//Son Email
		this.sFond.innerHTML+="<br /><br />Votre E-mail: <br />";	
		var mail=document.createElement("input");
		mail.type="text";
		mail.id='monMail';
		mail.setAttribute("maxlength",'69');
		this.sFond.appendChild(mail);
		var valider=document.createElement("input");
		valider.type="button";
		valider.id='monSubmit';
		valider.value='Valider';
		this.sFond.innerHTML+="<br /><br />";
		this.sFond.appendChild(valider);
		
		valider.onclick=function () 
		{
		//on récupère le login s'il existe	
		var infoL=goTrouver( dG('monLogin').value, 0) ; 
		var infoLog= infoL.split('/'); 
		
			//Si les champs sont vides
			if(dG('monLogin').value=="" || dG('monPass').value=="" || dG('monMail').value=="")
			{
				alert("Veuillez remplir tous les champs");
			}
			else 
			{
				//On vérifie que le login n'existe pas déjà
				if ( (infoLog[1]==dG('monLogin').value) &&  (infoLog[2]!=dG('monPass').value) )
				{
					alert("Ce login existe déjà, ou vous n'avez pas saisie le bon mot de passe");
				}
				else
				{
					//on crée une session
					createSession();
				};
			};
		sFond.submit();
		}; 

		return this.sFond;		
};


/* Conteneur d'image */
function monImage(monTitre, monSrc, larg, haut)
{
	var monElement=document.createElement("img"); 
	monElement.id="monImage"+monSrc;
	monElement.cssText=" font-weight:bold; font-family:Comic Sans MS; " ;
	monElement.style.margin='10px';
	monElement.style.cursor='pointer';
	monElement.setAttribute("titre", monTitre);
	monElement.src=monSrc;
	
	//Permet d'aller modifier l'interface de l'utilisateur
	monElement.onclick=function()
	{	
		goModifier(getCookie('myCookOsLog'), monSrc) ;
		document.body.background=monSrc;	
	};
	monElement.style.width=larg;
	monElement.style.height=haut;
	return monElement;
	
};



/* Fond qui va contenir les images avec leur propriété */
function selectFondEcran()
{	
		this.eFond=document.createElement("div"); 
		this.eFond.id='monFondEcran';
		this.eFond.setAttribute("titre", "Selection de mon Fond d'écran");
		this.eFond.style.cssText="position:absolute;cursor:default;  font-size:14px; line-height:14px; text-align:left; font-weight:bold; font-family:Comic Sans MS; " ;
		this.eFond.appendChild(monImage('mon Image 3','image/Co3.jpg', '100px', '80px'));
		this.eFond.appendChild(monImage('mon Image 4','image/Co4.jpg', '100px', '80px'));
		this.eFond.appendChild(monImage('mon Image 5','image/Co5.jpg', '100px', '80px'));
		this.eFond.appendChild(monImage('mon Image 6','image/Co6.jpg', '100px', '80px'));
		this.eFond.appendChild(monImage('mon Image 7','image/Co7.jpg', '100px', '80px'));	
		return this.eFond;
};



/* Fond des sites externe */ 
function selectPage(url)
{	
		this.pFond=document.createElement("iframe"); 
		this.pFond.id='monIFrame';
		this.pFond.setAttribute("titre", "Ma page externe");
		this.pFond.style.cssText="position:relative;cursor:default;  font-size:14px; line-height:14px; text-align:left; font-weight:bold; font-family:Comic Sans MS; " ;	
		this.pFond.src=url;	
		return this.pFond;
};

/* Objet de type radio : lecteur windows Media Player */
function selectRadio(url)
{
		this.rFond=document.createElement("video");
		this.rFond.setAttribute("titre", "Ma Radio");
		this.rFond.style.cssText="background:url(image/nova.png) center no-repeat; position:relative; text-align:center; cursor:default; margin: 6px; font-size:14px; line-height:14px;width:300px; height:300px ";
		this.rFond.setAttribute("controls", "");
		this.rFond.setAttribute("autoplay", "");
		//this.rFond.setAttribute("SRC", url );
		
		this.source = document.createElement("source");
		this.source.src = url;
		this.rFond.appendChild(this.source);
		//this.rFond.setAttribute("autostart", 0);
		//this.rFond.setAttribute("showcontrols", 1);
		//this.rFond.setAttribute("autosize", 0);
		//this.rFond.setAttribute("constrols volume",1); 
		return this.rFond;
};

/* Objet de type flash */
function selectVideo(url)
{		
		this.vFond=document.createElement("iframe");
		this.vFond.id='maVideo';
		this.vFond.setAttribute("titre", "Mes vidéos");
		this.vFond.style.cssText="position:relative;cursor:default; margin: 6px; font-size:14px; line-height:14px; text-align:center; font-weight:bold; font-family:Comic Sans MS; width:300px; height:300px" ;	
		//this.vFond.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" ;
		
		 this.vFond.setAttribute("src", url );
		 this.vFond.setAttribute("frameborder", 0 );
		//if(document.all) this.vFond.setAttribute("movie", url );
		//else this.vFond.setAttribute("data", url );
		//this.vFond.setAttribute("wmode", "transparent");
		//this.vFond.setAttribute("type", "application/x-shockwave-flash");
		//this.vFond.setAttribute("pluginspage", "http://www.macromedia.com/go/getflashplayer");
		this.vFond.setAttribute("menu","true");
		//this.vFond.setAttribute("base","http://www.wideo.fr");
		return this.vFond;
};