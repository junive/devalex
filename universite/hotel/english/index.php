<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"><head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" >
<?  
include("../memo/hotel/infos.php");  
?>
<meta name="description" lang="fr" content="<? echo "$ContMeta[0]" ; ?>" >
<meta name="keywords" lang="fr" content="<? echo "$ContMeta[1]"; ?>" >
<meta name="category" content="<? echo "$ContMeta[3]"; ?>" >
<meta name="distribution" content="global" >
<meta name="robot" content="all" >
<meta name="revisit-after" content="1 day" >
<meta name="author" lang="fr" content="Alexandre GORISSE" >
<meta name="copyright" content="montpellier-hotel" >
<meta name="identifier-url" content="http://www.euromedecine.com" >

<LINK rel= "stylesheet" type="text/css" href="<? echo $siteUrl . $europellier; ?>/english/scriptEng/style.css" >
<title><? echo "$ContMeta[2] " ; ?></title>

</head>

<? $titre="Our hotel";
$numMenu=0;
include( $_SERVER['DOCUMENT_ROOT']  . $parentFold . $europellier . "/english/scriptEng/panneauGaucheDessus.php"); 
?>


<!-- Debut info du Centre -->
      		

			<tr>
       			<td style=" background-color:#ffcc00;"  align="center" valign="top" colspan="8" width="499" height="449" >
				<table width="450"  class="accueil" cellpadding="0" cellspacing="0">
					<tr><td style="text-decoration:underline" height="40" >
					
					
					<? echo "$ContEng[0]" ;?>
					<? if($ContEng[1]!="") echo "</td></tr><tr><td height='30'> <img src='". $siteUrl . $europellier . "/image/point2.gif' alt='' />  $ContEng[1]" ; ?>
					<? if($ContEng[2]!="") echo "</td></tr><tr><td height='30'> <img src='". $siteUrl . $europellier . "/image/point2.gif' alt='' />  $ContEng[2]" ; ?>
					<? if($ContEng[3]!="") echo "</td></tr><tr><td height='30'> <img src='". $siteUrl . $europellier . "/image/point2.gif' alt='' />  $ContEng[3]" ; ?>
					<? if($ContEng[4]!="") echo "</td></tr><tr><td height='30'> <img src='". $siteUrl . $europellier . "/image/point2.gif' alt='' />  $ContEng[4]" ; ?>
					<? if($ContEng[5]!="") echo "</td></tr><tr><td height='30'> <img src='". $siteUrl . $europellier . "/image/point2.gif' alt='' />  $ContEng[5]" ; ?>
					<? if($ContEng[6]!="") echo "</td></tr><tr><td height='30'> <img src='". $siteUrl . $europellier . "/image/point2.gif' alt='' />  $ContEng[6]" ; ?>
					
					<? if($ContEng[7]!="") echo "</td></tr><tr><td height='30'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $ContEng[7]" ;?>
					<? if($ContEng[8]!="") echo "</td></tr><tr><td height='30'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $ContEng[8]" ;?>
					<? if($ContEng[9]!="") echo "</td></tr><tr><td height='30'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $ContEng[9]" ;?>
					
					<? if($ContEng[10]!="") echo "</td></tr><tr><td height='30'> <img src='". $siteUrl . $europellier . "/image/point2.gif' alt='' />  $ContEng[10]" ; ?>
					<? if($ContEng[11]!="") echo "</td></tr><tr><td height='30'> <img src='". $siteUrl . $europellier . "/image/point2.gif' alt='' />  $ContEng[11]" ; ?>
					<? if($ContEng[12]!="") echo "</td></tr><tr><td height='30'> <img src='". $siteUrl . $europellier . "/image/point2.gif' alt='' />  $ContEng[12]" ; ?>
					
					</td></tr>

				</table>
				</td>
      		</tr>
<!-- Fin info du centre -->   		
	

<? include($_SERVER['DOCUMENT_ROOT']  . $parentFold . $europellier . "/english/scriptEng/panneauDroite.php"); ?>
