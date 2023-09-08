const express= require('express');
const mongoose=require('mongoose');
const cors = require('cors');
require ('dotenv').config();

const app=express();


app.use(cors({ origin: true, credentials: true }));

const port=process.env.PORT || 9000;



 mongoose
        .connect(process.env.MONGODB_URI)
        .then(() => console.log('Base Conectada...🚀'))
        .catch((error) =>console.error('ERROR AL CONECTAR 😪:',error)); 


//middlewares
app.use(express.json()); // habilitamos para recibir json  

//RUTAS
app.use('/api', require('./routes/routes'));

app.listen(port,()=> console.log('server conectado..😄. en el puerto:',port))