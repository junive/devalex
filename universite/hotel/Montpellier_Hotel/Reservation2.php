<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"><head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" >
<LINK rel="stylesheet" type="text/css" href="<? echo $siteUrl . $europellier; ?>/script/style.css" >
<title>Hotel Montpellier : Réservation</title>

</head>

<? 
$titre="Réservation";
$numMenu=10;
include($_SERVER['DOCUMENT_ROOT'] . $parentFold . $europellier . "/script/panneauGaucheDessus.php"); 
 ?>

<!-- Debut info du Centre -->
      		

<tr>
	<td align="center" valign="top" colspan="8" width="480" height="450"  >
		<table ><tr><td valign="top"  >

<table><tr><td valign="top" class="general">


<!--		
		
	
onClick="window.open('calendrier.php?form=formu&elem=date','Calendrier','width=200,height=220','top=tailleCalend()')"

<form method="POST" action="Reservation.php" name="Reserv">
	<?	 //include($_SERVER['DOCUMENT_ROOT'] . $parentFold . $europellier . "/Montpellier_Hotel/verif.php"); ?>

	</form>	
	-->
	





	<!-- <iframe width="310" height="300" scrolling="no" frameborder="0" border="0" src="calendrier.php?form=formu&elem=date"></iframe> --> 
	
	<form method="POST" name="formu" action="Reservation.php?bo=1&ke=<? echo "1" ; ?>&da1=<? echo "$da1" ; ?>&da2=<? echo "$da2"; ?>&nombre=<? echo "$nombre"; ?>" >
<? 

$todayJour=date("j");$todayMois=date("n");$todayAnnee = date("Y");
$Aujourdhui="$todayAnnee-$todayMois-$todayJour";

//Changement de la date pour la redirection du calendrier...
$explodeda1 = explode("/", $da1);
$da1=date("d/m/Y", mktime(0, 0, 0, $explodeda1[1],$explodeda1[0], $explodeda1[2]));
if ((strtotime($Aujourdhui)  - mktime(0 , 0 , 0 , $explodeda1[1] , $explodeda1[0] , $explodeda1[2])) > 0) $da1=date("d/m/Y");

?>
Date d'arrivée :	
<br />
<input type='text' value="<? echo  "$da1"; ?>"  name='text1'>
<input  src="<? echo $siteUrl . $europellier; ?>/image/cal.gif" onclick="javascript:;submit()" type="image" name="calendrier1" value='' >
<input type="hidden" value="1" name="kel" />
</form>

<form method="POST" name="formu2" action="Reservation.php?bo=1&ke=<? echo "2" ; ?>&da1=<? echo "$da1" ;?>&da2=<? echo "$da2" ;?>&nombre=<? echo "$nombre"; ?>" >
<? 




$explodeda2 = explode("/", $da2);
$da2=date("d/m/Y", mktime(0, 0, 0, $explodeda2[1],$explodeda2[0]+1, $explodeda2[2]));

echo "$da2";
$demain=date("d,m,Y",mktime(0, 0, 0, date("m"), date("d")+30, date("Y")));$demai=date("d,m,Y", $demain);echo "$demain";
if ((strtotime($Aujourdhui)  - mktime(0 , 0 , 0 , $explodeda2[1] , $explodeda2[0] , $explodeda2[2])) > 0){ $da2=date("d/m/Y");}


?>
Date de départ :<br />
<input  type="text" value="<? echo  "$da2"; ?>"  name="text2">
<input  src="<? echo $siteUrl . $europellier; ?>/image/cal.gif" onclick="javascript:submit();" type='image' name="calendrier2"  >
<input type="hidden" value="2" name="kel2" />
</form>

<br />



<form action="" name="chambre" method="post">
<script type="text/javascript">


