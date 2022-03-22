<?
define("DEFAULT_LANGAGE", "francais.php");

define("ROOT", realpath(__DIR__ . '/../..')); // AutoWebMaster directory path
define("AWM_ROOT", realpath(__DIR__ . '/..')); // awm directory path
define("AWM_FUNC", AWM_ROOT . "/functions");
define("AWM_DATA", AWM_ROOT . "/db");
define("AWM_WEBS", AWM_ROOT . "/website");
define("AWM_IMAG", AWM_ROOT . "/images");
define("AWM_LANG", AWM_ROOT . "/langs");
define("AWM_THEM", AWM_ROOT . "/themes");

include_once(AWM_DATA . "/setting.php"); // MY_SITE URL

define("AWM_DIR", "/". basename(realpath(__DIR__ . '/..'))); // awm directory name
define("AWM_PAGE_EDIT", MY_SITE . AWM_DIR . "/website/page_edit.php" );
define("AWM_PAGE_INTE", MY_SITE . AWM_DIR . "/interface");
define("AWM_PAGE_SCRIPT", MY_SITE . AWM_DIR . "/jscripts");
define("AWM_PAGE_THEME", MY_SITE . AWM_DIR . "/themes");
define("SITE_PAGE_IMAGE", MY_SITE . "/images");
define("SITE_PAGE_SCRIPT", MY_SITE . "/jscripts");
define("SITE_PAGE_STYLE", MY_SITE . "/style");


?>