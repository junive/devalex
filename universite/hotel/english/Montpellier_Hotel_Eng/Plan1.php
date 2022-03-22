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
<title>Hotel Du Parc Euromedecine de Montpellier : Access</title>

</head>

<? $titre="Access";
$numMenu=5;
include( $_SERVER['DOCUMENT_ROOT']  . $parentFold . $europellier . "/english/scriptEng/panneauGaucheDessus.php"); ?>


<!-- Debut info du Centre -->
      		

<tr>
       	<td style=" background-color:#ffcc00;" align="center" valign="center" colspan="8" width="499" height="449" >
				<table cellpadding="0" cellspacing="0">
				<tr> <td class="general" align="center">
				Click on the plan to get a larger view (or to print).<br />
				  <a onclick="javascript:popup('<? echo $siteUrl . $europellier; ?>/image/plan/planMoyen1.gif')"><img src="<? echo $siteUrl . $europellier; ?>/image/plan/planPetit1.gif" border="0" /></a><br /> 
				  Zoom : <a class="zoom" href="Plan.php">Local area </a> - <a style="color:#00CCCC; text-decoration:none" href="Plan1.php">North of Montpellier</a> - <a class="zoom" href="Plan2.php">Montpellier</a> - <a class="zoom" href="Plan3.php">Region</a> 
				
				</td></tr></table>  
		  </td>
</tr>
<!-- Fin info du centre -->   		
	

<? include( $_SERVER['DOCUMENT_ROOT']  . $parentFold . $europellier . '/english/scriptEng/panneauDroite.php'); ?>