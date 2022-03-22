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


 		
?>

 		
?>


<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"><head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" >
<LINK rel= "stylesheet" type="text/css" href="<? echo $siteUrl . $europellier; ?>/script/style.css" >
<title>Contenu Visitez Montpellier</title>

</head>

<body>
<div align="center">
<? 

include("hotel/infos.php");
	


?>
<table style="background-image:url(../image/interFond.gif); background-position:center ; font-weight:bold; color: #990000" border="1">
	<tr>
		<td  height="40" valign="top" align="center" >
Page Visitez Montpellier
		</td>
	</tr>
<br><br>

<form method="post" name="conten" action="">


<? for($i=0;$i<$cptVisite;$i++)
{echo "<tr><td><input style='margin:0;padding:0;text-align:justify' type='text' value=\"$ContVisite[$i]\" name=\"indNom$i\" id=\"indexNom$i\" size='60'></td></tr>";}
?>

<tr><td align="center">
<input class="boutons" type="button" value="Retour" name="retour" id="retour" onClick="javascript:retourne()">
<input class="boutons" type="submit" name="modif" id="modif" value="Valider les changements">
</td></tr>

</form>
</table>
<?
if (isset($_POST['modif'])) 
{
	for ($i=0;$i<$cptVisite;$i++)
	{
	
	//--block--$requete="UPDATE eur_ContenuVisite Set nomContVisite='${'indNom'.$i}' WHERE numContVisite=$i";
	$result=mysqli_query($db, $requete);
	
	} 
	
	////--block--$requet="UPDATE eur_ContenuIndex Set nomContIndex=$indNom0 WHERE numContIndex=0";
	//$result=mysqli_query($db, $requet);
	?>
	
<script type="text/javascript">
window.location.href="ContenuVisite.php"</script>
<?
} ?>



<script type="text/javascript">
function retourne()
{
window.location.href="Contenu.php"
}
</script>
</div>
</body>
