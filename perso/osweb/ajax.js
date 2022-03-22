
/******************************** FONCTIONS AJAX : ajax.js   **************************************************/

function getXhr()
{
	var	xhr;
	if(window.XMLHttpRequest) // Firefox et autres
		xhr = new XMLHttpRequest();  //on cré l'objet
	else if(window.ActiveXObject)// Internet Explorer 
		{   
			  try  //on cré l'objet
			  {xhr = new ActiveXObject("Msxml2.XMLHTTP");} 
			  catch (ex) 
			  {xhr = new ActiveXObject("Microsoft.XMLHTTP");}
		}
		else 
		{ // XMLHttpRequest non supporté par le navigateur 
			alert("Votre navigateur ne supporte pas les objets XMLHTTPRequest..."); 
			xhr = false; 
		} 
	return xhr;
}

//Va rechercher les informations de la base de donnée
function goChercher()
{
	/*
	var xhr=getXhr(); //on récupère l'objet
	xhr.open("GET","php/info.php",false); // On ouvre le fichier (asynchrone : true)
	xhr.send(null); //Doit on envoyer des paramaètres
	return  xhr.responseText;	//on retourne la réponse à la fonction
	*/
}

/* Va rechercher les vidéos sur le serveur de youtube
elem : mot clé / typo : recherche ou affichage de la page d'accueil*/
function goRechercheVid(elem, typo, appel)
{
	var xhr=getXhr();
	xhr.open("POST","search/index.php",true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send("elmt="+elem+"&type="+typo);
	
		xhr.onreadystatechange = function(event) {
			
			if(xhr.readyState == 4) {
				appel( xhr.responseXML );
				console.log(this.responseXML);
			}
		}
	
	


}

/* Va insérer elm1 et elm2 dans la BDD
no : nom d'utilisateur / typ : Table où l'on veut insérer*/
function goPoster(no, elm1,elm2, typ)
{
	/*
	var xhr=getXhr();
	xhr.open("POST","php/insertion.php",false);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send("nom="+no+"&elem1="+elm1+"&elem2="+elm2+"&type="+typ);
	*/
}

//Va chercher les infos en fonction du nom de l'utilisateur et la table recherchée
function goTrouver(idCh, tab )
{
	/*
	var xhr=getXhr();
	xhr.open("POST","php/info.php",false);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send("idCherche="+idCh+"&table="+tab);
 	if(xhr.readyState == 4)  return  xhr.responseText;	
	*/
}

//Va Modifier les infos en fonction du nom de l'utilisateur et le background
function goModifier(idCh, backGr)
{
	/*
	var xhr=getXhr();
	xhr.open("POST","php/update.php",true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send("idCherche="+idCh+"&backG="+backGr);
	*/
}

