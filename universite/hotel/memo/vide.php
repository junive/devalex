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




include("hotel/infos.php");




			$requeto="TRUNCATE TABLE Dispo";
			$res=mysqli_query($db, $requeto) or die ("une erreur est surevenue") ; 
			
echo "<br>Base de données Vidée" ;
echo "<br>Il faut maintenant la ReRemplir, Veuillez cliquer sur ce lien :";
echo "<br><a href='remplie.php'>Reremplir la base</a>	";



?>