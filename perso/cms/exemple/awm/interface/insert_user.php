<?php include(realpath(__DIR__ . '/..') . "/functions/include1.php"); ?>

<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>
<html xmlns='http://www.w3.org/1999/xhtml' xml:lang='fr' lang='fr'>
<head>
<meta http-equiv='Content-Type' content='text/html; charset =iso-8859-1' />
<link rel='stylesheet' type='text/css' href="../themes/default/style.css" />
<title>Interface des utilisateurs</title>

</head>

<body>

<?

$ctrl = new ControlView(TAB_USER);
$ctrl = new ControlView(TAB_HIST);

 /*
 <div align="center">
<table style="background-position:center ; font-weight:bold; color: #990000" align="center" border="1" >
	<tr><td align="center" colspan='4'>Gestion des Logins</td></tr>
<?

	$acs = new ControlAccess();
	$rsp = new ControlResponse(TAB_USER);
	$pan = new Panel();
	$res_user = $acs->get_all_user();
	$ann = (isset($ann)) ? $ann : 0;
	$moi = (isset($moi)) ? $moi : 0;
	
	//Titres des colonnes
	echo "<tr><td></td><td align='center'>Nom Login</td><td>Accessibilité</td><td> </td></tr> ";
	echo "<form name='suppression' method='POST' action=''>";
	while ($line = mysqli_fetch_object ($res_user)) { 
		echo "<tr>";
		$pan->set_tab_index(array($line->user_id));
		$pan->get_pan_del();
		echo "<td align='center'> $ligne->user_name</td> "  ;
		if ($line->user_nivel == 0)echo "<td align='center'>Partielle </td> "  ; 
		else if ($line->user_nivel == 1)echo "<td align='center'>Totale</td> "  ; 
		echo "</tr> \n";

	} 
	$pan->get_pan_hidden(PUT1);
	echo "</form>";



?>
<tr><td height='20'></td></tr>

<tr>
<form method="POST" name="visite" action="">
<td>

</td>
<td align='center'>
LOGINS :<br>
<? echo "<input type='text' name='". TXT . ADD ."'>"; ?>
</td>


<td align='center'>
ACCES :<br>
<? $pan->get_pan_select_two("Partielle", "Totale"); ?>
</td>

<td align='center'>
MOT DE PASSE :<br>
<? echo "<input type='text' name='". TXT . MOD ."'>"; ?>
</td>
<? $pan->get_pan_sub_name("Ajouter user", ADD); ?>

</form>
</td></tr>
</table>



</table>


<br><br>
<table style="background-image:url(../../Montpell/image/interFond.gif); background-position:center ; font-weight:bold; color: #990000" align="center" border="1" >
<tr><td align="center" valign="top" height="45" colspan='3'>
		
		Historique des Visites sur l'interface :<br><br>
		<form name="visite" action="">
			<select style="margin:0;padding:0;" onChange="submit()" name="moi">
					<? 
					for ($i=1;$i<=12;$i++) {	
						if ($i==$moi) echo "<option value=". $i ." SELECTED>". $i ."</option>" ;
							else echo "<option  value=". $i .">". $i ."</option>" ;
					} 
					
					$annee = date("Y");
					
					?>
			</select>
			<select style="margin:0;padding:0;" onChange="submit()" name="ann">				
					<?			
					for ($i = $annee-10 ; $i <= $annee ; $i++) {	
						if ($i == $ann) echo "<option value=". $i ." SELECTED>". $i ."</option>" ;
							else echo "<option  value=". $i .">". $i ."</option>" ;
					} 
					
					?>
			</select>
			</form>	
</td></tr>		
<?php
				
	// On va afficher les données par dates dans un tableau
	$res_his = $acs->get_all_history();
	$cpt=0;
	
	//Titres des colonnes	
	echo "<tr ><td align='center'> Personnes </td><td align='center'>  Date de visite </td><td align='center'> Heure de visite  </td></tr>  ";

	while ($line = mysqli_fetch_object ($res_his)) {
	$temp = $line->his_date;
	$date_base = explode("-",$temp) ;

		if (strtotime("$date_base[0]-$date_base[1]-01") == strtotime("$ann-$moi-01") ) {
			echo "<tr>";
			echo "<td width='100' align='center'>". $line->user_name ."</td>";
			echo "<td  width='100' align='center'> ". $date_base[2] ."/". $date_base[1] ."/". $date_base[0] ."</td>"; 	
			echo "<td  width='120' align='center'> ". $line->his_hour ."</td> "  ;
			echo "</tr> \n";
		}
	} 
	
	$rsp->execute_request(PUT1);
	// mysql_close();
	
	
	?>
	<tr ><td colspan='3' valign="bottom" align="center">
<form method="post" name="retou" action="">
	<input class="boutons" type="button" value="Retour" name="retour" id="retour" onClick="javascript:retourne()">
</form>

<script type="text/javascript">
function retourne() {
	window.location.href="../index.php"
}
</script>
</td></tr>
	
</table></div> */ ?>
</body></html>