<?php

	include_once("functions_name.php");
	echo "<script type='text/javascript' src='functions_javascript.js'></script>";

class Panel {

	var $tab_index = array();

	function __construct() {}
	function __destruct() {}

	// Panel d'ajout
	function get_pan_add($button_name, $my_name) {
		global $add, $sub;
		echo "<li><input type='text' value='' name='".$add.$my_name.$this->tab_index[0]."' /></li>";
		echo "<li><input class='boutons' type='submit' value='$button_name'	name='".$sub.$my_name."'
			onmousedown=\" ". $this->mousedown_index() ."  \" /></li>";
	}

	// Panel de modification
	function get_pan_modif($my_line, $my_name) {
		global $modif, $order, $sub;
		echo "<li><input type='text' value='".$my_line->title."' name='".$modif.$my_name.$this->tab_index[0]."' /></li>";
		echo "<li><input type='text' value='".$my_line->class_order."' name='".$order.$my_name.$this->tab_index[0]."' /></li>";
		echo "<li><input class='boutons' type='submit' value='Modif' name='".$sub.$my_name."' 
			onmousedown=\" ". $this->mousedown_index() ."  \" /></li>";
	}

	// bouton de suppression
	function get_pan_del($my_line, $my_name) {
		global $sub;
		echo "<li><input class='boutons' type='submit' value='Sup' name='".$sub.$my_name."'
			onmousedown=\" ". $this->mousedown_index() ."  \" /></li>";
	}

	// Panel d'ajout d'image
	function get_pan_img($my_line, $my_name) {
	global $link, $img, $sub;
		$my_index = $my_line->id_index_lang;
		echo "<li><input onchange='". $this->mousedown_index() ." ;submit_element(\"".$sub.$my_name."\")' 
			type='file' value='Parcourir' name='".$link.$my_name.$my_index."' /></li>";
		echo "<li><img class='lang_flag' name='".$img.$my_name.$my_index."' src='../image/".$my_line->flag."' alt='' />
			<input type='submit' value='Modifier Image' name='".$sub.$my_name."' style='visibility:hidden' /> </li>";
	}

	// Panel submit with hidden put value properties
	function get_sub_put_value_pan($my_title, $my_name) {
		global $sub;
		echo "<li><input class='boutons' type='submit' value='".$my_title."' name='".$sub.$my_name."' 
			onmousedown=\" ". $this->mousedown_index() ."  \" /></li>";
	}

	// Input hidden button
	function get_pan_hidden($my_name) {
		echo "<input type='hidden' value='' name='".$my_name."' />";
	}
	
	function get_pan_hidden_value($my_name, $my_value) {
		echo "<input type='hidden' value='".$my_value."' name='".$my_name."' />";
	}

	// Panel de gestion avec langues
	function get_pan_menu($button_name, $my_name) {
		echo "<li><input type='text' value='' name='menu_add".$my_name."' /></li>";
		echo "<li><input class='boutons' type='submit' value='$button_name'	name='sub_menu_add".$my_name."' /></li>";
	}

	// Set the table of all index
	function set_tab_index($new_tab) {
		$this->tab_index = $new_tab;
	}

	// Function that allow to put how many information you want
	function mousedown_index() {
		$mousedown = "";
		for ($i=0 ; $i<count($this->tab_index) ; $i++) {
			$mousedown = $mousedown."put_the_value_from_last(this, ".$this->tab_index[$i].", ".$i.");";
		}
		return $mousedown;
	}

	// Formulaire d'ajout
	function show_pan_add($my_title, $my_but) {
		global $form_1, $name_add, $put_value_name_1;
		$this->set_tab_index(array("0"));
		get_form_begin($form_1, "");
			div($my_title, "");
			$this->get_pan_add($my_but, $name_add);
			$this->get_pan_hidden($put_value_name_1);
		get_form_end();
		echo "<br/><br/><br/><br/><br/><br/>";
	}

}

	/**** LES ELEMENTS GENERAUX ****/

	// Début de formulaire avec POST
	function get_form_begin($my_name, $my_action) {
		global $form;
		echo "<form  enctype='multipart/form-data' style='clear:left' 
			method='post' name='".$form.$my_name."'  action='".$my_action."'>";
	}
	
	// Fin de formulaire
	function get_form_end() {
		echo "</form>";
	}

	// Create a line	
	function li($my_title, $my_class) {
		echo "<li class='".$my_class."'>".$my_title."</li>";
	}
	
	// Create a div
	function div($my_title, $my_class) {
		echo "<div class='".$my_class."'>".$my_title."</div>";
	}

?>