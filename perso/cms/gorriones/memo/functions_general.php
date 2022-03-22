<? include_once('../memo/functions_request.php');
   include_once('../memo/functions_name.php');
	$content = "";
class General_req {

	var $req ;


	function General_req() { 
		$this->req = new Request();
	}

	// Create dinamicly the page
	function new_page($get_lang_id, $get_menu_id) {
		global $bdd_page_key, $bdd_page_descript, $bdd_page_body;
		error_reporting(E_ALL | E_STRICT);
		$page = $this->get_pages($get_menu_id);
		$title_page = $this->get_text_menu_contain_by_id($get_menu_id);
		if (!$this->is_parent($get_lang_id, 15, $get_menu_id)) { // If !not fotos
			echo "<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 
				'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>
				<html xmlns='http://www.w3.org/1999/xhtml' xml:lang='fr' lang='fr'>
					<head>
						<title>La Casa Hogar Los Gorriones - ".$title_page."</title>
						<meta http-equiv='Content-Type' content='text/html; charset =iso-8859-1' />
						<meta name='keywords' content='".$page[$bdd_page_key]."' />
						<meta name='description' content='".$page[$bdd_page_descript]."' />
						<meta name='verify-v1' content='mqxU6W+VTehYApL23mmWyT2dMp2mSn1Xj0UWDiFyqks=' />
						<link rel='stylesheet' href='../style.css' type='text/css' />
						<script type='text/javascript' src='../../../../setting.js'></script>
						<script type='text/javascript' src='../jscripts/dynMenu.js'></script>
						<script type='text/javascript' src='../jscripts/browserdetect.js'></script>
						<script type='text/javascript' src='../jscripts/jscript.js'></script>
					</head>
					<body><div align='center'>";
			echo $this->get_gen_top($get_lang_id);
			echo $this->get_flags($get_lang_id);
			echo $this->get_title($title_page);
			echo $this->get_menus($get_lang_id);
			echo "<table style='width:980px'><tr><td>";
			echo $page[$bdd_page_body];
			echo "</td></tr></table>";
			echo $this->get_gen_bot($get_lang_id);
			echo "</div>\n";
			echo $this->get_google();
			echo "\n</body></html>";
		} else {
			echo "<html><link rel='stylesheet' href='../style.css' type='text/css' />
				<script type='text/javascript' src='../jscripts/jscript.js'></script>
				<body>".$page[$bdd_page_body]."</body></html>";
		}
		// mysql_close();
	}
	
	function get_google() {
		return 	"<script type=\"text/javascript\"> var gaJsHost = ((\"https:\" == document.location.protocol) ? \"https://ssl.\" : \"http://www.\"); document.write(unescape(\"%3Cscript src='\" + gaJsHost + \"google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E\"));</script><script type=\"text/javascript\">try {var pageTracker = _gat._getTracker(\"UA-2570897-3\");pageTracker._trackPageview();} catch(err) {}</script>";
	}
	
	function get_title($my_text) {
		return "<div class='p_title'>".$my_text."</div>";
	}
	
	function get_flags($id_lang) {
		$content = "";
		$res_lang = $this->req->get_all_lang();
		$content = $content."<div class='p_flag'>";
		while ($line = mysqli_fetch_object ($res_lang)) {
			if ($id_lang != $line->id_index_lang) {
				$content = $content."<a href='../".$line->title."/'>
					<img src='../image/".$line->flag."' width='35' height='25' alt=''/></a>";
			}
		}
		$content = $content."</div>";
		return $content;
	}

	// Show the menu structure on the web site
	function get_menus($id_lang) {
	global $content;
		$content = "";
		$my_lang = $this->get_lang_title($id_lang);
		$res_menu =  $this->req->get_page_by_lang_parent($id_lang, 0);
		$num_menu = mysqli_num_rows($res_menu);
		if ($num_menu > 0) {
			$content = $content."<div id='p_menus' class='p_menus'>
				<ul class='menu' id='menu' >";
			while ($line_menu = mysqli_fetch_object ($res_menu)) {
				$this->get_children($line_menu, $my_lang, $id_lang);
			}
			$content = $content."</ul></div>";
		}

		return $content;	
	}
	
