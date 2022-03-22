<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"><head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" >

<? include("../../memo/hotel/infos.php"); ?>
<meta name="description" lang="fr" content="<? echo "$ContMeta[0]" ; ?>" >
<meta name="keywords" lang="fr" content="<? echo "$ContMeta[1]"; ?>" >
<meta name="category" content="<? echo "$ContMeta[3]"; ?>" >
<meta name="distribution" content="global" >
<meta name="robot" content="all" >
<meta name="revisit-after" content="1 day" >
<meta name="author" lang="fr" content="Alexandre GORISSE" >
<meta name="copyright" content="montpellier-hotel" >
<meta name="identifier-url" content="http://www.euromedecine.com" >

<LINK rel="stylesheet" type="text/css" href="<? echo $siteUrl . $europellier; ?>/script/style.css" >
<title>Hotel Du Parc Euromedecine de Montpellier : Réservation</title>

</head>

<? 
$titre="Réservation";
$numMenu=10;
include( $_SERVER['DOCUMENT_ROOT']  . $parentFold . $europellier . "/english/scriptEng/panneauGaucheDessus.php");
 ?>

<!-- Debut info du Centre -->
      		
<tr><td style=" background-color:#ffcc00;" align="center" valign="top" colspan="8" width="499" height="449" >

<table>
	<tr><td  width="350" align="center" valign="top">
				<table cellpadding="0" cellspacing="0">
				<tr><td align="left" valign="top" class="general" >
				<span class="sousTitre">Faites votre Réservation :</span>
				<br /><br /><br />

					<form  style="height:20px;margin:0;padding:0;"  method="POST" name="formu" action="javascript:rafraichir(0);" >
					<img src="<? echo $siteUrl . $europellier; ?>/image/point2.gif" alt="" />
					Indiquez le jour de votre Arrivée : 

					<? 
					// On récupère la date d'aujourd'hui
					$todayJour=date("j");$todayMois=date("n");$todayAnnee = date("Y");
					$Aujourdhui="$todayAnnee-$todayMois-$todayJour";

					// Changement de la date pour la redirection du calendrier...
					$explodeda1 = explode("/", $da1);
					$da1=date("d/m/Y", mktime(0, 0, 0, $explodeda1[1],$explodeda1[0], $explodeda1[2]));
					
					// On compare la date d'aujourd'hui avec la date entrée.
					if ((strtotime($Aujourdhui)  - mktime(0 , 0 , 0 , $explodeda1[1] , $explodeda1[0] , $explodeda1[2])) > 0) $da1=date("d/m/Y");
					?>
				<input  onblur="submit()"   style="margin:0;padding:0;"  type='text' size='10' value="<? echo  "$da1"; ?>"  name='text1'>
				
				</td></tr>
				<tr><td align="right">
				<span class="voirCalendrier"><a  href="javascript:rafraichir(1)">
				>> Voir le Calendrier</a></span>
				</td></tr>


				<tr><td height="10"></td></tr>
				
				<tr><td align="left" valign="top" class="general">
				
				<img src="<? echo $siteUrl . $europellier; ?>/image/point2.gif" alt="" />
				Indiquez le nombre de nuit :
				
				<select style="margin:0;padding:0;" onchange="submit()" name="nombre">
					<? 
					// On affiche le nombre de nuit
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
				<? 	
					//On affiche la date de départ + $nombre nuits
					$explodeda1 = explode("/", $da1);
					$da2=date("d/m/Y", mktime(0, 0, 0, $explodeda1[1],$explodeda1[0]+$nombre, $explodeda1[2])); 
				?>
				<input disabled="disabled"  type='text' size='10' value="<? echo  "$da2"; ?>"  name='text2'>
					
				</td></tr>

				<tr><td  height="10"></td></tr>
				
				<tr><td align="left" valign="top"  class="general">
				<img src="<? echo $siteUrl . $europellier; ?>/image/point2.gif" alt="" />
				Nombres de chambres :
				<select style="margin:0;padding:0;" onchange="submit()" name="chambre">
					<? 
					// On va afficher le nombre de chambre Disponible
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
				<?  
					$Adulte=explode("/",$nombreAdulteCham);
					$Enfant=explode("/",$nombreEnfantCham);
					
					// Variable de vérification (vérifie si Chambre non vide et adultes électionné) 
					$verifAdulte=array();
					$verifEnfant=array();

					for ($i=0;$i<$chambre;$i++)
					{ $verifAdulte[$i]=false;
					
					//Initialisation et récupération des variables
					if ($Adulte[$i]!="") ${"nombreAdulteCham".$i}=$Adulte[$i]; 
						else ${"nombreAdulteCham".$i}=0; 
					if ($Enfant[$i]!="") ${"nombreEnfantCham".$i}=$Enfant[$i]; 
						else ${"nombreEnfantCham".$i}=0;
					
					$temp=$i+1;
				 	echo "<u>Room $temp </u> : Adultes :<select style='margin:0;padding:0;' onchange='submit()' name='nombreAdulteCham$i'>" ;
					$nbAdulte=0;
						
						// On affiche  le nombre d'enfants par chambre 
						for ($j=3;$j>=${"nombreEnfantCham".$i};$j--)
						{
							if ($nbAdulte==${"nombreAdulteCham".$i}) echo "<option value=\"$nbAdulte\" SELECTED> $nbAdulte</option>" ;
							else echo "<option  value=\"$nbAdulte\">$nbAdulte</option>" ;
							$nbAdulte++;
						}
					// Si aucun adulte n'est sélectionné
					if (${"nombreAdulteCham".$i}==0) $verifAdulte[$i]=true; 
					echo "</select>";
					
					$nbEnfant=0;
					echo "&nbsp;Enfants (-12ans) :<select style='margin:0;padding:0;' onchange='submit()' name='nombreEnfantCham$i'>" ;
						
						// On affiche le nombre d'adultes par chambre 
						for ($j=3;$j>=${"nombreAdulteCham".$i};$j--)
						{
							if ($nbEnfant==${"nombreEnfantCham".$i}) echo "<option value=\"$nbEnfant\" SELECTED> $nbEnfant</option>" ;
							else echo "<option  value=\"$nbEnfant\">$nbEnfant</option>" ;
							$nbEnfant++;
						}
					// Si aucun enfant n'est sélectionné
					if (${"nombreEnfantCham".$i}==0) $verifEnfant[$i]=true;
					echo "</select><br>";
					
					} 
					?>
							
				</td></tr>
				
				<tr><td height="40"></td></tr>
				
				<tr><td align="center" valign="top" class="general">
				<input class="boutons" type='button' onclick="submit();javascript:annuler()" value="Annuler"  name='annul' id='annul'>
				<input class="boutons" type='button' onclick="submit();javascript:suite()" value="Valider"  name='continuer' id='continuer'>

