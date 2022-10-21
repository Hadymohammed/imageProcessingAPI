const createError = (): string => {
    const page = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>imageProcessingAPI</title>
            
        </head>
        <body style="display:flex;justify-content:center;margin:0;background-color: red;height: 100vh;">
         <div style="text-align:center">
            <h1>Error While processing</h1>
            <h3>resizing failed</h3>
         </div>
        </body>
    </html>
    `;
    return page;
};
export default createError;
