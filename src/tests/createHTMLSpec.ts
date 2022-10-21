import createHtml from '../utilities/createHTML';
const rawImg = 'raw/test.jpg';
const processedImg = 'processed/500_500_test.jpg';
const rawPage = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>imageProcessingAPI</title>
            
        </head>
        <body style="display:flex;justify-content:center;margin:0;background-color: #131a1e;height: 100vh;">
            <img src="../public/images/${rawImg}" alt="" style="display:block;margin:auto;">
        </body>
    </html>
    `;
const processedPage = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>imageProcessingAPI</title>
            
        </head>
        <body style="display:flex;justify-content:center;margin:0;background-color: #131a1e;height: 100vh;">
            <img src="../public/images/${processedImg}" alt="" style="display:block;margin:auto;">
        </body>
    </html>
    `;
describe('test createHTML from utilities', () => {
    it('Should build page using raw Image', () => {
        expect(createHtml(rawImg)).toEqual(rawPage);
    });
    it('Should build page using processed Image', () => {
        expect(createHtml(processedImg)).toEqual(processedPage);
    });
});
