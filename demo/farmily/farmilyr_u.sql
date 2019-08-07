-- phpMyAdmin SQL Dump
-- version 4.0.10.7
-- http://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: May 14, 2016 at 02:51 PM
-- Server version: 5.5.42-MariaDB-cll-lve
-- PHP Version: 5.4.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `farmilyr_u`
--

-- --------------------------------------------------------

--
-- Table structure for table `sym_address`
--

CREATE TABLE IF NOT EXISTS `sym_address` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `customer` int(11) NOT NULL,
  `name` varchar(99) COLLATE utf8_unicode_ci NOT NULL,
  `address` text COLLATE utf8_unicode_ci NOT NULL,
  `country` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `region` int(10) NOT NULL,
  `zip` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `mobile` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `active` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=8 ;

--
-- Dumping data for table `sym_address`
--

INSERT INTO `sym_address` (`id`, `customer`, `name`, `address`, `country`, `region`, `zip`, `mobile`, `active`) VALUES
(2, 2, 'ÐžÐ»ÑŒÐ³Ð°', 'Ð“Ð°Ð³Ð°Ñ€Ð¸Ð½Ð° 10', 'Ð Ð¾ÑÑÐ¸Ñ', 1, '684014', '89098382198', 1),
(3, 3, 'ÐœÐ¸ÑˆÐ°', 'ÐœÐ¾Ð¹ Ð°Ð´Ñ€ÐµÑ', 'Ð Ð¾ÑÑÐ¸Ñ', 1, '684014', '+79004442221', 1),
(5, 4, 'ÐœÐ¸Ñ…Ð°Ð¸Ð»', 'ÐºÐ².32, Ð®Ð±Ð¸Ð»ÐµÐ¹Ð½Ð°Ñ 5, Ð¿.ÐÐ°Ð³Ð¾Ñ€Ð½Ñ‹Ð¹,  Ð•Ð»Ð¸Ð·Ð¾Ð²ÑÐºÐ¸Ð¹ Ñ€-Ð½, ÐšÐ°Ð¼Ñ‡Ð°Ñ‚ÑÐºÐ¸Ð¹ Ðº-Ð¹,', 'Ð Ð¾ÑÑÐ¸Ñ', 1, '684014', '+79004414111', 1),
(6, 1, 'zaza', 'ÐºÐ².32, Ð®Ð±Ð¸Ð»ÐµÐ¹Ð½Ð°Ñ 5, Ð¿.ÐÐ°Ð³Ð¾Ñ€Ð½Ñ‹Ð¹,  Ð•Ð»Ð¸Ð·Ð¾Ð²ÑÐºÐ¸Ð¹ Ñ€-Ð½, ÐšÐ°Ð¼Ñ‡Ð°Ñ‚ÑÐºÐ¸Ð¹ Ðº-Ð¹,', 'Ð Ð¾ÑÑÐ¸Ñ', 1, '684014', '+79004414111', 1),
(7, 3, 'ÐžÐ»ÐµÑÑ', 'ÑƒÐ». Ð“ÐµÐ¾Ñ„Ð¸Ð·Ð¸Ñ‡ÐµÑÐºÐ°Ñ,Ð´Ð¾Ð¼ 13, ÐºÐ².8', 'Ð Ð¾ÑÑÐ¸Ñ', 7, '684000', '9146206363', 2);

-- --------------------------------------------------------

--
-- Table structure for table `sym_categories`
--

CREATE TABLE IF NOT EXISTS `sym_categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `slang` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `products` int(11) NOT NULL,
  `active` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=4 ;

--
-- Dumping data for table `sym_categories`
--

INSERT INTO `sym_categories` (`id`, `name`, `slang`, `products`, `active`) VALUES
(1, 'ÐšÐ¾Ñ€Ð¾Ð²Ñ‹', 'ÐœÑƒ', 0, 1),
(2, 'ÐšÐ¾Ð·Ñ‹', 'ÐœÐµ', 0, 1),
(3, 'ÐœÑÑÐ¾', 'Meat', 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `sym_coupons`
--

CREATE TABLE IF NOT EXISTS `sym_coupons` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `off` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `off_type` int(11) NOT NULL,
  `order_min` int(11) NOT NULL,
  `active` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=2 ;

--
-- Dumping data for table `sym_coupons`
--

INSERT INTO `sym_coupons` (`id`, `code`, `off`, `off_type`, `order_min`, `active`) VALUES
(1, '5566', '10', 1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `sym_customers`
--

CREATE TABLE IF NOT EXISTS `sym_customers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `mobile` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(99) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(99) COLLATE utf8_unicode_ci NOT NULL,
  `active` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=4 ;

--
-- Dumping data for table `sym_customers`
--

INSERT INTO `sym_customers` (`id`, `name`, `mobile`, `email`, `password`, `active`) VALUES
(1, ' -- ', '0000000000', 'zaza41rus@yandex.ru', '68JPI7evaQldec9rBdv3EDtrEyimuo_tjCIpuM7APrs,', 1),
(2, ' -- ', '0000000000', 'zaza41rus@mail.ru', 'RKsN0vqwibjZXADG97u04k21jbYSUYdeEc5WpqSbkmc,', 1),
(3, 'ÐžÐ»ÐµÑÑ', '9146206363', 'sadovskaya77@mail.ru', '1jWxX2KTasJiwezUTqjvF9V_WoxG0t525qUEjLvh29U,', 1);

-- --------------------------------------------------------

--
-- Table structure for table `sym_options`
--

CREATE TABLE IF NOT EXISTS `sym_options` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `name` varchar(99) COLLATE utf8_unicode_ci NOT NULL,
  `price` varchar(99) COLLATE utf8_unicode_ci NOT NULL,
  `active` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=22 ;

--
-- Dumping data for table `sym_options`
--

