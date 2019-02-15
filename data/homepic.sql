/*
Navicat MySQL Data Transfer

Source Server         : mydatabase
Source Server Version : 50709
Source Host           : localhost:3306
Source Database       : project

Target Server Type    : MYSQL
Target Server Version : 50709
File Encoding         : 65001

Date: 2019-02-15 15:49:32
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for homepic
-- ----------------------------
DROP TABLE IF EXISTS `homepic`;
CREATE TABLE `homepic` (
  `url` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of homepic
-- ----------------------------
INSERT INTO `homepic` VALUES ('img/85636591453100432488.jpg');
INSERT INTO `homepic` VALUES ('img/85636591453726213738.jpg');
INSERT INTO `homepic` VALUES ('img/85636591458931838738.jpg');
INSERT INTO `homepic` VALUES ('img/85636591460782151238.jpg');
INSERT INTO `homepic` VALUES ('img/85636591450238244988.png');
INSERT INTO `homepic` VALUES ('img/85636591451285119988.png');
INSERT INTO `homepic` VALUES ('img/85636591462192776238.jpg');
INSERT INTO `homepic` VALUES ('img/85636591453848244988.jpg');
INSERT INTO `homepic` VALUES ('img/85636591453945901238.jpg');
INSERT INTO `homepic` VALUES ('img/85636591453995432488.png');
INSERT INTO `homepic` VALUES ('img/85636591454034494988.png');
INSERT INTO `homepic` VALUES ('img/1636080674199779922.png');
SET FOREIGN_KEY_CHECKS=1;
