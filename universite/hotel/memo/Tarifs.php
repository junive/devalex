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

	// On sélectionne les tarifs et les stocke dans un tableau
	$lien="select * FROM eur_Tarifs";
	$resu=mysqli_query($db, $lien);
	$tarif=array();$personnes=array();
	$cpt=0;
	while ($ligne = mysqli_fetch_object ($resu))
	{$tarif[$cpt]= $ligne->prix;
	$personnes[$cpt]=$ligne->nomTarifs;
	$cpt++;}

						
?>
<!-- On affiche ensuite les tarifs -->

<form method="post" name="tarifs" action="Interface.php">
<table>
	<tr>
		<td height="40" valign="top" align="center" colspan="2">
LES TARIFS : 
		</td>
	</tr>
	
	<tr>
		<td>

tarif public :
		</td>
		<td>
<input type="text" name="tar0" value="<? echo "$tarif[0]"; ?>"  /><br>
		</td>
	</tr>
	<tr>
		<td>
1 personne (en semaine):
		</td>
		<td>
<input type="text" name="tar1" value="<? echo "$tarif[1]"; ?>"  /><br>
		</td>
	</tr>
	<tr>
		<td>
2 personne (en semaine)
		</td>
		<td>
<input type="text" name="tar2" value="<? echo "$tarif[2]"; ?>"  /><br>
		</td>
	</tr>
	<tr>
		<td>
3 personne (en semaine)
		</td>
		<td>
<input type="text" name="tar3" value="<? echo "$tarif[3]"; ?>"  /><br>
		</td>
	</tr>
	<tr>
		<td>
1 ou 2 personne (le Week end)
		</td>
		<td>
<input type="text" name="tar4" value="<? echo "$tarif[4]"; ?>"  /><br>
		</td>
	</tr>
	<tr>
		<td>
supp 3ème personne (le Week end)
		</td>
		<td>
<input type="text" name="tar5" value="<? echo "$tarif[5]"; ?>"  /><br>
		</td>
	</tr>
	<tr>
		<td>
Le Petit déjeuner:
		</td>
		<td>
<input type="text" name="tar6" value="<? echo "$tarif[6]"; ?>"  /><br>
		</td>
	</tr>
	<tr>
		<td align="center" colspan="2">
<input  type="submit" value="Valider les changement" name="modif" id="modif">
		</td>
	</tr>
</table>

<?
// On vérifie que l'utilisateur clique sur "Valider"
if (isset($_POST['modif'])) 
{
	// On met à jour les prix dans la base
	for ($i=0;$i<$cpt;$i++)
	{
	//--block--$requet="UPDATE eur_Tarifs Set prix=${'tar'.$i} WHERE numTarifs=$i";
	$result=mysqli_query($db, $requet);
	}
//On rafraichit la page pour afficher les nouveaux tarifs ?>
<script type="text/javascript">
window.location.href="Interface.php";</script>
<?
} ?>

<script type="text/javascript">
function retourne()
{
window.location.href="Interface.php"
}

<br>
<form  style="height:20px;margin:0;padding:0;"  method="POST" name="prixDate" action="" >

<!-- 2ème tableau des tarifs selon la date, variation des prix -->
<table>
	<tr>
		<td height="40" valign="top" align="center" colspan="2">
LES TARIFS SELON LES PERIODES  : 
		</td>
	</tr>
	<tr>
		<td >
			<img src="<? echo $siteUrl . $europellier; ?>/image/point2.gif" alt="" />
				Date de début :		
		</td>
		<td>		
				<input     style="margin:0;padding:0;"  type='text' size='10' value="JJ/MM/AAAA"  name='date1'>	
		</td>
	</tr>
		<tr>
		<td >
			<img src="<? echo $siteUrl . $europellier; ?>/image/point2.gif" alt="" />
				Date de Fin :		
		</td>
		<td>		
				<input     style="margin:0;padding:0;"  type='text' size='10' value="JJ/MM/AAAA"  name='date2'>	
		</td>
	</tr>
	<tr>
		<td>
tarif public :
		</td>
		<td>
<input type="text" name="tari0" value="<? echo "$tarif[0]"; ?>"  /><br>
		</td>
	</tr>
	<tr>
		<td>
1 personne (en semaine):
		</td>
		<td>
<input type="text" name="tari1" value="<? echo "$tarif[1]"; ?>"  /><br>
		</td>
	</tr>
	<tr>
		<td>
2 personne (en semaine)
		</td>
		<td>
<input type="text" name="tari2" value="<? echo "$tarif[2]"; ?>"  /><br>
		</td>
	</tr>
	<tr>
		<td>
3 personne (en semaine)
		</td>
		<td>
<input type="text" name="tari3" value="<? echo "$tarif[3]"; ?>"  /><br>
		</td>
	</tr>
	<tr>
		<td>
1 ou 2 personne (le Week end)
		</td>
		<td>
<input type="text" name="tari4" value="<? echo "$tarif[4]"; ?>"  /><br>
		</td>
	</tr>
	<tr>
		<td>
supp 3ème personne (le Week end)
		</td>
		<td>
<input type="text" name="tari5" value="<? echo "$tarif[5]"; ?>"  /><br>
		</td>
	</tr>
	<tr>
		<td>
Le Petit déjeuner:
		</td>
		<td>
<input type="text" name="tari6" value="<? echo "$tarif[6]"; ?>"  /><br>
		</td>
	</tr>
	<tr>
		<td align="center" colspan="2">
<input  type="submit" value="Valider les changement" name="modif2" id="modif2">
		</td>
	</tr>
</table>
<?

 if (isset($_POST['modif2'])) 
{
// On convertit les dates
$explodeda1 = explode("/", $date1);
$explodeda2 = explode("/", $date2);

	//On insert ensuite les données dans la base de données selon le format MySQL	
	$requeto="INSERT INTO eur_Promotions ( `numProm` , `Pers1` , `Pers2` , `Pers3` , `Pers12` , `Supp3` , `Public` , `Petit` , `dateDebut` , `dateFin` )
			  VALUES ('', $tari1, $tari2, $tari3, $tari4, $tari5, $tari0,$tari6, '".$explodeda1[2]."-".$explodeda1[1]."-".$explodeda1[0]."' , '".$explodeda2[2]."-".$explodeda2[1]."-".$explodeda2[0]."' )";
	$res=mysqli_query($db, $requeto) or die ("une erreur est surevenue") ; 

//On rafraichit la page pour afficher l'insertion ?>
<script type="text/javascript">
window.location.href="Interface.php";</script>
<?
}


?>
</form>
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
	$resultada=mysqli_query($db, $requeta);
	//ON rafraichit pour réaficher ?>
	<script type="text/javascript">
	window.location.href="Interface.php";</script>
	<? }
	
	
}
	?>
	
</table>

</div>
</body>