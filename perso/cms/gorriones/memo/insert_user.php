<? session_start() ;
include_once("functions_session.php");
check_user_all(); ?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"><head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" >
<LINK rel= "stylesheet" type="text/css" href="/script/style.css" >
<title>Interface des utilisateurs</title>

</head>

<body>
<div align="center">

<table style="background-image:url(../../Montpell/image/interFond.gif); background-position:center ; font-weight:bold; color: #990000" align="center" border="1" >
	<tr><td align="center" colspan='4'>Gestion des Logins</td></tr>
<?
include_once("functions_request.php");

	connect_base();
	$req_log="select * from gor_interface_login ORDER by id_login";
	$resul=mysqli_query($db, $req_log) or die("error 1");
	$cptLog=0;
	
	//Titres des colonnes
	echo "<tr><td></td><td align='center'>Nom Login</td><td>Accessibilité</td><td> </td></tr> ";
	echo "<form name='suppression' method='POST' action=''>";
	while ($ligne = mysqli_fetch_object ($resul))
	{ echo "<tr>";
	//Simple bouton de supression qui pointe vers $cpt
	$temp=$ligne->id_login;
	echo "<td><input class='boutons' type='submit' name=\"supprim$temp\" id='supprim' value='supprimer'></td>";
	// Va nous servir à pointer vers une ligne et ainsi supprimer les données de la ligne
	echo "<input type='hidden' name=\"supprimRecup$temp\" id='supprim' value='".$ligne->id_login."'>";
	//On affiche notre table
	echo "<td align='center'> $ligne->user</td> "  ;
	//On définit les priorités d'accès
	if ($ligne->nivel==0 )echo "<td align='center'>Partielle </td> "  ; 
	else if ($ligne->nivel==1 )echo "<td align='center'>Totale</td> "  ; 

	echo "</tr> \n";
	$cptLog++;
	$dernier=$ligne->id_login;} 
	echo "</form>";
	
for ($i=0;$i<=$dernier;$i++) { 
	if (isset ($_POST['supprim'.$i])) {
	// ON supprime à la ligne qui correspond à SupprimX la donnée de la variable SupprimRecup
	$requeta="DELETE FROM gor_interface_login WHERE id_login=${'supprimRecup'.$i}";
	$resultada=mysqli_query($db, $requeta);
	//ON rafraichit pour réafichir ?>
	<script type="text/javascript">
	window.location.href="insert_user.php";</script>
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
if (isset ($_POST['valid'] ) ) {
	$mdp=md5($pass); // On crypte le mot de passe
	connect_base(); // On insère les nouveaux paramètres
	$requete="INSERT INTO `gor_interface_login` ( `id_login` , `user` , `mdp` , `nivel` ) VALUES ('', '$log', '$mdp', '$prio')";
	mysqli_query($db, $requete) or die ("une erreur est survenue") ;
?>
<script type="text/javascript">
	window.location.href="insert_user.php";</script>
<? } ?>
</td></tr>
</table>



</table>


<br><br>
<table style="background-image:url(../../Montpell/image/interFond.gif); background-position:center ; font-weight:bold; color: #990000" align="center" border="1" >
<tr><td align="center" valign="top" height="45" colspan='3'>
		
		<u>Historique des Visites sur l'interface :<u><br><br>
		<form name="visite" action="">
			<select style="margin:0;padding:0;" onChange="submit()" name="moi">
					<? 
					// On va afficher le nombre de chambre disponible
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
	$requetito="select * from gor_interface_history ORDER by date_h, hour_h";
	$resultado=mysqli_query($db, $requetito);
	$cpt=0;
	
	//Titres des colonnes	
	echo "<tr ><td align='center'> Personnes </td><td align='center'>  Date de visite </td><td align='center'> Heure de visite  </td></tr>  ";

	while ($ligne = mysqli_fetch_object ($resultado))
	{
	$temp=$ligne->date_h;
	$date_base=explode("-",$temp) ;

	if (strtotime("$date_base[0]-$date_base[1]-01")==strtotime("$ann-$moi-01") ) {
		//On affiche notre table
		echo "<tr>";
		echo "<td width='100' align='center'> $ligne->user_h</td> "  ; 
		echo "<td  width='100' align='center'> $date_base[2]/$date_base[1]/$date_base[0]</td> "  ; 	
		echo "<td  width='120' align='center'> $ligne->hour_h</td> "  ;
		echo "</tr> \n";
	}
	$cpt++;
	} 
	// mysql_close();
	?>
	<tr ><td colspan='3' valign="bottom" align="center">
<form method="post" name="retou" action="">
	<input class="boutons" type="button" value="Retour" name="retour" id="retour" onClick="javascript:retourne()">
</form>

<script type="text/javascript">
function retourne()
{
window.location.href="menu.php"
}
</script>
</td></tr>
	
</table>
</div></body>