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
<title>Hotel Du Parc Euromedecine de Montpellier-Grabels : Visitez Montpellier</title>

</head>

<? $titre="Visitez \n Montpellier  ";
$numMenu=99;
include($_SERVER['DOCUMENT_ROOT'] . $parentFold . $europellier . "/script/panneauGaucheDessus.php"); 

?>


<!-- Debut info du Centre -->
      		

<tr>
       			<td style=" background-color:#ffcc00;" align="center" valign="top" colspan="8" width="499" height="449" >
					<table width="460">
						<tr>
							<td class="accueil">
							
							<? for ($i=0;$i<$cptVisite;$i++)
								{	
									if ($numContVisite[$i]==0) echo "<u>$ContVisite[$i]</u><br />";
									else if ($numContVisite[$i]==9||$numContChambre[$i]==18) echo "<br /><u>$ContVisite[$i]</u><br />";
									else if ($ContVisite[$i]!="") echo "<img src='".$siteUrl . $europellier."/image/point2.gif' alt='' />$ContVisite[$i]<br />";
								}
							?>

							</td>
						</tr>
					</table>
				
				</td>
      		</tr>
<!-- Fin info du centre -->   		
	

<? include($_SERVER['DOCUMENT_ROOT']  . $parentFold . $europellier . '/script/panneauDroite.php'); ?>