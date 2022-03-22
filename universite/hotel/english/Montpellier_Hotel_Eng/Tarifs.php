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
<title>Hotel Du Parc Euromedecine de Montpellier : RATES</title>

</head>

<? $titre="RATES";
$numMenu=6;
include( $_SERVER['DOCUMENT_ROOT']  . $parentFold . $europellier . "/english/scriptEng/panneauGaucheDessus.php");

?>


<!-- Debut info du Centre -->
      		
<tr>
       			<td style=" background-color:#ffcc00;" align="center" valign="top" colspan="8" width="499" height="449" >
					<br />
					<table class="tarif" cellpadding="0" cellspacing="0">
						<tr>
							<td colspan="2" align="center" height="30" valign="top" >	
							<u>RATES</u>
							</td>
						</tr>
					</table>
					<br />
					<table class="tarif" border="1" cellpadding="0" cellspacing="0">

						<tr>
							<td width="200" align="center">
							<? echo "Public rate :";  ?>
							</td>	
							<td width="50" align="center"><? echo "$tarif[0]€"; ?></td>
												
						</tr>
					</table>
					<br />
					<table class="tarif" border="1" cellpadding="0" cellspacing="0">
						<tr>
							<td colspan="2" valign="middle" height="30" align="center">
							<u>During the week : </u>
							</td>	
												
						</tr>
						<tr>
							<td width="200" align="center">
							<? echo "1 person : ";  ?>
							</td>	
							<td width="50" align="center"><? echo "$tarif[1]€"; ?></td>					
						</tr>
						<tr>
							<td align="center">
							<? echo "2 people : ";  ?> 
							</td>	
							<td align="center"><? echo "$tarif[2]€"; ?></td>					
						</tr>
						<tr>
							<td align="center">
							<? echo "3rd Person : ";  ?> 
							</td>	
							<td align="center"><? echo "$tarif[3]€"; ?></td>					
						</tr>
					</table>
					<br />
					<table class="tarif" border="1" cellpadding="0" cellspacing="0">

						<tr>
							<td colspan="2" valign="middle" height="30" align="center">
							<u>During the weekend : </u>
							</td>	
												
						</tr>
						<tr>
							<td width="200" align="center">
							<? echo "1 or 2 people :";  ?> 
							</td>	
							<td width="50" align="center"><? echo "$tarif[4]€"; ?></td>					
						</tr>
						<tr>
							<td align="center">
							<? echo "3rd person :";  ?> 
							</td>	
							<td align="center"><? echo "$tarif[5]€"; ?></td>					
						</tr>
						<tr>
							<td class="accueil" colspan="2" align="center">
							*Free* for one child aged 12 and under sleeping in their parents’ room.
							</td>					
						</tr>

					</table>
					<br />
					<table width ="400" cellpadding="0" cellspacing="0">
						<tr>
							<td class="accueil" colspan="2" align="center">
							***Rates may vary depending on holidays and special occasions. 
We will provide you with the definite price during the reservation.***

							</td>					
						</tr>

					</table>
				</td>
      		</tr>
<!-- Fin info du centre -->   		
	

<? include( $_SERVER['DOCUMENT_ROOT']  . $parentFold . $europellier . '/english/scriptEng/panneauDroite.php'); ?>