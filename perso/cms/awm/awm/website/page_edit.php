<? session_start() ;
error_reporting(E_ALL | E_STRICT);
include_once(realpath(__DIR__ . '/..') . "/functions/root.php");
include_once(AWM_FUNC . "/functions_session.php");
include_once(AWM_FUNC . "/functions_panel.php");
include_once(AWM_FUNC . "/control_access.php");
include_once(AWM_FUNC . "/control_type.php");
include_once(AWM_FUNC . "/control_response.php");
include_once(AWM_FUNC . "/constant.php");
check_user_all(); ?>

<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>
<html xmlns='http://www.w3.org/1999/xhtml' xml:lang='fr' lang='fr'>
<head>
<meta http-equiv='Content-Type' content='text/html; charset =iso-8859-1' />
<?php

echo "<link rel='stylesheet' href='". AWM_PAGE_THEME ."/default/style.css' type='text/css' />";
echo "<script type='text/javascript' src='". AWM_PAGE_SCRIPT ."/tiny_mce/tiny_mce.js'></script>";
echo "<script type='text/javascript' src='". AWM_PAGE_SCRIPT ."/jscripts.js'></script>";
echo "<script type='text/javascript'>initTinyMCE();</script>"; 
?>
<title>Edition de pagees</title>
</head>

<body style="margin: 0px;">

<?php



if (isset($_POST[TAB])) {
	$my_edit = new PageEdit($_POST[TAB]);
} else if (isset($_POST[TAB . PAGE])) {
	$new_rsp = new ControlResponse( $_POST[TAB . PAGE]);
	$new_rsp->execute_request(PUT1);
}

class PageEdit {

	var $pan;
	var $acs;
	var $rsp;
	var $typ;

	function PageEdit($tab) {
		$this->pan = new Panel();
		$this->acs = new ControlAccess();
		$this->typ = new ControlType($tab);
		$this->rsp = new ControlResponse($tab);
		$this->acs->get_my_langage();
		$this->view_all();
	}

	function view_all() {
		$my_content_body = "";
		$this->pan->get_return_interface_button(NAME_general_return, $this->typ->get_tab());
		$this->pan->get_gen_top("", "", "edit_page", "");
		switch ($this->typ->get_type()) {
			case 3:
				$page_lang_id = $_POST[PUT1];
				if ($this->rsp->submit(SUB . TOP)) $col_name = PAGE . TOP;
					else if ($this->rsp->submit(SUB . BOT)) $col_name = PAGE . BOT;
				$page = $this->acs->get_page_lang_infos($page_lang_id); 
				$my_content_body =  $page[$col_name];
				$this->pan->set_tab_index(array($page_lang_id));
				$this->pan->get_pan_hidden_mod($col_name);
				break;
			case 4 :
				$page_unic_id = $_POST[PUT1]; // Get the page unic index
				$page = $this->acs->get_page_unic_infos_by_id($page_unic_id); // Get pages infos
				$my_content_body = $page[PAGE . CONT];
				$this->pan->get_pan_input_title(NAME_page_unic_keys,  $page[PAGE . KEY], TXT . KEY);
				$this->pan->get_pan_input_title(NAME_page_unic_descript,  $page[PAGE . DES], TXT . DES);
				$this->pan->set_tab_index(array($page_unic_id));
				break;
			default: break;
		}
		$this->pan->get_text_area($my_content_body);
		$this->pan->get_valid_reset_button(NAME_general_change);
		$this->pan->get_pan_hidden_value(TAB . PAGE, $this->typ->get_tab());
		$this->pan->get_gen_bottom();
	}
}

?>
</body>
</html>