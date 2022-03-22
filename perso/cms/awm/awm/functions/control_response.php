<?php
	include_once(realpath(__DIR__ . '/..') . "/functions/root.php");
    include_once(AWM_FUNC . "/constant.php");
	include_once(AWM_FUNC . "/functions_general.php");
	include_once(AWM_FUNC . "/control_type.php");
	include_once(AWM_FUNC . "/control_access.php");
	include_once(AWM_DATA . "/request.php");

class ControlResponse {
	
	var $req;
	var $typ;
	var $data;
	var $acs;
	var $gen;

	// Send Datas to Data Base
	function ControlResponse($tab) {
		$this->gen = new General();
		$this->req = new Request();
		$this->acs = new ControlAccess();
		$this->typ = new ControlType($tab);
		$this->data = array();
	}

	// Send datas from forms to local table
	function send_data($id_name) {
		if ($this->is_put_data(ID, $id_name)) {
			$this->put_data_post(TXT . ADD);
			$this->put_data_post(TXT . ORD);
			$this->put_data_post(TXT . MOD);
			$this->put_data(IMG . LINK, IMG . LINK . $this->data[ID]);
			$this->put_data(IMG . NAME, IMG . NAME . $this->data[ID]);
		}
	}


	/*** INDEPENDANT RESPONSE ***/
	function is_insert_menu_unic($menu_id, $lang_id) {
		if ($this->req->is_insert_menu_unic($lang_id, $menu_id)) {
			$last_id = $this->acs->get_last_menu_unic_id();
			return $this->req->is_insert_page($last_id);
		} else return false;
	}
	
	function is_insert_user($user, $pass, $niv) {
		return $this->req->is_insert_user($user, $pass, $niv);
	}
	
	function is_insert_history($user) {
		return $this->req->is_insert_history($user);
	}
	
	function delete_menu($line) {
		$this->del_menu($line->{MENU_ID});
	}
	
	function del_menu($menu_id) {
		$res = $this->acs->get_menu_unic_by_menu_id($menu_id);
		while ($line = mysqli_fetch_object($res)) {
			$lang_title = $this->acs->get_lang_title_by_menu_unic($line->{MENU_UNIC_ID});
			$this->gen->delete_file($lang_title . "/" . $line->{MENU_UNIC_TXT} . ".php");
		}
		$this->req->is_del_menu($menu_id);
		$this->req->is_del_menu_and_page_unic_by_menu($menu_id);
	}
	
	function init_config() {
		$res = $this->acs->get_all_config();
		if (mysqli_num_rows($res) == 0) {
			$conf =  $this->acs->get_config_infos();
			return $this->req->is_insert_config($conf[CONF . LANG]);
		}
		return;
	}
	
	// Insert into db infos
	function insert() {
	
		if($this->is_inserting()) {

			$id = $this->get_data(ID);
			$add = $this->get_data(TXT . ADD);
			$mod = $this->get_data(TXT . MOD);
			$ord = $this->get_data(TXT . ORD);
			
			switch ($this->typ->get_type()) {
				case 0:
					if ($this->req->is_insert_lang($add, $this->acs->get_last_lang_order() + 1)) {
						$this->req->is_insert_page_lang($this->acs->get_last_lang_id());
						$this->gen->create_dir($add);
					}
					break;
				case 1: $this->req->is_insert_menu($add, $this->acs->get_last_order_menu_by_parent($id) + 1, $id); break;
				case 2: break;
				case 3: break;
				case 4: break;
				case 5: $this->is_insert_user($add, md5($mod), $ord);break;
				case 6: break;
				default: break;
			}
			$this->refresh();
			return true;
		}
		return false;
	}
	
