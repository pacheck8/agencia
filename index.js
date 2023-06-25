const express = require ('express')
const dotenv = require('dotenv').config()

const app = express()

let port = 0;
if (process.env.PORT){
    port= process.env.PORT}
else{
    port=3000
}
app.listen(process.env.PORT,()=>{
    console.log('servidor escuchando en el puerto 3000')
})


console.log(process.env)