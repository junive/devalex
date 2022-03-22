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
<title>Hotel Du Parc Euromedecine de Montpellier-Grabels : Le Restaurant</title>

</head>

<? $titre="Le \n Restaurant";
$numMenu=3;
include($_SERVER['DOCUMENT_ROOT'] . $parentFold . $europellier . "/script/panneauGaucheDessus.php");
 ?>


<!-- Debut info du Centre -->
      		

			<tr>
       			<td style=" background-color:#ffcc00;" align="center" valign="top" colspan="8" width="499" height="449" >
					<table cellpadding="0" cellspacing="0">
						<tr>
							<td  width="460" class="accueil">	
							
							
							
							<? echo "<u>$ContRestau[0]</u><br />" ;
							if ($ContRestau[1]!="") echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> $ContRestau[1]";
							if ($ContRestau[2]!="") echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> $ContRestau[2]";
							if ($ContRestau[3]!="") echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> $ContRestau[3]";
							if ($ContRestau[4]!="") echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> $ContRestau[4]";
							if ($ContRestau[5]!="") echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> $ContRestau[5]";
							?>
							
							<table cellspacing="0" cellpadding="0" class="accueil">
								
							<? if ($ContRestau[6]!="") echo "<tr><td colspan='2' class='accueil'>	<img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> $ContRestau[6]<br /></td> </tr>"; ?>

									<? if ($ContRestau[7]!="") echo "<tr><td width='40'></td><td> $ContRestau[7]</td> </tr>"; ?>	

									<? if ($ContRestau[8]!="") echo "<tr><td width='40'></td><td> $ContRestau[8]</td> </tr>"; ?>
													
							</table>	
							
							<? 
							
							if ($ContRestau[9]!="") echo "<img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> $ContRestau[9]" ;
							if ($ContRestau[10]!="") echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> $ContRestau[10]" ;
							if ($ContRestau[11]!="") echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> $ContRestau[11]" ;
							if ($ContRestau[12]!="") echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> $ContRestau[12]" ;
							if ($ContRestau[13]!="") echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> $ContRestau[13]" ;
							if ($ContRestau[14]!="") echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> $ContRestau[14]" ;
							
							?>
							<!--
							<u>Restaurant "La Poelée"</u><br /><br />
							
							<img src="".$siteUrl . $europellier."/image/point2.gif" alt="" />
							Cuisine traditionnelle et Régionale,<br />
							<img src="".$siteUrl . $europellier."/image/point2.gif" alt="" />
							Buffet des hors d'oeuvres et dessert à volonté,<br />
							<img src="".$siteUrl . $europellier."/image/point2.gif" alt="" />
							Carte variée et menusà partir de 13€90,<br />
							<img src="".$siteUrl . $europellier."/image/point2.gif" alt="" />
							Selection de Vins régionnaux,<br />
							<img src="".$siteUrl . $europellier."/image/point2.gif" alt="" />
							Salle entièrement "NON FUMEUR" et Veranda "CLIMATISEE",<br />
							
							<table cellspacing="0" cellpadding="0" class="accueil">
								<tr>
									<td  colspan="2" class="accueil">	
							<img src="".$siteUrl . $europellier."/image/point2.gif" alt="" />
							Vous accueille du lundi au Vendredi<br />
									</td>
								</tr>
								<tr>
									<td width="40"></td>
									<td>de 12H à 14H,</td>
								</tr>	
								<tr>
									<td width="40"></td>
									<td>et de 19H15 à 21H,</td>
								</tr>					
							</table>	
							<img src="".$siteUrl . $europellier."/image/point2.gif" alt="" />
							Formule simplifiée le Vendredi soir,<br />
							<img src="".$siteUrl . $europellier."/image/point2.gif" alt="" />
							Fermé le week-end, les jours fériés et le mois d'août,<br />
							<img src="".$siteUrl . $europellier."/image/point2.gif" alt="" />
							Room Service : plateau Repas en chambre le soir sur demande<br />
							(du lundi au vendredi). 
							-->
							<br /><br />
							<div align="center"><img src="<? echo $siteUrl . $europellier; ?>/image/RestauPetit.gif" alt="" /></div>
							</td>
						</tr>
					</table>
				
				</td>
      		</tr>
<!-- Fin info du centre -->   		
	

<? include($_SERVER['DOCUMENT_ROOT']  . $parentFold . $europellier . '/script/panneauDroite.php'); ?>