/*
-- File:             conexiondb.js
-- Project Name:     Desafio RIPLEY
-- Version:          0.0.1
-- Description:      Crea una conexión a la base de datos
-- Author:           Jorge Muñiz
-- Create Date:      26/01/2022
-- @Copyright        Jorge.Muñiz.Velasquez - 2022
*/
const mysql = require('mysql'); /* Librería de Conexión entre NODEJS y MariaDB/MySQL */
const promesas = require('util'); /* Librería para la gestión de PROMESAS(PROMISE) */
const { baseDeDatos } = require('./datosdb.js'); /* Datos de Conexión con el gestor de Base de Datos MariaDB/MySQL */
const db = mysql.createPool( baseDeDatos ); /* Crea un POOL de Conexiones al gestor de Base de Datos MariaDB/MySQL */

db.getConnection( (errorConexion, conexion) => { /* Crea el POOL de CONEXIONES y verifica posibles ERRORES */
    if (errorConexion){
        console.error('Error al Conectar con la Base de Datos... ' + errorConexion.code);
    }
    if (conexion) {
        conexion.release(); /* CONEXIÓN ESTABLECIDA */
        console.log('Base de Datos Conectada!!!...');
    }
    return;
});

/* Agente de CONSULTAS(Queries) a la Base de Datos mediante PROMESAS */
db.query = promesas.promisify(db.query); 

/* Exportar el POOL de Conexiones al ENTORNO GLOBAL */
module.exports = db; 