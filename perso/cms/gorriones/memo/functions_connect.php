<? 

	$mysql_host = '.mysql.db'; // The server
	$mysql_login = ''; //  Login
	$mysql_pass = 'Garique12'; // Password
	$mysql_dbnom = ''; // Name of data base
	//$siteUrl = "http://.com/alex/G";
	//$db = "";

	// Connection à la BDD 
	function connect_base() {
		global $db, $mysql_host, $mysql_login, $mysql_pass, $mysql_dbnom, $db;
		//$db = mysqli_connect($mysql_host, $mysql_login, $mysql_pass, $mysql_dbnom) or die ("error of connexion");
		mysqli_set_charset($db, "utf8");
	}

?>