INSERT INTO `sym_options` (`id`, `product_id`, `name`, `price`, `active`) VALUES
(1, 1, '1,5Ð›', '120.00', 0),
(2, 1, '1,5Ð›/ÐÐ°ÑˆÐ° Ñ‚Ð°Ñ€Ð°', '120.00', 0),
(3, 1, '1,5Ð›/Ð’Ð°ÑˆÐ° Ñ‚Ð°Ñ€Ð°', '110.00', 0),
(4, 2, '1,5Ð›', '220.00', 0),
(5, 2, '1,5Ð›/ÐÐ°ÑˆÐ° Ñ‚Ð°Ñ€Ð°', '220.00', 0),
(6, 2, '1,5Ð›/Ð’Ð°ÑˆÐ° Ñ‚Ð°Ñ€Ð°', '210.00', 0),
(7, 4, '0,5ÐºÐ³', '180.00', 1),
(8, 4, 'Ð¢Ð²Ð¾Ñ€Ð¾Ð³ 0,5ÐºÐ³ + Ð¡Ð¼ÐµÑ‚Ð°Ð½Ð° 250Ð¼Ð»', '300.00', 1),
(9, 5, '250Ð¼Ð»', '130.00', 1),
(10, 5, 'Ð¡Ð¼ÐµÑ‚Ð°Ð½Ð° 250Ð¼Ð» + Ñ‚Ð²Ð¾Ñ€Ð¾Ð³ 0,5ÐºÐ³', '300.00', 1),
(11, 1, '1,5Ð›', '120.00', 1),
(12, 1, 'ÐžÐ¿Ñ‚ Ð¾Ñ‚ 15Ð›', '100.00', 1),
(13, 2, '1,5Ð›', '220.00', 1),
(14, 2, 'ÐžÐ¿Ñ‚ Ð¾Ñ‚ 7,5Ð›', '200.00', 1),
(15, 6, '1,5Ð›', '50.00', 1),
(16, 6, 'ÐžÐ¿Ñ‚ Ð¾Ñ‚ 7,5Ð›', '30.00', 1),
(17, 7, '10ÑˆÑ‚', '150.00', 1),
(18, 8, '1ÐšÐ“', '750.00', 1),
(19, 6, '1ÐšÐ“', '900.00', 0),
(20, 9, '1ÐšÐ“', '900.00', 1),
(21, 10, '100Ð³Ñ€', '100.00', 1);

-- --------------------------------------------------------

--
-- Table structure for table `sym_orders`
--

CREATE TABLE IF NOT EXISTS `sym_orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `items` text COLLATE utf8_unicode_ci NOT NULL,
  `net` varchar(99) COLLATE utf8_unicode_ci NOT NULL,
  `amount` varchar(99) COLLATE utf8_unicode_ci NOT NULL,
  `tax` varchar(99) COLLATE utf8_unicode_ci NOT NULL,
  `shipping` varchar(99) COLLATE utf8_unicode_ci NOT NULL,
  `discount` varchar(99) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `coupon` varchar(99) COLLATE utf8_unicode_ci DEFAULT NULL,
  `payment` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `customer` varchar(99) COLLATE utf8_unicode_ci NOT NULL,
  `address` int(11) NOT NULL,
  `gateway` varchar(99) COLLATE utf8_unicode_ci NOT NULL,
  `track` varchar(99) COLLATE utf8_unicode_ci NOT NULL,
  `track_url` varchar(99) COLLATE utf8_unicode_ci NOT NULL,
  `remarks` text COLLATE utf8_unicode_ci NOT NULL,
  `callback` int(11) NOT NULL DEFAULT '0',
  `seen` varchar(3) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'no',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=4 ;

--
-- Dumping data for table `sym_orders`
--

INSERT INTO `sym_orders` (`id`, `date`, `items`, `net`, `amount`, `tax`, `shipping`, `discount`, `coupon`, `payment`, `status`, `customer`, `address`, `gateway`, `track`, `track_url`, `remarks`, `callback`, `seen`) VALUES
(1, '02 Sep 2015', '{"1_11":{"id":"1","count":"1","name":"\\u041a\\u043e\\u0440\\u043e\\u0432\\u044c\\u0435 \\u043c\\u043e\\u043b\\u043e\\u043a\\u043e","opt_name":"1,5\\u041b","price":"90.00","stock":"178","img":"26c526346bdee89c354d7c624e990250.jpg","opt_id":"11","shipping":"0.00","region":"[\\"0\\",\\"1\\",\\"2\\"]","type":"option"}}', '90.00', '90.00', '0', '0.00', '0', 'ÐÐµÑ‚Ñƒ', 1, 1, '1', 6, 'ÐžÐ¿Ð»Ð°Ñ‚Ð° Ð½Ð°Ð»Ð¸Ñ‡Ð½Ñ‹Ð¼Ð¸ Ð¿Ñ€Ð¸ Ð¿Ð¾Ð»ÑƒÑ‡ÐµÐ½Ð¸Ð¸ (IP 185.13.112.74)', '', '', '', 1, 'yes'),
(2, '10 Feb 2016', '{"1_11":{"id":"1","count":"1","name":"\\u041a\\u043e\\u0440\\u043e\\u0432\\u044c\\u0435 \\u043c\\u043e\\u043b\\u043e\\u043a\\u043e","opt_name":"1,5\\u041b","price":"120.00","stock":"177","img":"26c526346bdee89c354d7c624e990250.jpg","opt_id":"11","shipping":"0.00","region":"[\\"0\\",\\"1\\",\\"2\\"]","type":"option"}}', '120.00', '120.00', '0', '0.00', '0', 'ÐÐµÑ‚Ñƒ', 2, 2, '2', 2, 'ÐžÐ¿Ð»Ð°Ñ‚Ð° Ð½Ð°Ð»Ð¸Ñ‡Ð½Ñ‹Ð¼Ð¸ Ð¿Ñ€Ð¸ Ð¿Ð¾Ð»ÑƒÑ‡ÐµÐ½Ð¸Ð¸ (IP 77.82.252.81)', '', '', '', 1, 'no'),
(3, '10 Feb 2016', '{"1_11":{"id":"1","count":"5","name":"\\u041a\\u043e\\u0440\\u043e\\u0432\\u044c\\u0435 \\u043c\\u043e\\u043b\\u043e\\u043a\\u043e","opt_name":"1,5\\u041b","price":"120.00","stock":"176","img":"26c526346bdee89c354d7c624e990250.jpg","opt_id":"11","shipping":"0.00","region":"[\\"0\\",\\"1\\",\\"2\\"]","type":"option"}}', '540.00', '600.00', '0', '0.00', '60.00', '5566', 2, 2, '2', 2, 'ÐžÐ¿Ð»Ð°Ñ‚Ð° Ð½Ð°Ð»Ð¸Ñ‡Ð½Ñ‹Ð¼Ð¸ Ð¿Ñ€Ð¸ Ð¿Ð¾Ð»ÑƒÑ‡ÐµÐ½Ð¸Ð¸ (IP 77.82.252.81)', '', '', '', 1, 'no');

-- --------------------------------------------------------

--
-- Table structure for table `sym_products`
--

CREATE TABLE IF NOT EXISTS `sym_products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(99) COLLATE utf8_unicode_ci NOT NULL,
  `price` varchar(99) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `category` int(20) NOT NULL,
  `tags` text COLLATE utf8_unicode_ci NOT NULL,
  `shipping` varchar(99) COLLATE utf8_unicode_ci NOT NULL,
  `stock` int(20) NOT NULL,
  `regions` text COLLATE utf8_unicode_ci NOT NULL,
  `active` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=11 ;

--
-- Dumping data for table `sym_products`
--

