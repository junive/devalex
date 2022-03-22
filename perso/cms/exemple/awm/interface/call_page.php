<?php
	include_once(realpath(__DIR__ . '/..') . "/functions/root.php");
	include_once(AWM_FUNC . "/control_view.php");

if (isset($_POST["my_tab"])) {
	$page = new ControlView($_POST["my_tab"]);
} 
?>
