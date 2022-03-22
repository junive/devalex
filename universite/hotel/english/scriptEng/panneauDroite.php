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
						<tr>
							<td width="148" align="center" ><span class="coordTitre"> 
							<? if($ContEng[136]!="") echo $ContEng[136]; ?></span><br>
							<span class="coordTexte"><? if($ContEng[137]!="") echo $ContEng[137]; ?></span>
							<br />
							<span class="coordTitre"> <? if($ContEng[138]!="") echo $ContEng[138]; ?></span>
							<br /><span class="coordTexte"> <? if($ContEng[139]!="") echo $ContEng[139]; ?> <? echo "$tarif[1]"; ?> euros
							<br>
							<? if($ContEng[140]!="") echo $ContEng[140]; ?></span>
							<br>
							<span class="coordTitre"> <? if($ContEng[141]!="")  echo $ContEng[141]; ?></span><br>
							<span class="coordTexte"><? if($ContEng[142]!="")  echo $ContEng[142]; ?> <? echo "$tarif[4]"; ?> euros </span>
							<span class="coordTexte"><? if($ContEng[143]!="") echo $ContEng[143];
							 if($ContEng[144]!="") echo $ContEng[144]; ?> </span>
							</td>
						</tr>
					</table>				
				</td>
			</tr>
			
			<tr><td width="148" height="10" class="basMenu"></td></tr>
			
			
			
			<tr><td width="148" height="5" class="hautMenu"></td></tr>

						<tr>
				<td width="148" height="110" align="center" valign="middle" class="Cadre">
					<table cellpadding="0" cellspacing="0">
						<? if ($ContEng[145]!="") echo "<tr><td id='fondHautFlash' name='fondHautFlash' height='10' ></td></tr>" ; ?>
						<tr>
					  		<td <? if ($ContEng[145]!="") {echo "id='promFlash' name='promFlash'";} else {echo "class='CadrePhoto'"; } ?>  width="120" height="80"  align="center"   >
							<? if ($ContEng[145]=="") {echo "<img style='border: none;' id='ima' name='ima' src='".$siteUrl . $europellier."/image/photo1.gif' alt='' width='120' height='80'/></td>" ;}
								else
								{
								echo "<span style='text-align:justify; font-weight:bold; font-family:'book Antiqua'; font-size:14px; vertical-align:top'> $ContEng[145]</span>" ;
								}
							 ?>
						</tr>
						<? if ($ContEng[145]!="") echo "<tr><td id='fondBasFlash' name='fondBasFlash' height='10' ></td></tr>" ; ?>
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
