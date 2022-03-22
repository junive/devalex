<? session_start() ;
include_once("functions_session.php");
check_user_all(); ?>

<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>
<html xmlns='http://www.w3.org/1999/xhtml' xml:lang='fr' lang='fr'>
<head>
<meta http-equiv='Content-Type' content='text/html; charset =iso-8859-1' />
<link rel='stylesheet' type='text/css' href="interface_style.css" />

<title>Création contenu des pages</title>
</head>

<body>

<?
error_reporting(E_ALL | E_STRICT);
include_once("functions_panel.php");
include_once("functions_request.php");
include_once("functions_name.php");


	$pan = new Panel();
	$req = new Request();
	$res_gen = $req->get_all_lang();

	// Structure des menus
	echo "<div class='insert_general'>";
		div("Gestion du contenu des pages", "menu_title");
		div("ATTENTION !! UN SOUS MENU NE SERA PAS MODIFIABLE TANT QUE CELUI CI AURA UN MENU PARENT SANS NOM", "");
		echo "<br/><br/><br/><br/><br/><br/>";
		

		// Formulaire de modif - suppression
		get_form_begin($form_1, "functions_edit.php");
		while ($line_lang = mysqli_fetch_object ($res_gen)) {
			$id_lang = $line_lang->id_index_lang;
			$res_menu =  $req->get_page_by_lang_parent($id_lang, 0);
			if (mysqli_num_rows($res_menu) > 0) {
				echo "<ul>";
				echo "<li>-----".$line_lang->title."-----</li>";
					while ($line_menu = mysqli_fetch_object ($res_menu)) {
						get_children($line_menu, $id_lang, 0);
					}
				echo "</ul>";
			}
		}
		$pan->get_pan_hidden($put_value_name_2);
		$pan->get_pan_hidden($put_value_name_1);
		get_form_end();
	echo "</div>";


	// Recursive to get all the children
	function get_children($line, $id_lang, $cpt) {
		global $req;
		show_line($line, $id_lang, $cpt);
		$res =  $req->get_page_by_lang_parent($id_lang, $line->id_index_menus);
		while ($line_child = mysqli_fetch_object ($res)) {
			$res_child =  $req->get_page_by_lang_parent($id_lang, $line_child->id_index_menus);
			if (mysqli_num_rows($res_child) > 0) get_children($line_child, $id_lang, $cpt+1);
				else show_line($line_child, $id_lang, $cpt+1);
		}
	}
	
	
	function show_line($line, $id_lang, $cpt) {
		global $pan, $page;
		echo "<li>".$cpt.">".$line->contain."</li>";
		$pan->set_tab_index(array($line->id_menus, $id_lang));
		$pan->get_sub_put_value_pan("Modifier ".$cpt, $page);
	}

	// mysql_close();
?>


</body>
</html>