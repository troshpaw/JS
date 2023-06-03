
// МАССИВЫ
// Массив - это объект с цифровыми именами свойств.
const myArray = [1, 2, 3]
console.log(myArray) // [ 1, 2, 3 ]

// Создание массива при помощи создания нового экземпляра класса Array
const myArrayTwo = new Array(1, 2, 3)
console.log(myArrayTwo) // [ 1, 2, 3 ]

// Длина массива (одно из свойств массива):
console.log(myArray.length) // 3

// Сравнение массивов:
const exArray1 = [1, 2, 3]
const exArray2 = [1, 2, 3]
const comparingArr = exArray1 === exArray2
console.log(comparingArr) /* false, т.к. массив - это объект => массив - это стрелочный тип =>
=> переменная массива не содержит значение, а только ссылку на область памяти */

// Если же:
const exArray3 = exArray2
// То:
console.log(exArray2 === exArray3) // true, т.к. содержат одну и ту же ссылку

// МАССИВ vs ОБЪЕКТ
const myObject = {
    0: 1,
    1: 2,
    2: 3,
    length: 3
}
console.log(myObject) // { '0': 1, '1': 2, '2': 3, length: 3 }

const myArrayThree = [1, 2, 3]
console.log(myArrayThree) // [ 1, 2, 3 ]

/* Массив от объекта отличаются прототипами.
Можно увидеть в консоли браузера, просто введя имя переменной, содержащей массив или объект.*/

// Чтение значений массива
const myArrayFour = [1, true, 'a']
console.log(myArrayFour[0]) // 1
console.log(myArrayFour[1]) // true
console.log(myArrayFour.length) // 3
// console.log(myArrayFour.0) // неверно!

// Порядок элементов в массиве важен!

// Добавление новых элементов в массив:
console.log(myArrayFour.length) // 3
console.log(myArrayFour) // [ 1, true, 'a' ]

myArrayFour[3] = 'Hello'
myArrayFour[9] = 'Bye'

console.log(myArrayFour.length) // 10
console.log(myArrayFour) // [ 1, true, 'a', 'Hello', <5 empty items>, 'Bye' ]

// Добавление новых элементов в массив (с помощью методов):
// МЕТОДЫ МАССИВОВ - функции высшего порядка в массивах (или функции / методы прототипов)
myArrayFour.push('The end!') // добавление нового элемента в конец массива
console.log(myArrayFour) // [ 1, true, 'a', 'Hello', <5 empty items>, 'Bye', 'The end!' ]

// МЕТОД pop() удаляет последний элемент и возвращает его значение:
const removedElement = myArrayFour.pop() // удаление последнего элемента массива
console.log(myArrayFour) // [ 1, true, 'a', 'Hello', <5 empty items>, 'Bye' ]
console.log(removedElement) // The end!

// МЕТОД unshift() - добавление элемента в начало массива

// МЕТОД shift() - удаляет первый элемент массива и возвращает его значение

// МЕТОД forEach()
// В вызове данного метода в качестве аргумента передается функция
// Метод перебирает каждый элемент массива и применяет к каждому из них функцию
// Оригинальный массив не меняется
// Метод возвращает undefined
// Пример:
const myArr = [1, 2, 5]

const resultMetod = myArr.forEach(el => console.log(el * 2)) 
// В вызываемой функции аргумент (el или любое другое название переменной) - содержимое элемента массива
// Вывод в консоли: 2, 4, 10

console.log(resultMetod) // undefined

console.log(myArr) // [ 1, 2, 5 ] - оригинальный массив не изменился

// МЕТОД map()
// Оригинальный массив не меняется
// Метод возвращает новый массив
const myArr2 = [1, 2, 3]

// A) неявный возврат:
const newArr = myArr2.map(el => el * 3)

console.log(myArr2) // [ 1, 2, 3 ]
console.log(newArr) // [ 3, 6, 9 ]

// B) явный возврат:

// 1. неправильно
/*
const newArrTwo = myArr2.map((el) => {
    el * 3
})

console.log(myArr2) // [ 1, 2, 3 ]
console.log(newArrTwo) // [ undefined, undefined, undefined ]
*/

// 2. правильно
const newArrTwo = myArr2.map((el) => {
    return el * 3
})

console.log(myArr2) // [ 1, 2, 3 ]
console.log(newArrTwo) // [ 3, 6, 9 ]