INSERT INTO `sym_products` (`id`, `name`, `price`, `description`, `category`, `tags`, `shipping`, `stock`, `regions`, `active`) VALUES
(1, 'ÐšÐ¾Ñ€Ð¾Ð²ÑŒÐµ Ð¼Ð¾Ð»Ð¾ÐºÐ¾', '120.00', 'Ð”Ð¾Ð¼Ð°ÑˆÐ½ÐµÐµ ÑÑ‹Ñ€Ð¾Ðµ ÐºÐ¾Ñ€Ð¾Ð²ÑŒÐµ Ð¼Ð¾Ð»Ð¾ÐºÐ¾, Ð±ÐµÐ· ÐºÐ°ÐºÐ¾Ð¹ Ð»Ð¸Ð±Ð¾ Ð¾Ð±Ñ€Ð°Ð±Ð¾Ñ‚ÐºÐ¸.\r\nÐ’Ð¾ Ð¼Ð½Ð¾Ð³Ð¸Ñ… ÑÐµÐ¼ÑŒÑÑ… Ñ€Ð°ÑÐ¿Ñ€Ð¾ÑÑ‚Ñ€Ð°Ð½ÐµÐ½Ð° Ð¿Ñ€Ð°ÐºÑ‚Ð¸ÐºÐ° Ð¿Ð¾ÐºÑƒÐ¿Ð°Ñ‚ÑŒ Ð´Ð¾Ð¼Ð°ÑˆÐ½ÐµÐµ Ð¼Ð¾Ð»Ð¾ÐºÐ¾, Ð° Ñ‚Ð°ÐºÐ¶Ðµ Ñ‚Ð²Ð¾Ñ€Ð¾Ð³ Ð¸ ÑÐ¼ÐµÑ‚Ð°Ð½Ñƒ Ñƒ Ð¿Ñ€Ð¾Ð²ÐµÑ€ÐµÐ½Ð½Ñ‹Ñ… Ð¼Ð¾Ð»Ð¾Ñ‡Ð½Ð¸Ñ†. Ð¢Ð°ÐºÐ¸Ð¼ Ð¾Ð±Ñ€Ð°Ð·Ð¾Ð¼, Ð’Ñ‹ Ð¼Ð¾Ð¶ÐµÑˆÑŒ Ð±Ñ‹Ñ‚ÑŒ ÑƒÐ²ÐµÑ€ÐµÐ½Ñ‹, Ñ‡Ñ‚Ð¾ Ð¼Ð¾Ð»Ð¾ÐºÐ¾ Ð¿Ð¾Ð»ÑƒÑ‡ÐµÐ½Ð¾ Ð¸Ð· Ð¾Ð´Ð½Ð¾Ð³Ð¾ Ñ…Ð¾Ð·ÑÐ¹ÑÑ‚Ð²Ð°, Ð° Ð½Ðµ Ð²Ð·ÑÑ‚Ð¾ Ð¸Ð· Ð¾Ð±Ñ‰ÐµÐ³Ð¾ ÐºÐ¾Ñ‚Ð»Ð°, ÐºÐ°Ðº ÑÑ‚Ð¾ Ð´ÐµÐ»Ð°ÑŽÑ‚ Ð½Ð° Ð¼Ð¾Ð»Ð¾Ñ‡Ð½Ñ‹Ñ… Ð¿Ñ€ÐµÐ´Ð¿Ñ€Ð¸ÑÑ‚Ð¸ÑÑ….', 1, '', '0.00', 171, '["0","1","2"]', 1),
(2, 'ÐšÐ¾Ð·ÑŒÐµ Ð¼Ð¾Ð»Ð¾ÐºÐ¾', '220.00', 'Ð”Ð¾Ð¼Ð°ÑˆÐ½ÐµÐµ ÑÑ‹Ñ€Ð¾Ðµ Ð¼Ð¾Ð»Ð¾ÐºÐ¾ ÐºÐ¾Ð·, Ð±ÐµÐ· ÐºÐ°ÐºÐ¾Ð¹ Ð»Ð¸Ð±Ð¾ Ð¾Ð±Ñ€Ð°Ð±Ð¾Ñ‚ÐºÐ¸.\r\nÐ’Ð¾ Ð¼Ð½Ð¾Ð³Ð¸Ñ… ÑÐµÐ¼ÑŒÑÑ… Ñ€Ð°ÑÐ¿Ñ€Ð¾ÑÑ‚Ñ€Ð°Ð½ÐµÐ½Ð° Ð¿Ñ€Ð°ÐºÑ‚Ð¸ÐºÐ° Ð¿Ð¾ÐºÑƒÐ¿Ð°Ñ‚ÑŒ Ð´Ð¾Ð¼Ð°ÑˆÐ½ÐµÐµ Ð¼Ð¾Ð»Ð¾ÐºÐ¾, Ð° Ñ‚Ð°ÐºÐ¶Ðµ Ñ‚Ð²Ð¾Ñ€Ð¾Ð³ Ð¸ ÑÐ¼ÐµÑ‚Ð°Ð½Ñƒ Ñƒ Ð¿Ñ€Ð¾Ð²ÐµÑ€ÐµÐ½Ð½Ñ‹Ñ… Ð¼Ð¾Ð»Ð¾Ñ‡Ð½Ð¸Ñ†. Ð¢Ð°ÐºÐ¸Ð¼ Ð¾Ð±Ñ€Ð°Ð·Ð¾Ð¼, Ð’Ñ‹ Ð¼Ð¾Ð¶ÐµÑˆÑŒ Ð±Ñ‹Ñ‚ÑŒ ÑƒÐ²ÐµÑ€ÐµÐ½Ñ‹, Ñ‡Ñ‚Ð¾ Ð¼Ð¾Ð»Ð¾ÐºÐ¾ Ð¿Ð¾Ð»ÑƒÑ‡ÐµÐ½Ð¾ Ð¸Ð· Ð¾Ð´Ð½Ð¾Ð³Ð¾ Ñ…Ð¾Ð·ÑÐ¹ÑÑ‚Ð²Ð°, Ð° Ð½Ðµ Ð²Ð·ÑÑ‚Ð¾ Ð¸Ð· Ð¾Ð±Ñ‰ÐµÐ³Ð¾ ÐºÐ¾Ñ‚Ð»Ð°, ÐºÐ°Ðº ÑÑ‚Ð¾ Ð´ÐµÐ»Ð°ÑŽÑ‚ Ð½Ð° Ð¼Ð¾Ð»Ð¾Ñ‡Ð½Ñ‹Ñ… Ð¿Ñ€ÐµÐ´Ð¿Ñ€Ð¸ÑÑ‚Ð¸ÑÑ….', 1, '', '0.00', 217, '["0","1","2"]', 1),
(3, 'ÐšÐ¾Ð·ÑŒÐµ Ð¼Ð¾Ð»Ð¾ÐºÐ¾', '220.00', 'ÐÐ°Ñ‚ÑƒÑ€Ð°Ð»ÑŒÐ½Ð¾Ðµ ÑÑ‹Ñ€Ð¾Ðµ Ð´Ð¾Ð¼Ð°ÑˆÐ½ÐµÐµ ÐºÐ¾Ð·ÑŒÐµ Ð¼Ð¾Ð»Ð¾ÐºÐ¾', 2, '', '0.00', 220, '', 0),
(4, 'Ð¢Ð²Ð¾Ñ€Ð¾Ð³', '180.00', 'Ð”Ð¾Ð¼Ð°ÑˆÐ½Ð¸Ð¹ Ñ‚Ð²Ð¾Ñ€Ð¾Ð³ Ð¸Ð· Ð½Ðµ ÑÐµÐ¿Ð°Ñ€Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð½Ð¾Ð³Ð¾ (Ð¶Ð¸Ñ€Ð½Ð¾Ð³Ð¾) ÐºÐ¾Ñ€Ð¾Ð²ÑŒÐµÐ³Ð¾ Ð¼Ð¾Ð»Ð¾ÐºÐ°.\r\nÐ‘ÐµÐ· Ð´Ð¾Ð±Ð°Ð²Ð»ÐµÐ½Ð¸Ñ Ð¿Ð¾ÑÑ‚Ð¾Ñ€Ð¾Ð½Ð½Ð¸Ñ… Ð¿Ñ€Ð¸Ð¼ÐµÑÐµÐ¹.\r\nÐŸÑ€Ð¸Ð³Ð¾Ñ‚Ð¾Ð²Ð»ÐµÐ½, Ð¿ÑƒÑ‚ÐµÐ¼ ÑÐºÐ¸ÑÐ°Ð½Ð¸Ñ ÐºÐ¾Ñ€Ð¾Ð²ÑŒÐµÐ³Ð¾ Ð¼Ð¾Ð»Ð¾ÐºÐ°, Ð´Ð¾ ÑÐ¾ÑÑ‚Ð¾ÑÐ½Ð¸Ñ Ð¿Ñ€Ð¾ÑÑ‚Ð¾ÐºÐ²Ð°ÑˆÐ¸ Ð¸ Ð²Ð°Ñ€ÐºÐ¸ ÐµÐµ Ð² Ð´ÑƒÑ…Ð¾Ð²Ð¾Ð¹ Ð¿ÐµÑ‡Ð¸.\r\nÐ”Ð°Ð»ÐµÐµ ÑÑ†ÐµÐ¶Ð¸Ð²Ð°ÐµÑ‚ÑÑ Ð¼Ð¾Ð»Ð¾Ñ‡Ð½Ð°Ñ ÑÑ‹Ð²Ð¾Ñ€Ð¾Ñ‚ÐºÐ° Ð¸ Ð¿Ð¾Ð»ÑƒÑ‡Ð°ÐµÑ‚ÑÑ Ð¾Ð´Ð½Ð¾Ñ€Ð¾Ð´Ð½Ð°Ñ Ñ‚Ð²Ð¾Ñ€Ð¾Ð¶Ð½Ð°Ñ Ð¼Ð°ÑÑÐ° â€“ Ñ‚Ð²Ð¾Ñ€Ð¾Ð³.', 1, '', '0.00', 172, '["0","1","2"]', 1),
(5, 'Ð¡Ð¼ÐµÑ‚Ð°Ð½Ð°', '130.00', 'Ð”Ð¾Ð¼Ð°ÑˆÐ½ÑÑ ÑÐ¼ÐµÑ‚Ð°Ð½Ð° Ð¸Ð· ÐºÐ¾Ñ€Ð¾Ð²ÑŒÐµÐ³Ð¾ Ð¼Ð¾Ð»Ð¾ÐºÐ°.\r\nÐŸÑ€Ð¸Ð³Ð¾Ñ‚Ð°Ð²Ð»Ð¸Ð²Ð°ÐµÑ‚ÑÑ, Ð¿ÑƒÑ‚ÐµÐ¼ Ñ€ÑƒÑ‡Ð½Ð¾Ð³Ð¾ ÑÐ±Ð¾Ñ€Ð° ÑÐ»Ð¸Ð²Ð¾Ðº (Ð¸Ð¼ÐµÐ½Ð½Ð¾ Ñ€ÑƒÑ‡Ð½Ð¾Ð³Ð¾, Ð° Ð½Ðµ ÑÐ¸Ð¿Ð°Ñ€Ð°Ñ†Ð¸Ð¸ Ð¼Ð¾Ð»Ð¾ÐºÐ°, ÐºÐ°Ðº ÑÑ‚Ð¾ Ð´ÐµÐ»Ð°ÑŽÑ‚ Ð¿Ñ€Ð¸ Ð¿Ñ€Ð¾Ð¼Ñ‹ÑˆÐ»ÐµÐ½Ð½Ð¾Ð¼ Ð¿Ñ€Ð¾Ð¸Ð·Ð²Ð¾Ð´ÑÑ‚Ð²Ðµ) Ð² Ð¾Ñ‚ÑÑ‚Ð¾ÑÐ²ÑˆÐµÐ¼ÑÑ ÐºÐ¾Ñ€Ð¾Ð²ÑŒÐµÐ¼ Ð¼Ð¾Ð»Ð¾ÐºÐµ Ð¸ ÑÐºÐ¸ÑÐ°Ð½Ð¸Ð¸ Ð¸Ñ…, Ð´Ð¾ Ñ…Ð°Ñ€Ð°ÐºÑ‚ÐµÑ€Ð½Ð¾Ð³Ð¾ ÑÐ¼ÐµÑ‚Ð°Ð½Ð½Ð¾Ð³Ð¾ Ð²ÐºÑƒÑÐ°.\r\nÐ•ÑÐ»Ð¸ ÑÐ¼ÐµÑ‚Ð°Ð½Ð° Ð¿Ð¾Ð»ÑƒÑ‡Ð°ÐµÑ‚ÑÑ ÑÐ»Ð¸ÑˆÐºÐ¾Ð¼ Ð¶Ð¸Ð´ÐºÐ¾Ð¹ ÐºÐ¾Ð½ÑÐ¸ÑÑ‚ÐµÐ½Ñ†Ð¸Ð¸ - Ð´Ð¾Ð±Ð°Ð²Ð»ÑÐµÐ¼ Ð½ÐµÐ¼Ð½Ð¾Ð³Ð¾ Ñ‚Ð²Ð¾Ñ€Ð¾Ð¶Ð½Ð¾Ð¹ Ð¼Ð°ÑÑÑ‹ Ð² ÐºÐ°Ñ‡ÐµÑÑ‚Ð²Ðµ Ð·Ð°Ð³ÑƒÑÑ‚Ð¸Ñ‚ÐµÐ»Ñ.', 1, '', '0.00', 130, '["0","1","2"]', 1),
(6, 'Ð¡Ñ‹Ð²Ð¾Ñ€Ð¾Ñ‚ÐºÐ°', '50.00', 'Ð”Ð¾Ð¼Ð°ÑˆÐ½ÑÑ ÑÑ‹Ð²Ð¾Ñ€Ð¾Ñ‚ÐºÐ° Ð¸Ð· ÐºÐ¾Ñ€Ð¾Ð²ÑŒÐµÐ³Ð¾ Ð¼Ð¾Ð»Ð¾ÐºÐ°.\r\nÐŸÐ¾Ð»ÑƒÑ‡Ð°ÐµÑ‚ÑÑ Ð¿ÑƒÑ‚ÐµÐ¼ Ð²Ð°Ñ€ÐºÐ¸ Ñ‚Ð²Ð¾Ñ€Ð¾Ð¶Ð½Ð¾Ð¹ Ð¼Ð°ÑÑÑ‹ Ð¸ Ð¾Ñ‚Ð´ÐµÐ»ÐµÐ½Ð¸Ñ (ÑÑ†ÐµÐ¶Ð¸Ð²Ð°Ð½Ð¸Ñ) ÑÑ‹Ð²Ð¾Ñ€Ð¾Ñ‚ÐºÐ¸ Ð¾Ñ‚ Ñ‚Ð²Ð¾Ñ€Ð¾Ð³Ð°.\r\nÐŸÐ¾ ÑÑƒÑ‚Ð¸, ÑÑ‚Ð¾ Ð¿Ð¾Ð±Ð¾Ñ‡Ð½Ñ‹Ð¹ Ð¿Ñ€Ð¾Ð´ÑƒÐºÑ‚, ÐºÐ¾Ñ‚Ð¾Ñ€Ñ‹Ð¹ Ð¿Ñ€Ð°ÐºÑ‚Ð¸Ñ‡ÐµÑÐºÐ¸ Ð½Ðµ ÑÐ¾Ð´ÐµÑ€Ð¶Ð¸Ñ‚ Ð¶Ð¸Ñ€Ð¾Ð², Ð±Ð¾Ð³Ð°Ñ‚ Ð»ÐµÐ³ÐºÐ¾ÑƒÑÐ²Ð¾ÑÐµÐ¼Ñ‹Ð¼Ð¸ Ð±ÐµÐ»ÐºÐ°Ð¼Ð¸, ÐºÐ°Ð»ÑŒÑ†Ð¸ÐµÐ¼ Ð¸ Ð²Ð¸Ñ‚Ð°Ð¼Ð¸Ð½Ð°Ð¼Ð¸.', 1, '', '0.00', 50, '["0","1","2","7","8"]', 1),
(7, 'Ð¯Ð¹Ñ†Ð¾ ÐºÑƒÑ€', '150.00', 'ÐÐ°ÑÑ‚Ð¾ÑÑ‰Ð¸Ðµ &quot;Ð´Ð¾Ð¼Ð°ÑˆÐ½Ð¸Ðµ&quot; ÑÐ¹Ñ†Ð° Ð¾Ñ‚Ð»Ð¸Ñ‡Ð°ÑŽÑ‚ÑÑ Ð¾Ñ‚ Ñ„Ð°Ð±Ñ€Ð¸Ñ‡Ð½Ñ‹Ñ…. Ð£ Ð´Ð¾Ð¼Ð°ÑˆÐ½Ð¸Ñ… ÐºÑƒÑ€Ð¾Ñ‡ÐµÐº, ÐºÐ°Ðº Ð¿Ñ€Ð°Ð²Ð¸Ð»Ð¾, ÐµÑÑ‚ÑŒ Ð¿ÐµÑ‚ÑƒÑ…, Ð¸ ÑÐ¹Ñ†Ð° Ð¾Ð½Ð¸ Ð½ÐµÑÑƒÑ‚ Ð¾Ð¿Ð»Ð¾Ð´Ð¾Ñ‚Ð²Ð¾Ñ€ÐµÐ½Ð½Ñ‹Ðµ. Ð˜Ð·-Ð·Ð° ÑÑ‚Ð¾Ð³Ð¾ Ð¶ÐµÐ»Ñ‚Ð¾Ðº ÑÑ‚Ð°Ð½Ð¾Ð²Ð¸Ñ‚ÑÑ ÑÑ€ÐºÐ¾-Ð¾Ñ€Ð°Ð½Ð¶ÐµÐ²Ñ‹Ð¼, Ð¸ Ð½Ð° Ð½ÐµÐ¼ Ð¿Ð¾ÑÐ²Ð»ÑÐµÑ‚ÑÑ Ð±ÐµÐ»Ð¾Ð²Ð°Ñ‚Ð°Ñ Ñ‚Ð¾Ñ‡ÐºÐ° - Ð·Ð°Ñ€Ð¾Ð´Ñ‹Ñˆ.\r\nÐ£ Ð´Ð¾Ð¼Ð°ÑˆÐ½Ð¸Ñ… ÐºÑƒÑ€, Ð¾ÑÐ¾Ð±ÐµÐ½Ð½Ð¾ ÑÐ¾Ð´ÐµÑ€Ð¶Ð°Ñ‰Ð¸Ñ…ÑÑ Ð½Ð° Ð²Ð¾Ð»ÑŒÐ½Ð¾Ð¼ Ð²Ñ‹Ð³ÑƒÐ»Ðµ, Ð¿Ð¸Ñ‚Ð°Ð½Ð¸Ðµ Ð½Ðµ Ð² Ð¿Ñ€Ð¸Ð¼ÐµÑ€ Ñ€Ð°Ð·Ð½Ð¾Ð¾Ð±Ñ€Ð°Ð·Ð½ÐµÐµ. Ð¤Ð°Ð±Ñ€Ð¸Ñ‡Ð½Ñ‹Ðµ Ð¿Ð¾Ð»ÑƒÑ‡Ð°ÑŽÑ‚ Ð¿Ð¾Ð»Ð½Ð¾Ñ€Ð°Ñ†Ð¸Ð¾Ð½Ð½Ñ‹Ð¹ ÐºÐ¾Ð¼Ð±Ð¸ÐºÐ¾Ñ€Ð¼, Ð° Ð´Ð¾Ð¼Ð°ÑˆÐ½Ð¸Ðµ Ð¸ Ñ‚Ñ€Ð°Ð²ÐºÑƒ, Ð¸ Ð·ÐµÑ€Ð½Ð¾, Ð¸ ÐºÐ¾Ñ€ÐµÑˆÐºÐ¸ ÐºÐ°ÐºÐ¸Ðµ-Ð½Ð¸Ð±ÑƒÐ´ÑŒ Ð²Ñ‹ÐºÐ¾Ð¿Ð°ÑŽÑ‚, Ð¸ Ñ‡ÐµÑ€Ð²ÑÑ‡ÐºÐ¾Ð¼ Ð·Ð°ÐºÑƒÑÑÑ‚. ÐšÐ°Ð¼ÑƒÑˆÐºÐ¸ Ð¼ÐµÐ»ÐºÐ¸Ðµ ÑÐºÐ»ÐµÐ²Ñ‹Ð²Ð°ÑŽÑ‚, Ð¸ Ð¼Ð½Ð¾Ð³Ð¾ Ñ‡ÐµÐ³Ð¾ ÐµÑ‰Ðµ Ð¿Ð¾Ð´Ð±Ð¸Ñ€Ð°ÑŽÑ‚. ÐÐµ Ð³Ð¾Ð²Ð¾Ñ€Ñ ÑƒÐ¶Ðµ Ð¾ Ñ‚Ð¾Ð¼, Ñ‡Ñ‚Ð¾ Ð¸ Ñ…Ð¾Ð·ÑÐµÐ²Ð° ÐºÐ¾Ñ€Ð¼ÑÑ‚ Ñ‡ÐµÐ¼ Ð¿Ñ€Ð¸Ð´ÐµÑ‚ÑÑ - ÐºÑ€Ð¾Ð¼Ðµ ÐºÐ¾Ð¼Ð±Ð¸ÐºÐ¾Ñ€Ð¼Ð°, Ð´Ð¾Ð¼Ð°ÑˆÐ½Ð¸Ðµ Ð½ÐµÑÑƒÑˆÐºÐ¸ Ð¿Ð¾Ð»ÑƒÑ‡Ð°ÑŽÑ‚ Ð¸ ÐºÑ€ÑƒÐ¿Ñ‹, Ð¸ Ð¾Ð²Ð¾Ñ‰Ð½Ñ‹Ðµ Ð¾Ñ‡Ð¸ÑÑ‚ÐºÐ¸, Ð¸ ÐºÑƒÑ…Ð¾Ð½Ð½Ñ‹Ðµ Ð¾Ñ‚Ñ…Ð¾Ð´Ñ‹. Ð Ð°Ð·Ð½Ð¾Ð¾Ð±Ñ€Ð°Ð·Ð¸Ðµ Ð¿Ð¸Ñ‰Ð¸ Ð²Ð»Ð¸ÑÐµÑ‚ Ð½Ð° Ð²ÐºÑƒÑ ÑÐ¸Ñ†.\r\nÐÐµÐ¼Ð°Ð»Ð¾Ð²Ð°Ð¶Ð½Ð¾, Ñ‡Ñ‚Ð¾ Ð½Ð° Ð¿Ñ‚Ð¸Ñ†ÐµÑ„Ð°Ð±Ñ€Ð¸ÐºÐ°Ñ… ÐºÑƒÑ€ Ð¿Ð¾ÑÑ‚Ð¾ÑÐ½Ð½Ð¾ Ð´Ð»Ñ Ð»ÐµÑ‡ÐµÐ½Ð¸Ñ Ð¸ Ð¿Ñ€Ð¾Ñ„Ð¸Ð»Ð°ÐºÑ‚Ð¸ÐºÐ¸ Ð¿Ð¸Ñ‡ÐºÐ°ÑŽÑ‚ Ð»ÐµÐºÐ°Ñ€ÑÑ‚Ð²Ð°Ð¼Ð¸. Ð‘ÐµÐ· ÑÑ‚Ð¾Ð³Ð¾ Ð½ÐµÐ»ÑŒÐ·Ñ, Ð¿Ð¾Ñ‚Ð¾Ð¼Ñƒ Ñ‡Ñ‚Ð¾ Ð¼Ð°Ð»ÐµÐ¹ÑˆÐ°Ñ Ð¸Ð½Ñ„ÐµÐºÑ†Ð¸Ñ Ð² Ð±Ð¾Ð»ÑŒÑˆÐ¾Ð¼ Ð¿Ñ‚Ð¸Ñ‡ÑŒÐµÐ¼ ÐºÐ¾Ð»Ð»ÐµÐºÑ‚Ð¸Ð²Ðµ Ð¾Ð±ÐµÑ€Ð½ÐµÑ‚ÑÑ Ð¾Ð³Ñ€Ð¾Ð¼Ð½Ñ‹Ð¼Ð¸ Ð¿Ð¾Ñ‚ÐµÑ€ÑÐ¼Ð¸ Ð¸ ÑƒÐ±Ñ‹Ñ‚ÐºÐ°Ð¼Ð¸. Ð”Ð¾Ð¼Ð°ÑˆÐ½Ð¸Ðµ ÐºÑƒÑ€Ñ‹ Ð·Ð´Ð¾Ñ€Ð¾Ð²ÐµÐµ, Ñ‚Ð°Ðº ÐºÐ°Ðº Ð¾Ð½Ð¸ Ñ ÑÐ¾Ð¿Ð»ÐµÐ¼ÐµÐ½Ð½Ð¸ÐºÐ°Ð¼Ð¸ Ð½Ðµ &quot;Ð¾Ð±Ñ‰Ð°ÑŽÑ‚ÑÑ&quot;, ÑÐ¾Ð´ÐµÑ€Ð¶Ð°Ñ‚ÑÑ Ð¸Ð·Ð¾Ð»Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð½Ð¾. Ð˜ Ñ…Ð¾Ð·ÑÐ¸Ð½Ñƒ Ð¿Ñ€Ð¾Ñ‰Ðµ Ð·Ð°ÑÐºÑƒÑ‡Ð°Ð²ÑˆÑƒÑŽ Ð½ÐµÑÑƒÑˆÐºÑƒ Ð¾Ñ‚Ð¿Ñ€Ð°Ð²Ð¸Ñ‚ÑŒ Ð² ÑÑƒÐ¿, Ñ‡ÐµÐ¼ Ñ€Ð¸ÑÐºÐ¾Ð²Ð°Ñ‚ÑŒ Ð²ÑÐµÐ¼ Ð¿Ð¾Ð³Ð¾Ð»Ð¾Ð²ÑŒÐµÐ¼, Ð²Ð¾Ð·Ð¸Ñ‚ÑŒÑÑ Ñ Ð»ÐµÑ‡ÐµÐ½Ð¸ÐµÐ¼, Ð¸ÑÐºÐ°Ñ‚ÑŒ ÐºÐ°ÐºÐ¸Ðµ-Ñ‚Ð¾ Ð»ÐµÐºÐ°Ñ€ÑÑ‚Ð²Ð°, Ð´Ð° ÐµÑ‰Ðµ ÐºÐ°Ðº-Ñ‚Ð¾ ÑƒÑ…Ð¸Ñ‚Ñ€Ð¸Ñ‚ÑŒÑÑ Ð´Ð°Ñ‚ÑŒ Ð¸Ñ… ÐºÑƒÑ€Ð¸Ñ†Ðµ. Ð’ Ñ‚Ð¾ Ð²Ñ€ÐµÐ¼Ñ ÐºÐ°Ðº Ð½Ð° Ð¿Ñ‚Ð¸Ñ†ÐµÑ„Ð°Ð±Ñ€Ð¸ÐºÐµ - ÑÑ‚Ð¾ Ð¿Ð¾ÑÑ‚Ð¾ÑÐ½Ð½Ð°Ñ, Ñ€ÐµÐ³ÑƒÐ»ÑÑ€Ð½Ð°Ñ Ð¸ Ð¾Ð±ÑÐ·Ð°Ñ‚ÐµÐ»ÑŒÐ½Ð°Ñ Ñ€Ð°Ð±Ð¾Ñ‚Ð°. Ð¢Ð°Ðº Ñ‡Ñ‚Ð¾ Ñ„Ð°Ð±Ñ€Ð¸Ñ‡Ð½Ñ‹Ðµ ÑÐ¹Ñ†Ð° Ð¼Ð¾Ð³ÑƒÑ‚ ÑÐ¾Ð´ÐµÑ€Ð¶Ð°Ñ‚ÑŒ Ð¼Ð½Ð¾Ð³Ð¾ Ð½ÐµÐ¾Ð¶Ð¸Ð´Ð°Ð½Ð½Ñ‹Ñ… ÑÐ¾ÑÑ‚Ð°Ð²Ð»ÑÑŽÑ‰Ð¸Ñ… Ñ‚Ð¸Ð¿Ð° Ð°Ð½Ñ‚Ð¸Ð±Ð¸Ð¾Ñ‚Ð¸ÐºÐ¾Ð², Ð³Ð¾Ñ€Ð¼Ð¾Ð½Ð¾Ð² Ñ€Ð¾ÑÑ‚Ð° Ð¸ Ñ‚.Ð¿.', 3, '', '0.00', 10, '', 1),
(8, 'ÐŸÐ°Ñ€Ð½Ð°Ñ Ñ‚ÑƒÑˆÐºÐ° ÐºÑ€Ð¾Ð»Ð¸ÐºÐ°', '750.00', 'ÐŸÐ°Ñ€Ð½Ð¾Ðµ Ð¼ÑÑÐ¾ ÐºÑ€Ð¾Ð»Ð¸ÐºÐ°', 3, '', '0.00', 5, '["0","1","7"]', 1),
(9, 'ÐŸÐ°Ñ€Ð½Ð°Ñ Ñ‚ÑƒÑˆÐºÐ° Ð±Ð°Ñ€Ð°Ð½Ð°', '900.00', 'ÐŸÐ°Ñ€Ð½Ð°Ñ Ð±Ð°Ñ€Ð°Ð½Ð¸Ð½Ð°', 3, '', '0.00', 4, '["0","1","7"]', 1),
(10, 'Ð¡Ð¼ÐµÑ‚Ð°Ð½Ð½Ñ‹Ðµ Ð¿Ð¸Ñ€Ð¾Ð¶Ð½Ñ‹Ðµ', '100.00', 'ÐŸÐ¸Ñ€Ð¾Ð¶Ð½Ñ‹Ðµ Ð¸Ð· Ð´Ð¾Ð¼Ð°ÑˆÐ½ÐµÐ¹ ÑÐ¼ÐµÑ‚Ð°Ð½Ñ‹. Ð’Ð¾Ð·Ð¼Ð¾Ð¶Ð½Ð¾ÑÑ‚ÑŒ Ð¸Ð·Ð³Ð¾Ñ‚Ð¾Ð²Ð»ÐµÐ½Ð¸Ñ Ð¢Ð¾Ñ€Ñ‚Ð¾Ð² Ð¿Ð¾ ÑÑ‚Ð¾Ð¼Ñƒ Ð¶Ðµ Ñ€ÐµÑ†ÐµÐ¿Ñ‚Ñƒ - Ð¢ÐžÐ Ð¢ Ð¡ÐœÐ•Ð¢ÐÐÐÐ˜Ðš.', 1, '', '0.00', 10, '["0","1","7"]', 1);

