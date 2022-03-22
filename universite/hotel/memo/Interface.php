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
<!-- On affiche ensuite les tarifs -->

<br><br><br><br>
<table style="  background-image:url(<? echo $siteUrl . $europellier; ?>/image/interFond.gif); background-repeat:repeat-y"  cellpadding="0" cellspacing="O" border="1">
	<tr>
		<td>
		<img src="<? echo $siteUrl . $europellier; ?>/image/ban.gif" />
		</td>
	</tr>
	<tr>
		<td height="40"  align="center" >
		<a style="display:block; color:  #330099; font-weight:bold; " href="Dispo.php">LES DispoNIBILITES DES CHAMBRES</a>
		</td>
	</tr>
	
	<tr>
		<td height="40" align="center">
		<a style=" display:block; color: #330099; font-weight:bold; " href="TarifsFixes.php" >LES TARIFS FIXES (toute l'année)</a>
		</td>
	</tr>
	<tr>
		<td  height="40" align="center">
		<a style=" display:block; color: #330099; font-weight:bold; " href="TarifsPeriodes.php"> LES TARIFS SELON UNE PERIODE</a>
		</td>

	</tr>
	<? if ($_SESSION['AUTORISATION']==1)
	{
		echo "<tr><td  height='40' align='center'>" ;
		echo "<a style='display:block; color: #330099; font-weight:bold;' href='Contenu.php'> INTERFACE DE GESTION DU Contenu</a>";
		echo "</td></tr><tr>" ;
		echo "<td  height='40' align='center'>" ;
		echo "<a style='display:block; color: #330099; font-weight:bold; ' href='Historique.php'> GESTIONS DES LOGINS</a>" ;
		echo "</td></tr>" ;
	}
	?>
	
</table>

</div>
</body>