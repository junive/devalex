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

//Date du jour
$jour=date("d");
$mois=date("m");
$annee=date("Y");
?>
<form method="post" name="Remplie" Action=''>
Nombre Maximum de dispnibilités à mettre sur tous les jours :<input value="5" type="text" size="3" name="nombreDispo" />
<input class="boutons"  type="submit" value="Valider les changements" name="modif" id="modif"><br />
</form>
<?


	//On récupère toutes nos dates
	$requ="select * FROM eur_Dispo";
	$result=mysqli_query($db, $requ);
	$dateDispo=array();
	$cptDispo=0;
	
	//On stocke le tout dans des tableaux (entier et décimal)
	while ($ligne = mysqli_fetch_object ($result))
	{
		$dateDispo[$cptDispo]=$ligne->dateDispo;
		$cptDispo++;
	} 
if (isset($_POST['modif'])) 
{
	//On boucle sur un an
	for($a=0;$a<3;$a++)
	{	
		$dr=0; // Variable pour repérer nos dates
		// Onboucle sur 12 mois
		for($m=1;$m<=12;$m++)
		{
			
			$d=1; // Variable de nos jours
			//Enfin on boucle sur un mois
			$temp=$annee+$a;
			while (  ( mktime(0 , 0 , 0 , $m , $d , $temp)- mktime(0 , 0 , 0 , $m+1 , 1 , $temp) ) < 0 )
			{
			// Ensuite on insère un an de calendrier
			
			$requeto="INSERT INTO eur_Dispo ( `numDispo` , `dateDispo` , `nbDispo`  ) VALUES ('', '".$temp."-".$m."-".$d."' , '$nombreDispo' )";
			$res=mysqli_query($db, $requeto) or die ("une erreur est surevenue") ; 
			
			// Et on retire l'année qui vient de s'écouler (du 01/01/YYYY au 31/12/YYYY)
			//$requet="DELETE FROM eur_Dispo WHERE dateDispo='$dateDispo[$dr]'";
			//$resu=mysqli_query($db, $requet) or die ("une erreur est surevenue") ;
			//$dr++;
			$d++;
			}
		}
	}
echo "<br>Base de données Remplie<br>" ;
echo "Retourner aux Disponibilités en cliquant sur le lien :<br> <a href='Dispo.php'> Retour aux Disponibilités</a>";
}

?>