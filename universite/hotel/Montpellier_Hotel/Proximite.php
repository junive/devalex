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
<title>Hotel Du Parc Euromedecine de Montpellier-Grabels : A proximité</title>

</head>

<? $titre="A \n Proximité";
$numMenu=11;
include($_SERVER['DOCUMENT_ROOT'] . $parentFold . $europellier . "/script/panneauGaucheDessus.php"); 

?>


<!-- Debut info du Centre -->
      		

			      		

			<tr>
       			<td style=" background-color:#ffcc00;" align="center" valign="top" colspan="8" width="499" height="449" >
					<table cellpadding="0" cellspacing="0">
						<tr>
							<td  width="460" class="accueil">	
							
							<? echo "<u>$ContProximite[0] </u><br /><br />" ; 
							 for ($i=1;$i<$cptProximite;$i++)
								{	
								 	 if ($numContProximite[$i]==9) echo "<br />";
									 if ($ContProximite[$i]!="") echo "<img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> $ContProximite[$i]<br />";
								}
							?>
							<!--
							
							
							<u>A proximité de l'Hôtel du Parc :</u><br /><br />
							
							<img src="".$siteUrl . $europellier."/image/point2.gif" alt="" />
							Face à l'hôtel : Bus n°16 arrêt Val d'Aude. <br />
							<img src="".$siteUrl . $europellier."/image/point2.gif" alt="" />
							Tramway (à7minutes à pied) arrêt Euromedecine. <br />
							<img src="".$siteUrl . $europellier."/image/point2.gif" alt="" />
							Club de sport face à l'hôtel, quatch; musculation et steching.<br />
							<img src="".$siteUrl . $europellier."/image/point2.gif" alt="" />
							Parcours de Jogging direct depuis l'hôtel.<br />
							<img src="".$siteUrl . $europellier."/image/point2.gif" alt="" />
							2 centres commerciaux avec Supermarché, carburants, pharmacie, et magasins divers (La valsière et le centre commercial Trifontaine).<br />
							<img src="".$siteUrl . $europellier."/image/point2.gif" alt="" />
							Villages de Grabels, St Gély-Du-Fesc, et St Clément de Rivière à seulement 5 minutes de l'hôtel en voiture.<br />
							<img src="".$siteUrl . $europellier."/image/point2.gif" alt="" />
							Aux portes de l'arrière pays et des ses villages médiévaux se trouvent St Gilhem Le Désert, Sauges, St Martin de ?, et le viaduc de Millau.<br />
							<img src="".$siteUrl . $europellier."/image/point2.gif" alt="" />
							Plages de Palavas les Flots, Carnon, la Grande Motte, Sète et Frontignan à environ 30 minutes<br /><br />
						
							<img src="".$siteUrl . $europellier."/image/point2.gif" alt="" />
							<u>Facultés et écoles :</u> d'otonlogie, Université de Montpellier II, HEC, SUP de Commerce, Pharmacie, Medecine...<br />
							<img src="".$siteUrl . $europellier."/image/point2.gif" alt="" />
							<u>Hopitaux :</u> Val D'aurelle, CHU La Peyronnie, St Eloi, Armand de Villeneuve, Guy de Cheliac.<br />
							<img src="".$siteUrl . $europellier."/image/point2.gif" alt="" />
							<u>Sociétés :</u> ABX-Haiba, CNFPT, chambres des notaires, assurances Mutuelles des Motards, CNRS, France Telecom, LaPoste, MG???, ONF, Caisse d'épargne.
							-->
							
							
							</td>
						</tr>
					</table>

				<!--
				<table class="accueil">
							<tr>
								<td width="140">- Centres d'affaires :</td>
								<td>Cap Gamma, la valsière, Parc Agropolis Grabels</td>
							</tr>
							<tr>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<td>- Des Hopitaux : </td>
								<td> Val D'aurelle, CHU La Peyronnie, St Eloi,</td></tr>
							<tr>
								<td></td>
								<td> Armand de Villeneuve, Guy de Cheliac</td>
							</tr>
							<tr>
								<td>- Des Facultés : </td>
								<td> Faculté d'otonlogie, Université de Montpellier II,</td>
							</tr>
							<tr>
								<td></td>
								<td> HEC, SUP de Commerce,...</td>
							</tr>
						</table> -->
				</td>
      		</tr>
<!-- Fin info du centre -->   		
	

<? include($_SERVER['DOCUMENT_ROOT']  . $parentFold . $europellier . '/script/panneauDroite.php'); ?>