<? session_start() ;
include_once("functions_session.php");
check_user_all(); ?>

<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>
<html xmlns='http://www.w3.org/1999/xhtml' xml:lang='fr' lang='fr'>
<head>
<meta http-equiv='Content-Type' content='text/html; charset =iso-8859-1' />
<link rel='stylesheet' type='text/css' href="interface_style.css" />
<link rel='stylesheet' href='../style.css' type='text/css' />

<title>Edition de pages</title>
</head>

<body style="margin: 0px;">


<?
error_reporting(E_ALL | E_STRICT);
include_once("functions_panel.php");
include_once("functions_request.php");
include_once("functions_name.php");
include_once("functions_general.php");
echo "<script type='text/javascript' src='../jscripts/tiny_mce/tiny_mce.js'></script>";
echo "<script type='text/javascript'>initTinyMCE();</script>";

	$pan = new Panel();
	$req = new Request();
	$gen_fun = new General_fun();
	$gen_req = new General_req();


	/*** LES ELEMENT GENERAUX PAR LANGUES ***/
	
	$my_page = "";
	$my_content = "";
	$my_content_2 = "";
	$my_index_lang = "";
	$my_index_menu = "";
	
	get_form_begin($form_1, "");
	if (submit($sub.$gen_top) || submit($sub.$gen_bot)) { // Modif of bottom/top
		$my_page = 0;
		$my_index_lang = $_POST[$put_value_name_1]; // get lang id
		if (submit($sub.$gen_top)) $title = $gen_top_bdd_col_name; // If top
			else if (submit($sub.$gen_bot)) $title = $gen_bot_bdd_col_name; // If bottom
		$res_gen = $req->get_gen_lang($my_index_lang, $title); // Get the contain of title
		while ($line = mysqli_fetch_object ($res_gen)) {
			$my_content = $line->contain;
			$my_index_menu = $line->id_general;
			break;
		}
	} else if (submit($sub.$page)) { // modif of pages
		$my_page = 1;
		$my_index_menu = $_POST[$put_value_name_1]; // get the menu index
		$my_index_lang = $_POST[$put_value_name_2]; // Get the lang index
		$res_gen = $req->get_page_by_menu_id($my_index_menu); // Get pages infos
		while ($line = mysqli_fetch_object ($res_gen)) {
			$title = $line->title;
			if ($title == $bdd_page_body) { // If title body
				$my_content = $line->contain;
			} else $my_content_2 = $my_content_2."<br/><div align='center'>".$title." : <br/>
				 <input type='text' value='".$line->contain."' 
				name='".$modif.$title."' size='100'/></div>"; // If metanames
			$pan->get_pan_hidden_value($id.$title, $line->id_pages);
		}
	}

	$pan->get_pan_hidden_value($page, $my_page);
	$pan->get_pan_hidden_value($lang_id, $my_index_lang); 
	$pan->get_pan_hidden_value($id, $my_index_menu);
	

	
	echo "<textarea id='my_content' name='my_content' rows='40' cols='100' style='width: 1000px'>";
		echo $my_content;
	echo "</textarea>";
?>
	<div>

		<!-- Some integration calls -->
		<a href="javascript:;" onMouseDown="tinyMCE.get('my_content').show();">[Show]</a>
		<a href="javascript:;" onMouseDown="tinyMCE.get('my_content').hide();">[Hide]</a>
		<a href="javascript:;" onMouseDown="tinyMCE.get('my_content').execCommand('Bold');">[Bold]</a>
		<a href="javascript:;" onMouseDown="alert(tinyMCE.get('my_content').getContent());">[Get contents]</a>
		<a href="javascript:;" onMouseDown="alert(tinyMCE.get('my_content').selection.getContent());">[Get selected HTML]</a>
		<a href="javascript:;" onMouseDown="alert(tinyMCE.get('my_content').selection.getContent({format : 'text'}));">[Get selected text]</a>
		<a href="javascript:;" onMouseDown="alert(tinyMCE.get('my_content').selection.getNode().nodeName);">[Get selected element]</a>
		<a href="javascript:;" onMouseDown="tinyMCE.execCommand('mceInsertContent',false,'<b>Hello world!!</b>');">[Insert HTML]</a>
		<a href="javascript:;" onMouseDown="tinyMCE.execCommand('mceReplaceContent',false,'<b>{$selection}</b>');">[Replace selection]</a>
	</div>

	<br />


<?
	echo $my_content_2;
	echo "<br/><br/><div align='center'><input type='submit' name='".$sub.$modif."' value='Submit' />";
	echo "<input type='reset' name='reset' value='Reset' /></div><br/><br/>";

get_form_end();


if (submit($sub.$modif)) {

	$my_link = "";
	$my_lang = $gen_req->get_lang_title($_POST[$lang_id]);
	$my_return = "";
	
	if ($_POST[$page] == 0) { // Bottom and top page
		$my_return = "insert_general";
		if ($req->add_gen_lang_by_id($_POST[$id], $_POST["my_content"])) {
			$res_menu = $req->get_text_menus_by_lang($_POST[$lang_id]);
			$my_link = $gen_req->get_first_menu_title_by_req($res_menu);
		} 
	} else 	if ($_POST[$page] == 1) { // Contents of the pages
		$my_return = "insert_pages";
		if ($req->is_modif_page_by_id($_POST[$id.$bdd_page_descript],  $_POST[$modif.$bdd_page_descript]) 
				&& $req->is_modif_page_by_id($_POST[$id.$bdd_page_key], $_POST[$modif.$bdd_page_key ])
				&& $req->is_modif_page_by_id($_POST[$id.$bdd_page_body], $_POST["my_content"])) {
			$res_menu = $req->get_text_menus_by_id($_POST[$id]);
			$my_link = $gen_req->get_first_menu_title_by_req($res_menu);
		}
	}

	// Copy the page from $my_link to an other one, more maleable
	if ($my_link != "") {
		$my_text = "\n <br/><br/><a href='/memo/".$my_return.".php'>Retour aux insertions</a>" ;
		$file_read_link = $_SERVER['DOCUMENT_ROOT']."/".$my_lang."/".$my_link.".php";
		$file_write_link =  $_SERVER['DOCUMENT_ROOT']."/memo/interface_preview.php";
		$gen_fun->copy_page($file_write_link, $file_read_link, "", $my_text);
		?><script type="text/javascript">window.location.href="/memo/interface_preview.php";</script><?
	} else echo "veuillez créer une page/menu dans la rubrique des menus textes selon la langue";
}

?>
</body>
</html>