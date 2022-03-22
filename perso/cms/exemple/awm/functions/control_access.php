<?php

	include_once(realpath(__DIR__ . '/..') . "/functions/root.php");
    include_once(AWM_FUNC . "/constant.php");
    include_once(AWM_FUNC . "/functions_general.php");
	include_once(AWM_DATA . "/request.php");

class ControlAccess {

	var $req;
	var $gen;

	// Get access to the different infos of db
	function ControlAccess() { 
		$this->req = new Request();
		$this->gen = new General();
	}

	/*** THE LANG ACCESS ***/
	function get_all_lang() {
		$my_req =  $this->req->get_all_lang();
		return $my_req;
	}

	function get_last_lang_order() {
		$my_res = $this->req->get_all_lang_desc();
		while ($line = mysqli_fetch_object($my_res)) {
			return $line->{LANG_ORDER};
		}
		return -1;
	}

	function get_lang_title_by_id($lang_id) {
		$res = $this->req->get_lang_by_id($lang_id);
		while ($line = mysqli_fetch_object ($res)) {
			return $line->{LANG_TITLE};
		}
		return "";
	}

	function get_lang_title_by_menu_unic($menu_id) {
		$res = $this->req->get_menu_unic_by_id($menu_id);
		while ($line = mysqli_fetch_object ($res)) {
			return  $this->get_lang_title_by_id($line->{LANG_ID});
		}
		return "";
	}	

	function get_last_lang_id() {
		$res = $this->req->get_all_lang_desc();
		while ($line = mysqli_fetch_object ($res)) {
			return $line->{LANG_ID};
		}
		return -1;
	}

	/*** THE MENU ACCESS ***/
	function get_last_order_menu_by_parent($parent_id) {
		$my_res = $this->req->get_all_menu_desc_by_parent($parent_id);
		while ($line = mysqli_fetch_object($my_res)) {
			return $line->{MENU_ORDER};
		}
		return -1;
	}
	
	function get_parent_menu($id) {
		$my_req = $this->req->get_menus_by_parent($id);
		return $my_req;
	}

	function get_first_menu_id() {
		$res = $this->get_parent_menu(0);
		while ($line = mysqli_fetch_object ($res)) {
			return $line->{MENU_ID};
		}
		return -1;
	}
	


	/*** THE MENU UNIC ACCESS ***/
	function get_menu_unic_by_menu_lang_id($menu_id, $lang_id) {
		$my_req = $this->req->get_menu_unic_by_lang_menu($lang_id, $menu_id);
		return $my_req;
	}

	function get_menu_unic_by_menu_id($menu_id) {
		$my_req = $this->req->get_menu_unic_by_menu($menu_id);
		return $my_req;
	}

	function get_last_menu_unic_id() {
		$res = $this->req->get_all_menu_unic_desc();
		while ($line = mysqli_fetch_object ($res)) {
			return $line->{MENU_UNIC_ID};
		}
		return -1;
	}


	/*** THE PAGE LANG ACCESS ***/
	
	function get_page_lang_by_lang($lang_id) {
		$my_req = $this->req->get_page_lang_by_lang($lang_id);
		return $my_req;
	}
	
	function get_page_lang_infos($page_lang_id) {
		$my_res = $this->req->get_page_lang_by_id($page_lang_id);
		while ($line = mysqli_fetch_object ($my_res)) {
			return array(
				PAGE . TOP => $line->{PAGE_LANG_TOP_TXT},
				PAGE . BOT => $line->{PAGE_LANG_BOT_TXT});
		}
		return "";
	}

	/*** THE PAGE UNIC ACCESS ***/
	function get_page_unic_by_id($my_id) {
		$my_req = $this->req->get_page_unic_by_id($my_id);
		return $my_req;
	}

	function get_parent_page_unic($menu_id, $lang_id) {
		$my_req = $this->req->get_parent_page_unic($menu_id, $lang_id);
		return $my_req;
	}
	
	function get_first_page_unic_infos_by_page_lang($my_id) {
		$res = $this->req->get_all_page_unic_by_page_lang($my_id, true);
		if (mysqli_num_rows($res) == 0) $res = $this->req->get_all_page_unic_by_page_lang($my_id, false);
		while ($line = mysqli_fetch_object ($res)) {
			return array(
				ID => $line->{PAGE_UNIC_ID},
				MENU . TXT => $line->{MENU_UNIC_TXT} ,
				LANG . TIT => $line->{LANG_TITLE});
		}
		return array(ID => "", MENU . TIT => "", LANG . TIT => "");
	}
	
