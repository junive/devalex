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

<LINK rel="stylesheet" type="text/css" href="<? echo $siteUrl . $europellier; ?>/script/style.css" >
<title>Hotel Du Parc Euromedecine de Montpellier : Réservation</title>

</head>

<? 
$titre="Réservation";
$numMenu=10;
include( $_SERVER['DOCUMENT_ROOT']  . $parentFold . $europellier . "/english/scriptEng/panneauGaucheDessus.php");

$AnneeAujourdhui=date("Y");
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
if (($i/2)%$chambre==0) {$cha1[$p1]=$cha[$i] ; $pri1[$p1]=$cha[$temp];$p1++; }
if (($i/2)%$chambre==1) {$cha2[$p2]=$cha[$i] ; $pri2[$p2]=$cha[$temp];$p2++; }
if (($i/2)%$chambre==2) {$cha3[$p3]=$cha[$i] ; $pri3[$p3]=$cha[$temp];$p3++; }
if (($i/2)%$chambre==3) {$cha4[$p4]=$cha[$i] ; $pri4[$p4]=$cha[$temp];$p4++; }
if (($i/2)%$chambre==4) {$cha5[$p5]=$cha[$i] ; $pri5[$p5]=$cha[$temp];$p5++; }
}

$Adulte=explode("/",$nombreAdulteCham); //Nombre d'adulte
$Enfant=explode("/",$nombreEnfantCham); //Nombre d'enfant

