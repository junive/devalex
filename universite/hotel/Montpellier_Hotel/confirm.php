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
<title>Hotel Du Parc Euromedecine de Montpellier-Grabels : Confirmation</title>

</head>

<? $titre="confirmation";
$numMenu=1001;
include($_SERVER['DOCUMENT_ROOT'] . $parentFold . $europellier . "/script/panneauGaucheDessus.php"); 
$numDossier = isset($_POST['numDossier']) ? $_POST['numDossier'] : "";

?>


<!-- Debut info du Centre -->
      		

<tr>
       			<td style=" background-color:#ffcc00;" align="center" valign="top" colspan="8" width="499" height="449" >
					<table width="460">
						<tr>
							<td class="accueil">

							<u>Confirmation de réservation :</u><br /><br />
							<img src="<? echo $siteUrl . $europellier; ?>/image/point2.gif" alt="" />
							Nous avons bien pris en compte votre réservation.
							<br />Vous allez recevoir un mail de confirmation dans quelques instants.
							<br /><br />
							Votre numéro de Réservation est <span style=" border:solid ; border-width:1px; background-color:#FFFF00"><? echo $numDossier ?></span>
							<br /><br />
							<a href="<? echo "$siteUrl . $europellier"; ?>"> Retour à l'accueil</a>
							</td>
						</tr>
					</table>
				
				</td>
      		</tr>
<!-- Fin info du centre -->   		
	

<? include($_SERVER['DOCUMENT_ROOT']  . $parentFold . $europellier . '/script/panneauDroite.php'); ?>