const Player= require("../models/Player")


exports.crearPlayer= async (req,res = Response) => {
   
   try {
    let player;
    //creamos el producto

    player = new Player(req.body)

    await player.save();
    res.send(player);
    
   } catch (error) {
    console.log(error);
    res.status(500).send('hubo un error');
}

   
}
/*
exports.obtenerProductos= async(req,res)=>{

    try {
            const productos=await Producto.find() // 1 const Producto= require("../models/Producto")
            res.json(productos);
        
    } catch (error) {
        console.log(error);
    res.status(500).send('hubo un error');
    }
}

exports.actualizarProducto= async(req,res) =>{
 try {
    const {nombre,categoria,ubicacion,precio}=req.body;
    let producto= await Producto.findById(req.params.id);
    
    if(!producto){
        res.status(400).json({msg:'No existe el producto'});
    }
    
    producto.nombre=nombre;
    producto.categoria=categoria;
    producto.ubicacion=ubicacion;
    producto.precio=precio;
    producto= await Producto.findOneAndUpdate({_id:req.params.id},producto, {new:true}) 
    res.json(producto)
     
 } catch (error) {
    console.log(error);
    res.status(500).send('hubo un error');
 }
}

exports.obtenerProducto= async(req,res)=>{

    try {
        let producto= await Producto.findById(req.params.id);
       
        if(!producto){
            res.status(400).json({msg:'No existe el producto'});
        }
        res.json(producto)
        
    } catch (error) {
        
    }
}

exports.eliminarProducto=async(req,res)=>{

    try {
        let producto= await Producto.findById(req.params.id)
        
        if(!producto){
            res.status(400).json({msg:'No existe el producto'});
        }
        await Producto.findOneAndRemove({_id:req.params.id});
        res.json({msg:'Producto Eliminado con exito! :D'});

    } catch (error) {
        
        res.status(500).send('Hubo un error al eliminar..')
    }
}*/