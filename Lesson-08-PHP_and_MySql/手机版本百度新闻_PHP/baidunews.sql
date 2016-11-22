-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2016-09-02 10:13:48
-- 服务器版本： 5.6.21
-- PHP Version: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `baidunews`
--

-- --------------------------------------------------------

--
-- 表的结构 `baijia`
--

CREATE TABLE IF NOT EXISTS `baijia` (
`ID` int(11) NOT NULL,
  `newsImage` text CHARACTER SET utf8 COLLATE utf8_esperanto_ci NOT NULL,
  `newsContent` text CHARACTER SET utf8 COLLATE utf8_esperanto_ci NOT NULL,
  `newsData` datetime NOT NULL,
  `type` varchar(11) CHARACTER SET utf8 COLLATE utf8_esperanto_ci DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `baijia`
--

INSERT INTO `baijia` (`ID`, `newsImage`, `newsContent`, `newsData`, `type`) VALUES
(1, 'http://timg01.bdimg.com/timg?pa&imgtype=3&sec=1439619614&di=c3f61e385606a51de08dba7755e55a39&quality=100&size=b218_146&src=http%3A%2F%2Fbos.nj.bpc.baidu.com%2Fv1%2Fmediaspot%2Fda58e9fee2e8586851b27a4a564e1256.png', '前京东最年轻副总裁余睿重回刘强东麾下 出任1号店CEO', '2016-08-30 12:00:00', 'baijia'),
(2, 'http://timg01.bdimg.com/timg?pa&imgtype=3&sec=1439619614&di=4c88520c2bf9cfe68a2337a0d2c76f55&quality=100&size=b218_146&src=http%3A%2F%2Fbos.nj.bpc.baidu.com%2Fv1%2Fmediaspot%2F154e4262620d8abcc9ae11b1ece03604.png', '人民币又要不行了！别再犹豫，买美元亏不了你！', '2016-08-31 05:00:00', 'baijia'),
(3, 'http://timg01.bdimg.com/timg?pa&imgtype=0&sec=1439619614&di=322db1d5b00a59a75942ad6561306dbd&quality=100&size=b218_146&src=http%3A%2F%2Fbos.nj.bpc.baidu.com%2Fv1%2Fmediaspot%2F01563de9577555276b922fc9b25c8147.jpeg', 'MI pay明天正式上线  手机触碰式刷卡的美好时代就要来了', '2016-09-01 07:00:00', 'baijia');

-- --------------------------------------------------------

--
-- 表的结构 `entertainment`
--

CREATE TABLE IF NOT EXISTS `entertainment` (
`ID` int(11) NOT NULL,
  `newsImage` text CHARACTER SET utf8 COLLATE utf8_esperanto_ci NOT NULL,
  `newsContent` text CHARACTER SET utf8 COLLATE utf8_estonian_ci NOT NULL,
  `newsData` datetime NOT NULL,
  `type` varchar(100) CHARACTER SET utf8 COLLATE utf8_esperanto_ci NOT NULL DEFAULT 'technology'
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `entertainment`
--

INSERT INTO `entertainment` (`ID`, `newsImage`, `newsContent`, `newsData`, `type`) VALUES
(1, 'http://t12.baidu.com/it/u=4255331696,952685551&fm=170&s=C3CA9445C2BECDCE0A25A46B0300905F&w=218&h=146&img.JPEG', '太拼!网友拼胡彦斌碎机票 23日厦门飞合肥', '2016-09-07 13:32:00', 'technology'),
(2, 'http://t12.baidu.com/it/u=1024355888,3534851504&fm=170&s=84907C93C8FEB68CE6B489240300F063&w=218&h=146&img.JPEG', '范玮琪老公整蛊保姆成瘾 内疚送乔丹鞋补偿(图) ', '2016-09-13 14:31:00', 'technology'),
(3, 'http://t12.baidu.com/it/u=3650117201,3334473030&fm=170&s=FB836B8F4E804CCA3895B0E203007070&w=218&h=146&img.JPEG', '奥运“网红”成娱乐圈 “香饽饽”', '2016-10-13 12:21:00', 'technology');

-- --------------------------------------------------------

--
-- 表的结构 `image`
--

CREATE TABLE IF NOT EXISTS `image` (
`ID` int(11) NOT NULL,
  `newsImage` text CHARACTER SET utf8 COLLATE utf8_esperanto_ci NOT NULL,
  `newsContent` text CHARACTER SET utf8 COLLATE utf8_estonian_ci NOT NULL,
  `newsData` datetime NOT NULL,
  `type` varchar(100) CHARACTER SET utf8 COLLATE utf8_esperanto_ci NOT NULL DEFAULT 'technology'
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `image`
--

INSERT INTO `image` (`ID`, `newsImage`, `newsContent`, `newsData`, `type`) VALUES
(1, 'http://t11.baidu.com/it/u=3327232891,3360277647&fm=170&s=9A81824100032F554CACD807030090C1&w=218&h=146&img.JPEG', '郭士强：李晓旭赴北京治疗 其余球员体测正常', '2016-06-13 07:00:00', 'technology'),
(2, 'http://t11.baidu.com/it/u=1699797175,2157893339&fm=170&s=159A4833938F414946E9F9CE000070B0&w=218&h=146&img.JPG', '北京银行上半年净利106亿元 手续费收入大增', '2016-07-05 17:34:00', 'technology'),
(3, 'http://t12.baidu.com/it/u=472356962,603375754&fm=170&s=A368F3105B0362DCCC68C957030050E3&w=218&h=146&img.JPEG', '北京市两限房可以出租吗 限价房能出租吗', '2016-08-26 15:00:00', 'technology');

-- --------------------------------------------------------

--
-- 表的结构 `local`
--

CREATE TABLE IF NOT EXISTS `local` (
`ID` int(11) NOT NULL,
  `newsImage` text CHARACTER SET utf8 COLLATE utf8_esperanto_ci NOT NULL,
  `newsContent` text CHARACTER SET utf8 COLLATE utf8_estonian_ci NOT NULL,
  `newsData` datetime NOT NULL,
  `type` varchar(100) CHARACTER SET utf8 COLLATE utf8_esperanto_ci NOT NULL DEFAULT 'technology'
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `local`
--

INSERT INTO `local` (`ID`, `newsImage`, `newsContent`, `newsData`, `type`) VALUES
(1, 'http://t11.baidu.com/it/u=185422474,2138050634&fm=170&s=7F1E678F7E5836C2D616527F03005078&w=218&h=146&img.JPEG', '海清当妈与《小别离》反差大 不禁止孩子恋爱 ', '2016-09-14 10:00:00', 'technology'),
(2, 'http://t10.baidu.com/it/u=84356865,3089813572&fm=170&s=BA80D44F8C126CD47788C1B80300C012&w=218&h=146&img.JPEG', '芒果TV“开撕”于正 杨幂袁姗姗或现身(图)', '2016-09-13 11:00:00', 'technology'),
(3, 'http://t10.baidu.com/it/u=4122101436,1413831544&fm=170&s=0AA1D9011EA24090C228B09A03008003&w=218&h=146&img.JPEG', '李治廷范冰冰恋情 李治廷上小S节目疑默认与范冰冰曾相爱', '2016-09-19 06:23:00', 'technology');

-- --------------------------------------------------------

--
-- 表的结构 `society`
--

CREATE TABLE IF NOT EXISTS `society` (
`ID` int(11) NOT NULL,
  `newsImage` text CHARACTER SET utf8 COLLATE utf8_esperanto_ci NOT NULL,
  `newsContent` text CHARACTER SET utf8 COLLATE utf8_estonian_ci NOT NULL,
  `newsData` datetime NOT NULL,
  `type` varchar(100) CHARACTER SET utf8 COLLATE utf8_esperanto_ci NOT NULL DEFAULT 'technology'
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `society`
--

INSERT INTO `society` (`ID`, `newsImage`, `newsContent`, `newsData`, `type`) VALUES
(1, 'http://t11.baidu.com/it/u=2610176173,1931020858&fm=170&s=FC66C54A1BE3BF6A0469301C030080C0&w=218&h=146&img.JPEG', '小偷逃跑跳江游30分钟精疲力尽 拽警方绳子上岸(图)', '2016-09-15 15:00:00', 'technology'),
(2, 'http://t10.baidu.com/it/u=1169150853,1958185929&fm=170&s=AB9A10C65EB69A415A42B6BD03004005&w=218&h=146&img.JPEG', '郑州不动产实行统一登记 抵押手续该如何办理？', '2016-09-15 15:00:00', 'technology'),
(3, 'http://t11.baidu.com/it/u=1422366064,3041650379&fm=170&s=3AA0218CCE375C9E8119F1490300E090&w=218&h=146&img.JPEG', '药店售卖日用品等可刷医保卡 立提示牌应对检查', '2016-09-14 13:00:00', 'technology'),
(4, 'http://b.hiphotos.baidu.com/news/q%3D100/sign=9ff1ba1ea1773912c2268161c8188675/42166d224f4a20a42fd1c06498529822730ed042.jpg', '习近平主席会见加拿大总理特鲁多', '2016-09-02 14:00:00', 'society');

-- --------------------------------------------------------

--
-- 表的结构 `technology`
--

CREATE TABLE IF NOT EXISTS `technology` (
`ID` int(11) NOT NULL,
  `newsImage` text CHARACTER SET utf8 COLLATE utf8_esperanto_ci NOT NULL,
  `newsContent` text CHARACTER SET utf8 COLLATE utf8_estonian_ci NOT NULL,
  `newsData` datetime NOT NULL,
  `type` varchar(100) CHARACTER SET utf8 COLLATE utf8_esperanto_ci NOT NULL DEFAULT 'technology'
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `technology`
--

INSERT INTO `technology` (`ID`, `newsImage`, `newsContent`, `newsData`, `type`) VALUES
(1, 'http://t10.baidu.com/it/u=115823580,1273850253&fm=170&s=6EE1E05EC29447DA8235E4CD0300B0E3&w=218&h=146&img.JPEG', '福建移动多措并举打击通讯信息诈骗', '2016-06-13 07:00:00', 'technology'),
(2, 'http://t12.baidu.com/it/u=3303661148,3248829288&fm=170&s=43B41962CCD763E74958B096010050E1&w=218&h=146&img.JPEG', '高通骁龙821官方细节公布：小核心提速38％', '2016-07-05 17:34:00', 'technology'),
(3, 'http://t12.baidu.com/it/u=2669928566,1471505931&fm=170&s=CBD10B8A47EF19097AABED810300F0C0&w=218&h=146&img.JPEG', '万户网络亮相内蒙古互联网+政务创新趋势研讨会', '2016-08-26 15:00:00', 'technology');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `baijia`
--
ALTER TABLE `baijia`
 ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `entertainment`
--
ALTER TABLE `entertainment`
 ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `image`
--
ALTER TABLE `image`
 ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `local`
--
ALTER TABLE `local`
 ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `society`
--
ALTER TABLE `society`
 ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `technology`
--
ALTER TABLE `technology`
 ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `baijia`
--
ALTER TABLE `baijia`
MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `entertainment`
--
ALTER TABLE `entertainment`
MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `image`
--
ALTER TABLE `image`
MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `local`
--
ALTER TABLE `local`
MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `society`
--
ALTER TABLE `society`
MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `technology`
--
ALTER TABLE `technology`
MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=9;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