-- --------------------------------------------------------

--
-- Table structure for table `sym_products_images`
--

CREATE TABLE IF NOT EXISTS `sym_products_images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `image` varchar(99) COLLATE utf8_unicode_ci NOT NULL,
  `active` int(11) NOT NULL,
  `primary` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=10 ;

--
-- Dumping data for table `sym_products_images`
--

INSERT INTO `sym_products_images` (`id`, `product_id`, `image`, `active`, `primary`) VALUES
(1, 1, '26c526346bdee89c354d7c624e990250.jpg', 1, 1),
(2, 2, 'c540ed8941bf3f4631dbff299e205ba1.jpg', 1, 1),
(3, 4, '30543cdf71d48d8866bc863bf4ce1e5e.jpg', 1, 1),
(4, 5, '203c9f8bec86ff361c90fe1306c8f65a.jpg', 1, 1),
(5, 6, '560b4aec256b6db35d165ecb41b21396.jpg', 1, 1),
(6, 7, '878f209ecd0d602d0380c6ee2bee68eb.jpg', 1, 1),
(7, 8, 'd052bbcb1660d6dd78b4672b7f55981b.jpg', 1, 1),
(8, 9, '37e442ba71405638a97f41c3dc6a6390.jpg', 1, 1),
(9, 10, 'ee309112a0c3f03186cad245d243ab5c.jpg', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `sym_settings`
--

CREATE TABLE IF NOT EXISTS `sym_settings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `setting` varchar(99) COLLATE utf8_unicode_ci NOT NULL,
  `value` varchar(99) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=133 ;

