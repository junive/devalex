// JavaScript Document

			function opaciteMin(obj)
				{
				obj.style.filter='Alpha( Opacity = 60 )';
				obj.style.MozOpacity = '0.6';
				return ;
				}
				
				function opaciteMax(obj)
				{
				obj.style.filter='Alpha( Opacity = 100 )';
				obj.style.MozOpacity = '1';
				return ;
				}	

				function infoPhotoOn(obj)
				{
				obj.style.border='solid';
				obj.style.borderWidth='1px';
				obj.style.borderColor='#990000';
				obj.style.borderRight='none';
			 	obj.style.borderTop='none';
				}
								
				//Fonction d'affichage du texte en dessous des 3 photos				
				function affiche(id,obj)
				{	
				obj.style.borderBottom='none'	;	
				if (document.getElementById)  //Mozilla et nescape 4.7+
				 {document.getElementById(id).style.visibility="visible";
				 infoPhotoOn(document.getElementById(id));} 
				  else if (document.all)  // Internet Explorer
				  {document.all[id].style.visibility="visible";
				  infoPhotoOn(document.all[id]);}
				  else if (document.layers) //Nescape 4.7 et -
				  {document.layers[id].visibility="visible";
				  infoPhotoOn(document.layers[id]);} 
				}

				//fonction d'effacceement du texte en dessous des 3 photos
				function efface(id,obj)
 				{
				if (obj!="load") // permet de ne pas afficher les infos au démarrage;
				{ //On va rajouter la bordure du bas
				obj.style.borderBottom='solid';
				obj.style.borderWidth='1px';
				obj.style.borderColor='#990000';
				}
				if (document.getElementById)
				 {document.getElementById(id).style.visibility="hidden";}
				  else if (document.all) 
				  {document.all[id].style.visibility="hidden";} 
				  else if (document.layers) 
				  {document.layers[id].visibility="hidden";} 
				}	
				
				
				var imgs=new Array();
				imgs[0]="/image/photo1.gif";
				imgs[1]="/image/photo2.gif";
				imgs[2]="/image/photo3.gif";
				imgs[3]="/image/photo4.gif";
				imgs[4]="/image/photo5.gif";
				//imgs[3]="exemples/photos/4.jpg";
				//imgs[4]="exemples/photos/5.jpg";
				//imgs[5]="exemples/photos/6.jpg";
				
				var cpt=0;
				function changeimages()
				{
				document.getElementById("ima").src=imgs[cpt];
				cpt++;
				if(cpt>=imgs.length) cpt=0;
				setTimeout("changeimages()",2000);
				}
				
				var dra1=new Array();
				var dra2=new Array();
				dra1[0]='26';dra2[0]='23';
				dra1[1]='30';dra2[1]='20';
				dra1[2]='26';dra2[2]='23';
				dra1[3]='23';dra2[3]='26';
				dra1[4]='20';dra2[4]='30';
				dra1[5]='23';dra2[5]='26';
				
				var flashy=new Array();var text=new Array();var hautFond=new Array();var basFond=new Array();
				flashy[0]='#990000'; text[0]='#FFFFFF'; hautFond[0]='url('+siteUrl+'/image/fondFlashHaut.gif)' ;  basFond[0]='url('+siteUrl+'/image/fondFlashBas.gif)' ;   
				flashy[1]='#FFFF00'; text[1]='#000066'; hautFond[1]='url('+siteUrl+'/image/fondFlashHaut2.gif)' ; basFond[1]='url('+siteUrl+'/image/fondFlashBas2.gif)' ;
				
				// On va faire ici grossir les drapeaux de manière alternées
				var cptf=0;
				function flash()
				{
				document.getElementById("fondHautFlash").style.background=hautFond[cptf];
				document.getElementById("fondBasFlash").style.background=basFond[cptf];
				document.getElementById("promFlash").style.background=flashy[cptf];
				document.getElementById("promFlash").style.color=text[cptf];
				cptf++;
				if(cptf>=flashy.length) cptf=0;
				setTimeout("flash()",800);
				}
				
				var cptd=0;
				function drapeau()
				{
				document.getElementById("drap1").width=dra1[cptd];
				document.getElementById("drap2").width=dra2[cptd];
				cptd++;
				if(cptd>=dra1.length) cptd=0;
				setTimeout("drapeau()",500);
				}

				
				function popup(url)
				{
				hauteur=Math.round((screen.availHeight-600)/2);
				largeur=Math.round((screen.availWidth-800)/2);
				newpage=open("","popup","width=800,height=600,toolbar=no,scrollbars=no,resizable=no,menubar=yes, top="+hauteur+",left="+largeur+" ");
				newpage.document.write("<!DOCTYPE HTML PUBLIC '-//W3C//DTD HTML 4.01 Transitional//FR'>");
				newpage.document.write("<html><head><title>Plan Quartier</title></head>");
				newpage.document.write("<body><input style='background-color:#330099; color:#FFFFFF'  type='button' value='IMPRIMER' onClick='this.form.txt.select(); window.print()' name='IMPRIMER' >");
				newpage.document.write("--<a onclick='parent.close();'><input style='background-color:#330099; color:#FFFFFF'  type='button' value='FERMER' name='FERMER' ></a>");
				newpage.document.write("<img src='"+url+"' /></body></html>");
				}