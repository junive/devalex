<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"><head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" >
<LINK rel="stylesheet" type="text/css" href="<? echo $siteUrl . $europellier; ?>/script/style.css" >
<title>Hotel Montpellier : Réservation</title>

</head>

<? 
$titre="Réservation";
$numMenu=10;
include($_SERVER['DOCUMENT_ROOT'] . $parentFold . $europellier . "/script/panneauGaucheDessus.php"); 
 ?>




<!-- Debut info du Centre -->
      		

<tr><td style=" background-color:#ffcc00;" align="center" valign="top" colspan="8" width="499" height="449" >

<table>
	<tr><td  width="350" align="center" valign="top">
				<table cellpadding="0" cellspacing="0">
				<tr><td align="left" valign="top" class="general" >
		<span class="sousTitre">Faites votre Réservation :</span><br /><br /><br />
			

					<form  style="height:20px;margin:0;padding:0;"  method="POST" name="formu" action="" >
					<img src="<? echo $siteUrl . $europellier; ?>/image/point2.gif" alt="" />
					Indiquez le jour de votre Arrivée : 

					
					<? 
					$todayJour=date("j");$todayMois=date("n");$todayAnnee = date("Y");
					$Aujourdhui="$todayAnnee-$todayMois-$todayJour";

					//Changement de la date pour la redirection du calendrier...
					$explodeda1 = explode("/", $da1);
					$da1=date("d/m/Y", mktime(0, 0, 0, $explodeda1[1],$explodeda1[0], $explodeda1[2]));
					if ((strtotime($Aujourdhui)  - mktime(0 , 0 , 0 , $explodeda1[1] , $explodeda1[0] , $explodeda1[2])) > 0) $da1=date("d/m/Y");
					?>
					<input  onblur="submit()"   style="margin:0;padding:0;"  type='text' size='10' value="<? echo  "$da1"; ?>"  name='text1'>
				
					</td></tr>
				<tr><td align="right">
				<?	echo "<span class='voirCalendrier'><a  href='Reservation.php?bo=1&da1=$da1&da2=$da2&nombre=$nombre'> >> Voir le Calendrier</a></span>" ; ?>
					</td></tr>


				
				
				<tr><td height="10"></td></tr>
				
				<tr><td align="left" valign="top" class="general">
				
				<img src="<? echo $siteUrl . $europellier; ?>/image/point2.gif" alt="" />
				Indiquez le nombre de nuit :
				
					<select style="margin:0;padding:0;" onchange="submit()" name="nombre">
					<? 
					for ($i=1;$i<21;$i++)
					{	
						if ($i==$nombre) echo "<option value=\"$i\" SELECTED>$i</option>" ;
						else echo "<option  value=\"$i\">$i</option>" ;
					} 
					?>
					</select>
				</td></tr>
				<tr><td  height="10"></td></tr>
				
				<tr><td align="left" valign="top" class="general">
				<img src="<? echo $siteUrl . $europellier; ?>/image/point2.gif" alt="" />
				Soit votre départ est prévue le :
				<? 	$explodeda1 = explode("/", $da1);
					$da2=date("d/m/Y", mktime(0, 0, 0, $explodeda1[1],$explodeda1[0]+$nombre, $explodeda1[2])); ?>
					<input disabled="disabled"  type='text' size='10' value="<? echo  "$da2"; ?>"  name='text2'>
					
				</td></tr>

				
				<tr><td  height="10"></td></tr>
				
				<tr><td align="left" valign="top"  class="general">
				<img src="<? echo $siteUrl . $europellier; ?>/image/point2.gif" alt="" />
				Nombres de chambres :
					<select style="margin:0;padding:0;" onchange="submit()" name="chambre">
					<? 
					for ($i=1;$i<6;$i++)
					{	
						if ($i==$chambre) echo "<option value=\"$i\" SELECTED>$i</option>" ;
						else echo "<option  value=\"$i\">$i</option>" ;
					} 
					?>
					</select>
						
					
				</td></tr>
				
				<tr><td align="left" valign="top" style="color: #990000; font-size:12px">(Jusqu'à 3 Personnes par chambre)</td></tr>
				
				<tr><td  height="10"></td></tr>
				
				<tr><td align="left" valign="top" class="general">
				<img src="<? echo $siteUrl . $europellier; ?>/image/point2.gif" alt="" />
				Nombres de Personnes par chambre :
				</td></tr>
				<tr><td  height="10"></td></tr>
				
				<tr><td align="left" valign="top" class="general">
				<?  $Adulte=explode("/",$nombreAdulteCham);
					$Enfant=explode("/",$nombreEnfantCham);
					
					
					// Variable de vérification (vérifie si Chambre non videet adultesélectionné) 
					$verifAdulte=array();
					$verifEnfant=array();
					
					for ($i=0;$i<$chambre;$i++)
					{ $verifAdulte[$i]=false;
					
					//Initialisation et récupération des variables
					//if ($Adulte[$i]!="") ${"nombreAdulteCham".$i}=$Adulte[$i]; 
					//else ${"nombreAdulteCham".$i}=0; 
					//if ($Enfant[$i]!="") ${"nombreEnfantCham".$i}=$Enfant[$i]; 
					//else ${"nombreEnfantCham".$i}=0;
					
					$temp=$i+1;
				 	echo "<u>Chambre $temp </u> :
					Adultes :<select style='margin:0;padding:0;' onchange='submit()' name='nombreAdulteCham$i'>" ;
					$nbAdulte=0;

						for ($j=3;$j>=${"nombreEnfantCham".$i};$j--)
						{
						if ($nbAdulte==${"nombreAdulteCham".$i}) echo "<option value=\"$nbAdulte\" SELECTED> $nbAdulte</option>" ;
						else echo "<option  value=\"$nbAdulte\">$nbAdulte</option>" ;
						
						$nbAdulte++;
						}
					if (${"nombreAdulteCham".$i}==0) $verifAdulte[$i]=true;
					echo "</select>";
					
					
					
					$nbEnfant=0;
					echo "&nbsp;Enfants (-12ans) :<select style='margin:0;padding:0;' onchange='submit()' name='nombreEnfantCham$i'>" ;
						for ($j=3;$j>=${"nombreAdulteCham".$i};$j--)
						//for ($j=3;$j>=0;$j--)
						{
						
						if ($nbEnfant==${"nombreEnfantCham".$i}) echo "<option value=\"$nbEnfant\" SELECTED> $nbEnfant</option>" ;
						else echo "<option  value=\"$nbEnfant\">$nbEnfant</option>" ;
						$nbEnfant++;
						}
					if (${"nombreEnfantCham".$i}==0) $verifEnfant[$i]=true;
					echo "</select><br>";
					} 
					?>
				
				
				</td></tr>
				
				<tr><td height="40"></td></tr>
				
				<tr><td align="center" valign="top" class="general">
				
					
					<a href="<? echo "$siteUrl . $europellier"; ?>" > <input class="boutons" type='button' onclick="submit()" value="Annuler"  name='annul' id='annul'></a>
					
<?				//echo "<a href='Disponibilite?da1=$da1&da2=$da2&nombre=$nombre&chambre=$chambre&nombreAdulteCham=$nombreAdulteCham&nombreEnfantCham=$nombreEnfantCham' >	<input class='boutons' type='button' onclick='submit();' value='Valider'  name='continuer' id='continuer'><a>" ;
 //if (isset ($_POST['nombreAdulteCham0']) )
 $tt=$nombreAdulteCham0;
//$nombreAdulteCham0= $HTTP_POST_VARS['$nombreAdulteCham0'];  ?>
<script type="text/javascript">

function rafraichir(affiche)
{
var temp1=document.forms['formu'].elements['text1'].value;
var temp2=document.forms['formu'].elements['text2'].value;
var nb=document.forms["formu"].elements['nombre'].options[document.forms["formu"].elements['nombre'].selectedIndex].value ;
//var adu=document.forms["formu"].elements['adulte'].options[document.forms["formu"].elements['adulte'].selectedIndex].value ;
//var enf=document.forms["formu"].elements['enfant'].options[document.forms["formu"].elements['enfant'].selectedIndex].value ;
var cha=document.forms["formu"].elements['chambre'].options[document.forms["formu"].elements['chambre'].selectedIndex].value ;
//var nbAdulteCham=document.forms["formu"].elements['nombreAdulteCham0'].options[document.forms["formu"].elements['nombreAdulteCham0'].selectedIndex].value ;
//var nbEnfantCham=document.forms["formu"].elements['nombreEnfantCham0'].options[document.forms["formu"].elements['nombreEnfantCham0'].selectedIndex].value ;

var valAdulte="";
var valEnfant="";

<? for ($i=0;$i<$chambre;$i++)
{ ?>
//val +=document.chambre.adulte+i.options[document.chambre.adulte+i.selectedIndex].value;
valAdulte +=document.formu.elements['nombreAdulteCham'+<? echo "$i" ; ?>].options[document.formu.elements['nombreAdulteCham'+<? echo "$i" ; ?>].selectedIndex].value+"/";
valEnfant +=document.formu.elements['nombreEnfantCham'+<? echo "$i" ; ?>].options[document.formu.elements['nombreEnfantCham'+<? echo "$i" ; ?>].selectedIndex].value+"/";

<? } ?>


//valAdulte +=document.formu.elements['nombreAdulteCham1'].options[document.formu.elements['nombreAdulteCham1'].selectedIndex].value;
//valEnfant +=document.formu.elements['nombreEnfantCham1'].options[document.formu.elements['nombreEnfantCham1'].selectedIndex].value;}

window.location.href="Reservation.php?bo="+affiche+"&da1="+temp1+"&da2="+temp2+"&nombre="+nb+"&chambre="+cha+"&nombreAdulteCham="+valAdulte+"&nombreEnfantCham="+valEnfant

}


</script>

<?	





$exp1=explode("/",$da1);
$dat1="$exp1[2]-$exp1[1]-$exp1[0]";
$exp2=explode("/",$da2);
$dat2="$exp2[2]-$exp2[1]-$exp2[0]";
				
if ( ((strtotime($dat1) -  strtotime($dat2))  >= 0)||( (strtotime($Aujourdhui) - strtotime($dat1) ) > 0 )||( (strtotime($Aujourdhui) - strtotime($dat2) ) > 0 ) )
  	{	
		$da1=date("d/m/Y");
		//$date2=date("d/m/Y", mktime(0, 0, 0, date("m"),date("d")+1, date("Y") ));
		//$msgDate="Date de réservation invalide.";
		$urlDispo="Reservation.php?da1=$da1&da2=$da2&nombre=$nombre&chambre=$chambre&msgDates=Date de réservation invalides";


	}
	else 
	{
	
		// Si aucun adulte n'est selectionné
		if ( ($nombreAdulteCham0==0||$nombreAdulteCham0=="")&&($nombreAdulteCham1==0||$nombreAdulteCham1=="")&&($nombreAdulteCham2==0||$nombreAdulteCham2=="")&&($nombreAdulteCham3==0||$nombreAdulteCham3=="")&&($nombreAdulteCham4==0||$nombreAdulteCham4=="") )
		//if ( $Adulte[0]==0 )
		{
		$urlDispo="Reservation.php?da1=$da1&da2=$da2&nombre=$nombre&chambre=$chambre&nombreAdulteCham=$nombreAdulteCham&nombreEnfantCham=$nombreEnfantCham&msgChambre=Veuillez sélectionner au minimum 1 adulte";
		//else $urlDispo="Reservation.php?da1=$da1&da2=$da2&nombre=$nombre&adulte=$adulte&enfant=$enfant&chambre=$chambre&msgChambre=Le nombre de $chambre chambres est insuffisant pour acueillir <br> $adulte personnes. Veuillez changer ce nombre<br> (3 personnes par chambres maximum)"; 
		}
		else
		{
			//Si une chambre se trouve être vide
			if ( ( $verifAdulte[0]&&$verifEnfant[0] )||( $verifAdulte[1]&&$verifEnfant[1] )||( $verifAdulte[2]&&$verifEnfant[2] )||( $verifAdulte[3]&&$verifEnfant[3] )||( $verifAdulte[4]&&$verifEnfant[4] )  )// || ($Adulte[2]+$Enfant[2]==0)|| ($Adulte[3]+$Enfant[3]==0)|| ($Adulte[4]+$Enfant[4]==0) )
			{
			$urlDispo="Reservation.php?da1=$da1&da2=$da2&nombre=$nombre&chambre=$chambre&nombreAdulteCham=$nombreAdulteCham&nombreEnfantCham=$nombreEnfantCham&msgChambre=Vous ne pouvez pas avoir de chambre vide";
			}
			else
			{
			$urlDispo="Disponibilite.php?da1=$da1&da2=$da2&nombre=$nombre&chambre=$chambre&nombreAdulteCham=$nombreAdulteCham&nombreEnfantCham=$nombreEnfantCham";
			
			$msgDate="" ;
			}
		}
	} 
echo "<a href='$urlDispo' >	<input class='boutons' type='button' onclick='submit();' value='Valider'  name='continuer' id='continuer'><a>" ;
		
		//if ( $nombreAdulteCham0==0||$nombreAdulteCham0=="") $urlDispo="Reservation.php?da1=$da1&da2=$da2&nombre=$nombre&adulte=$adulte&enfant=$enfant&chambre=$chambre&msgChambre=Veuillez sélectionner au minimum 1 adulte";
		//else $urlDispo="Reservation.php?da1=$da1&da2=$da2&nombre=$nombre&adulte=$adulte&enfant=$enfant&chambre=$chambre&msgChambre=Le nombre de $chambre chambres est insuffisant pour acueillir <br> $adulte personnes. Veuillez changer ce nombre<br> (3 personnes par chambres maximum)"; 
		
	
	?>
					
				
					</form>	
					
					
				</td>
				<tr><td  height="10"></td></tr>
				<tr><td style="color: #990000;" ><? echo "$msgDates";echo "$msgChambre"; ?></td></tr>
				</tr>
			</table>

	<td align="right" width="110"  valign="top">
			<table>
				<tr><td height="60"></td></tr>
				<tr><td class="cadrePhoto" align="top">	
					<?
					if ($bo==1)
					{
			 		include($_SERVER['DOCUMENT_ROOT'] . $parentFold . $europellier . "/Montpellier_Hotel/calendrier.php"); 
					} 
					?>
				</td></tr>
			</table>
	</td></tr>

	
	
</table>
			</td>
		</tr>
<!-- Fin info du centre -->   		
	

<? include($_SERVER['DOCUMENT_ROOT']  . $parentFold . $europellier . '/script/panneauDroite.php'); ?>

