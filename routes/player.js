const express=require('express');
const router=express.Router();

const playerController = require('../controllers/playerController');


//api/prodcutos
router.post('/', playerController.crearPlayer); //creamos producto
//router.get('/',playerController.obtenerplayer) //buscar productos
//router.put('/:id',playerController.actualizarplayer); //update producto
//router.get('/:id',playerController.obtenerplayer); //buscar un  producto
//router.delete('/:id',playerController.eliminarplayer); //eliminar un  producto


module.exports=router;