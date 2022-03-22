<?
//include($_SERVER['DOCUMENT_ROOT'] . $parentFold . $emuPsxV4 ."/emulateurs_playstation/connect_visite.php") ;

$lien="select * from psx_visiteurs where numa='1'";
$resu=mysqli_query($db, $lien);
$lignes = mysqli_fetch_object ($resu);

$vis=$lignes->visite;
$page=$lignes->pages;
$titi=$_SERVER['PHP_SELF'];

if ($titi=="/index.php")
{ $vis++;
$req="update visiteurs set visite=$vis ";
$res=mysqli_query($db, $req);
}

$page++;
$req="update visiteurs set pages=$page ";
$res=mysqli_query($db, $req);

?>