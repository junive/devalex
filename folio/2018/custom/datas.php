<?php
ini_set('display_errors','on');
error_reporting(E_ALL);
//header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include("../../../setting.php");

$outp = "";

//$db = new mysqli($mysql_host, $mysql_login, $mysql_pass, $mysql_dbnom);
$db->set_charset('utf8');

$result = $db->query("SELECT * FROM cva_project");

/* Ne pas delete -> Exemple de convertion json old fashion
$numberOfFields = mysqli_num_fields($result) - 1;

$fields = array();
for ($i = 0; $i <= $numberOfFields; $i++) {
	$fields[] = mysqli_fetch_field_direct($result, $i)->name;
}
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
	for ($i = 0; $i <= $numberOfFields; $i++) {
		echo "<br>" . $fields[$i];
		// ETC ....
	}
	// ECT....
}
*/

$rows = array();
while($rs = $result->fetch_assoc()) {
	$rows[] = $rs;
}
echo '{"cvDB":'. json_encode($rows) .'}';

$db->close();
?> 