-- Active: 1698971675920@@127.0.0.1@3306@ejemplo
SHOW databases;
CREATE DATABASE IF NOT EXISTS ejemplo;
USE ejemplo;
CREATE TABLE employee (
id INT(11) NOT NULL AUTO_INCREMENT,
name VARCHAR(45) DEFAULT NULL,
salary INT(5) DEFAULT NULL,
PRIMARY KEY (id)
);
DESCRIBE employee;