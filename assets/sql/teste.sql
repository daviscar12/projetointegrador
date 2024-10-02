CREATE DATABASE users;

USE users;
CREATE TABLE login (
id INT auto_increment prymary KEY,
username VARCHAR(50) NOT null, 
 Password VARCHAR(50) NOT null
);