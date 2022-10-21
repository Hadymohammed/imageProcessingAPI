const createHtml=(img:string):string=>{
    const page:string=`
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>imageProcessingAPI</title>
            
        </head>
        <body style="display:flex;justify-content:center;margin:0;background-color: #131a1e;height: 100vh;">
            <img src="../public/images/${img}" alt="" style="display:block;margin:auto;">
        </body>
    </html>
    `;
    return page;
}
export default createHtml;