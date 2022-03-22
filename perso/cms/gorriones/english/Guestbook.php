<?php @session_start();$settingIniPath = 'scripts/guestbook_d3de82be4d60ee7c9357e83ea797fb84/';$aConfig = parse_ini_file($settingIniPath  . 'setting.ini.php');?><?php 
                            /**
                            * validateManageComponent($input = component name)
                            */
                             if ( is_file( dirname(__FILE__) . "/scripts/rvslib/component/rvsManageComponent.php") ) {
                                include( dirname(__FILE__) . "/scripts/rvslib/component/rvsManageComponent.php");
                                rvsManageComponent::validateManageComponent('GuestBook');
                            } elseif ( is_file( dirname(dirname(__FILE__)) . "/.rvsitebuilder/rvsManageComponent.php") ) {
                                include( dirname(dirname(__FILE__)) . "/.rvsitebuilder/rvsManageComponent.php");
                                rvsManageComponent::validateManageComponent('GuestBook');
                            }
                        ?><?php if (class_exists('SGL_Fsbb')) {$rvblockerOF = &SGL_Fsbb::singleton();} else {include('scripts/fsbb/fsbb.php');$rvblockerOF=new formSpamBotBlocker();} ?><?php echo '<?xml version="1.0" encoding="iso-8859-1" ?>'; ?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">
<head>
<title>Guestbook</title>

<meta http-equiv="Content-Type" content="text/html; charset =iso-8859-1" />
<meta name="keywords" content="Casa, hogar, los, gorriones, orphanage, sparrows, children, needs, special, poverty, ayacucho, volunteer, work, programs, donations, help, education, health, care, kuska, construction, house, sponsor, program, food, history,development, international." />
<meta name="description" content="The Casa hogar Los Gorriones is a small family oriented orphanage in the region of Ayacucho in Peru.Los Gorriones welcomes abandoned children from age 0 to 18." />
 
<link rel="stylesheet" href="http://casahogarlosgorriones.org/english/style.css" type="text/css" />
<link rel="stylesheet" href="http://casahogarlosgorriones.org/english/Arial.css" type="text/css" />
<link rel="stylesheet" href="http://casahogarlosgorriones.org/english/2b3444f00dc2b06b14c73b7dce56e3a4.css" type="text/css" />
<link rel="stylesheet" href="http://casahogarlosgorriones.org/english/pathway.css" type="text/css" />


<script language="JavaScript" type="text/javascript" src="http://casahogarlosgorriones.org/english/rvsincludefile/rvsnavigator.js"></script>

<link href="<?php echo $aConfig['scriptUrl'];?>themes/style.css" rel="stylesheet" type="text/css" />
<script language="JavaScript" type="text/javascript" src="http://casahogarlosgorriones.org/english/js/layersmenu-library.js"></script>
<script language="JavaScript" type="text/javascript" src="http://casahogarlosgorriones.org/english/js/layersmenu.js"></script>

<script language="JavaScript" type="text/javascript" src="http://casahogarlosgorriones.org/english/rvsincludefile/rvscustomopenwindow.js"></script>


</head>

<body>
<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td height="80"><table width="100%" height="80" border="0" cellpadding="0" cellspacing="0">
      <!-- START LOGO --><tr>
        <td width="20">&nbsp;</td>
        <td width="150">&nbsp;</td>
        <td><strong>&nbsp;Casa Hogar Los Gorriones</strong></td>
      </tr><!-- END LOGO -->
    </table></td>
  </tr>
  <tr>
    <td height="49"><table width="100%" height="49" border="0" cellpadding="0" cellspacing="0">
      <tr>
        <td width="76">&nbsp;</td>
        <td background="http://casahogarlosgorriones.org/english/images/piece6.jpg" align="center"><table width="100%" height="49" border="0" cellpadding="0" cellspacing="0">
          <tr>
            <td width="10" background="http://casahogarlosgorriones.org/english/images/piece6.jpg">&nbsp;</td>
            <td align="center"><strong>&nbsp;&nbsp;</strong></td>
            <td width="10"><img src="images/piece6.jpg" width="3" height="49" /></td>
          </tr>
        </table></td>
        <td width="76">&nbsp;</td>
      </tr>
    </table></td>
  </tr>
  <tr>
    <td height="40"><table width="100%" height="40" border="0" cellpadding="0" cellspacing="0">
      <tr>
        <td width="40">&nbsp;</td>
        <td width="40" background="http://casahogarlosgorriones.org/english/images/piece1.jpg">&nbsp;</td>
        <td><div id="navigator">
