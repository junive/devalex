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
<title>Hotel Du Parc Euromedecine de Montpellier :  Contact</title>

</head>

<? $titre="Contact";
$numMenu=8;
include( $_SERVER['DOCUMENT_ROOT']  . $parentFold . $europellier . "/english/scriptEng/panneauGaucheDessus.php");
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
							echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /><u> $ContEng[105]</u><br />" ;
							if ($ContEng[106]!="") echo " $ContEng[106]<br />" ;
							if ($ContEng[107]!="") echo " $ContEng[107]<br />" ;
							if ($ContEng[108]!="") echo " $ContEng[108]<br />" ;
							if ($ContEng[109]!="") echo " $ContEng[109]<br />" ;
							if ($ContEng[110]!="") echo " $ContEng[110]<br />" ;
							//Téléphone
							if ($ContEng[111]!="") echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /><u> $ContEng[111]</u><br />" ;
							if ($ContEng[112]!="") echo " $ContEng[112]<br />" ;
							if ($ContEng[113]!="") echo " $ContEng[113]<br />" ;
							//Fax
							if ($ContEng[114]!="") echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /><u> $ContEng[114]</u><br />" ;
							if ($ContEng[115]!="") echo " $ContEng[115]<br />" ;
							if ($ContEng[116]!="") echo " $ContEng[116]<br />" ;
							//Mail
							if ($ContEng[117]!="") echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /><u> $ContEng[117]</u><br />" ;
							if ($ContEng[118]!="") echo "<a href='mailto:$ContEng[13]'> $ContEng[118]</a><br />" ;
							if ($ContEngt[119]!="") echo " $ContEng[119]<br />" ;
							if ($ContEng[120]!="") echo " $ContEng[120]<br />" ;
							?>

							
							
							<br /><br />
							
							</td>
						</tr>
					</table>
				
				</td>
      		</tr>
<!-- Fin info du centre -->   		
	

<? include( $_SERVER['DOCUMENT_ROOT']  . $parentFold . $europellier . '/english/scriptEng/panneauDroite.php'); ?>
