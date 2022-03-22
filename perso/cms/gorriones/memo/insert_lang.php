<? session_start() ;
include_once("functions_session.php");
check_user_all(); ?>

<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>
<html xmlns='http://www.w3.org/1999/xhtml' xml:lang='fr' lang='fr'>
<head>
<meta http-equiv='Content-Type' content='text/html; charset =iso-8859-1' />
<link rel='stylesheet' type='text/css' href="interface_style.css" />

<title>Les langues du site</title>
</head>

<body>

<? 
error_reporting(E_ALL | E_STRICT);
include_once("functions_panel.php");
include_once("functions_request.php");
include_once("functions_name.php");

	$pan = new Panel();
	$req = new Request();
	$res_lang = $req->get_all_lang();
	$cpt_lang = 0;
	
	// Structure des langues
	echo "<div class='insert_lang'>";
		div("Gestion des langues", "");
		$pan->show_pan_add("Ajouter une langue", "Ajouter une langue");
		
		// Formulaire de modif - suppression
		get_form_begin($form_2, "");
			while ($ligne = mysqli_fetch_object ($res_lang)) {
				echo "<ul>";
					$pan->set_tab_index(array($ligne->id_index_lang));
					$pan->get_pan_modif($ligne, $name_modif);
					$pan->get_pan_del($ligne, $name_del);
					$pan->get_pan_img($ligne, $name_img);
				echo "</ul>";
				$cpt_lang++;
			}
		$pan->get_pan_hidden($put_value_name_1);
		get_form_end();
	echo "</div>";

	// Les requêtes
	if(submit($sub.$name_add)) { 	// Ajout d'une langue
		$my_name = $_POST[$add.$name_add."0"];
		$req->is_insert_lang($my_name, $cpt_lang);
	} else if(submit($sub.$name_modif)) { 	// Modif d'une langue
		$my_index = $_POST[$put_value_name_1];
		$my_order = $_POST[$order.$name_modif.$my_index];
		$my_title = $_POST[$modif.$name_modif.$my_index];
		$req->is_modif_lang($my_order, $my_title, $my_index);
	} else if (submit($sub.$name_del)) { // Suppression d'un langue
		$my_index = $_POST[$put_value_name_1];
		$req->is_del_lang($my_index);
	} else if (submit($sub.$name_img)) { // Change flag
		$my_index = $_POST[$put_value_name_1];
		$my_new_link = $link.$name_img.$my_index;
		$my_img = $img.$name_img.$my_index;
		$req->is_upload_flag($my_new_link, $my_img, $my_index);
	}

	// mysql_close();
?>
</body>
</html>
