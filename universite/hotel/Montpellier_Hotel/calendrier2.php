<? /* 
$todayJour=date("j");$todayMois=date("n");$todayAnnee = date("Y");
//if (  mktime('m-j-Y',0,0,0, date("$month"),date ("$jour"), date("$year")) <  mktime('m-j-Y',0,0,0, date("$todayMois"),date("$todayJour"), date("$todayAnnee")) )
//{ $msgDate="toto";}
//else 
//{ $msgDate="$jour/$mois/$annee";} 

if ( (date("$mois")>date("$todayMois") && date("$annee")==date("$todayAnnee"))||(date("$annee")>date("$todayAnnee")))
 {$msgDate="$jour/$mois/$annee";} 
 else
 { 
	if ( date("$jour")>date("$todayJour") && date("$mois")==date("$todayMois") && date("$annee")==date("$todayAnnee"))
 		{$msgDate="$jour/$mois/$annee";} 
	else
		{$msgDate="$todayJour/$todayMois/$todayAnnee";
		$jour=$todayJour;$mois=$todayMois;}
 }	
	

?> 
<input type='text' value="<? echo  "$msgDate";// mktime(0,0,0, $month,$jour, year) ;echo  mktime('n-d-Y',0,0,0, $todayMois,$todayJour, $todayAnnee); ?>"  name='date'>
<input  onclick="javascript:affiche('calen',this);" type='button' value='...' >
</form>

</td><td>

<? */
  // Section de configuration

  $bgcolor="dddddd" ;        // Couleur de fond
  $daybgcolor="aaaaaa" ;     // Couleur des jours de la semaine
  $dombgcolor="eeeeee" ;     // Couleur du jour sélectionné
  $dayholcolor="cccccc" ;     // Couleur des WE

  // Mois
  $month[0] = "Janvier" ;
  $month[1] = "Février" ;
  $month[2] = "Mars" ;
  $month[3] = "Avril" ;
  $month[4] = "Mai" ;
  $month[5] = "Juin" ;
  $month[6] = "Juillet" ;
  $month[7] = "Août" ;
  $month[8] = "Septembre" ;
  $month[9] = "Octobre" ;
  $month[10] = "Novembre" ;
  $month[11] = "Décembre" ;

  // Première lettre des jours de la semaine
  $day[0] = "L" ;
  $day[1] = "M" ;
  $day[2] = "M" ;
  $day[3] = "J" ;
  $day[4] = "V" ;
  $day[5] = "S" ;
  $day[6] = "D" ;

  $error01 = "Erreur : date invalide"

?>




<script language='JavaScript'>
 //window.resizeTo(200,270) ;
 
 function modifier (jour, affiche)
 {
 var nombreAdulte=document.forms["chambre"].elements['nombre'].options[document.forms["chambre"].elements['nombre'].selectedIndex].value ;
//affiche('calen',this);
<? if ($ke==1) 
{ $da1="$jour/$mois/$annee" ?>
var yat="formu" ;var yab="kel" ; 
var jour1= jour;
var mois1= document.forms["MyCalendar"].elements['month'].options[document.forms["MyCalendar"].elements['month'].selectedIndex].value ;
var annee1= document.forms["MyCalendar"].elements['year'].options[document.forms["MyCalendar"].elements['year'].selectedIndex].value ;
var dateArrivee= jour1 +"/" + mois1 +"/"+ annee1;
var dateDepart=document.forms["formu2"].elements['text2'].value ; 
<? } 

 if ($ke==2) 
{ $da2="$jour/$mois/$annee" ?>
var yat="formu2" ;var yab="kel2" ;
var jour2= jour;
var mois2= document.forms["MyCalendar"].elements['month'].options[document.forms["MyCalendar"].elements['month'].selectedIndex].value ;
var annee2= document.forms["MyCalendar"].elements['year'].options[document.forms["MyCalendar"].elements['year'].selectedIndex].value ;
var dateDepart= jour2 +"/" + mois2 +"/"+ annee2;
var dateArrivee=document.forms["formu"].elements['text1'].value ;

<? } ?> 
 

  window.location.href = "Reservation.php?mois=" + document.forms["MyCalendar"].elements['month'].options[document.forms["MyCalendar"].elements['month'].selectedIndex].value + "&jour=" + jour +"&annee=" + document.forms["MyCalendar"].elements['year'].options[document.forms["MyCalendar"].elements['year'].selectedIndex].value+"&ke=" +document.forms[yat].elements[yab].value +"&da1=" +dateArrivee+"&da2=" +dateDepart+"&bo="+affiche+"&nombre="+nombreAdulte
 //affiche('calen',this);
 }




