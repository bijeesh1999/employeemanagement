// imports
require('dotenv').config();

const mongoose=require('mongoose');

const session=require('express-session');

const express=require('express');
const app=express();

const port=process.env.port||2020;

// database connection====

const uri=process.env.db_uri;

console.log(uri);

async function connect(){
    try{
        await mongoose.connect(uri);
        console.log("connected to the sserver")
    }
    catch(err){
        console.log(err);
    }
}
connect();


// programme=====

app.get('/',(req,res)=>{
    res.send("welcome"); 
})

app.listen(port,()=>{
    console.log(`port is running http://localhost:${port}`)
})









