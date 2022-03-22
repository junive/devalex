-- phpMyAdmin SQL Dump
-- version OVH
-- http://www.phpmyadmin.net
--
-- Serveur: sql7
-- Généré le : Mer 05 Novembre 2008 à 15:20
-- Modifier et épuré le sam 22 Aout 2015 à 1h40 (probleme TYPE/ENGINE mysql 4/5)
-- Version du serveur: 4.0.25
-- Version de PHP: 4.4.9


--
-- Base de données: `emulatio`
--

-- --------------------------------------------------------

--
-- Structure de la table `psx_compteur_visite`
--

CREATE TABLE IF NOT EXISTS `psx_compteur_visite` (
  `compteur` double NOT NULL default '0',
  `date` date NOT NULL default '0000-00-00',
  `time` int(9) NOT NULL default '0',
  `duree` int(9) NOT NULL default '0',
  `ip` varchar(50) NOT NULL default '',
  PRIMARY KEY  (`ip`),
  KEY `compteur` (`compteur`,`date`),
  KEY `ip` (`ip`),
  KEY `date` (`date`),
  KEY `duree` (`duree`),
  KEY `time` (`time`)
) ENGINE=MyISAM;

--
-- Contenu de la table `compteur_visite`
--

INSERT INTO `psx_compteur_visite` (`compteur`, `date`, `time`, `duree`, `ip`) VALUES
(164587, '2008-11-05', 100, 24, 'compteur'),
(0, '0000-00-00', 912, 912, '86.208.168.123'),
(0, '0000-00-00', 909, 909, '90.20.12.22'),
(0, '0000-00-00', 901, 901, '82.233.240.11'),
(0, '0000-00-00', 896, 896, '82.4.87.137'),
(0, '0000-00-00', 885, 885, '86.70.11.167'),
(0, '0000-00-00', 882, 882, '90.47.175.199'),
(0, '0000-00-00', 880, 880, '86.192.220.192'),
(0, '0000-00-00', 880, 880, '208.80.194.43'),
(0, '0000-00-00', 882, 879, '41.207.29.237'),
(0, '0000-00-00', 877, 877, '83.193.162.51'),
(0, '0000-00-00', 867, 867, '81.220.12.240'),
(0, '0000-00-00', 868, 858, '86.197.111.38'),
(0, '0000-00-00', 858, 851, '80.15.248.141'),
(0, '0000-00-00', 839, 839, '81.62.70.133'),
(0, '0000-00-00', 835, 835, '90.31.59.7'),
(0, '0000-00-00', 837, 835, '194.250.39.126'),
(0, '0000-00-00', 836, 835, '80.34.251.141'),
(0, '0000-00-00', 831, 831, '85.192.209.111'),
(0, '0000-00-00', 858, 825, 'unknown'),
(0, '0000-00-00', 822, 822, '86.66.228.237'),
(0, '0000-00-00', 820, 820, '91.163.120.54'),
(0, '0000-00-00', 817, 817, '82.224.242.159'),
(0, '0000-00-00', 814, 814, '90.37.203.247'),
(0, '0000-00-00', 821, 814, '90.51.140.88'),
(0, '0000-00-00', 830, 807, '86.215.60.222'),
(0, '0000-00-00', 804, 804, '84.100.79.107'),
(0, '0000-00-00', 803, 803, '86.208.77.166'),
(0, '0000-00-00', 804, 803, '88.121.84.45'),
(0, '0000-00-00', 803, 803, '82.99.30.36'),
(0, '0000-00-00', 797, 797, '86.212.184.76'),
(0, '0000-00-00', 795, 793, '81.53.103.206'),
(0, '0000-00-00', 793, 792, '90.0.90.155'),
(0, '0000-00-00', 789, 789, '86.70.148.161'),
(0, '0000-00-00', 783, 783, '82.238.110.60'),
(0, '0000-00-00', 783, 783, '86.72.16.148'),
(0, '0000-00-00', 775, 775, '81.49.33.73'),
(0, '0000-00-00', 767, 765, '79.94.98.243'),
(0, '0000-00-00', 759, 759, '90.20.177.250'),
(0, '0000-00-00', 760, 758, '10.14.49.73'),
(0, '0000-00-00', 757, 757, '90.43.49.129'),
(0, '0000-00-00', 748, 748, '193.253.190.241'),
(0, '0000-00-00', 747, 747, '86.193.170.106'),
(0, '0000-00-00', 742, 741, '90.17.170.61'),
(0, '0000-00-00', 733, 733, '83.156.48.63'),
(0, '0000-00-00', 730, 730, '86.217.170.147'),
(0, '0000-00-00', 714, 714, '79.87.10.129'),
(0, '0000-00-00', 712, 712, '82.122.41.253'),
(0, '0000-00-00', 711, 711, '79.94.198.205'),
(0, '0000-00-00', 710, 710, '90.2.68.107'),
(0, '0000-00-00', 700, 700, '195.132.125.62'),
(0, '0000-00-00', 700, 700, '90.14.33.113'),
(0, '0000-00-00', 695, 695, '91.164.4.31'),
(0, '0000-00-00', 693, 693, '41.209.167.76'),
(0, '0000-00-00', 698, 690, '82.243.119.133'),
(0, '0000-00-00', 679, 679, '90.9.68.111'),
(0, '0000-00-00', 672, 672, '200.117.181.131'),
(0, '0000-00-00', 667, 667, '194.250.40.35'),
(0, '0000-00-00', 663, 663, '83.193.7.16'),
(0, '0000-00-00', 653, 652, '90.39.192.154'),
(0, '0000-00-00', 636, 632, '213.135.232.14'),
(0, '0000-00-00', 631, 631, '90.39.196.233'),
(0, '0000-00-00', 630, 629, '86.219.106.243'),
(0, '0000-00-00', 624, 624, '82.224.105.119'),
(0, '0000-00-00', 621, 621, '79.85.219.177'),
(0, '0000-00-00', 621, 621, '86.194.33.104'),
(0, '0000-00-00', 633, 619, '83.152.152.148'),
(0, '0000-00-00', 619, 619, '194.140.247.220'),
(0, '0000-00-00', 617, 616, '82.241.220.134'),
(0, '0000-00-00', 610, 609, '159.84.68.159'),
(0, '0000-00-00', 600, 600, '88.140.239.171'),
(0, '0000-00-00', 599, 599, '86.68.172.163'),
(0, '0000-00-00', 599, 599, '41.221.26.6'),
(0, '0000-00-00', 595, 595, '83.192.83.249'),
(0, '0000-00-00', 579, 579, '82.66.17.39'),
(0, '0000-00-00', 571, 564, '79.80.61.78'),
(0, '0000-00-00', 556, 556, '89.82.242.225'),
(0, '0000-00-00', 530, 529, '83.204.233.83'),
(0, '0000-00-00', 514, 514, '212.198.122.19'),
(0, '0000-00-00', 486, 486, '82.241.18.83'),
(0, '0000-00-00', 474, 474, '200.66.32.27'),
(0, '0000-00-00', 473, 473, '201.165.187.133'),
(0, '0000-00-00', 452, 452, '41.201.231.2'),
(0, '0000-00-00', 399, 399, '82.237.40.186'),
(0, '0000-00-00', 394, 394, '88.175.144.136'),
(0, '0000-00-00', 363, 363, '88.178.132.79'),
(0, '0000-00-00', 352, 348, '82.67.196.170'),
(0, '0000-00-00', 288, 288, '82.233.72.6'),
(0, '0000-00-00', 219, 217, '90.43.14.191'),
(0, '0000-00-00', 217, 215, '65.92.213.207'),
(0, '0000-00-00', 215, 215, '66.36.134.219'),
(0, '0000-00-00', 183, 183, '66.36.132.62'),
(0, '0000-00-00', 154, 154, '66.36.141.150'),
(0, '0000-00-00', 152, 152, '66.36.129.41'),
(0, '0000-00-00', 148, 148, '85.171.45.133'),
(0, '0000-00-00', 140, 139, '92.133.238.181'),
(0, '0000-00-00', 138, 137, '89.225.189.125'),
(0, '0000-00-00', 120, 120, '70.53.230.25'),
(0, '0000-00-00', 118, 117, '82.247.184.139'),
(0, '0000-00-00', 115, 115, '83.114.60.95'),
(0, '0000-00-00', 114, 113, '88.174.220.98'),
(0, '0000-00-00', 83, 83, '84.98.155.121'),
(0, '0000-00-00', 78, 78, '90.14.246.243'),
(0, '0000-00-00', 74, 74, '79.94.183.207'),
(0, '0000-00-00', 64, 64, '83.198.83.71'),
(0, '0000-00-00', 44, 44, '41.190.224.201'),
(0, '0000-00-00', 20, 20, '77.195.188.52'),
(0, '0000-00-00', 21, 20, '81.247.44.231'),
(0, '0000-00-00', 73, 18, '86.66.143.152'),
(0, '0000-00-00', 11, 11, '77.196.17.99'),
(0, '0000-00-00', 10, 10, '86.206.58.114'),
(0, '0000-00-00', 1, 1, '86.194.171.198'),
(0, '0000-00-00', 0, 0, '90.39.67.162');