<script type="text/javascript">
// Fonction qui va nous permettre de rafraichir la page et afficher les éléments nouveaux.
function rafraichir(affiche)
{
var temp1=document.forms['formu'].elements['text1'].value;
var temp2=document.forms['formu'].elements['text2'].value;
var nb=document.forms["formu"].elements['nombre'].options[document.forms["formu"].elements['nombre'].selectedIndex].value ;
var cha=document.forms["formu"].elements['chambre'].options[document.forms["formu"].elements['chambre'].selectedIndex].value ;
var valAdulte="";
var valEnfant="";

<? for ($i=0;$i<$chambre;$i++){ ?>
valAdulte +=document.formu.elements['nombreAdulteCham'+<? echo "$i" ; ?>].options[document.formu.elements['nombreAdulteCham'+<? echo "$i" ; ?>].selectedIndex].value+"/";
valEnfant +=document.formu.elements['nombreEnfantCham'+<? echo "$i" ; ?>].options[document.formu.elements['nombreEnfantCham'+<? echo "$i" ; ?>].selectedIndex].value+"/";
<? } ?>

window.location.href="Reservation.php?bo="+affiche+"&da1="+temp1+"&da2="+temp2+"&nombre="+nb+"&chambre="+cha+"&nombreAdulteCham="+valAdulte+"&nombreEnfantCham="+valEnfant
}

