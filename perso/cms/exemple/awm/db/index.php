<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Création de votre de données</title>
</head>
<?
	include_once(realpath(__DIR__ . '/..') . "/functions/root.php");
	include_once(AWM_FUNC . "/functions_general.php");
	include_once(AWM_FUNC . "/control_access.php");
	include_once(AWM_DATA . "/setting.php");

	$acs = new ControlAccess();
	$acs->get_my_langage();

	if (MY_SITE != "" && MY_SITE != "MY_SITE") $url =  MY_SITE;
	if ($mysql_host!= "")  $host = $mysql_host;
	if ($mysql_login != "") $user = $mysql_login;
	if ($mysql_pass != "") $pass = $mysql_pass;
	if ($mysql_dbnom != "") $base = $mysql_dbnom;
	
	echo "<body><div align='center'><br><br><br><br>";
	echo NAME_db_create;
	echo "<br/><br/><form method='post' name='entree' action=''>";
	echo NAME_db_url ;
	echo "<br /><input type='text'  name='url' value='$url'/><br />";
	echo NAME_db_host;
	echo "<br /><input type='text' name='host' value='$host'/><br />";
	echo NAME_db_log;
	echo "<br /><input type='text' name='user' value='$user'/><br />";
	echo NAME_db_pass;
	echo "<br /><input type='password'  name='pass' value='$pass'/><br />";
	echo NAME_db_base;
	echo "<br /><input type='text'  name='base' value='$base' /><br />";
	echo "<input type='submit' name='valid' Value='". NAME_db_valid ."'/>";

if (isset($_POST['valid']))  {


	
	if ($_POST['url'] == "" || $_POST['user'] == "" || $_POST['pass'] == "" || $_POST['base'] == "") {
		$msg = NAME_db_error_all;
	} else {
		$gen = new General();
		

		$text_db = "<?php
			define('MY_SITE' , '".$_POST['url']."'); // The page name
			\$mysql_host = '".$_POST['host']."'; // The server
			\$mysql_login = '".$_POST['user']."'; //  Login
			\$mysql_pass = '".$_POST['pass']."'; // Password
			\$mysql_dbnom = '".$_POST['base']."'; // Name of data base ?>" ;

		$file_db_write_link = AWM_DATA ."/setting.php";
		$file_functions_write_link = AWM_FUNC ."/setting.php";
		$gen->write_page($file_db_write_link, $text_db);

		if (!$acs->is_tab_user_create()) { ?><script>window.location.href="bdd_create.php";</script><? }
			 else { ?><script>window.location.href="?valid=ok";</script><? }
	
	}
}
	if(isset($_GET["error"])) {
		switch($_GET["error"]) {
			case 1: $msg = NAME_db_error_wrong_name;break;
			case 2: $msg = NAME_db_error_wrong_log;break;
		}
	}

	echo "<br/><br/>". $msg;
	echo "</form></div></body>";
?>
<body>
</body>
</html>
