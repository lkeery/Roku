-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Apr 12, 2020 at 02:42 AM
-- Server version: 5.7.26
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_roku`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_arating`
--

CREATE TABLE `tbl_arating` (
  `arating_id` smallint(5) UNSIGNED NOT NULL,
  `arating_name` varchar(125) NOT NULL,
  `arating_desc` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

--
-- Dumping data for table `tbl_arating`
--

INSERT INTO `tbl_arating` (`arating_id`, `arating_name`, `arating_desc`) VALUES
(1, 'G', 'G – General Audiences\r\nAll ages admitted. Nothing that would offend parents for viewing by children. '),
(2, 'PG', 'PG – Parental Guidance Suggested\r\nSome material may not be suitable for children. Parents urged to give  	&ldquo;parental guidance&rdquo;. '),
(3, 'PG-13', 'PG-13 – Parents Strongly Cautioned\r\nSome material may be inappropriate for children under 13. Parents are urged to be cautious. Some material may be inappropriate for pre-teenagers.'),
(4, 'R', 'R – Restricted\r\nUnder 17 requires accompanying parent or adult guardian. Contains some adult material. Parents are urged to learn more about the film before taking their young children with them. '),
(5, 'NC-17', 'NC-17 – Adults Only\r\nNo One 17 and Under Admitted. Clearly adult. Children are not admitted. ');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_genre`
--

CREATE TABLE `tbl_genre` (
  `genre_id` tinyint(3) UNSIGNED NOT NULL,
  `genre_name` varchar(125) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_genre`
--

INSERT INTO `tbl_genre` (`genre_id`, `genre_name`) VALUES
(1, 'Action'),
(2, 'Adventure'),
(3, 'Comedy'),
(4, 'Crime'),
(5, 'Drama'),
(6, 'Historical'),
(7, 'Horror'),
(8, 'Musical'),
(9, 'Sci-Fi'),
(10, 'War'),
(11, 'Western'),
(12, 'Animation'),
(13, 'Family'),
(14, 'Fantasy'),
(15, 'Romance'),
(16, 'Sport');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_movies`
--

CREATE TABLE `tbl_movies` (
  `movies_id` mediumint(8) UNSIGNED NOT NULL,
  `movies_cover` varchar(75) NOT NULL DEFAULT 'cover_default.jpg',
  `movies_title` varchar(125) NOT NULL,
  `movies_year` varchar(5) NOT NULL,
  `movies_runtime` varchar(25) NOT NULL,
  `movies_storyline` text NOT NULL,
  `movies_trailer` varchar(75) NOT NULL DEFAULT 'trailer_default.jpg',
  `movies_release` varchar(125) NOT NULL,
  `movies_rating` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_movies`
--

INSERT INTO `tbl_movies` (`movies_id`, `movies_cover`, `movies_title`, `movies_year`, `movies_runtime`, `movies_storyline`, `movies_trailer`, `movies_release`, `movies_rating`) VALUES
(1, 'asphalt-jungle.jpg', 'The Asphalt Jungle', '1950', '1h 52m', ' A major heist goes off as planned, until bad luck and double crosses cause everything to unravel.', 'asphalt-jungle.mp4', '1 June 1950', 0),
(2, 'back-to-the-future.jpg', 'Back to the Future', '1985', '1h 56m', 'Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.', 'back-to-the-future.mp4', '3 July 1985', 1),
(3, 'cinderella.jpg', 'Cinderella', '1950', '1h 14m', 'When Cinderella\'s cruel stepmother prevents her from attending the Royal Ball, she gets some unexpected help from the lovable mice Gus and Jaq, and from her Fairy Godmother.', 'cinderella.mp4', '4 March 1950', 1),
(4, 'ghostbusters.jpg', 'Ghostbusters', '1984', '1h 45m', 'Three former parapsychology professors set up shop as a unique ghost removal service.', 'ghostbusters.mp4', '8 June 1984', 1),
(5, 'godfather.jpg', 'The Godfather', '1972', '2h 55m', 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.', 'godfather.mp4', '24 March 1972', 0),
(6, 'jaws.jpg', 'Jaws', '1975', '2h 4m', 'When a killer shark unleashes chaos on a beach community, it\'s up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down.', 'jaws.mp4', '20 June 1975', 0),
(7, 'psycho.jpg', 'Psycho', '1960', '1h 49m', 'A Phoenix secretary embezzles forty thousand dollars from her employer\'s client, goes on the run, and checks into a remote motel run by a young man under the domination of his mother.', 'psycho.mp4', '8 September 1960', 0),
(8, 'pulp-fiction.jpg', 'Pulp Fiction', '1994', '2h 34m', 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.', 'pulp-fiction.mp4', '14 October 1994', 0),
(9, 'space-odyssey.jpg', '2001: A Space Odyssey', '1968', '2h 29m', 'After discovering a mysterious artifact buried beneath the Lunar surface, mankind sets off on a quest to find its origins with help from intelligent supercomputer H.A.L. 9000.', 'space-odyssey.mp4', '12 May 1968', 1),
(10, 'titanic.jpg', 'Titanic', '1997', '3h 14m', 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.', 'titanic.mp4', '19 December 1997', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_mov_genre`
--

CREATE TABLE `tbl_mov_genre` (
  `mov_genre_id` mediumint(8) UNSIGNED NOT NULL,
  `movies_id` mediumint(9) NOT NULL,
  `genre_id` mediumint(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_mov_genre`
--

INSERT INTO `tbl_mov_genre` (`mov_genre_id`, `movies_id`, `genre_id`) VALUES
(1, 1, 4),
(2, 2, 3),
(3, 3, 14),
(4, 4, 14),
(5, 5, 4),
(6, 6, 7),
(7, 7, 7),
(8, 8, 4),
(9, 9, 9),
(10, 10, 15);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_music`
--

CREATE TABLE `tbl_music` (
  `music_id` mediumint(8) UNSIGNED NOT NULL,
  `music_cover` varchar(75) NOT NULL DEFAULT 'cover_default.jpg',
  `music_title` varchar(125) NOT NULL,
  `music_artist` varchar(75) NOT NULL,
  `music_year` varchar(5) NOT NULL,
  `music_file` varchar(75) NOT NULL DEFAULT 'trailer_default.jpg',
  `movies_rating` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_music`
--

INSERT INTO `tbl_music` (`music_id`, `music_cover`, `music_title`, `music_artist`, `music_year`, `music_file`, `movies_rating`) VALUES
(3, 'brown-eyed-girl.jpg', 'Brown Eyed Girl', 'Van Morrison', '1967', 'brown-eyed-girl.mp3', 1),
(4, 'i-walk-the-line.jpg', 'I Walk The Line', 'Johnny Cash', '1956', 'i-walk-the-line.mp3', 1),
(5, 'im-a-believer.jpg', 'I’m a Believer', 'The Monkees', '1966', 'im-a-believer.mp3', 1),
(6, 'my-sharona.jpg', 'My Sharona', 'The Knack', '1979', 'my-sharona.mp3', 1),
(7, 'shake-rattle-roll.jpg', 'Shake Rattle Roll', 'Elvis Presley', '1956', 'shake-rattle-roll.mp3', 1),
(8, 'stairway-to-heaven.jpg', 'Stairway to Heaven', 'Led Zepplin', '1971', 'stairway-to-heaven.mp3', 1),
(9, 'bitter-sweet-symphony.jpg', 'Bitter Sweet Symphony', 'The Verve', '1997', 'bitter-sweet-symphony.mp3', 0),
(10, 'livin-on-a-prayer.jpg', 'Livin’ On A Prayer', 'Bon Jovi', '1986', 'living-on-a-prayer.mp3', 1),
(11, 'losing-my-religion.jpg', 'Losing My Religion', 'R.E.M', '1991', 'losing-my-religion.mp3', 1),
(12, 'sweet-dreams.jpg', 'Sweet Dreams (Are Made Of This)', 'Eurythmics', '1983', 'sweet-dreams.mp3', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_television`
--

CREATE TABLE `tbl_television` (
  `television_id` mediumint(8) UNSIGNED NOT NULL,
  `television_cover` varchar(75) NOT NULL DEFAULT 'cover_default.jpg',
  `television_title` varchar(125) NOT NULL,
  `television_year` varchar(5) NOT NULL,
  `television_storyline` text NOT NULL,
  `television_file` varchar(75) NOT NULL DEFAULT 'trailer_default.jpg',
  `movies_rating` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_television`
--

INSERT INTO `tbl_television` (`television_id`, `television_cover`, `television_title`, `television_year`, `television_storyline`, `television_file`, `movies_rating`) VALUES
(1, 'a-team.jpg', 'The A-Team', '1983', 'Four Vietnam vets, framed for a crime they didn\'t commit, help the innocent while on the run from the military.', 'a-team.mp4', 0),
(2, 'beverly-hillbillies.jpg', 'The Beverly Hillbillies', '1962', 'A nouveau riche hillbilly family moves to Beverly Hills and shakes up the privileged society with their hayseed ways.', 'beverly-hillbillies.mp4', 1),
(3, 'charlies-angels.jpg', 'Charlie’s Angels', '1976', 'A wealthy mystery man named Charlie runs a detective agency via a speakerphone and his personal assistant, John Bosley. His detectives are three beautiful women, who end up in a variety of difficult situations.', 'charlies-angels.mp4', 0),
(4, 'fresh-prince-of-bel-air.jpg', 'The Fresh Prince of Bel Air', '1990', 'A streetwise, poor young man from Philadelphia is sent by his mother to live with his aunt, uncle and cousins in their Bel-Air mansion.', 'fresh-price-of-bel-air.mp4', 1),
(5, 'gunsmoke.jpg', 'Gunsmoke', '1955', 'Marshal Matt Dillon keeps the peace in rough and tumble Dodge City.', 'gunsmoke.mp4', 0),
(6, 'hogans-heroes.jpg', 'Hogan’s Heroes', '1965', 'The inmates of a German World War II prisoner of war camp conduct an espionage and sabotage campaign right under the noses of their warders.', 'hogans-heroes.mp4', 1),
(7, 'i-love-lucy.jpg', 'I Love Lucy', '1951', 'A daffy woman constantly strives to become a star along with her bandleader husband and gets herself in the strangest situations.', 'i-love-lucy.mp4', 1),
(8, 'mash.jpg', 'M*A*S*H', '1972', 'The staff of an Army hospital in the Korean War find that laughter is the best way to deal with their situation.', 'mash.mp4', 1),
(9, 'miami-vice.jpg', 'Miami Vice', '1984', 'Resplendent with authentic 1980\'s music, fashion and vibe, \"Miami Vice\" follows two undercover detectives and their extended team through the mean streets of Miami.', 'miami-vice.mp4', 0),
(10, 'seinfeld.jpg', 'Seinfeld', '1989', 'The continuing misadventures of neurotic New York City stand-up comedian Jerry Seinfeld and his equally neurotic New York City friends.', 'seinfeld.mp4', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_tv_genre`
--

CREATE TABLE `tbl_tv_genre` (
  `tv_genre_id` mediumint(8) UNSIGNED NOT NULL,
  `television_id` mediumint(9) NOT NULL,
  `genre_id` mediumint(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_tv_genre`
--

INSERT INTO `tbl_tv_genre` (`tv_genre_id`, `television_id`, `genre_id`) VALUES
(1, 1, 4),
(2, 2, 3),
(3, 3, 4),
(4, 4, 3),
(5, 5, 11),
(6, 6, 3),
(7, 7, 3),
(8, 8, 3),
(9, 9, 1),
(10, 10, 3);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

CREATE TABLE `tbl_user` (
  `user_id` mediumint(8) UNSIGNED NOT NULL,
  `user_fname` varchar(250) NOT NULL,
  `user_name` varchar(250) NOT NULL,
  `user_pass` varchar(250) NOT NULL,
  `user_email` varchar(250) NOT NULL,
  `user_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_ip` varchar(50) NOT NULL DEFAULT 'no',
  `user_avatar` varchar(20) NOT NULL,
  `user_permissions` int(11) NOT NULL,
  `user_admin` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`user_id`, `user_fname`, `user_name`, `user_pass`, `user_email`, `user_date`, `user_ip`, `user_avatar`, `user_permissions`, `user_admin`) VALUES
(3, 'Liam', 'liamkeery', 'password', 'me@you.com', '2020-03-09 15:48:21', '::1', 'null', 0, 1),
(4, 'Trevor', 'trevor', 'password', 'me@you.com', '2020-03-09 15:49:04', '::1', 'null', 0, 1),
(5, 'Kids', 'kids', 'password', 'me@you.com', '2020-03-09 15:49:39', '::1', 'null', 1, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_arating`
--
ALTER TABLE `tbl_arating`
  ADD PRIMARY KEY (`arating_id`);

--
-- Indexes for table `tbl_genre`
--
ALTER TABLE `tbl_genre`
  ADD PRIMARY KEY (`genre_id`);

--
-- Indexes for table `tbl_movies`
--
ALTER TABLE `tbl_movies`
  ADD PRIMARY KEY (`movies_id`);

--
-- Indexes for table `tbl_mov_genre`
--
ALTER TABLE `tbl_mov_genre`
  ADD PRIMARY KEY (`mov_genre_id`);

--
-- Indexes for table `tbl_music`
--
ALTER TABLE `tbl_music`
  ADD PRIMARY KEY (`music_id`);

--
-- Indexes for table `tbl_television`
--
ALTER TABLE `tbl_television`
  ADD PRIMARY KEY (`television_id`);

--
-- Indexes for table `tbl_tv_genre`
--
ALTER TABLE `tbl_tv_genre`
  ADD PRIMARY KEY (`tv_genre_id`);

--
-- Indexes for table `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_arating`
--
ALTER TABLE `tbl_arating`
  MODIFY `arating_id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tbl_genre`
--
ALTER TABLE `tbl_genre`
  MODIFY `genre_id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `tbl_movies`
--
ALTER TABLE `tbl_movies`
  MODIFY `movies_id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `tbl_mov_genre`
--
ALTER TABLE `tbl_mov_genre`
  MODIFY `mov_genre_id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `tbl_music`
--
ALTER TABLE `tbl_music`
  MODIFY `music_id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `tbl_television`
--
ALTER TABLE `tbl_television`
  MODIFY `television_id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `tbl_tv_genre`
--
ALTER TABLE `tbl_tv_genre`
  MODIFY `tv_genre_id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `user_id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
