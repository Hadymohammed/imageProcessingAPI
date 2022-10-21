import { promises as fspromises } from 'fs';

type Status = {
    found: boolean;
    path: string;
};

const findProcessedImg = async (name: string): Promise<Status> => {
    let found = false;
    const path = `website/public/images/processed/${name}`;
    //console.log(path);
    try {
        const data = await fspromises.open(path, 'r');
        found = true;
        data.close();
    } catch (err) {
        //console.log(err);
        found = false;
    }
    const status: Status = { found, path };
    //console.log(found);
    return Promise.resolve(status);
};

const findRawImg = async (name: string): Promise<object> => {
    let found = false;
    const path = `website/public/images/raw/${name}`;
    //console.log(path);
    try {
        const data = await fspromises.open(path, 'r');
        found = true;
        data.close();
    } catch (err) {
        //throw error(`${path} not found`);
        found = false;
    }
    //console.log(found);
    return Promise.resolve({ found: found, path: path });
};
export default { findProcessedImg, findRawImg };
