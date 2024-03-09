


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


//задача по получению отдельных букв из строки

const getSubString=(str)=>{
    console.log(str[0]);  //получение первой буквы строки
    console.log(str.at(0));//получение первой буквы строки

    console.log(str[str.length-1]);   //получение последней буквы строки
    console.log(str.at(-1))           //получение последней буквы строки
}
//console.log(getSubString("Молоко"))



//получение доступа к каждому элементу строки через функцию и цикл

const getALLElement=(str)=>{
    for (let i=0; i<str.length-1;i++)
        console.log(str[i])
}
getALLElement("Молоко")
















