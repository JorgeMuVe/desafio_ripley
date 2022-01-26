/*
DESCRIPCION: 	Listar datos para dashboard
EJECUCION:		CALL prc_Cliente_Dashboard()
*/
DELIMITER ;;
DROP PROCEDURE IF EXISTS `prc_Cliente_Dashboard`;;
CREATE PROCEDURE `prc_Cliente_Dashboard`()
BEGIN
	SELECT
	(SELECT COUNT(id) FROM `cliente`) AS registrados,
	(SELECT COUNT(id) FROM `cliente` WHERE TIMESTAMPDIFF(YEAR, nacimiento, CURDATE()) >= 18) AS mayores, 
	(SELECT COUNT(id) FROM `cliente` WHERE TIMESTAMPDIFF(YEAR, nacimiento, CURDATE()) >= 60) AS adultos;
END;;