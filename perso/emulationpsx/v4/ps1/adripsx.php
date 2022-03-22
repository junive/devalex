<? /*
include($_SERVER['DOCUMENT_ROOT'] . $parentFold . $emuPsxV4 ."/emulateurs_playstation/Session_html.php");
$redirect_login = "../emulateurs_playstation/adripsx.htm";
$redirect_logout = "../emulateurs_playstation/adripsx.htm";  */
$id=1; 
include("../../../../setting.php");
include($_SERVER['DOCUMENT_ROOT'] . $parentFold . $emuPsxV4 ."/emulateurs_playstation/infos.php");
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>Emulation Psx / Playstation - AdriPSX </title>
<? include($_SERVER['DOCUMENT_ROOT'] . $parentFold . $emuPsxV4 ."/emulateurs_playstation/Menus_ps1.php");  ?>

<td align="center" valign="top" >  		
		<table>
		<tr>
		<td> 		
		
		<TABLE cellspacing="0" border="0" ><tr><td height="20" ></td></tr></TABLE>
		
		<TABLE cellspacing="0"  class="borderText" rules="rows" >
			<tr><td class="TextTitre"> AdriPSX </td></tr>
			<tr><td class="Texte">
			
		
				<!--
			<table cellpadding="2" cellspacing="0" border="0" rules="rows"  align="center">
	
			<tr>

<?			//echo "<th width='80' class='borderText' ><a class='MenuEmuDessus' href='$redirect'>Infos</a></th>"; ?>
			<th width="2"></th>
			<th width="80" class="borderText" ><a class="MenuEmu" href="/emulateurs_playstation/adripsx_downloads.htm">Downloads</a></th>
			<th width="2"></th>
			<th width="80" class="borderText" ><a class="MenuEmu" href="/emulateurs_playstation/plugins.php">Plugins</a></th>	
			<th width="2"></th>
			<th width="80" class="borderText"><a class="MenuEmu" href="/emulateurs_playstation/utilitaires.php">Utilitaires</a></th>			
			<th width="2"></th>
			<th width="80" class="borderText"><a class="MenuEmu" href="/emulateurs_playstation/adripsx_screenshots.htm">Screenshots</a></th>
			</tr></table>
			-->

<br>

AdriPSX est un autre émulateur Psx assez rapide, et qui fonctionne avec quelques jeux. A vous de tester.
<br>


<BR>
<u>Site Officiel</u> :	<A HREF="http://adripsx.psxemu.com">http://adripsx.psxemu.com</A>
<BR><BR><BR>

 			</td></tr>						
			<tr><td class="TextTitre"> Téléchargement </td></tr>
			<tr><td class="Texte">
			
			 <BR> 
	<A HREF="<? echo $siteUrl. $emuPsxV4 ;?>/emulateurs_playstation/redir.php?redirection=clic.php&id=1"> AdriPSX ILE v. 1,05 </A>

 <BR>
<? 

 echo "Taille : $taille <br>";
 echo "Téléchargé : [$clics] fois <br>";
 ?>
<BR><BR>

		
			</td></tr>
			<tr><td class="TextTitre"> Votes des Utilisateurs : </td></tr>
			<tr><td class="Texte">
 <BR>
 <form action="../emulateurs_playstation/vote.php?id=1" method="post">

<? 
 include($_SERVER['DOCUMENT_ROOT'] . $parentFold . $emuPsxV4 ."/emulateurs_playstation/vote.php");
  ?>
 </form> 
 <BR> 			
 			</td></tr>						
			<tr><td class="TextTitre"> Liens Utiles : </td></tr>
			<tr><td class="Texte">
 <BR> <BR> <BR> <BR>
			
 			</td></tr>						
		</TABLE>
		
		
		
 		</td>
		</tr>
</table>
</td>


	
<? include($_SERVER['DOCUMENT_ROOT'] . $parentFold . $emuPsxV4 ."/emulateurs_playstation/Menus_ps2.php"); ?>	
</div>
</body>
</html>
