		</table>
	</td>
	<td style=" background-color:#ffcc00;" align="left" valign="top">
		<table  cellpadding="0" cellspacing="0">
			
			<tr><td width="148" height="35" align="center" valign="middle">
				<table cellpadding="0" cellspacing="0">
					<tr><td width="50" align="center">
					<a href="<? echo $siteUrl . $europellier; ?>/index.php"><img style='border: none;' id='drap1' name='drap1' src='<? echo $siteUrl . $europellier; ?>/image/drapeau_french.gif' alt='' /></a>
					</td><td width="50" align="center">
					<a href="<? echo $siteUrl . $europellier; ?>/english/index.php"><img style='border: none;' id='drap2' name='drap2' src='<? echo $siteUrl . $europellier; ?>/image/drapeau_english.gif' alt='' /></a>
					</td></tr>
				</table>
			
			</td></tr>
			
			<tr><td width="148"  height="5" class="hautMenu"></td></tr>
			
			<tr>
				<td valign="middle" width="148" height="120"  class="Cadre">
					<table>
						<tr><? include_once(realpath(__DIR__ . '/../') . "/memo/hotel/infos.php"); ?>
							<td width="148" align="center" ><span class="coordTitre"><? if($nomTar[0]!="") echo $nomTar[0]; ?></span><br>
							<span class="coordTexte"><? if($nomTar[1]!="") echo $nomTar[1]; ?></span>
							
							<span class="coordTitre"> <? if($nomTar[2]!="") echo $nomTar[2]; ?></span>
							<br /><span class="coordTexte"> <? if($nomTar[3]!="") echo $nomTar[3]; ?> <? echo "$tarif[1]"; ?> euros
							<br><br /></span><span class="coordTitre">
							<? if($nomTar[4]!="") echo $nomTar[4]; ?>
							<br>
							 <? if($nomTar[5]!="") echo $nomTar[5]; ?></span><br>
							<span class="coordTexte"><? if($nomTar[6]!="")  echo $nomTar[6]; ?> <? echo "$tarif[4]"; ?> euros </span>
							<span class="coordTexte"><? if($nomTar[7]!="")  echo $nomTar[7];
							 if($nomTar[8]!="") echo $nomTar[8]; ?> </span>
							</td>
						</tr>
					</table>				
				</td>
			</tr>
			
			<tr><td width="148" height="10" class="basMenu"></td></tr>
			
			
			

						
			<tr><td width="148" height="5" class="hautMenu"></td></tr>
			
			<tr>
				<td width="148" height="190" class="Cadre" >
					<table>
						<tr><td width="148" valign="middle" align="center" >
								<span class="coordTitre"><? echo $nomCoord[0]; ?><br></span>
								<span class="coordTexte"><? echo "$nomCoord[1] $nomCoord[2]" ; ?><br>
								<?  echo $nomCoord[3]; ?><br> 
								<?  echo $nomCoord[4]; ?></span><br><br> 
								<span class="coordTitre"><? echo $nomCoord[6]; ?> </span>
								<span class="coordTexte"> <? echo $nomCoord[7]; ?></span> <br>
								<span class="coordTitre"><? echo $nomCoord[8]; ?> </span>
								<span class="coordTexte"> <? echo $nomCoord[9]; ?></span> <br><br />
								<span class="coordTitre"><? echo $nomCoord[11]; ?> </span>
								<span class="coordTexte"><? echo $nomCoord[12]; ?><br /><? echo $nomCoord[13]; ?></span><br>					
						</td></tr>
					</table>				
				</td>
			</tr>
			<tr><td width="148" height="10" class="basMenu"></td></tr>
			

			
		</table>	
		
	</td>
</tr>
</table>


</div>
</body>

</html>
