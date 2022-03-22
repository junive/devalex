<? 
$red = $_GET["redirection"] . "?id=".$_GET["id"];
//echo $red;
{header("Location: ". $red);}	
?>