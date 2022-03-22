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
<title>Hotel Du Parc Euromedecine de Montpellier : Le Restaurant</title>

</head>

<? $titre="Restaurant";
$numMenu=3;
include( $_SERVER['DOCUMENT_ROOT']  . $parentFold . $europellier . "/english/scriptEng/panneauGaucheDessus.php");
 ?>


<!-- Debut info du Centre -->
      		

			<tr>
       			<td style=" background-color:#ffcc00;" align="center" valign="top" colspan="8" width="499" height="449" >
					<table cellpadding="0" cellspacing="0">
						<tr>
							<td  width="460" class="accueil">	
							
							
							
							<? echo "<u>$ContEng[39]</u><br />" ;
							if ($ContEng[40]!="") echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> $ContEng[40]";
							if ($ContEng[41]!="") echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> $ContEng[41]";
							if ($ContEng[42]!="") echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> $ContEng[42]";
							if ($ContEng[43]!="") echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> $ContEng[43]";
							if ($ContEng[44]!="") echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> $ContEng[44]";
							?>
							
							<table cellspacing="0" cellpadding="0" class="accueil">
								
							<? if ($ContEng[45]!="") echo "<tr><td colspan='2' class='accueil'>	<img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> $ContEng[45]<br /></td> </tr>"; ?>

									<? if ($ContEng[46]!="") echo "<tr><td width='40'></td><td> $ContEng[46]</td> </tr>"; ?>	

									<? if ($ContEng[47]!="") echo "<tr><td width='40'></td><td> $ContEng[47]</td> </tr>"; ?>
													
							</table>	
							
							<? 
							
							if ($ContEng[48]!="") echo "<img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> $ContEng[48]" ;
							if ($ContEng[49]!="") echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> $ContEng[49]" ;
							if ($ContEng[50]!="") echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> $ContEng[50]" ;
							if ($ContEng[51]!="") echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> $ContEng[51]" ;
							if ($ContEng[52]!="") echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> $ContEng[52]" ;
							if ($ContEng[53]!="") echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> $ContEng[53]" ;
							
							?>

							<br /><br />
							<div align="center"><img src="<? echo $siteUrl . $europellier; ?>/image/RestauPetit.gif" alt="" /></div>
							</td>
						</tr>
					</table>
				
				</td>
      		</tr>
<!-- Fin info du centre -->   		
	

<? include( $_SERVER['DOCUMENT_ROOT']  . $parentFold . $europellier . '/english/scriptEng/panneauDroite.php'); ?>