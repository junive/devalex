<?

include_once("../../../../setting.php") ;
$select = 1;
if (isset($_GET['id'])) { $select = $_GET['id']; }


$lien="select * from psx_votes where num=".$select;
$resu=mysqli_query($db, $lien);
$lignes = mysqli_fetch_object ($resu);
$clics=$lignes->clic;
$nom=$lignes->nom;
$taille=$lignes->Taille;
$moyenne=$lignes->moyenne;
$total=$lignes->total;
$votants=$lignes->votants;
$redirect=$lignes->url;
$down=$lignes->down;
?>