/*
Navicat MySQL Data Transfer

Source Server         : mydatabase
Source Server Version : 50709
Source Host           : localhost:3306
Source Database       : project

Target Server Type    : MYSQL
Target Server Version : 50709
File Encoding         : 65001

Date: 2019-02-15 15:49:41
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goodslist
-- ----------------------------
DROP TABLE IF EXISTS `goodslist`;
CREATE TABLE `goodslist` (
  `good_id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `url1` varchar(255) DEFAULT NULL,
  `url2` varchar(255) DEFAULT NULL,
  `nowprice` decimal(10,2) DEFAULT NULL,
  `oldprice` decimal(10,2) DEFAULT NULL,
  `salednum` int(11) DEFAULT NULL,
  `has` int(11) DEFAULT NULL,
  `belong1` varchar(255) DEFAULT NULL,
  `belong2` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `brand` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`good_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodslist
-- ----------------------------
INSERT INTO `goodslist` VALUES ('1', '【日本直邮】明治/Meiji 蘑菇形巧克力饼干 82g/盒 10盒装', '../img/goods001.jpg', '../img/goods001.jpg', '173.66', '185.14', '462', '567', '食品/饮料/酒类/生鲜', '> 饼干/糕点  > 饼干', '53141(635899422687542282)', '明治/MEIJI');
INSERT INTO `goodslist` VALUES ('2', '铁三角/AUDIO TECHNICA ATH-CKB70耳塞平衡动铁入耳女声音乐耳机 红色', '../img/goods002.jpg', '../img/goods002.jpg', '378.12', '493.71', '251', '44', '数码/电器/时尚影音', '> 耳机/耳麦  > 耳机', '63035(636390816660321033)', '铁三角/AUDIO');
INSERT INTO `goodslist` VALUES ('3', '象印/ZOJIRUSHI 2017新款日本原装象印车载不锈钢拧盖保温杯 SM-LA60-AD深蓝', '../img/goods003.jpg', '../img/goods003.jpg', '207.36', '308.57', '260', '345', '家居/日化', '> 厨具  > 水具/酒具', '63715(636431557934088993)', '象印/ZOJIRUSHI');
INSERT INTO `goodslist` VALUES ('4', '象印/ZOJIRUSHI 不锈钢真空花纹男女保温杯保冷杯 200ml SM-EC20-GC蓝色', '../img/goods004.jpg', '../img/goods004.jpg', '174.47', '216.00', '268', '45', '家居/日化', '> 厨具  > 水具/酒具', '63721(636431639635963993)', '象印/ZOJIRUSHI');
INSERT INTO `goodslist` VALUES ('5', '山本汉方 大麦若叶粉末100%青汁 3g*44袋', '../img/goods005.jpg', '../img/goods005.jpg', '72.58', '158.54', '2596', '3456', '食品/饮料/酒类/生鲜', '> 冲调/咖啡/茶  > 天然粉', '43631(B000P6XUFG)', '山本漢方製薬');
INSERT INTO `goodslist` VALUES ('6', '【EMS包邮包税】卡西欧/CASIO 经典男士腕表 AWG-M510SBG 防水石英电波手表 金色指针', '../img/goods006.jpg', '../img/goods006.jpg', '1349.01', '1499.00', '243', '21', '腕表/首饰/眼镜', '> 腕表  > 男表', '65238(636550743932363759)', '卡西欧/CASIO');
INSERT INTO `goodslist` VALUES ('7', '【日本直邮】花王/Kao 男士用(衣鞋车/房间)杀菌除臭喷雾360ml', '../img/goods007.jpg', '../img/goods007.jpg', '976.32', '976.32', '485', '432', '家居/日化', '> 生活日用  > 净化除味', '33393(B00IHPJMRW)', 'リセッシュ');
INSERT INTO `goodslist` VALUES ('8', '【日本直邮】花王/Kao 除菌EX室内空气衣料除臭剂 340ml 无香型 替换装', '../img/goods008.jpg', '../img/goods008-2.jpg', '60.73', '60.73', '470', '233', '家居/日化', '> 生活日用  > 净化除味', '33399(B00C60AP5C)', 'リセッシュ');
INSERT INTO `goodslist` VALUES ('9', '明治/MEIJI Meltykiss雪吻系列夹心巧克力5盒装 抹茶味 56g', '../img/goods009.jpg', '../img/goods009.jpg', '99.98', '117.26', '376', '23', '食品/饮料/酒类/生鲜', '> 零食/糖果/巧克力  > 巧克力', '52496(635888073404791039)', '明治/MEIJI');
INSERT INTO `goodslist` VALUES ('10', '【日本直邮】明治/Meiji 蘑菇形巧克力饼干 82g/盒 11盒装', '../img/goods001.jpg', '../img/goods001.jpg', '173.66', '185.14', '462', '567', '食品/饮料/酒类/生鲜', '> 饼干/糕点  > 饼干', '53141(635899422687542282)', '明治/MEIJI');
INSERT INTO `goodslist` VALUES ('11', '铁三角/AUDIO TECHNICA ATH-CKB71耳塞平衡动铁入耳女声音乐耳机 红色', '../img/goods002.jpg', '../img/goods002.jpg', '378.12', '493.71', '251', '44', '数码/电器/时尚影音', '> 耳机/耳麦  > 耳机', '63035(636390816660321033)', '铁三角/AUDIO');
INSERT INTO `goodslist` VALUES ('12', '象印/ZOJIRUSHI 2017新款日本原装象印车载不锈钢拧盖保温杯 SM-LA61-AD深蓝', '../img/goods003.jpg', '../img/goods003.jpg', '207.36', '308.57', '260', '345', '家居/日化', '> 厨具  > 水具/酒具', '63715(636431557934088993)', '象印/ZOJIRUSHI');
INSERT INTO `goodslist` VALUES ('13', '象印/ZOJIRUSHI 不锈钢真空花纹男女保温杯保冷杯 200ml SM-EC21-GC蓝色', '../img/goods004.jpg', '../img/goods004.jpg', '174.47', '216.00', '268', '45', '家居/日化', '> 厨具  > 水具/酒具', '63721(636431639635963993)', '象印/ZOJIRUSHI');
INSERT INTO `goodslist` VALUES ('14', '山本汉方 大麦若叶粉末100%青汁 3g*45袋', '../img/goods005.jpg', '../img/goods005.jpg', '72.58', '158.54', '25', '3456', '食品/饮料/酒类/生鲜', '> 冲调/咖啡/茶  > 天然粉', '43631(B000P6XUFG)', '山本漢方製薬');
INSERT INTO `goodslist` VALUES ('15', '【EMS包邮包税】卡西欧/CASIO 经典男士腕表 AWG-M511SBG 防水石英电波手表 金色指针', '../img/goods006.jpg', '../img/goods006.jpg', '1349.01', '1499.00', '243', '21', '腕表/首饰/眼镜', '> 腕表  > 男表', '65238(636550743932363759)', '卡西欧/CASIO');
INSERT INTO `goodslist` VALUES ('16', '【日本直邮】花王/Kao 男士用(衣鞋车/房间)杀菌除臭喷雾361ml', '../img/goods007.jpg', '../img/goods007.jpg', '976.32', '976.32', '48', '432', '家居/日化', '> 生活日用  > 净化除味', '33393(B00IHPJMRW)', 'リセッシュ');
INSERT INTO `goodslist` VALUES ('17', '【日本直邮】花王/Kao 除菌EX室内空气衣料除臭剂 341ml 无香型 替换装', '../img/goods008.jpg', '../img/goods008-2.jpg', '60.73', '60.73', '47', '233', '家居/日化', '> 生活日用  > 净化除味', '33399(B00C60AP5C)', 'リセッシュ');
INSERT INTO `goodslist` VALUES ('18', '明治/MEIJI Meltykiss雪吻系列夹心巧克力5盒装 抹茶味 57g', '../img/goods009.jpg', '../img/goods009.jpg', '99.98', '117.26', '376', '23', '食品/饮料/酒类/生鲜', '> 零食/糖果/巧克力  > 巧克力', '52496(635888073404791039)', '明治/MEIJI');
INSERT INTO `goodslist` VALUES ('19', '【日本直邮】明治/Meiji 蘑菇形巧克力饼干 82g/盒 12盒装', '../img/goods001.jpg', '../img/goods001.jpg', '173.66', '185.14', '462', '567', '食品/饮料/酒类/生鲜', '> 饼干/糕点  > 饼干', '53141(635899422687542282)', '明治/MEIJI');
INSERT INTO `goodslist` VALUES ('20', '铁三角/AUDIO TECHNICA ATH-CKB72耳塞平衡动铁入耳女声音乐耳机 红色', '../img/goods002.jpg', '../img/goods002.jpg', '378.12', '493.71', '251', '44', '数码/电器/时尚影音', '> 耳机/耳麦  > 耳机', '63035(636390816660321033)', '铁三角/AUDIO');
INSERT INTO `goodslist` VALUES ('21', '象印/ZOJIRUSHI 2017新款日本原装象印车载不锈钢拧盖保温杯 SM-LA62-AD深蓝', '../img/goods003.jpg', '../img/goods003.jpg', '207.36', '308.57', '260', '345', '家居/日化', '> 厨具  > 水具/酒具', '63715(636431557934088993)', '象印/ZOJIRUSHI');
INSERT INTO `goodslist` VALUES ('22', '象印/ZOJIRUSHI 不锈钢真空花纹男女保温杯保冷杯 200ml SM-EC22-GC蓝色', '../img/goods004.jpg', '../img/goods004.jpg', '174.47', '216.00', '268', '45', '家居/日化', '> 厨具  > 水具/酒具', '63721(636431639635963993)', '象印/ZOJIRUSHI');
INSERT INTO `goodslist` VALUES ('23', '山本汉方 大麦若叶粉末100%青汁 3g*46袋', '../img/goods005.jpg', '../img/goods005.jpg', '72.58', '158.54', '2', '3456', '食品/饮料/酒类/生鲜', '> 冲调/咖啡/茶  > 天然粉', '43631(B000P6XUFG)', '山本漢方製薬');
INSERT INTO `goodslist` VALUES ('24', '【EMS包邮包税】卡西欧/CASIO 经典男士腕表 AWG-M512SBG 防水石英电波手表 金色指针', '../img/goods006.jpg', '../img/goods006.jpg', '1349.01', '1499.00', '243', '21', '腕表/首饰/眼镜', '> 腕表  > 男表', '65238(636550743932363759)', '卡西欧/CASIO');
INSERT INTO `goodslist` VALUES ('25', '【日本直邮】花王/Kao 男士用(衣鞋车/房间)杀菌除臭喷雾362ml', '../img/goods007.jpg', '../img/goods007.jpg', '976.32', '976.32', '48', '432', '家居/日化', '> 生活日用  > 净化除味', '33393(B00IHPJMRW)', 'リセッシュ');
INSERT INTO `goodslist` VALUES ('26', '【日本直邮】花王/Kao 除菌EX室内空气衣料除臭剂 342ml 无香型 替换装', '../img/goods008.jpg', '../img/goods008-2.jpg', '60.73', '60.73', '470', '233', '家居/日化', '> 生活日用  > 净化除味', '33399(B00C60AP5C)', 'リセッシュ');
INSERT INTO `goodslist` VALUES ('27', '明治/MEIJI Meltykiss雪吻系列夹心巧克力5盒装 抹茶味 58g', '../img/goods009.jpg', '../img/goods009.jpg', '99.98', '117.26', '376', '23', '食品/饮料/酒类/生鲜', '> 零食/糖果/巧克力  > 巧克力', '52496(635888073404791039)', '明治/MEIJI');
INSERT INTO `goodslist` VALUES ('28', '【日本直邮】明治/Meiji 蘑菇形巧克力饼干 82g/盒 13盒装', '../img/goods001.jpg', '../img/goods001.jpg', '173.66', '185.14', '462', '567', '食品/饮料/酒类/生鲜', '> 饼干/糕点  > 饼干', '53141(635899422687542282)', '明治/MEIJI');
INSERT INTO `goodslist` VALUES ('29', '铁三角/AUDIO TECHNICA ATH-CKB73耳塞平衡动铁入耳女声音乐耳机 红色', '../img/goods002.jpg', '../img/goods002.jpg', '378.12', '493.71', '251', '44', '数码/电器/时尚影音', '> 耳机/耳麦  > 耳机', '63035(636390816660321033)', '铁三角/AUDIO');
INSERT INTO `goodslist` VALUES ('30', '象印/ZOJIRUSHI 2017新款日本原装象印车载不锈钢拧盖保温杯 SM-LA63-AD深蓝', '../img/goods003.jpg', '../img/goods003.jpg', '207.36', '308.57', '260', '345', '家居/日化', '> 厨具  > 水具/酒具', '63715(636431557934088993)', '象印/ZOJIRUSHI');
INSERT INTO `goodslist` VALUES ('31', '象印/ZOJIRUSHI 不锈钢真空花纹男女保温杯保冷杯 200ml SM-EC23-GC蓝色', '../img/goods004.jpg', '../img/goods004.jpg', '174.47', '216.00', '268', '45', '家居/日化', '> 厨具  > 水具/酒具', '63721(636431639635963993)', '象印/ZOJIRUSHI');
INSERT INTO `goodslist` VALUES ('32', '山本汉方 大麦若叶粉末100%青汁 3g*47袋', '../img/goods005.jpg', '../img/goods005.jpg', '72.58', '158.54', '267', '3456', '食品/饮料/酒类/生鲜', '> 冲调/咖啡/茶  > 天然粉', '43631(B000P6XUFG)', '山本漢方製薬');
INSERT INTO `goodslist` VALUES ('33', '【EMS包邮包税】卡西欧/CASIO 经典男士腕表 AWG-M513SBG 防水石英电波手表 金色指针', '../img/goods006.jpg', '../img/goods006.jpg', '1349.01', '1499.00', '243', '21', '腕表/首饰/眼镜', '> 腕表  > 男表', '65238(636550743932363759)', '卡西欧/CASIO');
INSERT INTO `goodslist` VALUES ('34', '【日本直邮】花王/Kao 男士用(衣鞋车/房间)杀菌除臭喷雾363ml', '../img/goods007.jpg', '../img/goods007.jpg', '976.32', '976.32', '234', '432', '家居/日化', '> 生活日用  > 净化除味', '33393(B00IHPJMRW)', 'リセッシュ');
INSERT INTO `goodslist` VALUES ('35', '【日本直邮】花王/Kao 除菌EX室内空气衣料除臭剂 343ml 无香型 替换装', '../img/goods008.jpg', '../img/goods008-2.jpg', '60.73', '60.73', '470', '233', '家居/日化', '> 生活日用  > 净化除味', '33399(B00C60AP5C)', 'リセッシュ');
INSERT INTO `goodslist` VALUES ('36', '明治/MEIJI Meltykiss雪吻系列夹心巧克力5盒装 抹茶味 59g', '../img/goods009.jpg', '../img/goods009.jpg', '99.98', '117.26', '376', '23', '食品/饮料/酒类/生鲜', '> 零食/糖果/巧克力  > 巧克力', '52496(635888073404791039)', '明治/MEIJI');
INSERT INTO `goodslist` VALUES ('37', '【日本直邮】明治/Meiji 蘑菇形巧克力饼干 82g/盒 14盒装', '../img/goods001.jpg', '../img/goods001.jpg', '173.66', '185.14', '462', '567', '食品/饮料/酒类/生鲜', '> 饼干/糕点  > 饼干', '53141(635899422687542282)', '明治/MEIJI');
INSERT INTO `goodslist` VALUES ('38', '铁三角/AUDIO TECHNICA ATH-CKB74耳塞平衡动铁入耳女声音乐耳机 红色', '../img/goods002.jpg', '../img/goods002.jpg', '378.12', '493.71', '251', '44', '数码/电器/时尚影音', '> 耳机/耳麦  > 耳机', '63035(636390816660321033)', '铁三角/AUDIO');
INSERT INTO `goodslist` VALUES ('39', '象印/ZOJIRUSHI 2017新款日本原装象印车载不锈钢拧盖保温杯 SM-LA64-AD深蓝', '../img/goods003.jpg', '../img/goods003.jpg', '207.36', '308.57', '260', '345', '家居/日化', '> 厨具  > 水具/酒具', '63715(636431557934088993)', '象印/ZOJIRUSHI');
INSERT INTO `goodslist` VALUES ('40', '象印/ZOJIRUSHI 不锈钢真空花纹男女保温杯保冷杯 200ml SM-EC24-GC蓝色', '../img/goods004.jpg', '../img/goods004.jpg', '174.47', '216.00', '268', '45', '家居/日化', '> 厨具  > 水具/酒具', '63721(636431639635963993)', '象印/ZOJIRUSHI');
INSERT INTO `goodslist` VALUES ('41', '山本汉方 大麦若叶粉末100%青汁 3g*48袋', '../img/goods005.jpg', '../img/goods005.jpg', '72.58', '158.54', '56', '3456', '食品/饮料/酒类/生鲜', '> 冲调/咖啡/茶  > 天然粉', '43631(B000P6XUFG)', '山本漢方製薬');
INSERT INTO `goodslist` VALUES ('42', '【EMS包邮包税】卡西欧/CASIO 经典男士腕表 AWG-M514SBG 防水石英电波手表 金色指针', '../img/goods006.jpg', '../img/goods006.jpg', '1349.01', '1499.00', '243', '21', '腕表/首饰/眼镜', '> 腕表  > 男表', '65238(636550743932363759)', '卡西欧/CASIO');
INSERT INTO `goodslist` VALUES ('43', '【日本直邮】花王/Kao 男士用(衣鞋车/房间)杀菌除臭喷雾364ml', '../img/goods007.jpg', '../img/goods007.jpg', '976.32', '976.32', '453', '432', '家居/日化', '> 生活日用  > 净化除味', '33393(B00IHPJMRW)', 'リセッシュ');
INSERT INTO `goodslist` VALUES ('44', '【日本直邮】花王/Kao 除菌EX室内空气衣料除臭剂 344ml 无香型 替换装', '../img/goods008.jpg', '../img/goods008-2.jpg', '60.73', '60.73', '470', '233', '家居/日化', '> 生活日用  > 净化除味', '33399(B00C60AP5C)', 'リセッシュ');
INSERT INTO `goodslist` VALUES ('45', '明治/MEIJI Meltykiss雪吻系列夹心巧克力5盒装 抹茶味 60g', '../img/goods009.jpg', '../img/goods009.jpg', '99.98', '117.26', '376', '23', '食品/饮料/酒类/生鲜', '> 零食/糖果/巧克力  > 巧克力', '52496(635888073404791039)', '明治/MEIJI');
INSERT INTO `goodslist` VALUES ('46', '【日本直邮】明治/Meiji 蘑菇形巧克力饼干 82g/盒 15盒装', '../img/goods001.jpg', '../img/goods001.jpg', '173.66', '185.14', '462', '567', '食品/饮料/酒类/生鲜', '> 饼干/糕点  > 饼干', '53141(635899422687542282)', '明治/MEIJI');
INSERT INTO `goodslist` VALUES ('47', '铁三角/AUDIO TECHNICA ATH-CKB75耳塞平衡动铁入耳女声音乐耳机 红色', '../img/goods002.jpg', '../img/goods002.jpg', '378.12', '493.71', '251', '44', '数码/电器/时尚影音', '> 耳机/耳麦  > 耳机', '63035(636390816660321033)', '铁三角/AUDIO');
INSERT INTO `goodslist` VALUES ('48', '象印/ZOJIRUSHI 2017新款日本原装象印车载不锈钢拧盖保温杯 SM-LA65-AD深蓝', '../img/goods003.jpg', '../img/goods003.jpg', '207.36', '308.57', '260', '345', '家居/日化', '> 厨具  > 水具/酒具', '63715(636431557934088993)', '象印/ZOJIRUSHI');
INSERT INTO `goodslist` VALUES ('49', '象印/ZOJIRUSHI 不锈钢真空花纹男女保温杯保冷杯 200ml SM-EC25-GC蓝色', '../img/goods004.jpg', '../img/goods004.jpg', '174.47', '216.00', '268', '45', '家居/日化', '> 厨具  > 水具/酒具', '63721(636431639635963993)', '象印/ZOJIRUSHI');
INSERT INTO `goodslist` VALUES ('50', '山本汉方 大麦若叶粉末100%青汁 3g*49袋', '../img/goods005.jpg', '../img/goods005.jpg', '72.58', '158.54', '89', '3456', '食品/饮料/酒类/生鲜', '> 冲调/咖啡/茶  > 天然粉', '43631(B000P6XUFG)', '山本漢方製薬');
INSERT INTO `goodslist` VALUES ('51', '【EMS包邮包税】卡西欧/CASIO 经典男士腕表 AWG-M515SBG 防水石英电波手表 金色指针', '../img/goods006.jpg', '../img/goods006.jpg', '1349.01', '1499.00', '243', '21', '腕表/首饰/眼镜', '> 腕表  > 男表', '65238(636550743932363759)', '卡西欧/CASIO');
INSERT INTO `goodslist` VALUES ('52', '【日本直邮】花王/Kao 男士用(衣鞋车/房间)杀菌除臭喷雾365ml', '../img/goods007.jpg', '../img/goods007.jpg', '976.32', '976.32', '145', '432', '家居/日化', '> 生活日用  > 净化除味', '33393(B00IHPJMRW)', 'リセッシュ');
INSERT INTO `goodslist` VALUES ('53', '【日本直邮】花王/Kao 除菌EX室内空气衣料除臭剂 345ml 无香型 替换装', '../img/goods008.jpg', '../img/goods008-2.jpg', '60.73', '60.73', '470', '233', '家居/日化', '> 生活日用  > 净化除味', '33399(B00C60AP5C)', 'リセッシュ');
INSERT INTO `goodslist` VALUES ('54', '明治/MEIJI Meltykiss雪吻系列夹心巧克力5盒装 抹茶味 61g', '../img/goods009.jpg', '../img/goods009.jpg', '99.98', '117.26', '376', '23', '食品/饮料/酒类/生鲜', '> 零食/糖果/巧克力  > 巧克力', '52496(635888073404791039)', '明治/MEIJI');
INSERT INTO `goodslist` VALUES ('55', '【日本直邮】明治/Meiji 蘑菇形巧克力饼干 82g/盒 16盒装', '../img/goods001.jpg', '../img/goods001.jpg', '173.66', '185.14', '462', '567', '食品/饮料/酒类/生鲜', '> 饼干/糕点  > 饼干', '53141(635899422687542282)', '明治/MEIJI');
INSERT INTO `goodslist` VALUES ('56', '铁三角/AUDIO TECHNICA ATH-CKB76耳塞平衡动铁入耳女声音乐耳机 红色', '../img/goods002.jpg', '../img/goods002.jpg', '378.12', '493.71', '251', '44', '数码/电器/时尚影音', '> 耳机/耳麦  > 耳机', '63035(636390816660321033)', '铁三角/AUDIO');
INSERT INTO `goodslist` VALUES ('57', '象印/ZOJIRUSHI 2017新款日本原装象印车载不锈钢拧盖保温杯 SM-LA66-AD深蓝', '../img/goods003.jpg', '../img/goods003.jpg', '207.36', '308.57', '260', '345', '家居/日化', '> 厨具  > 水具/酒具', '63715(636431557934088993)', '象印/ZOJIRUSHI');
INSERT INTO `goodslist` VALUES ('58', '象印/ZOJIRUSHI 不锈钢真空花纹男女保温杯保冷杯 200ml SM-EC26-GC蓝色', '../img/goods004.jpg', '../img/goods004.jpg', '174.47', '216.00', '268', '45', '家居/日化', '> 厨具  > 水具/酒具', '63721(636431639635963993)', '象印/ZOJIRUSHI');
INSERT INTO `goodslist` VALUES ('59', '山本汉方 大麦若叶粉末100%青汁 3g*50袋', '../img/goods005.jpg', '../img/goods005.jpg', '72.58', '158.54', '25', '3456', '食品/饮料/酒类/生鲜', '> 冲调/咖啡/茶  > 天然粉', '43631(B000P6XUFG)', '山本漢方製薬');
INSERT INTO `goodslist` VALUES ('60', '【EMS包邮包税】卡西欧/CASIO 经典男士腕表 AWG-M516SBG 防水石英电波手表 金色指针', '../img/goods006.jpg', '../img/goods006.jpg', '1349.01', '1499.00', '243', '21', '腕表/首饰/眼镜', '> 腕表  > 男表', '65238(636550743932363759)', '卡西欧/CASIO');
INSERT INTO `goodslist` VALUES ('61', '【日本直邮】花王/Kao 男士用(衣鞋车/房间)杀菌除臭喷雾366ml', '../img/goods007.jpg', '../img/goods007.jpg', '976.32', '976.32', '345', '432', '家居/日化', '> 生活日用  > 净化除味', '33393(B00IHPJMRW)', 'リセッシュ');
INSERT INTO `goodslist` VALUES ('62', '【日本直邮】花王/Kao 除菌EX室内空气衣料除臭剂 346ml 无香型 替换装', '../img/goods008.jpg', '../img/goods008-2.jpg', '60.73', '60.73', '470', '233', '家居/日化', '> 生活日用  > 净化除味', '33399(B00C60AP5C)', 'リセッシュ');
INSERT INTO `goodslist` VALUES ('63', '明治/MEIJI Meltykiss雪吻系列夹心巧克力5盒装 抹茶味 62g', '../img/goods009.jpg', '../img/goods009.jpg', '99.98', '117.26', '376', '23', '食品/饮料/酒类/生鲜', '> 零食/糖果/巧克力  > 巧克力', '52496(635888073404791039)', '明治/MEIJI');
INSERT INTO `goodslist` VALUES ('64', '【日本直邮】明治/Meiji 蘑菇形巧克力饼干 82g/盒 17盒装', '../img/goods001.jpg', '../img/goods001.jpg', '173.66', '185.14', '462', '567', '食品/饮料/酒类/生鲜', '> 饼干/糕点  > 饼干', '53141(635899422687542282)', '明治/MEIJI');
INSERT INTO `goodslist` VALUES ('65', '铁三角/AUDIO TECHNICA ATH-CKB77耳塞平衡动铁入耳女声音乐耳机 红色', '../img/goods002.jpg', '../img/goods002.jpg', '378.12', '493.71', '251', '44', '数码/电器/时尚影音', '> 耳机/耳麦  > 耳机', '63035(636390816660321033)', '铁三角/AUDIO');
INSERT INTO `goodslist` VALUES ('66', '象印/ZOJIRUSHI 2017新款日本原装象印车载不锈钢拧盖保温杯 SM-LA67-AD深蓝', '../img/goods003.jpg', '../img/goods003.jpg', '207.36', '308.57', '260', '345', '家居/日化', '> 厨具  > 水具/酒具', '63715(636431557934088993)', '象印/ZOJIRUSHI');
INSERT INTO `goodslist` VALUES ('67', '象印/ZOJIRUSHI 不锈钢真空花纹男女保温杯保冷杯 200ml SM-EC27-GC蓝色', '../img/goods004.jpg', '../img/goods004.jpg', '174.47', '216.00', '268', '45', '家居/日化', '> 厨具  > 水具/酒具', '63721(636431639635963993)', '象印/ZOJIRUSHI');
INSERT INTO `goodslist` VALUES ('68', '山本汉方 大麦若叶粉末100%青汁 3g*51袋', '../img/goods005.jpg', '../img/goods005.jpg', '72.58', '158.54', '96', '3456', '食品/饮料/酒类/生鲜', '> 冲调/咖啡/茶  > 天然粉', '43631(B000P6XUFG)', '山本漢方製薬');
INSERT INTO `goodslist` VALUES ('69', '【EMS包邮包税】卡西欧/CASIO 经典男士腕表 AWG-M517SBG 防水石英电波手表 金色指针', '../img/goods006.jpg', '../img/goods006.jpg', '1349.01', '1499.00', '243', '21', '腕表/首饰/眼镜', '> 腕表  > 男表', '65238(636550743932363759)', '卡西欧/CASIO');
INSERT INTO `goodslist` VALUES ('70', '【日本直邮】花王/Kao 男士用(衣鞋车/房间)杀菌除臭喷雾367ml', '../img/goods007.jpg', '../img/goods007.jpg', '976.32', '976.32', '423', '432', '家居/日化', '> 生活日用  > 净化除味', '33393(B00IHPJMRW)', 'リセッシュ');
INSERT INTO `goodslist` VALUES ('71', '【日本直邮】花王/Kao 除菌EX室内空气衣料除臭剂 347ml 无香型 替换装', '../img/goods008.jpg', '../img/goods008-2.jpg', '60.73', '60.73', '470', '233', '家居/日化', '> 生活日用  > 净化除味', '33399(B00C60AP5C)', 'リセッシュ');
INSERT INTO `goodslist` VALUES ('72', '明治/MEIJI Meltykiss雪吻系列夹心巧克力5盒装 抹茶味 63g', '../img/goods009.jpg', '../img/goods009.jpg', '99.98', '117.26', '376', '23', '食品/饮料/酒类/生鲜', '> 零食/糖果/巧克力  > 巧克力', '52496(635888073404791039)', '明治/MEIJI');
INSERT INTO `goodslist` VALUES ('73', '【日本直邮】明治/Meiji 蘑菇形巧克力饼干 82g/盒 18盒装', '../img/goods001.jpg', '../img/goods001.jpg', '173.66', '185.14', '462', '567', '食品/饮料/酒类/生鲜', '> 饼干/糕点  > 饼干', '53141(635899422687542282)', '明治/MEIJI');
INSERT INTO `goodslist` VALUES ('74', '铁三角/AUDIO TECHNICA ATH-CKB78耳塞平衡动铁入耳女声音乐耳机 红色', '../img/goods002.jpg', '../img/goods002.jpg', '378.12', '493.71', '251', '44', '数码/电器/时尚影音', '> 耳机/耳麦  > 耳机', '63035(636390816660321033)', '铁三角/AUDIO');
INSERT INTO `goodslist` VALUES ('75', '象印/ZOJIRUSHI 2017新款日本原装象印车载不锈钢拧盖保温杯 SM-LA68-AD深蓝', '../img/goods003.jpg', '../img/goods003.jpg', '207.36', '308.57', '260', '345', '家居/日化', '> 厨具  > 水具/酒具', '63715(636431557934088993)', '象印/ZOJIRUSHI');
INSERT INTO `goodslist` VALUES ('76', '象印/ZOJIRUSHI 不锈钢真空花纹男女保温杯保冷杯 200ml SM-EC28-GC蓝色', '../img/goods004.jpg', '../img/goods004.jpg', '174.47', '216.00', '268', '45', '家居/日化', '> 厨具  > 水具/酒具', '63721(636431639635963993)', '象印/ZOJIRUSHI');
INSERT INTO `goodslist` VALUES ('77', '山本汉方 大麦若叶粉末100%青汁 3g*52袋', '../img/goods005.jpg', '../img/goods005.jpg', '72.58', '158.54', '96', '3456', '食品/饮料/酒类/生鲜', '> 冲调/咖啡/茶  > 天然粉', '43631(B000P6XUFG)', '山本漢方製薬');
INSERT INTO `goodslist` VALUES ('78', '【EMS包邮包税】卡西欧/CASIO 经典男士腕表 AWG-M518SBG 防水石英电波手表 金色指针', '../img/goods006.jpg', '../img/goods006.jpg', '1349.01', '1499.00', '243', '21', '腕表/首饰/眼镜', '> 腕表  > 男表', '65238(636550743932363759)', '卡西欧/CASIO');
INSERT INTO `goodslist` VALUES ('79', '【日本直邮】花王/Kao 男士用(衣鞋车/房间)杀菌除臭喷雾368ml', '../img/goods007.jpg', '../img/goods007.jpg', '976.32', '976.32', '212', '432', '家居/日化', '> 生活日用  > 净化除味', '33393(B00IHPJMRW)', 'リセッシュ');
INSERT INTO `goodslist` VALUES ('80', '【日本直邮】花王/Kao 除菌EX室内空气衣料除臭剂 348ml 无香型 替换装', '../img/goods008.jpg', '../img/goods008-2.jpg', '60.73', '60.73', '470', '233', '家居/日化', '> 生活日用  > 净化除味', '33399(B00C60AP5C)', 'リセッシュ');
INSERT INTO `goodslist` VALUES ('81', '明治/MEIJI Meltykiss雪吻系列夹心巧克力5盒装 抹茶味 56g', '../img/goods009.jpg', '../img/goods009.jpg', '99.98', '117.26', '376', '23', '食品/饮料/酒类/生鲜', '> 零食/糖果/巧克力  > 巧克力', '52496(635888073404791039)', '明治/MEIJI');
SET FOREIGN_KEY_CHECKS=1;