-- --------------------------------------------------------



--
-- Structure de la table `Index_texte`
--

CREATE TABLE IF NOT EXISTS `psx_Index_texte` (
  `nomb` int(40) NOT NULL auto_increment,
  `titre` varchar(255) NOT NULL default '',
  `texte` text NOT NULL,
  `date` varchar(20) NOT NULL default '',
  PRIMARY KEY  (`nomb`),
  KEY `date` (`date`),
  KEY `nomb` (`nomb`),
  KEY `titre` (`titre`)
) ENGINE=MyISAM AUTO_INCREMENT=13 ;

--
-- Contenu de la table `Index_texte`
--

INSERT INTO `psx_Index_texte` (`nomb`, `titre`, `texte`, `date`) VALUES
(1, 'EN CHANTIER !', '<br>\r\nVu que le site vient de réouvrir, il est encore en chantier et certaines rubriques ne sont pas encore ouvertes.\r\n<br>\r\nPatience donc...\r\n<br><br>', '(09/02/2006)'),
(2, 'Réouverture du site !', '<br>\r\nC''est désormais reparti après une très longue absence de ma part.\r\nLe site va bientôt fêter ses un an et je remercie les plus de 6000 \r\nvisiteurs qui sont déjà passés par là. Après un très gros manque de temps et de formation de ma part, j''ai décidé de reprendre le site de A à Z car l''ancienne version était trop lourde et avait plein de bugs d''affichage dûe aux logiciels à tout faire. C''est donc un site nouveau (point de vue script) que j''ai décidé de recommencer. J''éspère aussi pouvoir me remettre aux différentes rubriques, et compléter définitivement ce site.\r\n<br><br>\r\nSi il y a des gens motivés pour m''aider à remplir toutes les rubriques du site, \r\nqu''ils n''hésitent pas à me contacter ;) car le boulot est énorme :)\r\n<br><br>', '(09/02/2006)'),
(3, 'Pas de section PSP prévue dans l''immédiat...', '<br>\r\nEn pleine refonte du site, j''ai finalement décidé de ne pas intégrer de section PSP et ce, pour 2 raisons :\r\n<br>1/ Les émulateurs actuels ne permettent d''émuler que des démos.\r\n<br>2/ On ne profiterait pas à 100% des jeux de la PSP sur le PC, n''ayant qu''un très maigre intérêt d''amusement comparé à la PS1 et la Ps2 :D\r\n<br><br>\r\nLe site comportera donc la section PS1 a gauche et la section PS2 a droite, je prévoie aussi d''ajouter une section News, et une section partenaire pour m''aider à faire connaitre le site.\r\nAutre bonne nouvelle, il y aura (sans doute) une section "jeux" disponible...\r\n<br>\r\nEnfin, Pour en revenir à la PSP, je préfère entièrement me consacrer à La PS2 qui débarque en force avec déjà une trentaine de jeux compatibles comme Final Fantasy X.\r\n<br><br>\r\nVoila, je vous demanderais encore un peu de patience.\r\n<br><br>\r\nA Bientot :)\r\n<br><br>', '(14/02/2006)'),
(4, 'La mise à jour continue :)', '<br>\r\nLe forum a complètement été mis à jour aux dimensions et aux couleurs du site. Ajout aussi de la section News et \r\nsupression de la section lien au profit d''une section "partenaires".\r\n<br><br>\r\nJe vais désormais m''attaquer à la très grosse partie du site : son contenu. <br>\r\nIl y aura donc de nouveaux émulateurs PS1, une section compatibilité et encore plein d''autres surprises à venir...\r\nCela serait trop long de tout énumérer. \r\n<br><br>		', '(16/02/2006)'),
(5, 'Certaines rubriques ne sont pas encore ouvertes !', '<br>\r\nCertaines rubriques risquent de ne pas être accessibles, ni être au format du site... \r\nEn particulier les rubriques Playstation II, car comme je l''ai dis plus bas, la section Ps1 sera consacré en priorité ;)\r\nLa page index représentera\r\ndonc a peu près ce que comportera le site Final...\r\n<br><br>\r\nIl faudra encore un petit peu de temps avant que toutes les rubriques ne soient remplies. D''ici là, encore un peu de patience :)\r\n<br><br>				', '(15/03/2006)'),
(6, 'Modification en profondeur du site...', '<br>\r\nFinit les codes PHP tout près en copie coller et insérer dans un fichier texte.\r\nDésormais, le site est entièrement controlé depuis une base SQL, et d''autre part, j''ai du insérer une feuille CSS pour l''ensemble du site. \r\nVous pourrez aussi voir que les pages sont un peu en désordres et que chacune ne correspondent pas.\r\nJe commence en effet par la page index qui sera ma page de référence.\r\n<br><br>\r\nVoila, d''autres mises à jour sont encore à prévoir.\r\n<br><br>				', '(27/03/2006)'),
(7, 'Refonte entière du graphisme', '<br>\r\nLe site vient d''être entièrement refait graphiquement. \r\nTout (ou presque) a été changé, notamanent la banière qui me parait plus zolie et les boutons qui sont désormais dynamiques...\r\n<br><br>	\r\nJ''avance, J''avance lol, et bientôt le contenu, et la recherche de partenaires...(encore faut-il que j''en trouve :D\r\n<br><br>			', '(28/03/2006)'),
(8, 'Mise à jour globale du site :)', '<br>Continuant mes petites expérimentations sur ce site, qui n''en qu''à ses débuts, je viens de transformer le site à 99% géré par du PHP, SQL et CSS externe ; ce qui me permettra de faire des transformations sur un menu (par exemple) sur toute les pages du site, depuis du SQL. \r\n<br> Bref, j''optimise jour après jour mes connaissances et la base de données du site qui devra (sans doute) être un jour "la plus grosse" base de données de l''émulation playstation de France.\r\n <br><br>\r\nPour cela, il me faudra un contrôle total du site depuis un ou deux fichiers et non 40 000 a copie-coller...et comprenez que ca prend du temps.\r\n<br><br>', '(08/04/2006)'),
(9, 'Maintenance', '<br>Certaines rubriques rubriquent seront innaccessibles pour cause de maintenances et de mises à jour.\r\n<br><br>', '(11/04/2006)'),
(12, 'Recherche Webmaster', '<br>Bonjour,<br><br>\r\nEn vue du petit succès du site (10.000 visiteurs/mois), je recherche un webmaster bénévole afin de m''aider à remplir les différentes pages du site. Si vous êtes intéressé, merci de me contacter ici :<br><br><a href="mailto:lorem@yahoo.fr">lorem@yahoo.fr</a><br><br>Al<br><br>', '22/03/2007');

