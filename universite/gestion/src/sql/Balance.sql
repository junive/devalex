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
-- Table structure for table `BalanceIni1`
--

DROP TABLE IF EXISTS `BalanceIni1`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `BalanceIni1` (
  `NumC` mediumint(9) DEFAULT NULL,
  `NomC` varchar(25) DEFAULT NULL,
  `ordre` tinyint(4) DEFAULT NULL,
  `Debit` mediumint(9) DEFAULT NULL,
  `Credit` mediumint(9) DEFAULT NULL,
  `Date` varchar(19) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `BalanceIni1`
--

LOCK TABLES `BalanceIni1` WRITE;
/*!40000 ALTER TABLE `BalanceIni1` DISABLE KEYS */;
INSERT INTO `BalanceIni1` VALUES (101,'Capital',1,0,73250,'2006-04-30 00:00:00'),(106,'Réserves',2,0,20000,'2006-04-30 00:00:00'),(164,'Emprunts',4,0,60000,'2006-04-30 00:00:00'),(211,'Terrains',6,15000,0,'2006-04-30 00:00:00'),(215,'Install techniques',8,20000,0,'2006-04-30 00:00:00'),(37,'Stocks marchandises',16,56500,0,'2006-04-30 00:00:00'),(401,'Founisseurs',17,0,77600,'2006-04-30 00:00:00'),(411,'Clients',20,49260,0,'2006-04-30 00:00:00'),(44567,'Crédit de Tva',30,500,0,'2006-04-30 00:00:00'),(503,'Actions',32,58000,0,'2006-04-30 00:00:00'),(512,'Banque',33,20780,0,'2006-04-30 00:00:00'),(53,'Caisse',34,4220,0,'2006-04-30 00:00:00'),(606,'Achats non stockés',39,18200,0,'2006-04-30 00:00:00'),(607,'Achats de marchandises',40,300500,0,'2006-04-30 00:00:00'),(615,'Entretiens et réparations',43,8000,0,'2006-04-30 00:00:00'),(641,'Rénum. du personnel',51,185000,0,'2006-04-30 00:00:00'),(645,'Charges de sécurité soc.',52,74000,0,'2006-04-30 00:00:00'),(707,'Ventes de marchandises',59,0,576110,'2006-04-30 00:00:00'),(708,'Pdt des activités annexes',60,0,3000,'2006-04-30 00:00:00');
/*!40000 ALTER TABLE `BalanceIni1` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Journal`
--

DROP TABLE IF EXISTS `Journal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Journal` (
  `N°` smallint(6) DEFAULT NULL,
  `ordre` tinyint(4) DEFAULT NULL,
  `Index` varchar(15) DEFAULT NULL,
  `NomC` varchar(25) DEFAULT NULL,
  `NumC` mediumint(9) DEFAULT NULL,
  `Dat` varchar(19) DEFAULT NULL,
  `Libelle` varchar(7) DEFAULT NULL,
  `Credit` mediumint(9) DEFAULT NULL,
  `Debit` mediumint(9) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Journal`
--

LOCK TABLES `Journal` WRITE;
/*!40000 ALTER TABLE `Journal` DISABLE KEYS */;
INSERT INTO `Journal` VALUES (275,1,'Balance','Capital',101,'2006-04-30 00:00:00','',73250,0),(276,2,'Balance','Réserves',106,'2006-04-30 00:00:00','',20000,0),(277,4,'Balance','Emprunts',164,'2006-04-30 00:00:00','',60000,0),(278,6,'Balance','Terrains',211,'2006-04-30 00:00:00','',0,15000),(279,8,'Balance','Install techniques',215,'2006-04-30 00:00:00','',0,20000),(280,16,'Balance','Stocks marchandises',37,'2006-04-30 00:00:00','',0,56500),(281,17,'Balance','Founisseurs',401,'2006-04-30 00:00:00','',77600,0),(282,20,'Balance','Clients',411,'2006-04-30 00:00:00','',0,49260),(283,30,'Balance','Crédit de Tva',44567,'2006-04-30 00:00:00','',0,500),(284,32,'Balance','Actions',503,'2006-04-30 00:00:00','',0,58000),(285,33,'Balance','Banque',512,'2006-04-30 00:00:00','',0,20780),(286,34,'Balance','Caisse',53,'2006-04-30 00:00:00','',0,4220),(287,39,'Balance','Achats non stockés',606,'2006-04-30 00:00:00','',0,18200),(288,40,'Balance','Achats de marchandises',607,'2006-04-30 00:00:00','',0,300500),(289,43,'Balance','Entretiens et réparations',615,'2006-04-30 00:00:00','',0,8000),(290,51,'Balance','Rénum. du personnel',641,'2006-04-30 00:00:00','',0,185000),(291,52,'Balance','Charges de sécurité soc.',645,'2006-04-30 00:00:00','',0,74000),(293,59,'Balance','Ventes de marchandises',707,'2006-04-30 00:00:00','',576110,0),(294,60,'Balance','Pdt des activités annexes',708,'2006-04-30 00:00:00','',3000,0),(295,40,'Index / Facture','Achats de marchandises',607,'2006-05-02 00:00:00','Libelle',0,8000),(296,29,'Index / Facture','Tvasur bien et serv.',44566,'2006-05-02 00:00:00','Libelle',0,1568),(297,17,'Index / Facture','Founisseurs',401,'2006-05-02 00:00:00','Libelle',9568,0),(298,17,'Index / Facture','Founisseurs',401,'2006-05-20 00:00:00','Libelle',0,191),(299,40,'Index / Facture','Achats de marchandises',607,'2006-05-20 00:00:00','Libelle',160,0),(300,29,'Index / Facture','Tvasur bien et serv.',44566,'2006-05-20 00:00:00','Libelle',31,0),(304,20,'Index / Facture','Clients',411,'2006-05-10 00:00:00','Libelle',0,14352),(305,31,'Index / Facture','Tva collectée',44571,'2006-05-10 00:00:00','Libelle',2352,0),(306,59,'Index / Facture','Ventes de marchandises',707,'2006-05-10 00:00:00','Libelle',12000,0),(307,4,'Index / Facture','Emprunts',164,'2006-05-11 00:00:00','Libelle',0,16000),(308,53,'Index / Facture','Intérêts et emprunts',661,'2006-05-11 00:00:00','Libelle',0,2000),(309,33,'Index / Facture','Banque',512,'2006-05-11 00:00:00','Libelle',18000,0),(310,39,'Index / Facture','Achats non stockés',606,'2006-05-12 00:00:00','Libelle',0,200),(311,29,'Index / Facture','Tvasur bien et serv.',44566,'2006-05-12 00:00:00','Libelle',0,39),(312,34,'Index / Facture','Caisse',53,'2006-05-12 00:00:00','Libelle',239,0),(313,8,'Index / Facture','Install techniques',215,'2006-05-15 00:00:00','Libelle',0,4000),(314,28,'Index / Facture','Tvasur Immo',44562,'2006-05-15 00:00:00','Libelle',0,784),(315,33,'Index / Facture','Banque',512,'2006-05-15 00:00:00','Libelle',4784,0),(316,17,'Index / Facture','Founisseurs',401,'2006-05-25 00:00:00','Libelle',0,9375),(317,29,'Index / Facture','Tvasur bien et serv.',44566,'2006-05-25 00:00:00','Libelle',30,0),(318,63,'Index / Facture','Escomptes obtenus',765,'2006-05-25 00:00:00','Libelle',156,0),(319,33,'Index / Facture','Banque',512,'2006-05-25 00:00:00','Libelle',9189,0),(320,33,'Index / Facture','Banque',512,'2006-05-26 00:00:00','Libelle',0,1260),(321,20,'Index / Facture','Clients',411,'2006-05-26 00:00:00','Libelle',1260,0),(322,56,'Index / Facture','Vcea',675,'2006-05-27 00:00:00','Libelle',0,3000),(323,6,'Index / Facture','Terrains',211,'2006-05-27 00:00:00','Libelle',3000,0),(324,33,'Index / Facture','Banque',512,'2006-05-27 00:00:00','Libelle',0,5980),(325,64,'Index / Facture','Pcea',775,'2006-05-27 00:00:00','Libelle',5000,0),(326,31,'Index / Facture','Tva collectée',44571,'2006-05-27 00:00:00','Libelle',980,0),(327,39,'Index / Facture','Achats non stockés',606,'2006-05-29 00:00:00','Libelle',0,100),(328,29,'Index / Facture','Tvasur bien et serv.',44566,'2006-05-29 00:00:00','Libelle',0,19),(329,32,'Index / Facture','Actions',503,'2006-05-29 00:00:00','Libelle',119,0),(330,51,'Index / Facture','Rénum. du personnel',641,'2006-05-30 00:00:00','Libelle',0,7480),(331,52,'Index / Facture','Charges de sécurité soc.',645,'2006-05-30 00:00:00','Libelle',0,1960),(332,22,'Index / Facture','Personnel rénum. Due',421,'2006-05-30 00:00:00','Libelle',6000,0),(333,25,'Index / Facture','Autres orga sociaux',437,'2006-05-30 00:00:00','Libelle',3440,0),(334,31,'Index / Facture','Tva collectée',44571,'2006-05-31 00:00:00','Libelle',0,3332),(335,29,'Index / Facture','Tvasur bien et serv.',44566,'2006-05-31 00:00:00','Libelle',1565,0),(336,28,'Index / Facture','Tvasur Immo',44562,'2006-05-31 00:00:00','Libelle',784,0),(337,30,'Index / Facture','Crédit de Tva',44567,'2006-05-31 00:00:00','Libelle',500,0),(338,27,'Index / Facture','Tva à décaisser',44551,'2006-05-31 00:00:00','Libelle',483,0);
/*!40000 ALTER TABLE `Journal` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-08-22 15:26:14
