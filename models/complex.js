// los models la primera letra con Mayuscula . Producto.js
const mongoose=require('mongoose');
 
const complexSchema= mongoose.Schema({

    name:{type:String, required:true}, // nombre
    address:{type:String, required:true},     // mitre 123
    phone:{type:Number, required:true},   //336422555
    n_courts:{type:Number, required:true}, // 4
    city:{type:mongoose.Types.ObjectId},     //
    contact:{type:mongoose.Types.ObjectId},  //
    },  {timestamps:true, versionKey:false});

module.exports=mongoose.model('Complex',courtSchema);