<? session_start() ;
error_reporting(E_ALL | E_STRICT);
include_once(realpath(__DIR__ . '/..') . "/functions/root.php");
include_once(AWM_FUNC . "/functions_session.php");
include_once(AWM_FUNC . "/functions_panel.php");
include_once(AWM_FUNC . "/constant.php");
include_once(AWM_FUNC . "/control_response.php");
include_once(AWM_FUNC . "/control_view.php");
include_once(AWM_DATA . "/request.php");
check_user_all();
?>