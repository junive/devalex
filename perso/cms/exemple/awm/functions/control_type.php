<?php
	include_once(realpath(__DIR__ . '/..') . "/functions/root.php");
    include_once(AWM_FUNC . "/constant.php");

class ControlType {

	var $tab;

	// Will detect the Table currently in use
	function ControlType($tab) {
		$this->tab = $tab;
	}

	// Put a new Table DB
	function set_tab($new_tab) {
		$this->tab = $new_tab;
	}
	
	// Put a new Table DB
	function get_tab() {
		return $this->tab;
	}

	// Return the int corresponding to the table selected
	function get_type() {
		switch ($this->tab) {
			case (TAB_LANG) : return 0;
			case (TAB_MENU) : return 1;
			case (TAB_MENU_UNIC) : return 2;
			case (TAB_PAGE_LANG) : return 3;
			case (TAB_PAGE_UNIC) : return 4;
			case (TAB_USER) : return 5;
			case (TAB_HIST) : return 6;
			case (TAB_CONFIG) : return 7;
		}
	}
}
?>