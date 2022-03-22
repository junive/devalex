<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"><head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" >

<? include("../memo/hotel/infos.php"); ?>
<meta name="description" lang="fr" content="<? echo "$ContMeta[0]" ; ?>" >
<meta name="keywords" lang="fr" content="<? echo "$ContMeta[1]"; ?>" >
<meta name="category" content="<? echo "$ContMeta[3]"; ?>" >
<meta name="distribution" content="global" >
<meta name="robot" content="all" >
<meta name="revisit-after" content="1 day" >
<meta name="author" lang="fr" content="Alexandre GORISSE" >
<meta name="copyright" content="montpellier-hotel" >
<meta name="identifier-url" content="http://www.euromedecine.com" >

<LINK rel="stylesheet" type="text/css" href="<? echo $siteUrl . $europellier; ?>/script/style.css" >
<title>Hotel Du Parc Euromedecine de Montpellier-Grabels : Formulaire</title>

</head>

<? 
// Pour la sélection menus
$titre="Réservation";
$numMenu=10;
// Menus de gauche et du centre 
include($_SERVER['DOCUMENT_ROOT'] . $parentFold . $europellier . "/script/panneauGaucheDessus.php"); 
//Année actuelle
$AnneeAujourdhui=date("Y");


  $da1 = isset($_GET['da1']) ? $_GET['da1'] : date("d/m/Y");
 $da2 = isset($_GET['da2']) ? $_GET['da2'] : date("d/m/Y");
 $nombre = isset($_GET['nombre']) ? $_GET['nombre'] : 0;
 $chambre = isset($_GET['chambre']) ? $_GET['chambre'] : 0;
 $enfant = isset($_GET['enfant']) ? $_GET['enfant'] : 0;
 $adulte = isset($_GET['adulte']) ? $_GET['adulte'] : 0;
 $msgDates = isset($_GET['msgDates']) ? $_GET['msgDates'] : "";
 $msgChambre  = isset($_GET['msgChambre']) ? $_GET['msgChambre'] : "";
 $bo = isset($_GET['bo']) ? $_GET['bo'] : "";
 
 $nbPersonne = isset($_GET['nbPersonne']) ? $_GET['nbPersonne'] : 0;
 $nbEnfant  = isset($_GET['nbEnfant']) ? $_GET['nbEnfant'] : 0;
 $nbAdulte = isset($_GET['nbAdulte']) ? $_GET['nbAdulte'] : 0;
 
 $info = isset($_GET['info']) ? $_GET['info'] : 0;
 
 $nombreEnfantCham = isset($_GET['nombreEnfantCham']) ? $_GET['nombreEnfantCham'] : 0;
 $nombreEnfantCham0 = isset($_GET['nombreEnfantCham0']) ? $_GET['nombreEnfantCham0'] : 0;
 $nombreAdulteCham = isset($_GET['nombreAdulteCham']) ? $_GET['nombreAdulteCham'] : 0;
 $nombreAdulteCham0 = isset($_GET['nombreAdulteCham0']) ? $_GET['nombreAdulteCham0'] : 0;
 $nombreAdulteCham1 = isset($_GET['nombreAdulteCham1']) ? $_GET['nombreAdulteCham1'] : 0;
 $nombreAdulteCham2 = isset($_GET['nombreAdulteCham2']) ? $_GET['nombreAdulteCham2'] : 0;
 $nombreAdulteCham3 = isset($_GET['nombreAdulteCham3']) ? $_GET['nombreAdulteCham3'] : 0;
 $nombreAdulteCham4 = isset($_GET['nombreAdulteCham4']) ? $_GET['nombreAdulteCham4'] : 0;
 

?>


<!-- Debut info du Centre -->
      		

<tr>
<td style=" background-color:#ffcc00;" align="center" valign="top" colspan="8" width="499" height="449" >

<table>
<tr><td  width="460" align="center" valign="top">


<form method="POST" action="" name="Reserv">
<?

// On récupère le prix par chambre et par jour depuis l'url
$cha=explode("S",$info); 
$cha1=array();$cha2=array();$cha3=array();$cha4=array();$cha5=array();
$pri1=array();$pri2=array();$pri3=array();$pri4=array();$pri5=array();

$temp=$nombre*2*$chambre; //Nombre de nuits X (Date + prix) X Nombre de chambre
$max=count($cha)-1; // Longueur des tableaux contenant les données

// compteur pour avancer dans nos boucles par chambre
$p1=0;$p2=0;$p3=0;$p4=0;$p5=0;
for ($i=0;$i<=$max;$i+=2)
{
$temp=$i+1;
// On va regarder le modulo de $i pour voir à quel chambre nous sommes dans la boucle
if ($p1 < sizeof($cha1) && ($i/2)%$chambre==0) {$cha1[$p1]=$cha[$i] ; $pri1[$p1]=$cha[$temp];$p1++; }
if ($p2 < sizeof($cha2) && ($i/2)%$chambre==1) {$cha2[$p2]=$cha[$i] ; $pri2[$p2]=$cha[$temp];$p2++; }
if ($p3 < sizeof($cha3) && ($i/2)%$chambre==2) {$cha3[$p3]=$cha[$i] ; $pri3[$p3]=$cha[$temp];$p3++; }
if ($p4 < sizeof($cha4) && ($i/2)%$chambre==3) {$cha4[$p4]=$cha[$i] ; $pri4[$p4]=$cha[$temp];$p4++; }
if ($p5 < sizeof($cha5) && ($i/2)%$chambre==4) {$cha5[$p5]=$cha[$i] ; $pri5[$p5]=$cha[$temp];$p5++; }
}

