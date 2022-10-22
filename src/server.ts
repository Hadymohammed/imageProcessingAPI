import findImg from './utilities/findImg';
import createHtml from './utilities/createHTML';
import express from 'express';
import logger from './utilities/logger';
import imgResize from './utilities/imgResize'

const app = express();
const port = 8000;

app.use(express.static('website'));

app.get(
    '/api/image',
    logger,
    async (req: express.Request, res: express.Response) => {
        res.writeHead(200, { 'content-type': 'text/html' });
        const img = String(req.query.filename);
        const width = Number(req.query.width);
        const height = Number(req.query.height);
        const processedFile = `${width}_${height}_${img}`; //named using widht&height to give the ability of resize many versions of the same img
        const searchObj = await findImg.findProcessedImg(processedFile);
        //console.log(searchObj);

        if (searchObj.found) {
            //the image has been processed before
            const page = createHtml.createPage(`processed/${processedFile}`);
            res.write(page); //render the page at that endpoint
            res.end();
        } else {
            //first time access
           const resizeDone=await imgResize.transform(img,width,height);
           //console.log(`resizeDone : ${resizeDone}`);
           setTimeout(() => {//wait in event loop till image process is done
               if (resizeDone===true){
                   const page=createHtml.createPage(`processed/${processedFile}`);
                   res.write(page); //render the resized img
                   res.end();
                   console.log("page was built successfully");
                }
                else {
                    let error=`${img} not found`;
                    if(imgResize.positive(width)==false)
                      error=`width = ${width} not Valid`;
                    else if(imgResize.positive(height)==false)
                      error=`height = ${height} not Valid`;
                    res.write(createHtml.createError(error)); //render error page
                    res.end();
                }
            }, 1000);
        }
    }
);
//run server
app.listen(port, () => {
    console.log(`server is running in http:\\\\localhost:${port}`);
});

export default app;
