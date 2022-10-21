import findImg from '../utilities/findImg';

const rawImg = 'test.jpg';
const foundRaw = {
    found: true,
    path: `website/public/images/raw/${rawImg}`,
};
const notfound = {
    found: false,
    path: `website/public/images/raw/notImg.jpg`,
};
const processedImg = '400_400_test.jpg';
const foundProcessed = {
    found: true,
    path: `website/public/images/processed/${processedImg}`,
};
const notfoundProcessed = {
    found: false,
    path: `website/public/images/processed/test.jpg`,
};
describe('Test findImg from utilities', () => {
    it('findRawImg Should find test.jpg in raw directory', async () => {
        const data = await findImg.findRawImg(rawImg);
        expect(data).toEqual(foundRaw);
    });
    it('findRawImg Should not find notImg.jpg in raw directory', async () => {
        const data = await findImg.findRawImg('notImg.jpg');
        expect(data).toEqual(notfound);
    });
    it('findProcessedImg Should find 400_400_test.jpg in processed directory', async () => {
        const data = await findImg.findProcessedImg(processedImg);
        expect(data).toEqual(foundProcessed);
    });
    it('findProcessedImg Should not find test.jpg in processed directory', async () => {
        const data = await findImg.findProcessedImg('test.jpg');
        expect(data).toEqual(notfoundProcessed);
    });
});
