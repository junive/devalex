<?php @session_start();$settingIniPath = 'scripts/guestbook_310b4794026c85fb5af5519e9b625598/';$aConfig = parse_ini_file($settingIniPath  . 'setting.ini.php');?><?php 
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





<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">

<head>

<title>casahogarlosgorriones.org</title>




<body>



<script language="JavaScript" type="text/javascript">
//<!--
loaded = 1;
// -->
</script>
<!-- end of menu footer - PHP Layers Menu 3.2.0-rc (C) 2001-2004 Marco Pratesi - http://www.marcopratesi.it/ -->
<!-- END SUBMENU DATA -->
</td>

        <td width="40" background="http://casahogarlosgorriones.org/francais/images/piece3.jpg">&nbsp;</td>

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

        <td width="40" background="http://casahogarlosgorriones.org/francais/images/piece2.jpg" valign="top"><table width="40" height="100" border="0" cellpadding="0" cellspacing="0" background="http://casahogarlosgorriones.org/francais/images/piece1.jpg">

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

              <td align="left" width="99%"><table cellpadding="0" cellspacing="0" width="100%"><tr><td> <a href="../back/back_brouillon/index.html"target="_top">Accueil</a>&nbsp;&nbsp;&nbsp;<image class="pathway" src="http://casahogarlosgorriones.org/francais/images/spacer.gif" >&nbsp;&nbsp;&nbsp;<b>Guestbook</b></tr></table></td>

              <!-- End PATHWAY -->

              <!-- Begin ICON -->

              <td align="right"><table cellpadding="0" cellspacing="0" width="100%"><tr><td>    <script type="text/javascript">        var SubjectLine='Allez voir le site';        var BodyText='Visitez le site de la casa Los Gorriones%2C www.casahogarlosgorriones.org';        var Message    = '<a class="contact" href="mailto:?SUBJECT='+SubjectLine+'&BODY='+BodyText+'">'+'<input type="image" src="http://casahogarlosgorriones.org/francais/images/pfbe.gif" title="Envoyer cette page &agrave; un ami" alt="Envoyer cette page &agrave; un ami"></a>';         var MessageIE = '<a href="mailto:?SUBJECT='+SubjectLine+'&BODY='+BodyText+'">'+'        <image src="http://casahogarlosgorriones.org/francais/images/pfbe.gif" title="Envoyer cette page &agrave; un ami" alt="Envoyer cette page &agrave; un ami" width="22" height="22"  hspace="4" style="cursor:pointer" border="0">        '+'</a>';
                                        if(document.all) { document.write(MessageIE); }
                                        else { document.write(Message); };          
                                   </script></td><td><input type="image" src="http://casahogarlosgorriones.org/francais/images/ppbe.gif" width="22" height="22" hspace="4" title="Imprimer cette page" alt="Imprimer cette page" onclick="window.print();return false;"></td></tr></table></td>

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

<?php include "scripts/guestbook_310b4794026c85fb5af5519e9b625598/index.php"; ?>
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

        <td width="40" background="http://casahogarlosgorriones.org/francais/images/piece4.jpg" valign="top"><table width="40" height="100" border="0" cellpadding="0" cellspacing="0" background="http://casahogarlosgorriones.org/francais/images/piece3.jpg">

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


<!-- Publish : RVSiteBuilder PRO Version 3.61 -->
<!-- Name : francais -->
<!-- Template : 17-502132-3_goldenrod_style5_2 -->
<!-- ID : af4ed5d72f832457ceccee116779a05f -->
<!-- Published date: June 6, 2009, 9:23 34 (GMT +00:00) -->