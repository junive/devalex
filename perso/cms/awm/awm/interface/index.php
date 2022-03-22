<? session_start();
	include_once(realpath(__DIR__ . '/..') . "/functions/root.php");
	include_once(AWM_FUNC . "/functions_session.php");
	include_once(AWM_FUNC . "/functions_panel.php");
	include_once(AWM_FUNC . "/functions_general.php");
	include_once(AWM_FUNC . "/control_view.php");
	include_once(AWM_FUNC . "/constant.php");
	include_once(AWM_FUNC . "/control_access.php");
check_user_name(); 


echo "<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>";
echo "<html xmlns='http://www.w3.org/1999/xhtml'>";
echo "<head>";
echo "<meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />";
echo "<title>Interface de sites</title>";
echo "<link rel='stylesheet' href='". AWM_PAGE_THEME ."/default/style.css' type='text/css' />";
echo "<script type='text/javascript' src='". AWM_PAGE_SCRIPT ."/menu.js'></script>";
echo "<script type='text/javascript' src='". AWM_PAGE_SCRIPT ."/ajax.js'></script>";
echo "<script type='text/javascript' src='". AWM_PAGE_SCRIPT ."/jscripts.js'></script>";
echo "<script type='text/javascript' src='". SITE_PAGE_SCRIPT ."/browserdetect.js'></script>";
echo "</head>";
echo "<body>";


$inter = new MyInterface();

class MyInterface {
	
	var $pan;
	var $acs;
	var $gen;
	
	function MyInterface() {
		$this->pan = new Panel();
		$this->gen = new General();
		$this->acs = new ControlAccess();
		$this->acs->get_my_langage();
		$this->show_menu();
		if (isset($_POST[TAB])) $tab = $_POST[TAB];
			else $tab = TAB_LANG;
		$this->show_body($tab);
	}

	function show_menu() {
	echo "<div id='p_menu' class='p_menu' align='center' >";
		$this->pan->get_form_begin(FORM, "");
		echo "<ul id='menu' class='menu'>";
			echo "<li><input type='button' value='". NAME_int_config ."' name='config' />";
				echo "<ul>";
					echo "<li><input type='button' value='". NAME_int_gene ."' name='config_general'
						onclick=\"change_body(go_look_page('". TAB_CONFIG ."'));\" /></li>";
					echo "<li><input type='button' value='". NAME_int_user ."' name='config_general'
						onclick=\"change_body(go_look_page('". TAB_USER ."'));\" /></li>";
					echo "<li><input type='button' value='". NAME_int_history ."' name='config_general'
						onclick=\"change_body(go_look_page('". TAB_HIST ."'));\" /></li>";
					echo "<li><input type='button' value='". NAME_int_bdd ."' name='config_general'
						onclick=\"change_body(
						
						<iframe src='". AWM_DATA ."/index.php' width='950' height='550' name='body_frame'></iframe> 
						
						); \" /></li>";
				echo "</ul>";
			echo "</li>";
			echo "<li><input type='button' value='". NAME_int_cons ."' name='config' />";
				echo "<ul>";
					echo "<li><input type='button' value='". NAME_int_lang ."' name='config_general'
						onclick=\"change_body(go_look_page('". TAB_LANG ."'));\" /></li>";
					echo "<li><input type='button' value='". NAME_int_menu ."' name='config_general'
						onclick=\"change_body(go_look_page('". TAB_MENU ."'));\" /></li>";
					echo "<li><input type='button' value='". NAME_int_menu_unic ."' name='config_general'
						onclick=\"change_body(go_look_page('". TAB_MENU_UNIC ."'));\" />";
					echo "</li>";
				echo "</ul>";
			echo "</li>";
			echo "<li><input type='button' value='". NAME_int_update ."' name='config' />";
				echo "<ul>";
					echo "<li><input type='button' value='". NAME_int_page_lang ."' name='config_general'
						onclick=\"change_body(go_look_page('". TAB_PAGE_LANG."'));\" /></li>";
					echo "<li><input type='button' value='". NAME_int_page_unic ."' name='config_general'
						onclick=\"change_body(go_look_page('". TAB_PAGE_UNIC ."'));\" /></li>";
				echo "</ul>";
			echo "</li>";	
		echo "</ul>";
		$this->pan->get_form_end();
		echo "</div>";
	}
	
	function show_body($tab) {
		echo "<div class='p_body' id='p_body'>";
		$ctrl = new ControlView($tab);
		echo "</div>";
	}

}


echo "</body></html>";
?>


