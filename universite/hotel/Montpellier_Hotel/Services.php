<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"><head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8 >

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
<title>Hotel Du Parc Euromedecine de Montpellier-Grabels : Nos Services</title>

</head>

<? $titre="Nos \n Services";
$numMenu=4;
include($_SERVER['DOCUMENT_ROOT'] . $parentFold . $europellier . "/script/panneauGaucheDessus.php"); 
include("../memo/hotel/infos.php");
?>


<!-- Debut info du Centre -->
      		

			<tr>
       			<td style=" background-color:#ffcc00;" align="center" valign="top" colspan="8" width="499" height="449" >
					<table cellpadding="0" cellspacing="0">
						<tr>
							<td  width="460" class="accueil">	
							
							
							<? 
							echo "<u>$ContService[0] </u><br />" ; 
							if ($ContService[1]!="") echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> $ContService[1] " ;
							if ($ContService[2]!="") echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> $ContService[2] " ;
							if ($ContService[3]!="") echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> $ContService[3] " ;
							if ($ContService[4]!="") echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> $ContService[4] " ;
							if ($ContService[5]!="") echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> $ContService[5] " ;
							if ($ContService[6]!="") echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> $ContService[6] " ;
							if ($ContService[7]!="") echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> $ContService[7] " ;
							if ($ContService[8]!="") echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> $ContService[8] " ;
							if ($ContService[9]!="") echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> $ContService[9] " ;
							if ($ContService[10]!="") echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt=''/> $ContService[10] " ;
							
							if ($ContService[11]!="") echo "<br /><br /><u>$ContService[11]</u><br />" ; 
							if ($ContService[12]!="") echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> $ContService[12] " ;
							if ($ContService[13]!="") echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> $ContService[13] " ;
							if ($ContService[14]!="") echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> $ContService[14] " ;
							if ($ContService[15]!="") echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> $ContService[15] " ;
							if ($ContService[16]!="") echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> $ContService[16] " ;
							?>
							<!--
							<u>A Disposition à la réception :</u><br /><br />
							
							<img src="".$siteUrl . $europellier."/image/point2.gif" alt="" />
							Quotidien Régional,<br />
							<img src="".$siteUrl . $europellier."/image/point2.gif" alt="" />
							Magazines divers,<br />
							<img src="".$siteUrl . $europellier."/image/point2.gif" alt="" />
							Informations et documentations touristiques locales et régionales,<br />
							<img src="".$siteUrl . $europellier."/image/point2.gif" alt="" />
							Plan de quartier et plan de la ville,<br />
							<img src="".$siteUrl . $europellier."/image/point2.gif" alt="" />
							Service FAX et ordinateur avec Accès Internet à la réception,<br />
							<img src="".$siteUrl . $europellier."/image/point2.gif" alt="" />
							Réservation de Taxi,<br />
							<img src="".$siteUrl . $europellier."/image/point2.gif" alt="" />
							langues parlées : anglais, espagnole, italien, allemand,<br />
							<img src="".$siteUrl . $europellier."/image/point2.gif" alt="" />
							Réveil sur demande,<br /><br />
							
							<u>Paiements acceptées :</u><br /><br />
							<img src="".$siteUrl . $europellier."/image/point2.gif" alt="" />
							Cartes de crédit VISA, MasterCard, American Express,<br />
							<img src="".$siteUrl . $europellier."/image/point2.gif" alt="" />
							Chèques et Virement banquaires,<br />
							<img src="".$siteUrl . $europellier."/image/point2.gif" alt="" />
							Titres restaurants et chèques vacances.
							-->
							
							
							</td>
						</tr>
					</table>
				
				</td>
      		</tr>
<!-- Fin info du centre -->   		
	

<? include($_SERVER['DOCUMENT_ROOT']  . $parentFold . $europellier . '/script/panneauDroite.php'); ?>