// Fonction de contrôle du mail
function check_mail($email) {
if( (preg_match('/(@.*@)|(\.\.)|(@\.)|(\.@)|(^\.)/', $email)) ||
(preg_match('/^.+\@(\[?)[a-zA-Z0-9\-\.]+\.([a-zA-Z]{2,3}|[0-9]{1,3})(\]?)$/',$email)) ) {
$host = explode('@', $email);
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


$MailTo = "alexgorisse/yahoo*fr"; //adresse à laquelle sera envoyé le Contenu du formulaire
 // adresse à laquelle sera envoyé un communiqué
$MailSubject = "Confirmation de Réservation Hotel du Parc Euromédecine"; //texte qui va figurer dans le champ "sujet" du email
$MailHeader = "$email"; //adresse email qui va figurer dans le champ "expéditeur" du email


$Envoi = 1; //initialisation de la variable envoi à 1


if(isset($_POST['envoyer'])) // On évite d'obtenir les messages d'avertissements du début
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
$msgNom="Veuillez saisir votre nom de famille";
$Envoi = 0;
}
else {
$MailBody .= "Nom : $nom\n";
}

$MailBody .= "Adresse : $adresse \n";
$MailBody .= "Ville: $ville \n";

//Vérification de l'email
if ($email == ""){
$msgMail="Veuillez saisir une adresse E-Mail";
$Envoi = 0;
}
else {
if (check_mail($email)) {
$MailBody .= "E-mail : $email\n";
$MailCc = $email;
}
else {
$msgMail="Votre adresse Mail n'est pas valide";
$Envoi = 0;
}
}


//Vérification du téléphone
if ($tel == ""){
$msgTel="Veuillez saisir un n° de téléphone";
$Envoi = 0;
}
else {
$MailBody .="Téléphone : $tel\n";
}

$MailBody .="Téléphone portable : $tel2\n";
$MailBody .="Intial du Pays: $pays\n";

//Arret des infos pour les clients
$MailClient.="Tarif Total : $tarifTotal\n";
$MailClient.=$MailBody;
$MailClient.="Commentaires : $comment\n\n" ;


//Vérification du nom du possésseur de carte
if ($nomCarte == ""){
$msgNomCarte="Veuillez saisir un numéro de Carte";
$Envoi = 0;
}
else {
$MailBody .="Nom Carte : $nomCarte\n";
}

//Vérification de la date de validité
if ($selecCarte == ""){
$msgSelecCarte="Veuillez saisir un type de Carte";
$Envoi = 0;
}
else {
$MailBody .="Type Carte : $selecCarte\n";
}

if ($selecValiditeMois == ""){
$msgSelecValiditeMois="Veuillez sélectionner une date valide";
$Envoi = 0;
}
else {
$MailBody .="Date de Validité : $selecValiditeMois-$selecValiditeAn\n";
}

// Vérification du numéro de carte
if ($numCarte == ""){
$msgNumCarte="Veuillez  rentrer un numéro de carte\n";
$Envoi = 0;
}
else {
$MailBody .="Numéro de C : $numCarte\n";
}

// Vérification que la case a été cochée
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
$MailClient .= "Nous vous remerçions d'avoir choisi l'Hôtel du Parc Euromédecine de Monptellier. \n \n 
Vos dates de réservation sont du $da1 au $da2 pour un total de $nbAdulte Adultes et $nbEnfant Enfants. \n 
A très bientôt \n
Hotel du Parc Euromédecine de Montpellier" ;


if ($Envoi == 1) 
{ 

mail(ProtectEmail($MailTo), $MailSubject, $MailBody, $MailHeader); //envoi du message
mail($MailCc, $MailSubject, $MailClient, $MailHeader); //envoi du communiqué (enlever // pour le rendre opérationnel
	
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

?> <script type="text/javascript">window.location.href = "<? echo "$siteUrl . $europellier"; ?>/english/Montpellier_Hotel_Eng/confirm.php" </script><?

}

}

 
?>



		<table cellpadding="0" cellspacing="O" width="470">
			<tr>
				<td width="26"></td>
				<td class="general" align="center" colspan="3"><span class='verif' style="font-size:20px;"> <? if (Envoi==0&&isset($_POST['envoyer'])) echo "Les Champs précédés d'un * sont obligatoires." ; ?> </span></td>
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
				<td colspan="2"><textarea rows="4" name="comment" cols="40" ><? echo "$comment"; ?></textarea></td>
			
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
							"""<u>Aucun</u> Prélèvement ne vous sera effectuée."""<br />Votre carte de paiement est demandée uniquement à titre de garantie pour la réservation.<br /><br />
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
							* Type de Carte Banquaire :
							<select style='margin:0;padding:0;' name='selecCarte'>
							<option value="Visa" <? if ($selecCarte==Visa) echo "SELECTED"; ?> >Visa</option>
							<option value="Master" <? if ($selecCarte==Master) echo "SELECTED"; ?> >MasterCard</option>
							<option value="American" <? if ($selecCarte==American) echo "SELECTED"; ?> >American Express</option>
							</select>
							<br />
							<span class='verif'><? echo "$msgSelecCarte" ; ?></span>
							</td>
						</tr>
						<tr>
							<td height='40'align="center">
							 * Date de Validité :
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
							<span class='verif'><? echo "$msgValiditeMois" ; ?></span>
							</td>
						</tr>
						<tr>
							<td height='40' align="center">
							* Numéro de carte :
							<input value="<? echo "$numCarte" ;?>" type="text" name="numCarte" size="30"><br />
							<input type="checkbox"  name="chek" value="yes" <? if ($chek=="yes") echo "checked='checked'" ; ?>/><span style="font-size:11px">J'accepte les conditions générales de réservations.<br />

							<div onclick="window.open('conditions.php', 'OpenWindow', 'resizable=no, scrollbars=yes, toolbar=no, status=no, width=500, height=300, top=200, left=300')"><a href="#">Lire les conditions</a></div></span>
							<span class='verif'>	<? echo "$msgNumCarte" ; ?><br /><? echo "$msgCheck" ; ?></span>
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
						window.location.href = "<? echo "Disponibilite.php?da1=$da1&da2=$da2&nombre=$nombre&chambre=$chambre&nombreAdulteCham=$nombreAdulteCham&nombreEnfantCham=$nombreEnfantCham&tarifTotal=$tarifTotal"; ?>";
						}
						</script>
</td></tr>
</table>
			</td>
		</tr>
<!-- Fin info du centre -->   		
	

<? include( $_SERVER['DOCUMENT_ROOT']  . $parentFold . $europellier . '/english/scriptEng/panneauDroite.php'); ?>