	// Get All the menus
	function get_children($line, $my_lang, $id_lang) {
		global $siteUrl, $content, $gorrios;
		$title = $line->contain;
		$page = $this->get_menu_title_by_id($line->id_index_menus);
		$content = $content."<li><a href='".$siteUrl. $gorrios ."/".$my_lang."/".$page.".php"."' >".$title;
		$res = $this->req->get_page_by_lang_parent($id_lang, $line->id_index_menus);
		if (mysqli_num_rows($res) > 0 && $line->id_index_menus != 15) { // If not fotos
			$content = $content." <img src='../image/down-arrow.gif' 
				style='border:none;margin-bottom:2px;' alt='' /> </a><ul>";
			while ($line_child = mysqli_fetch_object ($res)) {
				$res_child = $this->req->get_page_by_lang_parent($id_lang, $line_child->id_index_menus);
				if (mysqli_num_rows($res_child) > 0 )  { // If has children
					$this->get_children($line_child, $my_lang, $id_lang);
				} else {
					$title_child = $line_child->contain;
					$page_child = $this->get_menu_title_by_id($line_child->id_index_menus);
					$content = $content."<li><a href='".$siteUrl. $gorrios . "/".$my_lang."/".$page_child.".php"."' >
						".$title_child."</a></li>";				
				}
			}
			$content = $content."</ul>";
		} else $content = $content."</a>";
		$content = $content."</li>";
	}
	
	function is_parent($id_lang, $id_parent, $id_child) {
		$res = $this->req->get_page_by_lang_parent($id_lang, $id_parent);
		while ($line = mysqli_fetch_object ($res)) {
			if ($line->id_menus == $id_child) {
				return true;
			}
		}
		return false;
	}
	
	
	// Return the containing of a page in a table
	function get_pages($id_menu) {
		global $bdd_page_key, $bdd_page_descript, $bdd_page_body;
		$res_menu = $this->req->get_page_by_menu_id($id_menu);
		$tab = array();

		while ($line = mysqli_fetch_object ($res_menu)) {
			$title = $line->title;
			$contain = $line->contain;
			if($title == $bdd_page_key) $tab[$bdd_page_key] = $contain;
				else if ($title == $bdd_page_descript) $tab[$bdd_page_descript] = $contain; 
				else if ($title == $bdd_page_body) {
					$contain = "<div class='p_body'>".$contain."</div>";
					$tab[$bdd_page_body] = $contain; 
				}
		}
		return $tab;
	}
	
	// Return the general text by langage and type
	function get_gen_text($lang_id, $my_type) {
		$res = $this->req->get_gen_lang($lang_id, $my_type);
		while ($ligne = mysqli_fetch_object ($res)) {
			return $ligne->contain;
		}
		return "";
	}
	
	// Get page top of the langage
	function get_gen_top($lang_id) {
		global $gen_top_bdd_col_name;
		return "<div class='p_top'>".$this->get_gen_text($lang_id, $gen_top_bdd_col_name)."</div>";
	}
	
	// Get page bottom of the langage
	function get_gen_bot($lang_id) {
		global $gen_bot_bdd_col_name;
		return "<div class='p_bot'>".$this->get_gen_text($lang_id, $gen_bot_bdd_col_name)."</div>";
	}
	
	// Get the page by his id
	function get_text_menu_by_id($my_index) {
		global $lang_id, $menu_id;
		$tab = array();
		$res_menu = $this->req->get_text_menus_by_id($my_index);
		while ($ligne = mysqli_fetch_object ($res_menu)) {
			$tab[$lang_id] = $ligne->id_index_lang;
			$tab[$menu_id] = $ligne->id_menus;
			break;
		}
		return $tab;
	}
	