function redir()
{var nbr=document.forms["chambre"].elements['nombre'].options[document.forms["chambre"].elements['nombre'].selectedIndex].value ;
var temp1=document.forms['formu'].elements['text1'].value;
var temp2=document.forms['formu2'].elements['text2'].value;

//tabAdulte=new Array(6);
//tabAdulte[0]="adulte0";tabAdulte[1]="adulte1";tabAdulte[2]="adulte2";tabAdulte[3]="adulte3";tabAdulte[4]="adulte4";tabAdulte[5]="adulte5";
//tabEnfant=new Array(nbr+1)
//var NombreAdult="/";
//for (i=0;i<nbr;i++)
//{
//NombreAdult+=document.forms["chambre"].elements[tabAdulte[i]].options[document.forms["chambre"].elements[tabAdulte[i]].selectedIndex].value ;
//} 
//var a0=document.forms['chambre'].elements['adulte0'].options[document.forms['chambre'].elements['adulte0'].selectedIndex].value ;
//var a1=document.forms['chambre'].elements['adulte1'].options[document.forms['chambre'].elements['adulte1'].selectedIndex].value ;
//var a2=document.forms['chambre'].elements['adulte2'].options[document.forms['chambre'].elements['adulte2'].selectedIndex].value ;
//var a3=document.forms['chambre'].elements['adulte3'].options[document.forms['chambre'].elements['adulte3'].selectedIndex].value ;
//var a4=document.forms['chambre'].elements['adulte4'].options[document.forms['chambre'].elements['adulte4'].selectedIndex].value ;
//var az=a0+"/"+a1+"/"+a2+"/"+a3+"/"+a4;
//var val="";

//for (i=0;i<nbr;i++)
//{
//val +=document.chambre.adulte+i.options[document.chambre.adulte+i.selectedIndex].value;
//val +=document.chambre.elements["adulte"+i].options[document.chambre.elements["adulte"+i].selectedIndex].value;
//}

var val = document.chambre.adulte0.options[document.chambre.adulte0.selectedIndex].value;
//var val1 = document.chambre.adulte1.options[document.chambre.adulte1.selectedIndex].value; 
//var val2 = document.chambre.adulte2.options[document.chambre.adulte2.selectedIndex].value; 

//for (i=0;i<nbr;i++)
//{val+="&adulte"+i+"="val+i;}

window.location.href="Reservation.php?da1="+temp1+"&da2="+temp2+"&nombre="+nbr+"&adulte0="+val
//document.chambre.submit();

}



</script>


Nombre de chambres:

<select name="nombre" onchange="submit();redir()">
<? 
for ($i=1;$i<6;$i++)
	{	
		if ($i==$nombre) echo "<option value=\"$i\" SELECTED>$i</option>" ;
		else echo "<option  value=\"$i\">$i</option>" ;
	} 		

?>
</select>
<br />
<table><tr><td>

	<table><tr><td class="general" align="center">
Adultes


<?	
/*
	echo "</td></tr><tr><td align=\"center\">";
	echo '<select name="adulte0">';
	echo "<option value='0'>0</option>";
    echo "<option value='1'>1</option>";
	echo "<option value='2'>2</option>";
	echo "<option value='3'>3</option>";
    echo '</select>';
	echo "</td></tr>";
*/	


 for($i=0 ; $i < $nombre  ; $i++)
    {
		echo "<tr><td align=\"center\">";
		
		if ($i==0) echo "<select onchange=\"submit();redir()\" name=\"adulte$i\">";
		else echo "<select onchange=\"submit();\" name=\"adulte$i\">";
		 
		for ($j=0 ; $j < 4  ; $j++)
			{
				 //if (${"a".$i}==$j) echo "<option value=\"$j\" SELECTED>$j</option>";
				 
				 if (${"adulte".$i}==$j) echo "<option value=\"$j\" SELECTED>$j</option>";
				 else echo "<option value=\"$j\">$j</option>";
			}
    	//echo "<option value='1'>1</option>";
		//echo "<option value='2'>2</option>";
		//echo "<option value='3'>3</option>";
    	echo '</select>';
		echo "</td></tr>";
	}
  

     
?>
</table>
</td><td>
	<table><tr><td class="general" align="center">
Enfants(-12ans)


<?
/*
	echo "</td></tr><tr><td align=\"center\">";
	echo '<select name="enfant0">';
             echo "<option value='0'>0</option>";
			 echo "<option value='1'>1</option>";
			 echo "<option value='2'>2</option>";
			 echo "<option value='3'>3</option>";
     echo '</select>';
	 echo "</td></tr>";
*/	 
 for($i=0 ; $i < $nombre ; $i++)
    {
	//echo "type".$i;
		echo "<tr><td align=\"center\">";
		echo "<select name=\"enfant$i\">";
    	echo "<option value='0'>0</option>";
		echo "<option value='1'>1</option>";
		echo "<option value='2'>2</option>";
		echo "<option value='3'>3</option>";
    	echo '</select>';
		echo "</td></tr>";
	}
     
?>
</table></td></tr></table>
<script type="text/javascript">
//var limite= document.forms["chambre"].elements['nombre'].options[document.forms["chambre"].elements['nombre'].selectedIndex].value
//for (i=0;i<limite;i++)
//{ document.write("<option value=i>"+i+"</option>") }
/*
Nombre d'adultes :
<select name="adulte" >
 //for ($i=1;$i<20;$i++)
//{echo "<option value=$i>$i</option>" ;} 
</select>
<br />Nombre d'enfants :
<select name="enfant" >
// for ($i=0;$i<10;$i++)
{//echo "<option value=$i>$i</option>" ;} 
</select>
<br>
*/

</script>


