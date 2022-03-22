<? $get_page_id = 1; ?><?  
	include_once(realpath(__DIR__). "/page_read.php");
	$page = new Page();
	$page->new_page($get_page_id);
?>

<br/><br/><form action='../interface/index.php' name='form' 
				method='post' style='clear: left;' enctype='multipart/form-data'>
				<input type='hidden' name='Tab' value='awm_page_lang'/>
				<input type='submit'  name='Sub' value='Revenir' class='boutons'/></form>