<? $get_page_id = 30; ?><?  
	$home = realpath(__DIR__ . "/..");
	$dirs = scandir($home);
	$read = "";
	
	foreach($dirs as $key => $value)  {
		if (is_dir($home . "/" . $value) && file_exists($home . "/". $value. "/website/page_read.php")) {
			$read = $home ."/". $value . "/website/page_read.php";
		}
	}
	
	include_once($read);

	$page = new Page();
	$page->new_page($get_page_id);
?>

