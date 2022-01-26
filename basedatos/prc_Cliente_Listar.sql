/*
DESCRIPCION: 	Listar clientes registrados con filtro
EJECUCION:		CALL prc_Cliente_Listar('jo')
*/
DELIMITER ;;
DROP PROCEDURE IF EXISTS `prc_Cliente_Listar`;;
CREATE PROCEDURE `prc_Cliente_Listar`( IN filtro_p VARCHAR(250) )
BEGIN
	SELECT id, nombre, apellido,
	DATE_FORMAT(nacimiento,'%d/%m/%Y') AS nacimiento,
	TIMESTAMPDIFF(YEAR, nacimiento, CURDATE()) as edad 
	FROM `cliente` WHERE CONCAT(nombre, apellido) LIKE CONCAT('%',filtro_p,'%');
END;;