$Adulte=explode("/",$nombreAdulteCham); //Nombre d'adultes
$Enfant=explode("/",$nombreEnfantCham); //Nombre d'enfants

// Fonction de contrôle du mail
function check_mail($ema) {
if( (preg_match('/(@.*@)|(\.\.)|(@\.)|(\.@)|(^\.)/', $ema)) ||
(preg_match('/^.+\@(\[?)[a-zA-Z0-9\-\.]+\.([a-zA-Z]{2,3}|[0-9]{1,3})(\]?)$/',$ema)) ) {
$host = explode('@', $ema);
if(checkdnsrr($host[1].'.', 'MX') ) return true;
if(checkdnsrr($host[1].'.', 'A') ) return true;
if(checkdnsrr($host[1].'.', 'CNAME') ) return true;
}
return false;
}
// FIN Fonction de contrôle du mail

//Fonction de protection contre les spams.
function ProtectEmail($emai)
{
	$tableau_email = explode("/",$emai); 
	$debut = $tableau_email[0];
	$fin = explode ("*",$tableau_email[1]); 
	$domaine = $fin[0];
	$extension = $fin[1];
	
	//On réecrit le format mail
	$emai = $debut."@".$domaine.".".$extension;
	return $emai;
}



 


$MailBody = isset($_POST['MailBody']) ? $_POST['MailBody'] : "";
$MailClient  = isset($_POST['MailClient']) ? $_POST['MailClient'] : "";
$tarifTotal  = isset($_POST['tarifTotal']) ? $_POST['tarifTotal'] : "";
$infoCarte = isset($_POST['infoCarte']) ? $_POST['infoCarte'] : "";
$selecValiditeMois = isset($_POST['selecValiditeMois']) ? $_POST['selecValiditeMois'] : "";
$selecValiditeAn = isset($_POST['selecValiditeAn']) ? $_POST['selecValiditeAn'] : "";
$crypto = isset($_POST['crypto']) ? $_POST['crypto'] : "";
$tarifTotal = isset($_POST['tarifTotal']) ? $_POST['tarifTotal'] : "";

$email = isset($_POST['email']) ? $_POST['email'] : "";
$msgNom = isset($_POST['msgNom']) ? $_POST['msgNom'] : "";
$msgPrenom = isset($_POST['msgPrenom']) ? $_POST['msgPrenom'] : "";
$msgMail = isset($_POST['msgMail']) ? $_POST['msgMail'] : "";
$msgTel = isset($_POST['msgTel']) ? $_POST['msgTel'] : "";
$message = isset($_POST['message']) ? $_POST['message'] : "";
$msgNomCarte = isset($_POST['msgNomCarte']) ? $_POST['msgNomCarte'] : "";
$msgSelecCarte = isset($_POST['msgSelecCarte']) ? $_POST['msgSelecCarte'] : "";
$msgValiditeMois = isset($_POST['msgValiditeMois']) ? $_POST['msgValiditeMois'] : "";
$msgNumCarte = isset($_POST['msgNumCarte']) ? $_POST['msgNumCarte'] : "";
$msgCrypto = isset($_POST['msgCrypto']) ? $_POST['msgCrypto'] : "";
$msgCheck = isset($_POST['msgCheck']) ? $_POST['msgCheck'] : "";
$nom = isset($_POST['nom']) ? $_POST['nom'] : "";
$prenom = isset($_POST['prenom']) ? $_POST['prenom'] : "";
$adresse = isset($_POST['adresse']) ? $_POST['adresse'] : "";
$ville = isset($_POST['ville']) ? $_POST['ville'] : "";
$tel = isset($_POST['tel']) ? $_POST['tel'] : "";
$tel1 = isset($_POST['tel']) ? $_POST['tel'] : "";
$tel2 = isset($_POST['tel2']) ? $_POST['tel2'] : "";
$pays = isset($_POST['pays']) ? $_POST['pays'] : "";
$comment = isset($_POST['comment']) ? $_POST['comment'] : "";
$nomCarte = isset($_POST['nomCarte']) ? $_POST['nomCarte'] : "";
$selecCarte = isset($_POST['selecCarte']) ? $_POST['selecCarte'] : "";
$numCarteVi1 = isset($_POST['numCarteVi1']) ? $_POST['numCarteVi1'] : "";
$numCarteVi2 = isset($_POST['numCarteVi2']) ? $_POST['numCarteVi2'] : "";
$numCarteVi3 = isset($_POST['numCarteVi3']) ? $_POST['numCarteVi3'] : "";
$numCarteVi4 = isset($_POST['numCarteVi4']) ? $_POST['numCarteVi4'] : "";
$chek = isset($_POST['chek']) ? $_POST['chek'] : "";




