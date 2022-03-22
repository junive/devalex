<?php 

	include_once("functions_name.php");
	include_once("../../../../setting.php");
	include_once("functions_connect.php");
	include_once("functions_general.php");
	connect_base();


class Request {

	var $gen_fun;

	function Request() {
		$this->gen_fun = new General_fun();
	}
	
	function __destruct() {}


	/********** LES LANGUES **********/

	
	// Récupération des langues
	function get_all_lang() {
		$my_req = "select * from gor_index_of_lang ORDER by class_order";
		return req_query($my_req);
	}
	
	// Récupération des langues
	function get_all_lang_desc() {
		$my_req = "select * from gor_index_of_lang ORDER by class_order DESC";
		return req_query($my_req);
	}
	
	// Récupération des langues
	function get_lang($my_search) {
		$my_req = "select $my_search from gor_index_of_lang";
		return req_query($my_req);
	}
	
	// Get the Langage by index
	function get_lang_by_index($my_index) {
		$my_req = "select * from gor_index_of_lang WHERE id_index_lang=$my_index";
		return req_query($my_req);
	}

	// Insertion de langues
	function is_insert_lang($my_title, $my_order) {
		$req_add="INSERT INTO gor_index_of_lang VALUES ('', '$my_order', '$my_title',  '')";
		return req_query($req_add) && $this->is_insert_gen_lang() && $this->gen_fun->create_dir($my_title);
	}

	// Modification de langues
	function is_modif_lang($my_order, $my_title, $my_index) {
		$req_mod="UPDATE gor_index_of_lang SET class_order='$my_order', title='$my_title' WHERE id_index_lang=$my_index";
		return req_red($req_mod);
	}

	// Suppression de langues
	function is_del_lang($my_index) {
		$req_del="DELETE FROM gor_index_of_lang WHERE id_index_lang=$my_index";
		return req_red($req_del);
	}
	
	// Upload de drapeau
	function is_upload_flag($my_link, $my_img, $my_index) {
		$req_flag_1 = "UPDATE gor_index_of_lang SET flag='"; $req_flag_2 = "' WHERE id_index_lang=$my_index";
		return req_upload($my_link, $my_img, $req_flag_1, $req_flag_2);
	}
	
	
	/****** LES MENUS ******/


	// Récupération des menus
	function get_all_menus() {
		$my_req = "select * from gor_index_of_menus ORDER by class_order";
		return req_query($my_req);
	}
	
	// Get the menus by langage
	function get_menus_by_lang($my_index_lang) {
		$my_req = "select * from gor_index_of_menus WHERE id_index_lang=$my_index_lang ORDER by class_order";
		return req_query($my_req);
	}
	
	function get_menus_by_id($id_menu) {
		$my_req = "select * from gor_index_of_menus WHERE id_index_menus=$id_menu";
		return req_query($my_req);
	}
	
	// Return the parent menu
	function get_menus_by_parent($my_index_parent) {
		$my_req = "select * from gor_index_of_menus WHERE id_index_parent_menus=$my_index_parent ORDER by class_order";
		return req_query($my_req);
	}

	// Insertion de menus
	function is_insert_menu($my_title, $my_order, $my_parent_index) {
		$req_add="INSERT INTO gor_index_of_menus VALUES ('', '$my_parent_index', '$my_order', '$my_title')";
		return req_red($req_add);
	}

	// Modification de menus
	function is_modif_menu($my_order, $my_title, $my_index) {
		$req_mod="UPDATE gor_index_of_menus SET class_order='$my_order', title='$my_title' WHERE id_index_menus=$my_index";
		return req_red($req_mod);
	}

	// Suppression de menu
	function is_del_menu($my_index) {
		$req_del="DELETE FROM gor_index_of_menus WHERE id_index_menus=$my_index OR id_index_parent_menus=$my_index";
		return req_red($req_del);
	}
	
	
	/****** LE TEXT DES MENUS PAR LANGUES ******/
	
	
	// Récupération des text menus
	function get_all_text_menus() {
		$my_req = "select * from gor_lang_menus";
		return req_query($my_req);
	}
	
		// Récupération des text menus
	function get_all_text_menus_desc() {
		$my_req = "select * from gor_lang_menus ORDER BY id_menus DESC";
		return req_query($my_req);
	}
	
	// Return the the text menu by id
	function get_text_menus_by_id($my_index) {
		$my_req = "select * from gor_lang_menus WHERE id_menus=$my_index ";
		return req_query($my_req);
	}
	
	// Get the text menus by his index
	function get_text_menus_by_index($my_index_lang, $my_index_menu) {
		$my_req = "select * from gor_lang_menus WHERE id_index_lang='$my_index_lang' AND id_index_menus='$my_index_menu'";
		return req_query($my_req);
	}
	
	// Get the text menus by langages
	function get_text_menus_by_lang($my_index_lang) {
		$my_req = "select * from gor_lang_menus WHERE id_index_lang='$my_index_lang' ";
		return req_query($my_req);
	}
	
	// Update the text menu
	function is_modif_menu_text($my_contain, $my_title, $my_index) {
		$req_mod="UPDATE gor_lang_menus SET contain='$my_contain' WHERE id_menus=$my_index";
		return req_query($req_mod) && $this->gen_fun->create_file($my_title, $my_index);
	}
	
