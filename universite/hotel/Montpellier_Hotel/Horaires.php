<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"><head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" >

<? include("../memo/hotel/infos.php"); ?>
<meta name="description" lang="fr" content="<? echo "$ContMeta[0]" ; ?>" >
<meta name="keywords" lang="fr" content="<? echo "$ContMeta[1]"; ?>" >
<meta name="category" content="<? echo "$ContMeta[3]"; ?>" >
<meta name="distribution" content="global" >
<meta name="robot" content="all" >
<meta name="revisit-after" content="1 day" >
<meta name="author" lang="fr" content="Alexandre GORISSE" >
<meta name="copyright" content="montpellier-hotel" >
<meta name="identifier-url" content="http://www.euromedecine.com" >

<LINK rel= "stylesheet" type="text/css" href="<? echo $siteUrl . $europellier; ?>/script/style.css" >
<title>Hotel Du Parc Euromedecine de Montpellier-Grabels : Les Horaires</title>

</head>

<? $titre="Les \n Horaires";
$numMenu=9;
include($_SERVER['DOCUMENT_ROOT'] . $parentFold . $europellier . "/script/panneauGaucheDessus.php"); 
include("../memo/hotel/infos.php");
?>


<!-- Debut info du Centre -->
      		

			<tr>
       			<td style=" background-color:#ffcc00;" align="center" valign="top" colspan="8" width="499" height="449" >
					<br /><br /><br />
					<table  class="CadrePhoto" >
						<tr>
							<td  width="460" class="accueil">	
							
							<? echo "<u> $ContHoraire[0]</u><br /><br />"; ?>
							
							<table class="accueil" cellpadding="0" cellspacing="0">
							
							<? if ($ContHoraire[1]!="") echo "<tr><td> $ContHoraire[1]</td>";
							if ($ContHoraire[2]!="") echo "<td> &nbsp $ContHoraire[2]<br /></td></tr>";
							if ($ContHoraire[3]!="") echo "<tr><td></td><td> &nbsp $ContHoraire[3]<br /></td></tr>";
							
							 ?>
							
							</table>
							<br /><br />
							
							<? if ($ContHoraire[4]!="") echo "$ContHoraire[4]<br />" ?>
							<? if ($ContHoraire[5]!="") echo "$ContHoraire[5]<br />" ?>
							<? if ($ContHoraire[6]!="") echo "$ContHoraire[6]<br />" ?>
							<? if ($ContHoraire[7]!="") echo "$ContHoraire[7]<br />" ?>
							
							
							
							
							<!--
							<u>Hôtel ouvert toute l'année : </u><br /><br />
							<table class="accueil" cellpadding="0" cellspacing="0">
							<tr><td>
							
							Réception ouverte de </td>
										<td>&nbsp;7H à 23H du lundi au vendredi<br /></td></tr>
							<tr><td></td>	<td>&nbsp;8H à 23H le week-end et jours fériés </td></tr></table>
							<br /><br />
							
							Si arrivée tardives, au delà de 23H, téléphonez avant 20H<br />
							à l'hôtel pour obtenir le code d'accès, et les modalités<br /> d'accès à votre chambre.
							-->
						<br />
							</td>
						</tr>
					</table>
				
				</td>
      		</tr>
<!-- Fin info du centre -->   		
	

<? include($_SERVER['DOCUMENT_ROOT']  . $parentFold . $europellier . '/script/panneauDroite.php'); ?>