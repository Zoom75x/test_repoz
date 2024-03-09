// ОБЪЕКТЫ

// существует 2 способа создания объекта
let testUser=new Object()    // создание через конструктор


// второй способ - через литерал - это более частый способ создание объектов
let user={
    id: "1",
    name:"Bob",
    age: 25,
    isStudent: true,
    from: {
        city: "Krasnodar",
        street: "Krasnaya",
    },
}                  // создание через литерал объекта

//console.log(user, testUser)

//добавим новое свойство к объекту User
user.isAdmin=true   // если свойства нет то этой командой мы его создаем
//console.log(1, user)
user.isAdmin=false   // если свойство уже есть то этой командой мы его перезаписываем
//console.log(2, user)
//console.log("add user isAdmin", user)

//удаление свойства из объекта через метод delete

delete user.isAdmin
//console.log("delete user.isAdmin", user)


//если свойство содержит несколько слов - можно через нижнее подчеркивание между словами
// либо обернуть эти слова в кавычки like_birds "like birds"

user["like cat"]=false
//console.log(user)

// свойство можно задать в виде функции
user.sayHello=function () {
    return "Hello"
}
//console.log(user.sayHello())   //вызываем функцию и она возвращает результат


//  еще преимущество квадратных скобок это возможность назначать новые переменные вместо свойств и через
//   эти переменные к ним обращаться

const key="age"
//console.log(user[key])  // равнозначно вызову user["age"]

// создадим функцию которая будет получать значение свойства по ключу
//const getValueByKey=(key)=>{
   // return user[key]
//}
//console.log(getValueByKey("name"))
//console.log(getValueByKey("from"))


//можно прокинуть параметром функции не ключ а сам объект и ключ
//поэтому перепишем функцию с аргументами
const getValueByKey=(obj,key)=>{    //такое обращение функции через аргументы позволяет жить ей самой по себе и не зависеть от внешних обстоятельств
    return obj[key]
}
//console.log(getValueByKey(user,"name"))
//console.log(getValueByKey(user,"from"))


//создадим функцию которая создает и возвращает объект



















