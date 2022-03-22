<? $get_lang_id = 2; 
					  $get_menu_id = 36; ?><?  
	include_once('../memo/functions_general.php');
	$gen_req = new General_req();
	echo $gen_req->new_page($get_lang_id, $get_menu_id);
?>

