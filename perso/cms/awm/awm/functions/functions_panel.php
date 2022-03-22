<?php 
	include_once(realpath(__DIR__ . '/..') . "/functions/root.php");
    include_once(AWM_FUNC . "/constant.php");

class Panel {

	var $tab_index = array();

	function Panel() {
		$this->tab_index = array("0");
	}
	
	// Function : Set the table of all index
	function set_tab_index($new_tab) {
		$this->tab_index = $new_tab;
	}

	// Function : that allow to put how many information you want
	function mousedown_index() { 
		$mousedown = "";
		for ($i=0 ; $i<count($this->tab_index) ; $i++) {
			$mousedown = $mousedown."put_the_value_from_last(this, ".$this->tab_index[$i].", ".$i.");";
		}
		return $mousedown;
	}

	// General : begin of form page
	function get_gen_top($my_action, $title, $style1, $style2) {
		$this->get_begin_div($style1);
		$this->div($title, $style2);
		$this->get_form_begin(FORM, $my_action);
	}

	// General : end of form page
	function get_gen_bottom() {
		$this->get_pan_hidden(PUT1);
		$this->get_form_end();
		$this->get_end_div();
	}
	
	// General : Get a pan to delete or change infos
	function get_pan_model($id, $title, $order, $modif_name, $delete_name) {
		$this->set_tab_index(array($id));
		$this->get_pan_modif($title, $order, $modif_name);
		$this->get_pan_sub_delete($delete_name);
	}

	// Specific : Change the text of the menu
	function get_pan_menu_unic($menu_unic_txt, $i) {
		echo "<li style='display:none;visiblity:hidden;'><input type='hidden' style='display:none;visiblity:hidden;' 
			value='".  $this->tab_index[0] ."' name='". HID . ID . $i ."'/></li>";
		echo "<li style='display:none;visiblity:hidden;'><input type='hidden' style='display:none;visiblity:hidden;' 
			value='". $menu_unic_txt ."' name='". HID . TXT . $this->tab_index[0] ."'/></li>";
		$this->get_pan_text($menu_unic_txt, TXT . MOD);
	}

	// Specific : Add a new user
	function get_user_add_pan($log, $pass) {
		echo "<br/><br/>". $log ." : ";
		$this->get_pan_text("", TXT . ADD);
		echo  $pass." :";
		$this->get_pan_text("", TXT . MOD);
	}

	// Specific : show the users infos
	function get_pan_user($name, $date, $hour) {
		echo "<li> ". $date ."</li>";
		echo "<li> ". $hour ."</li>"; 	
		echo "<li> ". $name ."</li> "  ;
	}

	// Specific : return a valid or rest button
	function get_valid_reset_button($button_name) {
		echo "<br/><br/><div align='center'>";
		$this->get_pan_reset();
		$this->get_pan_sub_update($button_name);
		echo "</div><br/><br/>";
	}
	
	// Specific : return to the page
	function get_return_interface_button($button_name, $type) {
		$this->get_form_begin(FORM, "../interface/index.php");
		$this->get_pan_hidden_value(TAB, $type);
		$this->get_pan_sub_name($button_name, "");
		$this->get_pan_hidden(PUT2);
		$this->get_form_end();
	}
	
	// Panel : Add new infos
	function get_pan_add($button_name) {
		$this->get_pan_text("", TXT . ADD);
		$this->get_pan_sub_insert($button_name);
	}

	// Panel : Change infos
	function get_pan_modif($modif, $order, $button_name) {
		$this->get_pan_text($modif, TXT . MOD);
		$this->get_pan_text($order, TXT . ORD);
		$this->get_pan_sub_update($button_name);
	}

	// Panel : Add a instant new image
	function get_pan_img($link, $name) {
		echo "<li><input onchange='". $this->mousedown_index() ." submit_element(\"". SUB . IMG ."\")' 
			type='file' value='Parcourir' name='". IMG . LINK . $this->tab_index[0] ."' /></li>";
		if ($link == "") $link = "pixel.gif";
		echo "<li><img class='lang_flag' name='". IMG . NAME . $this->tab_index[0] ."' 
				src='". SITE_PAGE_IMAGE ."/". $link ."' alt='' /></li>";
		echo "<li><input type='submit' value='". $name ."' name='". SUB . IMG ."' style='visibility:hidden' /> </li>";
	}