--
-- Dumping data for table `sym_settings`
--

INSERT INTO `sym_settings` (`id`, `setting`, `value`) VALUES
(1, 'website_url', 'http://farmily.ru'),
(2, 'web_email', 'farmily.ru@gmail.com'),
(3, 'invoice_email', 'farmily.ru@gmail.com'),
(4, 'currency', 'Ð Ð£Ð‘'),
(5, 'currency_symbol', 'Ð '),
(6, 'secret', 'baed'),
(7, 'g_dis', '0'),
(8, 'fb_dis', '0'),
(9, 'shipping_min_items', '1'),
(10, 'max_order_total', '10000'),
(11, 'min_order_total', '0'),
(12, 'shipping_mode', '1'),
(13, 'free_shipping', '0'),
(14, 'tax', ''),
(15, 'fb_app_id', ''),
(16, 'fb_app_secret', ''),
(17, 'fb_url', ''),
(18, 'g_url', ''),
(19, 'mode', '1'),
(20, 'rc_private', ''),
(21, 'rc_public', ''),
(22, 'images', '/images/products/'),
(23, 'website_url', 'http://farmily.ru'),
(24, 'web_email', 'farmily.ru@gmail.com'),
(25, 'invoice_email', 'farmily.ru@gmail.com'),
(26, 'currency', 'Ð Ð£Ð‘'),
(27, 'currency_symbol', 'Ð '),
(28, 'secret', 'baed'),
(29, 'g_dis', '0'),
(30, 'fb_dis', '0'),
(31, 'shipping_min_items', '1'),
(32, 'max_order_total', '10000'),
(33, 'min_order_total', '0'),
(34, 'shipping_mode', '1'),
(35, 'free_shipping', '0'),
(36, 'tax', ''),
(37, 'fb_app_id', ''),
(38, 'fb_app_secret', ''),
(39, 'fb_url', ''),
(40, 'g_url', ''),
(41, 'mode', '1'),
(42, 'rc_private', ''),
(43, 'rc_public', ''),
(44, 'images', '/images/products/'),
(45, 'website_url', 'http://farmily.ru'),
(46, 'web_email', 'farmily.ru@gmail.com'),
(47, 'invoice_email', 'farmily.ru@gmail.com'),
(48, 'currency', 'Ð Ð£Ð‘'),
(49, 'currency_symbol', 'Ð '),
(50, 'secret', 'baed'),
(51, 'g_dis', '0'),
(52, 'fb_dis', '0'),
(53, 'shipping_min_items', '1'),
(54, 'max_order_total', '10000'),
(55, 'min_order_total', '0'),
(56, 'shipping_mode', '1'),
(57, 'free_shipping', '0'),
(58, 'tax', ''),
(59, 'fb_app_id', ''),
(60, 'fb_app_secret', ''),
(61, 'fb_url', ''),
(62, 'g_url', ''),
(63, 'mode', '1'),
(64, 'rc_private', ''),
(65, 'rc_public', ''),
(66, 'images', '/images/products/'),
(67, 'website_url', 'http://farmily.ru'),
(68, 'web_email', 'farmily.ru@gmail.com'),
(69, 'invoice_email', 'farmily.ru@gmail.com'),
(70, 'currency', 'Ð Ð£Ð‘'),
(71, 'currency_symbol', 'Ð '),
(72, 'secret', 'baed'),
(73, 'g_dis', '0'),
(74, 'fb_dis', '0'),
(75, 'shipping_min_items', '1'),
(76, 'max_order_total', '10000'),
(77, 'min_order_total', '0'),
(78, 'shipping_mode', '1'),
(79, 'free_shipping', '0'),
(80, 'tax', ''),
(81, 'fb_app_id', ''),
(82, 'fb_app_secret', ''),
(83, 'fb_url', ''),
(84, 'g_url', ''),
(85, 'mode', '1'),
(86, 'rc_private', ''),
(87, 'rc_public', ''),
(88, 'images', '/images/products/'),
(89, 'website_url', 'http://farmily.ru'),
(90, 'web_email', 'farmily.ru@gmail.com'),
(91, 'invoice_email', 'farmily.ru@gmail.com'),
(92, 'currency', 'Ð Ð£Ð‘'),
(93, 'currency_symbol', 'Ð '),
(94, 'secret', 'baed'),
(95, 'g_dis', '0'),
(96, 'fb_dis', '0'),
(97, 'shipping_min_items', '1'),
(98, 'max_order_total', '10000'),
(99, 'min_order_total', '0'),
(100, 'shipping_mode', '1'),
(101, 'free_shipping', '0'),
(102, 'tax', ''),
(103, 'fb_app_id', ''),
(104, 'fb_app_secret', ''),
(105, 'fb_url', ''),
(106, 'g_url', ''),
(107, 'mode', '1'),
(108, 'rc_private', ''),
(109, 'rc_public', ''),
(110, 'images', '/images/products/'),
(111, 'website_url', 'http://farmily.ru'),
(112, 'web_email', 'farmily.ru@gmail.com'),
(113, 'invoice_email', 'farmily.ru@gmail.com'),
(114, 'currency', 'Ð Ð£Ð‘'),
(115, 'currency_symbol', 'Ð '),
(116, 'secret', 'symbiotic'),
(117, 'g_dis', '0'),
(118, 'fb_dis', '0'),
(119, 'shipping_min_items', '1'),
(120, 'max_order_total', '10000'),
(121, 'min_order_total', '0'),
(122, 'shipping_mode', '1'),
(123, 'free_shipping', '0'),
(124, 'tax', ''),
(125, 'fb_app_id', ''),
(126, 'fb_app_secret', ''),
(127, 'fb_url', ''),
(128, 'g_url', ''),
(129, 'mode', '1'),
(130, 'rc_private', ''),
(131, 'rc_public', ''),
(132, 'images', '/images/products/');

