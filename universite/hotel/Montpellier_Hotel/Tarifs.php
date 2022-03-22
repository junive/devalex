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
<title>Hotel Du Parc Euromedecine de Montpellier-Grabels : Les tarifs</title>

</head>

<? $titre="Les \n Tarifs";
$numMenu=6;
include($_SERVER['DOCUMENT_ROOT'] . $parentFold . $europellier . "/script/panneauGaucheDessus.php");

?>


<!-- Debut info du Centre -->
      		
<tr>
       			<td style=" background-color:#ffcc00;" align="center" valign="top" colspan="8" width="499" height="449" >
					<br />
					<br />
					<br />
					<table class="tarif" border="1" bordercolor="#990000" style='background-color:#FFFF00; font-size:18px' cellpadding="0" cellspacing="0">

						<tr>
							<td width="200" align="center">
							<? echo "$personnes[0] :";  ?>
							</td>	
							<td width="80" align="center"><? echo "$tarif[0]€"; ?></td>
												
						</tr>
					</table>
					<br />
					<table class="accueil" border="1" bordercolor="#990000" style='background-color:#FFFF00;' cellpadding="0" cellspacing="0">
						<tr>
							<td class="tarif" colspan="2" valign="middle" height="30" align="center">
							Tarif société en semaine,<br /><span style="font-size:14px">(du lundi soir au jeudi soir)</span>
							</td>	
												
						</tr>
						<tr>
							<td width="200" align="center">
							<? echo "$personnes[1] :";  ?>
							</td>	
							<td width="80" align="center"><? echo "$tarif[1]€"; ?></td>					
						</tr>
						<tr>
							<td align="center">
							<? echo "$personnes[2] :";  ?> 
							</td>	
							<td align="center"><? echo "$tarif[2]€"; ?></td>					
						</tr>
						<tr>
							<td align="center">
							<? echo "$personnes[3] :";  ?> 
							</td>	
							<td align="center"><? echo "$tarif[3]€"; ?></td>					
						</tr>
					</table>
					<br />
					<table class="accueil" border="1" bordercolor="#990000" style='background-color:#FFFF00;' cellpadding="0" cellspacing="0">

						<tr>
							<td class="tarif"  colspan="2" valign="middle" height="30" align="center">
							Tarif préférentiel le Week-end, <br /> <span style="font-size:14px"> (du vendredi soir au dimanche soir)</span>
							</td>	
												
						</tr>
						<tr class="accueil">
							<td width="200" align="center">
							<? echo "$personnes[4] :";  ?> 
							</td>	
							<td width="80" align="center"><? echo "$tarif[4]€"; ?></td>					
						</tr>
						<tr>
							<td width="200" align="center">
							<? echo "$personnes[5] :";  ?> 
							</td>	
							<td width="80" align="center"><? echo "$tarif[5]€"; ?></td>					
						</tr>
						<tr>
							<td style="color: #990000; text-align:center; font-weight:bold; font-family:'book Antiqua'; font-size:14px; vertical-align:top"  colspan="2">
							*Gratuit* pour un enfant de -12 ans<br /> dans la chambre de ses parents.
							</td>					
						</tr>

					</table>
					<br />
					<table width ="400" cellpadding="0" cellspacing="0">
						<tr>
							<td style="color: #990000; text-align:center; font-weight:bold; font-family:'book Antiqua'; font-size:14px; vertical-align:top"  align="center">
							*** Les tarifs sont nets et peuvent varier en fonction des périodes (Salons, jours fériés,...) ***
							</td>					
						</tr>

					</table>
				</td>
      		</tr>
<!-- Fin info du centre -->   		
	

<? include($_SERVER['DOCUMENT_ROOT']  . $parentFold . $europellier . '/script/panneauDroite.php'); ?>