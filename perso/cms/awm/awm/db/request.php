<?php 

	include_once(realpath(__DIR__ . '/..') . "/functions/root.php");
	include_once(AWM_DATA . "/bdd_connect.php");
	connect_base();


class Request {

	function Request() {}

	/********** LES LANGUES **********/

	
	// Récupération des langues
	function get_all_lang() {
		$my_req = "SELECT * FROM ". TAB_LANG ."
			ORDER BY ". LANG_ORDER ."";
		return req_query($my_req);
	}
	
	function get_lang_by_id($lang_id) {
		$my_req = "SELECT * FROM ". TAB_LANG ."
			WHERE ". LANG_ID ." = '". $lang_id ."'
			ORDER BY ". LANG_ORDER ."";
		return req_query($my_req);
	}
	
	// Récupération des langues
	function get_all_lang_desc() {
		$my_req = "SELECT * FROM ". TAB_LANG ."
			ORDER BY ". LANG_ORDER ." DESC";
		return req_query($my_req);
	}

	// Insertion de langues
	function is_insert_lang($my_title, $my_order) {
		$req_add = "INSERT INTO ". TAB_LANG ."
			VALUES ('', '". $my_order ."', '". $my_title ."',  '')";
		return req_query($req_add);
	}

	// Modification de langues
	function is_modif_lang($my_order, $my_title, $my_index) {
		$req_mod = "UPDATE ". TAB_LANG ."
			SET ". LANG_ORDER ." = '". $my_order ."', ". LANG_TITLE ." = '". $my_title ."'
			WHERE ". LANG_ID ." = ". $my_index ."";
		return req_query($req_mod);
	}

	// Suppression de langues
	function is_del_lang($my_index) {
		$req_del = "DELETE FROM ". TAB_LANG ."
			WHERE ". LANG_ID ." = ". $my_index ."";
		return req_query($req_del);
	}
	
	// Upload de drapeau
	function is_upload_flag($my_link, $my_img, $my_index) {
		$req_flag_1 = "UPDATE ". TAB_LANG ." SET ". LANG_FLAG ." = '"; 
		$req_flag_2 = "' WHERE ". LANG_ID ." = ". $my_index ."";
		return req_upload($my_link, $my_img, $req_flag_1, $req_flag_2);
	}
	
	
	/****** LES MENUS ******/


	// Récupération des menus
	function get_all_menus() {
		$my_req = "SELECT * FROM ". TAB_MENU ." 
			ORDER BY ". MENU_ORDER ."";
		return req_query($my_req);
	}
	
	function get_all_menu_desc_by_parent($parent_id) {
		$my_req = "SELECT * FROM ". TAB_MENU ."
			WHERE ". MENU_PARENT_ID ." = ". $parent_id ." 
			ORDER BY ". MENU_ORDER ." DESC";
		return req_query($my_req);
	}

	// Return the parent menu
	function get_menus_by_parent($parent_id) {
		$my_req = "SELECT * FROM ". TAB_MENU ."
			WHERE ". MENU_PARENT_ID ." = ". $parent_id ." 
			ORDER BY ". MENU_ORDER ."";
		return req_query($my_req);
	}

	// Insertion de menus
	function is_insert_menu($my_title, $my_order, $parent_id) {
		$req_add = "INSERT INTO ". TAB_MENU ." 
			VALUES ('', '". $parent_id ."', '". $my_order ."', '". $my_title ."')";
		return req_query($req_add);
	}

	// Modification de menus
	function is_modif_menu($my_order, $my_title, $menu_id) {
		$req_mod = "UPDATE ". TAB_MENU ." 
			SET ". MENU_ORDER ." = '". $my_order ."', ". MENU_TITLE ." = '". $my_title ."' 
			WHERE ". MENU_ID ." = ". $menu_id ."";
		return req_query($req_mod);
	}

	// Suppression de menu
	function is_del_menu($menu_id) {
		$req_del = "DELETE FROM ". TAB_MENU ."
			WHERE ". MENU_ID ." = ". $menu_id ." ";
		return req_query($req_del);
	}
	
	
	/****** LE TEXT DES MENUS PAR LANGUES ******/

