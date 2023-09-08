// los models la primera letra con Mayuscula . Producto.js
const mongoose=require('mongoose');
 
const validRoles = {
    values: ['ADMIN_ROLE', 'USER_ROLE', 'MANAGER_ROLE']
}
const PlayerSchema= mongoose.Schema({

    name:{type:String, required:true}, //martin
    lastName:{type:String, required:true}, // iriarte
    email:{type:String, required:true,unique:true}, //  mail
    password:{type:String, required:true}, // clave de usuario
    height:{type:Number, required:true},   //173
    age:{type:Number, required:true},     //21
    rl_handed:{type:String, required:true},     //zurdo o diestro
    position:{type:String, required:true}, //drive, reves
    id_coplayer:{type:mongoose.Types.ObjectId,ref: 'categories',default:'NO'},      //id_player o vacio
    id_category:{type:mongoose.Types.ObjectId,ref: 'categories'}, 
    id_rank:{type:mongoose.Types.ObjectId,ref: 'rank'}, 
    
    role: {type: String,default: 'USER_ROLE',enum: validRoles},
    state: {type: Boolean,default: true}
},
    {timestamps:true, versionKey:false});

module.exports=mongoose.model('player',PlayerSchema);