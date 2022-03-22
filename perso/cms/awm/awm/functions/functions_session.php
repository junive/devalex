<? 
	include_once(realpath(__DIR__ . '/..') . "/functions/root.php");

	// Vérification des sessions user
	function is_user() {
		return isset ($_SESSION['LOGIN']) && isset($_SESSION['PASS'] ) 
			&& $_SESSION['LOGIN'] == $_SESSION['LOGIN2'] && $_SESSION['PASS'] == $_SESSION['PASS2'];
	}
	
	// Redirection en fontion du login
	function check_user_name() {
	 	if (!is_user()) {
			?><script type="text/javascript">window.location.href="<? echo AWM_DIR . "/index.php"; ?>";</script><?
			exit();
		}
	}
	
	// Vérification du niveau d'autorisation de l'utilisateur
	function is_nivel() {
		return $_SESSION['AUTORISATION'] == 1;
	}
	
	// On vérifie que les Logins ont été rentrés et l'autorisation.
	function check_user_all() {
 		if (!is_user()) {
			?><script type="text/javascript">window.location.href="<? echo AWM_DIR . "index.php"; ?>";</script><?
			exit();
		} else if (!is_nivel()) { // Partiel ou total
			?><script type="text/javascript">window.location.href="<? echo AWM_PAGE_INTE . "/index.php"; ?>";</script><?
		} else { //On valide la page
			echo "Bienvenue ".$_SESSION['LOGIN'];
		}
	}

?>