</script>

<?	

//On récupère la date d'arrivée et de départ, et on les reformate
$exp1=explode("/",$da1);
$dat1="$exp1[2]-$exp1[1]-$exp1[0]";
$exp2=explode("/",$da2);
$dat2="$exp2[2]-$exp2[1]-$exp2[0]";

	// si la date d'arrivée est supérieur à la date de départ ou incorrect.				
	if ( ((strtotime($dat1) -  strtotime($dat2))  >= 0)||( (strtotime($Aujourdhui) - strtotime($dat1) ) > 0 )||( (strtotime($Aujourdhui) - strtotime($dat2) ) > 0 ) )
  	{	
		$da1=date("d/m/Y");
		$urlDispo="Reservation.php?da1=$da1&da2=$da2&nombre=$nombre&adulte=$adulte&enfant=$enfant&chambre=$chambre&msgDates=Date de réservation invalides";
	}
	else 
	{
		// Si aucun adulte n'est selectionné
		if ( ($nombreAdulteCham0==0||$nombreAdulteCham0=="")&&($nombreAdulteCham1==0||$nombreAdulteCham1=="")&&($nombreAdulteCham2==0||$nombreAdulteCham2=="")&&($nombreAdulteCham3==0||$nombreAdulteCham3=="")&&($nombreAdulteCham4==0||$nombreAdulteCham4=="") )
		{
			$urlDispo="Reservation.php?da1=$da1&da2=$da2&nombre=$nombre&chambre=$chambre&nombreAdulteCham=$nombreAdulteCham&nombreEnfantCham=$nombreEnfantCham&msgChambre=Veuillez sélectionner au minimum 1 adulte";
		}
		else
		{
			// Si une chambre se trouve être vide
			if ( ( $verifAdulte[0]&&$verifEnfant[0] )||( $verifAdulte[1]&&$verifEnfant[1] )||( $verifAdulte[2]&&$verifEnfant[2] )||( $verifAdulte[3]&&$verifEnfant[3] )||( $verifAdulte[4]&&$verifEnfant[4] )  )
			{
				$urlDispo="Reservation.php?da1=$da1&da2=$da2&nombre=$nombre&chambre=$chambre&nombreAdulteCham=$nombreAdulteCham&nombreEnfantCham=$nombreEnfantCham&msgChambre=Vous ne pouvez pas avoir de chambre vide";
			}
			else
			{
				// Si toutes les données sont correctes :
				$urlDispo="Disponibilite.php?da1=$da1&da2=$da2&nombre=$nombre&chambre=$chambre&nombreAdulteCham=$nombreAdulteCham&nombreEnfantCham=$nombreEnfantCham";
				$msgDate="" ;
			}
		}
	} 
?>
						
	<script  type="text/javascript">
		// On passe à la page suivante
		function suite()
		{
			window.location.href = "<? echo "$urlDispo"; ?>";
		}
		//On retourne à la page d'accueil
		function annuler()
		{
			window.location.href = "<? echo "$siteUrl . $europellier"; ?>/english/";
		}
	</script>
				
	</form>	
	
				</td></tr>
				
				<tr><td  height="10"></td></tr>
				
				<tr><td style="color: #990000;" >
				<? echo "$msgDates"; echo "$msgChambre"; ?>
				</td></tr>		
			</table>

	<td align="right" width="110"  valign="top">
			<table>
				<tr><td height="60"></td></tr>
				<tr><td class="cadrePhoto" align="top">	
					<?
					// Si on on clique sur Voir Calendrier, on l'affiche :
					if ($bo==1)
					{
			 		include("../english/Montpellier_Hotel_Eng/calendrier.php"); 
					} 
					?>
				</td></tr>
			</table>
	</td></tr>

	
	
</table>
			</td>
		</tr>
<!-- Fin info du centre -->   		
	

<? include( $_SERVER['DOCUMENT_ROOT']  . $parentFold . $europellier . '/english/scriptEng/panneauDroite.php'); ?>

