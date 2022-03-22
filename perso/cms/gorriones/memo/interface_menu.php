<? session_start();
include("functions_session.php");
check_user_name(); ?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Interface de sites</title>
</head>

<a href="insert_lang.php">Les langues</a><br />
<a href="insert_menus.php">Titres et construction des menus</a><br />
<a href="insert_text_menu.php">Contenu des menus par langue</a><br />
<a href="insert_general.php">Contenu général par langue</a><br />
<a href="insert_pages.php">Contenu des pages</a><br />
<? if(is_nivel()) echo "<a href='insert_user.php'>Gestion des logins</a><br />"; ?>




<body>
</body>
</html>
