/*
 Navicat Premium Data Transfer

 Source Server         : local
 Source Server Type    : MySQL
 Source Server Version : 80027
 Source Host           : localhost:3306
 Source Schema         : user

 Target Server Type    : MySQL
 Target Server Version : 80027
 File Encoding         : 65001

 Date: 02/12/2022 21:29:52
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `name` varchar(255) DEFAULT NULL,
  `biography` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` (`name`, `biography`, `id`) VALUES ('Marilyn Monroe', 'Marilyn Monroe was an American actress, comedienne, singer, and model. She became one of the world\'s most enduring iconic figures and is remembered both for her winsome embodiment of the Hollywood sex symbol and her tragic personal and professional struggles within the film industry. Her life and ...\n\n', 1);
INSERT INTO `user` (`name`, `biography`, `id`) VALUES ('Jessica Simpson', 'A talented artist with universal appeal, Jessica Simpson is an international star and media darling who has taken the music, fashion and entertainment industries by storm. Jessica burst on to the scene with her unmistakable voice and has since released 8 hit-producing albums. She has starred on the...\n\n', 2);
INSERT INTO `user` (`name`, `biography`, `id`) VALUES ('Ashlee Simpson', 'Ashlee Nicolle Simpson was born on October 3, 1984 in Waco, Texas, to Tina Simpson (née Drew) and Joe Simpson, who is a psychologist and Baptist youth minister. Ashlee started dancing at the age of 4 and by the time she was 11 enjoyed the status of being the youngest person ever admitted to the ...\n\n', 3);
INSERT INTO `user` (`name`, `biography`, `id`) VALUES ('Britney Spears', 'Britney Jean Spears was born on December 2, 1981 in McComb, Mississippi & raised in Kentwood, Louisiana. As a child, Britney attended dance classes, and she was great at gymnastics, winning many competitions and the like. But, most of all, Britney loved to sing. At age 8, Britney tried out for The ...\n\n', 4);
INSERT INTO `user` (`name`, `biography`, `id`) VALUES ('Jamie Lynn Spears', 'Jamie Lynn Spears was born on April 4, 1991 in McComb, Mississippi and raised in Kentwood, Louisiana to Lynne Spears & Jamie Spears. Her family also includes her older brother, Bryan Spears, and her older sister, Britney Spears. Jamie Lynn has always been a performer, like her sister Britney. She ...', 5);
INSERT INTO `user` (`name`, `biography`, `id`) VALUES ('Sienna Miller', 'Sienna Rose Diana Miller was born in New York City, but was raised in London, United Kingdom. Her father, Edwin \"Ed\" Miller, who is American-born, is an investment banker and a dealer in Modern Chinese paintings. Her mother, Josephine \"Jo\" Miller, was a South African model and a personal assistant ...\n\n', 6);
INSERT INTO `user` (`name`, `biography`, `id`) VALUES ('Taylor Swift', 'Taylor Alison Swift is a multi-Grammy award-winning American singer/songwriter who, in 2010 at the age of 20, became the youngest artist in history to win the Grammy Award for Album of the Year. In 2011 Swift was named Billboard\'s Woman of the Year. She also has been named the American Music Awards...', 7);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