	// Add a new text menu
	function is_insert_menu_text($my_index_lang, $my_index_menu) {
		$req_add="INSERT INTO gor_lang_menus VALUES ('', '$my_index_menu', '$my_index_lang', '')";
		return req_query($req_add) && $this->is_insert_page();
	}
	
	
	/***** LES ELEMENTS GENERAUX PAR LANGUES (Bottom et Haut de page) *******/

	
	// Get the general page by langage
	function get_gen_lang($my_index_lang, $my_type) {
		$req_gen = "SELECT * FROM gor_lang_general WHERE id_index_lang='$my_index_lang' AND title='$my_type'";
		return req_query($req_gen);
	}
	
	// Get the general page by Index
	function add_gen_lang_by_id($my_id, $my_content) {
		$req_gen =  "UPDATE gor_lang_general SET contain='$my_content' WHERE id_general=$my_id";
		return req_query($req_gen); 
	}

	// Ajout des élements de base (haut et bas de page)
	function is_insert_gen_lang() {
		global $gen_top_bdd_col_name, $gen_bot_bdd_col_name;
		$gen_req = new General_req();
		$my_lang_index = $gen_req->get_last_lang_id();
		$req_gen_top = "INSERT INTO gor_lang_general VALUES ('', '$my_lang_index', '$gen_top_bdd_col_name',  '')";
		$req_gen_bottom = "INSERT INTO gor_lang_general VALUES ('', '$my_lang_index', '$gen_bot_bdd_col_name',  '')";
		return req_query($req_gen_top) && req_query($req_gen_bottom); // Last request refresh page
	}
	
	
	/******* THE CONTAINING OF THE PAGE **********/

	// Récupération des pages
	function get_all_page() {
		$my_req = "select * from gor_lang_pages";
		return req_query($my_req);
	}
	
	// Return the the page by id of menu
	function get_page_by_menu_id($my_id) {
		$my_req = "select * from gor_lang_pages WHERE id_menus=$my_id ORDER by id_pages";
		return req_query($my_req);
	}
	
	// Get the text menu
	function get_page_by_lang_parent($lang_id, $menu_parent_id) {
		$my_req = "select P.id_pages, P.id_menus, M.id_index_menus, M.contain
			FROM gor_lang_pages P, gor_lang_menus M, gor_index_of_menus I
			WHERE P.id_menus = M.id_menus 
				AND M.id_index_menus = I.id_index_menus
				AND I.id_index_parent_menus = $menu_parent_id 
				AND M.id_index_lang = $lang_id
				AND M.contain != ''
			GROUP BY P.id_menus
			HAVING COUNT(P.id_menus) >= 1
			ORDER BY I.class_order";
		return req_query($my_req);
	}
	
		// Get the text menu
	function get_page_by_langp($my_index) {
		$my_req = "select P.id_pages, P.id_menus, P.title, P.contain from gor_lang_pages P";
		return req_query($my_req);
	}
		
	// Insert new page to page
	function is_insert_page() {
		global $bdd_page_descript, $bdd_page_key, $bdd_page_body;
		$gen_req = new General_req();
		$my_id = $gen_req->get_last_text_menu_id();
		$req_1 = "INSERT INTO gor_lang_pages VALUES ('', '$my_id', '$bdd_page_descript',  '')";
		$req_2 = "INSERT INTO gor_lang_pages VALUES ('', '$my_id', '$bdd_page_key',  '')";
		$req_3 = "INSERT INTO gor_lang_pages VALUES ('', '$my_id', '$bdd_page_body',  '')";
		return req_query($req_1) && req_query($req_2) && req_query($req_3);
	}
	
	// Modif a page by his id
	function is_modif_page_by_id($my_id, $my_content) {
		$req_gen =  "UPDATE gor_lang_pages SET contain='$my_content' WHERE id_pages=$my_id";
		return req_query($req_gen); 
	}
}

	
	/***** FONCTIONS GENERALES *****/
	
	// Request with refresh of the page
	function req_red($my_req) {
		global $db;
		if (mysqli_query($db, $my_req)) {
			?><script type="text/javascript">window.location.href="";</script><?
			return true;
		} else {
			die("error of adding data");
			return false;
		}
	}

	// Upload d'image sur le serveur
	function req_upload($my_link, $my_img, $my_req_1, $my_req_2) {
		global $siteUrl, $db, $gorrios;
		$root_file =  $_SERVER['DOCUMENT_ROOT']."/image/";
		if (move_uploaded_file($_FILES[$my_link]["tmp_name"], $root_file.$_FILES[$my_link]["name"]) ) {
			$tmp_link = $_FILES[$my_link]["name"];
			$my_req = $my_req_1.$tmp_link.$my_req_2;
			$my_res = mysqli_query($db, $my_req) or die("error of adding data");
			?><script type="text/javascript">document.getElementsByName("<? echo $my_img; ?>")[0].src= 
			"<? echo $siteUrl. $gorrios . "/image/".$_FILES[$my_link]["name"]; ?>";</script><?
			return true;
		} else return false;
	}
	
	// Renvoie le résultat d'une requête
	function req_query($my_req) {
		global $db;
		$my_res = mysqli_query($db, $my_req) or die("erreur of request result");
		return $my_res;
	}
	
	// Check if a button has been submited
	function submit($my_sub) {
		return isset($_POST[$my_sub]);
	}

?>