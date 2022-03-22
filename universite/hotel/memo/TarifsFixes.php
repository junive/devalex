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
/*	$lien="select * FROM eur_Tarifs";
	$resu=mysqli_query($db, $lien);
	$tarif=array();$personnes=array();
	$cpt=0;
	while ($ligne = mysqli_fetch_object ($resu))
	{$tarif[$cpt]= $ligne->prix;
	$personnes[$cpt]=$ligne->nomTarifs;
	$cpt++;}
*/
						
?>
<!-- On affiche ensuite les tarifs -->

<form method="post" name="tarifs" action="TarifsFixes.php">
<table style="background-image:url(../image/interFond.gif); background-position:center ; font-weight:bold; color: #990000" border="1">
	<tr>
		<td  height="40" valign="top" align="center" colspan="2">
LES TARIFS FIXES: 
		</td>
	</tr>
	
	<tr>
		<td>

Tarif public :
		</td>
		<td>
<input type="text" name="tar0" value="<? echo "$price[0]"; ?>"  /><br>
		</td>
	</tr>
	<tr>
		<td>
1 personne (en semaine):
		</td>
		<td>
<input type="text" name="tar1" value="<? echo "$price[1]"; ?>"  /><br>
		</td>
	</tr>
	<tr>
		<td>
2 personne (en semaine)
		</td>
		<td>
<input type="text" name="tar2" value="<? echo "$price[2]"; ?>"  /><br>
		</td>
	</tr>
	<tr>
		<td>
3 personne (en semaine)
		</td>
		<td>
<input type="text" name="tar3" value="<? echo "$price[3]"; ?>"  /><br>
		</td>
	</tr>
	<tr>
		<td>
1 ou 2 personne (le Week end)
		</td>
		<td>
<input type="text" name="tar4" value="<? echo "$price[4]"; ?>"  /><br>
		</td>
	</tr>
	<tr>
		<td>
supp 3ème personne (le Week end)
		</td>
		<td>
<input type="text" name="tar5" value="<? echo "$price[5]"; ?>"  /><br>
		</td>
	</tr>
	<tr>
		<td>
Le Petit déjeuner:
		</td>
		<td>
<input type="text" name="tar6" value="<? echo "$price[6]"; ?>"  /><br>
		</td>
	</tr>
	<tr>
		<td align="center" colspan="2">
<input class="boutons" type="button" value="Retour" name="retour" id="retour" onClick="javascript:retourne()">
<input class="boutons"  type="submit" value="Valider les changements" name="modif" id="modif">
		</td>
	</tr>
</table>
</form>
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
window.location.href="TarifsFixes.php"</script>
<?
} ?>


<script type="text/javascript">
function retourne()
{
window.location.href="Interface.php"
}


</script>

<br>




</div>
</body>