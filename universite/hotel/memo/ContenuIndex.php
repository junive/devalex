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

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"><head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" >
<LINK rel= "stylesheet" type="text/css" href="<? echo $siteUrl . $europellier; ?>/script/style.css" >
<title>Contenu Index</title>

</head>

<body>
<div align="center">
<? 

//Récupération des infomartions de la BDD
include("hotel/infos.php");

	$req="select * FROM eur_ContenuIndex ORDER BY numContIndex";
	$res=mysqli_query($db, $req);
	$ContIndex=array();
	$cpt4=0;
	
	while ($ligne = mysqli_fetch_object ($res))
	{
		$ContIndex[$cpt4]=$ligne->nomContIndex;
		$cpt4++;
	}

//$conte=explode("<table class='accueil' cellpadding='0' cellspacing='0'><tr><td height='40' align='top'><u>", $Cont[0]);
//$titre=explode("</u></td></tr><tr><td height='30'><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' />", $conte[1]);
//$Contenu=explode("</td></tr><tr><td height='30'><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' />", $Cont[0]);
//$proximite=explode("</td></tr><tr><td height='30'>", $Contenu[6]);

?>
<table style="background-image:url(../image/interFond.gif); background-position:center ; font-weight:bold; color: #990000" border="1">
	<tr>
		<td  height="40" valign="top" align="center" >
Page Principale :
		</td>
	</tr>
<br><br>

<form method="post" name="conten" action="">


<? for($i=0;$i<$cpt4;$i++)
{echo "<tr><td><input style='margin:0;padding:0;text-align:justify' type='text' value=\"$ContIndex[$i]\" name=\"indNom$i\" id=\"indexNom$i\" size='60'></td></tr>";}
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
	for ($i=0;$i<$cpt4;$i++)
	{
	//--block--$requete="UPDATE eur_ContenuIndex Set nomContIndex='${'indNom'.$i}' WHERE numContIndex=$i";
	$result=mysqli_query($db, $requete);
	
	} 
	
	////--block--$requet="UPDATE eur_ContenuIndex Set nomContIndex=$indNom0 WHERE numContIndex=0";
	//$result=mysqli_query($db, $requet);
	?>
	
<script type="text/javascript">
window.location.href="ContenuIndex.php"</script>
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