-- --------------------------------------------------------



-- --------------------------------------------------------

--
-- Structure de la table `Menus`
--



-- --------------------------------------------------------

--
-- Structure de la table `partenaire`
--

CREATE TABLE IF NOT EXISTS `psx_partenaire` (
  `nompart` varchar(50) NOT NULL default '',
  `urlpart` varchar(150) NOT NULL default '',
  PRIMARY KEY  (`nompart`),
  KEY `nompart` (`nompart`),
  KEY `urlpart` (`urlpart`)
) ENGINE=MyISAM;

--
-- Contenu de la table `partenaire`
--

INSERT INTO `psx_partenaire` (`nompart`, `urlpart`) VALUES
('monPartenaire.com', 'http://www.monPartenaire.com');

-- --------------------------------------------------------




--
-- Structure de la table `visiteurs`
--

CREATE TABLE IF NOT EXISTS `psx_visiteurs` (
  `numa` char(1) NOT NULL default '',
  `visite` int(20) NOT NULL default '0',
  `pages` int(20) NOT NULL default '0',
  PRIMARY KEY  (`visite`),
  KEY `numa` (`numa`),
  KEY `pages` (`pages`),
  KEY `visite` (`visite`)
) ENGINE=MyISAM;

--
-- Contenu de la table `visiteurs`
--