	// Récupération des text menus
	function get_all_menu_unic_desc() {
		$my_req = "SELECT * FROM ". TAB_MENU_UNIC ." 
			ORDER BY ". MENU_UNIC_ID ." DESC";
		return req_query($my_req);
	}
	
	// Return the the text menu BY id
	function get_menu_unic_by_id($menu_unic_id) {
		$my_req = "SELECT * FROM ". TAB_MENU_UNIC ." 
			WHERE ". MENU_UNIC_ID ." = ". $menu_unic_id ." ";
		return req_query($my_req);
	}
	
	// Get the text menus BY his index
	function get_menu_unic_by_lang_menu($lang_id, $menu_id) {
		$my_req = "SELECT * FROM ". TAB_MENU_UNIC ." 
			WHERE ". LANG_ID ." = '". $lang_id ."' 
				AND ". MENU_ID ." = '". $menu_id ."'";
		return req_query($my_req);
	}
	
	function get_menu_unic_by_menu($menu_id) {
		$my_req = "SELECT * FROM ". TAB_MENU_UNIC ." 
			WHERE ". MENU_ID ." = '". $menu_id ."'";
		return req_query($my_req);
	}
	
	// Update the text menu
	function is_modif_menu_unic($my_contain, $menu_unic_id) {
		$req_mod = "UPDATE ". TAB_MENU_UNIC ." 
			SET ". MENU_UNIC_TXT ." = '". $my_contain ."' 
			WHERE ". MENU_UNIC_ID ." = ". $menu_unic_id ."";
		return req_query($req_mod);
	}
	
	// Add a new text menu
	function is_insert_menu_unic($lang_id, $menu_id) {
		$req_add = "INSERT INTO ". TAB_MENU_UNIC ." 
			VALUES ('', '". $menu_id ."', '". $lang_id ."', '')";
		return req_query($req_add);
	}
	
	function is_del_menu_and_page_unic_by_lang($lang_id) {
		$req_del = "DELETE ". TAB_PAGE_UNIC .", ". TAB_MENU_UNIC ." 
			FROM ". TAB_PAGE_UNIC .", ". TAB_MENU_UNIC ."
			WHERE ". TAB_MENU_UNIC .".". MENU_UNIC_ID ." = ". TAB_PAGE_UNIC .".". MENU_UNIC_ID ."
			AND ". TAB_MENU_UNIC .".". LANG_ID ." = ". $lang_id ." ";
		return req_query($req_del);
	}
	
	function is_del_menu_and_page_unic_by_menu($menu_id) {
		$req_del = "DELETE ". TAB_PAGE_UNIC .", ". TAB_MENU_UNIC ." 
			FROM ". TAB_PAGE_UNIC .", ". TAB_MENU_UNIC ."
			WHERE ". TAB_MENU_UNIC .".". MENU_UNIC_ID ." = ". TAB_PAGE_UNIC .".". MENU_UNIC_ID ."
			AND ". TAB_MENU_UNIC .".". MENU_ID ." = ". $menu_id ." ";
		return req_query($req_del);
	}



	/***** LES ELEMENTS GENERAUX PAR LANGUES (Bottom et Haut de page) *******/

	function get_page_lang_by_id($lang_page_id) {
		$my_req = "SELECT * FROM ". TAB_PAGE_LANG ." 
			WHERE ". PAGE_LANG_ID ." = '". $lang_page_id ."'";
		return req_query($my_req);
	}
	
	function get_page_lang_by_lang($lang_id) {
		$my_req = "SELECT * FROM ". TAB_PAGE_LANG ." 
			WHERE ". LANG_ID ." = '". $lang_id ."'";
		return req_query($my_req);
	}

	// Get the general page BY Index
	function is_modif_page_lang($lang_page_id, $my_col, $my_txt) {
		$my_req = "UPDATE ". TAB_PAGE_LANG ." 
			SET ". $my_col ." = '". $my_txt ."' 
			WHERE ". PAGE_LANG_ID ." = ". $lang_page_id ."";
		return req_query($my_req); 
	}

	// Ajout des élements de base (haut et bas de page)
	function is_insert_page_lang($lang_id) {
		$my_req = "INSERT INTO ". TAB_PAGE_LANG ."
			VALUES ('', '". $lang_id ."', '', '', '')";
		return req_query($my_req);
	}
	
