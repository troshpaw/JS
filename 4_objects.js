
// ОБЪЕКТЫ
// Объект - это набор свойств "имя: значение".
// Объект - это тип значений и тип переменных.
// Практически все сущности в JS - это объекты (или ведут себя как объекты).
// Если свойство объекта содержит функцию, то это свойство является методом.

// Пример объекта, содержащего метод:
console.log('Hello!')
// console - объект
// log - свойство объекта (в данном случае также является и методом обекта, т.к. содержит внутри себя функцию)
// (...) - оператор вызова метода объекта (т.е. вызывается функция, которая содержится внутри метода log)

// Более подробный пример объекта, содержащего метод, будет рассмотрен далее.

// Пример (city - свойство, Moscow - значение):
const myCity = {
    city: 'Moscow',
    popular: true,
    country: 'Russia'
}

console.log(myCity) // { city: 'Moscow', popular: true, country: 'Russia' }

// Получение значений свойств:
console.log(myCity.city) // Moscow

// Изменение значений свойств объекта:
myCity.city = 'New York'
console.log(myCity.city) // New York

// Добавление значений:
myCity.continent = 'North America'
console.log(myCity) // { city: 'New York', popular: true, country: 'Russia', continent: 'North America' }

// Удаление свойств объекта:
delete myCity.popular
console.log(myCity) // { city: 'New York', country: 'Russia', continent: 'North America' }


// Доступ к значениям свойств с использованием квадратных скобок:
const myCountry = {
    name: 'Russia'
}

myCountry['population'] = 140 // добавление свойства
myCountry['continent'] = 'Eurasia' // добавление свойства

console.log(myCountry) // { name: 'Russia', population: 140, continent: 'Eurasia' }

// Случаи, когда не может использоваться точечная нотация (имя свойства объекта = значению переменной)
const languagePropertyName = 'language'
myCountry[languagePropertyName] = 'russian'

console.log(myCountry) // { name: 'Russia', population: 140, continent: 'Eurasia', language: 'russian' }

// Вложенные свойства (info - вложенный объект)
const someCountry = {
    city: 'London',
    info: {
        country: 'Great Britain',
        language: 'english'
    }
}
// Обращение к вложенному объекту
console.log(someCountry.info.country) // 'Great Britain'

// Использование переменных в объекте
const nameUser = 'Nick' // переменная
const ageUser = 20 // переменная

const userProfile = {
    nameUser: nameUser, // свойство = значению переменной 
    ageUser: ageUser // свойство = значению переменной
}

console.log(userProfile) // { nameUser: 'Nick', ageUser: 20 }

// => сокращенный формат записи свойства для примера выше:
const userProfileShortWrite = {
    nameUser, // ранее объявленная переменна
    ageUser // ранее объявленная переменна
}

console.log(userProfileShortWrite) // { nameUser: 'Nick', ageUser: 20 }

// ГЛОБАЛЬНЫЕ ОБЪЕКТЫ:
// 1. window - объект веб-браузера
// 2. global - объект node.js
// 3. globalThis - унифицированный глобальный объект

// console - свойство глобальных объектов window (браузер) и global (node.js):
console.log('Hello') // то же самое, что и строка в консоли браузера "window.console.log('Hello')" или строка в node.js "global.console.log('Hello')"

// МЕТОДЫ ОБЪЕКТА - свойства объекта, которые содержат функции
const myCar = {
    brand: 'Nissan',
    sounding: function () {
        console.log('Wruuum!')
    }
}

myCar.sounding() // вызов метода sounding()

// Сокращенная формат записи методов
const myCarTwo = {
    barand: 'Nissan',
    sounding() {
        console.log('Wruuum!')
    }
}

myCar.sounding() // Wruuum!

// МЕТОДЫ vs СВОЙСТВА
myCar.brand // доступ к значению свойства
myCar.sounding() // вызов метода