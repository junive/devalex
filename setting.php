<?php
ini_set('display_errors','on');
error_reporting(E_ALL);

	$siteUrl = "http://free.fr/devalex";
	$parentFold = '/devalex';

	$emuPsxV4 = "/perso/emulationpsx/v4";
	$cv2010 = "/folio/2010";
	$gorrios = "/perso/cms/gorriones";
	$autoweb_exemple = "/perso/cms/exemple";
	$europellier = "/universite/hotel";
	
	$mysql_host = 'sql.free.fr'; // The server
	$mysql_login = ''; //  Login
	$mysql_pass = ''; // Password
	$mysql_dbnom = ''; // Name of data base 
	
	$db = new mysqli($mysql_host, $mysql_login, $mysql_pass, $mysql_dbnom);
?>