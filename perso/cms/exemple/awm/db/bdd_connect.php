<? 
	include_once(realpath(__DIR__ . '/..') . "/functions/root.php");
	include_once(AWM_DATA . "/setting.php");
	$db = "";

	// Connection to DB 
	function connect_base() {
		global $mysql_host, $mysql_login, $mysql_pass, $db, $in;
		$db = @mysqli_connect($mysql_host, $mysql_login, $mysql_pass);
		
		if ($db) {
			mysqli_set_charset($db, "utf8");
			$base = @mysqli_select_db($db, $mysql_dbnom);
			mysqli_set_charset($db, "utf8");
			if (!$base) {
				if ($in == "create") {
					?><script>window.location.href="index.php?error=1";</script><? 
				} else echo "wrong base name";
			}
		} else if ($in == "create"){
			?><script>window.location.href="index.php?error=2";</script><?
		} else echo "wrong logs";
	}

?>