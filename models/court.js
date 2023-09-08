// los models la primera letra con Mayuscula . Producto.js
const mongoose=require('mongoose');
 
const courtSchema= mongoose.Schema({

    name:{type:number, required:true}, // 1,2,3,4,5
    surface:{type:String, required:true},     //cesped,cemento
    wall_material:{type:String, required:true},   //blindex,cemento
    court_type:{type:String, required:true},   //indoor outdoor
    id_complex:{type:mongoose.Types.ObjectId,ref: 'complex'}, 
    id_contact:{type:mongoose.Types.ObjectId,ref: 'contact'}, 
    },  {timestamps:true, versionKey:false});

module.exports=mongoose.model('court',courtSchema);