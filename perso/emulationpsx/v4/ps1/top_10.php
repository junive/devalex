<? /*
include($_SERVER['DOCUMENT_ROOT'] . $parentFold . $emuPsxV4 ."/emulateurs_playstation/Session_html.php");
$redirect_login = "../emulateurs_playstation/emulateur.htm";
$redirect_logout = "../emulateurs_playstation/emulateur.htm"; */
include("../../../../setting.php");
?>


<html>
<head>
<title>EmuPsx.com -> playstation ->TOP/Meilleurs emulateurs  </title>
<? include($_SERVER['DOCUMENT_ROOT'] . $parentFold . $emuPsxV4 ."/emulateurs_playstation/Menus_ps1.php");


 ?>

<td align="center" valign="top" >  		
	<table>
		<tr>
		<td> 		
		
		<TABLE cellspacing="0" border="0" ><tr><td height="20" ></td></tr></TABLE>
		
		<TABLE cellspacing="0"  class="borderText" rules="rows" >
			<tr><td class="TextTitre" >TOP Emulateurs :</td></tr>
			<tr><td class="Texte">
			
<form action="../emulateurs_playstation/vote.php?id=1" method="post">
 <br><br>
<? $id=1;
include($_SERVER['DOCUMENT_ROOT'] . $parentFold . $emuPsxV4 ."/emulateurs_playstation/top_clic.php");
?>
 </form> 	



<BR><BR><BR>



			</td></tr>
  		</TABLE>
		
		<TABLE cellspacing="0" border="0" ><tr><td height="5" ></td></tr></TABLE>
 		</td>
		</tr>
</table>
</td>


	
<? include($_SERVER['DOCUMENT_ROOT'] . $parentFold . $emuPsxV4 ."/emulateurs_playstation/Menus_ps2.php"); ?>	
</div>
</body>
</html>
