<? session_start() ;
include("infos.php");
include("panel_functions.php");
include("req_functions.php");
check_user_all(); ?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<LINK REL=STYLESHEET TYPE="text/css" HREF="interface_style.css" />

<title>Les langues du site</title>
</head>

<body>

<?
	connect_base();
	$res_lang = get_all_lang($db);
	$cpt_lang = 0;
	$tab_lang = array();
	$name_lang = "_lang_";
	
	// Structure des langues
	echo "<div class='lang_general'>";
		echo "<div class='lang_title'>Gestion des langues</div>";
		// Formulaire d'ajout
		echo "<form method='POST' name='lang_form_a' action=''>";
		echo "<ul class='lang_add_form'><li>Ajouter une langue </li>";
			get_add_pan("Ajouter une langue", $name_lang);
		echo "</form>";
		echo "<br/><br/><br/><br/><br/><br/>";
		// Formulaire de modif - suppression
		echo "<form  ENCTYPE='multipart/form-data' style='clear:left' method='POST' name='lang_form_m' action=''>";
		while ($ligne = mysqli_fetch_object ($res_lang)) {
			$tab_lang[$cpt_lang] = $ligne->id_index_lang;
			echo "<ul>";
			get_modif_pan($ligne, $name_lang.$cpt_lang);
			get_del_pan($ligne, $name_lang.$cpt_lang);
			get_img_pan($ligne, $name_lang.$cpt_lang);
			echo "</ul>";
			$cpt_lang++;
		}	
		echo "</form>";
	echo "</div>";


	// Ajout d'une langue
	if (is_insert_lang("sub_add".$name_lang, ${"text_add".$name_lang}, $cpt_lang, $db) ) {}

	// Modification - Suppression d'une langue
	for ($i = 0; $i < $cpt_lang; $i++) {
		$my_name = $name_lang.$i;
		$my_index = $tab_lang[$i];
		if (is_modif_lang("sub_modif".$my_name, ${"order_modif".$my_name}, ${"text_modif".$my_name}, $my_index, $db)){
		} else if (is_del_lang("sub_del".$my_name, $my_index, $db)) {
		} else if (is_upload_flag("sub_img".$my_name, "link_img".$my_name, $my_index, $db)) {}
	}
	// mysql_close();
?>
</body>
</html>
