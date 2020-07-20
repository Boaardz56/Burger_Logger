### Schema

CREATE DATABASE burgerlogger_db;
USE burgerlogger_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	logger BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
