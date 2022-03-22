<? ini_set('display_errors','on');
error_reporting(E_ALL);
//echo dirname(__FILE__) ."///////////".$_GET['page'];

include("../../../setting.php");
/*
include($_SERVER['DOCUMENT_ROOT'] . $parentFold . $emuPsxV4 ."/emulateurs_playstation/Session_index.php");
$redirect_login = "../index.$phpEx";
$redirect_logout = "../index.$phpEx"; 
include($_SERVER['DOCUMENT_ROOT'] . $parentFold . $emuPsxV4 ."/emulateurs_playstation/connect_visite.php"); */
?>
<!DOCTYPE html>
<html lang="fr">
<head>
<title>Emulation Psx : Tout sur les émulateurs Playstation</title>
		
	<? include($_SERVER['DOCUMENT_ROOT'] . $parentFold . $emuPsxV4 ."/emulateurs_playstation/Menus_ps1.php"); ?>		

	<? include($_SERVER['DOCUMENT_ROOT'] . $parentFold . $emuPsxV4 ."/emulateurs_playstation/Index_texte.php"); ?>

	<? include($_SERVER['DOCUMENT_ROOT'] . $parentFold . $emuPsxV4 ."/emulateurs_playstation/Menus_ps2.php"); ?>			


</body>
</html>
					 