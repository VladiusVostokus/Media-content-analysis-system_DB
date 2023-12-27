-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema mcanalyzer
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mcanalyzer` ;

-- -----------------------------------------------------
-- Schema mcanalyzer
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mcanalyzer` DEFAULT CHARACTER SET utf8mb3 ;
USE `mcanalyzer` ;

-- -----------------------------------------------------
-- Table `mcanalyzer`.`role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mcanalyzer`.`role` ;

CREATE TABLE IF NOT EXISTS `mcanalyzer`.`role` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mcanalyzer`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mcanalyzer`.`user` ;

CREATE TABLE IF NOT EXISTS `mcanalyzer`.`user` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `password` VARCHAR(255) NOT NULL,
  `nickname` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `Role_id` INT NOT NULL,
  PRIMARY KEY (`id`, `Role_id`),
  INDEX `fk_User_Role1_idx` (`Role_id` ASC) VISIBLE,
  UNIQUE INDEX `nickname_UNIQUE` (`nickname` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  CONSTRAINT `fk_User_Role1`
    FOREIGN KEY (`Role_id`)
    REFERENCES `mcanalyzer`.`role` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mcanalyzer`.`mentionreport`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mcanalyzer`.`mentionreport` ;

CREATE TABLE IF NOT EXISTS `mcanalyzer`.`mentionreport` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(255) NOT NULL,
  `creationDate` DATETIME NOT NULL,
  `title` VARCHAR(45) NOT NULL,
  `User_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`, `User_id`),
  INDEX `fk_MentionReport_User1_idx` (`User_id` ASC) VISIBLE,
  CONSTRAINT `fk_MentionReport_User1`
    FOREIGN KEY (`User_id`)
    REFERENCES `mcanalyzer`.`user` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mcanalyzer`.`pubrequest`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mcanalyzer`.`pubrequest` ;

CREATE TABLE IF NOT EXISTS `mcanalyzer`.`pubrequest` (
  `User_id` INT UNSIGNED NOT NULL,
  `date` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`User_id`),
  INDEX `fk_PubRequest_User1_idx` (`User_id` ASC) VISIBLE,
  CONSTRAINT `fk_PubRequest_User1`
    FOREIGN KEY (`User_id`)
    REFERENCES `mcanalyzer`.`user` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mcanalyzer`.`pubreview`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mcanalyzer`.`pubreview` ;

CREATE TABLE IF NOT EXISTS `mcanalyzer`.`pubreview` (
  `status` VARCHAR(45) NOT NULL,
  `User_id` INT UNSIGNED NOT NULL,
  `PubRequest_User_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`User_id`, `PubRequest_User_id`),
  INDEX `fk_PubReview_PubRequest1_idx` (`PubRequest_User_id` ASC) VISIBLE,
  CONSTRAINT `fk_PubReview_PubRequest1`
    FOREIGN KEY (`PubRequest_User_id`)
    REFERENCES `mcanalyzer`.`pubrequest` (`User_id`),
  CONSTRAINT `fk_PubReview_User1`
    FOREIGN KEY (`User_id`)
    REFERENCES `mcanalyzer`.`user` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mcanalyzer`.`resultdata`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mcanalyzer`.`resultdata` ;

CREATE TABLE IF NOT EXISTS `mcanalyzer`.`resultdata` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `sourse` VARCHAR(255) NOT NULL,
  `body` VARCHAR(255) NOT NULL,
  `mentionedAt` DATETIME NOT NULL,
  `mentions` INT NOT NULL,
  `MentionReport_id` INT UNSIGNED NOT NULL,
  `MentionReport_User_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`, `MentionReport_id`, `MentionReport_User_id`),
  INDEX `fk_ResultData_MentionReport1_idx` (`MentionReport_id` ASC, `MentionReport_User_id` ASC) VISIBLE,
  CONSTRAINT `fk_ResultData_MentionReport1`
    FOREIGN KEY (`MentionReport_id` , `MentionReport_User_id`)
    REFERENCES `mcanalyzer`.`mentionreport` (`id` , `User_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `mcanalyzer`.`role`
-- -----------------------------------------------------
START TRANSACTION;
USE `mcanalyzer`;
INSERT INTO `mcanalyzer`.`role` (`id`, `name`, `description`) VALUES (1, 'User', 'Registered user, can get info about mentions');
INSERT INTO `mcanalyzer`.`role` (`id`, `name`, `description`) VALUES (2, 'Editor', 'Can do the same as the user, can edit data');
INSERT INTO `mcanalyzer`.`role` (`id`, `name`, `description`) VALUES (3, 'Admin', 'Can do the same as other, can give roles and can block users');

COMMIT;