</form>
</td></tr></table>
</td><td width="200" height="300" valign="top">
	
	<? //if(isset($_POST['calendrier2'])||isset($_POST['calendrier1'])) // Onévite d'obtenir les messages d'avertissements du début


if ($bo==1)
{
	 include($_SERVER['DOCUMENT_ROOT'] . $parentFold . $europellier . "/Montpellier_Hotel/calendrier.php"); 
} ?>
</td>


</tr>
<tr><td align="center">

<? 
//$dateRecu1=date("d/m/Y");
//$dateRecu1="<script>document.write(document.forms['formu'].elements['text1'].value)";
//$dateRecu2=document.write(document.forms[\"formu2"].elements["text2"].value);
//echo "$dateRecu1\n";
//echo "$dateRecup2\n";

//echo "ceci est" .$_POST['text1'];
//$tost=date($dateRecu1);
//echo "$tost";
//$tost2=date($dateRecu2);
//echo  $HTTP_POST_VARS["text1"] ;
//echo strtotime($dateRecu1);
//$tet1=explode ("/", $tost);
//$de=date("d/m/Y", mktime(0, 0, 0, $tost));
//echo "$de";

//$test1=explode("/", $dateRecu1);
//$te1=mktime(0 , 0 , 0 , $test1[1] , $test1[0] , $test1[2]);
//$tes2=mktime(0 , 0 , 0 , $test2[1] , $test2[0] , $test1[2]);
//echo "$te1";
//echo $test1[0]-$test1[1]-$test1[2];
//echo "$test2[0]-$test1[1]-$test1[2]";
//$t=explode("/", $_POST['dateRecup1']);

?>

<script type="text/javascript">
//var dateRecupArr=document.forms["formu"].elements['text1'].value;
//document.forms["Reserver"].elements['dateRecup1'].value=toto;
//var dateRecupDep=document.forms["formu2"].elements['text2'].value;
//var nombreChambreRecup=document.forms["chambre"].elements['nombre'].options[document.forms["chambre"].elements['nombre'].selectedIndex].value ;

function Recup()
{
document.forms['Reserver'].elements['chambreRecup'].value=document.forms["chambre"].elements['nombre'].options[document.forms["chambre"].elements['nombre'].selectedIndex].value ;
document.forms['Reserver'].elements['dateRecup1'].value=document.forms['formu'].elements['text1'].value;
document.forms['Reserver'].elements['dateRecup2'].value=document.forms['formu2'].elements['text2'].value;
}



</script>

<form method="post" name="Reserver" action="<? echo "$urlDispo" ;?>" >
<input type="hidden" name="dateRecup1" value="<? echo "$Aujourdhui";?>" >
<input type="hidden" name="dateRecup2" value="<? echo "$Aujourdhui";?>"/>
<input type="hidden" name="chambreRecup" value="<? echo "$nombre";?>"/>
<input  onclick="Recup()" type="submit" value="Réserver" name="Reser" >
</form>

<?
echo "$dateRecup1///$dateRecup2";

$Arr=explode("/",$dateRecup1);
$Dep=explode("/",$dateRecup2);
$Recup1="$Arr[2]-$Arr[1]-$Arr[0]" ;
$Recup2="$Dep[2]-$Dep[1]-$Dep[0]" ;
echo "<br> $Recup1---$Recup2";
 	
	if ( ((strtotime($Recup1) -  strtotime($Recup2))  >= 0)||( (strtotime($Aujourdhui) - strtotime($Recup1) ) > 0 )||( (strtotime($Aujourdhui) - strtotime($Recup2) ) > 0 ) )
  	{	
		$dateRecup1=date("d/m/Y");
		$dateRecup2=date("d/m/Y");
		//$msgDate="Date de réservation invalide.";
		$urlDispo="Reservation.php?da1=$Aujourdhui&da2=$dateRecup2&nombre=$chambreRecup&msgDate=Date de réservation invalide"; ?>

<?
	}
	else 
	{


			$urlDispo="Disponibilite.php?dateArrivee=$dateRecup1&dateDepart=$dateRecup2";
			?> <script>//window.location.href = "<? echo "$urlDispo"; ?>";</script> <?
			$msgDate="" ;
		
	}


?>
</td></tr>
<tr><td>
<?


//echo "crrr2" .$_POST['dateRecup2'];
if(isset($_POST['Reser'])) // Onévite d'obtenir les messages d'avertissements du début
{
?><script>window.location.href = "<? echo "$urlDispo"; ?>";</script><?
 
} 
echo "$msgDate";
if(isset($_POST['text1'])) // Onévite d'obtenir les messages d'avertissements du début
{

}
 ?>

</td></tr>
</table>
				</td>
      		</tr>
<!-- Fin info du centre -->   		
	

<? include($_SERVER['DOCUMENT_ROOT']  . $parentFold . $europellier . '/script/panneauDroite.php'); ?>