$FaxTo = "testmailcomfort/yahoo*fr"; //adresse à laquelle sera envoyé le Contenu du formulaire
$MailTo = "resaeuro/montpellier-hotel*fr"; //adresse où sera envoyé les données de la carte
$MailSubject = "Confirmation de Réservation Hotel du Parc Euromédecine"; //texte qui va figurer dans le champ "sujet" du email
$MailHeader = $email; //adresse email qui va figurer dans le champ "expéditeur" du email


$Envoi = 1; //initialisation de la variable d'envoi à 1




if(isset($_POST['envoyer'])) // On évite d'obtenir les messages d'avertissement du début
{

if ($prenom == ""){ //nom du champ prénom
$msgPrenom="Veuillez saisir votre prénom";
$Envoi = 0; //si le champ1 n'a pas été rempli, la variable envoi prend la valeur de 0
}
else {
$MailBody .= "Prénom : $prenom   "; //si le champ1 contient de l'information, elle est stockée dans la variable MailBody
}

//Vérification du nom
if ($nom == ""){
$msgNom="Veuillez saisir votre nom";
$Envoi = 0;
}
else {
$MailBody .= "Nom : $nom\n";
}

$MailBody .= "Adresse : $adresse \n";
$MailBody .= "Ville: $ville \n";

//Vérification de l'email
if ($email == ""){
$msgMail="Veuillez saisir un Mail";
$Envoi = 0;
}
else {
if (check_mail($email)) {
$MailBody .= "E-mail : $email\n";
$MailCc = $email;
}
else {
$msgMail="Format de Mail non valide";
$Envoi = 0;
}
}


//Vérification du téléphone
if ($tel == ""){
$msgTel="Veuillez saisir un téléphone";
$Envoi = 0;
}
else {
$MailBody .="Téléphone : $tel\n";
}

$MailBody .="Téléphone portable : $tel2\n";
$MailBody .="Intial du Pays: $pays\n";

//Arret des infos pour les clients

$MailClient.=$MailBody;
$MailClient.="Montant Total du séjour : $tarifTotal euros\n";
$MailClient.="Commentaires : $comment\n\n" ;


//Vérification du nom du possésseur de carte
if ($nomCarte == ""){
$msgNomCarte="Veuillez saisir le nom figurant sur la carte";
$Envoi = 0;
}
else {
$infoCarte .="Nom Carte : $nomCarte\n";
}

//Vérification de la date de validité
if ($selecCarte == ""){
$msgSelecCarte="Veuillez saisir un type de Carte";
$Envoi = 0;
}
else {
$infoCarte .="Type Carte : $selecCarte\n";
}

if ($selecValiditeMois == ""){
$msgSelecValiditeMois="Veuillez sélectionner une date valide";
$Envoi = 0;
}
else {
$infoCarte .="Date de Validité : $selecValiditeMois-$selecValiditeAn\n";
}

// Vérification du numéro de carte
if ($selecCarte=="American") // Si c'est une american express
{
	if ( strlen($numCarteAm1) != 4 || strlen($numCarteAm2) != 6 || strlen($numCarteAm3) != 5)
	{
		$msgNumCarte="Veuillez saisir un numéro de carte valide\n<br><br>";
		$Envoi = 0;
	}
	else 
	{$tempo="$numCarteAm1$numCarteAm2$numCarteAm3";
		if (ereg ("([0-9]{15})", $tempo)) // On vérifie qu'ils s'agit bien de nombres
		{// Si tout est ok, on valide
		$infoCarte .="Numéro de C : $tempo \n";
		} 
		else 
		{
		$msgNumCarte="Veuillez saisir un numéro de carte valide\n<br><br>";
		$Envoi = 0;
		}
	}
}
else //Si c'est une visa ou une euro/master Card
{
	if (strlen($numCarteVi1) != 4 || strlen($numCarteVi2) != 4 || strlen($numCarteVi3) != 4 || strlen($numCarteVi4) != 4)
	{
		$msgNumCarte="Veuillez saisir un numéro de carte valide\n<br><br>";
		$Envoi = 0;
	}
	else 
	{ $temp="$numCarteVi1$numCarteVi2$numCarteVi3$numCarteVi4";
		if (ereg ("([0-9]{16})", $temp)) // On vérifie qu'ils s'agit bien de nombres
		{// Si tout est ok, on valide
		$infoCarte .="Numéro de C : $temp\n";
		
		} 
		else 
		{
		$msgNumCarte="Veuillez saisir un numéro de carte valide\n<br><br>";
		$Envoi = 0;
		}
	}
}

//Vérification du crypto ou code de sécurité
if ($selecCarte=="American")
{
	if (strlen($crypto) != 4)
	{
	$msgCrypto="Veuillez saisir un numéro de cryptogramme valide\n<br><br>";
	$Envoi = 0;
	}
	else 
	{
		if (ereg ("([0-9]{4})", $crypto))
		{$infoCarte .="Numéro de crypto : $crypto\n";}
		else 
		{
		$msgCrypto="Veuillez saisir un numéro de cryptogramme valide\n<br><br>";
		$Envoi = 0;
		}
	}
}
else
{
	if (strlen($crypto) != 3)
	{
	$msgCrypto="Veuillez saisir un numéro de cryptogramme valide\n<br><br>";
	$Envoi = 0;
	}
	else 
	{
		if (ereg ("([0-9]{3})", $crypto))
		{$infoCarte .="Numéro de crypto : $crypto\n";}
		else 
		{
		$msgCrypto="Veuillez saisir un numéro de cryptogramme valide\n<br><br>";
		$Envoi = 0;
		}
	}
}

// Vérification que la case des conditions a été cochée
if ($chek == ""){
$msgCheck="Veuillez accepter les conditions générales";
$Envoi = 0;
}



$MailBody .="Commentaire : $comment\n\n";


// Détail de la réservation
$MailBody .="Tarif Total : $tarifTotal euros\n";
$MailBody.="Date d'arrivée : $da1 | Nombre d'adultes : $nbAdulte \n";
$MailBody.="Date de départ : $da2 | Nombre d'enfants : $nbEnfant ";

$tar1=0;$tar2=0;$tar3=0;$tar4=0;$tar5=0; //Tarif par chambre

//Résumé de la chambre 1
$MailBody .="\n\n'-----------------------------------------------------'\n" ;
$MailBody .="Chambre n°1 : Adulte $Adulte[0] | Enfant $Enfant[0]\n";
for ($i=0;$i<$p1;$i++){$MailBody.="$cha1[$i]|"; }
$MailBody .="\n";
for ($i=0;$i<$p1;$i++){$MailBody.="$pri1[$i]|";$tar1+=$pri1[$i];}
$MailBody .= "\nTarif Chambre 1 : $tar1 euros";

//Résumé de la chambre 2
if ($chambre>=2)
{
$MailBody .="\n\n'-----------------------------------------------------'\n" ;
$MailBody .="Chambre n°2 : Adulte $Adulte[1] | Enfant $Enfant[1]\n";
for ($i=0;$i<$p2;$i++){$MailBody.="$cha2[$i]|"; }
$MailBody .="\n";
for ($i=0;$i<$p2;$i++){$MailBody.="$pri2[$i]|";$tar2+=$pri2[$i];}
$MailBody .= "\nTarif Chambre 2 : $tar2 euros";
}

//Résumé de la chambre 3
if ($chambre>=3)
{
$MailBody .="\n\n'-----------------------------------------------------'\n" ;
$MailBody .="Chambre n°3 : Adulte $Adulte[2] | Enfant $Enfant[2]\n";
for ($i=0;$i<$p3;$i++){ $MailBody.="$cha3[$i]|"; }
$MailBody .="\n";
for ($i=0;$i<$p3;$i++){$MailBody.="$pri3[$i]|";$tar3+=$pri3[$i];}
$MailBody .= "\nTarif Chambre 3 : $tar3 euros";
}

//Résumé de la chambre 4
if ($chambre>=4)
{
$MailBody .="\n\n'-----------------------------------------------------'\n" ;
$MailBody .="Chambre n°4 : Adulte $Adulte[3] | Enfant $Enfant[3]\n";
for ($i=0;$i<$p4;$i++){$MailBody.="$cha4[$i]|"; }
$MailBody .="\n";
for ($i=0;$i<$p4;$i++){$MailBody.="$pri4[$i]|";$tar4+=$pri4[$i];}
$MailBody .= "\nTarif Chambre 4 : $tar4 euros";
}

//Résumé de la chambre 5
if ($chambre>=5)
{
$MailBody .="\n\n'-----------------------------------------------------'\n" ;
$MailBody .="Chambre n°5 : Adulte $Adulte[4] | Enfant $Enfant[4]\n";
for ($i=0;$i<$p5;$i++){$MailBody.="$cha5[$i]|"; }
$MailBody .="\n";
for ($i=0;$i<$p5;$i++){$MailBody.="$pri5[$i]|";$tar5+=$pri5[$i];}
$MailBody .= "\nTarif Chambre 5 : $tar5 euros";
}
$MailBody .="\n'-----------------------------------------------------'\n" ;


//Résumé pour le client
$MailClient .= "Attention, en cas d'arrivée tardive, au delà de 23H00 (11. pm), vous devez téléphoner au préalable au 04 67 52 43 33.\n\nNous vous remerçions d'avoir choisi l'Hôtel du Parc Euromédecine de Monptellier-Grabels. \n \n 
Vos dates de réservation sont du $da1 au $da2 pour un total de $nbAdulte Adulte(s) et $nbEnfant Enfant(s). \n 
A très bientôt \n
Hotel du Parc Euromédecine de Montpellier-Grabels" ;


if ($Envoi == 1) 
{ 
//On va ici attribué un numéro de dossier et stocké le tout dans la base de données.
$requeto="INSERT INTO Reservation ( `numResa` , `nomResa` , `contResa`  ) VALUES ('', '$nom $prenom' , '$infoCarte' )";
//$res=mysqli_query($db, $requeto) or die ("une erreur est survenue") ; 

// On va récupérer le numéro de dossier pour la suite (page suivante)
$requete="SELECT * FROM eur_Reservation ORDER BY numResa" ;
$resultat=mysqli_query($db, $requete) or die ("erreur");

	while ($ligne = mysqli_fetch_object ($resultat))
	{
		$numDossier=$ligne->numResa;
	}
//On stocke le numéro de dossier pour le client et l'hôtel
$tempBody="numéro de dossier : $numDossier\n" ;
$tempBody.="$MailBody";	

$infoCarte.="\n\n$tempBody";

$tempClient="numéro de dossier : $numDossier\n" ;
$tempClient.="$MailClient\n\n";
$tempClient.="Pour lire nos conditions générales de ventes, veuillez cliquer sur le lien suivant:\n ".$siteUrl . $europellier."/Montpellier_Hotel/conditions.php"; 	


//mail(ProtectEmail($FaxTo), "RESERVATION de $nom $prenom - dossier $numDossier", $tempBody, $MailHeader); // envoi sur le mail qui gère la réception des impressions (ssans numéro de carte bleue)
//mail(ProtectEmail($MailTo), "RESERVATION de $nom $prenom - dossier $numDossier", $infoCarte, $MailHeader); // Envoi des infos de la carte sur un serveur mail sécurisé
//mail(ProtectEmail($MailTo), "RESERVATION de $nom $prenom - dossier $numDossier (client)", $tempClient, $MailHeader); // Envoi d'une copie du mail envoyé au client.
//mail($MailCc, $MailSubject, $tempClient, $MailHeader); //envoi du communiqué de confirmation au client 

	//On va maintenant décrémenter le nombre de chambres Disponibles	
	$nbDisponible=array();
	$dateDisponible=array();
	$Date=array();
	$h1=explode("/",$da1);
	
	// On va récupérer les Disponibilités, et les comparer à ceux réservés.
	for ($i=0;$i<$nombre;$i++)
	{
	$Date[$i]=date("Y-m-d", mktime(0, 0, 0, $h1[1],$h1[0]+$i, $h1[2]));
	$reqDisponible="select * FROM eur_Dispo ORDER BY dateDispo";
	$resDisponible=mysqli_query($db, $reqDisponible);

		// On stocke les Disponibilités jour par jour dans des variables 
		while ($ligne = mysqli_fetch_object ($resDisponible))
		{
		if ($Date[$i]==$ligne->dateDispo)
			{
			$dateDisponible[$i]=$ligne->dateDispo;
			$nbDisponible[$i]=($ligne->nbDispo)-$chambre;
			}
		} 
		
	// on retire les Disponibilités des chambres
	//--block--$requet="UPDATE eur_Dispo Set nbDispo='$nbDisponible[$i]' WHERE dateDispo='$dateDisponible[$i]'";
	$result=mysqli_query($db, $requet);	
	}

//On redirige les informations sur la pages suivantes?>
 <script type="text/javascript">window.location.href = "<? echo "$siteUrl . $europellier"; ?>/Montpellier_Hotel/confirm.php?numDossier=<? echo "$numDossier"; ?>" </script><?

}

}

	
?>



		<table cellpadding="0" cellspacing="O" width="470">
			<tr>
				<td width="26"></td>
				<td class="general" align="center" colspan="3"><span class='verif' style="font-size:20px;"> <? if ($Envoi==0&&isset($_POST['envoyer'])) echo "Les Champs précédés d'un * sont obligatoires." ; ?> </span></td>
			</tr>
			<tr>
				<td height="10" colspan="4"></td>
			</tr>
			
			<tr>
				<td width="26"></td>
				<td class="general" colspan="3"><u>Veuillez remplir vos informations :</u></td>
			</tr>
			<tr>
				<td height="10" colspan="4"></td>
			</tr>
			<tr>	
				<td width="26"></td>
				<td class="general" width="99">* NOM :</td>
			 	<td width="120"><input type="text" name="nom" size="20"  value="<? echo "$nom"; ?>" ></td>
				<td class="verif" width="222"><? echo "$msgNom" ; ?></td>
			</tr>
			<tr>
				<td width="26"></td>
				<td class="general" width="99">* Prénom :</td>
			 	<td width="120"><input type="text"  name="prenom" size="20" value="<? {echo "$prenom";} ?>" ></td>
				<td class="verif" width="222"><? echo "$msgPrenom" ; ?></td>
			</tr>

			<tr>	
				<td width="26"></td>
				<td class="general" width="99">Adresse : </td>
				<td colspan="2"><input type="text" name="adresse" size="40"  value="<? echo "$adresse"; ?>" ></td>
			
			</tr>
			<tr>	
				<td width="26"></td>
				<td class="general" width="99">VILLE : </td>
				<td colspan="2"><input type="text" name="ville" size="40"  value="<? echo "$ville"; ?>" ></td>
			
			</tr>
			<tr>
				<td width="26"></td>
				<td class="general" width="99">* E-Mail :</td>
			 	 <td width="120"><input type="text" name="email" size="20" value="<? echo "$email"; ?>"></td>
				<td class="verif" width="222"><? echo "$msgMail" ; ?></td>
			</tr>
			<tr>
				<td width="26"></td>
				<td class="general" width="99">* Téléphone :</td>
			  	<td width="120"><input type="text" name="tel" size="20" value="<? echo "$tel"; ?>"></td>
				<td class="verif" width="222"><? echo "$msgTel" ; ?></td>
			</tr>
			<tr>
				<td width="26"></td>
				<td  class="general"width="99">Tél portable : </td>
			  <td width="120"><input type="text" name="tel2" size="20" value="<? echo "$tel2"; ?>"></td>
				<td width="222"></td>
			</tr>
			<tr>
				<td width="26"></td>
				<td class="general" width="99">Pays :</td>
				<td colspan="2">
				
				<select name="pays" size="1" >