<?
  if (!isset($jour))
       $jour = date("j") ;$todayJour=date("j");

  if (!isset($mois))
       $mois = date("m") ; $todayMois=date("n"); 

  if (!isset($annee))
       $annee = date("Y") ; $todayAnnee = date("Y");

  /*
  $nbjmonth[0] = 31 ;
  $nbjmonth[1] = ($annee%4==0?($annee%100==0?($annee%400?29:28):29):28) ;
  $nbjmonth[2] = 31 ;
  $nbjmonth[3] = 30 ;
  $nbjmonth[4] = 31 ;
  $nbjmonth[5] = 30 ;
  $nbjmonth[6] = 31;
  $nbjmonth[7] = 31 ;
  $nbjmonth[8] = 30 ;
  $nbjmonth[9] = 31 ;
  $nbjmonth[10] = 30 ;
  $nbjmonth[11] = 31 ; */

  if(!checkdate($mois,$jour,$annee))
  {
   echo "alert('$error01')\n" ;
   $jour = date("j") ;   
   $mois = date("m") ;   
   $annee = date("Y") ; 
  }
 




  /*
  $HR = 0;
  $GGG = 1;
  if( $annee < 1582 ) $GGG = 0;
  if( $annee <= 1582 && $mois < 10 ) $GGG = 0;
  if( $annee <= 1582 && $mois == 10 && 1 < 5 ) $GGG = 0;
  $JD = -1 * floor(7 * (floor(($mois + 9) / 12) + $annee) / 4);
  $S = 1;
  if (($mois - 9)<0) $S=-1;
  $A = abs($mois - 9);
  $J1 = floor($mois + $S * floor($A / 7));
  $J1 = -1 * floor((floor($J1 / 100) + 1) * 3 / 4);
  $JD = $JD + floor(275 * $mois / 9) + 1 + ($GGG * $J1);
  $JD = $JD + 1721027 + 2 * $GGG + 367 * $annee - 0.5;
*/


  /*$tmp = ((int)(($mois>2?$annee:$annee-1)/100)) ;
  $jj = (int)((((int)(365.25*($mois>2?$annee:$annee-1))) + ((int)(30.6001*($mois>2?$mois+1:$mois+13))) + $jour + 1720994.5 + ($annee > 1582 && $mois > 10 && $jour > 15?2-$tmp+((int)($tmp/4)):0))) ;
  $jj = (int)(($jj) % 7)
  $jj = (($JD+.5)%7) ; */


?>


</script>

<?
  echo "<div id='calen' bgcolor='#$bgcolor' onUnLoad='' align='center'>\n" ;

  echo "<form name='MyCalendar' action=''>\n" ;
  echo "<table width='100' cellspacing='0' cellspading='0' border='0'><tr>\n" ;

  // Affichage de la sélection du mois et de l'année
  echo "<td align='center' colspan='7'><select class=\"calendar\" name='month' onChange=\"modifier($jour, 1) \">\n" ;

  for ($i=0;$i<12;$i++)
  {
 	 if ( $i+1>=$todayMois && date("$annee")==date("$todayAnnee"))
  		{echo "<option class=\"calendar\" value='".($i+1)."'".($mois==($i+1)?" selected":"").">".$month[$i]."</option>\n" ;}
  	 if (date("$annee")>date("$todayAnnee"))
		 {echo "<option class=\"calendar\" value='".($i+1)."'".($mois==($i+1)?" selected":"").">".$month[$i]."</option>\n" ;}
  }

  echo "</select></td></tr>\n" ;

  echo "<tr><td align='center' colspan='7'  align='right'><select class=\"calendar\"  name='year' onChange=\"modifier($jour,1)\">\n" ;


  for ($i=$todayAnnee;$i<$todayAnnee+3;$i++)
  {
   echo "<option  class=\"calendar\" value='$i'".($annee==($i)?" selected":"").">$i</option>\n" ;
  }

  //echo "</select></td></tr><tr><td colspan='2'>&nbsp;</td></tr>\n" ;

  echo "<tr><td colspan='2'><table width='100%' cellspacing='0' cellspading='0' border='0'>\n" ;
  echo "<tr>\n" ;

  // Affichage du nom des jours
  for($i=0;$i<7;$i++)
  { 
   echo "<td  class=\"calendar\" width='14%' bgcolor='#$daybgcolor' class='genera'>".$day[$i]."</td>" ;
  }

  echo "</tr>\n<tr><td colspan='7'> </td></tr>\n<tr>\n" ;


  // Première ligne des jours
  $nbreJourSem = date ("w", mktime (0,0,0,$mois,1,$annee)) ;
  $nbreJourMois = date("t", mktime(0,0,0,$mois,1,$annee));
  $nbreJour=0;
  
  for($nbreJour=0; $nbreJour<$nbreJourSem-1;$nbreJour++)
	{
		echo"<td class=\"calendar\" width=\"10\"></td>"; //On laisse une case vide
		if(($nbreJour+1)%7==0) // si toute la ligne est remplie
		{echo "</tr>";}
	}

if ($nbreJourSem==0) //Cas à part : dans le cas où le premier jour est dimanche.
	{ 
		for ($i=0;$i<6;$i++)
		{echo"<td class=\"calendar\" width=\"10\"></td>";}
	}	
  
