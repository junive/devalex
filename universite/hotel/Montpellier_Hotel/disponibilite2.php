<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"><head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" >
<LINK rel= "stylesheet" type="text/css" href="<? echo $siteUrl . $europellier; ?>/script/style.css" >
<title>Hotel Montpellier : Réservation</title>

</head>

<? $titre="Réservation";
$numMenu=10;
include($_SERVER['DOCUMENT_ROOT'] . $parentFold . $europellier . "/script/panneauGaucheDessus.php"); 
include("../memo/hotel/infos.php");
 ?>

	<!--
	<form method="POST" action="" name="Reserv">
	<?	 //include($_SERVER['DOCUMENT_ROOT'] . $parentFold . $europellier . "/Montpellier_Hotel/verif.php"); ?>

	</form>	
	-->


<!-- Debut info du Centre -->
      		

<tr>
	<td style=" background-color:#ffcc00;" align="center" valign="top" colspan="8" width="499" height="449" >

	<? 
	//Récupération du nombre de personnes par chambre
	$Adu=explode("/",$nombreAdulteCham);
	$Enf=explode("/",$nombreEnfantCham) ;

	for ($i=0; $i <=$chambre; $i++)
	{ 
		$nbPersonne+=$Adu[$i]+$Enf[$i];
		$nbEnfant+=$Enf[$i]; 
	}
	
	
	// Ce sera notre jour de référence pour calculer les week-end
	$Weekend=strtotime("2006-07-17");
	
	$h1=explode("/",$da1);
	$h2=explode("/",$da2);
	
	$dateDebut="$h1[2]-$h1[1]-$h1[0]";
	$dateFin="$h2[2]-$h2[1]-$h2[0]";
	$hs1=strtotime($dateDebut);
	$hs2=strtotime($dateFin);
	$diff1=(($hs1-$Weekend)/86400)%7;
	//echo "(((($diff1))))";
	//On calcul l'intervalle et convertit du lenb de seconde en nb de jour
	$h=($hs2-$hs1)/86400;
	//echo "|||$hs1////$hs2////$h";
	
	$diff1=(($hs1-$Weekend)/86400)%7;
	
	$remplie= (int) ($adulte/3);	//Chambres remplies (donc 3 personnes)
	$semi=($adulte%3); //Chambres pas remplies
	
	$tarifTotal=0;
	$chambre0=0;
	$chambre1=0;
	$chambre2=0;
	$chambre3=0;
	$chambre4=0;
	
	
	$boolWeekend=array(); //on marque les Week-end
	$boolPeriode=array(); //On marque les jours à tarifs spéciaux
	$prixPeriode=array(); //va sélectionner la période qui bénéficie du tarifs spéciale
	$affichePeriode=array();
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
		//echo "<br>$Date[$i]";
		
		//On va calculer l'intervalle de temps de chaque jour de la période de réservation avec un lundi.
		// Ensuite onconvertit en les seconde en jour et enfin, on regarde si le modulo est un vendredi, samedi ou dimanche, et on les marques.
		
		if ( ( ( (strtotime($Date[$i]) - $Weekend) / 86400 ) %7 ) >=4 )
		{
		//echo ">>$Date[$i]<<";
		$boolWeekend[$i]=true;
		}
		

		
		

		
			//$cpt2 est le compteur des tarifs périodiques	(Contenu dans infos.php)		
			for ($j=0;$j<$cpt2;$j++)
			{ 
					//Si Un jour de la date de réservation est comprise dans les jours spéciaux
					if ( ( (strtotime($speDateDebut[$j]) - strtotime($Date[$i]) ) <=0) && ( (strtotime($speDateFin[$j]) - strtotime($Date[$i]) ) >0)  )
					{
						//echo "<br>!!$speDateDebut[$j]//$speDateFin[$j]!!";
						$boolPeriode[$i]=true;
						$prixPeriode[$i]=$j;
						$affichePeriode[$j]=true;
					}
					else
					{
						//Si la période spécial commence avant la date de réservation, et si elle se termine après, on marque.
					 	//if ( ((strtotime($speDateDebut[$j]) - strtotime($dateDebut) )<0)&&((strtotime($speDateFin[$j]) - strtotime($dateFin))>0) )		
			 			//{
						//$boolPeriode[$i]=true;
						//}
					
					}
			}

		
		//Si le jour retenue est dans une période spéciale
		if ($boolPeriode[$i])
		{
		//echo "<<<$i//$Date[$i]>>>><br>";
		$k=$prixPeriode[$i];
		
			//Si le jour retenue est le week end
			if ($boolWeekend[$i])
			{	//echo "$i//$Date[$i]<br>"; 
				for ($num=0;$num<=$chambre;$num++)
				{
					if ($Adu[$num]==1||$Adu[$num]==2||$Enf[$num]>=1) { ${'chambre'.$num}+=$spe12[$k]; /*echo "<${'chambre'.$num}>";*/ }
				 	if ($Adu[$num]==3) { ${'chambre'.$num}+=($spe12[$k]+$speSupp3[$k]) ; /* echo " |${'chambre'.$num}|";*/ }
				}
			/*
				if (Adu[0]==1||Adu[0]==2||Enf[0]>=1)$chambre1+=$spe12[$k];
				 	if (Adu[0]==3) $chambre1+=$speSupp3[$k] ;
				if (Adu[0]==1||Adu[0]==2||Enf[0]>=1)$chambre2+=$spe12[$k]; 
					if (Adu[1]==3) $chambre2+=$speSupp3[$k] ;
				if (Adu[0]==1||Adu[0]==2||Enf[0]>=1)$chambre3+=$spe12[$k]; 
					if (Adu[2]==3) $chambre3+=$speSupp3[$k] ;
				if (Adu[0]==1||Adu[0]==2||Enf[0]>=1)$chambre4+=$spe12[$k]; 
					if (Adu[3]==3) $chambre4+=$speSupp3[$k] ;
				if (Adu[0]==1||Adu[0]==2||Enf[0]>=1)$chambre5+=$spe12[$k]; 
					if (Adu[4]==3) $chambre5+=$speSupp3[$k] ; */
				//$tarifTotal+=$remplie*($speSupp3[$k]+$spe12[$k]);
				//if ($semi!=0) $tarifTotal+=$spe12[$k];		
			}
			else
			{	
				for ($num=0;$num<=$chambre;$num++)
				{
					if ($Adu[$num]==1||$Enf[$num]==1){ ${'chambre'.$num}+=$spe1[$k];/*  echo " ( ${'chambre'.$num} )";*/ }
				 	if ($Adu[$num]==2||$Enf[$num]==2){ ${'chambre'.$num}+=$spe2[$k]; /* echo " = ${'chambre'.$num} =";*/ }
					if ($Adu[$num]==3||$Enf[$num]==3){ ${'chambre'.$num}+=$spe3[$k]; /* echo " ^ ${'chambre'.$num} ^";*/ }
					//if ($Adu[$num]==3) ${'chambre'.$num}+=$speSupp3[$k] ;
				}
			
			
				//$tarifTotal+=$remplie*$spe3[$k];
				//if ($semi==1) $tarifTotal+=$spe1[$k];
				//if ($semi==2) $tarifTotal+=$spe2[$k];
			}
		}
		//Si les jours sont hors tarifs spécial
		else
		{
			if ($boolWeekend[$i])
			{
				for ($num=0;$num<=$chambre;$num++)
				{
					if ($Adu[$num]==1||$Adu[$num]==2||$Enf[$num]>=1) { ${'chambre'.$num}+=$price[4]; /*echo " ! ${'chambre'.$num} !"; */}
				 	if ($Adu[$num]==3) { ${'chambre'.$num}+=($price[4]+$price[5]) ;/* echo " = ${'chambre'.$num} =";*/ }
				}
				//$tarifTotal+=$remplie*($price[5]+$price[4]);
				//if ($semi!=0) $tarifTotal+=$price[4];
			}
			else
			{	
				for ($num=0;$num<=$chambre;$num++)
				{
					if ($Adu[$num]==1||$Enf[$num]==1) { ${'chambre'.$num}+=$price[1];/* echo " V ${'chambre'.$num} V";*/ }
				 	if ($Adu[$num]==2||$Enf[$num]==2) { ${'chambre'.$num}+=$price[2];/* echo " G ${'chambre'.$num} G";*/}
					if ($Adu[$num]==3||$Enf[$num]==3) { ${'chambre'.$num}+=$price[3]; /* echo " H ${'chambre'.$num} H"; */ }
				}
				//$tarifTotal+=$remplie*$price[3];
				//if ($semi==1) $tarifTotal+=$price[1];
				//if ($semi==2) $tarifTotal+=$price[2];
			}
		}
		
	}