	// Panel : Add an input text with a title text
	function get_pan_input_title($title, $value, $name) {
		echo "<br/><div align='center'> ". $title ." <br/>";
		echo "<li><input type='text' value='". $value ."' name='". $name ."' size='100'/></li>";
	}
	
	// Panel : option list with text tab, $selected : first value, $is_num : get text or numeric POST
	function get_pan_select($tab, $selected, $is_num) {
		echo "<li><select style='margin:0;padding:0;'  name='". TXT . ORD . $this->tab_index[0] ."'>"; 
		for ($i = 0 ; $i < sizeof($tab) ; $i++) {
			$sel_name = ($tab[$i] == $selected) ? "SElECTED" : "";
			$val = ($is_num) ? $i : $tab[$i];
			echo "<option  value='". $val ."' ". $sel_name .">". $tab[$i] ."</option>";
		}
		echo "</select></li>";
	}
	
	// Panel option list with numeric show, $begin : first num, $end : last num
	function get_pan_select_num($name, $begin, $end, $selected) {
		echo "<li><select style='margin:0;padding:0;' onChange='submit()' name='". $name ."'>";
		for ($i = $begin ; $i <= $end ; $i++) {
			$sel_name = ($i == $selected) ? "SElECTED" : "";
			echo "<option value='". $i ."' ". $sel_name .">". $i ."</option>" ;
		} 
		echo "</select></li>";
	}

	// Panel : Create a text area field
	function get_text_area($content) {
		echo "<li><textarea id='". CONT ."' name='". CONT ."' rows='40' cols='100' style='width: 1000px'>";
		echo $content;
		echo "</textarea></li>";
	}

	// Panel : Input hidden button
	function get_pan_hidden($my_name) {
		$this->get_pan_hidden_value($my_name, "");
	}
	
	// Panel : Input hidden button
	function get_pan_hidden_mod($my_value) {
		$this->get_pan_hidden_value(TXT . MOD . $this->tab_index[0], $my_value);
	}

	// Panel : Delete button
	function get_pan_sub_delete($title) {
		$this->get_pan_sub_name($title, DEL);
	}

	// Panel : Submit button without instant put value
	function get_pan_sub_update($title) {
		$this->get_pan_sub_name($title, MOD);
	}
	
	// Panel : Submit button without instant put value
	function get_pan_sub_insert($title) {
		$this->get_pan_sub_name($title, ADD);
	}
	
	// Panel : Input hidden button with value
	function get_pan_hidden_value($my_name, $value) {
		echo "<input type='hidden' style='display:none;' value='".$value."' name='".$my_name."' />";
	}

	// Panel : submit with hidden put value properties
	function get_pan_sub_name($title, $name) {
		echo "<li class='update_li'><input class='boutons' type='submit' value='". $title ."' name='". SUB . $name ."' 
			onclick=\" ". $this->mousedown_index() ."  \" /></li>";
	}

	// Panel : Text button
	function get_pan_text($value, $name) {
		$my_value = "";
		if (isset($_POST[$name . $this->tab_index[0]])) {
			$my_value = $_POST[$name . $this->tab_index[0]];
		} else $my_value = $value;
		echo "<li><input type='text' value='". $my_value ."' name='". $name . $this->tab_index[0] ."' /></li>";
	}
	
	// Panel : reset button
	function get_pan_reset() {
		echo "<li><input type='reset' name='reset' value='Reset' /></li>";
	}

	/**** GENERAL ELEMENTS ****/

	// Create a line	
	function li($my_title, $my_class) {
		echo "<li class='".$my_class."'>".$my_title."</li>";
	}
	
	// Create a div
	function div($my_title, $my_class) {
		echo "<div class='".$my_class."'>".$my_title."</div>";
	}

	// Create a begin div
	function get_begin_div($style) {
		echo "<div class='". $style ."'>";
	}
	
	// Create a end div
	function get_end_div() {
		echo "</div>";
	}
	
	// Create a begin ul
	function get_begin_ul($style) {
		echo "<ul class='". $style ."'>";
	}
	
	// Create a end ul
	function get_end_ul() {
		echo "</ul>";
	}

	// Create a begin form with POST
	function get_form_begin($my_name, $my_action) {
		echo "<form  enctype='multipart/form-data' style='clear:left' 
			method='post' name='". $my_name ."'  action='". $my_action ."'>";
	}
	
	// Create an end of forms
	function get_form_end() {
		echo "</form>";
	}
}
?>