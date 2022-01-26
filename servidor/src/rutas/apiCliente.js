'use strict';
const gestorRutaCliente = require('express').Router(); // INICIAR ENRUTADOR DE EXPRESS
const proveedorDeDatos = require('../db/database.js'); //CONEXIÓN A BASE DE DATOS

gestorRutaCliente.post('/', async (req, res) => { // CREAR REGISTRO DE CLIENTE
    try {
        await proveedorDeDatos.query('CALL prc_Cliente_Crear(?, ?, ?)', [req.body.nombre, req.body.apellido, req.body.nacimiento]
            , (error, resultado) => { // Consulta a procedimiento almacenado
                if (error)
                    res.status(400).json({ error: (error.sqlMessage + " - " + error.sql) }); // Enviar error en JSON
                else
                    res.status(201).json(resultado[0]); // Enviar resultado de consulta en JSON
            });
        proveedorDeDatos.release(); //Liberar la conexión usada del POOL de conexiones
    } catch (error) { res.status(400).json({ error: error.code }) }  // Enviar error en JSON
});

gestorRutaCliente.get('/', async (req, res) => { // LISTAR REGISTRO DE CLIENTES FILTRADOS POR NOMBRE Y APELLIDO
    try {
        await proveedorDeDatos.query('CALL prc_Cliente_Listar(?)', [req.query.filtro]
            , (error, resultado) => { // Consulta a procedimiento almacenado
                if (error)
                    res.status(400).json({ error: (error.sqlMessage + " - " + error.sql) }); // Enviar error en JSON
                else
                    res.status(200).json(resultado[0]); // Enviar resultado de consulta en JSON
            });
        proveedorDeDatos.release(); //Liberar la conexión usada del POOL de conexiones
    } catch (error) { res.status(400).json({ error: error.code }) }  // Enviar error en JSON
});

gestorRutaCliente.get('/promedio', async (req, res) => { // OBTENER PROMEDIO DE EDAD DE CLIENTES REGISTRADOS
    try {
        await proveedorDeDatos.query('CALL prc_Cliente_Promedio_Edad()'
            , (error, resultado) => { // Consulta a procedimiento almacenado
                if (error)
                    res.status(400).json({ error: (error.sqlMessage + " - " + error.sql) }); // Enviar error en JSON
                else
                    res.status(200).json(resultado[0][0]); // Enviar resultado de consulta en JSON
            });
        proveedorDeDatos.release(); //Liberar la conexión usada del POOL de conexiones
    } catch (error) { res.status(400).json({ error: error.code }) }  // Enviar error en JSON
});

gestorRutaCliente.get('/dashboard', async (req, res) => { // OBTENER DATOS DE DASHBOARD
    try {
        await proveedorDeDatos.query('CALL prc_Cliente_Dashboard()'
            , (error, resultado) => { // Consulta a procedimiento almacenado
                if (error)
                    res.status(400).json({ error: (error.sqlMessage + " - " + error.sql) }); // Enviar error en JSON
                else
                    res.status(200).json(resultado[0][0]); // Enviar resultado de consulta en JSON
            });
        proveedorDeDatos.release(); //Liberar la conexión usada del POOL de conexiones
    } catch (error) { res.status(400).json({ error: error.code }) }  // Enviar error en JSON
});

module.exports = gestorRutaCliente; //EXPORTAR FUNCIONES AL ROUTER