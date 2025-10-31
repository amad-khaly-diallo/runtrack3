-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Oct 31, 2025 at 10:37 AM
-- Server version: 8.0.40
-- PHP Version: 8.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `autocompletion`
--

-- --------------------------------------------------------

--
-- Table structure for table `celebres`
--

CREATE TABLE `celebres` (
  `id` int NOT NULL,
  `nom` varchar(100) NOT NULL,
  `date_naissance` date DEFAULT NULL,
  `date_deces` date DEFAULT NULL,
  `description` text,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `celebres`
--

INSERT INTO `celebres` (`id`, `nom`, `date_naissance`, `date_deces`, `description`, `image`) VALUES
(1, 'Napoléon Bonaparte', '1769-08-15', '1821-05-05', 'Empereur français, célèbre pour ses conquêtes en Europe et ses réformes administratives.', 'napoleon.jpg'),
(2, 'Albert Einstein', '1879-03-14', '1955-04-18', 'Physicien théoricien, célèbre pour la théorie de la relativité et ses contributions à la physique moderne.', 'einstein.jpg'),
(3, 'Cléopâtre VII', '2069-01-01', '2030-08-01', 'Dernière reine de l’Égypte antique, célèbre pour son intelligence et ses alliances politiques.', 'cleopatre.jpg'),
(4, 'Léonard de Vinci', '1452-04-15', '1519-05-02', 'Artiste et inventeur italien de la Renaissance, connu pour la Joconde et ses inventions.', 'leonard.jpg'),
(5, 'Mahatma Gandhi', '1869-10-02', '1948-01-30', 'Leader politique et spirituel indien, défenseur de la non-violence et de l’indépendance de l’Inde.', 'gandhi.jpg'),
(6, 'Martin Luther King Jr.', '1929-01-15', '1968-04-04', 'Leader du mouvement des droits civiques aux États-Unis, célèbre pour son discours \"I have a dream\".', 'mlk.jpg'),
(7, 'Jules César', '0100-07-12', '2044-03-15', 'Général et homme politique romain, conquérant de la Gaule et dictateur à Rome.', 'cesar.jpg'),
(8, 'Marie Curie', '1867-11-07', '1934-07-04', 'Physicienne et chimiste, pionnière de la radioactivité, prix Nobel en physique et chimie.', 'curie.jpg'),
(9, 'Wolfgang Amadeus Mozart', '1756-01-27', '1791-12-05', 'Compositeur autrichien, prodige musical, célèbre pour ses symphonies et opéras.', 'mozart.jpg'),
(10, 'Winston Churchill', '1874-11-30', '1965-01-24', 'Premier ministre britannique pendant la Seconde Guerre mondiale, célèbre pour ses discours inspirants.', 'churchill.jpg'),
(11, 'Abraham Lincoln', '1809-02-12', '1865-04-15', 'Président des États-Unis, connu pour l’abolition de l’esclavage et la guerre de Sécession.', 'lincoln.jpg'),
(12, 'Galilée', '1564-02-15', '1642-01-08', 'Astronome et physicien italien, père de la science moderne et défenseur de l’héliocentrisme.', 'galilee.jpg'),
(13, 'Socrate', '0470-01-01', '0399-01-01', 'Philosophe grec, père de la philosophie occidentale, connu pour la méthode socratique.', 'socrate.jpg'),
(14, 'Alexandre le Grand', '0356-07-20', '0323-06-10', 'Roi de Macédoine et conquérant, créa l’un des plus grands empires de l’histoire antique.', 'alexandre.jpg'),
(15, 'Charles de Gaulle', '1890-11-22', '1970-11-09', 'Général et homme politique français, fondateur de la Ve République.', 'gaulle.jpg'),
(16, 'Napoléon III', '1808-04-20', '1873-01-09', 'Neveu de Napoléon Bonaparte, empereur des Français de 1852 à 1870.', 'napoleon3.jpg'),
(17, 'Leon Trotsky', '1879-11-07', '1940-08-21', 'Révolutionnaire russe et théoricien marxiste, figure clé de la révolution d’Octobre.', 'trotsky.jpg'),
(18, 'Marie-Antoinette', '1755-11-02', '1793-10-16', 'Reine de France, symbole de la monarchie française avant la Révolution.', 'marie_antoinette.jpg'),
(19, 'Pythagore', '0570-01-01', '0495-01-01', 'Mathématicien et philosophe grec, célèbre pour le théorème de Pythagore.', 'pythagore.jpg'),
(20, 'Walt Disney', '1901-12-05', '1966-12-15', 'Créateur américain de personnages et de films d’animation célèbres, fondateur de Disney.', 'disney.jpg'),
(21, 'Jésus-Christ (PSL)', '0001-12-25', NULL, 'Figure centrale du christianisme, considéré comme le Fils de Dieu et prophète.', 'jesus.jpg'),
(22, 'Mahomet (PSL)', '0570-04-22', '0632-06-08', 'Prophète et fondateur de l’islam, considéré comme le dernier messager de Dieu.', NULL),
(23, 'Michael Jackson', '1958-08-29', '2009-06-25', 'Chanteur, danseur et compositeur américain, surnommé le \"Roi de la Pop\".', 'michael_jackson.jpg'),
(24, 'Leonardo DiCaprio', '1974-11-11', NULL, 'Acteur et producteur américain, célèbre pour ses rôles dans Titanic et The Revenant.', 'dicaprio.jpg'),
(25, 'Isaac Newton', '1643-01-04', '1727-03-31', 'Mathématicien et physicien anglais, connu pour la loi de la gravitation universelle.', 'newton.jpg'),
(26, 'Nelson Mandela', '1918-07-18', '2013-12-05', 'Leader politique sud-africain, symbole de la lutte contre l’apartheid et prix Nobel de la paix.', 'mandela.jpg'),
(27, 'Vincent van Gogh', '1853-03-30', '1890-07-29', 'Peintre post-impressionniste néerlandais, célèbre pour ses toiles comme La Nuit étoilée.', 'vangogh.jpg'),
(28, 'Frida Kahlo', '1907-07-06', '1954-07-13', 'Peintre mexicaine, célèbre pour ses autoportraits et son style unique.', 'frida.jpg'),
(29, 'William Shakespeare', '1564-04-23', '1616-04-23', 'Poète et dramaturge anglais, auteur de Roméo et Juliette, Hamlet et bien d’autres.', 'shakespeare.jpg'),
(30, 'Charles Darwin', '1809-02-12', '1882-04-19', 'Naturaliste anglais, célèbre pour la théorie de l’évolution par sélection naturelle.', 'darwin.jpg'),
(31, 'Marie Curie', '1867-11-07', '1934-07-04', 'Physicienne et chimiste, pionnière de la radioactivité, prix Nobel en physique et chimie.', 'curie2.jpg'),
(32, 'Amelia Earhart', '1897-07-24', '1937-07-02', 'Aviatrice américaine, première femme à traverser l’Atlantique en avion en solo.', 'earhart.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `celebres`
--
ALTER TABLE `celebres`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `celebres`
--
ALTER TABLE `celebres`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
