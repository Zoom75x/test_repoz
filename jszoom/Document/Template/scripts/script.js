

const getHello=()=>{
    return"Привет"
}
alert(getHello())

//DOM - Document object model

console.log(document)
window.myObj={name:"myObj"}
console.log("window", window)
console.log("window.obj", window.myObj)

const colorMapper=(color)=>{
    const colorObj={
        красный:"red",
        зеленый:"green"
    }
    return colorObj[color]
}
const changeBackgroundBody=()=>{
    const getColor=prompt("В какой цвет покрасить")

    document.body.style.background = colorMapper(getColor)
    setTimeout(function (){
        document.body.style.background=""
    },  3000)

}
//changeBackgroundBody()


// BOM - Browser Object Model

const getObjNavigator=()=>{
    console.log(navigator.userAgent)
    localStorage.setItem("userAgent", navigator.userAgent)
}
//getObjNavigator()

const getLocalStorage=()=>{
    console.log(localStorage.getItem("userAgent"))
}
//getLocalStorage()

const getLocation=()=>{
    console.log(location.href)

    if (confirm("Перейти на сайт Википедии?")){
            location.href="https://wikipedia.org"
    }
}
getLocation()










