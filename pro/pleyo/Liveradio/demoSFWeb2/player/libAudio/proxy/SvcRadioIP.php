<?php
require_once "HTTP/Request.php";

$req =& new HTTP_Request("http://phoenixprod.baracoda.com/SvcRadioIP.php");
$req->setMethod(HTTP_REQUEST_METHOD_GET);
$req->setHttpVer("1.0");

// since the gadget cannot include custom http headers
// they are passed as GET arguments
$http_device_assets = "";
foreach($_GET as $ind=>$val) {
  if(strcmp($ind, "HTTP_device_ASSETS"))
    $req->addQueryString($ind, $val, true);
  else
    $http_device_assets = $val;
}

$req->addHeader("User-Agent", "liveradio/1.0");
$req->addHeader("Mac-Address", "00:00:00:00:00:01");
$req->addHeader("User-Platform", "wdgt_vista_sidebar");
$req->addHeader("User-Platform-Version", "1.4.0");

// add the optional custom headers retrieved from the GET request
if(strlen($http_device_assets)>0)
  $req->addHeader("HTTP_device_ASSETS", $http_device_assets);
  
$req->sendRequest();
header('Content-Type: text/xml');
echo $req->getResponseBody();
?>
