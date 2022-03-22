<? session_start() ;

//On vérifie que les Logins ont été rentrés
if (!isset ($_SESSION['LOGIN']) && !isset($_SESSION['PASS'] ) ) 
{
header("Location: Logins.php");
exit();		
} 
else
{
		//Ensuite, on regarde s'ils correspondent bien à ceux de la base
		if ($_SESSION['LOGIN']!=$_SESSION['LOGIN2']||$_SESSION['PASS']!=$_SESSION['PASS2'])
			{
			header("Location: Logins.php");
			exit();
			} 
		//On valide la page
		else {echo "Bienvenue " ;
				echo  $_SESSION['LOGIN'];}
} 


 		
?>


<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"><head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" >
<LINK rel= "stylesheet" type="text/css" href="<? echo $siteUrl . $europellier; ?>/script/style.css" >
<title>Interface</title>

</head>

<body>
<div align="center">
<? 

//Récupération des infomartions de la BDD
include("hotel/infos.php");

?>

<form  style="height:20px;margin:0;padding:0;"  method="POST" name="prixDate" action="" >

<!-- 2ème tableau des tarifs selon la date, variation des prix -->
<table align="center">
<tr><td  align="center">

<table style="font-size:17px; background-image:url(../image/interFond.gif); background-position: center; font-weight:bold; color: #990000;" border="1">
	<tr>
		<td style="font-size:18px" height="40" valign="top" align="center" colspan="2">
LES TARIFS SELON LES PERIODES  : 
		</td>
	</tr>
	<tr>
		<td >
			<img src="<? echo $siteUrl . $europellier; ?>/image/point2.gif" alt="" />
				DATE DE DEBUT :		
		</td>
		<td>		
				<input     style="margin:0;padding:0;"  type='text' size='10' value="JJ/MM/AAAA"  name='date1'>	
		</td>
	</tr>
		<tr>
		<td >
			<img src="<? echo $siteUrl . $europellier; ?>/image/point2.gif" alt="" />
				DATE DE FIN :		
		</td>
		<td>		
				<input     style="margin:0;padding:0;"  type='text' size='10' value="JJ/MM/AAAA"  name='date2'>	
		</td>
	</tr>
	<tr>
		<td>
Tarif public
		</td>
		<td>
<input type="text" name="tari0" value="<? echo "$price[0]"; ?>"  /><br>
		</td>
	</tr>
	<tr>
		<td>
1 personne (en semaine):
		</td>
		<td>
<input type="text" name="tari1" value="<? echo "$price[1]"; ?>"  /><br>
		</td>
	</tr>
	<tr>
		<td>
2 personne (en semaine)
		</td>
		<td>
<input type="text" name="tari2" value="<? echo "$price[2]"; ?>"  /><br>
		</td>
	</tr>
	<tr>
		<td>
3 personne (en semaine)
		</td>
		<td>
<input type="text" name="tari3" value="<? echo "$price[3]"; ?>"  /><br>
		</td>
	</tr>
	<tr>
		<td>
1 ou 2 personne (le Week end)
		</td>
		<td>
<input type="text" name="tari4" value="<? echo "$price[4]"; ?>"  /><br>
		</td>
	</tr>
	<tr>
		<td>
supp 3ème personne (le Week end)
		</td>
		<td>
<input type="text" name="tari5" value="<? echo "$price[5]"; ?>"  /><br>
		</td>
	</tr>
	<tr>
		<td>
Le Petit déjeuner:
		</td>
		<td>
<input type="text" name="tari6" value="<? echo "$price[6]"; ?>"  /><br>
		</td>
	</tr>
	<tr>
		<td align="center" colspan="2">
<input class="boutons" type="button" value="Retour" name="retour" id="retour" onClick="javascript:retourne()">
<input class="boutons" type="submit" value="Valider les changements" name="modif2" id="modif2">
		</td>
	</tr>
</table>


</td>

		<td valign="top" align="center" >
		<table style="background-image:url(../image/interFond.gif); background-position:center ; font-weight:bold; color: #990000" border="1">
	<tr>
		<td  height="40" valign="top" align="center" >
Les Promotions Flash
		</td>
	</tr>
<br><br>

<form method="post" name="conten" action="">


<? for($i=0;$i<$cptFlash;$i++)
{echo "<tr><td><Textarea rows='4' cols='45' style='margin:0;padding:0;text-align:justify'  name=\"indNom$i\" id=\"indexNom$i\" >$nomFlash[$i]</textarea></td></tr>";}
?>

<tr><td align="center">
<input class="boutons" type="button" value="Retour" name="retour" id="retour" onClick="javascript:retourne()">
<input class="boutons" type="submit" name="modif" id="modif" value="Valider les changements">
</td></tr>

