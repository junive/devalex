<? 

  $bgcolor="dddddd" ;        // Couleur de fond
  $daybgcolor="aaaaaa" ;     // Couleur des jours de la semaine
  $dombgcolor="eeeeee" ;     // Couleur du jour sélectionné
  $dayholcolor="cccccc" ;    // Couleur des WE

  // Affichage des mois
  $month[0] = "January" ;
  $month[1] = "February" ;
  $month[2] = "March" ;
  $month[3] = "April" ;
  $month[4] = "May" ;
  $month[5] = "Juin" ;
  $month[6] = "July" ;
  $month[7] = "August" ;
  $month[8] = "September" ;
  $month[9] = "October" ;
  $month[10] = "November" ;
  $month[11] = "December" ;

  // Première lettre des jours de la semaine
  $day[0] = "M" ;
  $day[1] = "T" ;
  $day[2] = "W" ;
  $day[3] = "T" ;
  $day[4] = "F" ;
  $day[5] = "S" ;
  $day[6] = "S" ;

?>




<script language='JavaScript'>
 
function modifier (jour, affiche)
{
 
<? $da1="$jour/$mois/$annee" ; ?>
//On récupère les informations Contenues dans notre formulaire
var jour1= jour;
var mois1= document.forms["MyCalendar"].elements['month'].options[document.forms["MyCalendar"].elements['month'].selectedIndex].value ;
var annee1= document.forms["MyCalendar"].elements['year'].options[document.forms["MyCalendar"].elements['year'].selectedIndex].value ;
var dateArrivee= jour1 +"/" + mois1 +"/"+ annee1;
var nb=document.forms["formu"].elements['nombre'].options[document.forms["formu"].elements['nombre'].selectedIndex].value ;
var cha=document.forms["formu"].elements['chambre'].options[document.forms["formu"].elements['chambre'].selectedIndex].value ;
var valAdulte="";
var valEnfant="";

<? for ($i=0;$i<$chambre;$i++) { ?>
valAdulte +=document.formu.elements['nombreAdulteCham'+<? echo "$i" ; ?>].options[document.formu.elements['nombreAdulteCham'+<? echo "$i" ; ?>].selectedIndex].value+"/";
valEnfant +=document.formu.elements['nombreEnfantCham'+<? echo "$i" ; ?>].options[document.formu.elements['nombreEnfantCham'+<? echo "$i" ; ?>].selectedIndex].value+"/";
<? } ?>

//On redirige toutes nos infos vers l'url.
window.location.href = "Reservation.php?mois=" + document.forms["MyCalendar"].elements['month'].options[document.forms["MyCalendar"].elements['month'].selectedIndex].value + "&jour=" + jour +"&annee=" + document.forms["MyCalendar"].elements['year'].options[document.forms["MyCalendar"].elements['year'].selectedIndex].value+"&da1=" +dateArrivee+"&bo="+affiche+"&nombre="+nb+"&chambre="+cha+"&nombreAdulteCham="+valAdulte+"&nombreEnfantCham="+valEnfant

}

</script>


<?
// On récupère le jour d'aujourd'hui
  if (!isset($jour))
       $jour = date("j") ;$todayJour=date("j");
	   
// On récupère le mois d'aujourd'hui
  if (!isset($mois))
       $mois = date("m") ; $todayMois=date("n"); 

// On récupère l'année d'aujourd'hui
  if (!isset($annee))
       $annee = date("Y") ; $todayAnnee = date("Y");

// On vérifie que le format de la date est correct
  if(!checkdate($mois,$jour,$annee))
  {
   echo "alert('Erreur : date invalide')\n" ;
   $jour = date("j") ;   
   $mois = date("m") ;   
   $annee = date("Y") ; 
  }

// On va afficher notre calendrier
  echo "<div id='calen' bgcolor='#$bgcolor' onUnLoad='' align='center'>\n" ;
  echo "<form name='MyCalendar' action=''>\n" ;
  echo "<table width='100' cellspacing='0' cellspading='0' border='0'><tr>\n" ;

// Affichage de la sélection du mois et de l'année
  echo "<td align='center' colspan='7'><select class=\"calendar\" name='month' onChange=\"modifier($jour, 1) \">\n" ;
  
// Affichage des mois
  for ($i=0;$i<12;$i++)
  {
 	 if ( $i+1>=$todayMois && date("$annee")==date("$todayAnnee"))
  		{echo "<option class=\"calendar\" value='".($i+1)."'".($mois==($i+1)?" selected":"").">".$month[$i]."</option>\n" ;}
  	 if (date("$annee")>date("$todayAnnee"))
		 {echo "<option class=\"calendar\" value='".($i+1)."'".($mois==($i+1)?" selected":"").">".$month[$i]."</option>\n" ;}
  }

  echo "</select></td></tr>\n" ;
  echo "<tr><td align='center' colspan='7'  align='right'><select class=\"calendar\"  name='year' onChange=\"modifier($jour,1)\">\n" ;

// Affichage des années
  for ($i=$todayAnnee;$i<$todayAnnee+3;$i++)
  { echo "<option  class=\"calendar\" value='$i'".($annee==($i)?" selected":"").">$i</option>\n" ;}


  echo "<tr><td colspan='2'><table width='100%' cellspacing='0' cellspading='0' border='0'>\n<tr>\n" ;

// Affichage du nom des jours
  for($i=0;$i<7;$i++)
  {echo "<td  class=\"calendar\" width='14%' bgcolor='#$daybgcolor' class='genera'>".$day[$i]."</td>" ;}

  echo "</tr>\n<tr><td colspan='7'> </td></tr>\n<tr>\n" ;


// Première ligne des jours
  $nbreJourSem = date ("w", mktime (0,0,0,$mois,1,$annee)) ;
  $nbreJourMois = date("t", mktime(0,0,0,$mois,1,$annee));
  $nbreJour=0;
  
// On va afficher la première ligne des jours
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
 
// On affiche la suite des jours 
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
				{ echo "" . ($i+1) ."</a></td>"; }
			else
			{	// On affiche enfin le reste des jours
				if(($i+1)==$todayJour&&$mois==todayMois&&$annee==todayAnnee)
				{echo "<a class='CadrePhoto' href=\"javascript:modifier($dom,1)\">". ($i+1) ."</a></td>";	}
				else
				{echo "<a class='calendrier' href=\"javascript:modifier($dom,1)\">" . ($i+1) ."</a></td>";}	
			}	
		}
		
		
		
	if((($i+$nbreJour)+1)%7==0&&$nbreJourSem!=0) // On termine la ligne
    	{echo "</tr>";} 
	
	if (($nbreJourSem==0)&&(($i%7==0)||($i==0))) // Cas du dimanche
		{echo "</tr>";}
}
  
  
  echo "\n<tr><td colspan='10' align='center'><input class=\"calendar\" onclick='modifier($jour, 0)' type='button' value='Fermer'></td></tr></table>" ;
  echo "</td></tr></table>" ;
  echo "</form>" ;
  echo "</div>" ;

?>
