-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Nov 16, 2017 at 09:56 PM
-- Server version: 5.6.25-log
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `renta_car_unos`
--

-- --------------------------------------------------------

--
-- Table structure for table `automobil`
--

CREATE TABLE IF NOT EXISTS `automobil` (
  `ID_AUTOMOBIL` int(11) NOT NULL AUTO_INCREMENT,
  `ID_TARIFNA_KLASA` int(11) DEFAULT NULL,
  `ID_OSIGURANJE` int(11) DEFAULT NULL,
  `MARKA_AUTOMOBILA` varchar(20) DEFAULT NULL,
  `MODEL_AUTOMOBILA` varchar(20) DEFAULT NULL,
  `DATUM_KUPOVINE` date DEFAULT NULL,
  `CENA_AUTOMOBILA` int(11) DEFAULT NULL,
  `KILOMETRAZA` int(11) DEFAULT NULL,
  `GODINA_PROIZVODNJE` date DEFAULT NULL,
  `SNAGA_AUTOMOBILA` int(11) DEFAULT NULL,
  `URL_SLIKE` text NOT NULL,
  PRIMARY KEY (`ID_AUTOMOBIL`),
  KEY `FK_AUTOMOBIL_IMA_OSIGURANJE` (`ID_OSIGURANJE`),
  KEY `FK_AUTOMOBIL_PRIPADA_TARIFNOJ_KLASI` (`ID_TARIFNA_KLASA`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=10 ;

--
-- Dumping data for table `automobil`
--

INSERT INTO `automobil` (`ID_AUTOMOBIL`, `ID_TARIFNA_KLASA`, `ID_OSIGURANJE`, `MARKA_AUTOMOBILA`, `MODEL_AUTOMOBILA`, `DATUM_KUPOVINE`, `CENA_AUTOMOBILA`, `KILOMETRAZA`, `GODINA_PROIZVODNJE`, `SNAGA_AUTOMOBILA`, `URL_SLIKE`) VALUES
(1, 2, 1, 'BMW', '318i', '2013-07-27', 10000, 24000, '2012-01-01', 105, '../../../assets/img/0.jpg'),
(2, 1, 2, 'Volswagen', 'GolfVI 2017', '2000-01-01', 5000, 2000, '2000-01-01', 81, '../../../assets/img/1.jpg'),
(3, 3, 7, 'Citroen', 'C6', '2016-01-01', 20000, 45444, '2015-01-01', 155, '../../../assets/img/2.jpg'),
(4, 3, 7, 'Lexus', 'LS460', '2016-01-01', 100000, 110000, '2015-01-01', 280, '../../../assets/img/3.jpg'),
(5, 1, 2, 'Renault', 'Clio', '2015-01-01', 13050, 25000, '2014-01-01', 67, '../../../assets/img/4.jpg'),
(6, 1, 1, 'BMW', 'X6', '2014-12-05', 150000, 100000, '2012-11-05', 150, '../../../assets/img/5.jpg'),
(8, 1, 1, 'Citroen', 'C4', '2015-12-12', 15000, 200000, '2000-11-11', 45, '../../../assets/img/2.jpg'),
(9, 1, 1, '122323', '1212', '2017-01-01', 2121, 1221, '2017-01-01', 233, '../../../assets/img/1.jpg');

-- --------------------------------------------------------

--
-- Stand-in structure for view `automobil_koji_su_zauzeti`
--
CREATE TABLE IF NOT EXISTS `automobil_koji_su_zauzeti` (
`ID_REZERVACIJA` int(11)
,`ID_KLIJENTA` int(11)
,`ID_AUTOMOBIL` int(11)
,`MARKA_AUTOMOBILA` varchar(20)
,`MODEL_AUTOMOBILA` varchar(20)
,`DATUM_POCETKA` date
,`DATUM_ZAVRSETKA` date
);
-- --------------------------------------------------------

--
-- Table structure for table `cena`
--

CREATE TABLE IF NOT EXISTS `cena` (
  `ID_CENA` int(11) NOT NULL AUTO_INCREMENT,
  `ID_TARIFNA_KLASA` int(11) DEFAULT NULL,
  `ID_TRAJANJA` int(11) DEFAULT NULL,
  `CENA_PO_EXTRA_KM` double DEFAULT NULL,
  `OSNOVNA_CENA` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID_CENA`),
  KEY `FK_RELATIONSHIP_8` (`ID_TARIFNA_KLASA`),
  KEY `FK_RELATIONSHIP_9` (`ID_TRAJANJA`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `cena`
--

INSERT INTO `cena` (`ID_CENA`, `ID_TARIFNA_KLASA`, `ID_TRAJANJA`, `CENA_PO_EXTRA_KM`, `OSNOVNA_CENA`) VALUES
(1, 1, 1, 0.9, 25),
(2, 1, 2, 0.9, 160),
(3, 1, 3, 0.9, 45),
(4, 2, 1, 1.1, 35),
(5, 2, 2, 1.1, 230),
(6, 2, 3, 1.1, 65),
(7, 4, 1, 1.4, 45),
(8, 4, 2, 1.4, 300),
(9, 4, 3, 1.4, 85),
(10, 4, 3, 1.4, 85);

-- --------------------------------------------------------

--
-- Table structure for table `klijent`
--

CREATE TABLE IF NOT EXISTS `klijent` (
  `ID_KLIJENTA` int(11) NOT NULL AUTO_INCREMENT,
  `IME_KLIJENTA` varchar(128) DEFAULT NULL,
  `PREZIME_KLIJENTA` varchar(128) DEFAULT NULL,
  `ADRESA_KLIJENTA` varchar(128) DEFAULT NULL,
  `DATUM_RODJENJA` varchar(128) DEFAULT NULL,
  `TELEFON` varchar(128) DEFAULT NULL,
  `EMAIL` varchar(128) DEFAULT NULL,
  `USERNAME` varchar(128) DEFAULT NULL,
  `PASSWORD` varchar(128) DEFAULT NULL,
  `tip` varchar(10) NOT NULL,
  PRIMARY KEY (`ID_KLIJENTA`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=12 ;

--
-- Dumping data for table `klijent`
--

INSERT INTO `klijent` (`ID_KLIJENTA`, `IME_KLIJENTA`, `PREZIME_KLIJENTA`, `ADRESA_KLIJENTA`, `DATUM_RODJENJA`, `TELEFON`, `EMAIL`, `USERNAME`, `PASSWORD`, `tip`) VALUES
(3, 'Bojana', 'Tomasevic Drazic', 'Bulevar Zorana Djindjica 24', '1980-01-01', '0648389832', 'btomasevic@gmail.com', 'bokicat1', '123456', 'korisnik'),
(4, 'Milos', 'Drazic', 'Bulevar Zorana Djindjiva 24', '1978-06-06', '0659509006', 'milosdrazic@gmail.com', 'milosdrazic', '123456', 'admin'),
(6, 'Jelena ', 'Draskovic', 'Valjevo', '1984-01-01', '1234567', 'jelena@gmail.com', 'jelena', '123456', 'racun'),
(9, 'xxxxxxxxx', 'xxxx', 'xxxxxxxxxxxxx', 'xxxxxxxxxxx', 'xxxxx', 'xxxxxxxxxxx', 'bla', '123456', ''),
(10, 'asdsad', 'asdasd', 'asdasd', '2017-01-01', '5654654', 'sdfdsfsdffdsf', 'aaaa', 'aaaa', 'korisnik'),
(11, 'zex', 'ste', 'ljhljh', '2017-01-01', '5454654', '645654646', 'zeljko', 'zeljko', 'korisnik');

-- --------------------------------------------------------

--
-- Table structure for table `osiguranje`
--

CREATE TABLE IF NOT EXISTS `osiguranje` (
  `ID_OSIGURANJE` int(11) NOT NULL,
  `ID_OSIGURAVAJUCE_KUCE` int(11) DEFAULT NULL,
  `DATUM_OSIGURANJA` date DEFAULT NULL,
  `DATUM_ISTEKA` date DEFAULT NULL,
  `PREMIJA` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID_OSIGURANJE`),
  KEY `FK_AUTOMOBIL_JE_OSIGURAN` (`ID_OSIGURAVAJUCE_KUCE`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `osiguranje`
--

INSERT INTO `osiguranje` (`ID_OSIGURANJE`, `ID_OSIGURAVAJUCE_KUCE`, `DATUM_OSIGURANJA`, `DATUM_ISTEKA`, `PREMIJA`) VALUES
(1, 1, '2016-07-28', '2017-07-28', 5000),
(2, 2, '2016-08-28', '2017-07-28', 1000),
(3, 1, '2016-08-28', '2017-08-28', 6000),
(4, 1, '2016-09-29', '2017-09-29', 1000),
(5, 1, '2016-10-30', '2017-10-30', 1000),
(6, 1, '2016-11-01', '2017-11-01', 1000),
(7, 1, '2016-12-02', '2017-12-02', 8000);

-- --------------------------------------------------------

--
-- Table structure for table `osiguravajuca_kuca`
--

CREATE TABLE IF NOT EXISTS `osiguravajuca_kuca` (
  `ID_OSIGURAVAJUCE_KUCE` int(11) NOT NULL,
  `NAZIV_OSIGURAVAJUCE_KUCE` varchar(20) DEFAULT NULL,
  `KONTAKT_OSIGURAVAJUCE_KUCE` int(11) DEFAULT NULL,
  `ADRESA` varchar(20) DEFAULT NULL,
  `TIP_OSIGURANJA` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`ID_OSIGURAVAJUCE_KUCE`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `osiguravajuca_kuca`
--

INSERT INTO `osiguravajuca_kuca` (`ID_OSIGURAVAJUCE_KUCE`, `NAZIV_OSIGURAVAJUCE_KUCE`, `KONTAKT_OSIGURAVAJUCE_KUCE`, `ADRESA`, `TIP_OSIGURANJA`) VALUES
(1, 'Dunav osiguranje', 113472914, 'Ustanicka 128', 'kasko'),
(2, 'AMSS', 113331100, 'Ruzveltova 18', 'obicno');

-- --------------------------------------------------------

--
-- Table structure for table `popravka`
--

CREATE TABLE IF NOT EXISTS `popravka` (
  `ID_POPRAVKA` int(11) NOT NULL,
  `ID_AUTOMOBIL` int(11) DEFAULT NULL,
  `DATUM_DONOSENJA` date DEFAULT NULL,
  `DATUM_POVRATKA` date DEFAULT NULL,
  `CENA_POPRAVKE` int(11) DEFAULT NULL,
  `NAPOMENA` longtext,
  PRIMARY KEY (`ID_POPRAVKA`),
  KEY `FK_NA_POPRAVCI_MOZE_BITI_VISE_AUTOMOBILA` (`ID_AUTOMOBIL`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `popravka`
--

INSERT INTO `popravka` (`ID_POPRAVKA`, `ID_AUTOMOBIL`, `DATUM_DONOSENJA`, `DATUM_POVRATKA`, `CENA_POPRAVKE`, `NAPOMENA`) VALUES
(1, 5, '2017-01-01', '2017-01-05', 1000, 'Zamena auspuha');

-- --------------------------------------------------------

--
-- Table structure for table `rezervacija`
--

CREATE TABLE IF NOT EXISTS `rezervacija` (
  `ID_REZERVACIJA` int(11) NOT NULL AUTO_INCREMENT,
  `ID_AUTOMOBIL` int(11) DEFAULT NULL,
  `ID_KLIJENTA` int(11) DEFAULT NULL,
  `ID_TRAJANJA` int(11) DEFAULT NULL,
  `DATUM_REZARVACIJE` date DEFAULT NULL,
  `DATUM_POCETKA` date DEFAULT NULL,
  `DATUM_ZAVRSETKA` date DEFAULT NULL,
  `VALIDNA_REZERVACIJA` tinyint(1) DEFAULT NULL,
  `NACIN_REZERVISANJA` varchar(30) DEFAULT NULL,
  `PREDJENA_KILOMETRAZA` int(11) DEFAULT NULL,
  `CENA` float DEFAULT NULL,
  `STATUS` text NOT NULL,
  PRIMARY KEY (`ID_REZERVACIJA`),
  KEY `FK_RELATIONSHIP_5` (`ID_KLIJENTA`),
  KEY `FK_RELATIONSHIP_7` (`ID_AUTOMOBIL`),
  KEY `FK_REZERVACIJA_TIP_TRAJANJA` (`ID_TRAJANJA`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `rezervacija`
--

INSERT INTO `rezervacija` (`ID_REZERVACIJA`, `ID_AUTOMOBIL`, `ID_KLIJENTA`, `ID_TRAJANJA`, `DATUM_REZARVACIJE`, `DATUM_POCETKA`, `DATUM_ZAVRSETKA`, `VALIDNA_REZERVACIJA`, `NACIN_REZERVISANJA`, `PREDJENA_KILOMETRAZA`, `CENA`, `STATUS`) VALUES
(1, 1, NULL, 1, '2017-01-01', '2017-01-01', NULL, NULL, '', NULL, NULL, '8'),
(2, 1, NULL, 1, '2017-01-01', '2017-01-01', NULL, NULL, '', 222, 35, 'aA'),
(3, 1, NULL, 1, '2017-11-15', '2017-01-01', NULL, NULL, '', NULL, 35, '2'),
(4, 1, 10, 1, '2017-11-16', '2017-01-01', NULL, NULL, '', NULL, 35, 'a'),
(5, 1, 11, 1, '2017-11-16', '2017-01-01', '2017-02-02', 1, '', NULL, 35, 'A');

-- --------------------------------------------------------

--
-- Table structure for table `tarifna_klasa`
--

CREATE TABLE IF NOT EXISTS `tarifna_klasa` (
  `ID_TARIFNA_KLASA` int(11) NOT NULL,
  `NAZIV_TARIFNE_KLASE` text,
  PRIMARY KEY (`ID_TARIFNA_KLASA`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tarifna_klasa`
--

INSERT INTO `tarifna_klasa` (`ID_TARIFNA_KLASA`, `NAZIV_TARIFNE_KLASE`) VALUES
(1, 'Obicna'),
(2, 'Srednja'),
(3, 'Visoka');

-- --------------------------------------------------------

--
-- Table structure for table `tip_trajanja_rezervacije`
--

CREATE TABLE IF NOT EXISTS `tip_trajanja_rezervacije` (
  `ID_TRAJANJA` int(11) NOT NULL,
  `MIN_TAJANJE` int(11) DEFAULT NULL,
  `MAX_TRAJANJE` int(11) DEFAULT NULL,
  `NAZIV_TRAJANJA` text,
  `MAX_KILOMETRAZA` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID_TRAJANJA`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tip_trajanja_rezervacije`
--

INSERT INTO `tip_trajanja_rezervacije` (`ID_TRAJANJA`, `MIN_TAJANJE`, `MAX_TRAJANJE`, `NAZIV_TRAJANJA`, `MAX_KILOMETRAZA`) VALUES
(1, 1, 7, 'Dnevno', 600),
(2, 7, 30, 'Nedeljno', 1100),
(3, 30, 360, 'Vikend', 10000);

-- --------------------------------------------------------

--
-- Structure for view `automobil_koji_su_zauzeti`
--
DROP TABLE IF EXISTS `automobil_koji_su_zauzeti`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `automobil_koji_su_zauzeti` AS select `rezervacija`.`ID_REZERVACIJA` AS `ID_REZERVACIJA`,`rezervacija`.`ID_KLIJENTA` AS `ID_KLIJENTA`,`automobil`.`ID_AUTOMOBIL` AS `ID_AUTOMOBIL`,`automobil`.`MARKA_AUTOMOBILA` AS `MARKA_AUTOMOBILA`,`automobil`.`MODEL_AUTOMOBILA` AS `MODEL_AUTOMOBILA`,`rezervacija`.`DATUM_POCETKA` AS `DATUM_POCETKA`,`rezervacija`.`DATUM_ZAVRSETKA` AS `DATUM_ZAVRSETKA` from (`rezervacija` join `automobil`) where (curdate() between `rezervacija`.`DATUM_POCETKA` and `rezervacija`.`DATUM_ZAVRSETKA`) group by `rezervacija`.`ID_KLIJENTA`;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `automobil`
--
ALTER TABLE `automobil`
  ADD CONSTRAINT `FK_AUTOMOBIL_IMA_OSIGURANJE` FOREIGN KEY (`ID_OSIGURANJE`) REFERENCES `osiguranje` (`ID_OSIGURANJE`),
  ADD CONSTRAINT `FK_AUTOMOBIL_PRIPADA_TARIFNOJ_KLASI` FOREIGN KEY (`ID_TARIFNA_KLASA`) REFERENCES `tarifna_klasa` (`ID_TARIFNA_KLASA`);

--
-- Constraints for table `osiguranje`
--
ALTER TABLE `osiguranje`
  ADD CONSTRAINT `FK_AUTOMOBIL_JE_OSIGURAN` FOREIGN KEY (`ID_OSIGURAVAJUCE_KUCE`) REFERENCES `osiguravajuca_kuca` (`ID_OSIGURAVAJUCE_KUCE`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
