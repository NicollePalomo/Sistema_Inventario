CREATE DATABASE sistema_inventario ;
USE sistema_inventario ;

CREATE TABLE equipos (
  id int(11) NOT NULL AUTO_INCREMENT,
  nombre varchar(255) NOT NULL,
  periferico varchar(255) NOT NULL,
  fabricante varchar(255),
  seriall varchar(255),
  modelo varchar(255) NOT NULL,
  procesador varchar(255),
  ram varchar(255),
  so varchar(255),
  area varchar(255) NOT NULL,
  servicio varchar(255),
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
 
INSERT INTO equipos VALUES
(1,'confort kyboard 100','teclado','Microsoft','A123','Copmpacto','NA','NA','NA','Farmacia','NA');