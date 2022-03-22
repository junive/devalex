<?
//include($_SERVER['DOCUMENT_ROOT'] . $parentFold . $emuPsxV4 ."/emulateurs_playstation/connect_visite.php") ;

//on recupere l adresse ip du visiteur
if($_SERVER) 	{
  			if(isset($_SERVER['HTTP_X_FORWARDED_FOR']))
      				$adress = $_SERVER['HTTP_X_FORWARDED_FOR'];
    			elseif(isset($_SERVER['HTTP_CLIENT_IP']))
      				$adress = $_SERVER['HTTP_CLIENT_IP'];
    			else
      				$adress = $_SERVER['REMOTE_ADDR'];
  		}
 else 		{
    			if(getenv('HTTP_X_FORWARDED_FOR'))
      				$adress = getenv('HTTP_X_FORWARDED_FOR');
    			elseif(getenv('HTTP_CLIENT_IP'))
      				$adress = getenv('HTTP_CLIENT_IP');
    			else
      				$adress = getenv('REMOTE_ADDR');
  		}

//on verifie si on a pas changé de jour et on recupere le chiffre du compteur
$sql="select * from psx_compteur_visite where ip='compteur'";
$res=mysqli_query($db, $sql);
$ligne = mysqli_fetch_object ($res);
$date = date("Y-m-d");

//on convertit l heure courante en minute d une journee
$time=(date("H") * 60) + date("i");

//on recupere le compteur courant et le temps t
$compteur=$ligne->compteur;
$t=$ligne->time; //temps de connexion de reference
$d=$ligne->duree; //duree de renouvellement de reference

//on test si on a changé de jour
if ($date!="$ligne->date")
{
	//on vide toutes les addresses ip enregistrées dans la table lors du changement de jour
	$sql="delete from psx_compteur_visite where ip!='compteur'";
	$res=mysqli_query($db, $sql) or die ("requete invalide supp ip");
	//on met a jour la nouvelle date dans la table
	$sql="update psx_compteur_visite set date='$date'";
	$res=mysqli_query($db, $sql) or die ("requete invalide maj date");
}

//on verifie l adresse ip du visiteur et aussi son heure de passage
$sql="select * from psx_compteur_visite where ip='$adress'";
$res=mysqli_query($db, $sql) or die ("requete invalide verif ip");
$ligne = mysqli_fetch_object ($res);
$num_rows =mysqli_num_rows ($res);
if ($num_rows==0)
{
	//on enregistre l adresse ip si elle est inconnu et on incremente le compteur
	$sql="insert into psx_compteur_visite (ip,time,duree) values ('$adress','$time','$time')";
	$res=mysqli_query($db, $sql)or die ("requete invalide enr ip");
	$compteur+=1;
	$sql="update psx_compteur_visite set compteur=$compteur where ip='compteur'";
	$res=mysqli_query($db, $sql) or die ("requete invalide up compt");
}
else
{
	//si l'adresse ip est connu alors verifie si sa connexion precedente est superieur a la durée
	//de renouvellement et si son heure de passage precedente incremente ou pas les connectés
	$time1=$ligne->time; //on recupere l'heure de sa precedente connexion de notre connecté
	$duree1=$ligne->duree; //on recupere l'heure de sa precedente connexion de notre connecté
	
	// on verifie si sa derniere connexion ne date pas de plus que la duree de reference
	if ($d*60<($time - ($duree1)))
	{
		//si la duree de reference est depassé alors notre connecté est comptablisé 
		//comme nouvelle visite et on met a jour sa nouvelle heure de passage
		$sql="update psx_compteur_visite set time=$time,duree=$time where ip='$adress'";
		$res=mysqli_query($db, $sql) or die ("requete invalide maj time");
		
		//on cree une ligne fictive pour pouvoir le comptabilisé dans les connectés de jour
		$adress1=$adress.".".$compteur;
		$sql="insert into psx_compteur_visite (ip,time,duree) values ('$adress1','$time','$time')";
		$res=mysqli_query($db, $sql)or die ("requete invalide enr ip");
		
		//et on increment le compteur de visite
		$compteur+=1;
		$sql="update psx_compteur_visite set compteur=$compteur where ip='compteur'";
		$res=mysqli_query($db, $sql) or die ("requete invalide up compt");
	}
	else
	{
		//on met a jour son heure de passage si elle est superieure a t
		if ($time>(($time1)-$t))
		{
			$sql="update psx_compteur_visite set time=$time where ip='$adress'";
			$res=mysqli_query($db, $sql) or die ("requete invalide maj time");
		}
	}
}


//on compte le nb de connecté de la journée
$sql="select * from psx_compteur_visite";
$res=mysqli_query($db, $sql) or die ("requete invalide compte visiteur journee");
$compteur_j=(mysqli_num_rows ($res))-1;

//on compte le nb de connecté
$time=$time-$t;
$sql="select * from psx_compteur_visite where time>=$time and ip!='compteur'";
$res=mysqli_query($db, $sql) or die ("requete invalide compte visisteur connecté");
$compteur_c=mysqli_num_rows ($res);
mysqli_free_result($res);
// mysql_close();
?>