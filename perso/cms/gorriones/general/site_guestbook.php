<?php @session_start();
ini_set('display_errors','on');
error_reporting(E_ALL);
$settingIniPath = 'guestbook/';$aConfig = parse_ini_file($settingIniPath  . 'setting.ini.php');?><?php 
                            /**
                            * validateManageComponent($input = component name)
                            */
                             if ( is_file( dirname(__FILE__) . "/guestbook/rvslib/component/rvsManageComponent.php") ) {
                                include( dirname(__FILE__) . "/guestbook/rvslib/component/rvsManageComponent.php");
                                validateManageComponent('GuestBook');
                            } elseif ( is_file( dirname(dirname(__FILE__)) . "/.rvsitebuilder/rvsManageComponent.php") ) {
                                include( dirname(dirname(__FILE__)) . "/.rvsitebuilder/rvsManageComponent.php");
                                validateManageComponent('GuestBook');
                            }
                        ?><?php if (class_exists('SGL_Fsbb')) {$rvblockerOF = &SGL_Fsbb::singleton();} else {include('guestbook/fsbb/fsbb.php');$rvblockerOF=new formSpamBotBlocker();} ?><?php echo '<?xml version="1.0" encoding="iso-8859-1" ?>'; ?>




<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">

<head>

<title>junive.com/alex/Gorriones</title>

<link rel="stylesheet" href="http://junive.com/alex/Gorriones/general/guestbook/style/style.css" type="text/css" />
<link rel="stylesheet" href="http://junive.com/alex/Gorriones/general/guestbook/style/Arial.css" type="text/css" />
<link href="<?php echo $aConfig['scriptUrl'];?>themes/style.css" rel="stylesheet" type="text/css" />

</head>

<body>


<script language="JavaScript" type="text/javascript">
//<!--
loaded = 1;
// -->
</script>
<!-- end of menu footer - PHP Layers Menu 3.2.0-rc (C) 2001-2004 Marco Pratesi - http://www.marcopratesi.it/ -->
<!-- END SUBMENU DATA -->

<div align="center">
<table>

      <tr>

        <td height="100%" valign="top" align="center">
			<?php include "guestbook/index.php"; ?>
		</td>

     </tr>

 </table>
</div>

</body>

</html>


<!-- Publish : RVSiteBuilder PRO Version 3.61 -->
<!-- Name : francais -->
<!-- Template : 17-502132-3_goldenrod_style5_2 -->
<!-- ID : af4ed5d72f832457ceccee116779a05f -->
<!-- Published date: June 6, 2009, 9:23 34 (GMT +00:00) -->