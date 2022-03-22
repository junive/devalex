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
<title>Hotel Du Parc Euromedecine de Montpellier-Grabels : Les Chambres</title>

</head>

<? $titre="Les \n Chambres";
$numMenu=1;
include($_SERVER['DOCUMENT_ROOT'] . $parentFold . $europellier . "/script/panneauGaucheDessus.php"); 
?>


<!-- Debut info du Centre -->
      		

<tr>
       			<td style=" background-color:#ffcc00;" align="center" valign="top" colspan="8" width="499" height="449" >
					<table width="460">
						<tr>
							<td class="accueil">
							
							<? for ($i=0;$i<$cptChambre;$i++)
								{	
									if ($numContChambre[$i]==0) echo "<u>$ContChambre[$i]</u><br />";
									else if ($numContChambre[$i]==9||$numContChambre[$i]==18) echo "<br /><u>$ContChambre[$i]</u><br />";
									else if ($ContChambre[$i]!="") echo "<img src='".$siteUrl . $europellier."/image/point2.gif' alt='' />$ContChambre[$i]<br />";
								}
							?>
							
							<!--
							<u>Equipement des chambres :</u><br />
							<img src="".$siteUrl . $europellier."/image/point2.gif" alt="" />
							Accès Internet ADSL/réseau gratuit dans toutes les chambres,<br />
							<img src="".$siteUrl . $europellier."/image/point2.gif" alt="" />
							Climatisation réversible (Eté/Hiver),<br />
							
							<img src="".$siteUrl . $europellier."/image/point2.gif" alt="" />
							Télévision avec chaines principales, Canal +, Eurosport,<br /> 
							Ciné Frisson, BBC World, TVE,<br />
							<img src="".$siteUrl . $europellier."/image/point2.gif" alt="" />
							Literie Confortable (chambre pour 1 à 3 personnes),<br />
							<img src="".$siteUrl . $europellier."/image/point2.gif" alt="" />
							Téléphone ligne  extèrieure directe,<br />
							<img src="".$siteUrl . $europellier."/image/point2.gif" alt="" />
							Réveil Automatique programmable,<br /><br />
						
							<u>Caractéristiques des chambres :</u><br />
							<img src="".$siteUrl . $europellier."/image/point2.gif" alt="" />
							40 Chambres Tout confort,<br />
							<img src="".$siteUrl . $europellier."/image/point2.gif" alt="" />
							Toutes équipées de salle de bain avec Baignoire + WC,<br />
							<img src="".$siteUrl . $europellier."/image/point2.gif" alt="" />
							Bureau bien équipé,<br />
							<img src="".$siteUrl . $europellier."/image/point2.gif" alt="" />
							Chambres non fumeurs Disponibles,<br />
							<img src="".$siteUrl . $europellier."/image/point2.gif" alt="" />
							Room Service : Plateau Repas en chambre le soir (sur demande),<br />
							<img src="".$siteUrl . $europellier."/image/point2.gif" alt="" />
							Situé sur 2 nivaux.<br /><br />
							
							<u>Selon les Disponibilités :</u><br />
							
							<img src="".$siteUrl . $europellier."/image/point2.gif" alt="" />
							Sur demande à la réception : Fer à repasser, Sèche Cheveux, <br /> 
							Ventilateur,<br />
							<img src="".$siteUrl . $europellier."/image/point2.gif" alt="" />
							Chambres communiquantes pour familles, <br />
							<img src="".$siteUrl . $europellier."/image/point2.gif" alt="" />
							Lit gratuit pour bébé,<br />
							<img src="".$siteUrl . $europellier."/image/point2.gif" alt="" />
							2 chambres pour personnes handicapés.<br /><br />  -->
							</td>
						</tr>
					</table>
				
				</td>
      		</tr>
<!-- Fin info du centre -->   		
	

<? include($_SERVER['DOCUMENT_ROOT']  . $parentFold . $europellier . '/script/panneauDroite.php'); ?>