import imgResize from "../utilities/imgResize";
import findImg from '../utilities/findImg';

describe("Test imgResize module",()=>{
    it("postive(500) should be true",()=>{
        expect(imgResize.positive(500)).toEqual(true);
    });
    it("postive(0) should be false",()=>{
        expect(imgResize.positive(0)).toEqual(false);
    });
    it("postive(-100) should be false",()=>{
        expect(imgResize.positive(-100)).toEqual(false);
    });
    describe("Transform in imgResize test",()=>{
        it("Transform(notImg.jpg) should due no such file",async()=>{
            const ans=await imgResize.transform('notImg.jpg',200,200);
            expect(ans).toEqual(false);
        });
        it("Transform(test.jpg,500,500) should return true",async()=>{
            const ans=await imgResize.transform('test.jpg',500,500);
            expect(ans).toEqual(true);
        });
        it("Transform(test.jpg,600,600) should produce 600_600_test.jpg file",async()=>{
            await imgResize.transform('test.jpg',600,600);
            const processedImg = '600_600_test.jpg';
            const foundProcessed = {
                found: true,
                path: `website/public/images/processed/${processedImg}`,
            };
            setTimeout(async ()=>{
                const data = await findImg.findProcessedImg(processedImg);
                expect(data).toEqual(foundProcessed);
            },1000);
        });
    })
})