<? session_start() ;

include("hotel/infos.php"); ?>

<body>
<div align="center">
<br><br><br><br>
Entrée dans l'Interface : <br><br>
Nom d'utilisateur :<br>
<form method="post" name="entree" action="">
<input type="text" name="Log" /><br />
Mot de passe :<br>
<input type="password"  name="Pass" /><br />
<input type="submit" name="valid" id="valid" Value="Valider"/>

<? 
$msg = "";
$Log = isset($_POST['Log']) ? $_POST['Log'] : "";;
$Pass = isset($_POST['Pass']) ? $_POST['Pass'] : "";
//On vérifie que l'utilisateur clique sur "valider"
 if (isset($_POST['valid'])) 
{

//Requete d'accès à la base de données pour vérifier login et mot de passer
$requeteLog="select * FROM eur_Login";
$resultatLog=mysqli_query($db, $requeteLog) or die ("erreur");

	$boolVerif=false;
	while ($ligne = mysqli_fetch_object ($resultatLog))
	{
		// On stocke le login et mot de passe dans une "session", pour garder connecter dans toute l'interface
		if ($ligne->Utilisateur==$Log&&$ligne->Mdp==md5($Pass))
		{
		$_SESSION['LOGIN'] = $Log;
		$_SESSION['PASS'] = md5($Pass); 
		$_SESSION['LOGIN2'] = $ligne->Utilisateur;
		$_SESSION['PASS2'] = $ligne->Mdp; 
		$_SESSION['AUTORISATION']= $ligne->numLogin;
		
		//On stocke les informations concernant l'utilisateur (sonlogin,sa date de connexion, etc...)
		$requete="INSERT INTO `eur_Historique` ( `numHisto` , `nomHisto` , `dateHisto` , `heureHisto` ) VALUES (NULL , '$ligne->Utilisateur', '".date('Y-n-d')."', '".date('H:i:s')."')";
		$resultat=mysqli_query($db, $requete) or die ("erreur d'insertion dans l'historique");
		
		//Si tout est ok, on redirige :
		?>
		<script type="text/javascript">
		window.location.href="Interface.php";</script>
		<?
		}
		else
		{
		//On affiche un message d'erreur si les logins ne sont pas bons
		$msg="Login ou mot de passe incorrect";
		
		}
	
	}

}
echo "<br><br>$msg";
?>

</form>
</div>
</body>