<option value="<? echo $pays ;?>" SELECTED ><? echo $pays; ?>
<option value="AF">Afghanistan<option value="AL">Albania<option value="DZ">Algeria<option value="AS">American Samoa<option value="AD">Andorra<option value="AO">Angola<option value="AI">Anguilla<option value="AQ">Antarctica<option value="AG">Antigua And Barbuda<option value="AR">Argentina<option value="AM">Armenia<option value="AW">Aruba<option value="AU">Australia<option value="AT">Austria<option value="AZ">Azerbaijan<option value="BS">Bahamas
<option value="BH">Bahrain<option value="BD">Bangladesh<option value="BB">Barbados<option value="BY">Belarus<option value="BE">Belgium<option value="BZ">Belize<option value="BJ">Benin<option value="BM">Bermuda<option value="BT">Bhutan<option value="BO">Bolivia<option value="BA">Bosnia And Herzegovinia<option value="BW">Botswana<option value="BV">Bouvet Island<option value="BR">Brazil<option value="IO">British Indian Ocean Territory<option value="BN">Brunei Darussalam<option value="BG">Bulgaria
<option value="BF">Burkina Faso<option value="BI">Burundi<option value="KH">Cambodia<option value="CM">Cameroon<option value="CA">Canada<option value="CV">Cape Verde<option value="KY">Cayman Islands<option value="CF">Central African Republic<option value="TD">Chad<option value="CL">Chile<option value="CN">China<option value="CX">Christmas Island<option value="CC">Cocos (Keeling) Islands<option value="CO">Colombia<option value="KM">Comoros<option value="CG">Congo<option value="CD">Congo, DR Of The
<option value="CK">Cook Islands<option value="CR">Costa Rica<option value="CI">Cote D'ivoire<option value="HR">Croatia<option value="CU">Cuba<option value="CY">Cyprus<option value="CZ">Czech Republic<option value="DK">Denmark<option value="DJ">Djibouti<option value="DM">Dominica<option value="DO">Dominican Republic<option value="TP">East Timor<option value="EC">Ecuador<option value="EG">Egypt<option value="SV">El Salvador<option value="GQ">Equatorial Guinea<option value="ER">Eritrea
<option value="EE">Estonia<option value="ET">Ethiopia<option value="FK">Falkland Islands<option value="FO">Faroe Islands<option value="FJ">Fiji<option value="FI">Finland<option value="FR">France<option value="FX">France, Metropolitan<option value="GF">French Guiana<option value="PF">French Polynesia<option value="TF">French Southern Territories<option value="GA">Gabon<option value="GM">Gambia<option value="GE">Georgia<option value="DE">Germany<option value="GH">Ghana<option value="GI">Gibraltar
<option value="GR">Greece<option value="GL">Greenland<option value="GD">Grenada<option value="GP">Guadeloupe<option value="GU">Guam<option value="GT">Guatemala<option value="GN">Guinea<option value="GW">Guinea-Bissau<option value="GY">Guyana<option value="HT">Haiti<option value="HM">Heard And Mcdonald Islands<option value="HN">Honduras<option value="HK">Hong Kong<option value="HU">Hungary<option value="IS">Iceland<option value="IN">India<option value="ID">Indonesia
<option value="IR">Iran<option value="IQ">Iraq<option value="IE">Ireland<option value="IL">Israel<option value="IT">Italy<option value="JM">Jamaica<option value="JP">Japan<option value="JO">Jordan<option value="KZ">Kazakhstan<option value="KE">Kenya<option value="KI">Kiribati<option value="KP">Korea, DPR Of<option value="KR">Korea, Republic Of<option value="KW">Kuwait<option value="KG">Kyrgyzstan<option value="LA">Laos<option value="LV">Latvia
<option value="LB">Lebanon<option value="LS">Lesotho<option value="LR">Liberia<option value="LY">Libyan Arab Jamahiriya<option value="LI">Liechtenstein<option value="LT">Lithuania<option value="LU">Luxembourg<option value="MO">Macau<option value="MK">Macedonia, FYR Of<option value="MG">Madagascar<option value="MW">Malawi<option value="MY">Malaysia<option value="MV">Maldives<option value="ML">Mali<option value="MT">Malta<option value="MH">Marshall Islands<option value="MQ">Martinique
<option value="MR">Mauritania<option value="MU">Mauritius<option value="YT">Mayotte<option value="MX">Mexico<option value="FM">Micronesia, FS Of<option value="MD">Moldova, Republic Of<option value="MC">Monaco<option value="MN">Mongolia<option value="MS">Montserrat<option value="MA">Morocco<option value="MZ">Mozambique<option value="MM">Myanmar<option value="NA">Namibia<option value="NR">Nauru<option value="NP">Nepal<option value="NL">Netherlands<option value="AN">Netherlands Antilles<option value="NC">New Caledonia
<option value="NZ">New Zealand<option value="NI">Nicaragua<option value="NE">Niger<option value="NG">Nigeria<option value="NU">Niue<option value="NF">Norfolk Island<option value="MP">Northern Mariana Islands<option value="NO">Norway<option value="OM">Oman<option value="PK">Pakistan<option value="PW">Palau<option value="PA">Panama<option value="PG">Papua New Guinea<option value="PY">Paraguay<option value="PE">Peru<option value="PH">Philippines
<option value="PN">Pitcairn<option value="PL">Poland<option value="PT">Portugal<option value="PR">Puerto Rico<option value="QA">Qatar<option value="RE">Reunion<option value="RO">Romania<option value="RU">Russian Federation<option value="RW">Rwanda<option value="KN">Saint Kitts And Nevis<option value="LC">Saint Lucia<option value="WS">Samoa<option value="SM">San Marino<option value="ST">Sao Tome And Principe<option value="SA">Saudi Arabia<option value="SN">Senegal<option value="SC">Seychelles
<option value="SL">Sierra Leone<option value="SG">Singapore<option value="SK">Slovakia (Slovak Republic)<option value="SI">Slovenia<option value="SB">Solomon Islands<option value="SO">Somalia<option value="ZA">South Africa<option value="GS">South Georgia<option value="ES">Spain<option value="LK">Sri Lanka<option value="VC">St Vincent And The Grenadines<option value="SH">St. Helena<option value="PM">St. Pierre And Miquelon<option value="SD">Sudan<option value="SR">Suriname<option value="SJ">Svalbard And Jan Mayen Islands<option value="SZ">Swaziland
<option value="SE">Sweden<option value="CH">Switzerland<option value="SY">Syrian Arab Republic<option value="TW">Taiwan<option value="TJ">Tajikistan<option value="TZ">Tanzania<option value="TH">Thailand<option value="TG">Togo<option value="TK">Tokelau<option value="TO">Tonga<option value="TT">Trinidad And Tobago<option value="TN">Tunisia<option value="TR">Turkey<option value="TM">Turkmenistan<option value="TC">Turks And Caicos Islands<option value="TV">Tuvalu<option value="UM">US Minor Outlying Islands
<option value="UG">Uganda<option value="UA">Ukraine<option value="AE">United Arab Emirates<option value="GB">United Kingdom<option value="US">United States<option value="UY">Uruguay<option value="UZ">Uzbekistan<option value="VU">Vanuatu<option value="VA">Vatican City State<option value="VE">Venezuela<option value="VN">Viet Nam<option value="VG">Virgin Islands - British<option value="VI">Virgin Islands - U.S.<option value="WF">Wallis And Futuna Islands<option value="EH">Western Sahara<option value="YE">Yemen<option value="YU">Yugoslavia<option value="ZM">Zambia<option value="ZW">Zimbabwe
</select>
			  </td>
			</tr>
			<tr>
				<td width="26"></td>
				<td class="general" width="99">Commentaires<br /><span style="font-size:10px" >(Un lit double, lits <br />séparés, un animal, <br /> etc...) </span></td>
				<td colspan="2"><textarea rows="4" name="comment" cols="35" ><? echo "$comment"; ?></textarea></td>
			
			</tr>
			<tr>
				<td width="26" height="20"></td>
				<td width="99"></td>
				<td class="verif" colspan="2"><? echo "$message"; ?> </td>
			
			</tr>

			<tr>
				<td width="26"></td>
				<td align="center" colspan="3">
					<table width="400" cellpadding="0" cellspacing="0"  style="border:solid; border-width:1px; border-color:#990000" class="general">
						<tr>
							<td align="center">
							"""<u>Aucun</u> prélèvement ne sera effectué."""<br />Votre carte de paiement est demandée uniquement à titre de garantie pour la réservation.<br /><br />
							</td>
						</tr>
						<tr>
							<td height='40' align="center">
							* Nom figurant sur la carte :
							<input value="<? echo "$nomCarte" ;?>" type="text" name="nomCarte" size="27"><br />
							<span class='verif'><? echo "$msgNomCarte" ; ?></span>
							</td>
						</tr>
						<tr>
							<td height='40' align="center">
							* Type de carte bancaire :
							<select onchange="submit()" style='margin:0;padding:0;' name='selecCarte'>
							<option value="Visa" <? if ($selecCarte=="Visa") echo "SELECTED"; ?> >Visa</option>
							<option value="Master" <? if ($selecCarte=="Master") echo "SELECTED"; ?> >Eurocard/Mastercard</option>
							<option value="American" <? if ($selecCarte=="American") echo "SELECTED"; ?> >American Express</option>
							</select>
							<br />
							<span class='verif'><? echo "$msgSelecCarte" ; ?></span>
							</td>
						</tr>
						<tr>
							<td height='40'align="center">
							 * Date de validité :
							<select style='margin:0;padding:0;' name='selecValiditeMois'>
							<?
							 for($i=1;$i<=12;$i++)
							{
								if ($i<10) 
								{ 
								 if ("mois".$i==$selecValiditeMois) echo "<option value='mois$i' SELECTED>0$i</option>"; 
								 else echo "<option value='mois$i'>0$i</option>";
								}
								else 
								{
								  if ("mois".$i==$selecValiditeMois) echo "<option value='mois$i' SELECTED>$i</option>" ; 
								  else echo "<option value='mois$i'>$i</option>" ;
								}
							} 
							?>
							</select>
							<select style='margin:0;padding:0;' name='selecValiditeAn'>
							<? for($i=$AnneeAujourdhui;$i<=$AnneeAujourdhui+15;$i++)
							{
								if ("Annee".$i==$selecValiditeAn) echo "<option value='Annee$i' SELECTED>$i</option>"; 
								 else echo "<option value='Annee$i'>$i</option>"; 
							}
							?>
							</select><br />
							<span class='verif' ><? echo "$msgValiditeMois" ; ?></span>
							</td>
						</tr>
						<tr>
							<td height='40' align="center">
							* Numéro de carte :
							<? //On va changer le nombre de case selon que ce soit une émerican express ou non
							 if ($selecCarte=="American") 
							{ 
								echo "<input value=\"$numCarteAm1\" maxlength='4'  type='text' name='numCarteAm1' size='4'>" ;
								echo "<input value=\"$numCarteAm2\" maxlength='6'  type='text' name='numCarteAm2' size='6'>" ;
								echo "<input value=\"$numCarteAm3\" maxlength='5'  type='text' name='numCarteAm3' size='5'><br />" ;
							}
							else
							{
								echo "<input value=\"$numCarteVi1\" maxlength='4'  type='text' name='numCarteVi1' size='4'>" ;
								echo "<input value=\"$numCarteVi2\" maxlength='4'  type='text' name='numCarteVi2' size='4'>" ;
								echo "<input value=\"$numCarteVi3\" maxlength='4'  type='text' name='numCarteVi3' size='4'>" ;
								echo "<input value=\"$numCarteVi4\" maxlength='4'  type='text' name='numCarteVi4' size='4'><br />" ;
							
							}
							?>
							
							<span  class='verif' >	<? echo "$msgNumCarte" ; ?></span>
							</td>
						</tr>
						<tr>
							<td height='40' align="center">
							* Code de sécurité (cryptogramme) :
							<input value="<? echo "$crypto" ;?>" type="text" name="crypto" <? if ($selecCarte=="American") echo "maxlength='4'"; else echo "maxlength='3'";  ?>  size="5">&nbsp;<span style="font-size:11px"><a href="#" onclick="window.open('crypto.php', 'OpenWindow', 'resizable=no, scrollbars=yes, toolbar=no, status=no, width=500, height=500, top=200, left=300')">En savoir +</a></span>
							<span class='verif'><? echo "$msgCrypto" ; ?></span>
							</td>
						</tr>
						<tr>
							<td height='40' align="center">
							<input type="checkbox"  name="chek" value="yes" <? if ($chek=="yes") echo "checked='checked'" ; ?>/><span style="font-size:11px">J'accepte les conditions générales de réservations.<br />
							<div onclick="window.open('conditions.php', 'OpenWindow', 'resizable=no, scrollbars=yes, toolbar=no, status=no, width=500, height=500, top=200, left=300')"><a href="#">Lire les conditions</a></div></span>
							<span  class='verif' ><? echo "$msgCheck" ; ?></span>
							</td>
						</tr>

					</table>
			</tr>
			
			
			<tr>

				<td colspan="4" align="center">
				<br /><br />
				<input class="boutons" type='button' onclick="submit();javascript : retour2()" value="Retour"  name='retou' id='retou'>
				<input class="boutons" type='submit'  value="Envoyer" name="envoyer" >
				</td>
				
			</tr>
			<tr>
				<td height="10" colspan="4"></td>
			</tr>

		</table>

	</form>
						<script type="text/javascript">

						function retour2()
						{
						window.location.href = "<? echo "disponibilite.php?da1=$da1&da2=$da2&nombre=$nombre&chambre=$chambre&nombreAdulteCham=$nombreAdulteCham&nombreEnfantCham=$nombreEnfantCham&tarifTotal=$tarifTotal"; ?>";
						}
						</script>
</td></tr>
</table>
			</td>
		</tr>
<!-- Fin info du centre -->   		
	

<? //On affiche les cadres à droite
include($_SERVER['DOCUMENT_ROOT']  . $parentFold . $europellier . '/script/panneauDroite.php'); ?>




