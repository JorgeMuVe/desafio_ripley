/*
DESCRIPCION: 	Ingresar registro de cliente
EJECUCION:		CALL prc_Cliente_Crear('Jorge','Muñiz','1995/09/17')
*/
DELIMITER ;;
DROP PROCEDURE IF EXISTS `prc_Cliente_Crear`;;
CREATE PROCEDURE `prc_Cliente_Crear`( IN nombre_p VARCHAR(50), IN apellido_p VARCHAR(250), IN nacimiento_p DATE )
BEGIN
	INSERT INTO `cliente` (nombre, apellido, nacimiento) VALUES( nombre_p, apellido_p, nacimiento_p);
END;;