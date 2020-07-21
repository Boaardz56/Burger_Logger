
DROP DATABASE IF EXISTS burgerlogger_db;
CREATE DATABASE burgerlogger_db;
USE burgerlogger_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255),
	devoured BOOLEAN DEFAULT false,
	createdAt TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);
