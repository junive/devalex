	<!-- POTEAU DROIT  -->
<TD class="potMenu">

	<TABLE width="150" cellspacing="0" align="right" >		
		<tr><td class="potH"></td></tr>
		<TR><TD class="pot">
		<span class="partenaire">Partenaires :</span>
			<table align="center" valign="top"><tr><td class="lienpartenaire">	
			<? $Req="SELECT * FROM psx_partenaire";
			$res=mysqli_query($db, $Req);
			while ($lignes = mysqli_fetch_object ($res))
			{echo "<A class='toto' HREF='$lignes->urlpart'>$lignes->nompart</A>";} ?>
			</td></tr></table>
		</TD></TR>	
	
		<TR><td class="Playstation" >PLAYSTATION 2</TD></TR>
		
		<TR><TD>
			<TABLE align="center" width="135"  cellspacing="0" >		
				<tr><td height="10"></td></tr>
				<tr><TD CLASS="MenuFond">EMULATEURS</td></tr>	
				<tr><td  align="center">
					<Table width="120"  cellspacing="0">
					<tr><th class="borderTop"><a class="dudu" href="<? echo $siteUrl . $emuPsxV4 ."/ps1/adripsx.php"; ?>">NeutrinoSX2</a></th></tr>
					<tr><th class="borderTop"><a class="dudu" href="<? echo $siteUrl . $emuPsxV4 ."/ps1/adripsx.php"; ?>">PCSX2</a></th></tr>
					<tr><th class="borderTop"><a class="dudu" href="<? echo $siteUrl . $emuPsxV4 ."/ps1/adripsx.php"; ?>">PS2Emu</a></th></tr>	
					<tr><th class="borderBas"><a class="top"href="<? echo $siteUrl . $emuPsxV4 ."/ps1/adripsx.php"; ?>"> TOP Emulateurs </a>  </th></tr>	
					</table>
				</td></tr>
				<tr><td height="10"></td></tr>
				<tr ><TD CLASS="MenuFond">PLUGINS</td></tr>	
					<tr><td  align="center">
					<Table width="120" cellspacing="0">
					<tr><th class="borderTop"><a class="dudu"  href="<? echo $siteUrl . $emuPsxV4 ."/ps1/adripsx.php"; ?>">Videos</a></th></tr>
					<tr><th class="borderTop"><a class="dudu" href="<? echo $siteUrl . $emuPsxV4 ."/ps1/adripsx.php"; ?>">Audio</a></th></tr>
					<tr><th class="borderTop"><a class="dudu" href="<? echo $siteUrl . $emuPsxV4 ."/ps1/adripsx.php"; ?>">CDVD</a></th></tr>
					<tr><th class="borderTop"><a class="dudu" href="<? echo $siteUrl . $emuPsxV4 ."/ps1/adripsx.php"; ?>">Input / Pad</a></th></tr>
					<tr><th class="borderTop"><a class="top" href="<? echo $siteUrl . $emuPsxV4 ."/ps1/adripsx.php"; ?>">Indispensables</a></th></tr>
					<tr><th class="borderBas"><a class="top" href="<? echo $siteUrl . $emuPsxV4 ."/ps1/adripsx.php"; ?>">TOP plugins</a> </th> </tr>	
					<tr><td height="10">
					</td></tr>
					</table>
				<tr><TD CLASS="MenuFond">UTILITAIRES</td></tr>		
				<tr><td align="center">
					<Table  width="120" cellspacing="0">
					<tr><th class="borderTop"><a class="top" href="<? echo $siteUrl . $emuPsxV4 ."/ps1/adripsx.php"; ?>">Divers</a></th></tr>
					<tr><td class="borderTop">...</td>  </tr>
					</table>
				</td></tr>	
			</TABLE>
			<!-- Fin Sous-colonne droite -->
		</TD></TR>		
	 </TABLE>
<!-- Fin colonne droite -->
	</td></tr>
	<TR><TD class="potB"></td>
		<td></td>
		<td class="potB"></td>	
	</TR>
</table>
<!-- Fin du tableau principale -->

	 </TD>		  
</TR>





<TR> 
	<!-- BAS DE PAGE  -->
  	<TD height="200" valign="top" align="center" colspan=3>

<TABLE align="center" cellspacing="0" >
			<tr><td class="compteur">		
			<? include($_SERVER['DOCUMENT_ROOT'] . $parentFold . $emuPsxV4 ."/emulateurs_playstation/visiteurs.php"); 
			echo "Visites: [$vis] // ";
			print"Uniques: [$compteur] // ";  
			print"Today: [$compteur_j] // ";
			echo "Pages vues: [$page]"; ?> 
			</td></tr>
			<tr><td height="50" valign="top" align="center" width="800">
				<TABLE align="center"  cellspacing="0" >		
				<tr><td>
<script type="text/javascript">
var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
</script>
<script type="text/javascript">
try {
var pageTracker = _gat._getTracker("UA-2570897-2");
pageTracker._trackPageview();
} catch(err) {}</script>
				</td></tr>
				</table>
				<br>© Copyright 2005,2006 
	        </td></tr>
</TABLE>
	</TD>
</TR>
	
</TABLE>	
</div>