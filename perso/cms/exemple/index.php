<? ini_set('display_errors','on');
error_reporting(E_ALL);
	 ?><?  
	
	$dirs = scandir(realpath(__DIR__));
	$awm = "";
	foreach($dirs as $key => $value)  {
		if (is_dir($value) && file_exists($value."/website/page_read.php")) $awm = $value;
	}

	include_once(realpath(__DIR__) . "/" . $awm . "/functions/root.php");
	include_once(AWM_FUNC . "/control_access.php");
	include_once(AWM_FUNC . "/control_response.php"); 

$acs = new ControlAccess();
$rsp = new ControlResponse(TAB_USER);
$acs->get_my_langage();

if (!$acs->is_tab_user_create()) { // If db is not created
	?><script>window.location.href="<? echo $awm ; ?>/db/index.php";</script><?
	return;
} else {

	$get_page_id = 1;

	include_once(realpath(__DIR__) ."/". $awm ."/website/page_read.php");

	$page = new Page();
	$page->new_page($get_page_id);
	
}
?>

