<? session_start() ;

//On vérifie que les Logins ont été rentrés
if (!isset ($_SESSION['LOGIN']) && !isset($_SESSION['PASS'] ) ) 
{
header("Location: Logins.php");
exit();		
} 
else
{
		//Ensuite, on regarde s'ils correspondent bien à ceux de la base
		if ($_SESSION['LOGIN']!=$_SESSION['LOGIN2']||$_SESSION['PASS']!=$_SESSION['PASS2'])
			{
			header("Location: Logins.php");
			exit();
			} 
		//On valide la page
		else {echo "Bienvenue " ;
				echo  $_SESSION['LOGIN'];}
} 


 		
?>


<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"><head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" >
<LINK rel= "stylesheet" type="text/css" href="<? echo $siteUrl . $europellier; ?>/script/style.css" >
<title>Disponibilités des Chambres</title>

</head>

<body>
<div align="center">
<? 

//Récupération des infomartions de la BDD
include("hotel/infos.php");

//Date du jour
$jour=15;
$mois=02;
$annee=2010;



  // Mois
  $month[1] = "JANVIER" ;
  $month[2] = "FEVRIER" ;
  $month[3] = "MARS" ;
  $month[4] = "AVRIL" ;
  $month[5] = "MAI" ;
  $month[6] = "JUIN" ;
  $month[7] = "JUILLET" ;
  $month[8] = "AOUT" ;
  $month[9] = "SEPTEMBRE" ;
  $month[10] = "OCTOBRE" ;
  $month[11] = "NOVEMBRE" ;
  $month[12] = "DECEMBRE" ;

  // Première lettre des jours de la semaine
  $day[0] = "L" ;
  $day[1] = "M" ;
  $day[2] = "M" ;
  $day[3] = "J" ;
  $day[4] = "V" ;
  $day[5] = "S" ;
  $day[6] = "D" ;


	//On récupère toutes nos dates
	$requ="select * FROM eur_Dispo ORDER BY dateDispo";
	$result=mysqli_query($db, $requ);
	$dateDispo=array();
	$cptDispo=0;
	
	//On stocke le tout dans des tableaux (entier et décimal)
	while ($ligne = mysqli_fetch_object ($result))
	{
		$dateDispo[$cptDispo]=$ligne->dateDispo;
		$cptDispo++;
	} 



//if (strtotime("$annee-07-26")==strtotime("$annee-$mois-$jour")) 

$temp=$cptDispo-1;
// On Va comparer la dernière date de notre base de données avec la date d'ajourd'hui + 2 ans 
if ( (strtotime("$dateDispo[$temp]")- mktime(0 , 0 , 0 , $mois , $jour , $annee+2) )<0 )
{
	
	//On va rentrer lenombre Disponibles que l'on veut pour la nouvelle année
	$temp2=$annee+3;
	echo "Entrez le nombre de chambres Disponibles pour $temp2 :"; 
	echo "<form name='nouveau' method='post' action=''>";
	echo "<input type='text' value='5' name='nombreNouveau' id='nombreNouveau' size='1'>";
	echo "<input class='boutons'  type='submit' value='Valider les changements' name='modifi' id='modifi'>";
	echo "</form>";

//Si on clique sur valider
if (isset($_POST['modifi'])) 
{
	//On boucle sur un an (la 3ème année que l'on va insérer)
	for($a=3;$a<4;$a++)
	{	
		$dr=0; // Variable pour repérer nos dates 
		// Onboucle sur 12 mois
		for($m=1;$m<=12;$m++)
		{
			
			$d=1; // Variable de nos jours
			//Enfin on boucle sur un mois
			$temp=$annee+$a;
			while (  ( mktime(0 , 0 , 0 , $m , $d , $temp)- mktime(0 , 0 , 0 , $m+1 , 1 , $temp) ) < 0 )
			{
			// Ensuite on insère un an de calendrier
			
			$requeto="INSERT INTO eur_Dispo ( `numDispo` , `dateDispo` , `nbDispo`  ) VALUES ('', '".$temp."-".$m."-".$d."' , '$nombreNouveau' )";
			//$res=mysqli_query($db, $requeto) or die ("une erreur est surevenue") ; 
			
			// Et on retire l'année qui vient de s'écouler (du 01/01/YYYY au 31/12/YYYY)
			$requet="DELETE FROM eur_Dispo WHERE dateDispo='$dateDispo[$dr]'";
			//$resu=mysqli_query($db, $requet) or die ("une erreur est surevenue") ;
			$dr++;
			$d++;
			}
		}
	}
echo "<br>Nouvelle année crée<br>" ;	
}	
}


$del="DELETE * FROM eur_Dispo" ;


// On refomate la date				
$Aujourd="$annee-$mois-$jour" ;







$an = isset($_POST['an']) ? $_POST['an'] : 0;
?>

 <form method="post" name='Disponi' action=''>
 <table width='800' cellspacing='0' cellspading='0'><tr>
 	<td style="color: #990000;  font-weight:bold; font-family:book Antiqua; font-size:16px "  align='center'>
	<u>DispoNIBILITE DES CHAMBRES :</u>
