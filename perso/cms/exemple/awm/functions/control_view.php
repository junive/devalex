<?php
	include_once(realpath(__DIR__ . '/..') . "/functions/root.php");
    include_once(AWM_FUNC . "/constant.php");
	include_once(AWM_FUNC . "/functions_panel.php");
	include_once(AWM_FUNC . "/control_access.php");
	include_once(AWM_FUNC . "/control_response.php");
	include_once(AWM_FUNC . "/control_type.php");

class ControlView {

	var $pan;
	var $rsp;
	var $acs;
	var $typ;
	var $res;
	var $lang_id;

	// Will manage the different page of the interface
	function ControlView($tab) {
		$this->pan = new Panel();
		$this->acs = new ControlAccess();
		$this->typ = new ControlType($tab);
		$this->rsp = new ControlResponse($tab);
		$this->acs->get_my_langage();
		$this->view_all();
	}

	// Principal panel of each page
	function view_all() {
		$this->view_top_pan();
		while ($line = mysqli_fetch_object($this->res)) {
			$this->pan->get_begin_ul("ul_general");
			$this->view_body_pan($line, false);
			$this->pan->get_end_ul();
		}
		$this->view_bottom_pan();
		$this->rsp->execute_request(PUT1);
	}

	function view_top_pan() {
		switch ($this->typ->get_type()) {
			case 0:
				$this->res = $this->acs->get_all_lang();
				$this->pan->get_gen_top("", NAME_lang_title, "lang_body", "lang_title");
				$this->pan->get_pan_add(NAME_lang_add);
				break;
			case 1:
				$this->res = $this->acs->get_parent_menu(0);
				$this->pan->get_gen_top("", NAME_menu_title, "menu_body", "menu_title");
				$this->pan->get_pan_add(NAME_menu_add);
				break;
			case 2:
				$this->res = $this->acs->get_all_lang();
				$this->rsp->set_data(CPT,  0);
				$this->pan->get_gen_top("", NAME_menu_unic_title, "menu_unic_body", "menu_unic_title");
				break;
			case 3: 
				$this->res = $this->acs->get_all_lang();
				$this->pan->get_gen_top(AWM_PAGE_EDIT, NAME_page_lang_title, "page_lang_body", "page_lang_title");
				break;
			case 4:
				$this->res = $this->acs->get_all_lang();
				$this->pan->get_gen_top(AWM_PAGE_EDIT, NAME_page_unic_title, "page_unic_body", "page_unic_title");
				break;
			case 5: 
				$this->res = $this->acs->get_all_user();
				$this->pan->get_gen_top("", NAME_user_title, "user_body", "user_title");
				$this->pan->get_user_add_pan(NAME_user_log, NAME_user_pass);
				$this->pan->get_pan_select(array (NAME_user_niv_half, NAME_user_niv_total), NAME_user_niv_half, true);
				$this->pan->get_pan_sub_insert(NAME_user_add);
				break;
			case 6:
				$this->pan->get_gen_top("", NAME_history_title, "hist_body", "hist_title");
				echo "<br/><br/>";
				$my_month = (isset($_POST[MONTH])) ? $_POST[MONTH] : 1;
				$my_year = (isset($_POST[YEAR])) ? $_POST[YEAR] : date("Y")-10;
				$this->res = $this->acs->get_history_by_date($my_year, $my_month);
				$this->pan->li(NAME_history_month, "");
				$this->pan->get_pan_select_num(MONTH, 1, 12, $my_month);
				$this->pan->li(NAME_history_year, "");
				$this->pan->get_pan_select_num(YEAR, date("Y")-10, date("Y"), $my_year);
				break;
			case 7:
				$this->res = $this->acs->get_all_config();
				$this->pan->get_gen_top("", NAME_config_title, "config_body", "config_title");
				break;
			default: break;
		}
	}

	
	function view_body_pan($line, $is_child) {
		switch ($this->typ->get_type()) {
			case 0:
				$this->pan->get_pan_model($line->{LANG_ID}, $line->{LANG_TITLE},
					 $line->{LANG_ORDER}, NAME_general_change, NAME_general_delete);
				$this->pan->get_pan_img($line->{LANG_FLAG}, NAME_general_change_image);
				break;
			case 1:
				if (!$is_child) {
					$this->get_children_menu($line);
				} else {
					$this->pan->get_pan_model($line->{MENU_ID}, $line->{MENU_TITLE}, 
						$line->{MENU_ORDER}, NAME_general_change, NAME_general_delete) ;
					$this->pan->get_pan_add(NAME_menu_sub_add);
				}
				break;
			case 2:
				if(!$is_child) {
					$this->pan->li($line->{LANG_TITLE}, "menu_unic_lang_title");
					$this->lang_id = $line->{LANG_ID};
					$my_res = $this->acs->get_parent_menu(0);
					while ($line_menu = mysqli_fetch_object($my_res)) {
						$this->pan->get_begin_ul("menu_unic_parent");
						$this->get_children_menu($line_menu);
						$this->pan->get_end_ul();
					}
				} else {
					$this->pan->li($line->{MENU_TITLE}, "menu_unic_title_txt");
					$my_res = $this->acs->get_menu_unic_by_menu_lang_id($line->{MENU_ID}, $this->lang_id);
					if (mysqli_num_rows($my_res) == 0) {
						if ($this->rsp->is_insert_menu_unic($line->{MENU_ID}, $this->lang_id))
							$my_res =  $this->acs->get_menu_unic_by_menu_lang_id($line->{MENU_ID}, $this->lang_id);
					}
					while ($line_menu = mysqli_fetch_object($my_res)) {
						$cpt_menu =  $this->rsp->get_data(CPT);
						$this->pan->set_tab_index(array($line_menu->{MENU_UNIC_ID}));
						$this->pan->get_pan_menu_unic($line_menu->{MENU_UNIC_TXT}, $cpt_menu);
						$this->rsp->set_data(CPT, $cpt_menu+1);
					}
				}
				break;
			case 3:
				$this->pan->li($line->{LANG_TITLE}, "page_lang_title_txt");
				$my_res = $this->acs->get_page_lang_by_lang($line->{LANG_ID}) ;
				while ($line_page = mysqli_fetch_object($my_res)) {
					$this->pan->set_tab_index(array($line_page->{PAGE_LANG_ID}));
					$this->pan->get_pan_sub_name(NAME_page_lang_button_top, TOP);
					$this->pan->get_pan_sub_name(NAME_page_lang_button_bot, BOT);
					break;
				}
				break;
			case 4:
				if (!$is_child) {
					$this->lang_id = $line->{LANG_ID};
					$this->pan->li( $line->{LANG_TITLE}, "page_unic_lang_txt");
					$my_res = $this->acs->get_parent_page_unic(0, $this->lang_id) ;
					while ($line_menu = mysqli_fetch_object($my_res)) {
						$this->pan->get_begin_ul("page_unic_parent");
						$this->get_children_page_unic($this->lang_id, $line_menu);
						$this->pan->get_end_ul();
					}
				} else {
					$this->pan->li($line->{MENU_UNIC_TXT}, "page_unic_title_txt");
					$this->pan->set_tab_index(array($line->{PAGE_UNIC_ID}));
					$this->pan->get_pan_sub_name(NAME_page_unic_button, PAGE);
				}
				break;
			case 5: 
				$this->pan->set_tab_index(array($line->{USER_ID}));
				$this->pan->li($line->{USER_NAME} , "user_name_title_txt"); 
				if ($line->{USER_NIVEL} == 0) $this->pan->li(NAME_user_niv_half, ""); 
					else if ($line->{USER_NIVEL} == 1) $this->pan->li(NAME_user_niv_total, ""); 
				$this->pan->get_pan_sub_delete(NAME_general_delete);
				break;
			case 6:
				$temp = $line->{HISTORY_DATE};
				$date_base = explode("-",$temp) ;
				$this->pan->get_pan_user($line->{USER_NAME}, 
					$date_base[2] ."/". $date_base[1] ."/". $date_base[0] , $line->{HISTORY_HOUR});
				break;
			case 7:
				$this->pan->set_tab_index(array($line->{CONFIG_ID}));
				$this->pan->get_pan_select($this->acs->get_files_lang(), $line->{CONFIG_LANG}, false);
				break;
			default: break;
		}
	}

