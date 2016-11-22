-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2016-09-21 07:41:09
-- 服务器版本： 5.6.21
-- PHP Version: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `newsdata`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE IF NOT EXISTS `news` (
`newsid` int(10) unsigned NOT NULL,
  `newstype` text NOT NULL,
  `newsimg` varchar(300) NOT NULL,
  `newscontent` text NOT NULL,
  `newstime` date NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`newsid`, `newstype`, `newsimg`, `newscontent`, `newstime`) VALUES
(3, 'type5', 'http://t11.baidu.com/it/u=2610176173,1931020858&fm=170&s=FC66C54A1BE3BF6A0469301C030080C0&w=218&h=146&img.JPEG', '此次最高检报告两次提到羁押必要性审查的重要，这与此前最高检出台的专门性文件遥相呼应。', '2016-03-01'),
(4, 'type5', 'http://t10.baidu.com/it/u=1169150853,1958185929&fm=170&s=AB9A10C65EB69A415A42B6BD03004005&w=218&h=146&img.JPEG', '买房人的首付不能是借的。', '2016-03-10'),
(5, 'type5', 'http://t11.baidu.com/it/u=1422366064,3041650379&fm=170&s=3AA0218CCE375C9E8119F1490300E090&w=218&h=146&img.JPEG', '一向声称不缺钱的顺丰创始人王卫，突然出手将顺丰推向国内的资本市场。', '2016-03-10'),
(6, 'type2', 'http://t11.baidu.com/it/u=3327232891,3360277647&fm=170&s=9A81824100032F554CACD807030090C1&w=218&h=146&img.JPEG', '万众瞩目的人机大战已经完成两回合，机器超出大多数人的想象获胜了，而且是大胜，棋坛震动。', '2016-03-10'),
(8, 'type6', 'http://t12.baidu.com/it/u=3303661148,3248829288&fm=170&s=43B41962CCD763E74958B096010050E1&w=218&h=146&img.JPEG', '这一次人机世纪大战之所以会引发如此大的传播度，这其中绝对少不了众多科技公司在暗中使劲。', '2016-03-13'),
(9, 'type3', 'http://t11.baidu.com/it/u=1699797175,2157893339&fm=170&s=159A4833938F414946E9F9CE000070B0&w=218&h=146&img.JPG', '产品经理第三项核心技能就是以上这些，推动者、合作桥梁、组织润滑剂。', '2016-03-08'),
(10, 'type3', 'http://t12.baidu.com/it/u=472356962,603375754&fm=170&s=A368F3105B0362DCCC68C957030050E3&w=218&h=146&img.JPEG', '房地产政策推动一线城市投资需求抬头。', '2016-03-08'),
(11, 'type1', 'http://timg01.bdimg.com/timg?pa&imgtype=3&sec=1439619614&di=4c88520c2bf9cfe68a2337a0d2c76f55&quality=100&size=b218_146&src=http%3A%2F%2Fbos.nj.bpc.baidu.com%2Fv1%2Fmediaspot%2F154e4262620d8abcc9ae11b1ece03604.png', '迅雷上季度陷入亏损，而且收入陷入停滞，在中国高度竞争的在线视频市场上，这对规模已经很小的腾讯来...', '2016-03-09'),
(12, 'type4', 'http://t11.baidu.com/it/u=185422474,2138050634&fm=170&s=7F1E678F7E5836C2D616527F03005078&w=218&h=146&img.JPEG', '这就是马斯克和阿尔特曼传递出来的信息。', '2016-03-07'),
(13, 'type4', 'http://t10.baidu.com/it/u=84356865,3089813572&fm=170&s=BA80D44F8C126CD47788C1B80300C012&w=218&h=146&img.JPEG', '只是因为它在几乎所有方面都能带来更好的体验：更好的驾驶体验、更好的拥有体验，以及更好的文化体验。', '2016-03-02'),
(14, 'type6', 'http://t12.baidu.com/it/u=2669928566,1471505931&fm=170&s=CBD10B8A47EF19097AABED810300F0C0&w=218&h=146&img.JPEG', '黑客还是设法盗走了8100万美元，这是目前已知的最大银行盗窃案。', '2016-03-08'),
(16, 'type4', 'http://t12.baidu.com/it/u=2669928566,1471505931&fm=170&s=CBD10B8A47EF19097AABED810300F0C0&w=218&h=146&img.JPEG', '我们都知道人工智能迟早赶上人类，只是不愿意也没有料到超越来的怎么快，以致还来不及做好防止下一步...', '2016-03-08'),
(18, 'type1', 'http://timg01.bdimg.com/timg?pa&imgtype=0&sec=1439619614&di=322db1d5b00a59a75942ad6561306dbd&quality=100&size=b218_146&src=http%3A%2F%2Fbos.nj.bpc.baidu.com%2Fv1%2Fmediaspot%2F01563de9577555276b922fc9b25c8147.jpeg', '我们都知道人工智能迟早赶上人类，只是不愿意也没有料到超越来的怎么快，以致还来不及做好防止下一步...', '2016-03-08'),
(19, 'type2', 'http://timg01.bdimg.com/timg?pa&imgtype=3&sec=1439619614&di=c3f61e385606a51de08dba7755e55a39&quality=100&size=b218_146&src=http%3A%2F%2Fbos.nj.bpc.baidu.com%2Fv1%2Fmediaspot%2Fda58e9fee2e8586851b27a4a564e1256.png	', '在讨论小镇青年问题时曾指出，时代变了，支撑电影市场的三四线城市观众80后90后的都市中产青年观...', '2016-03-16'),
(20, 'type2', 'http://b.hiphotos.baidu.com/news/w%3D638/sign=92aaf734560fd9f9a017566a1d2cd42b/902397dda144ad3420d05fcfd7a20cf431ad850f.jpg', '造就：线下剧院式的演讲平台，发现最有创造力的思想。', '2016-03-16'),
(21, 'type6', 'http://t12.baidu.com/it/u=2669928566,1471505931&fm=170&s=CBD10B8A47EF19097AABED810300F0C0&w=218&h=146&img.JPEG	', '房地产政策推动一线城市投资需求抬头。', '2016-09-28'),
(22, 'type3', 'http://t11.baidu.com/it/u=2610176173,1931020858&fm=170&s=FC66C54A1BE3BF6A0469301C030080C0&w=218&h=146&img.JPEG', '此次最高检报告两次提到羁押必要性审查的重要，这与此前最高检出台的专门性文件遥相呼应。', '2016-03-01'),
(30, 'type4', 'http://t10.baidu.com/it/u=84356865,3089813572&fm=170&s=BA80D44F8C126CD47788C1B80300C012&w=218&h=146&img.JPEG', '只是因为它在几乎所有方面都能带来更好的体验：更好的驾驶体验、更好的拥有体验，以及更好的文化体验。', '2016-03-02'),
(31, 'type2', 'http://t11.baidu.com/it/u=185422474,2138050634&fm=170&s=7F1E678F7E5836C2D616527F03005078&w=218&h=146&img.JPEG', '这就是马斯克和阿尔特曼传递出来的信息。', '2016-03-07'),
(32, 'type6', 'http://t12.baidu.com/it/u=472356962,603375754&fm=170&s=A368F3105B0362DCCC68C957030050E3&w=218&h=146&img.JPEG', '房地产政策推动一线城市投资需求抬头。', '2016-03-08'),
(33, 'type3', 'http://t12.baidu.com/it/u=2669928566,1471505931&fm=170&s=CBD10B8A47EF19097AABED810300F0C0&w=218&h=146&img.JPEG	', '房地产政策推动一线城市投资需求抬头。', '2016-09-28'),
(37, 'type1', 'http://t12.baidu.com/it/u=2669928566,1471505931&fm=170&s=CBD10B8A47EF19097AABED810300F0C0&w=218&h=146&img.JPEG', '我们都知道人工智能迟早赶上人类，只是不愿意也没有料到超越来的怎么快，以致还来不及做好防止下一步...', '2016-03-08'),
(43, 'type1', '添加图片', '添加内容', '2016-09-22');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
 ADD PRIMARY KEY (`newsid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
MODIFY `newsid` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=55;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
