import { error } from "console";
import { promises as fspromises } from "fs";

const findProcessedImg=async (name:string):Promise<any>=>{
    let found=false;
    const path:string=`website/public/images/processed/${name}`;
    //console.log(path);
    try{
      const data=await fspromises.open(path,'r');
      found=true;
      data.close();
    }
    catch(err){
        //console.log(err);
        found=false;
    }
    //console.log(found);
    return Promise.resolve({"found":found,"path":path});
}

const findRawImg=async (name:string):Promise<any>=>{
  let found=false;
  const path:string=`website/public/images/raw/${name}`;
  //console.log(path);
  try{
    const data=await fspromises.open(path,'r');
    found=true;
    data.close();
  }
  catch(err){
      throw error(`${path} not found`);
      found=false;
  }
  //console.log(found);
  return Promise.resolve({"found":found,"path":path});
}
export default {findProcessedImg,findRawImg};
