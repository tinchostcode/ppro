const mongoose=require('mongoose');
 
const contactSchema= mongoose.Schema({

    name:{type:String, required:true}, //martin
    lastName:{type:String, required:true}, // iriarte
    phone:{type:Number, required:true},     //3654342334
    id_complex:{type:mongoose.Types.ObjectId,ref: 'complex'},   //complejo que atiende
    
    
    
},
    {timestamps:true, versionKey:false});

module.exports=mongoose.model('Contact',PlayerSchema);