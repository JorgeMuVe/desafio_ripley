/**
 * @file server.js
 * @author {jorge.muvez[at]gmail[dot]com}
 * @date 2022
 * @copyright Jorge.Muñiz.Velasquez
**/

require('dotenv').config();
const express = require('express');
const server = express();
const cors = require('cors');
const path = require('path');
const PUERTO = process.env.PORT || 5000;

server.use(express.static(path.join(__dirname,'build')));
server.get('/*', function(req,res){
    res.sendFile(path.join(__dirname,'build','index.html'));
});

/* CORS para establecer la SEGURIDAD en la conexión y envio de los datos */
server.use(cors());
server.use(function(solicitud,respuesta,siguiente) {
    respuesta.header('Access-Control-Allow-Origin', '*');
    respuesta.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    respuesta.header('Access-Control-Allow-Headers', 'Content-Type');
    siguiente();
});

/* Estable que la comunicación de datos se generaliza al formato JSON */
server.use(express.urlencoded({ extended : false, limit : '10mb' }));
server.use(express.json({ limit : '10mb' }));

/* Sección de las rutas para publicar las API(s) */
server.use('/api/cliente', require('./src/rutas/apiCliente.js'));

/* Encender el servidor Express/NODEJS - en el PUERTO previamente definido (5000) */
server.listen(PUERTO, () => {
    console.log("Servidor activo en PUERTO : " + PUERTO);
});