//echo "$da1/$da2";	
//echo "<br><br>$tarifTotal";


	
	
	 ?>
		<table  width="440">
			<tr>
				<td align="center" class="accueil" valign="top">
				<br /><br />
				<u>Confirmation de votre réservation :</u>
				<br /><br />
				<img src="<? echo $siteUrl . $europellier; ?>/image/point2.gif" alt="" /> 
				Vos dates de Réservation sont du <span style=" border:solid ; border-width:1px; background-color:#FFFF00"><? echo "&nbsp;$da1" ; ?> </span> &nbsp;au  <span style=" border:solid ; border-width:1px; background-color:#FFFF00"><? echo "&nbsp;$da2&nbsp;" ;?></span> <br /> pour <? echo "$nbPersonne" ;?> Personne(s) dont <? echo "$nbEnfant" ; ?> enfant(s). 
			
				
				
				<br /><br /> <? echo "<img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> Prix de la Chambre 1 : $chambre0 euros" ; ?>
				 <? if ($chambre1!=0) echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> Prix de la Chambre 2 : $chambre1 euros" ; ?>
				 <? if ($chambre2!=0) echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> Prix de la Chambre 3 : $chambre2 euros" ; ?>
				 <? if ($chambre3!=0) echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> Prix de la Chambre 4 : $chambre3 euros" ; ?>
				 <? if ($chambre4!=0) echo "<br /><img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> Prix de la Chambre 5 : $chambre4 euros" ; 

				 	
				echo "<br /> <br />" ;
				
				
				$phraseSpeciale=true;
				for ($j=0;$j<$cpt2;$j++)
				{ 
					if ($affichePeriode[$j]) 
					{ 
							if ($phraseSpeciale){echo "<u>Tarif spécial :</u> "; $phraseSpeciale=false;}
						$deb=explode("-",$speDateDebut[$j]);
						$fin=explode("-",$speDateFin[$j]);
					//echo "du $speDateDebut[$j] au $speDateFin[$j] ";
						echo "<br> => du $deb[2]/$deb[1]/$deb[0] au $fin[2]/$fin[1]/$fin[0] ";
							if ($spePetit[$j]==0) echo "(Petit déjeuner gratuit !)" ;	 
					}
				}
				echo "</td></tr></table>" ;
				echo "<br />" ;  
				echo "<table bgcolor='#FFFF00' align='center' class='accueil' border='1'><tr><td>" ;
				$tarifTotal=$chambre0+$chambre1+$chambre2+$chambre3+$chambre4;		
				echo "<img src='".$siteUrl . $europellier."/image/point2.gif' alt='' /> TARIF TOTAL : $tarifTotal euros" ; 
				echo "</td></tr></table>" ;
				 ?>
				 <br /><br />
				 <table><tr><td> 
				 <form name="Dispo" action="" method="post">
				 	<input class="boutons" type='button' onclick="submit();javascript : retour0()" value="Retour"  name='retour' id='retour'>
					<input class="boutons" type='button' onclick="submit();javascript : suite1()" value="Confirmer"  name='confirm' id='confirm'>
				 </form>
				 </td></tr></table>
						<script type="text/javascript">
						function suite1()
						{
						window.location.href = "<? echo "verif.php?da1=$da1&da2=$da2&nombre=$nombre&chambre=$chambre&nombreAdulteCham=$nombreAdulteCham&nombreEnfantCham=$nombreEnfantCham&tarifTotal=$tarifTotal"; ?>";
						}
						
						function retour0()
						{
						window.location.href = "<? echo "Reservation.php?da1=$da1&da2=$da2&nombre=$nombre&chambre=$chambre&nombreAdulteCham=$nombreAdulteCham&nombreEnfantCham=$nombreEnfantCham"; ?>";
						}
						</script>
	</td>
</tr>
<!-- Fin info du centre -->   		
	

<? include($_SERVER['DOCUMENT_ROOT']  . $parentFold . $europellier . '/script/panneauDroite.php'); ?>