<br />
  <select   name='an' onChange="submit()">
  
	<? for($i=0;$i<3;$i++)
	{
	//On affiche la selection de l'année
	$temp=$annee+$i;
	 if ($an==$temp) echo "<option  value=$temp SELECTED> $temp </option>" ; 
		else echo "<option  value=$temp> $temp </option>" ;
	} 
	?>
	
</select>



	</td></tr>

<? 

?>
	<tr><td>
	<?
	
	// On récupère les Disponibilités de notre base
	if ($an=="") $an=$annee;
	$anneeDebut="$an-01-01"; $anneeFin="$an-12-31";
	$reque="select * FROM eur_Dispo WHERE dateDispo BETWEEN '$anneeDebut' AND '$anneeFin' ORDER BY dateDispo";
	$resulta=mysqli_query($db, $reque);
	$nbDispo=array();$datDispo=array(); $dateUpdate=array();
	$cptDispo2=0;
	
	//On stocke le tout dans des tableaux (entier et décimal)
	while ($ligne = mysqli_fetch_object ($resulta))
	{
		$dateExplode=explode("-",$ligne->dateDispo); //On récupère les mois et jours
		$dateUpdate[$cptDispo2]=$ligne->dateDispo;
		$nbDispo[$cptDispo2]=$ligne->nbDispo; //On recup le nombre de chambres Disponibles
		
		
		//On va enlever dans les Dispos, les mois passés.
		if ( (mktime(0, 0, 0, $mois, 01, $annee) - mktime(0, 0, 0, $dateExplode[1], 01, $dateExplode[0]) ) <=0 )
		{
			$datDispo[$cptDispo2]=$dateExplode[1]; // Va nous permettre de comparer le 31 du mois précédant avec le 01 du mois suivant, pour aller à la ligne
			$cptTemp=$cptDispo2-1; 
			
			if ($cptTemp>= 0 && sizeof($datDispo) >= $cptTemp && $datDispo[$cptTemp]>0) 
				{
					//On compare les mois, si différent, on va à la ligne
					if ( (( mktime(0 , 0 , 0 , $datDispo[$cptDispo2] , 01 , 2020)- mktime(0 , 0 , 0 , $datDispo[$cptTemp] , 01 ,2020) ) > 0 ) && ($datDispo[$cptDispo2]!=01)) echo "</tr><tr><td height='20'></td></tr></table>"; 
				}
			$tempo=date("n", mktime(0,0,0,$dateExplode[1]+1,0,0)); // On enlève le 0 des 9premiers mois pour l'adapter à notre tableau de mois en français
			if ($dateExplode[2]==01) echo "<table  cellspacing='0' cellspading='0' border='1'><tr><td style='font-size:18px;font-weight:bold;color:#990000;background-image:url(../image/interFond.gif); background-position:center' colspan='6'>$month[$tempo]</td></tr><tr>"; //Si premier jour du mois
		
			if ($ligne->nbDispo==0) $bgc='#33CCCC' ; // Sicomplet, on change de couleur
			//else if ($ligne->nbDispo>=1&&$ligne->nbDispo<=7) $bgc='#FFFF33' ;
			else $bgc='' ;
			echo "<td align='center' style=' font-weight:bold; color:#CCCC00 ;background-image:url(../image/interFond.gif);' valign='top'>$dateExplode[2] <br /><input style='font-size:9px; background-color:$bgc' type='text' name=\"Dispo$cptDispo2\" size='1' value=\"$ligne->nbDispo\" ></td>" ;
		
		 	if ($dateExplode[1]==12&&$dateExplode[2]==31)   echo "</tr><tr><td height='20'></td></tr></table>";
		}
		$cptDispo2++;	
		
	}  
	  ?> 
	</td></tr>
	<tr><td align='center'>
	<input class="boutons" type="button" value="Retour" name="retour" id="retour" onClick="javascript:retourne()">
	<input class="boutons"  type="submit" value="Valider les changements" name="modif" id="modif">
	</td></tr>


</table>
</form>
<? 
if (isset($_POST['modif'])) 
{
	// On met à jour les prix dans la base
	for ($i=0;$i<$cptDispo2;$i++)
	{
	//--block--$requet="UPDATE eur_Dispo Set nbDispo=${'Dispo'.$i} WHERE dateDispo='$dateUpdate[$i]'";
	$result=mysqli_query($db, $requet);
	}
//On rafraichit la page pour afficher les nouveaux tarifs ?>
<script type="text/javascript">
window.location.href="Dispo.php"</script>
<?
} ?>


<script type="text/javascript">
function retourne()
{
window.location.href="Interface.php"
}
</script>

<br>

<span style="font-size:10px">
Attention !!! Vider la base de données puis la remplir vous remettra vos Disponibilités par défaut !! et devrez recommencer toutes les opérations à 0
<br> A n'utiliser ce lien qu'en cas de Bugs flagrants ! !!! (mauvaises dates, mauvaise données, Plus de réservation que prévu, etc...)


<br>
<a href="vide.php">Vider la base de donner </a><br>
</span>
</div>
</body>