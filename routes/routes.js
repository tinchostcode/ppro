const express = require('express');
const router = express.Router();
const fs = require('fs');

const { httpError } = require('../helpers/handleError'); // Importa una función para manejar errores HTTP

const pathRouter = `${__dirname}`; // Obtiene el directorio actual
const removeExtension = (filename) => {
    return filename.split('.').shift(); // Función para quitar la extensión de un nombre de archivo
}

// Lee los archivos en el directorio y carga las rutas
fs.readdirSync(pathRouter).filter((file) => {
    const filename = removeExtension(file);
    const skip = ['routes'].includes(filename); // Excluye ciertos archivos
    if (!skip) {
        router.use(`/${filename}`, require(`./${filename}.route`)); // Carga la ruta desde un archivo
        console.log('LOADED ROUTE ---->', filename); // Muestra un mensaje cuando se carga una ruta
    }
});

// Ruta para manejar solicitudes incorrectas
router.get('*', (req, res) => {
    return httpError(res, { message: 'Wrong path' }, 404, 'not_found');
});

module.exports = router;