for ($i = 0; $i <$nbreJourMois; $i++) 
{
	
	if(($i+$nbreJour)%7==0&&($nbreJourSem)!=0)	//Si la ligne est remplie, on en commence une autre
		{echo "\n<tr>";}
		
	if (($nbreJourSem==0)&&(($i-1)%7==0)) // Cas du dimanche
		{echo "\n<tr>";}
	
	echo"<td class=\"calendar\" width=\"10\">";
	
		//On ne rend plus selectionnable tous les jours avant le mois en cours	
		if ( date("$mois")<date("$todayMois") && date("$annee")==date("$todayAnnee"))
			{$mois=$todayMois; $jour=$todayJour; $annee=$todayAnnee ;}
		else
		{	
			// On ne rend plus selectionnable les jours passés du mois en cours
			$dom=$i+1;
			if ( date("$dom")<date("$todayJour") && date("$mois")==date("$todayMois") && date("$annee")==date("$todayAnnee"))
				{echo "" . ($i+1) ."</a></td>";}
			else
			{	// On affiche enfin le reste des jours
				if(($i+1)==$todayJour&&$mois==todayMois&&$annee==todayAnnee)
				{echo "<a class='CadrePhoto' href=\"javascript:modifier($dom,1)\">". ($i+1) ."</a></td>";	}
				else
				{echo "<a class='calendrier' href=\"javascript:modifier($dom,1)\">" . ($i+1) ."</a></td>";}	
			}	
		}
		
		
		
	if((($i+$nbreJour)+1)%7==0&&$nbreJourSem!=0) //On termine la ligne
    	{echo "</tr>";} 
	
	if (($nbreJourSem==0)&&(($i%7==0)||($i==0))) //Cas du dimanche
		{echo "</tr>";}
}
  
  
/*  
  $dom = 1 ;
  for ($i=0;$i<7;$i++)
  {

  
   if ($j<=$i)
   { 
   		//On ne rend plus selectionnable tous les jours avant le mois en cours
		if ( date("$mois")<date("$todayMois") && date("$annee")==date("$todayAnnee"))
		{$mois=$todayMois; $jour=$todayJour; $annee=$todayAnnee ;}
		else
		{	// On ne rend plus selectionnable les jours passés du mois en cours
			if ( date("$dom")<date("$todayJour") && date("$mois")==date("$todayMois") && date("$annee")==date("$todayAnnee"))
        	{echo "<td".($dom==$jour?" bgcolor='#$dombgcolor'":"").">".$dom++."</td>\n" ;}	
			else
			{echo "<td".($dom==$jour?" bgcolor='#$dombgcolor'":"")."><a href='javascript:modifier($dom)' class='genera'><font >".$dom++."</font></a></td>\n" ;}	
		}
   }
   else
       echo "<td>&nbsp;</td>\n" ;
  }

  echo "</tr>\n" ;
  // Le reste
  for ($i=0;$i<5;$i++)
  {
   echo "<tr>\n" ;
   for ($j=0;$j<7;$j++)   
   {    
	$j_inac = ($j==0 || $j==6) ;
	
	
	if($dom < $nbreJour || checkdate($mois,$dom,$annee))
    { 
		
		if ( date("$mois")<date("$todayMois") && date("$annee")==date("$todayAnnee"))
		{$mois=date("$todayMois"); $jour=$todayJour; $annee=$todayAnnee ;}
		else
		{ 
			if ( date("$dom")<date("$todayJour") && date("$mois")==date("$todayMois") && date("$annee")==date("$todayAnnee"))
			{ echo "<td".($dom==$jour?" bgcolor='#$dombgcolor'":($j_inac ?" bgcolor='#$dayholcolor'":"")).">".$dom++."</td>\n" ;}
			else
			{echo "<td".($dom==$jour?" bgcolor='#$dombgcolor'":($j_inac ?" bgcolor='#$dayholcolor'":""))."><a href='javascript:modifier($dom)' class='genera'>".$dom++."</a></td>\n" ;}
   		}
   
   		// else if (checkdate($mois,$dom,$annee))
       //  echo "<td".($dom==$jour?" bgcolor='#$dombgcolor'":($j_inac ?" bgcolor='#$dayholcolor'":""))."><a href='javascript:modifier($dom)' class='genera'><font>".$dom++."</font></a></td>\n" ;
	}   
    else
        {echo "<td>&nbsp;</td>\n" ;}

   }
   echo "</tr>\n" ;
  }
*/
  echo "\n<tr><td colspan='10' align='center'><input class=\"calendar\" onclick='modifier($jour, 0)' type='button' value='Fermer'></td></tr></table>\n" ;
//window.opener.document.forms[\"formu\"].elements[\"date\"].value=\"$annee-$mois-$jour\";window.close()' 
 // echo "\n</tr></table>\n" ;
//<input type='button' onclick='javascript:modifier($jour, 0)' value='Valider'>&nbsp;&nbsp;
  echo "</td></tr></table>" ;
  echo "</form>" ;

  echo "</div>\n" ;

?>
