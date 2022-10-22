import sharp from 'sharp';
import findImg from './findImg';


type Status = {
    found: boolean;
    path: string;
};

const positive=(num:number):boolean=>{
    return num>0;
}

const validTransform=async (fileName:string,width:number,height:number):Promise<boolean>=>{
      const searchObj=(await findImg.findRawImg(fileName))as Status;
      
      return searchObj.found && positive(width)&& positive(height);
}

const transform= async (fileName:string,width:number,height:number):Promise<boolean>=>{
    const processedFile=`${width}_${height}_${fileName}`
    const infilePath = `website/public/images/raw/${fileName}`;
    const outFilePath = `website/public/images/processed/${processedFile}`;
    let success=true;
    const valid=await validTransform(fileName,width,height);
    
    if(valid===true){
        sharp(infilePath) //resize the image
        .resize(width, height, {
            fit: 'contain',
        })
        .toFile(outFilePath)
        .then(() => {
            console.log('image resized');
            success=true;
        })
        .catch((err) => {
            console.log(err);
            success=false;
        })
        .then(()=>{
            return success;
        })
    }
    else{
       // console.error("invalid");
        success=false;    
        return success;   
    }
    return success;
}

export default {transform,positive};