<ul id="navigator">
<li><div id="hormenu1L1" onmouseover="clearLMTO();" onmouseout="setLMTO();"><a href="index.html"   id="normal" onmouseover="shutdown();"  target="_self" ><span>Los Gorriones</span></a></div></li>
<li><div id="hormenu1L2" onmouseover="clearLMTO();" onmouseout="setLMTO();"><a href="La-Casa.html"   id="normal" onmouseover="moveLayerX1('L2', 'hormenu1'); LMPopUp('L2', false);"  target="_self" ><span>La Casa&nbsp;<img src="images/down-arrow.gif" border="0" alt=">" /></span></a></div></li>
<li><div id="hormenu1L6" onmouseover="clearLMTO();" onmouseout="setLMTO();"><a href="Contact.html"   id="normal" onmouseover="shutdown();"  target="_self" ><span>Contact</span></a></div></li>
<li><div id="hormenu1L7" onmouseover="clearLMTO();" onmouseout="setLMTO();"><a href="Guestbook.php"   id="current" onmouseover="shutdown();"  target="_self" ><span>Guestbook</span></a></div></li>
<li><div id="hormenu1L8" onmouseover="clearLMTO();" onmouseout="setLMTO();"><a href="Donations.html"   id="normal" onmouseover="shutdown();"  target="_self" ><span>Donations</span></a></div></li>
<li><div id="hormenu1L9" onmouseover="clearLMTO();" onmouseout="setLMTO();"><a href="http://www.casahogarlosgorriones.org/francais/" title=" http://www.casahogarlosgorriones.org/francais/"   id="normal" onmouseover="shutdown();"  target="_self" ><span>Français</span></a></div></li>
</ul>
</div>

<!-- START SUBMENU DATA -->
<!-- beginning of menu footer - PHP Layers Menu 3.2.0-rc (C) 2001-2004 Marco Pratesi - http://www.marcopratesi.it/ -->
<div id="L2" class="submenu" onmouseover="clearLMTO();" onmouseout="setLMTO();">
    <table border="0" cellspacing="0" cellpadding="0">
<tr>
<td nowrap="nowrap">
    <div class="subframe">
    <div id="refL3" class="item">
<a href="Programs--and--Donation.html" onmouseover="LMPopUp('L2', true);" target="_self" ><span>&nbsp;Programs & Donation&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></a>
</div>
    <div id="refL4" class="item">
<a href="Children.html" onmouseover="LMPopUp('L2', true);" target="_self" ><span>&nbsp;Children&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></a>
</div>
    <div id="refL5" class="item">
<a href="Volunteers-Corner.html" onmouseover="LMPopUp('L2', true);" target="_self" ><span>&nbsp;Volunteers Corner&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></a>
</div>
</div>
</td>
</tr>
</table>
</div>

