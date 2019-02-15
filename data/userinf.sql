/*
Navicat MySQL Data Transfer

Source Server         : mydatabase
Source Server Version : 50709
Source Host           : localhost:3306
Source Database       : project

Target Server Type    : MYSQL
Target Server Version : 50709
File Encoding         : 65001

Date: 2019-02-15 15:49:22
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for userinf
-- ----------------------------
DROP TABLE IF EXISTS `userinf`;
CREATE TABLE `userinf` (
  `cid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`cid`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of userinf
-- ----------------------------
INSERT INTO `userinf` VALUES ('10', 'aaa', '111111', null, '23434234@qq.com');
INSERT INTO `userinf` VALUES ('11', 'kqf', '123456', null, '1440228038@qq.com');
INSERT INTO `userinf` VALUES ('12', 'malin', '123123', null, '324256656@qq.com');
INSERT INTO `userinf` VALUES ('13', 'lemon', '111111', null, '345345@qq.com');
SET FOREIGN_KEY_CHECKS=1;
