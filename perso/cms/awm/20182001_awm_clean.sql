-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Hôte : junivecorcalex.mysql.db
-- Généré le :  sam. 20 jan. 2018 à 22:40
-- Version du serveur :  5.6.34-log
-- Version de PHP :  5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `junivecorcalex`
--

-- --------------------------------------------------------

--
-- Structure de la table `awm_int_config`
--

CREATE TABLE `awm_int_config` (
  `config_id` int(11) NOT NULL,
  `config_langage` varchar(255) NOT NULL DEFAULT ''
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `awm_int_config`
--

INSERT INTO `awm_int_config` (`config_id`, `config_langage`) VALUES
(1, 'francais.php');

-- --------------------------------------------------------

--
-- Structure de la table `awm_int_history`
--

CREATE TABLE `awm_int_history` (
  `his_id` int(11) NOT NULL,
  `user_name` varchar(255) NOT NULL DEFAULT '',
  `his_date` date NOT NULL,
  `his_hour` time NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `awm_int_history`
--

INSERT INTO `awm_int_history` (`his_id`, `user_name`, `his_date`, `his_hour`) VALUES
(1, 'alex', '2015-08-21', '00:37:12'),
(2, 'alex', '2015-08-21', '21:07:26'),
(3, 'test', '2015-08-31', '00:20:53'),
(4, 'test', '2015-08-31', '00:37:17'),
(5, 'admin', '2018-01-20', '22:24:17'),
(6, 'admin', '2018-01-20', '22:25:20');

-- --------------------------------------------------------

--
-- Structure de la table `awm_int_user`
--

CREATE TABLE `awm_int_user` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(255) NOT NULL DEFAULT '',
  `user_mdp` varchar(255) NOT NULL DEFAULT '',
  `user_nivel` int(11) NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `awm_int_user`
--

INSERT INTO `awm_int_user` (`user_id`, `user_name`, `user_mdp`, `user_nivel`) VALUES
(1, 'alex', '098f6bcd4621d373cade4e832627b4f6', 1),
(2, 'test', '098f6bcd4621d373cade4e832627b4f6', 1),
(3, 'admin', '1a1dc91c907325c69271ddf0c944bc72', 1);

-- --------------------------------------------------------

--
-- Structure de la table `awm_lang`
--

CREATE TABLE `awm_lang` (
  `lang_id` int(11) NOT NULL,
  `lang_order` int(11) NOT NULL DEFAULT '0',
  `lang_title` varchar(150) NOT NULL DEFAULT '',
  `lang_flag` varchar(250) DEFAULT ''
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `awm_lang`
--

INSERT INTO `awm_lang` (`lang_id`, `lang_order`, `lang_title`, `lang_flag`) VALUES
(1, 0, 'francais', 'flag_french.jpg'),
(2, 1, 'espagnol', 'flag_espagnol.jpg'),
(3, 2, 'anglais', 'flag_anglais.gif');

-- --------------------------------------------------------

--
-- Structure de la table `awm_menu`
--

CREATE TABLE `awm_menu` (
  `menu_id` int(11) NOT NULL,
  `menu_parent_id` int(11) NOT NULL,
  `menu_order` int(11) NOT NULL DEFAULT '0',
  `menu_title` varchar(255) NOT NULL DEFAULT ''
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `awm_menu`
--

INSERT INTO `awm_menu` (`menu_id`, `menu_parent_id`, `menu_order`, `menu_title`) VALUES
(1, 0, 0, 'menu A'),
(2, 1, 0, 'Menu A1'),
(3, 1, 1, 'manu A2'),
(4, 0, 1, 'menu B');

-- --------------------------------------------------------

--
-- Structure de la table `awm_menu_unic`
--

CREATE TABLE `awm_menu_unic` (
  `menu_unic_id` int(11) NOT NULL,
  `menu_id` int(11) NOT NULL DEFAULT '0',
  `lang_id` int(11) NOT NULL DEFAULT '0',
  `menu_unic_txt` text
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `awm_menu_unic`
--

INSERT INTO `awm_menu_unic` (`menu_unic_id`, `menu_id`, `lang_id`, `menu_unic_txt`) VALUES
(1, 1, 1, 'Le Menu A'),
(2, 2, 1, 'Le Menu A1'),
(3, 3, 1, 'Le Menu A2'),
(4, 4, 1, 'Le Menu B'),
(5, 1, 2, 'El Menu A'),
(6, 2, 2, 'El Menu A1'),
(7, 3, 2, 'El Menu A2'),
(8, 4, 2, 'el Menu B'),
(9, 1, 3, 'The Menu A'),
(10, 2, 3, 'The Menu A1'),
(11, 3, 3, 'The Menu A'),
(12, 4, 3, 'The Menu B');

-- --------------------------------------------------------

--
-- Structure de la table `awm_page_lang`
--

CREATE TABLE `awm_page_lang` (
  `page_lang_id` int(11) NOT NULL,
  `lang_id` int(11) NOT NULL DEFAULT '0',
  `page_lang_title` varchar(255) NOT NULL DEFAULT '',
  `page_lang_top_text` text,
  `page_lang_bop_text` text
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `awm_page_lang`
--

INSERT INTO `awm_page_lang` (`page_lang_id`, `lang_id`, `page_lang_title`, `page_lang_top_text`, `page_lang_bop_text`) VALUES
(1, 1, '', '', ''),
(2, 2, '', '', ''),
(3, 3, '', '', '');

-- --------------------------------------------------------

--
-- Structure de la table `awm_page_unic`
--

CREATE TABLE `awm_page_unic` (
  `page_unic_id` int(111) NOT NULL,
  `menu_unic_id` int(11) NOT NULL DEFAULT '0',
  `page_unic_title` varchar(255) NOT NULL DEFAULT '',
  `page_unic_body_text` text,
  `page_unic_key_text` text,
  `page_unic_description_text` text
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `awm_page_unic`
--

INSERT INTO `awm_page_unic` (`page_unic_id`, `menu_unic_id`, `page_unic_title`, `page_unic_body_text`, `page_unic_key_text`, `page_unic_description_text`) VALUES
(1, 1, '', '<p>Bienvenue,</p>', 'test clé', 'test description'),
(2, 2, '', '', '', ''),
(3, 3, '', '', '', ''),
(4, 4, '', '', '', ''),
(5, 5, '', '<p>Bienvenido</p>', '', ''),
(6, 6, '', '', '', ''),
(7, 7, '', '', '', ''),
(8, 8, '', '', '', ''),
(9, 9, '', '<p>Welcome</p>', '', ''),
(10, 10, '', '', '', ''),
(11, 11, '', '', '', ''),
(12, 12, '', '', '', '');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `awm_int_config`
--
ALTER TABLE `awm_int_config`
  ADD PRIMARY KEY (`config_id`);

--
-- Index pour la table `awm_int_history`
--
ALTER TABLE `awm_int_history`
  ADD PRIMARY KEY (`his_id`);

--
-- Index pour la table `awm_int_user`
--
ALTER TABLE `awm_int_user`
  ADD PRIMARY KEY (`user_id`);

--
-- Index pour la table `awm_lang`
--
ALTER TABLE `awm_lang`
  ADD PRIMARY KEY (`lang_id`);

--
-- Index pour la table `awm_menu`
--
ALTER TABLE `awm_menu`
  ADD PRIMARY KEY (`menu_id`);

--
-- Index pour la table `awm_menu_unic`
--
ALTER TABLE `awm_menu_unic`
  ADD PRIMARY KEY (`menu_unic_id`);

--
-- Index pour la table `awm_page_lang`
--
ALTER TABLE `awm_page_lang`
  ADD PRIMARY KEY (`page_lang_id`);

--
-- Index pour la table `awm_page_unic`
--
ALTER TABLE `awm_page_unic`
  ADD PRIMARY KEY (`page_unic_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `awm_int_config`
--
ALTER TABLE `awm_int_config`
  MODIFY `config_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `awm_int_history`
--
ALTER TABLE `awm_int_history`
  MODIFY `his_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT pour la table `awm_int_user`
--
ALTER TABLE `awm_int_user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `awm_lang`
--
ALTER TABLE `awm_lang`
  MODIFY `lang_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `awm_menu`
--
ALTER TABLE `awm_menu`
  MODIFY `menu_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT pour la table `awm_menu_unic`
--
ALTER TABLE `awm_menu_unic`
  MODIFY `menu_unic_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT pour la table `awm_page_lang`
--
ALTER TABLE `awm_page_lang`
  MODIFY `page_lang_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `awm_page_unic`
--
ALTER TABLE `awm_page_unic`
  MODIFY `page_unic_id` int(111) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
