<? session_start() ;
ini_set('display_errors','on');
error_reporting(E_ALL);

include_once("../../../../setting.php");
include_once("functions_connect.php"); ?>

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
$msg="";
//On vérifie que l'utilisateur clique sur "valider"
 if (isset($_POST['valid'])) 
{

//Requete d'accès à la base de données pour vérifier login et mot de passer
$req_log="select * from gor_interface_login";

//Connexion à la base
connect_base($req_log);
$res_log = mysqli_query($db, $req_log) or die ("error of request to data");

	$boolVerif=false;
	while ($ligne = mysqli_fetch_object ($res_log))
	{
		// On stocke le login et mot de passe dans une "session", pour garder connecter dans toute l'interface
		if ($ligne->user==$_POST['Log']&&$ligne->mdp==md5($_POST['Pass']))
		{
		$_SESSION['LOGIN'] = $_POST['Log'];
		$_SESSION['PASS'] = md5($_POST['Pass']); 
		$_SESSION['LOGIN2'] = $ligne->user;
		$_SESSION['PASS2'] = $ligne->mdp; 
		$_SESSION['AUTORISATION']= $ligne->nivel;
		
		//On stocke les informations concernant l'utilisateur (sonlogin,sa date de connexion, etc...)
		$req_histo="INSERT INTO `gor_interface_history` ( `id_history` , `user_h` , `date_h` , `hour_h` ) VALUES (NULL , '$ligne->user', '".date('Y-n-d')."', '".date('H:i:s')."')";
		mysqli_query($db, $req_histo) or die ("erreur d'insertion dans l'historique");
		
		//Si tout est ok, on redirige :
		?>
			<script type="text/javascript">
			window.location.href="interface_menu.php";</script>
		<?
		}
		else
		{
		//On affiche un message d'erreur si les logins ne sont pas bons
		$msg="Login ou mot de passe incorrect";
		
		}
	
	}
// mysql_close();
}

echo "<br><br>$msg";
?>

</form>
</div>
</body>




