
const mongoose=require('mongoose');
 
 

const shiftSchema= mongoose.Schema({

    name:{type:String, required:true}, //nombre del turno
    fhShift:{type:Date, required:true}, // FH del turno
    id_court:{type:mongoose.Types.ObjectId,ref: 'court'}, //cancha
    id_complex:{type:mongoose.Types.ObjectId,ref: 'complex'},  //complejo
    id_player:{type:mongoose.Types.ObjectId,ref: 'player'},  // jugador que saca el turno
},
    {timestamps:true, versionKey:false});

module.exports=mongoose.model('Shift',PlayerSchema);