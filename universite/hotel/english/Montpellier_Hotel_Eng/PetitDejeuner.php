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

<LINK rel= "stylesheet" type="text/css" href="<? echo $siteUrl . $europellier; ?>/script/style.css" >
<title>Hotel Du Parc Euromedecine de Montpellier : BreakFast</title>

</head>

<? $titre="Breakfast";
$numMenu=2;
include( $_SERVER['DOCUMENT_ROOT']  . $parentFold . $europellier . "/english/scriptEng/panneauGaucheDessus.php");
?>
							


<!-- Debut info du Centre -->
      		

			<tr>
       			<td style=" background-color:#ffcc00;" align="center" valign="top" colspan="8" width="499" height="449" >
					<table>
						<tr>
							<td width="460" class="accueil">
							
							
							<? echo "<u>$ContEng[54] $price[6] €  </u><br />";
							if ($ContEng[55]!="") echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> $ContEng[55]";
							if ($ContEng[56]!="") echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> $ContEng[56]";
							if ($ContEng[57]!="") echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> $ContEng[57]";
							if ($ContEng[58]!="") echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> $ContEng[58]";
							if ($ContEng[59]!="") echo "<br /> $ContEng[59]";
							if ($ContEng[60]!="") echo " $ContEng[60]";
							if ($ContEng[61]!="") echo "<br /> $ContEng[61]";
							if ($ContEng[62]!="") echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> $ContEng[62]";
							if ($ContEng[63]!="") echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> $ContEng[63]";
							if ($ContEng[64]!="") echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> $ContEng[64]";
							?>

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
	

<? include( $_SERVER['DOCUMENT_ROOT']  . $parentFold . $europellier . '/english/scriptEng/panneauDroite.php'); ?>