</form>
</table>
<?
//Si on clike sur le bouton modifier
if (isset($_POST['modif'])) 
{
	//On va rentrer une promotion flash
	for ($i=0;$i<$cptFlash;$i++)
	{
	//--block--$requete="UPDATE eur_Flash Set nomFlash='${'indNom'.$i}' WHERE numFlash=$i";
	$result=mysqli_query($db, $requete);	
	} 

	?>
	
<script type="text/javascript">
window.location.href="TarifsPeriodes.php"</script>
<?
} ?>



<script type="text/javascript">
function retourne()
{
window.location.href="Contenu.php"
}
</script>
		</td></tr>



<script type="text/javascript">
function retourne()
{
window.location.href="Interface.php"
}
</script>

<?

 if (isset($_POST['modif2'])) 
{
// On convertit les dates
$explodeda1 = explode("/", $date1);
$explodeda2 = explode("/", $date2);

	//On insert ensuite les données dans la base de données selon le format MySQL	
	$requeto="INSERT INTO eur_Promotions ( `numProm` , `Pers1` , `Pers2` , `Pers3` , `Pers12` , `Supp3` , `Public` , `Petit` , `dateDebut` , `dateFin` )
			  VALUES ('', $tari1, $tari2, $tari3, $tari4, $tari5, $tari0,$tari6, '".$explodeda1[2]."-".$explodeda1[1]."-".$explodeda1[0]."' , '".$explodeda2[2]."-".$explodeda2[1]."-".$explodeda2[0]."' )";
	//$res=mysqli_query($db, $requeto) or die ("une erreur est surevenue") ; 

//On rafraichit la page pour afficher l'insertion ?>
<script type="text/javascript">
window.location.href="TarifsPeriodes.php";</script>
<?
}


?>
</form>
<br />
<tr><td colspan='2'>
<table align="center" border="1" >
	
<?
	// On va afficher les données par dates dans un tableau
	$requetito="select * FROM eur_Promotions ORDER BY numProm";
	$resultado=mysqli_query($db, $requetito);
	$cpt=0;
	//Titres des colonnes
	echo "<tr><td></td><td>Public </td><td>1 Personne(Sem.) </td><td> 2 Personnes (Sem.) </td> <td> 3 Personnes (Sem.) </td> <td> 1 ou 2 Pers (WE) </td> <td> Supp 3 pers. (WE) </td>  <td> Petit Dej </td> <td> Date Début </td> <td> Date Fin </td> <td> </tr> ";
	echo "<form name='suppression' method='POST' action=''>";
	while ($ligne = mysqli_fetch_object ($resultado))
	{ echo "<tr>";
	//Simple bouton de supression qui pointe vers $i
	echo "<td><input type='submit' name=\"supprim$cpt\" id='supprim' value='supprimer'></td>";
	// Va nous servir à pointer vers une ligne et ainsi supprimer les données de la ligne
	echo "<input type='hidden' name=\"supprimRecup$cpt\" id='supprim' value='".$ligne->numProm."'>";
	//On affiche notre table
	echo "<td align='center'> $ligne->Public</td> "  ; 
	echo "<td align='center'> $ligne->Pers1 </td> "  ; 	
	echo "<td align='center'> $ligne->Pers2</td> "  ; 	
	echo "<td align='center'> $ligne->Pers3</td> "  ;
	echo "<td align='center'> $ligne->Pers12</td> "  ; 	 	   
	echo "<td align='center'> $ligne->Supp3</td> "  ;
	echo "<td align='center'> $ligne->Petit</td> "  ; 	
	//Convertion de la date
	$convert1=explode("-",$ligne->dateDebut);
	$Debut="$convert1[2]/$convert1[1]/$convert1[0]";
	$convert2=explode("-",$ligne->dateFin);
	$Fin="$convert2[2]/$convert2[1]/$convert2[0]";
	echo "<td align='center'>$Debut</td> "  ; 
 	echo "<td align='center'>$Fin</td> "  ; 
	echo "</tr> \n";
	$cpt++;} 
	echo "</form>";
	
for ($i=0;$i<$cpt;$i++)
{ 
	if (isset ($_POST['supprim'.$i]))
	{
	// ON supprime à la ligne qui correspond à SupprimX la donnée de la variable SupprimRecup
	$requeta="DELETE FROM eur_Promotions WHERE numProm=${'supprimRecup'.$i}";
	//$resultada=mysqli_query($db, $requeta);
	//ON rafraichit pour réaficher ?>
	<script type="text/javascript">
	window.location.href="TarifsPeriodes.php";</script>
	<? }
	
	
}
	?>
	
</table>

</td></tr></table>
</div>
</body>