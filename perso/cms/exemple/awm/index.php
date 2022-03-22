<? session_start() ;

	include_once(realpath(__DIR__) . "/functions/root.php");
	include_once(AWM_FUNC . "/control_access.php");
	include_once(AWM_FUNC . "/control_response.php"); 

$acs = new ControlAccess();
$rsp = new ControlResponse(TAB_USER);
$acs->get_my_langage();

if (!$acs->is_tab_user_create()) { // If db is not created
	?><script>window.location.href="db/index.php";</script><?
	return;
} else {
	$msg = "";
	// If the first user has been created
	$rsp->init_config();
	$res_user = $acs->get_all_user();
	$new_user = (mysqli_num_rows($res_user) == 0) ? true : false;
	echo "<head> <style>
	.example_gorrio img {
		border: 2px solid #bdc3c7;
		border-radius: 6px;
		box-shadow: 0 0 1em #000;
	}

	.example_gorrio img:hover {
		opacity:0.8;
	}
	</style>
	</head>";
	
	echo "<body><div align='center'><br /><br /><br />
		 <div style='font-size:18px;'> BACK OFFICE ACCESS :</div>";
	//echo "Login : test / Password : test ";
	
	
	
	//if ($new_user)  echo NAME_index_inscript;
		//else echo NAME_index_interface;
	echo "<form method='post' name='entree' action=''>";
	echo " <br />". NAME_index_name;
	echo "<br /><input type='text' name='user' value='test' /><br />";
	echo NAME_index_pass ."<br>";
	echo "<input type='password'  name='pass1' value='test'/><br />";
	if ($new_user) {
		echo NAME_index_repass ."<br />";
		echo "<input type='password'  name='pass2'  value='test'/><br />";
	}
	
	echo "<input type='submit' name='valid_user' Value='". NAME_index_valid ."'/>";

	if (isset($_POST['valid_user']))  {
		if ($new_user) { // If new user
			if ($_POST['user'] == "" || $_POST['pass1'] == "" || $_POST['pass2'] == "") {
				$msg = NAME_index_error_all;
			} else if (md5($_POST['pass1']) != md5($_POST['pass2'])) { 
				$msg = NAME_index_error_two_pass;
			} else if ($rsp->is_insert_user($_POST['user'], md5($_POST['pass1']), 1)) {
				set_user($_POST['user'], $_POST['user'], md5($_POST['pass1']), md5($_POST['pass1']), 1);
			} else {
				$msg = NAME_index_error_wrong_log; 
			}
		} else if ($_POST['user'] == "" || $_POST['pass1'] == ""){
			$msg = NAME_index_error_all;
		} else { // Connect the user registered
			$user_info = $acs->get_corresponding_user_infos($_POST['user'], md5($_POST['pass1']));
			if ($user_info[USER . NAME] == "") {
				$msg = NAME_index_error_wrong_log;
			} else {
				set_user($_POST['user'], $user_info[USER . NAME], md5($_POST['pass1']), $user_info[USER . PASS] , $user_info[USER . NIV]);
			}
		}
	// mysql_close();
	}
	
	
	echo "<br/><br/>". $msg;
	
	echo "<br/><br/><div style='font-size:18px;'>EXAMPLE BUILD WITH THIS CMS : </div></br>
		<a class='example_gorrio' href='../../gorriones/index.php' target='_blank' style='cursor:pointer'> 
		<img src='./gorriones.jpg' /></a>
		";
	
	echo "</form></div></body>";
}

// Set the sessions
function set_user($user1, $user2, $pass1, $pass2, $nivel) {
	global $rsp;
	$_SESSION['LOGIN'] = $user1;
	$_SESSION['PASS'] = $pass1; 
	$_SESSION['LOGIN2'] = $user2;
	$_SESSION['PASS2'] = $pass2; 
	$_SESSION['AUTORISATION'] = $nivel;
	$rsp->is_insert_history($user2);
	?><script type="text/javascript">window.location.href="interface/index.php";</script><?
}

?>
