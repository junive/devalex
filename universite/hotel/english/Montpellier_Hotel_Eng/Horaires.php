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
<title>Hotel Du Parc Euromedecine de Montpellier : Opening/Closing Times</title>

</head>

<? $titre="Open/close \n times";
$numMenu=9;
include( $_SERVER['DOCUMENT_ROOT']  . $parentFold . $europellier . "/english/scriptEng/panneauGaucheDessus.php"); 

?>


<!-- Debut info du Centre -->
      		

			<tr>
       			<td style=" background-color:#ffcc00;" align="center" valign="top" colspan="8" width="499" height="449" >
					<br /><br /><br />
					<table  class="CadrePhoto" >
						<tr>
							<td  width="460" class="accueil">	
							
							<? echo "<u> $ContEng[65]</u><br /><br />"; ?>
							
							<table class="accueil" cellpadding="0" cellspacing="0">
							
							<? if ($ContEng[66]!="") echo "<tr><td> $ContEng[66]</td>";
							if ($ContEng[67]!="") echo "<td> &nbsp $ContEng[67]<br /></td></tr>";
							if ($ContEng[68]!="") echo "<tr><td></td><td> &nbsp $ContEng[68]<br /></td></tr>";
							
							 ?>
							
							</table>
							<br /><br />
							
							<? if ($ContEng[69]!="") echo "$ContEng[69]<br />" ?>
							<? if ($ContEng[70]!="") echo "$ContEng[70]<br />" ?>
							<? if ($ContEng[71]!="") echo "$ContEng[71]<br />" ?>
							<? if ($ContEng[72]!="") echo "$ContEng[72]<br />" ?>
							
							

						<br />
							</td>
						</tr>
					</table>
				
				</td>
      		</tr>
<!-- Fin info du centre -->   		
	

<? include( $_SERVER['DOCUMENT_ROOT']  . $parentFold . $europellier . '/english/scriptEng/panneauDroite.php'); ?>