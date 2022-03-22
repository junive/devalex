<body onLoad="javascript:efface('Info1','load');
				efface('Info2','load');
				efface('Info3','load');
				drapeau();
				<? if ($ContEng[145]=="") { ?> changeimages(); <? } else { ?> flash(); <? } ?>"   
				class="body">
				
<div align="center">


<script src="<? echo "$siteUrl . $europellier"; ?>/english/scriptEng/javaScript.js" type="text/javascript">

</script>


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
				<a onMouseOver="reservation.src='<? echo $siteUrl . $europellier; ?>/image/Reservation2.gif'" onMouseOut="reservation.src ='<? echo $siteUrl . $europellier; ?>/image/Reservation.gif'" href="<? echo $siteUrl . $europellier; ?>/english/Montpellier_Hotel_Eng/Reservation.php?nombre=1&amp;chambre=1&amp;nombreEnfantCham0=0&amp;nombreAdulteCham0=0">
				<img alt="" style="border: none;" src="<? echo $siteUrl . $europellier; ?>/image/Reservation.gif" name="reservation"/></a></td>
			</tr>	
			
			<tr><td width="150" height="10" class="espace" ></td></tr>
	 	 
		</table>
	
		<table cellpadding="0" cellspacing="0">						
			 <? include('menus.php');
			 menuClass(0, "index", "Hotel",$numMenu);
			 menuClass(1, "Chambres", "The Rooms",$numMenu); 
			 menuClass(2, "PetitDejeuner", "Breakfast",$numMenu);
			 menuClass(3, "Restaurant", "The Restaurant",$numMenu);
			 menuClass(9, "Horaires", "Open Times",$numMenu);
			 menuClass(4, "Services", "Our Services",$numMenu);
			 menuClass(5, "Plan", "Access",$numMenu);
			 menuClass(6, "Tarifs", "RATES",$numMenu);
			 //menuClass(7, "Promotions", "Promotions",$numMenu) ;
			 menuClass(11, "Proximite", "Proximity",$numMenu);
			 menuClass(8, "Contact", "Contact",$numMenu) ;		 
			 ?> 
		</table>
		
		<table cellpadding="0" cellspacing="0" style="background-color:#990000;">	
			
			<tr>
				<td width="150" height="30" class="espace" >
				<a onMouseOver="reservation2.src='<? echo $siteUrl . $europellier; ?>/image/Reservation2.gif'" onMouseOut="reservation2.src ='<? echo $siteUrl . $europellier; ?>/image/Reservation.gif'" href="<? echo $siteUrl . $europellier; ?>/english/Montpellier_Hotel_Eng/Reservation.php?nombre=1&amp;chambre=1&amp;nombreEnfantCham0=0&amp;nombreAdulteCham0=0">
				<img alt="" style="border: none;" src="<? echo $siteUrl . $europellier; ?>/image/Reservation.gif" name="reservation2"/></a></td>
			</tr>
			
			<tr><td height="35"></td></tr>
			
			<tr><td width="150" height="32" style="background:url(<? echo $siteUrl . $europellier; ?>/image/Deformation.gif)" ></td></tr>
			
			<tr><td height="10"></td></tr>
					
				<?php  if ($numMenu==99) { echo "<tr> <td width=\"150\" height=\"20\"  class=\"MenuSousDessus\"> " ;
				echo "<a  class=\"menusDessus\" href=\"".$siteUrl . $europellier."/english/Montpellier_Hotel_Eng/Visite.php\">Visit Montpellier </a></td></tr> ";}
				else { echo "<tr><td width=\"150\" height=\"20\"  class=\"MenuSous\"> " ;
				echo "<a class=\"menus\" href=\"".$siteUrl . $europellier."/english/Montpellier_Hotel_Eng/Visite.php\">Visit Montpellier </a></td></tr> "; } ?>
			
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
			  				<a href="<? echo $siteUrl . $europellier; ?>/english/Montpellier_Hotel_Eng/Chambres.php" >
							<img alt="" name="phot1" style="border:none; filter:alpha(opacity=100);"  onmouseover="javascript:opaciteMin(this);" onMouseOut="javascript:opaciteMax(this);"   src="<? echo $siteUrl . $europellier; ?>/image/photo1.gif" width="100" height="60" /></a></td>
           				</tr>
            			<tr><td height="18" class="infoPhoto" id='Info1' > Rooms</td></tr>
        			</table>
				</td>
				
        		<td width="5"></td>
				
        		<td>
					<table width="110" cellpadding="0" cellspacing="0">
           				<tr>
               				<td onMouseOut="javascript:efface('Info2',this);" onMouseOver="javascript:affiche('Info2',this)" height="65" class="Photo">
							<a href="<? echo $siteUrl . $europellier; ?>/english/Montpellier_Hotel_Eng/PetitDejeuner.php">
			   				<img alt="" name="phot1" style="border:none; filter:alpha(opacity=100);"  onmouseover="javascript:opaciteMin(this);" onMouseOut="javascript:opaciteMax(this);"   src="<? echo $siteUrl . $europellier; ?>/image/photo2.gif" width="100" height="60" /></a></td>
           				</tr>
            			<tr><td height="18" id='Info2' class="infoPhoto">Breakfast</td></tr>
       				</table>
				</td>
				
        		<td width="5"></td>
				
       			<td>
					<table width="110" cellpadding="0" cellspacing="0">
           				<tr>
              				<td onMouseOut="javascript:efface('Info3',this);" onMouseOver="javascript:affiche('Info3',this)" height="65" class="Photo">
			  				<a href="<? echo $siteUrl . $europellier; ?>/english/Montpellier_Hotel_Eng/Restaurant.php" >
			  				<img alt="" name="phot1" style="border:none; filter:alpha(opacity=100);"  onmouseover="javascript:opaciteMin(this);" onMouseOut="javascript:opaciteMax(this);"   src="<? echo $siteUrl . $europellier; ?>/image/photo3.gif" width="100" height="60" /></a></td>
            			</tr>
            			<tr><td height="18" id='Info3' class="infoPhoto">Restaurant</td></tr>
        			</table>
				</td>
       
	   			<td width="20"></td>
      		</tr>