	// Upadate the infos into db
	function update() {
		if($this->is_updating()) {
			$ord = $this->get_data(TXT . ORD);
			$mod = $this->get_data(TXT . MOD);
			$id = $this->get_data(ID);
			switch ($this->typ->get_type()) {
				case 0:
					$title = $this->acs->get_lang_title_by_id($id);
					if ($this->req->is_modif_lang($ord, $mod, $id)) {
						if ($title != $mod) $this->gen->re_name($title, $mod);
					}
					$this->refresh();
					break;
				case 1: 
					if ($this->req->is_modif_menu($ord, $mod, $id)) {
						$this->acs->change_index($id);
					}
					$this->refresh();
					break;
				case 2:
					$cpt = $this->get_data(CPT);
					for ($i = 0; $i < $cpt; $i++) {
						$id = $_POST[HID . ID . $i];
						$old_txt = $_POST[HID . TXT . $id];
						$new_txt = $_POST[TXT . MOD . $id];
						if (isset($new_txt) && $new_txt != "" && $new_txt != $old_txt) {
							if ($this->req->is_modif_menu_unic($new_txt, $id)) {
								$this->acs->create_file($id, true);
								if ($old_txt != "") {
									$lang_title = $this->acs->get_lang_title_by_menu_unic($id);
									$this->gen->delete_file($lang_title . "/" . $old_txt . ".php");
								}
							}
						}
					}
					$this->refresh();
					break;
				case 3:
					if ($mod == PAGE . TOP) $col = PAGE_LANG_TOP_TXT;
						else if ($mod == PAGE . BOT) $col = PAGE_LANG_BOT_TXT; 
					if ($this->req->is_modif_page_lang($id, $col, $_POST[CONT])) {
						$tab = $this->acs->get_first_page_unic_infos_by_page_lang($id);
						$this->acs->create_preview($tab[MENU . TXT], $tab[LANG . TIT], $_POST[TAB . PAGE]);
					}
				 	break;
				case 4: 
					if ($this->req->is_modif_page_unic($id, PAGE_UNIC_BODY_TXT, $_POST[CONT])
						&& $this->req->is_modif_page_unic($id, PAGE_UNIC_KEY_TXT, $_POST[TXT . KEY])
						&& $this->req->is_modif_page_unic($id, PAGE_UNIC_DESCRIPT_TXT, $_POST[TXT . DES])) {
						$tab = $this->acs->get_page_unic_infos_by_id($id);
						$this->acs->create_preview($tab[MENU . TXT], $tab[LANG . TIT], $_POST[TAB . PAGE]);
					}
					break;
				case 5: break;
				case 6: break;
				case 7:
					$this->req->is_modif_config($id, $ord);
					$this->refresh();
					break;
				default: break;
			}
			return true;
		}
		return false;
	}

	//Delete datas to db
	function delete() {
		if($this->is_deleting()) {
			$id = $this->get_data(ID);
			switch ($this->typ->get_type()) {
				case 0:
					$title = $this->acs->get_lang_title_by_id($id);
					if ($this->req->is_del_lang($id)) {
						$this->gen->delete_dir($title);
						$this->req->is_del_menu_and_page_unic_by_lang($id);
						$this->req->is_del_page_lang_by_lang($id);
					}
					break;
				case 1:
				 	$this->acs->get_all_my_menu(array($this, "delete_menu"), $id);
					$this->del_menu($id);
					$this->acs->change_index($id); 
					break;
				case 2: break;
				case 3: break;
				case 4: break;
				case 5: $this->req->is_delete_user($id);break;
				case 6: break;
				default: break;
			}
			$this->refresh();
			return true;
		}
		return false;
	}

	// Upload a new image into the server
	function upload() {
		if($this->is_uploading()) {
			$link = $this->get_data(IMG . LINK);
			$img = $this->get_data(IMG . NAME);
			$id = $this->get_data(ID);
			switch ($this->typ->get_type()) {
				case 0: $this->req->is_upload_flag($link, $img, $id); break;
				default: break;
			}
			return true;
		}
		return false;
	}

	// Execute the send of informations from view
	function execute_request($id_name) {
		if($this->is_submit()) {
			$this->send_data($id_name);
			if ($this->insert()) {}
				else if ($this->update()) {}
				else if ($this->delete()) {}
				else if ($this->upload()) {}
		}
	}
	
	//check if button submit has been released
	function is_submit() {
		return $this->is_inserting() || $this->is_updating() || $this->is_deleting() || $this->is_uploading();
	}
	
	// If insert button
	function is_inserting() {
		return $this->submit(SUB . ADD);
	}
	
	// If update button
	function is_updating() {
		return $this->submit(SUB . MOD);
	}
	
	// If delete button
	function is_deleting() {
		return $this->submit(SUB . DEL);
	}
	
	// If Upload button
	function is_uploading() {
		return $this->submit(SUB . IMG);
	}

	// Put a new data by name to local table
	function put_data($name, $value) {
		$this->data[$name] = $value; 
	}

	// Put a new data by the name of his input and id to local table
	function put_data_post($name) {
		if(isset($_POST[$name . $this->data[ID]])) {
				$this->data[$name] = $_POST[$name . $this->data[ID]];
		} else $this->data[$name] = "";
	}

	// Check if the input data is well inseted into local table
	function is_put_data($name_data, $name_value) {
		if(isset($_POST[$name_value])) {
			$this->data[$name_data] = $_POST[$name_value];
			return true;
		} else return false;
	}

	function get_data($name) {
		if (isset($this->data[$name])) {
			return $this->data[$name];
		} else return "";
	}

	function get_data_tab() { return $this->data; }
	function set_data($name, $new_data) { $this->data[$name] = $new_data; }

	// Check if a button has been submited
	function submit($my_sub) {
		return isset($_POST[$my_sub]);
	}

	function refresh() {
		echo "<script type='text/javascript'>change_body(go_look_page('". $this->typ->get_tab() ."'));</script>";
	}

}



?>
