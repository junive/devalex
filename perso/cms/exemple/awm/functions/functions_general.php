<? 
	include_once(realpath(__DIR__ . '/..') . "/functions/root.php");

class General {
	
	function General() { }
	
	// Copy a page to an other one
	function write_page($file_write_link, $text) {
		$file_write = fopen($file_write_link,"w");
		fwrite($file_write, "$text");
		fclose($file_write);
	}
	
	// Copy a page to an other one
	function copy_page($file_write_link, $file_read_link, $begin_text, $end_text) {
		if ($file_read = fopen($file_read_link,"r")) {
			$contents_to_write = fread($file_read,  filesize ($file_read_link));
			$contents_to_write =  $begin_text.$contents_to_write.$end_text;
			$file_write = fopen($file_write_link,"w");
			//chmod($file_write_link, 0775);
			fwrite($file_write, "$contents_to_write");
			fclose($file_write);
			fclose($file_read);
			return true;
		} else {
			return false;
		}
	}

	function get_contain_file($my_file) {
		if ($file_read = fopen($my_file,"r")) {
			return fread($file_read,  filesize ($my_file));
		} else return "";
	}
	
	function re_name($old_title, $new_title) {
		rename(ROOT . "/" . $old_title, ROOT . "/" . $new_title);
	}

	function delete_file($file) {
		$r = @unlink(ROOT . "/" . $file);
		if (!$r) {echo "erreur de suppression de fichier"; return false;}
			else return true;
	}

	// Delete a folder
	function delete_dir($dossier) {
		$dossier = ROOT . "/" . $dossier;
		$ouverture = @opendir($dossier);
		if (!$ouverture || !is_dir($dossier)){
			echo "<br /> the file ". $dossier ." doesn't exist";
			return;
		}
		while($fichier = readdir($ouverture)) {
			if ($fichier == '.' || $fichier == '..') continue;
				if (is_dir($dossier . "/" . $fichier)) {
					$r = $this->delete_dir($dossier . "/" . $fichier);
					if (!$r) return false;
				}
				else {
					$r = @unlink($dossier . "/" . $fichier);
					if (!$r) return false;
				}
		}
		closedir($ouverture);
		$r = @rmdir($dossier);
		@rename($dossier, "trash");
		return true;
	}

	// Create a new directory and refresh current page
	function create_dir($my_name) {
		$old = umask(0);
		mkdir(ROOT . "/" . $my_name, 0755); // create folder
		umask($old);
	}

	function get_files($folder) {
		$dir = opendir($folder);
		$tab_file = array();
		while($file = readdir($dir)) {
			if ($file != "." && $file != "..")
				$tab_file[] = $file;
		}
		closedir($dir); 
		return $tab_file;
	}

}


?>
