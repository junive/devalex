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
				// Si le niveau de priorité n'est pas suffisant
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
<title>Contenu Chambre</title>
</head>

<body>
<div align="center">
<? include("hotel/infos.php"); ?>
<table style="background-image:url(../image/interFond.gif); background-position:center ; font-weight:bold; color: #990000" border="1">
	<tr>
		<td  height="40" valign="top" align="center" >
Page des Chambres
		</td>
	</tr><br><br>
<form method="post" name="conten" action="">

<? // on affiche les champs dde chaque ligne de la page des chambres tant qu'on arrive pas à la dernière
for($i=0;$i<$cptChambre;$i++)
{echo "<tr><td><input style='margin:0;padding:0;text-align:justify' type='text' value=\"$ContChambre[$i]\" name=\"indNom$i\" id=\"indexNom$i\" size='60'></td></tr>";}
?>

<tr><td align="center">
<input class="boutons" type="button" value="Retour" name="retour" id="retour" onClick="javascript:retourne()">
<input class="boutons" type="submit" name="modif" id="modif" value="Valider les changements">
</td></tr>

</form>
</table>
<?
//Si on clike sur le bouton valider
if (isset($_POST['modif'])) 
{
	//On met à jour la base de données avec le nouveau texte
	for ($i=0;$i<$cptChambre;$i++)
	{
	//--block--$requete="UPDATE eur_ContenuChambre Set nomContChambre='${'indNom'.$i}' WHERE numContChambre=$i";
	$result=mysqli_query($db, $requete);
	
	} 
	?>
	
<script type="text/javascript">
// On redirige sur la page, pour réafficher les changements
window.location.href="ContenuChambre.php"</script>
<?
} ?>

<script type="text/javascript">
function retourne()
{window.location.href="Contenu.php"}</script>
</div></body>
