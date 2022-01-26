DROP TABLE IF EXISTS `cliente`;
CREATE TABLE `cliente` (
    `id` int(10) NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(50) NOT NULL,
    `apellido` VARCHAR(250) NOT NULL,
    `nacimiento` DATE NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8mb4;