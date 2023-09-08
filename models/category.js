// los models la primera letra con Mayuscula . Producto.js
const mongoose=require('mongoose');
 
const categorySchema= mongoose.Schema({

    name:{type:number, required:true}, // 1,2,3,4,5
    type: {type:String, required:true}, // 1,2,3,4,5}
    
    },  {timestamps:true, versionKey:false});

module.exports=mongoose.model('category',courtSchema);