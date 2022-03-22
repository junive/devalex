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
<title>Hotel Du Parc Euromedecine de Montpellier-Grabels : Le Plan D'accès</title>

</head>

<? $titre="Le Plan \n D'accès";
$numMenu=5;
include($_SERVER['DOCUMENT_ROOT'] . $parentFold . $europellier . "/script/panneauGaucheDessus.php"); ?>


<!-- Debut info du Centre -->
      		

<tr>
       <td style=" background-color:#ffcc00;" align="center" valign="center" colspan="8" width="499" height="449" >
				<table cellpadding="0" cellspacing="0">
				<tr> <td class="general" align="center">
				Cliquer sur le plan pour élargir la zone (ou imprimer).<br />
				  <a onclick="javascript:popup('<? echo $siteUrl . $europellier; ?>/image/plan/planMoyen2.gif')"><img src="<? echo $siteUrl . $europellier; ?>/image/plan/planPetit2.gif" border="0" /></a><br /> 
				  Zoom : <a class="zoom"  href="Plan.php">Quartier</a> - <a class="zoom" href="Plan1.php">Nord Ville</a> - <a  style="color:#00CCCC; text-decoration:none" href="Plan2.php">Ville</a> - <a class="zoom" href="Plan3.php">Région</a> 
				
				</td></tr></table>  
		  </td>
				
</tr>
<!-- Fin info du centre -->   		
	

<? include($_SERVER['DOCUMENT_ROOT']  . $parentFold . $europellier . '/script/panneauDroite.php'); ?>