	function is_del_page_lang_by_lang($lang_id) {
		$req_del = "DELETE FROM ". TAB_PAGE_LANG ."
			WHERE ". LANG_ID ." = ". $lang_id ."";
		return req_query($req_del);
	}
	
	
	/******* THE CONTAINING OF THE PAGE **********/

	// Récupération des pages
	function get_all_page() {
		$my_req = "SELECT * FROM ". TAB_PAGE_UNIC ."";
		return req_query($my_req);
	}
	
	function get_page_unic_by_id($page_unic_id) {
		$my_req = "SELECT * FROM ". TAB_PAGE_UNIC ." 
			WHERE ". PAGE_UNIC_ID ." = ". $page_unic_id ."";
		return req_query($my_req);
	}
	
	// Return the the page BY id of menu
	function get_page_unic_by_menu_unic($menu_unic_id) {
		$my_req = "SELECT * FROM ". TAB_PAGE_UNIC ." 
			WHERE ". MENU_UNIC_ID ." = ". $menu_unic_id ."
			ORDER BY ". PAGE_UNIC_ID ."";
		return req_query($my_req);
	}
	
	// Get the text menu
	function get_parent_page_unic($menu_parent_id, $lang_id) {
		$my_req = "SELECT P.". PAGE_UNIC_ID .", P.". MENU_UNIC_ID .", 
			M.". MENU_ID .", U.". MENU_UNIC_TXT .", M.". MENU_PARENT_ID ."
			FROM ". TAB_PAGE_UNIC ." P, ". TAB_MENU_UNIC ." U, ". TAB_MENU ." M
			WHERE P.". MENU_UNIC_ID ." = U.". MENU_UNIC_ID ." 
				AND U.". MENU_ID ." = M.". MENU_ID ."
				AND M.". MENU_PARENT_ID ." = ". $menu_parent_id ."
				AND U.". LANG_ID ." = ". $lang_id ."
				AND U.". MENU_UNIC_TXT ." <> ''
			GROUP BY P.". MENU_UNIC_ID ."
			HAVING COUNT(P.". MENU_UNIC_ID .") >= 1
			ORDER BY M.". MENU_ORDER ."";
		return req_query($my_req);
	}
	
	function get_all_page_unic_by_page_lang($my_id, $not_blank) {
		$not_page_blank = ($not_blank) ? " AND P.". PAGE_UNIC_BODY_TXT ." <> '' " : "";
		$my_req = "SELECT P.". PAGE_UNIC_ID .",  U.". MENU_UNIC_TXT .",  L.". LANG_TITLE ."
			FROM  ". TAB_LANG ." L, ". TAB_MENU ." M, ". TAB_MENU_UNIC ." U, ". TAB_PAGE_LANG ." G, ". TAB_PAGE_UNIC ." P
			WHERE G.". PAGE_LANG_ID ." = '". $my_id ."' 
				AND G.". LANG_ID ." = L.". LANG_ID ."
				AND L.". LANG_ID ." = U.". LANG_ID ."
				AND U.". MENU_ID ." = M.". MENU_ID ."
				AND U.". MENU_UNIC_ID ." = P.". MENU_UNIC_ID ."
				AND U.". MENU_UNIC_TXT ." <> ''
				". $not_page_blank ."
				GROUP BY P.". MENU_UNIC_ID ."
				HAVING COUNT(P.". MENU_UNIC_ID .") >= 1
				ORDER BY M.". MENU_ORDER ."";
		return req_query($my_req);
	}
	
	function get_page_unic_infos_by_id($my_id) {
		$my_req = "SELECT  *
			FROM  ". TAB_LANG ." L, ". TAB_MENU ." M, ". TAB_MENU_UNIC ." U,  ". TAB_PAGE_LANG ." G, ". TAB_PAGE_UNIC ." P
			WHERE P.". PAGE_UNIC_ID ." = '". $my_id ."' 
				AND P.". MENU_UNIC_ID ." = U.". MENU_UNIC_ID ."
				AND U.". LANG_ID ." = L.". LANG_ID ."
				AND L.". LANG_ID ." = G.". LANG_ID ."
				AND U.". MENU_ID ." = M.". MENU_ID ."";
		return req_query($my_req);
	}
		
