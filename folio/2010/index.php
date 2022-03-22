<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>
<html xmlns='http://www.w3.org/1999/xhtml' xml:lang='fr' lang='fr'>

<head>
<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
<meta name="robot" content="noindex, nofollow" />
<!-- 
<meta name="google-site-verification" content="Ar5VibZmpdjkTnqNG1izFKAJ6w49ERevaBOI9rnm3J4" /> 
<meta name="category" content="perso, crriculum" />
<meta name="distribution" content="global" />
<meta name="revisit-after" content="1 day" />
<meta name="description" lang="fr" content="Le site de présentation d'Alexandre Gorisse, son cv, son historique, ses projets..." />
<meta name="keywords" lang="fr" content="curriculum, vitae, curriclum vitae, informations, alex, alexandre, gorisse, alexandre gorisse, alex gorisse, informatique, web, profession, expérience, apllication web" />
-->

<title>Site d'Alexandre GORISSE</title>
<link rel='stylesheet' href='css/style.css' type='text/css' />
<script src="./../../setting.js" type="text/javascript"></script>
<script src="js/scriptaculous/prototype.js" type="text/javascript"></script>
<script src="js/scriptaculous/scriptaculous.js" type="text/javascript"></script>
<script src="js/effect.js" type="text/javascript"></script>


</head>

<body>

<?php 

include("../../setting.php");
function show_page_begin($id, $txt) {
	echo "<div id='". $id ."' class='corps_sec' style='display:none'>
            <div class='corps_title'>". $txt ."</div><ul>";
}
function show_page_end() {
	echo "</ul></div>";
}
function show_box($href, $src, $isLinked, $txt) {
	if ($src != "") { 
		echo "<li class='corps_box'>";
		if ($isLinked) echo "<a target='_blank' href='". $href ."'> ";
		echo "<img class='img_proj' src='". $src ."' alt='' />";
		if ($isLinked) echo "</a>";
		echo "<div class='corps_txt'>". $txt ;
		if ($isLinked) echo "<br/><a target='_blank' href='". $href ."'> Voir la démo </a>";
		echo "</div></li>";
	} else echo "<li>". $txt ."</li>";
}
function show_box_cv_begin($id) {
	echo "<div id='". $id ."'  style='display:none'>";
}
function show_box_cv_end() {
	echo "</div>";
}
function show_box_cv($src, $txt) {
	echo "<ul>";
	if ($src != "") echo "<li class='corps_box_cv'>
		<img class='img_cv' src='". $src ."' alt='' />
		<div class='corps_txt_cv'>". $txt ."</div></li>";
	else echo "<li>". $txt ."</li>";
	echo "</ul>";
}
?>

