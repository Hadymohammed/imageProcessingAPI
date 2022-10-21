import { promises as fspromises } from "fs";
import findImg from "./utilities/findImg";
import createHtml from "./utilities/createHTML";

const http =require('http');
const express=require('express');
const sharp=require('sharp');

const app=express();
const port=8000;

app.use(express.static('website'));

app.get('/api/image',async (req:any,res:any)=>{
    res.writeHead(200,{'content-type':'text/html'});
    const img:string=req.query.filename;
    const width:number=Number(req.query.width);
    const height:number=Number(req.query.height);
    const processedFile:string=`${width}_${height}_${img}`;
    const searchObj=await findImg.findProcessedImg(processedFile);
    console.log(searchObj);
    if(searchObj.found){
        const page=createHtml(`processed/${processedFile}`);
        res.write(page);
        res.end();
    }
    else{
        const infile:string=`website/public/images/raw/${img}`;
        const outFile=`website/public/images/processed/${processedFile}`;
        console.log(infile);
        sharp(infile)
         .resize(height,width,{
            fit:"contain"
         })
         .toFile(outFile)
        .then(()=>{
            console.log("image resized");
            res.write(createHtml(`processed/${processedFile}`));
        })
        .catch((err:any)=>{
            console.log(err);
        })
    } 
});
//run server
app.listen(port,()=>{
    console.log(`server is running in http:\\\\localhost:${port}`);
})