	// Insert new page to page
	function is_insert_page($menu_id) {
		$req = "INSERT INTO ". TAB_PAGE_UNIC ." 
			VALUES ('', '". $menu_id ."', '',  '', '', '')";
		return req_query($req);
	}
	
	// Modif a page BY his id
	function is_modif_page_unic($page_unic_id, $my_col, $my_content) {
		$req_gen = "UPDATE ". TAB_PAGE_UNIC ." 
			SET ". $my_col ." = '". $my_content ."' 
			WHERE ". PAGE_UNIC_ID ." = ". $page_unic_id ."";
		return req_query($req_gen); 
	}
	
	
	/******* THE USER INTERFACE **********/
	
	function get_all_user() {
		$req_log = "SELECT * FROM ". TAB_USER ." 
			ORDER BY ". USER_ID ."";
		return req_query($req_log);
	}
	
	function is_tab_user_create() {
		global $db;
		$req_log = "SELECT COUNT(*) FROM ". TAB_USER;
		return @mysqli_query($db, $req_log);
	}
	
	function is_insert_user($my_name, $my_mdp, $my_nivel) {
		$req_user = "INSERT INTO ". TAB_USER ." 
			VALUES ('', '". $my_name ."', '". $my_mdp ."',  '". $my_nivel ."')";
		return req_query($req_user);
	}
	
	function is_delete_user($user_id) {
		$req_log = "DELETE FROM ". TAB_USER ." 
			WHERE ". USER_ID ." = ". $user_id ."";
		return req_query($req_log);
	}
	
	
	/********* THE HISTORY INTERFACE *******/
	
	function get_all_history() {
		$req = "SELECT * FROM ". TAB_HIST ." 
			ORDER BY ". HISTORY_DATE .", ". HISTORY_HOUR ."";
		return req_query($req);
	}
	
	function get_history_by_date($year, $month) {
		$req = " SELECT * FROM `". TAB_HIST ."`
			WHERE `". HISTORY_DATE ."` >= '". $year ."-". $month ."-01'
			AND `". HISTORY_DATE ."` <= '". $year ."-". $month ."-31'";
		return req_query($req);
	}
	
	function is_insert_history($user_name) {
		$req_histo = "INSERT INTO `". TAB_HIST ."`
			VALUES ('' , '". $user_name ."', '".date('Y-n-d')."', '".date('H:i:s')."')";
		return req_query($req_histo);
	}
	
	
	/*** GENERAL CONFIG OF WEB SITE ****/
	

	function get_all_config() {
		$my_req = "SELECT * FROM ". TAB_CONFIG."";
		return req_query($my_req);
	}
	
	function is_insert_config($lang) {
		$req = "INSERT INTO ". TAB_CONFIG ." 
			VALUES ('', '". $lang ."')";
		return req_query($req);
	}
	
	function is_modif_config($config_id, $title_lang) {
		$req_mod = "UPDATE ". TAB_CONFIG ."
			SET ". CONFIG_LANG ." = '". $title_lang ."'
			WHERE ". CONFIG_ID ." = ". $config_id ."";
		return req_query($req_mod);
	}

	
}

	
	/***** FONCTIONS GENERALES *****/


	// Upload d'image sur le serveur
	function req_upload($my_link, $my_img, $my_req_1, $my_req_2) {
		global $db;
		$root_file =  ROOT."/images/";
		if (move_uploaded_file($_FILES[$my_link]["tmp_name"], $root_file.$_FILES[$my_link]["name"]) ) {
			$tmp_link = $_FILES[$my_link]["name"];
			$my_req = $my_req_1.$tmp_link.$my_req_2;
			$my_res = mysqli_query($db, $my_req) or die("error of adding data");
			?><script type = "text/javascript">document.getElementsByName("<? echo $my_img; ?>")[0].src = 
			"<? echo MY_SITE."/images/".$_FILES[$my_link]["name"]; ?>";</script><? 
			return true;
		} else return false;
	}
	
	// Renvoie le résultat d'une requête
	function req_query($my_req) {
		global $db;
		$my_res = mysqli_query($db, $my_req);// or die("Error SQL : ". mysql_error());
		return $my_res;
	}

?>