<div class="page">
    <div class="haut">
    	<div class="menus">
            <div class="menu_sec" id="menu_home" >Accueil</div>
            <div class="menu_sec" id="menu_cv" >Curriculum</div>
            <div class="menu_sec" id="menu_motiv" >Motivation</div>
            <div class="menu_title">Mes Projets :</div>
            <div class="menu_sec" id="menu_etude" >Etudes</div>
            <!--<div class="menu_sec" id="menu_stage" >Stages</div>-->
            <div class="menu_sec" id="menu_prof" >Professionnels</div>
            <!-- <div class="menu_sec" id="menu_volon" >Volontaires</div> -->
            <div class="menu_sec" id="menu_perso" >Personnels</div>
        </div>
    </div>
	<div style="margin-right:auto; margin-left:auto;">
     
        <div id="corps_cv" class="corps_sec" style="display:none">
            <div class="corps_title">
                 <div class="menu_sous" id="menu_cv_infos" >Infos</div>
                 <div class="menu_sous" id="menu_cv_xp" >Expérience</div>
                 <div class="menu_sous" id="menu_cv_comp" >Compétences</div>
                 <div class="menu_sous" id="menu_cv_etude" >Etudes</div>
                 <div class="menu_sous" id="menu_cv_gout" >Intérêts</div>
            </div>
            <?php
				show_box_cv_begin("corps_cv_infos");
					show_box_cv("", 
						"<br/><div><img src='images/moi.jpg'  
						class='img_identite'  alt='' />
						<br/><br/>GORISSE Alexandre<br/>
						<u><i>Adresse :</i></u> 6 Impasse de Sargis<br/>
						78470 Saint-Rémy-Lès-Chevreuse<br/>
						<u><i>Téléphone :</i></u> 06 95 96 46 48<br/>
						<u><i>E-mail :</i></u><a href='mailto:*****@yahoo.fr'>
						 ******@yahoo.fr</a><br/>
						<u><i>Date de naissance :</i></u> 27/04/1983 <br/>
						Célibataire / Permis B </div>");
				show_box_cv_end();
				show_box_cv_begin("corps_cv_etude");
					show_box_cv( "images/iut_montpellier.jpg", 
						"<br/><b>2007 :</b> Licence Professionnelle 
						« Systèmes Informatiques et Logiciels » option 
						«E-Business» à l’IUT de Montpellier II.
						<br/><b>2006 :</b> D.U.T. « Informatique » à l’IUT 
						de Montpellier  II en « Année Spéciale » ");
					show_box_cv( "images/iut_sceaux.jpg", 
						"<b>2004 :</b> D.U.T. « Techniques de Commercialisation » option 
						« Commerce International » à l’IUT de Sceaux (univ PARIS XI).");
					show_box_cv( "images/lycee_chevreuse.jpg", 
						"<b>2002 :</b> BAC Scientifique : Lycée de 
						la Vallée de Chevreuse à Gif-sur-Yvette.");
				show_box_cv_end();
				show_box_cv_begin("corps_cv_xp");
				/*	show_box_cv( "images/boulot.jpg", 
						"<b>1999/2002 :</b> Vendeur sur les marchés,  boulangerie 
						puis fruits et légumes : travail étudiant le Week-end 
						tous les samedis et dimanches matins
						<br/><b>2003 :</b> Serveur dans dans un restaurant à Majorque (Espagne) pour un stage d'été de 3 mois");*/
					show_box_cv( "images/gorriones.jpg", 
						"<b>2009/2010 : Volontaire informatique (bénévolat : 1 an) </b>
						<i>La casa hogar los gorriones à Ayacucho, au Pérou</i>
						<br/> Création d'un CMS permettant la création automatisé de page Web en php, 
						sur base client le soft open source tiny MCE, puis création de la 
						page Web de la casa hogar avec différents modules inspirés de 'dhteumeuleu.com' ;
						 aide personnalisée des achats informatiques et gestion réseau de la casa.
						");
					show_box_cv( "images/pleyo.gif", 
						"<b>2007/2008 : Analyste développeur Java Web (stage : 4 mois + travail : 1 an) </b>
						<i>Pleyo à Montpellier</i>
						<br/> Développement d’une librairie Java Drag & Drop pour le logiciel 
						Google Web Toolkit (stage) ; Création client et admin 
						d’un module du site d’Orange, la liveradio ; création de modules 
						pour l'interface de gestion du système Blyck, diffuseur de publicité. ");
					show_box_cv( "images/hotel.gif", 
						"<b>2006 : Webmaster (stage : 3 mois) </b>
						<i>L’Hôtel du Parc Euromédecine à Montpellier </i>
						<br/> Création d’un site Internet 
						avec système de réservation et interface en php de gestion 
						du contenu (CMS) pour gérer le site, sur une base MySQL");
					show_box_cv( "images/l3a.jpg", 
						"<b>2004/2005 : Commercial dans le diagnostique immobilier (travail : 6 mois) </b>
						<i>L'Agence de l'Analyse de l'Air (L3A) à Paris</i>
						<br/> Prospection des agences immobilières 
						pour proposer des services dans le domaine 
						des diagnostiques (amiante, plomb, thermites, …).
						<b>2004 : Chargé de clientèle export (stage : 3 mois) </b>
						<i>ATOFINA (filiale de Total) à la Défense, Paris </i>
						<br/>Remplacement de congé, saisies de commandes, stage sur le 
						commerce international en relation direct avec les intermédiaires portuaires et clients.");
				show_box_cv_end();
				show_box_cv_begin("corps_cv_comp");
					show_box_cv( "images/comp.jpg", 
						"<b>Compétences informatiques :</b>
						<br/><i>Confirmé :  :</i> PHP, Java, Javascript, Ajax, SQL, Html, CSS.
						<br/><i>Intermédiaire : </i> Uml, Xml, Servlet, flash, shell, SSL, jdbc.
						<br/><i>Débutant : </i> Pascal, Basic, J2ME, C, C++, asp, .Net.");
					show_box_cv( "images/langage.jpg", 
						"<b>Langues parlées</b>
						<br/><i>Français :</i> Langue maternelle
						<br/><i>Espagnol:</i> courant, écrit, et parlé (Très bon niveau depuis le séjour au Pérou)
						<br/><i>Anglais :</i> courant, écrit, et parlé (toutes séries / films vue en VO, 
						bonne communication avec les anglophones rencontrés)");
					show_box_cv( "images/outils.jpg", 
						"<b>Outils informatiques :</b>
						<br/>Google Web Toolkit, Oracle, MySql, Access, Photoshop CS4, 
						Flash CS4, Firebug, DreamWeaver CS4, Office XP-2007, Access, ...");
				show_box_cv_end();
				show_box_cv_begin("corps_cv_gout");
					show_box_cv( "images/sport.jpg", 
						"<b>Sports :</b>
						<br/> Aime le football (pratique et suivi des matchs entre amis).
						<br/>Pratique de la marche à pied et du vélo régulier");
					show_box_cv( "images/musique.jpg", 
						"<b>Musique :</b>
						<br/>Pratique de la guitare électrique depuis environ 5 ans.
						<br/>Fan de pop et rock en général et plus spécialement de la pop anglaise comme les groupes Muse ou Travis..");
					show_box_cv( "images/cine.jpg", 
						"<b>Films / Séries :</b>
						<br/>Aime le cinéma de Science Fiction et d'animations 3D.
						<br/>Aprécie les séries courtes style comédie");
				show_box_cv_end();
				/*show_box_cv("corps_cv_xp", "Mon expérience");
				show_box_cv("corps_cv_gout", "Mes Intérêts");*/
			?>
        </div>
       


            <?php 
				show_page_begin("corps_home", "Bienvenue :) sur le site d'Alexandre GORISSE.<br/>");
					show_box("", "", false, "
						<img src='images/logo.gif' alt='' style='clear:right' />
						<br/><br/>
						Vous y découvrez mes différents travaux, ainsi que mes différentes expériences dans le développement.
						<br/><br/>Pour me résumer, je suis quelqu'un d'ambitieux, aventureux, qui n'hésitera pas une seconde pour un projet
						d'avenir; je ne ne compte pas mes heures. <br/>Le voyage m'a permis de revenir avec une page blanche à écrire, 
						et de voir l'informatique autrement, avec une vision plus nette du monde de demain.
						<br/><br/>La section 'Mes projets' regroupe tous les différents projets effectués depuis 2004
						<br/><br/>La section 'Curriculum' présente mon historique dans le domaine, et mes différentes compétences.");
				show_page_end();
				show_page_begin("corps_motiv", "");
					show_box("", "", false, "<div>Date : 10 mai 2010
<br/> <br/>
Actuellement auto entrepreneur en freelance, je recherche un emploi dans le domaine informatique, plus précisément dans l’interfaçage et le développement d’applications Web.
<br/> <br/>
Pour débuter, l’informatique a toujours été pour moi une véritable passion, un plaisir ; je ne compte plus mes heures passées à développer et concevoir. Le bénévolat m’a permis de transmettre et partager cette passion, mais aussi renforcer mes domaines de compétences. Mon défaut, l’entêtement, me pousse à toujours donner le meilleur de soi lorsqu’une difficulté se présente. 
<br/> <br/>
D’autre part, mon expérience commerciale m’a donné un sérieux goût du contact et un certain sens de l’empathie, qui m’assurent une meilleure évaluation de l’attente du client, ainsi qu’une adaptation plus aisée dans n’importe quelles entreprises, chose importante lorsqu’il s’agit d’être prêt rapidement pour répondre aux attentes suscitées. 
<br/> <br/>
Ensuite, pourvu d’une grande expérience dans le domaine php, javascript et java, je suis tout aussi avide de découvrir de nouveaux langages et logiciels, qui me permettraient de renforcer ma spécialité ou d’élargir mes compétences actuelles. 
<br/> <br/>
Enfin, fort d’une grande motivation et désireux de m’installer définitivement en région parisienne, cette mission me permettra de poursuivre une carrière là où je m’épanouie et où les possibilités d’évolution sont immenses. Ce secteur représente l’avenir de l’informatique, et je souhaite vous aider à avancer sur votre ambition, partager la mienne, et, pourquoi pas voir au-delà.
</div>");
				show_page_end();
				show_page_begin("corps_etude", " Mes projets d'études");
					show_box($siteUrl . "/OsWeb/", "images/osWeb.jpg", true,
							 "<b>Un OS Web (2007)</b>
							 <br/><b>Langage :</b> javascript / ajax / php
							 <br/>Un Système d'exploitation Web (OS Web) en js/ajax");
					show_box($siteUrl .  "/Euromedecine/", "images/hotel.jpg", true,
							 "<b>Un site de réservation pour un hôtel (2006)</b>
							 <br/><b>Langage :</b> php/mysql 
							 <br/>Mon premier 'vrai' site web, avec gestion des réservations reçue par fax depuis le site, et un CMS complet 
							 (dispo des chambres, tarif, etc...) Le booking.com de 2006");
					show_box($siteUrl . "/etude", "images/compta.jpg", false, 
							 "<b>Comptable management Software (2006)</b>
							 <br/><b>Langage :</b> java /jdbc/ access
							 <br/>Un logiciel de gestion compta, qui établi
							 des bilans et résultats à partir de journaux");
					show_box($siteUrl . "/etude", "images/mastermind.jpg", false, 
							 "<b>Master Mind (2007)</b>
							 <br/><b>Langage :</b> java
							 <br/>Le Légendaire jeux mstermind écrit en java, avec différents niveau de difficultés
							 <br/><a href='".$siteUrl."/etude/mastermind.rar'> Télécharger (.exe inclut)</a>");
					show_box($siteUrl . "/etude", "images/minidraw.jpg", false, 
							 "<b>Mini draw Paint (2007)</b>
							 <br/><b>Langage :</b> java
							 <br/>Un logiciel qui permet de dessiner des figures et les éditer.
							 <br/><a href='".$siteUrl."/etude/minidraw.rar'> Télécharger (.exe inclut)</a>"); 
					show_box($siteUrl . "/etude/tc", "images/auxitec.jpg", true, 
							 "<b>Site de présentation commercial (2004)</b>
							 <br/><b>Logiciel :</b> NetObjectFusion
							 <br/>Premier pas dans l'informatique par un projet tutoré en fin d'étude de commerce");
				show_page_end();
				
				/*show_page_begin("corps_stage", " Mes projets de stages");

				show_page_end();*/
				
				show_page_begin("corps_prof", " Mes projets professionnels");
					show_box($siteUrl . "/pleyo/DragMoveDrop", "images/gwt.jpg", true, 
							 "<b>Patch Drag/Drop pour Google GWT (2007)</b>
							 <br/><b>Langage :</b> java
							 <br/>un patch qui permet de bouger les élements 
							 dans le logiciel créé par Google : Web Toolkit (non existant à l'époque)");	
					show_box($siteUrl . "/pleyo/Liveradio/demoSFWeb2", "images/live.jpg", true,
							 "<b>La Liveradio d'Orange (2008)</b>
							 <br/><b>Langage :</b> java
							 <br/>Création de l'interface graphique et controleurs pour la live radio d'orange");
					show_box($siteUrl . "/pleyo/Liveradio/LiveradioUS", "images/liveus.jpg", true,
							 "<b>La Liveradio d'Orange version USA (2008)</b>
							 <br/><b>Langage :</b> java
							 <br/>Même chose que pour la version fr, sauf qu'elle est adressé aux Etats Unis, interface remaniée");
					show_box($siteUrl . "/pleyo/Blyck/advance", "images/blyck1.jpg", true, 
							 "<b>Contenu de gestion de la Blyck(2008)</b>
							 <br/><b>Langage :</b> javascript / php
							 <br/>Tableau de gestion pour la Blyck, le diffuseur de publicité (supermarché)");
					show_box($siteUrl . "/pleyo/Blyck/admin/PlayListAdministration.html", "images/blyck2.jpg", true, 
							 "<b>Administrateur de la Blyck (2008)</b>
							 <br/><b>Langage :</b> javascript / php
							 <br/>Permet d'administrer les utilisateurs et le 
							 contenu de la diffusion de contenus");						 
					show_box($siteUrl . "/pleyo/Nokia8", "images/demo.jpg", true, 
							 "<b>Démonstration du N800 (2008)</b>
							 <br/><b>Langage :</b> javascript
							 <br/>Présentation de la démo pour le téléphone portable N800");
				show_page_end();
				//show_page_begin("corps_volon", " Mes projets de volontaires");

				//show_page_end();
				
				show_page_begin("corps_perso", " Mes projets personnels");
					show_box($siteUrl . "/cv/2006", "images/cv.jpg", true,
							 "<b>Un curriculum flash (2006)</b>
							 <br/><b>Langage :</b> flash
							 <br/>Mon premier (et seul) projet flash, 
							 qui est une première présentation de mon historique.");
					show_box($siteUrl . "/emulationpsx/v4/", "images/emulationpsx.jpg", true, 
							 "<b>Un site d'émulation playstation (2006)</b>
							 <br/><b>Langage :</b> php
							 <br/>Site qui présente les différents émulateurs Playstation, jamais aboutit, 
							 donc sections manquantes, mais resté en ligne avec 10000 visiteurs/mois jusqu'en 2010");
					show_box($siteUrl . "/autoweb/exemple", "images/awm.jpg", true,
							 "<b>Auto Web Master (2009)</b>
							 <br/><b>Langage :</b> php/mysql
							 <br/>Un Content Manager Software qui créé un site en 2 clics, 
							 avec gestion automatique de la bdd, des langues, ...
							<br/> Login : <i>'test'</i> et password : <i>'test'</i>");							
					show_box($siteUrl . "/autoweb/gorriones", "images/casa.jpg", true, 
							 "<b>La casa Hogar los Gorriones (2009)</b>
							 <br/><b>Langage :</b> php
							 <br/>Réalisé avec le CMS créé, aux goût et aux couleurs 
							 de l'association.");
					/*show_box("http://solucionesjuridicas.com.pe/", "images/juri.jpg", true, 
							 "<b>Le site de l'avocat de la casa</b>
							 <br/><b>Langage :</b> Auto Web Master
							 <br/>Réalisé avec le CMS créé, pas encore aboutit");				*/

				show_page_end();
			?>

     
	</div>
    <div class="bas"></div>
</div>


</body>
</html>
