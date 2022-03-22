<body onLoad="javascript:efface('Info1','load');
				efface('Info2','load');
				efface('Info3','load');
				drapeau();
				<? if ($nomFlash[0]=="") { ?> changeimages(); <? } else { ?> flash(); <? } ?>"  
				class="body">
				
<div align="center">


<script src="<? echo $siteUrl ; ?>/setting.js" type="text/javascript"></script>
<script src="<? echo $siteUrl . $europellier; ?>/script/javaScript.js" type="text/javascript">

</script>


<div style='border:1px solid grey; padding:5px;margin:5px;color: #586069;'>
<a href="<? echo $siteUrl . $europellier; ?>/memo/">Interface de Gestion<a/><br/> login : <i>test</i> - mot de passe : <i>test</i>
</div>


<table cellpadding="0" cellspacing="0" >
<tr>
	<td align="left" colspan="3">	
		<table cellpadding="0" cellspacing="0" class="baniere" >
			<tr>
				<td width="800" height="50" ></td>
			</tr>
		</table>	
	</td>
</tr>

<tr>
	<td width="151" valign="top">
		<table cellpadding="0" cellspacing="0">			
			
			<tr><td width="150" height="5" class="espace"></td></tr>
			
			<tr>
				<td width="150" height="30" class="reserveHaut">
				<a onMouseOver="reservation.src='<? echo $siteUrl . $europellier; ?>/image/Reservation2.gif'" onMouseOut="reservation.src ='<? echo $siteUrl . $europellier; ?>/image/Reservation.gif'" href="<? echo $siteUrl . $europellier; ?>/Montpellier_Hotel/Reservation.php?nombre=1&amp;chambre=1&amp;nombreEnfantCham0=0&amp;nombreAdulteCham0=0">
				<img alt="" style="border: none;" src="<? echo $siteUrl . $europellier; ?>/image/Reservation.gif" name="reservation"/></a></td>
			</tr>	
			
			<tr><td width="150" height="10" class="espace" ></td></tr>
	 	 
		</table>
	
		<table cellpadding="0" cellspacing="0">						
			 <? 
			 //On insère nos menus
			 include('menus.php');
			 menuClass(0, "index", "L'Hôtel",$numMenu);
			 menuClass(1, "Chambres", "Les Chambres",$numMenu); 
			 menuClass(2, "PetitDejeuner", "Petit Déjeuner",$numMenu);
			 menuClass(3, "Restaurant", "Le Restaurant",$numMenu);
			 menuClass(9, "Horaires", "Les Horaires",$numMenu);
			 menuClass(4, "Services", "Nos Services",$numMenu);
			 menuClass(5, "Plan", "Plan D'accès",$numMenu);
			 menuClass(6, "Tarifs", "TARIFS",$numMenu);
			 //menuClass(7, "Promotions", "Promotions",$numMenu) ;
			 menuClass(11, "Proximite", "A proximité",$numMenu);
			 menuClass(8, "Contact", "Contactez Nous",$numMenu) ;		 
			 ?> 
		</table>
		
		<table cellpadding="0" cellspacing="0" style="background-color:#990000;">	
			
			<tr>
				<td width="150" height="30" class="espace" >
				<a onMouseOver="reservation2.src='<? echo $siteUrl . $europellier; ?>/image/Reservation2.gif'" onMouseOut="reservation2.src ='<? echo $siteUrl . $europellier; ?>/image/Reservation.gif'" href="<? echo $siteUrl . $europellier; ?>/Montpellier_Hotel/Reservation.php?nombre=1&amp;chambre=1&amp;nombreEnfantCham0=0&amp;nombreAdulteCham0=0">
				<img alt="" style="border: none;" src="<? echo $siteUrl . $europellier; ?>/image/Reservation.gif" name="reservation2"/></a></td>
			</tr>
			
			<tr><td height="35"></td></tr>
			
			<tr><td width="150" height="32" style="background:url(<? echo $siteUrl . $europellier; ?>/image/Deformation.gif)" ></td></tr>
			
			<tr><td height="10"></td></tr>
					
				<?php  if ($numMenu==99) { echo "<tr> <td width=\"150\" height=\"20\"  class=\"MenuSousDessus\"> " ;
				echo "<a  class=\"menusDessus\" href=\"".$siteUrl . $europellier."/Montpellier_Hotel/Visite.php\">Visitez Montpellier </a></td></tr> ";}
				else { echo "<tr><td width=\"150\" height=\"20\"  class=\"MenuSous\"> " ;
				echo "<a class=\"menus\" href=\"".$siteUrl . $europellier."/Montpellier_Hotel/Visite.php\">Visitez Montpellier </a></td></tr> "; } ?>
			
				<?php /* if ($numMenu==100) { echo " <tr> <td width=\"150\" height=\"20\"  class=\"MenuSousDessus\"> " ;
				echo "<a class=\"menusDessus\" href=\"".$siteUrl . $europellier."/Montpellier_Hotel/Proximite.php\">A Proximité</a></td> </tr>";}
				else { echo "<tr><td width=\"150\" height=\"20\"  class=\"MenuSous\"> " ; 
				echo "<a class=\"menus\" href=\"".$siteUrl . $europellier."/Montpellier_Hotel/Proximite.php\">A Proximité</a></td> </tr> "; }  */ ?>
			
			<tr><td width="150" height="32" style="background:url(<? echo $siteUrl . $europellier; ?>/image/Deformation.gif)" ></td></tr>
			
			<tr><td width="150" height="95"></td></tr>
			
			<tr><td width="150" height="10" style="background:url(<? echo $siteUrl . $europellier; ?>/image/basMenu.gif); background-repeat:no-repeat; "></td></tr>
			
		
		</table>	
	</td>

	<td align="left" valign="top">
		<table  cellpadding="0" cellspacing="0" style=" background-color:#ffcc00;">
      		<tr>
        		<td>
					<table width="120" cellpadding="0" cellspacing="0">
						<tr><td height="65" class="Titre"  align="center" ><? echo "$titre"; ?></td></tr>
						<tr><td height="18"></td></tr>
       				</table>
				</td>
      			
				<td width="5"></td>
       
	   			<td>
				 	<table width="110"cellpadding="0" cellspacing="0">
            			<tr>
              				<td onMouseOut="javascript:efface('Info1',this);" onMouseOver="javascript:affiche('Info1',this)" height="65" class="Photo" >
			  				<a href="<? echo $siteUrl . $europellier; ?>/Montpellier_Hotel/Chambres.php" >
							<img alt="" name="phot1" style="border:none; filter:alpha(opacity=100);"  onmouseover="javascript:opaciteMin(this);" onMouseOut="javascript:opaciteMax(this);"   src="<? echo $siteUrl . $europellier; ?>/image/photo1.gif" width="100" height="60" /></a></td>
           				</tr>
            			<tr><td height="18" class="infoPhoto" id='Info1' > Les Chambres</td></tr>
        			</table>
				</td>
				
        		<td width="5"></td>
				
        		<td>
					<table width="110" cellpadding="0" cellspacing="0">
           				<tr>
               				<td onMouseOut="javascript:efface('Info2',this);" onMouseOver="javascript:affiche('Info2',this)" height="65" class="Photo">
							<a href="<? echo $siteUrl . $europellier; ?>/Montpellier_Hotel/PetitDejeuner.php">
			   				<img alt="" name="phot1" style="border:none; filter:alpha(opacity=100);"  onmouseover="javascript:opaciteMin(this);" onMouseOut="javascript:opaciteMax(this);"   src="<? echo $siteUrl . $europellier; ?>/image/photo2.gif" width="100" height="60" /></a></td>
           				</tr>
            			<tr><td height="18" id='Info2' class="infoPhoto">Petit Déjeuner</td></tr>
       				</table>
				</td>
				
        		<td width="5"></td>
				
       			<td>
					<table width="110" cellpadding="0" cellspacing="0">
           				<tr>
              				<td onMouseOut="javascript:efface('Info3',this);" onMouseOver="javascript:affiche('Info3',this)" height="65" class="Photo">
			  				<a href="<? echo $siteUrl . $europellier; ?>/Montpellier_Hotel/Restaurant.php" >
			  				<img alt="" name="phot1" style="border:none; filter:alpha(opacity=100);"  onmouseover="javascript:opaciteMin(this);" onMouseOut="javascript:opaciteMax(this);"   src="<? echo $siteUrl . $europellier; ?>/image/photo3.gif" width="100" height="60" /></a></td>
            			</tr>
            			<tr><td height="18" id='Info3' class="infoPhoto">Le Restaurant</td></tr>
        			</table>
				</td>
       
	   			<td width="20"></td>
      		</tr>


