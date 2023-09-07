-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: orcl
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `agents`
--

DROP TABLE IF EXISTS `agents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `agents` (
  `Agent_Code` varchar(10) NOT NULL,
  `Perm_No` varchar(255) DEFAULT NULL,
  `Perm_dt_st` date DEFAULT NULL,
  `Perm_dt_end` date DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `Telephone` varchar(255) DEFAULT NULL,
  `Address` varchar(255) DEFAULT NULL,
  `Agent_Name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Agent_Code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `agents`
--

LOCK TABLES `agents` WRITE;
/*!40000 ALTER TABLE `agents` DISABLE KEYS */;
/*!40000 ALTER TABLE `agents` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `countries`
--

DROP TABLE IF EXISTS `countries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `countries` (
  `Country_Code` varchar(10) NOT NULL,
  `Country_Name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Country_Code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `countries`
--

LOCK TABLES `countries` WRITE;
/*!40000 ALTER TABLE `countries` DISABLE KEYS */;
INSERT INTO `countries` VALUES ('AD','Andorra'),('AE','United Arab Emirates'),('AF','Afghanistan'),('AG','Antigua and Barbuda'),('AI','Anguilla'),('AL','Albania'),('AM','Armenia'),('AO','Angola'),('AQ','Antarctica'),('AR','Argentina'),('AS','American Samoa'),('AT','Austria'),('AU','Australia'),('AW','Aruba'),('AZ','Azerbaijan'),('BA','Bosnia and Herzegovina'),('BB','Barbados'),('BD','Bangladesh'),('BE','Belgium'),('BF','Burkina Faso'),('BG','Bulgaria'),('BH','Bahrain'),('BI','Burundi'),('BJ','Benin'),('BL','Saint Barthélemy'),('BM','Bermuda'),('BN','Brunei Darussalam'),('BO','Bolivia'),('BQ','Bonaire, Sint Eustatius and Saba'),('BR','Brazil'),('BS','Bahamas'),('BT','Bhutan'),('BV','Bouvet Island'),('BW','Botswana'),('BY','Belarus'),('BZ','Belize'),('CA','Canada'),('CC','Cocos (Keeling) Islands'),('CD','Congo, Democratic Republic of the'),('CF','Central African Republic'),('CG','Congo'),('CH','Switzerland'),('CI','Côte d\'Ivoire'),('CK','Cook Islands'),('CL','Chile'),('CM','Cameroon'),('CN','China'),('CO','Colombia'),('CR','Costa Rica'),('CU','Cuba'),('CV','Cabo Verde'),('CW','Curaçao'),('CX','Christmas Island'),('CY','Cyprus'),('CZ','Czech Republic'),('DE','Germany'),('DJ','Djibouti'),('DK','Denmark'),('DM','Dominica'),('DO','Dominican Republic'),('DZ','Algeria'),('EC','Ecuador'),('EE','Estonia'),('EG','Egypt'),('EH','Western Sahara'),('ER','Eritrea'),('ES','Spain'),('ET','Ethiopia'),('FI','Finland'),('FJ','Fiji'),('FK','Falkland Islands (Malvinas)'),('FM','Micronesia, Federated States of'),('FO','Faroe Islands'),('FR','France'),('GA','Gabon'),('GB','United Kingdom'),('GD','Grenada'),('GE','Georgia'),('GF','French Guiana'),('GG','Guernsey'),('GH','Ghana'),('GI','Gibraltar'),('GL','Greenland'),('GM','Gambia'),('GN','Guinea'),('GP','Guadeloupe'),('GQ','Equatorial Guinea'),('GR','Greece'),('GS','South Georgia and the South Sandwich Islands'),('GT','Guatemala'),('GU','Guam'),('GW','Guinea-Bissau'),('GY','Guyana'),('HK','Hong Kong'),('HM','Heard Island and McDonald Islands'),('HN','Honduras'),('HR','Croatia'),('HT','Haiti'),('HU','Hungary'),('ID','Indonesia'),('IE','Ireland'),('IL','Israel'),('IM','Isle of Man'),('IN','India'),('IO','British Indian Ocean Territory'),('IQ','Iraq'),('IR','Iran, Islamic Republic of'),('IS','Iceland'),('IT','Italy'),('JE','Jersey'),('JM','Jamaica'),('JO','Jordan'),('JP','Japan'),('KE','Kenya'),('KG','Kyrgyzstan'),('KH','Cambodia'),('KI','Kiribati'),('KM','Comoros'),('KN','Saint Kitts and Nevis'),('KP','Korea, Democratic People\'s Republic of'),('KR','Korea, Republic of'),('KW','Kuwait'),('KY','Cayman Islands'),('KZ','Kazakhstan'),('LA','Lao People\'s Democratic Republic'),('LB','Lebanon'),('LC','Saint Lucia'),('LI','Liechtenstein'),('LK','Sri Lanka'),('LR','Liberia'),('LS','Lesotho'),('LT','Lithuania'),('LU','Luxembourg'),('LV','Latvia'),('LY','Libya'),('MA','Morocco'),('MC','Monaco'),('MD','Moldova, Republic of'),('ME','Montenegro'),('MF','Saint Martin (French part)'),('MG','Madagascar'),('MH','Marshall Islands'),('MK','North Macedonia'),('ML','Mali'),('MM','Myanmar'),('MN','Mongolia'),('MO','Macao'),('MP','Northern Mariana Islands'),('MQ','Martinique'),('MR','Mauritania'),('MS','Montserrat'),('MT','Malta'),('MU','Mauritius'),('MV','Maldives'),('MW','Malawi'),('MX','Mexico'),('MY','Malaysia'),('MZ','Mozambique'),('nan','Namibia'),('NC','New Caledonia'),('NE','Niger'),('NF','Norfolk Island'),('NG','Nigeria'),('NI','Nicaragua'),('NL','Netherlands'),('NO','Norway'),('NP','Nepal'),('NR','Nauru'),('NU','Niue'),('NZ','New Zealand'),('OM','Oman'),('PA','Panama'),('PE','Peru'),('PF','French Polynesia'),('PG','Papua New Guinea'),('PH','Philippines'),('PK','Pakistan'),('PL','Poland'),('PM','Saint Pierre and Miquelon'),('PN','Pitcairn'),('PR','Puerto Rico'),('PS','Palestine, State of'),('PT','Portugal'),('PW','Palau'),('PY','Paraguay'),('QA','Qatar'),('RE','Réunion'),('RO','Romania'),('RS','Serbia'),('RU','Russian Federation'),('RW','Rwanda'),('SA','Saudi Arabia'),('SB','Solomon Islands'),('SC','Seychelles'),('SD','Sudan'),('SE','Sweden'),('SG','Singapore'),('SH','Saint Helena, Ascension and Tristan da Cunha'),('SI','Slovenia'),('SJ','Svalbard and Jan Mayen'),('SK','Slovakia'),('SL','Sierra Leone'),('SM','San Marino'),('SN','Senegal'),('SO','Somalia'),('SR','Suriname'),('SS','South Sudan'),('ST','Sao Tome and Principe'),('SV','El Salvador'),('SX','Sint Maarten (Dutch part)'),('SY','Syrian Arab Republic'),('SZ','Eswatini (formerly Swaziland)'),('TC','Turks and Caicos Islands'),('TD','Chad'),('TF','French Southern Territories'),('TG','Togo'),('TH','Thailand'),('TJ','Tajikistan'),('TK','Tokelau'),('TL','Timor-Leste'),('TM','Turkmenistan'),('TN','Tunisia'),('TO','Tonga'),('TR','Turkey'),('TT','Trinidad and Tobago'),('TV','Tuvalu'),('TW','Taiwan, Province of China'),('TZ','Tanzania, United Republic of'),('UA','Ukraine'),('UG','Uganda'),('UM','United States Minor Outlying Islands'),('US','United States'),('UY','Uruguay'),('UZ','Uzbekistan'),('VA','Holy See (Vatican City State)'),('VC','Saint Vincent and the Grenadines'),('VE','Venezuela, Bolivarian Republic of'),('VG','Virgin Islands, British'),('VI','Virgin Islands, U.S.'),('VN','Viet Nam'),('VU','Vanuatu'),('WF','Wallis and Futuna'),('WS','Samoa'),('YE','Yemen'),('YT','Mayotte'),('ZA','South Africa'),('ZM','Zambia'),('ZW','Zimbabwe');
/*!40000 ALTER TABLE `countries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `operations`
--

DROP TABLE IF EXISTS `operations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `operations` (
  `Operation_Code` varchar(255) NOT NULL,
  `Operation_nm` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Operation_Code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `operations`
--

LOCK TABLES `operations` WRITE;
/*!40000 ALTER TABLE `operations` DISABLE KEYS */;
/*!40000 ALTER TABLE `operations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ports`
--

DROP TABLE IF EXISTS `ports`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ports` (
  `Port_Code` varchar(10) NOT NULL,
  `Port_Name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Port_Code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ports`
--

LOCK TABLES `ports` WRITE;
/*!40000 ALTER TABLE `ports` DISABLE KEYS */;
/*!40000 ALTER TABLE `ports` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ship_arrival`
--

DROP TABLE IF EXISTS `ship_arrival`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ship_arrival` (
  `Voyage_No` varchar(255) NOT NULL,
  `Arrival_Date_Plan` date DEFAULT NULL,
  `Arrival_Date_Actual` datetime DEFAULT NULL,
  `Cargo_Arrival` varchar(255) DEFAULT NULL,
  `IMO` int DEFAULT NULL,
  `Port_from` varchar(10) DEFAULT NULL,
  `Berth_No` varchar(255) DEFAULT NULL,
  `Agent_Code` varchar(10) DEFAULT NULL,
  `Berthing_Date` date DEFAULT NULL,
  PRIMARY KEY (`Voyage_No`),
  KEY `IMO` (`IMO`),
  KEY `Port_from` (`Port_from`),
  KEY `Agent_Code` (`Agent_Code`),
  CONSTRAINT `ship_arrival_ibfk_1` FOREIGN KEY (`IMO`) REFERENCES `ship_description` (`IMO`),
  CONSTRAINT `ship_arrival_ibfk_2` FOREIGN KEY (`Port_from`) REFERENCES `ports` (`Port_Code`),
  CONSTRAINT `ship_arrival_ibfk_3` FOREIGN KEY (`Agent_Code`) REFERENCES `agents` (`Agent_Code`),
  CONSTRAINT `ship_arrival_ibfk_4` FOREIGN KEY (`Voyage_No`) REFERENCES `ship_departure` (`Voyage_No`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ship_arrival`
--

LOCK TABLES `ship_arrival` WRITE;
/*!40000 ALTER TABLE `ship_arrival` DISABLE KEYS */;
/*!40000 ALTER TABLE `ship_arrival` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ship_departure`
--

DROP TABLE IF EXISTS `ship_departure`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ship_departure` (
  `Voyage_No` varchar(255) NOT NULL,
  `Departure_Date_Plan` date DEFAULT NULL,
  `Departure_Date_Actual` datetime DEFAULT NULL,
  `Cargo_departure` varchar(255) DEFAULT NULL,
  `IMO` int DEFAULT NULL,
  `Port_to` varchar(45) DEFAULT NULL,
  `Maritime_Safety` varchar(255) DEFAULT NULL,
  `Police` varchar(255) DEFAULT NULL,
  `Customs` varchar(255) DEFAULT NULL,
  `Port_Authority` varchar(255) DEFAULT NULL,
  `Agent_Code` varchar(10) DEFAULT NULL,
  `Berth_No_Depth` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Voyage_No`),
  KEY `IMO` (`IMO`),
  KEY `Port_to` (`Port_to`),
  KEY `Agent_Code` (`Agent_Code`),
  CONSTRAINT `ship_departure_ibfk_1` FOREIGN KEY (`IMO`) REFERENCES `ship_description` (`IMO`),
  CONSTRAINT `ship_departure_ibfk_2` FOREIGN KEY (`Port_to`) REFERENCES `ports` (`Port_Code`),
  CONSTRAINT `ship_departure_ibfk_3` FOREIGN KEY (`Agent_Code`) REFERENCES `agents` (`Agent_Code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ship_departure`
--

LOCK TABLES `ship_departure` WRITE;
/*!40000 ALTER TABLE `ship_departure` DISABLE KEYS */;
/*!40000 ALTER TABLE `ship_departure` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ship_description`
--

DROP TABLE IF EXISTS `ship_description`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ship_description` (
  `IMO` int NOT NULL,
  `Call_sign` varchar(255) DEFAULT NULL,
  `Ship_Name` varchar(255) DEFAULT NULL,
  `Ship_Country_Code` varchar(10) DEFAULT NULL,
  `Ship_Type_Code` varchar(10) DEFAULT NULL,
  `Crew_No` int DEFAULT NULL,
  `Passar_No` int DEFAULT NULL,
  `Width` float DEFAULT NULL,
  `Length` float DEFAULT NULL,
  `Draft` float DEFAULT NULL,
  `Dead_Weight` float DEFAULT NULL,
  `Gross_Ton` float DEFAULT NULL,
  `Build_Date` date DEFAULT NULL,
  PRIMARY KEY (`IMO`),
  KEY `Ship_Country_Code` (`Ship_Country_Code`),
  KEY `Ship_Type_Code` (`Ship_Type_Code`),
  CONSTRAINT `ship_description_ibfk_1` FOREIGN KEY (`Ship_Country_Code`) REFERENCES `countries` (`Country_Code`),
  CONSTRAINT `ship_description_ibfk_2` FOREIGN KEY (`Ship_Type_Code`) REFERENCES `ship_types` (`Type_Code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ship_description`
--

LOCK TABLES `ship_description` WRITE;
/*!40000 ALTER TABLE `ship_description` DISABLE KEYS */;
/*!40000 ALTER TABLE `ship_description` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ship_types`
--

DROP TABLE IF EXISTS `ship_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ship_types` (
  `Type_Code` varchar(10) NOT NULL,
  `Ship_type_nm` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Type_Code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ship_types`
--

LOCK TABLES `ship_types` WRITE;
/*!40000 ALTER TABLE `ship_types` DISABLE KEYS */;
/*!40000 ALTER TABLE `ship_types` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-23 16:18:59