	function get_children_menu($line) {
	 	if ($line->{MENU_PARENT_ID} != 0) $this->pan->get_begin_ul("menu_unic_child");
		$this->view_body_pan($line, true);
		$res = $this->acs->get_parent_menu($line->{MENU_ID});
		while ($line_child = mysqli_fetch_object($res)) {
			$res_child = $this->acs->get_parent_menu($line_child->{MENU_ID});
			if (mysqli_num_rows($res_child) > 0) {
				 $this->get_children_menu($line_child);
			} else {
				$this->pan->get_begin_ul("menu_unic_child");
				$this->view_body_pan($line_child, true);
				$this->pan->get_end_ul();
			}
		}
		if ($line->{MENU_PARENT_ID} != 0) $this->pan->get_end_ul();
	}

	function get_children_page_unic($lang_id, $line) {
		if ($line->{MENU_PARENT_ID} != 0) $this->pan->get_begin_ul("page_unic_child");
		$this->view_body_pan($line, true);
		$res = $this->acs->get_parent_page_unic($line->{MENU_ID}, $lang_id);
		while ($line_child = mysqli_fetch_object($res)) {
			$res_child = $this->acs->get_parent_page_unic($line_child->{MENU_ID}, $lang_id);
			if (mysqli_num_rows($res_child) > 0) {
				 $this->get_children_page_unic($lang_id, $line_child);
			} else {
				$this->pan->get_begin_ul("page_unic_child");
				$this->view_body_pan($line_child, true);
				$this->pan->get_end_ul();
			}
		}
		if ($line->{MENU_PARENT_ID} != 0) $this->pan->get_end_ul();
	}

	function view_bottom_pan() {
		switch ($this->typ->get_type()) {
			case 2 : 
				$this->pan->get_pan_sub_update(NAME_general_change); 
				$this->pan->get_pan_hidden_value(TAB, $this->typ->get_tab());
				$this->pan->get_gen_bottom(); 
				break;
			case 7 : 
				$this->pan->get_pan_sub_update(NAME_general_change);
				$this->pan->get_pan_hidden_value(TAB, $this->typ->get_tab());
				$this->pan->get_gen_bottom(); 
				break;
			default : $this->pan->get_pan_hidden_value(TAB, $this->typ->get_tab()); $this->pan->get_gen_bottom(); break;

		}
	}
	

}

?>