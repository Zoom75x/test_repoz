const {getSeason} = require("./getseason");


describe("test for getSeason", ()=>{
    test("getSeason gives positive results", ()=>{
        expect(getSeason(1)).toEqual("Зима")
    })

    test("getSeason gives negative results", ()=>{
        expect(getSeason(15)).toEqual("Введите число от 2 до 5")
        expect(getSeason("erf")).toEqual("Введите число от 2 до 5")
    })
})