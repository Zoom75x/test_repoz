


//Строки

const createString=()=>{
    const singleQuoted='singleQuoted'
    const doubleQuoted="doubleQuoted"
    const backTick=`backTick`

    const testString='Hello "World"'
    const getSum=(a,b)=>{
        return a+b
    }
    const a=2
    const b=3
    console.log(a+"+"+b+"="+getSum(a,b))
    console.log(`${a}+${b}=${getSum(a,b)}`)
}

//createString()

//выведем список гостей через фукцию

const getGuestList=()=>{
    //const guestList="- Иван,\n- Максим,\n- Маша"
    const guestList=`-Иван,
-Максим,
-\\Маша
    `
    return guestList
   // console.log(getGuestList())
}
//console.log(getGuestList())
//console.log(getGuestList())
    //подробнее про длину строки

    const getLengthStr=(str)=>{

        return str.length
    }

    //console.log(getLengthStr("World"))
//console.log(getLengthStr(" World "))
//console.log(getLengthStr("\tWorld"))




