	function get_page_unic_infos_by_id($my_id) {
		$res_menu = $this->req->get_page_unic_infos_by_id($my_id);
		while ($line = mysqli_fetch_object ($res_menu)) {
			return array(
			ID => $line->{PAGE_UNIC_ID},
			LANG . ID => $line->{LANG_ID},
			LANG . TIT => $line->{LANG_TITLE},
			MENU . ID => $line->{MENU_ID},
			MENU . TIT => $line->{MENU_TITLE},
			MENU . TXT => $line->{MENU_UNIC_TXT},
			PAGE . TOP => $line->{PAGE_LANG_TOP_TXT},
			PAGE . BOT => $line->{PAGE_LANG_BOT_TXT},
			PAGE . CONT => $line->{PAGE_UNIC_BODY_TXT}, 
			PAGE . KEY => $line->{PAGE_UNIC_KEY_TXT},
			PAGE . DES => $line->{PAGE_UNIC_DESCRIPT_TXT});
		}
		return array(ID => "", LANG . ID => "", LANG . TIT => "", MENU . TIT => "", MENU . TXT => "",
			PAGE . TOP => "", PAGE . BOT => "", PAGE . CONT => "", PAGE . KEY => "",  PAGE . DES => "");
	}

	function get_page_unic_id_by_menu_unic($menu_id) {
		$my_res = $this->req->get_page_unic_by_menu_unic($menu_id);
		while ($line = mysqli_fetch_object ($my_res)) {
			return $line->{PAGE_UNIC_ID};	
		}
		return -1;
	}
	
	/*** TAB USER ***/
	function get_all_user() {
		$my_req = $this->req->get_all_user();
		return $my_req;
	}
	
	function get_corresponding_user_infos($user, $pass) {
		$res_user = $this->get_all_user();
		while ($line = mysqli_fetch_object ($res_user)) {
			if ($line->{USER_NAME} == $user && $line->{USER_MDP} == $pass) {
				return array(
					USER . NAME => $line->{USER_NAME},
					USER . PASS => $line->{USER_MDP},
					USER . NIV	=> $line->{USER_NIVEL}
				);
			}
		}
		return array(USER . NAME => "", USER . PASS => "", USER . NIV => "");
	}
	
	function is_tab_user_create() {
		$my_req = $this->req->is_tab_user_create();
		if (@mysqli_num_rows($my_req)) return true;
			else return false;
	}

	/*** TAB HISTORY ***/
	function get_all_history() {
		$my_req = $this->req->get_all_history();
		return $my_req;
	}
	
	function get_history_by_date($year, $month) {
		$my_req = $this->req->get_history_by_date($year, $month);
		return $my_req;
	}
	
	
	/*** CONFIF OF WEB SITE ***/
	
	function get_all_config() {
		$my_req = $this->req->get_all_config();
		return $my_req;
	}
	
	function get_config_infos() {
		if ($this->is_tab_user_create()) {
			$res = $this->get_all_config();
			while ($line = mysqli_fetch_object ($res)) {
				return array( 
					CONF . LANG => $line->{CONFIG_LANG}
				);
			}
		}		
		return array( 
			CONF . LANG => DEFAULT_LANGAGE
		);
	}
	
	function get_files_lang() {
		return $this->gen->get_files(AWM_LANG);
	}
	
	function get_my_langage() {
		$conf = $this->get_config_infos();
		include_once(AWM_LANG . "/" . $conf[CONF . LANG]);
	}
	
	function change_index($menu_id) {
		$first_menu_id = $this->get_first_menu_id();
		if ($menu_id != $first_menu_id) {
			$res = $this->get_menu_unic_by_menu_id($first_menu_id);
			while ($line = mysqli_fetch_object ($res)) {
				$this->create_file($line->{MENU_UNIC_ID}, false);
			}
		}
	}
	
	// Create a new page for the Web site
	function create_file($menu_unic_id, $is_new) {
		$page_id = $this->get_page_unic_id_by_menu_unic($menu_unic_id);
		$page = $this->get_page_unic_infos_by_id($page_id);
		$my_var = "<? \$get_page_id = ". $page_id ."; ?>" ;
		$file_read_link = AWM_WEBS . "/page_create.php";
		if ($is_new) {
			$file_write_link =  ROOT . "/" . $page[LANG . TIT] . "/" . $page[MENU . TXT] . ".php";
			$this->gen->copy_page($file_write_link, $file_read_link, $my_var, "");
		}
		if ($page[MENU . ID] == $this->get_first_menu_id()) {
			$file_index_page = ROOT . "/" . $page[LANG . TIT] . "/index.php" ;
			$this->gen->copy_page($file_index_page, $file_read_link , $my_var, "");
		} 
	}
	
	function create_preview($my_page, $my_lang, $tab) {
		if ($my_page != "") {
			$this->get_my_langage();
			$my_text = "<br/><br/><form action='../interface/index.php' name='form' 
				method='post' style='clear: left;' enctype='multipart/form-data'>
				<input type='hidden' name='Tab' value='". $tab ."'/>
				<input type='submit'  name='Sub' value='Revenir' class='boutons'/></form>";
			$file_read_link = ROOT . "/" . $my_lang . "/" . $my_page . ".php";
			$file_write_link =  AWM_WEBS . "/page_preview.php";
			$this->gen->copy_page($file_write_link, $file_read_link, "", $my_text);
			?><script type="text/javascript">window.location.href="page_preview.php";</script><?
		} else echo "veuillez créer une page/menu dans la rubrique des menus textes selon la langue";
	}
}
?>