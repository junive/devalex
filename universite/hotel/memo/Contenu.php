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
<title>Interface</title>

</head>

<body>
<div align="center">
<table>
<tr><td  valign="top" align="center">
<table style="background-image:url(../image/interFond.gif); background-position:center ; font-weight:bold; color: #990000" border="1">
<form method="post" name="conten" action="">	
		<tr>
		<td height="40" valign="middle" align="center" >
Contenu DES PAGES :
		</td>
	</tr>
	
	<tr>
		<td valign="top" align="center" >
<a href="ContenuIndex.php">Page Principale Index</a>
		</td>
	</tr>
	<tr>
		<td valign="top" align="center" >
<a href="ContenuChambre.php">Les Chambres</a>
		</td>
	</tr>
	<tr>
		<td valign="top" align="center" >
<a href="ContenuRestau.php">Le restaurant</a>
		</td>
	</tr>
	<tr>
		<td valign="top" align="center" >
<a href="ContenuPetit.php">Petit Déjeuner</a>
		</td>
	</tr>
	
	<tr>
		<td valign="top" align="center" >
<a href="ContenuHoraire.php">Les horaires</a>
		</td>
	</tr>
	
		<tr>
		<td valign="top" align="center" >
<a href="ContenuService.php">Les services</a>
		</td>
	</tr>
	<tr>
		<td valign="top" align="center" >
<a href="ContenuProximite.php">A proximite</a>
		</td>
	</tr>
		<tr>
		<td valign="top" align="center" >
<a href="ContenuContact.php">Contact</a>
		</td>
	</tr>
			<tr>
		<td valign="top" align="center">
<a href="ContenuVisite.php">Visitez Montpellier</a>
		</td>
	</tr>
		<tr>
		<td valign="top" height="20" align="center" >

		</td>
	</tr>
	<tr>
		<td valign="top" align="center" >
<a href="ContenuEng.php">Contenu Anglais</a>
		</td>
	</tr>




	<tr>
		<td valign="bottom" align="center">
		
<input style="margin:0;padding:0;" class="boutons" type="button" value="Retour" name="retour" id="retour" onClick="javascript:retourne()">

		</td>
	</tr>
	</form>
</table>

</td>
<td  valign="top" align="center">

<table style="background-image:url(../image/interFond.gif); background-position:center ; font-weight:bold; color: #990000" border="1">
<tr>
		<td height="40" valign="middle" align="center" >
		
		</td>
</tr>


<tr>
		<td valign="top" align="center" >
		<a href="ContenuTar.php">Les tarifs encadrés</a>
		</td>
</tr>
<tr>
		<td valign="top" align="center" >
		<a href="ContenuAdresse.php">L'adresse encadré</a>
		</td>
</tr>

	<tr>
		<td valign="top" height="20" align="center" >

		</td>
	</tr>
<tr>
		<td valign="top" align="center" >
		<a href="ContenuDescrip.php">La description du site <br> (pour les moteurs de recherches)</a>
		</td>
</tr>

<tr>
		<td valign="top" align="center" >
		<a href="ContenuConditions.php">Les conditions générales <br>(carte bancaire)</a>
		</td>
</tr>
</table>

</td></tr></table>


<script type="text/javascript">
function retourne()
{
window.location.href="Interface.php"
}
</script>
</div>
</body>
