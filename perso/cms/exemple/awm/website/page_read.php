<?php

	include_once(realpath(__DIR__ . "/..") . "/functions/root.php");
    include_once(AWM_FUNC . "/constant.php");
	include_once(AWM_FUNC . "/control_access.php");
	
class Page {

	var $acs;
	var $req;
	
	function Page() {
		$this->acs = new ControlAccess();
		$this->req = new Request();
	}

	// Create dinamicly the page
	function new_page($page_id) {
		error_reporting(E_ALL | E_STRICT);
		$page = $this->acs->get_page_unic_infos_by_id($page_id);
		$lang_id = $page[LANG . ID];
			echo "<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 
				'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>
				<html xmlns='http://www.w3.org/1999/xhtml' xml:lang='fr' lang='fr'>
					<head>
						<title>La Casa Hogar Los Gorriones - ". $page[MENU . TXT] ."</title>
						<meta http-equiv='Content-Type' content='text/html; charset =iso-8859-1' />
						<meta name='keywords' content='".$page[PAGE . KEY]."' />
						<meta name='description' content='".$page[PAGE . DES]."' />
						<meta name='verify-v1' content='mqxU6W+VTehYApL23mmWyT2dMp2mSn1Xj0UWDiFyqks=' />
						<link rel='stylesheet' href='".  SITE_PAGE_STYLE."/style.css' type='text/css' />
						<script type='text/javascript' src='". SITE_PAGE_SCRIPT ."/dynMenu.js'></script>
						<script type='text/javascript' src='". SITE_PAGE_SCRIPT ."/browserdetect.js'></script>
						<script type='text/javascript' src='". SITE_PAGE_SCRIPT ."/jscripts/jscript.js'></script>
						<!--[if IE]><style type='text/css'>  .menu li li {display:inline;}</style> <![endif]--> 
					</head>
					<body><div align='center'>";
			echo "<div class='p_top'>". $page[PAGE . TOP] ."</div>";
			echo $this->get_flags($page[LANG . ID], LANG_ID, LANG_FLAG, LANG_TITLE);
			echo  "<div class='p_title'>". $page[MENU . TXT] ."</div>";
			echo $this->get_menus($page[LANG . ID], $page[LANG . TIT], MENU_ID, MENU_UNIC_TXT);
			echo "<table style='width:980px'><tr><td>";
			echo "<div class='p_body' >". $page[PAGE . CONT] ."</div>";
			echo "</td></tr></table>";
			echo "<div class='p_bot'>". $page[PAGE . BOT] ."</div>";
			echo "</div>\n";
			echo $this->get_google();
			echo "\n</body></html>";
		// mysql_close();
	}
	
	function get_google() {
		return 	"";
	}

	function get_flags($lang_id, $lang_name_id, $lang_name_flag, $lang_name_title) {
		$res_lang = $this->acs->get_all_lang();
		$content = "<div class='p_flag'>";
		while ($line = mysqli_fetch_object ($res_lang)) {
			if ($lang_id != $line->$lang_name_id) {
				$content = $content."<a href='". MY_SITE ."/". $line->$lang_name_title ."/'>
					<img src='" .SITE_PAGE_IMAGE ."/". $line->$lang_name_flag ."' width='35' height='25' alt=''/></a>";
			}
		}
		$content = $content."</div>";
		return $content;
	}

	// Show the menu structure on the web site
	function get_menus($lang_id, $lang_title,  $menu_name_id, $menu_name_contain) {
		$content = "<div id='p_menus' class='p_menus'>
				<ul class='menu' id='menu' >";
		$res_menu =  $this->acs->get_parent_page_unic(0, $lang_id);
		if (mysqli_num_rows($res_menu) > 0) {
			while ($line_menu = mysqli_fetch_object ($res_menu)) {
				$content = $content . $this->get_children($line_menu,
					 $lang_id, $lang_title, $menu_name_id, $menu_name_contain);
			}
		}
		$content = $content . "</ul></div>";
		return $content;	
	}
	
	// Get All the menus
	function get_children($line, $lang_id, $lang_title, $menu_name_id, $menu_name_contain) {
		$content = "<li><a href='". MY_SITE ."/". $lang_title 
			."/". $line->$menu_name_contain .".php"."' >". $line->$menu_name_contain;
		$res = $this->acs->get_parent_page_unic($line->$menu_name_id, $lang_id);
		if (mysqli_num_rows($res) > 0) {
			$content = $content . " <img src='".SITE_PAGE_IMAGE ."/down-arrow.gif' class='menu_arrow' alt='' /> </a><ul>";
			while ($line_child = mysqli_fetch_object ($res)) {
				$res_child = $this->acs->get_parent_page_unic($line_child->$menu_name_id, $lang_id);
				if (mysqli_num_rows($res_child) > 0 )  { // If has children
					$content = $content . $this->get_children($line_child, 
						$lang_id, $lang_title, $menu_name_id, $menu_name_contain);
				} else {
					$content = $content . "<li><a href='". MY_SITE ."/". $lang_title 
					."/". $line_child->$menu_name_contain .".php"."' >". $line_child->$menu_name_contain ."</a></li>";				
				}
			}
			$content = $content . "</ul>";
		} else $content = $content . "</a>";
		$content = $content . "</li>";
		return $content;
	}
}
?>
