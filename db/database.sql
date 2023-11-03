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

INSERT INTO employee VALUES 
(1,'John',1000),
(2,'Pepe',2000),
(3,'Sama',2500),
(4,'aaa',3000);

SELECT * FROM employee;