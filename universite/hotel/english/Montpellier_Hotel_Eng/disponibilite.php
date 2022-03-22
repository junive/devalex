<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"><head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" >

<? include("../../memo/hotel/infos.php"); ?>
<meta name="description" lang="fr" content="<? echo "$ContMeta[0]" ; ?>" >
<meta name="keywords" lang="fr" content="<? echo "$ContMeta[1]"; ?>" >
<meta name="category" content="<? echo "$ContMeta[3]"; ?>" >
<meta name="distribution" content="global" >
<meta name="robot" content="all" >
<meta name="revisit-after" content="1 day" >
<meta name="author" lang="fr" content="Alexandre GORISSE" >
<meta name="copyright" content="montpellier-hotel" >
<meta name="identifier-url" content="http://www.euromedecine.com" >

<LINK rel= "stylesheet" type="text/css" href="<? echo $siteUrl . $europellier; ?>/script/style.css" >
<title>Hotel Du Parc Euromedecine de Montpellier : Réservation</title>

</head>

<? $titre="Réservation";
$numMenu=10;
include( $_SERVER['DOCUMENT_ROOT']  . $parentFold . $europellier . "/english/scriptEng/panneauGaucheDessus.php");
 ?>


<!-- Debut info du Centre -->    		

<tr>
	<td style=" background-color:#ffcc00;" align="center" valign="top" colspan="8" width="499" height="449" >

	<? 
	
	//Récupération du nombre de personnes par chambre
	$Adu=explode("/",$nombreAdulteCham);
	$Enf=explode("/",$nombreEnfantCham) ;
	
	// On récupère le nombre d'adulte et d'enfants par chambre depuis notre url
	for ($i=0; $i <=$chambre; $i++)
	{ 
		$nbPersonne+=$Adu[$i]+$Enf[$i];
		$nbEnfant+=$Enf[$i]; 
		$nbAdulte+=$Adu[$i];
	}
	
	
	// Ce sera notre jour de référence pour calculer les week-end
	$Weekend=strtotime("2006-07-17");
	
	// On reformate notre jour d'arrivée et notre jour de départ pour la base de données
	$h1=explode("/",$da1);
	$h2=explode("/",$da2);
	$dateDebut="$h1[2]-$h1[1]-$h1[0]";
	$dateFin="$h2[2]-$h2[1]-$h2[0]";
	
	//On calcul l'intervalle et convertit du nombre de seconde en nb de jour
	$hs1=strtotime($dateDebut);
	$hs2=strtotime($dateFin);
	$h=($hs2-$hs1)/86400;
	
	// Initialisation des tarifs par chambre et totaux
	$tarifTotal=0;
	$chambre0=0;
	$chambre1=0;
	$chambre2=0;
	$chambre3=0;
	$chambre4=0;
	$info=""; // Variable des détails tarifaires
	
	$boolWeekend=array(); //on marque les Week-end
	$boolPeriode=array(); //On marque les jours à tarifs spéciaux
	$boolDisponible=false; // Une seule chambre inDisponible suffira à retirer nos tarifs.
	$afficheDisponible=array(); // Message d'affichage des Dispos
	$nbDisponible=array(); // Nombre de chambres réservées
	$DateDisponible=array(); 
	$prixPeriode=array(); //va sélectionner la période qui bénéficie du tarifs spéciale
	$affichePeriode=array(); // vérification de la période 
	$Date=array();//On répertorie toutes les dates jusqu'à lafindu séjour
	
	for ($j=0;$j<$cpt2;$j++)
	{ $affichePeriode[$j]=false; }
	
	//On va insérer les dates dans un tableau et les comparer jour par jour a nos 2 grilles tarifaires /
	//On va aussi différencier les Week ends grace à notre tableau de bool :)
	for ($i=0;$i<$nombre;$i++)
	{	
		//Initialisation des variables.
		$boolWeekend[$i]=false;
		$boolPeriode[$i]=false;
		
		$Date[$i]=date("Y-m-d", mktime(0, 0, 0, $h1[1],$h1[0]+$i, $h1[2]));
		$DateDisponible[$i]=date("d/m/Y", mktime(0, 0, 0, $h1[1],$h1[0]+$i, $h1[2]));
		$jourDate=explode("/",$DateDisponible[$i]);
		
		//Requete des Disponibilite des chambres.
		$reqDisponible="select * FROM eur_Dispo ORDER BY dateDispo";
		$resDisponible=mysqli_query($db, $reqDisponible);

		while ($ligne = mysqli_fetch_object ($resDisponible))
		{
			if ($Date[$i]==$ligne->dateDispo) $nbDisponible[$i]=$ligne->nbDispo;
		} 
		
		if ($nbDisponible[$i]<$chambre&&$nbDisponible[$i]!="") 
		{
			$boolDisponible=true;
			if ($nbDisponible[$i]>1) $afficheDisponible[$i]=" only $nbDisponible[$i] rooms available in $DateDisponible[$i]" ;
			else if ($nbDisponible[$i]==1) $afficheDisponible[$i]=" only one room available in $DateDisponible[$i]" ;
			else if ($nbDisponible[$i]==0) $afficheDisponible[$i]=" no rooms available in $DateDisponible[$i]" ;
			else $afficheDisponible[$i]=" no room available in $DateDisponible[$i]" ;
		}
		
		// On va calculer l'intervalle de temps de chaque jour de la période de réservation avec un lundi.
		// Ensuite onconvertit en les seconde en jour et enfin, on regarde si le modulo est un vendredi, samedi ou dimanche, et on les marques.
		
		if ( ( ( (strtotime($Date[$i]) - $Weekend) / 86400 ) %7 ) >=4 )
		{
		$boolWeekend[$i]=true;
		}

		//$cpt2 est le compteur des tarifs périodiques	(Contenu dans infos.php)		
			for ($j=0;$j<$cpt2;$j++)
			{ 
					//Si Un jour de la date de réservation est comprise dans les jours spéciaux
					if ( ( (strtotime($speDateDebut[$j]) - strtotime($Date[$i]) ) <=0) && ( (strtotime($speDateFin[$j]) - strtotime($Date[$i]) ) >0)  )
					{
						$boolPeriode[$i]=true;
						$prixPeriode[$i]=$j;
						$affichePeriode[$j]=true;
					}

			}

		
		//Si le jour retenue est dans une période spéciale
		if ($boolPeriode[$i])
		{
		$k=$prixPeriode[$i];
		
			//Si le jour retenue est le week end
			if ($boolWeekend[$i])
			{	
				for ($num=0;$num<$chambre;$num++)
				{
					// On regarde le nbre d'adulte et d'enfant par chambre, et caculte le tarif.
					if ($Adu[$num]==1||$Adu[$num]==2||$Enf[$num]>=1) { ${'chambre'.$num}+=$spe12[$k]; $info.="$jourDate[0]/$jourDate[1]S$spe12[$k]S"; /*echo "<${'chambre'.$num}>";*/ }
				 	if ($Adu[$num]==3) { ${'chambre'.$num}+=($spe12[$k]+$speSupp3[$k]) ;$temp=$spe12[$k]+$speSupp3[$k]; $info.="$jourDate[0]/$jourDate[1]S".$temp.".OOS";/* echo " |${'chambre'.$num}|";*/ }
				}
			}
			//Si on est en semaine
			else
			{	
				for ($num=0;$num<$chambre;$num++)
				{
					if ($Adu[$num]==1||$Enf[$num]==1){ ${'chambre'.$num}+=$spe1[$k];$info.="$jourDate[0]/$jourDate[1]S$spe1[$k]S";/*  echo " ( ${'chambre'.$num} )";*/ }
				 	if ($Adu[$num]==2||$Enf[$num]==2){ ${'chambre'.$num}+=$spe2[$k];$info.="$jourDate[0]/$jourDate[1]S$spe2[$k]S"; /* echo " = ${'chambre'.$num} =";*/ }
					if ($Adu[$num]==3||$Enf[$num]==3){ ${'chambre'.$num}+=$spe3[$k];$info.="$jourDate[0]/$jourDate[1]S$spe3[$k]S"; /* echo " ^ ${'chambre'.$num} ^";*/ }
					
				}
			}
		}
		//Si les jours sont hors tarifs spécial
		else
		{
			// Si on est en Week-end
			if ($boolWeekend[$i])
			{
				for ($num=0;$num<$chambre;$num++)
				{
					if ($Adu[$num]==1||$Adu[$num]==2||$Enf[$num]>=1) { ${'chambre'.$num}+=$price[4]; $info.="$jourDate[0]/$jourDate[1]S$price[4]S";/*echo " ! ${'chambre'.$num} !"; */}
				 	if ($Adu[$num]==3) { ${'chambre'.$num}+=($price[4]+$price[5]) ; $temp=$price[4]+$price[5];$info.="$jourDate[0]/$jourDate[1]S".$temp.".00S";/* echo " = ${'chambre'.$num} =";*/ }
				
				}
			}
			//Si on est en semaine
			else
			{	
				for ($num=0;$num<$chambre;$num++)
				{
					if ($Adu[$num]==1||$Enf[$num]==1) { ${'chambre'.$num}+=$price[1];$info.="$jourDate[0]/$jourDate[1]S$price[1]S";/* echo " V ${'chambre'.$num} V";*/ }
				 	if ($Adu[$num]==2||$Enf[$num]==2) { ${'chambre'.$num}+=$price[2];$info.="$jourDate[0]/$jourDate[1]S$price[2]S";/* echo " G ${'chambre'.$num} G";*/}
					if ($Adu[$num]==3||$Enf[$num]==3) { ${'chambre'.$num}+=$price[3];$info.="$jourDate[0]/$jourDate[1]S$price[3]S"; /* echo " H ${'chambre'.$num} H"; */ }
				}
			}
		}
		
	}



	
	
	 ?>
		<table  width="440">
			<tr>
				<td align="center" class="accueil" valign="top">
				<br /><br />
				<u>Confirmation de votre réservation :</u>
				<br /><br />
				<img src="<? echo $siteUrl . $europellier; ?>/image/point2.gif" alt="" /> 
				Vos dates de Réservation sont du <span style=" border:solid ; border-width:1px; background-color:#FFFF00"><? echo "&nbsp;$da1" ; ?> </span> &nbsp;au  <span style=" border:solid ; border-width:1px; background-color:#FFFF00"><? echo "&nbsp;$da2&nbsp;" ;?></span> <br /> pour <? echo "$nbPersonne" ;?> Personne(s)  <? if ($nbEnfant>0) echo "dont $nbEnfant enfant(s)" ; ?> . 
		
				<br /><br /> 
			<? 
			// Si il n'y a pas de chambre Dispos :
			if ($boolDisponible)
			{ 
			// On affiche les jours et le nombre de chambres non Dispos
			echo "Sorry, there is (are)<br />";
				for ($Dispo=0;$Dispo<$nombre;$Dispo++)
				{
					if ($afficheDisponible[$Dispo]!="")echo "<img src='".$siteUrl . $europellier."/image/point2.gif' alt='' />$afficheDisponible[$Dispo]<br />";
				}
			echo "</td></tr></table>" ;
			}
			else
			{
				// S'il n'y a qu'une seule chambre
				if ($chambre==1)
				{
					echo "<img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> Prix de la Chambre pour $nombre nuit(s)  : $chambre0 euros <br />" ; 
					$tarifTotal+=$chambre0 ;	
				}
				// S'il  y a plusieurs chambres réservées :
				else
				{
					// On va affiche le détail par chambre 
					for ($g=0;$g<$chambre;$g++)
					{
					$temp=$g+1;
				 	if (${'chambre'.$g}!=0) echo "<img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> Prix de la Chambre n°$temp pour $nombre nuit(s)  : ${'chambre'.$g} euros <br />" ; 
					$tarifTotal+=${'chambre'.$g} ; //Calcul du Montant du séjour
					}
				 }
				 
				echo "<br /></td></tr></table><br />" ;
				
				// Affichage du montant du séjour :
				echo "<table bgcolor='#FFFF00' align='center' class='accueil' style='border:solid ; border-width:1px; background-color:#FFFF00'><tr><td>" ;		
				echo " Montant du séjour : $tarifTotal euros" ; 
				echo "</td></tr></table>" ;
			} 
			?>
			
				 <br /><br />
				 <table><tr><td> 
				 <form name="Dispo" action="" method="post">
				 <input class='boutons' type='button' onclick='submit();javascript : retour0()' value='Retour'  name='retour' id='retour'>
					 
					  <? // Si les chambres sont Disponibles, on affiche le bouton de confrmation:
					  if (!$boolDisponible) echo "<input class='boutons' type='button' onclick='submit();javascript : suite1()' value='Confirmer'  name='confirm' id='confirm'>" ;
					  ?>
					  
				 </form>
				 </td></tr></table>
				 
		<script type="text/javascript">
			function suite1()
			{
				window.location.href = "<? echo $siteUrl . $europellier . "/english/Montpellier_Hotel_Eng/verif.php?da1=$da1&da2=$da2&nombre=$nombre&chambre=$chambre&nombreAdulteCham=$nombreAdulteCham&nombreEnfantCham=$nombreEnfantCham&nbAdulte=$nbAdulte&nbEnfant=$nbEnfant&tarifTotal=$tarifTotal&info=$info"; ?>";
			}
						
			function retour0()
			{
				window.location.href = "<? echo "Reservation.php?da1=$da1&da2=$da2&nombre=$nombre&chambre=$chambre&nombreAdulteCham=$nombreAdulteCham&nombreEnfantCham=$nombreEnfantCham"; ?>";
			}
		</script>
	</td>
</tr>
<!-- Fin info du centre -->   		
	

<? include( $_SERVER['DOCUMENT_ROOT']  . $parentFold . $europellier . '/english/scriptEng/panneauDroite.php'); ?>