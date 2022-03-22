<?  session_start() ;
	include_once(realpath(__DIR__ . '/..') . "/functions/root.php");
	include_once(AWM_FUNC . "/functions_session.php");
	include_once(AWM_FUNC . "/functions_general.php");
	include_once(AWM_FUNC . "/constant.php");
	include_once(AWM_DATA . "/bdd_connect.php");
	//include_once("my_request.php");
	//include_once("../functions/general.php");
	//check_user_all(); 

	//$gen_fun = new General_fun();
	//$req = new Request();
	//$res_lang = $req->get_all_lang();
	connect_base();
	
	$del_id_lang = "DROP TABLE `". TAB_LANG ."`";
	$del_id_menus = "DROP TABLE `". TAB_MENU ."`";
	$del_lg_menus = "DROP TABLE `". TAB_MENU_UNIC ."`";
	$del_lg_general = "DROP TABLE `". TAB_PAGE_LANG ."`";
	$del_lg_pages = "DROP TABLE `". TAB_PAGE_UNIC ."`";
	$del_int_login = "DROP TABLE `". TAB_USER ."";
	$del_int_history = "DROP TABLE `". TAB_HIST ."`";
	$del_int_config = "DROP TABLE `". TAB_CONFIG ."`";
	
	/*
	$gen_fun->delete_dir("images");	
	$gen_fun->delete_dir("tools");
	$gen_fun->delete_dir("scripts");
	$gen_fun->delete_dir("style");
	while ($line = mysqli_fetch_object ($res_lang)) {
		$gen_fun->delete_dir($line->title);
	}
	*/
	mysqli_query($db, $del_id_lang);// or die("erreur : ".mysql_error());
	mysqli_query($db, $del_id_menus);// or die("erreur : ".mysql_error());
	mysqli_query($db, $del_lg_menus);// or die("erreur : ".mysql_error());
	mysqli_query($db, $del_lg_general);// or die("erreur : ".mysql_error());
	mysqli_query($db, $del_lg_pages);// or die("erreur : ".mysql_error());
	mysqli_query($db, $del_int_login);// or die("erreur : ".mysql_error());
	mysqli_query($db, $del_int_history);// or die("erreur : ".mysql_error());
	mysqli_query($db, $del_int_config);// or die("erreur : ".mysql_error());
	
	$gen = new General();
	$file_db_write_link = AWM_DATA . "/setting.php";
	//$file_functions_write_link = AWM_FUNC ."/setting.php";
	$gen->write_page($file_db_write_link, "");
	//$gen->write_page($file_functions_write_link, "");

	// mysql_close();

?>