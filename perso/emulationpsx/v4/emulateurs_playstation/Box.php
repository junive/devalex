<style type="text/css">
<!--
.Style2 {
	font-size: 8pt;
	font-family: "comic sans ms";
}
.Style3 {font-size: 10pt; font-family: comic sans ms; color: #000099 }
-->
A {text-decoration: none;}
</style>

<?
// Appel de la requête pour compter le nombre de messages
include_once($_SERVER['DOCUMENT_ROOT'] . $parentFold . "/setting.php");

include($_SERVER['DOCUMENT_ROOT'] . $parentFold . $emuPsxV4 ."/emulateurs_playstation/Messages.php");

if (isset($_GET['logout'])) {
	$logout = htmlspecialchars($_GET['logout']);

	if ( $logout )
	{
	   session_destroy($userdata['session_id'], $userdata['user_id']);
	   redirect(append_sid($redirect_logout));
	}
}
/* 
href1 (href=111)  href=" ' . append_sid("/forum/profile.php?mode=editprofile") .  '" 
value1  (ivalue=111) :  value=" '  . append_sid($redirect_logout) . ' "
 value2 (value=222) : value="' . append_sid($redirect_login) . '"

*/


						if ( isset($userdata) && $userdata['session_logged_in'] )
						{echo $logue;}
						else
						{echo '<form action="'. $siteUrl . $emuPsxV4 .'/forum/login.php" method="post">   

<table border="0" cellpadding="0" cellspacing="0" align="center">
   <tr>
   		<td align="center"> 
		<table table border="0" cellpadding="0" cellspacing="0" align="center">
			<tr>
				<td align="center">	
				<a class="toto" href="'. $siteUrl . $emuPsxV4 .'/forum/profile.php?mode=register&sid=3d6daa9c50386f1be106685bfab64570"> <span class="Style2">S\'inscrire </Span></a>
		 		</td>
			</tr>
			<tr>
				<td align="center">	
				  <a class="toto" href="'. $siteUrl . $emuPsxV4 .'/forum/profile.php?mode=sendpassword"><span class="Style2"> Pass oublié ?</span> </a> 
				</td>
			</tr>
		</table>
		
		</td>
   </tr>
   <tr>
      <td align="right"><span class="Style3"> Login </span>
     <input type="text" height="15" style="font-family: comic sans ms;font-size:10px;color:#000099 ;background-color: #CCD7F7;width:80px" name="username"></td>
   </tr>
   <tr>
      <td align="right"><span class="Style3"> Pass </span>
      <input type="password" height="15" style="font-family: comic sans ms;font-size:10px;color:#000099 ;background-color: #CCD7F7;width:80px" name="password"></td>
   </tr>
   <tr>
      <td colspan="2" align="center">
	  <span class="Style3">Autologin</span><input class="text"  type="checkbox" name="autologin">
	  <input type="hidden" name="redirect" value="222"><input type="submit" style="font-family: comic sans ms;font-size:12px;color:#000099;background-color: #C0CEF5;width:30px" value="ok" name="login">

	  </td>
   </tr>
</table>
</form>';
}
?>
