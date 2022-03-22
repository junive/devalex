<?php require_once('searchYt.php'); 

$yt = new youTube;

//On retourne les vidéo de la page d'accueil de Youtube
if ($_POST["type"]==0)
{
	$inf= $yt->yt_featured("tozPhNrfbkE", 10);
	header('Content-Type: text/xml');
	echo "<?xml version='1.0' encoding='UTF-8' standalone='yes'?><rootElem>".$inf."</rootElem>";
}

//On retourne notre recherche
if ($_POST["type"]==1)
{
	$inff= $yt->yt_tag("tozPhNrfbkE", $_POST["elmt"], 10);
	header('Content-Type: text/xml');
	echo "<?xml version='1.0' encoding='UTF-8' standalone='yes'?><rootElem>".$inff."</rootElem>";
}

?>

