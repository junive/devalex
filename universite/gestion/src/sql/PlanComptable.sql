-- MySQL dump 10.16  Distrib 10.1.26-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: db
-- ------------------------------------------------------
-- Server version	10.1.26-MariaDB-0+deb9u1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Plan`
--

DROP TABLE IF EXISTS `Plan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Plan` (
  `num1` mediumint(9) DEFAULT NULL,
  `ordre` tinyint(4) DEFAULT NULL,
  `compte` varchar(25) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Plan`
--

LOCK TABLES `Plan` WRITE;
/*!40000 ALTER TABLE `Plan` DISABLE KEYS */;
INSERT INTO `Plan` VALUES (211,6,'Terrains'),(215,8,'Install techniques'),(218,9,'Autres corporelles'),(238,10,'Avances & accomptes'),(261,11,'Titres de participations'),(274,12,'Prêts'),(281,13,'Amortissements corpo'),(31,14,'Matières premières'),(355,15,'Produits finis'),(37,16,'Stocks marchandises'),(401,17,'Founisseurs'),(404,18,'Fournisseurs d\'immo'),(4091,19,'Fournisseurs Av & acc'),(411,20,'Clients'),(4191,21,'Clients Av & acc'),(421,22,'Personnel rénum. Due'),(425,23,'Personnel Av & acc'),(431,24,'Sécurité social'),(437,25,'Autres orga sociaux'),(444,26,'Impôts'),(44551,27,'Tva à décaisser'),(44562,28,'Tvasur Immo'),(44566,29,'Tvasur bien et serv.'),(44567,30,'Crédit de Tva'),(44571,31,'Tva collectée'),(503,32,'Actions'),(512,33,'Banque'),(53,34,'Caisse'),(601,35,'Achats stockés MP'),(602,36,'Achats stockés Autres'),(603,37,'Variations de stocks'),(605,38,'Achats de matérie'),(606,39,'Achats non stockés'),(607,40,'Achats de marchandises'),(609,41,'Rab. Remises Rist. Achat'),(613,42,'Locations'),(615,43,'Entretiens et réparations'),(621,45,'Personnel extèrieur'),(622,46,'Rénum. d\'intermédiaires'),(623,47,'Publicité'),(624,48,'Transports'),(626,49,'Frais postaux'),(63,50,'Impôts taxes et versmts.'),(641,51,'Rénum. du personnel'),(661,53,'Intérêts et emprunts'),(665,54,'Escomptes accordés'),(671,55,'Charges exectionnelles'),(675,56,'Vcea'),(681,57,'Dotation aux amortissem.'),(701,58,'Ventes de produits finis'),(707,59,'Ventes de marchandises'),(708,60,'Pdt des activités annexes'),(709,61,'Rab. Rem. Rist. Accordés'),(713,62,'Variations des stocks'),(765,63,'Escomptes obtenus'),(775,64,'Pcea'),(645,52,'Charges de sécurité soc.'),(618,44,'Divers'),(101,1,'Capital'),(106,2,'Réserves'),(12,3,'Résultats'),(164,4,'Emprunts'),(205,5,'Logiciels'),(213,7,'Droit au bail');
/*!40000 ALTER TABLE `Plan` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-08-22 15:26:13