<script language="JavaScript" type="text/javascript">
//<!--
loaded = 1;
// -->
</script>
<!-- end of menu footer - PHP Layers Menu 3.2.0-rc (C) 2001-2004 Marco Pratesi - http://www.marcopratesi.it/ -->
<!-- END SUBMENU DATA -->
</td>
        <td width="40" background="http://casahogarlosgorriones.org/english/images/piece3.jpg">&nbsp;</td>
        <td width="40">&nbsp;</td>
      </tr>
    </table></td>
  </tr>
  <tr>
    <td><table width="100%" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td width="40"><table width="40" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td>&nbsp;</td>
          </tr>
        </table></td>
        <td width="40" background="http://casahogarlosgorriones.org/english/images/piece2.jpg" valign="top"><table width="40" height="100" border="0" cellpadding="0" cellspacing="0" background="http://casahogarlosgorriones.org/english/images/piece1.jpg">
          <tr>
            <td>&nbsp;</td>
          </tr>
        </table></td>
        <td width="10" align="center" valign="top"><table border="0" cellpadding="3" cellspacing="0">
           

        </table></td>
        <td><table width="100%" height="100%" border="0" cellpadding="5" cellspacing="0">
       

      <!-- Begin PATHWAY and ICON -->
      <tr>
        <td class="magin">
          <table cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <!-- Begin PATHWAY -->
              <td align="left" width="99%"><table cellpadding="0" cellspacing="0" width="100%"><tr><td> <a href="index.html"target="_top">Los Gorriones</a>&nbsp;&nbsp;&nbsp;<image class="pathway" src="http://casahogarlosgorriones.org/english/images/spacer.gif" >&nbsp;&nbsp;&nbsp;<b>Guestbook</b></tr></table></td>
              <!-- End PATHWAY -->
              <!-- Begin ICON -->
              <td align="right"><table cellpadding="0" cellspacing="0" width="100%"><tr><td>    <script type="text/javascript">        var SubjectLine='Check out the';        var BodyText='I thought you might be interested in the Programs and Donations. You can view it at%2C www.casahogarlosgorriones.org';        var Message    = '<a class="contact" href="mailto:?SUBJECT='+SubjectLine+'&BODY='+BodyText+'">'+'<input type="image" src="http://casahogarlosgorriones.org/english/images/pfbe.gif" title="Envoyer cette page &agrave; un ami" alt="Envoyer cette page &agrave; un ami"></a>';         var MessageIE = '<a href="mailto:?SUBJECT='+SubjectLine+'&BODY='+BodyText+'">'+'        <image src="http://casahogarlosgorriones.org/english/images/pfbe.gif" title="Envoyer cette page &agrave; un ami" alt="Envoyer cette page &agrave; un ami" width="22" height="22"  hspace="4" style="cursor:pointer" border="0">        '+'</a>';
                                        if(document.all) { document.write(MessageIE); }
                                        else { document.write(Message); };          
                                   </script></td><td><input type="image" src="http://casahogarlosgorriones.org/english/images/ppbe.gif" width="22" height="22" hspace="4" title="Imprimer cette page" alt="Imprimer cette page" onclick="window.print();return false;"></td><td><input type="image" src="http://casahogarlosgorriones.org/english/images/afbe.gif" width="22" height="22"  hspace="4" title="Ajouter au favoris" alt="Ajouter au favoris"onclick="
            if(window.sidebar){
                 window.sidebar.addPanel(document.title,location.href,'');
             }else if(window.external){
                 window.external.AddFavorite(location.href,document.title);
             }else if(window.opera&&window.print)    { 
                     return true; 
             }"></td></tr></table></td>
              <!-- End ICON -->
            </tr>
          </table>
        </td>
      </tr>
      <!-- End PATHWAY and ICON -->
      <tr>
        <td height="100%" valign="top"><table width="100%" border="0" cellpadding="0" cellspacing="0">
            <tr>
              <td align="left" valign="top" class="magin">

<?php include "scripts/guestbook_d3de82be4d60ee7c9357e83ea797fb84/index.php"; ?>
</td>
            </tr>
          </table>
        </td>
      </tr>
      <!-- Begin FOOTER -->
      <tr>
        <td align="center"></td>
      </tr>
      <!-- End FOOTER -->
      <!-- Begin BOTTOM -->
      <tr>
        <td align="center">
<style type="text/css">
<!--
a.domaine {
	font-family: Verdana, Arial, Helvetica, sans-serif;
	font-size: 9px;
	font-style: normal;
	font-weight: lighter;
	color: #666666;
	text-decoration: none;
}
-->
</style>
<a href="http://www.createurweb.ca" class="domaine" target="_blank" title="Créer un site Web à l'aide du Créateur de site Web"><strong>Site web</strong> fabriqu&eacute;
avec CreateurWeb.ca</a> <a href="http://www.desmondes.com" class="domaine" title="Nom de domaine gratuit inclus avec hébergement web à Montréal"target="_blank">Propuls&eacute; par DesMondes.com</a></td>
      </tr>
      <!-- End BOTTOM -->
      <tr>
        <td align="center"><table cellpadding="0" cellspacing="0">
            <tr>
              <td align="center" valign="bottom"></td>
              <td width="8"></td>
              <td align="center" valign="bottom" height="15"></td>
            </tr>
          </table>
        </td>
      </tr>
    </table></td>
        <td width="10" valign="top"><table border="0" cellpadding="3" cellspacing="0">
           

        </table></td>
        <td width="40" background="http://casahogarlosgorriones.org/english/images/piece4.jpg" valign="top"><table width="40" height="100" border="0" cellpadding="0" cellspacing="0" background="http://casahogarlosgorriones.org/english/images/piece3.jpg">
          <tr>
            <td>&nbsp;</td>
          </tr>
        </table></td>
        <td width="40"><table width="40" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td>&nbsp;</td>
          </tr>
        </table></td>
      </tr>
    </table></td>
  </tr>
  <tr>
    <td height="20">&nbsp;</td>
  </tr>
</table>
</body>
</html>

<!-- Publish : RVSiteBuilder PRO Version 3.62 -->
<!-- Name : english -->
<!-- Template : 17-502132-3_goldenrod_style5_2 -->
<!-- ID : e90aa99743e4c832c1da7f7fd0480040 -->
<!-- Published date: June 29, 2009, 8:46 58 (GMT +00:00) -->