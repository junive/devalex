function getXhr()
{
	var	xhr;
	if(window.XMLHttpRequest) // Firefox et autres
		xhr = new XMLHttpRequest(); 
	else if(window.ActiveXObject)
		{ // Internet Explorer 
		      try 
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

function go_look_page(my_tab) {
	var xhr = getXhr();
	xhr.open("POST","call_page.php", false);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send("my_tab="+my_tab);
	return  xhr.responseText;	
}

function change_body(new_contain) {
	elmt = document.createElement("div");
	elmt.innerHTML = new_contain;
	document.body.replaceChild(elmt, document.getElementById('p_body'));
	elmt.className='p_body';
	elmt.setAttribute("id", "p_body");

}