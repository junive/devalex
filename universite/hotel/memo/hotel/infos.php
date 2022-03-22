<? 

	include_once(realpath(__DIR__ . '/../../../..') . "/setting.php");

/*
	$mysql_host = '.mysql.db'; // The server
	$mysql_login = ''; //  Login
	$mysql_pass = 'Garique12'; // Password
	$mysql_dbnom = ''; // Name of data base
				
	//Connexion à la base
	$db=mysqli_connect($mysql_host,$mysql_login,$mysql_pass, $mysql_dbnom);
*/	
	mysqli_set_charset($db, "utf8");
	
	//Requete de selection des tarifs fixes	
	$requ="select * FROM eur_Tarifs";
	$result=mysqli_query($db, $requ);
	$price=array();
	$cpt=0;
	
	//On stocke le tout dans des tableaux (entier et décimal)
	while ($ligne = mysqli_fetch_object ($result))
	{
		$price[$cpt]=$ligne->prix; // Décimale
		$tarif[$cpt]=(int) $ligne->prix; // Entier
		$personnes[$cpt]=$ligne->nomTarifs; // Nom correspondant au prix
		$cpt++;
	} 
	
	//Requete de selection des tarifs Périodes
	$requ2="select * FROM eur_Promotions ORDER BY numProm";
	$resu2=mysqli_query($db, $requ2);
	$spe1=array();$spe2=array();$spe3=array();$spe4=array();$spe5=array();$spe6=array();$spe7=array();$spe8=array();$spe9=array();
	$cpt2=0;
	
	//On stocke le tout dans des tableaux
	while ($ligne = mysqli_fetch_object ($resu2))
	{
	$spePublic[$cpt2]=$ligne->Public;
	$spe1[$cpt2]=$ligne->Pers1;
	$spe2[$cpt2]=$ligne->Pers2;
	$spe3[$cpt2]=$ligne->Pers3;
	$spe12[$cpt2]=$ligne->Pers12;
	$speSupp3[$cpt2]=$ligne->Supp3;
	$spePetit[$cpt2]=$ligne->Petit;
	$speDateDebut[$cpt2]=$ligne->dateDebut;
	$speDateFin[$cpt2]=$ligne->dateFin;
	$cpt2++;
	}
	
	
	$requet="select * FROM eur_Contenu ORDER BY numCont";
	$resul=mysqli_query($db, $requet);
	$nomCont=array();$Cont=array();
	$cpt3=0;
	
	while ($ligne = mysqli_fetch_object ($resul))
	{
	$nomCont[$cpt3]=$ligne->nomCont;
	$Cont[$cpt3]=$ligne->Cont;
	$cpt3++;
	}
	
	//Contenu de la page index
	$req="select * FROM eur_ContenuIndex ORDER BY numContIndex";
	$res=mysqli_query($db, $req);
	$ContIndex=array();
	$cpt4=0;
	
	while ($ligne = mysqli_fetch_object ($res))
	{
		$ContIndex[$cpt4]=$ligne->nomContIndex;
		$cpt4++;
	}
	
	
	//Contenu de la page Chambre
	$req="select * FROM eur_ContenuChambre ORDER BY numContChambre";
	$res=mysqli_query($db, $req);
	$ContChambre=array();$numContChambre=array();
	$cptChambre=0;
	
	while ($ligne = mysqli_fetch_object ($res))
	{
		$ContChambre[$cptChambre]=$ligne->nomContChambre;
		$numContChambre[$cptChambre]=$ligne->numContChambre;
		$cptChambre++;
	}
	
	//Contenu de la page Restaurant
	$req="select * FROM eur_ContenuRestau ORDER BY numContRestau";
	$res=mysqli_query($db, $req);
	$ContRestau=array();$numContRestau=array();
	$cptRestau=0;
	
	while ($ligne = mysqli_fetch_object ($res))
	{
		$ContRestau[$cptRestau]=$ligne->nomContRestau;
		$numContRestau[$cptRestau]=$ligne->numContRestau;
		$cptRestau++;
	}
	
	
	//Contenu de la page Petit Déjeuner
	$req="select * FROM eur_ContenuPetit ORDER BY numContPetit";
	$res=mysqli_query($db, $req);
	$ContPetit=array();$numContPetit=array();
	$cptPetit=0;
	
	while ($ligne = mysqli_fetch_object ($res))
	{
		$ContPetit[$cptPetit]=$ligne->nomContPetit;
		$numContPetit[$cptPetit]=$ligne->numContPetit;
		$cptPetit++;
	}
	
	//Contenu de la page Horaires
	$req="select * FROM eur_ContenuHoraire ORDER BY numContHoraire";
	$res=mysqli_query($db, $req);
	$ContHoraire=array();$numContHoraire=array();
	$cptHoraire=0;
	
	while ($ligne = mysqli_fetch_object ($res))
	{
		$ContHoraire[$cptHoraire]=$ligne->nomContHoraire;
		$numContHoraire[$cptHoraire]=$ligne->numContHoraire;
		$cptHoraire++;
	}
	
	//Contenu de la page Service
	$req="select * FROM eur_ContenuService ORDER BY numContService";
	$res=mysqli_query($db, $req);
	$ContService=array();$numContService=array();
	$cptService=0;
	
	while ($ligne = mysqli_fetch_object ($res))
	{
		$ContService[$cptService]=$ligne->nomContService;
		$numContService[$cptService]=$ligne->numContService;
		$cptService++;
	}
	
	
	//Contenu de la page Proximite
	$req="select * FROM eur_ContenuProximite ORDER BY numContProximite";
	$res=mysqli_query($db, $req);
	$ContProximite=array();$numContProximite=array();
	$cptProximite=0;
	
	while ($ligne = mysqli_fetch_object ($res))
	{
		$ContProximite[$cptProximite]=$ligne->nomContProximite;
		$numContProximite[$cptProximite]=$ligne->numContProximite;
		$cptProximite++;
	}
	
	//Contenu de la page Contact
	$req="select * FROM eur_ContenuContact ORDER BY numContContact";
	$res=mysqli_query($db, $req);
	$ContContact=array();$numContContact=array();
	$cptContact=0;
	
	while ($ligne = mysqli_fetch_object ($res))
	{
		$ContContact[$cptContact]=$ligne->nomContContact;
		$numContContact[$cptContact]=$ligne->numContContact;
		$cptContact++;
	}
	
	//Contenu de la page Visitez Montpellier
	$req="select * FROM eur_ContenuVisite ORDER BY numContVisite";
	$res=mysqli_query($db, $req);
	$ContVisite=array();$numContContact=array();
	$cptVisite=0;
	
	while ($ligne = mysqli_fetch_object ($res))
	{
		$ContVisite[$cptVisite]=$ligne->nomContVisite;
		$numContVisite[$cptVisite]=$ligne->numContVisite;
		$cptVisite++;
	}
	
	//Contenu de la page des conditions de ventes
	$req="select * FROM eur_ContenuConditions ORDER BY numContCondition";
	$res=mysqli_query($db, $req);
	$ContCondition=array();$numContCondition=array();
	$cptCondition=0;
	
	while ($ligne = mysqli_fetch_object ($res))
	{
		$ContCondition[$cptCondition]=$ligne->nomContCondition;
		$numContCondition[$cptCondition]=$ligne->numContCondition;
		$cptCondition++;
	}
	
	//Promotion flash affiché à la place des photos
	$requet="select * FROM eur_Flash ORDER BY numFlash";
	$resul=mysqli_query($db, $requet);
	$nomFlash=array();$numFlash=array();
	$cptFlash=0;
	
	while ($ligne = mysqli_fetch_object ($resul))
	{
		$nomFlash[$cptFlash]=$ligne->nomFlash;
		$numFlash[$cptFlash]=$ligne->numFlash;
		$cptFlash++;
	}
	
	//Contenu du cadre des coordonnées
	$requet="select * FROM eur_ContenuCoord ORDER BY numContCoord";
	$resul=mysqli_query($db, $requet);
	$nomCoord=array();$numCoord=array();
	$cptCoord=0;
	
	while ($ligne = mysqli_fetch_object ($resul))
	{
		$nomCoord[$cptCoord]=$ligne->nomContCoord;
		$numCoord[$cptCoord]=$ligne->numContCoord;
		$cptCoord++;
	}
	
	//Contenu du cadre des tarifs
	$requet="select * FROM eur_ContenuTarif ORDER BY numContTarif";
	$resul=mysqli_query($db, $requet);
	$nomTar=array();$numTar=array();
	$cptTar=0;
	
	while ($ligne = mysqli_fetch_object ($resul))
	{
		$nomTar[$cptTar]=$ligne->nomContTarif;
		$numTar[$cptTar]=$ligne->numContTarif;
		$cptTar++;
	}
	
	//Contenu des meta Tag pour les moteurs de recherches
	$requet="select * FROM eur_MetaTag ORDER BY numMeta";
	$resul=mysqli_query($db, $requet);
	$nomMeta=array();$numMeta=array();
	$cptMeta=0;
	
	while ($ligne = mysqli_fetch_object ($resul))
	{
		$ContMeta[$cptMeta]=$ligne->ContMeta;
		$nomMeta[$cptMeta]=$ligne->nomMeta;
		$numMeta[$cptMeta]=$ligne->numMeta;
		$cptMeta++;
	}
	
	//Contenu Entier de la partie anglaise
	$requet="select * FROM eur_English ORDER BY numContEng";
	$resul=mysqli_query($db, $requet);
	$nomEng=array();$numEng=array();$ContEng=array();
	$cptEng=0;
	
	while ($ligne = mysqli_fetch_object ($resul))
	{
		$ContEng[$cptEng]=$ligne->ContEng;
		$nomEng[$cptEng]=$ligne->nomContEng;
		$numEng[$cptEng]=$ligne->numContEng;
		$cptEng++;
	}
	
	
	?>
	
	