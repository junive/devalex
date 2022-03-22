
/******************************** FONCTIONS AJAX : ajax.js   **************************************************/

function getXhr()
{
	var	xhr;
	if(window.XMLHttpRequest) // Firefox et autres
		xhr = new XMLHttpRequest();  //on cr� l'objet
	else if(window.ActiveXObject)// Internet Explorer 
		{   
			  try  //on cr� l'objet
			  {xhr = new ActiveXObject("Msxml2.XMLHTTP");} 
			  catch (ex) 
			  {xhr = new ActiveXObject("Microsoft.XMLHTTP");}
		}
		else 
		{ // XMLHttpRequest non support� par le navigateur 
			alert("Votre navigateur ne supporte pas les objets XMLHTTPRequest..."); 
			xhr = false; 
		} 
	return xhr;
}

//Va rechercher les informations de la base de donn�e
function goChercher()
{
	/*
	var xhr=getXhr(); //on r�cup�re l'objet
	xhr.open("GET","php/info.php",false); // On ouvre le fichier (asynchrone : true)
	xhr.send(null); //Doit on envoyer des parama�tres
	return  xhr.responseText;	//on retourne la r�ponse � la fonction
	*/
}

/* Va rechercher les vid�os sur le serveur de youtube
elem : mot cl� / typo : recherche ou affichage de la page d'accueil*/
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

/* Va ins�rer elm1 et elm2 dans la BDD
no : nom d'utilisateur / typ : Table o� l'on veut ins�rer*/
function goPoster(no, elm1,elm2, typ)
{
	/*
	var xhr=getXhr();
	xhr.open("POST","php/insertion.php",false);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send("nom="+no+"&elem1="+elm1+"&elem2="+elm2+"&type="+typ);
	*/
}

//Va chercher les infos en fonction du nom de l'utilisateur et la table recherch�e
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

