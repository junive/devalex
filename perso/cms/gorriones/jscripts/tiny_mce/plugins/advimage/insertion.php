<?php 


include('../../../../memo/functions_name.php');

connect_base();


			$root_file =  $_SERVER['DOCUMENT_ROOT']."/image/";
			if (move_uploaded_file($_FILES["D:\SITES\New Casa\image\msie5x.gif"]["tmp_name"], $root_file.$_FILES["D:\SITES\New Casa\image\msie5x.gif"]["name"]) ) {
		echo "ok"; 
		} else echo "nok";

	

// mysql_close();
?>