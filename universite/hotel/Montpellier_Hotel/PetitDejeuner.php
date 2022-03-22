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
<title>Hotel Du Parc Euromedecine de Montpellier-Grabels : Le Petit Déjeuner</title>

</head>

<? $titre="Le Petit \n Déjeuner";
$numMenu=2;
include($_SERVER['DOCUMENT_ROOT'] . $parentFold . $europellier . "/script/panneauGaucheDessus.php");
?>
							


<!-- Debut info du Centre -->
      		

			<tr>
       			<td style=" background-color:#ffcc00;" align="center" valign="top" colspan="8" width="499" height="449" >
					<table>
						<tr>
							<td width="460" class="accueil">
							
							
							<? echo "<u>$ContPetit[0] $price[6] €  </u><br />";
							if ($ContPetit[1]!="") echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> $ContPetit[1]";
							if ($ContPetit[2]!="") echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> $ContPetit[2]";
							if ($ContPetit[3]!="") echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> $ContPetit[3]";
							if ($ContPetit[4]!="") echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> $ContPetit[4]";
							if ($ContPetit[5]!="") echo "<br /> $ContPetit[5]";
							if ($ContPetit[6]!="") echo " $ContPetit[6]";
							if ($ContPetit[7]!="") echo "<br /> $ContPetit[7]";
							if ($ContPetit[8]!="") echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> $ContPetit[8]";
							if ($ContPetit[9]!="") echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> $ContPetit[9]";
							if ($ContPetit[10]!="") echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> $ContPetit[10]";
							?>
							<!--
							<u>Petit Déjeuner Buffet  "A VOLONTE" : <? //echo "$price[6] €"; ?> </u><br /><br />
							<img src="".$siteUrl . $europellier."/image/point2.gif" alt="" />
							Terrasse en saison,<br />
							<img src="".$siteUrl . $europellier."/image/point2.gif" alt="" />
							En semaine, de 7H à 9H15, <br />
							<img src="".$siteUrl . $europellier."/image/point2.gif" alt="" />
							Le week end et jours fériés de 8H à 11H,<br />
							<img src="".$siteUrl . $europellier."/image/point2.gif" alt="" />
							Grand buffet à volonté : pain frais, pain au chocolat, croissant, céréales,
							madelaines, cake au fruits et au chocolat, 4 quarts,
							 biscottes, petit pain
							Gulli suédois, confiture, miel, yaourt au fruit, fromage blanc, compote de pomme, 
							salade de fruit Maison, jus d'orange, et jus de pamplemousse, oranges a presser soi-même,
							fruits de Saison.<br />
							Charcuteries et fromages :
							jambon, Salami, Brie, emmental, Oeufs durs, eau minérale et lait froid.<br />
							Boissons chaudes au choix : café, thé, chocolat, laid chaud, café décaféiné...
							
							-->
							<br />
							<div align="center">
							<img src="<? echo $siteUrl . $europellier; ?>/image/buffetPetitDejPetit.gif" alt="" />
							</div>
							
							</td>
						</tr>
					</table>
				</td>
      		</tr>
<!-- Fin info du centre -->   		
	

<? include($_SERVER['DOCUMENT_ROOT']  . $parentFold . $europellier . '/script/panneauDroite.php'); ?>