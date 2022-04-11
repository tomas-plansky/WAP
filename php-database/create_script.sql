-- MySQL Script generated by MySQL Workbench
-- Mon Apr 11 18:24:40 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`User` (
  `ID` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(64) NOT NULL,
  `last_name` VARCHAR(64) NOT NULL,
  `email` VARCHAR(128) NULL,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Insert some test values
-- -----------------------------------------------------
INSERT INTO `mydb`.`User` (`first_name`, `last_name`, `email`) VALUES ('John', 'Doe', 'john.doe@gmail.com');
INSERT INTO `mydb`.`User` (`first_name`, `last_name`, `email`) VALUES ('Jane', 'Doe', 'jane.doe@gmail.com');
INSERT INTO `mydb`.`User` (`first_name`, `last_name`, `email`) VALUES ('John', 'Smith', 'john.smith@gmail.com');
INSERT INTO `mydb`.`User` (`first_name`, `last_name`, `email`) VALUES ('Jane', 'Smith', 'jane.smith@gmail.com');