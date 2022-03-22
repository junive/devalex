<?php include(realpath(__DIR__ . '/..') . "/functions/include1.php"); ?>

<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>
<html xmlns='http://www.w3.org/1999/xhtml' xml:lang='fr' lang='fr'>
<head>
<meta http-equiv='Content-Type' content='text/html; charset =iso-8859-1' />
<link rel='stylesheet' type='text/css' href="../themes/default/style.css" />

<title>Les menus du site</title>
</head>

<body>

<?

$ctrl = new ControlView(TAB_MENU_UNIC);

/*
	$pan = new Panel();
	$req = new Request();
	$res_lang = $req->get_all_lang();
	$tab_index = array();
	$tab_old = array(); // Check if contain has changed
	$cpt_menus = 0;
	
	// Structure des langues
	echo "<div class='insert_text_menu'>";
		div("Gestion du texte des menus", "lang_title");

		// Formulaire de modif - suppression
		get_form_begin($form_1, "");
		while ($line_lang = mysqli_fetch_object ($res_lang)) {
			echo "<ul>";
				echo "<li>-----".$line_lang->title."-----</li>";
				$res_menu = $req->get_menus_by_parent(0);
				while ($line_menu = mysqli_fetch_object ($res_menu)) {
					get_children($line_menu, $line_lang->id_index_lang, 0);
				}
			echo "</ul>";
		}	
		echo "<input class='boutons' type='submit' value='Modifier menus' name='".$sub."'/>";
		get_form_end();
	echo "</div>";
	
	// Recursive to get all the children
	function get_children($line, $id_lang, $cpt) {
		global $req;
		$title = $line->title;
		echo "<li>".$cpt.">".$title."</li>";
		$id_menu =  $line->id_index_menus;
		get_text_menu($id_menu, $id_lang, $title);
		$res = $req->get_menus_by_parent($id_menu);
		while ($line_child = mysqli_fetch_object ($res)) {
			$id_menu_child = $line_child->id_index_menus;
			$res_child = $req->get_menus_by_parent($id_menu_child);
			if (mysqli_num_rows($res_child) > 0) { // If has children
				get_children($line_child, $id_lang, $cpt+1);
			} else { 
				$title = $line_child->title;
				echo "<li>".($cpt+1).">".$title."</li>";
				get_text_menu($id_menu_child , $id_lang, $title);
			}
		}
	}
	
	// Create new line in BDD if doesn't exist, else show menu
	function get_text_menu($my_index_menu, $my_index_lang, $my_title) {
		global $cpt_menu_txt, $total_menu, $req;
		if (!show_line($my_index_menu, $my_index_lang, $my_title)) {
			if ($req->is_insert_menu_text($my_index_lang, $my_index_menu)) {
				show_line($my_index_menu, $my_index_lang, $my_title);
			}
		}
	}

	// If no result menu, return false to create a new child
	function show_line($my_index_menu, $my_index_lang, $my_title) {
		global $tab_old, $tab_index, $cpt_menus, $modif, $req, $add;
		$res_txt_menu = $req->get_text_menus_by_index($my_index_lang, $my_index_menu);
		while ($line = mysqli_fetch_object ($res_txt_menu)) {
			$my_index = $line->id_menus;
			$tab_index[$cpt_menus] = $my_index;
			$tab_old[$cpt_menus] = $line->contain;
			echo "<input type='hidden' value='".$my_title."' name='".$modif."_".$add."_".$my_index."'/>";
			echo "<input type='text' value='".$line->contain."' name='".$modif."_".$my_index."'/>";
			$cpt_menus++;
			return true;
		}
		return false;
	}
	
	if (submit($sub)) {
		for ($i = 0; $i < $cpt_menus; $i++) {
				$my_modif = $_POST[$modif."_".$tab_index[$i]];
				$my_title = $_POST[$modif."_".$add."_".$tab_index[$i]];
				if (isset($my_modif) && $my_modif != "" && $my_modif != $tab_old[$i]) {
					$req->is_modif_menu_text($my_modif, $my_title, $tab_index[$i]);
				}
		}
		?><script type="text/javascript">window.location.href="";</script><?
	}
	
// mysql_close();
*/
?>


</body>
</html>

