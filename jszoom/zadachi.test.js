const {getAverageNumber}=require("./zadachi")

describe("getAverageNumber tests", () => {
    test("getAverageNumber positiv results",()=>{
        expect(getAverageNumber(1,2,3)).toEqual(2)
        expect(getAverageNumber(1,3,2)).toEqual(2)
        expect(getAverageNumber(2,1,3)).toEqual(2)
        expect(getAverageNumber(2,3,1)).toEqual(2)
        expect(getAverageNumber(3,2,1)).toEqual(2)
        expect(getAverageNumber(3,1,2)).toEqual(2)
    })
    test("getAverageNumber negative results",()=>{
        expect(getAverageNumber()).toEqual("Error")
        expect(getAverageNumber("",{},[])).toEqual("Error")
    })
});