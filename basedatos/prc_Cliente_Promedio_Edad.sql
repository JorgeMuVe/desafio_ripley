/*
DESCRIPCION: 	Listar clientes registrados con filtro
EJECUCION:		CALL prc_Cliente_Promedio_Edad()
*/
DELIMITER ;;
DROP PROCEDURE IF EXISTS `prc_Cliente_Promedio_Edad`;;
CREATE PROCEDURE `prc_Cliente_Promedio_Edad`()
BEGIN
	SELECT SUM(TIMESTAMPDIFF(YEAR, nacimiento, CURDATE())) / COUNT(id) AS promedio FROM `cliente`;
END;;