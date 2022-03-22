<?  //session_start() ;
	include_once(realpath(__DIR__ . '/..') . "/functions/root.php");
	include_once(AWM_FUNC . "/functions_session.php");
	include_once(AWM_FUNC . "/constant.php");
	include_once(AWM_DATA . "/bdd_connect.php");
	//check_user_all(); 

	$in = "create";
	connect_base();
	
	$lang = "CREATE TABLE `". TAB_LANG ."` (
	`". LANG_ID ."` int(11) NOT NULL AUTO_INCREMENT,
	`". LANG_ORDER ."` int(11) NOT NULL DEFAULT 0,
	`". LANG_TITLE ."` varchar(150) NOT NULL DEFAULT '',
	`". LANG_FLAG ."` varchar(250) DEFAULT '',
	 PRIMARY KEY (`". LANG_ID ."`));";
 
	$menu ="CREATE TABLE `". TAB_MENU ."` 
	(`". MENU_ID ."` int(11) NOT NULL AUTO_INCREMENT,
	 `". MENU_PARENT_ID ."` int(11) NOT NULL,
 	 `". MENU_ORDER ."` int(11) NOT NULL DEFAULT 0,
	 `". MENU_TITLE ."` varchar(255) NOT NULL DEFAULT '',
	  PRIMARY KEY (`". MENU_ID ."`))";

	$menu_unic ="CREATE TABLE `". TAB_MENU_UNIC ."` 
	(`". MENU_UNIC_ID ."` int(11) NOT NULL AUTO_INCREMENT,
	 `". MENU_ID ."` int(11) NOT NULL DEFAULT 0,
	 `". LANG_ID ."` int(11) NOT NULL DEFAULT 0,
	 `". MENU_UNIC_TXT ."` text,
	  PRIMARY KEY (`". MENU_UNIC_ID ."`))";
	  
	$lang_page ="CREATE TABLE `". TAB_PAGE_LANG ."` 
	(`". PAGE_LANG_ID ."` int(11) NOT NULL AUTO_INCREMENT,
	 `". LANG_ID ."` int(11) NOT NULL DEFAULT 0,
 	 `". PAGE_LANG_TITLE ."` varchar(255) NOT NULL DEFAULT '',
 	 `". PAGE_LANG_TOP_TXT ."` text,
	 `". PAGE_LANG_BOT_TXT ."` text,
	  PRIMARY KEY (`". PAGE_LANG_ID ."`))";
	  
	$page_unic="CREATE TABLE `". TAB_PAGE_UNIC ."` 
	(`". PAGE_UNIC_ID ."` int(111) NOT NULL AUTO_INCREMENT,
	 `". MENU_UNIC_ID ."` int(11) NOT NULL DEFAULT 0,
	 `". PAGE_UNIC_TITLE ."` varchar(255) NOT NULL DEFAULT '',
	 `". PAGE_UNIC_BODY_TXT ."` text ,
	 `". PAGE_UNIC_KEY_TXT ."` text ,
	 `". PAGE_UNIC_DESCRIPT_TXT ."` text ,
	  PRIMARY KEY (`". PAGE_UNIC_ID ."`))";

	$interface_login = "CREATE TABLE `". TAB_USER ."` 
	(`". USER_ID ."` int(11) NOT NULL AUTO_INCREMENT,
	 `". USER_NAME ."` varchar(255) NOT NULL DEFAULT '',
	 `". USER_MDP ."` varchar(255) NOT NULL DEFAULT '',
	 `". USER_NIVEL ."` int(11) NOT NULL DEFAULT 0,
	  PRIMARY KEY (`". USER_ID ."`))";
	  
	$interface_history = "CREATE TABLE `". TAB_HIST ."` 
	(`". HISTORY_ID ."` int(11) NOT NULL AUTO_INCREMENT,
	 `". USER_NAME ."` varchar(255) NOT NULL DEFAULT '',
	 `". HISTORY_DATE ."` DATE NOT NULL,
	 `". HISTORY_HOUR ."` TIME NOT NULL,
	  PRIMARY KEY (`". HISTORY_ID ."`))";

	$interface_config = "CREATE TABLE `". TAB_CONFIG ."` 
	(`". CONFIG_ID ."` int(11) NOT NULL AUTO_INCREMENT,
	 `". CONFIG_LANG ."` varchar(255) NOT NULL DEFAULT '',
	  PRIMARY KEY (`". CONFIG_ID ."`))";

	if ( mysqli_query($db, $lang) && mysqli_query($db, $menu)
		&& mysqli_query($db, $menu_unic) && mysqli_query($db, $lang_page)
		&& mysqli_query($db, $page_unic) &&  mysqli_query($db, $interface_login)
		&& mysqli_query($db, $interface_history) && mysqli_query($db, $interface_config) ) {
		?><script>window.location.href="../index.php";</script><?
	} else {
		//echo mysql_error();
		echo "<br/> The base already exists";
	}
	
	// mysql_close();
?>