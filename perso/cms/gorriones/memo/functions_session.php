<? 

	// Vérification des sessions user
	function is_user() {
		$my_bool = false;
		if (!isset ($_SESSION['LOGIN']) && !isset($_SESSION['PASS'] ) )  {
			$my_bool = true;
		} else if ($_SESSION['LOGIN'] != $_SESSION['LOGIN2'] || $_SESSION['PASS'] != $_SESSION['PASS2']) {
			$my_bool = true;
		}
		return $my_bool;
	}
	
	// Redirection en fontion du login
	function check_user_name() {
	 	if (is_user()) {
			header("Location: index.php");
			exit();
		}
	}
	
	// Vérification du niveau d'autorisation de l'utilisateur
	function is_nivel() {
		return $_SESSION['AUTORISATION'] == 1;
	}
	
	// On vérifie que les Logins ont été rentrés et l'autorisation.
	function check_user_all() {
 		if (is_user()) {
			header("Location: index.php");
			exit();
		} else if (!is_nivel()) { // Partiel ou total
			header("Location: menu.php");
		} else { //On valide la page
			echo "Bienvenue ".$_SESSION['LOGIN'];
		}
	}

?>
