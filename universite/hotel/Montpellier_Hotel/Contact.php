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
<title>Hotel Du Parc Euromedecine de Montpellier-Grabels :  Contactez Nous</title>

</head>

<? $titre="Contactez \n Nous";
$numMenu=8;
include($_SERVER['DOCUMENT_ROOT'] . $parentFold . $europellier . "/script/panneauGaucheDessus.php");
?>


<!-- Debut info du Centre -->
      		
      		

			<tr>
       			<td style=" background-color:#ffcc00;" align="center" valign="top" colspan="8" width="499" height="449" >
					<br /><br />
					<table class="CadrePhoto" >
						<tr>
							<td  widht="460" class="accueil" style="text-align:center;">	
							
							<? 
							//Adresse
							echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /><u> $ContContact[0]</u><br />" ;
							if ($ContContact[1]!="") echo " $ContContact[1]<br />" ;
							if ($ContContact[2]!="") echo " $ContContact[2]<br />" ;
							if ($ContContact[3]!="") echo " $ContContact[3]<br />" ;
							if ($ContContact[4]!="") echo " $ContContact[4]<br />" ;
							if ($ContContact[5]!="") echo " $ContContact[5]<br />" ;
							//Téléphone
							if ($ContContact[6]!="") echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /><u> $ContContact[6]</u><br />" ;
							if ($ContContact[7]!="") echo " $ContContact[7]<br />" ;
							if ($ContContact[8]!="") echo " $ContContact[8]<br />" ;
							//Fax
							if ($ContContact[9]!="") echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /><u> $ContContact[9]</u><br />" ;
							if ($ContContact[10]!="") echo " $ContContact[10]<br />" ;
							if ($ContContact[11]!="") echo " $ContContact[11]<br />" ;
							//Mail
							if ($ContContact[12]!="") echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /><u> $ContContact[12]</u><br />" ;
							if ($ContContact[13]!="") echo "<a href='mailto:$ContContact[13]'> $ContContact[13]</a><br />" ;
							if ($ContContact[14]!="") echo " $ContContact[14]<br />" ;
							if ($ContContact[15]!="") echo " $ContContact[15]<br />" ;
							?>
							<!--
							<br />
							<img src="".$siteUrl . $europellier."/image/point2.gif" alt="" />
							<u>Adresse :</u><br />
							Hotel Du Parc Euromedecine<br />
							Parc Euromedecine<br />
							2 rue du Caducée<br />
							34090 Montpellier<br /><br />

							<img src="".$siteUrl . $europellier."/image/point2.gif" alt="" />
							<u>Téléphone :</u><br />
							   04 67 52 43 33 <br /><br />
							   
							<img src="".$siteUrl . $europellier."/image/point2.gif" alt="" />   
							 <u>FAX :</u><br />
							    04 67 52 28 44  <br /><br />
								
							<img src="".$siteUrl . $europellier."/image/point2.gif" alt="" />	
								<u>Contactez nous par Courriel :</u><br />
								<a href="mailto:comfortinn.montpellier@wanadoo.fr">comfortinn.montpellier@wanadoo.fr</a>
							   <br /><br />
							-->   
							
							
							<br /><br />
							
							</td>
						</tr>
					</table>
				
				</td>
      		</tr>
<!-- Fin info du centre -->   		
	

<? include($_SERVER['DOCUMENT_ROOT']  . $parentFold . $europellier . '/script/panneauDroite.php'); ?>