INSERT INTO `psx_visiteurs` (`numa`, `visite`, `pages`) VALUES
('1', 219704, 350648);

-- --------------------------------------------------------

--
-- Structure de la table `votes`
--

CREATE TABLE IF NOT EXISTS `psx_votes` (
  `num` int(5) NOT NULL default '0',
  `url` varchar(100) NOT NULL default '',
  `total` int(100) NOT NULL default '0',
  `moyenne` decimal(3,2) NOT NULL default '0.00',
  `votants` int(100) NOT NULL default '0',
  `clic` int(20) NOT NULL default '0',
  `nom` varchar(100) NOT NULL default '',
  `Taille` varchar(20) NOT NULL default '0.00',
  `down` varchar(50) NOT NULL default '',
  PRIMARY KEY  (`num`),
  KEY `Taille` (`Taille`),
  KEY `clic` (`clic`),
  KEY `down` (`down`),
  KEY `moyenne` (`moyenne`),
  KEY `nom` (`nom`),
  KEY `num` (`num`),
  KEY `total` (`total`),
  KEY `url` (`url`),
  KEY `votants` (`votants`)
) ENGINE=MyISAM;

--
-- Contenu de la table `votes`
--

INSERT INTO `psx_votes` (`num`, `url`, `total`, `moyenne`, `votants`, `clic`, `nom`, `Taille`, `down`) VALUES
(1, 'emulateurs_playstation/adripsx.htm', 3154, 3.75, 842, 22186, 'AdriPSX ILE v. 1,05', '1,10 Mo', '/ps1/emu/AdriPSX.ILE.Edition.1-0-5.zip'),
(2, 'emulateurs_playstation/espxe.htm', 9, 4.50, 2, 31751, 'ePSXe v. 1,60', '280 Ko', '/ps1/emu/epsxe160Windows.zip');
