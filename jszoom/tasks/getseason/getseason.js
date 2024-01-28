//Задача14
//Напишите функцию getSeason(month), которая возвращает сезон года в зависимости от месяца.
// Зима (12, 1, 2), Весна (3, 4, 5), Лето (6, 7, 8), Осень (9, 10, 11).

function getSeason(month) {
    if (month=[12,1,2]) {
        return "Зима"
    }
    if (month=[3,4,5]) {
        return "Весна"
    }
    if (month=[6,7,8]) {
        return "Лето"
    }
    if (month=[9,10,11]) {
        return "Осень"
    }
    if (typeof month !== "number" || month>12 || month<1){
        return "Введите число от 1 до 12"
    }

}
module.exports = {getSeason}