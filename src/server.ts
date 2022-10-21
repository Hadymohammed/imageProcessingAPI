import findImg from './utilities/findImg';
import createHtml from './utilities/createHTML';
import createError from './utilities/createError';
import express from 'express';
import sharp from 'sharp';
import logger from './utilities/logger';

const app = express();
const port = 8000;

app.use(express.static('website'));

app.get(
    '/api/image',
    logger,
    async (req: express.Request, res: express.Response) => {
        res.writeHead(200, { 'content-type': 'text/html' });
        const img = req.query.filename;
        const width = Number(req.query.width);
        const height = Number(req.query.height);
        const processedFile = `${width}_${height}_${img}`; //named using widht&height to give the ability of resize many versions of the same img
        const searchObj = await findImg.findProcessedImg(processedFile);
        console.log(searchObj);

        if (searchObj.found) {
            //the image has been processed before
            const page = createHtml(`processed/${processedFile}`);
            res.write(page); //render the page at that endpoint
            res.end();
        } else {
            //first time access
            const infile = `website/public/images/raw/${img}`;
            const outFile = `website/public/images/processed/${processedFile}`;
            //console.log(infile);
            sharp(infile) //resize the image
                .resize(width, height, {
                    fit: 'contain',
                })
                .toFile(outFile)
                .then(() => {
                    console.log('image resized');
                    res.write(createHtml(`processed/${processedFile}`)); //render the resized img
                })
                .catch((err) => {
                    res.write(createError()); //render error page
                    console.log(err);
                });
        }
    }
);
//run server
app.listen(port, () => {
    console.log(`server is running in http:\\\\localhost:${port}`);
});

export default app;
