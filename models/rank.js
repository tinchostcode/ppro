
const mongoose=require('mongoose');
 
 

const rankSchema= mongoose.Schema({
      
    id_category:{type:mongoose.Types.ObjectId,ref: 'category'}, //cancha
    id_player:{type:mongoose.Types.ObjectId,ref: 'player'},  // jugador que saca el turno
    position:{type:Number, required:true}, //position en el rank
    points:{type:Number, required:true}, //puntos
},
    {timestamps:true, versionKey:false});

module.exports=mongoose.model('rank',PlayerSchema);