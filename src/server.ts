import express from 'express';

const app=express();
const port=8080;

//run server
app.listen(port,()=>{
    console.log(`server is running in http:\\localhost:${port}`);
})