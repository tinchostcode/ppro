
const mongoose=require('mongoose');
 
const citySchema= mongoose.Schema({

    name:{type:String, required:true}, // nombre
    state:{type:String, required:true},     // mitre 123
    cp:{type:Number, required:true},   //336422555
       
    },  {timestamps:true, versionKey:false});

module.exports=mongoose.model('City',courtSchema);