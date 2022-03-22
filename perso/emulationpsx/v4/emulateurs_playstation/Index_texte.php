	<!--CENTRE + INFORMATION  -->


<TD align="center" valign="top" >
<table>
		<tr>
		<td> 
<TABLE cellspacing='0' border='0' ><tr><td height='20' ></td></tr></TABLE>

<? 
		$Request="SELECT * FROM psx_Index_texte ORDER BY nomb DESC";
		$resu=mysqli_query($db, $Request);
		while ($lig = mysqli_fetch_object ($resu))
		{echo "<TABLE cellspacing='0' class='borderText' rules='rows' >";
		echo "<tr><td class='TextTitre'>". utf8_encode($lig->titre) ."</td></tr>";
		echo "<tr><td class='Texte'>";
		echo utf8_encode($lig->texte);
		echo "<span class='Date'>$lig->date </span>";
		echo "</td></tr></TABLE>";
		echo "<TABLE cellspacing='0' border='0'><tr><td height='5'  align='center' ></td></tr></table>";}		
 ?>	
 		</td>
		</tr>
</table>
 </TD>	