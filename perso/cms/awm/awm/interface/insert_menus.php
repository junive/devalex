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

$ctrl = new ControlView(TAB_MENU);

/*	$pan = new Panel();
	$req = new Request();
	$res_menu = $req->get_menus_by_parent(0);
	$cpt_menu = 0;
	
	// Structure des menus
	echo "<div class='insert_menu'>";
		div("Gestion des menus", "menu_title");
		$pan->show_pan_add("Ajouter un menu", "Ajouter un menu");
		
		// Formulaire de modif - suppression
		get_form_begin($form_2, "");
		while ($line = mysqli_fetch_object ($res_menu)) {
			echo "<ul>";
				get_children($line, 0);
			echo "</ul>";
			$cpt_menu++;
		}
		$pan->get_pan_hidden($put_value_name_1);
		get_form_end();
	echo "</div>";
	

	function get_children($line, $cpt) {
		global $req;
		show_line($line, $cpt);
		$res_menu_child = $req->get_menus_by_parent($line->id_index_menus);
		while ($line_child = mysqli_fetch_object ($res_menu_child)) {
			$res = $req->get_menus_by_parent($line_child->id_index_menus);
			if (mysqli_num_rows($res) > 0) get_children($line_child, $cpt+1);
				else show_line($line_child, $cpt+1);
		}
	}
	
	function show_line($line, $cpt_child) {
		global $name_modif, $name_del, $pan, $name_add;
		$pan->set_tab_index(array($line->id_index_menus));
		$pan->get_pan_modif($line, $name_modif);
		$pan->get_pan_del($line, $name_del);
		$pan->get_pan_add($cpt_child." : Ajouter menu", $name_add);
		echo "<br/>";
	}
	
	// Les requêtes
	if(submit($sub.$name_add)) {
		$my_index = 0;
		if (isset($_POST[$put_value_name_1]) && $_POST[$put_value_name_1] != "") {
			$my_index = $_POST[$put_value_name_1];
		}
		$my_name = $_POST[$add.$name_add.$my_index];
		$req->is_insert_menu($my_name, $cpt_menu, $my_index);
	} else if(submit($sub.$name_modif)) {
		$my_index = $_POST[$put_value_name_1];
		$my_order = $_POST[$order.$name_modif.$my_index];
		$my_title = $_POST[$modif.$name_modif.$my_index];
		$req->is_modif_menu($my_order, $my_title, $my_index);
	} else if (submit($sub.$name_del)) {
		$my_index = $_POST[$put_value_name_1];
		$req->is_del_menu($my_index);
	}

	// mysql_close(); */
?>

</body>
</html>
