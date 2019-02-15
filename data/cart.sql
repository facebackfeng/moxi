/*
Navicat MySQL Data Transfer

Source Server         : mydatabase
Source Server Version : 50709
Source Host           : localhost:3306
Source Database       : project

Target Server Type    : MYSQL
Target Server Version : 50709
File Encoding         : 65001

Date: 2019-02-15 15:49:56
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for cart
-- ----------------------------
DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart` (
  `good_id` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `nowprice` decimal(10,2) DEFAULT NULL,
  `num` int(11) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `has` int(11) DEFAULT NULL,
  `cid` int(10) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cart
-- ----------------------------
INSERT INTO `cart` VALUES ('4', '象印/ZOJIRUSHI 不锈钢真空花纹男女保温杯保冷杯 200ml SM-EC20-GC蓝色', '174.47', '10', '../img/goods004.jpg', '粉金色', '45', '10');
INSERT INTO `cart` VALUES ('3', '象印/ZOJIRUSHI 2017新款日本原装象印车载不锈钢拧盖保温杯 SM-LA60-AD深蓝', '207.36', '9', '../img/goods003.jpg', '粉色', '345', '10');
INSERT INTO `cart` VALUES ('4', '象印/ZOJIRUSHI 不锈钢真空花纹男女保温杯保冷杯 200ml SM-EC20-GC蓝色', '174.47', '7', '../img/goods004.jpg', '红色', '45', '10');
INSERT INTO `cart` VALUES ('2', '铁三角/AUDIO TECHNICA ATH-CKB70耳塞平衡动铁入耳女声音乐耳机 红色', '378.12', '8', '../img/goods002.jpg', '红色', '44', '10');
INSERT INTO `cart` VALUES ('3', '象印/ZOJIRUSHI 2017新款日本原装象印车载不锈钢拧盖保温杯 SM-LA60-AD深蓝', '207.36', '9', '../img/goods003.jpg', '粉金色', '345', '11');
INSERT INTO `cart` VALUES ('6', '【EMS包邮包税】卡西欧/CASIO 经典男士腕表 AWG-M510SBG 防水石英电波手表 金色指针', '1349.01', '1', '../img/goods006.jpg', '白色', '21', '11');
INSERT INTO `cart` VALUES ('6', '【EMS包邮包税】卡西欧/CASIO 经典男士腕表 AWG-M510SBG 防水石英电波手表 金色指针', '1349.01', '9', '../img/goods006.jpg', '粉金色', '21', '11');
INSERT INTO `cart` VALUES ('3', '象印/ZOJIRUSHI 2017新款日本原装象印车载不锈钢拧盖保温杯 SM-LA60-AD深蓝', '207.36', '1', '../img/goods003.jpg', '白色', '345', '10');
INSERT INTO `cart` VALUES ('3', '象印/ZOJIRUSHI 2017新款日本原装象印车载不锈钢拧盖保温杯 SM-LA60-AD深蓝', '207.36', '1', '../img/goods003.jpg', '白色', '345', '11');
INSERT INTO `cart` VALUES ('17', '【日本直邮】花王/Kao 除菌EX室内空气衣料除臭剂 341ml 无香型 替换装', '60.73', '5', '../img/goods008.jpg', '白色', '233', '13');
SET FOREIGN_KEY_CHECKS=1;