-- --------------------------------------------------------

--
-- Table structure for table `sym_shipping_regions`
--

CREATE TABLE IF NOT EXISTS `sym_shipping_regions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(99) COLLATE utf8_unicode_ci NOT NULL,
  `zip` varchar(99) COLLATE utf8_unicode_ci NOT NULL,
  `shipping` varchar(99) COLLATE utf8_unicode_ci NOT NULL,
  `active` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=8 ;

--
-- Dumping data for table `sym_shipping_regions`
--

INSERT INTO `sym_shipping_regions` (`id`, `name`, `zip`, `shipping`, `active`) VALUES
(1, 'ÐŸÐµÑ‚Ñ€Ð¾Ð¿Ð°Ð²Ð»Ð¾Ð²ÑÐº-ÐšÐ°Ð¼Ñ‡Ð°Ñ‚ÑÐºÐ¸Ð¹', '683000', '0.00', 1),
(7, 'Ð•Ð»Ð¸Ð·Ð¾Ð²Ð¾', '684000', '0.00', 1);

-- --------------------------------------------------------

--
-- Table structure for table `sym_users`
--

CREATE TABLE IF NOT EXISTS `sym_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(99) COLLATE utf8_unicode_ci NOT NULL,
  `role` int(11) NOT NULL,
  `latest_login` varchar(11) COLLATE utf8_unicode_ci NOT NULL,
  `last_login` varchar(11) COLLATE utf8_unicode_ci NOT NULL,
  `active` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=7 ;

