<? 

include("infos.php") ;

$clics+=1;
$req="update psx_votes set clic=$clics where num=". $_GET["id"];
$res=mysqli_query($db, $req) or die ("requete invalide up compt");

{header("Location: ". $siteUrl . $emuPsxV4 ."/emulateurs_playstation/redir.php?redirection=".$siteUrl . $emuPsxV4 .$down);}	
?>

