<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"><head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" >
<? // On récupère les variables dans lesquelles sont stockés le Contenu de l'index

include("memo/hotel/infos.php"); 

?>
<meta name="description" lang="fr" content="<? echo "$ContMeta[0]" ; // Métatag n°1 ?>" >
<meta name="keywords" lang="fr" content="<? echo "$ContMeta[1]"; ?>" >
<meta name="category" content="<? echo "$ContMeta[3]"; ?>" >
<meta name="distribution" content="global" >
<meta name="robot" content="all" >
<meta name="revisit-after" content="1 day" >
<meta name="author" lang="fr" content="Alexandre GORISSE" >
<meta name="copyright" content="montpellier-hotel" >
<meta name="identifier-url" content="http://www.euromedecine.com" >

<LINK rel= "stylesheet" type="text/css" href="script/style.css" >
<title><? echo "$ContMeta[2] " ; ?></title>

</head>

<? 
// Titre de la page
$titre="L'Hôtel";
//Numéro de menu pour la sélection
$numMenu=0;
//Menu et bannière + photos du centre
include('script/panneauGaucheDessus.php'); 
?>


<!-- Debut info du Centre -->
      		

			<tr>
       			<td style=" background-color:#ffcc00;"  align="center" valign="top" colspan="8" width="499" height="449" >
				<table width="450"  class="accueil" cellpadding="0" cellspacing="0">
					<tr><td style="text-decoration:underline" height="40" >
					
					
					<? // On affiche le Contenu de l'index Contenu dans notre base de données
					echo "$ContIndex[0]" ;?>
					<? if($ContIndex[1]!="") echo "</td></tr><tr><td height='30'> <img src='".$siteUrl . $europellier."/image/point2.gif' alt='' />  $ContIndex[1]" ; ?>
					<? if($ContIndex[2]!="") echo "</td></tr><tr><td height='30'> <img src='".$siteUrl . $europellier."/image/point2.gif' alt='' />  $ContIndex[2]" ; ?>
					<? if($ContIndex[3]!="") echo "</td></tr><tr><td height='30'> <img src='".$siteUrl . $europellier."/image/point2.gif' alt='' />  $ContIndex[3]" ; ?>
					<? if($ContIndex[4]!="") echo "</td></tr><tr><td height='30'> <img src='".$siteUrl . $europellier."/image/point2.gif' alt='' />  $ContIndex[4]" ; ?>
					<? if($ContIndex[5]!="") echo "</td></tr><tr><td height='30'> <img src='".$siteUrl . $europellier."/image/point2.gif' alt='' />  $ContIndex[5]" ; ?>
					<? if($ContIndex[6]!="") echo "</td></tr><tr><td height='30'> <img src='".$siteUrl . $europellier."/image/point2.gif' alt='' />  $ContIndex[6]" ; ?>
					
					<? if($ContIndex[7]!="") echo "</td></tr><tr><td height='30'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $ContIndex[7]" ;?>
					<? if($ContIndex[8]!="") echo "</td></tr><tr><td height='30'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $ContIndex[8]" ;?>
					<? if($ContIndex[9]!="") echo "</td></tr><tr><td height='30'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $ContIndex[9]" ;?>
					
					<? if($ContIndex[10]!="") echo "</td></tr><tr><td height='30'> <img src='".$siteUrl . $europellier."/image/point2.gif' alt='' />  $ContIndex[10]" ; ?>
					<? if($ContIndex[11]!="") echo "</td></tr><tr><td height='30'> <img src='".$siteUrl . $europellier."/image/point2.gif' alt='' />  $ContIndex[11]" ; ?>
					<? if($ContIndex[12]!="") echo "</td></tr><tr><td height='30'> <img src='".$siteUrl . $europellier."/image/point2.gif' alt='' />  $ContIndex[12]" ; ?>
					
					</td></tr>
					

				</table>
				</td>
      		</tr>
<!-- Fin info du centre -->   		
	

<? // On affiche les cadres à droite
 include('script/panneauDroite.php'); ?>
