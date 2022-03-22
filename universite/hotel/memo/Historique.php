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
			else
			{
				if ( $_SESSION['AUTORISATION']!=1 )
				{
				header("Location: Interface.php");
				}
				//On valide la page
				else 
				{echo "Bienvenue " ;
				echo  $_SESSION['LOGIN'];}
			}
} 


 include("hotel/infos.php");  		
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"><head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" >
<LINK rel= "stylesheet" type="text/css" href="<? echo $siteUrl . $europellier; ?>/script/style.css" >
<title>Interface</title>

</head>

<body>
<div align="center">

<table style="background-image:url(../image/interFond.gif); background-position:center ; font-weight:bold; color: #990000" align="center" border="1" >
<tr><td align="center" colspan='4'>Gestion des Logins</td></tr>
<?
	$requet="select * FROM eur_Login ORDER by numLog";
	$resul=mysqli_query($db, $requet);
	$cptLog=0;
	
	//Titres des colonnes
	echo "<tr><td></td><td align='center'>Nom Login</td><td>Accessibilité</td><td> </td></tr> ";
	echo "<form name='suppression' method='POST' action=''>";
	while ($ligne = mysqli_fetch_object ($resul))
	{ echo "<tr>";
	//Simple bouton de supression qui pointe vers $cpt
	$temp=$ligne->numLog;
	echo "<td><input class='boutons' type='submit' name=\"supprim$temp\" id='supprim' value='supprimer'></td>";
	// Va nous servir à pointer vers une ligne et ainsi supprimer les données de la ligne
	echo "<input type='hidden' name=\"supprimRecup$temp\" id='supprim' value='".$ligne->numLog."'>";
	//On affiche notre table
	echo "<td align='center'> $ligne->Utilisateur</td> "  ;
	//On définit les priorités d'accès
	if ($ligne->numLogin==0 )echo "<td align='center'>Partielle </td> "  ; 
	if ($ligne->numLogin==1 )echo "<td align='center'>Totale</td> "  ; 
	 
		

	echo "</tr> \n";
	$cptLog++;
	$dernier=$ligne->numLog;} 
	echo "</form>";
	
for ($i=0;$i<=$dernier;$i++)
{ 
	if (isset ($_POST['supprim'.$i]))
	{
	// ON supprime à la ligne qui correspond à SupprimX la donnée de la variable SupprimRecup
	$requeta="DELETE FROM eur_Login WHERE numLog=${'supprimRecup'.$i}";
	//$resultada=mysqli_query($db, $requeta);
	//ON rafraichit pour réafichir ?>
	<script type="text/javascript">
	window.location.href="Historique.php";</script>
	<? }
		
}
?>
<tr><td height='20'></td></tr>

<tr>
<form method="POST" name="visite" action="">
<td>
<input class="boutons" type='submit' name='valid' id='valid' value="AJOUTER">
</td>
<td align='center'>
LOGINS :<br>
<input type='text' name='log'>
</td>


<td align='center'>
ACCES :<br>
<select style="margin:0;padding:0;"  name="prio">
<option  value="0">Partielle</option>
<option  value="1">Totale</option>
</select>
</td>

<td align='center'>
MOT DE PASSE :<br>
<input type='text' name='pass'>
</td>
</form>
<?
if (isset ($_POST['valid'] ) )
{
$mdp=md5($pass); // On crypte le mot de passe
//Oninsère les nouveaux paramètres
$requete="INSERT INTO `eur_Login` ( `numLogin` , `Utilisateur` , `Mdp` , `numLog` ) VALUES ('$prio', '$log', '$mdp', NULL)";
//$res=mysqli_query($db, $requete) or die ("une erreur est survenue") ;
?>
<script type="text/javascript">
	window.location.href="Historique.php";</script>
<? }




	?>
</td></tr>
</table>



</table>


<?
$moi = isset($_POST['moi']) ? $_POST['moi'] : 0;
$ann = isset($_POST['ann']) ? $_POST['ann'] : 0;

?>
<br><br>
<table style="background-image:url(../image/interFond.gif); background-position:center ; font-weight:bold; color: #990000" align="center" border="1" >
<tr><td align="center" valign="top" height="45" colspan='3'>
		
		<u>Historique des Visites sur l'interface :<u><br><br>
		<form name="visite" action="">
			<select style="margin:0;padding:0;" onChange="submit()" name="moi">
					<? 
					// On va afficher le nombre de chambre Disponible
					for ($i=1;$i<=12;$i++)
					{	
						if ($i==$moi) echo "<option value=\"$i\" SELECTED>$i</option>" ;
						else echo "<option  value=\"$i\">$i</option>" ;
					} 
					
					$annee=date("Y");
					
					?>
			</select>
			<select style="margin:0;padding:0;" onChange="submit()" name="ann">				
					<?			
					for ($i=$annee-10;$i<=$annee;$i++)
					{	
						if ($i==$ann) echo "<option value=\"$i\" SELECTED>$i</option>" ;
						else echo "<option  value=\"$i\">$i</option>" ;
					} 
					
					?>
			</select>
			</form>	
</td></tr>		
<?php

				
	// On va afficher les données par dates dans un tableau
	$requetito="select * FROM eur_Historique ORDER by dateHisto, heureHisto";
	$resultado=mysqli_query($db, $requetito);
	$cpt=0;
	
	//Titres des colonnes	
	echo "<tr ><td align='center'> Personnes </td><td align='center'>  Date de visite </td><td align='center'> Heure de visite  </td></tr>  ";

	while ($ligne = mysqli_fetch_object ($resultado))
	{
	$temp=$ligne->dateHisto;
	$dateBase=explode("-",$temp) ;

	if (strtotime("$dateBase[0]-$dateBase[1]-01")==strtotime("$ann-$moi-01") )
	{
		//On affiche notre table
		echo "<tr>";
		echo "<td width='100' align='center'> $ligne->nomHisto</td> "  ; 
		echo "<td  width='100' align='center'> $dateBase[2]/$dateBase[1]/$dateBase[0]</td> "  ; 	
		echo "<td  width='120' align='center'> $ligne->heureHisto</td> "  ;
		echo "</tr> \n";
	}
	$cpt++;} 
	?>
	<tr ><td colspan='3' valign="bottom" align="center">
<form method="post" name="retou" action="">
	<input class="boutons" type="button" value="Retour" name="retour" id="retour" onClick="javascript:retourne()">
</form>

<script type="text/javascript">
function retourne()
{
window.location.href="Interface.php"
}
</script>
</td></tr>
	
</table>
</div></body>