	function get_text_menu_contain_by_id($my_index) {
		$res_menu = $this->req->get_text_menus_by_id($my_index);
		while ($line = mysqli_fetch_object ($res_menu)) {
			return $line->contain;
		}
		return "";
	}
	
	// Get the title of the menu by id
	function get_menu_title_by_id($id_menu) {
		$res = $this->req->get_menus_by_id($id_menu);
		while ($line = mysqli_fetch_object ($res)) {
			return $line->title;
		}
		return "";
	}
	
	// Return the first tilte of the menu
	function get_first_menu_title_by_req($res) {
		while ($line = mysqli_fetch_object ($res)) {
			$tmp = $line->contain;
			if ($tmp != "") return $this->get_menu_title_by_id($line->id_index_menus);
		}
		return "";
	}
	
	// Get the title of the langage index
	function get_lang_title($lang_id) {
		$res = $this->req->get_lang_by_index($lang_id);
		while ($ligne = mysqli_fetch_object ($res)) {
			return $ligne->title;
		}
		return "";
	}
	
	// Récupère la dernière langue insérer par nom
	function get_last_lang_id() {
		$res = $this->req->get_all_lang_desc();
		while ($line = mysqli_fetch_object ($res)) {
			return $line->id_index_lang;
		}
		return -1;
	}
	
	// Get the last menu id
	function get_last_text_menu_id() {
		$res = $this->req->get_all_text_menus_desc();
		while ($line = mysqli_fetch_object ($res)) {
			return $line->id_menus;
		}
		return -1;
	}
	
	
}

class General_fun {
	
	function General_fun() { }
	
	// Copy a page to an other one
	function copy_page($file_write_link, $file_read_link, $begin_text, $end_text) {
		if ($file_read = fopen($file_read_link,"r")) {
			$file_write = fopen($file_write_link,"w");
			$contents_to_write = fread($file_read,  filesize ($file_read_link));
			$contents_to_write =  $begin_text.$contents_to_write.$end_text;
			//chmod($file_write_link, 0775);
			fwrite($file_write, "$contents_to_write");
			fclose($file_write);
			fclose($file_read);
			return true;
		} else {
			return false;
		}
	}

	// Delete a folder
	function supprimer_repertoire($dir) { 
		$current_dir = opendir($dir);  
		while($entryname = readdir($current_dir)) { 
			if(is_dir("$dir/$entryname") and ($entryname != "." and $entryname!=".."))   { 
				supprimer_repertoire("${dir}/${entryname}"); 
			} elseif($entryname != "." and $entryname!="..") { 
				unlink("${dir}/${entryname}"); 
			} 
		} //Fin tant que  
		closedir($current_dir); 
		rmdir(${dir}); 
	}
	
		
	// Create a new page for the Web site
	function create_file($my_title, $my_index) { 
		global $lang_id, $menu_id;
		$gen_req = new General_req();
		$tab = $gen_req->get_text_menu_by_id($my_index);
		$my_lang_folder = $gen_req->get_lang_title($tab[$lang_id]);
		$my_var = "<? \$get_lang_id = $tab[$lang_id]; 
					  \$get_menu_id = $tab[$menu_id]; ?>" ;
		$file_read_link = $_SERVER['DOCUMENT_ROOT']."/memo/create_page.php";
		$file_write_link =  $_SERVER['DOCUMENT_ROOT']."/".$my_lang_folder."/".$my_title.".php";
		$this->copy_page($file_write_link, $file_read_link, $my_var, "");
	}
	
	// Create a new directory and refresh current page
	function create_dir($my_name) {
		$old = umask(0);
		mkdir($_SERVER['DOCUMENT_ROOT']."/".$my_name, 0755); // create folder
		umask($old);
		?><script type="text/javascript">window.location.href="";</script><?
	}

}


?>
