<?php include(realpath(__DIR__ . '/..') . "/functions/include1.php"); ?>

<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>
<html xmlns='http://www.w3.org/1999/xhtml' xml:lang='fr' lang='fr'>
<head>
<meta http-equiv='Content-Type' content='text/html; charset =iso-8859-1' />
<link rel='stylesheet' type='text/css' href="../themes/default/style.css" />

<title>Création haut et bas de page</title>
</head>

<body>

<?
$ctrl = new ControlView(TAB_PAGE_LANG);

/*

	$pan = new Panel();
	$req = new Request();
	$res_gen = $req->get_all_lang();

	// Structure des menus
	echo "<div class='insert_general'>";
		div("Gestion du haut et bas de page", "menu_title");
		echo "<br/><br/><br/><br/><br/><br/>";
		
		// Formulaire de modif - suppression
		get_form_begin($form_1, "../website/page_edit.php");
		while ($line = mysqli_fetch_object ($res_gen)) {
				echo "<ul>";
					li($line->title, "");
					$pan->set_tab_index(array($line->id_index_lang));
					$pan->get_sub_put_value_pan("Modifier haut de page", $gen_top);
					$pan->get_sub_put_value_pan("Modifier bas de page", $gen_bot);
				echo "</ul>";
		}
		$pan->get_pan_hidden($put_value_name_1);
		get_form_end();
	echo "</div>";

	// mysql_close();
	*/
?>


</body>
</html>