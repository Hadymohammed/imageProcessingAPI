import express from 'express';

const logger = (
    req: express.Request,
    res: express.Response,
    next: () => void
): void => {
    try {
        console.log({
            fileName: req.query.filename,
            width: req.query.width,
            height: req.query.height,
        });
        next();
    } catch (err) {
        console.log(err);
    }
};
export default logger;