--
-- Dumping data for table `sym_users`
--

INSERT INTO `sym_users` (`id`, `email`, `password`, `role`, `latest_login`, `last_login`, `active`) VALUES
(1, 'farmily.ru@gmail.com', 'TAxLpgkINLNSfFqJ3TCGAgSuipT9w9n9iVu4dBQ9_Qs,', 1, '', 'Never', 1),
(2, 'farmily.ru@gmail.com', 'TAxLpgkINLNSfFqJ3TCGAgSuipT9w9n9iVu4dBQ9_Qs,', 1, '', 'Never', 1),
(3, 'farmily.ru@gmail.com', 'TAxLpgkINLNSfFqJ3TCGAgSuipT9w9n9iVu4dBQ9_Qs,', 1, '', 'Never', 1),
(4, 'farmily@gmail.com', 'TAxLpgkINLNSfFqJ3TCGAgSuipT9w9n9iVu4dBQ9_Qs,', 1, '', 'Never', 1),
(5, 'farmily.ru@gmail.com', 'TAxLpgkINLNSfFqJ3TCGAgSuipT9w9n9iVu4dBQ9_Qs,', 1, '', 'Never', 1),
(6, 'farmily.ru@gmail.com', 'TAxLpgkINLNSfFqJ3TCGAgSuipT9w9n9iVu4dBQ9_Qs,', 1, '', 'Never', 1);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
