
// УСЛОВНЫЕ ИНСТРУКЦИИ: if, if ... else, switch, тернарный оператор

// 1. if
let val = 10

if (val > 5) {
    val += 20
}
// т.к. val > 5 = true, то условие выполняется

console.log(val) // 30

// if с оператором отрицания:
const person = {
    age: 20
}

if (!person.name) {
    console.log('Имя не указано!')
    /* другие действия в случае, если
    свойства name у объекта person нет */
}
// Пояснение:
console.log(person.name) // undefined
console.log(!person.name) // !undefined => true 
console.log(!!person.name) // !!undefined => false

// 2. if ... else:
let count = 5

if (count <= 10) {
    count += 1
} else {
    count -= 1
}

console.log(count) // 6

// 3. if ... else if:
const age = 25

if (age > 18) {
    console.log('Is adult')
} else if (age >= 12) {
    console.log('Is teenager')
} else {
    console.log('Is child')
}

// Предпочтительный формат if:
if (age >= 18) {
    console.log('Is adult')
}

if (age >= 12 && age < 18) {
    console.log('Is teenager')
} 

if (age < 12) {
    console.log('Is child')
}

// Использование if в функциях:
const sumPositivNumber = (argOne, argTwo) => {
    if (typeof argOne !== 'number' || typeof argTwo !== 'number') {
        return 'Arguments are not number!'
    }

    if (argOne <= 0 || argTwo <= 0) {
        return 'Arguments are not positive!'
    }

    return argOne + argTwo
}

let resultFnTwo = sumPositivNumber(1, 2)
console.log(resultFnTwo) // 3

resultFnTwo = sumPositivNumber('abc', true)
console.log(resultFnTwo) // Arguments are not number!

resultFnTwo = sumPositivNumber(1, -2)
console.log(resultFnTwo) // Arguments are not positive!

// 4. switch (альтернатива if .. else if):
const month = 4

switch (month) {
    case 1:
        console.log('January')
        break
    case 2:
        console.log('February')
        break
    case 3:
        console.log('March')
        break
    default:
        console.log('This is not month!')
}

// 5. Тернарный оператор:
// Конструкция с тернарным оператором - выражение => возвращает значение.
// Синтаксис: Условие ? Выражение_1 : Выражение_2
// Если условие правдиво, то возвращается результат Выражения_1.
// Если условие ложно, то возвращается результат Выражения_2.
/* Предпочтительный формат записи:
Условие
    ? Выражение_1
    : Выражение_2
*/

// Пример 1:
const value = 11

value
    ? console.log('Условие истинно')
    : console.log('Условие ложно')

// Пример 2:
const value1 = 11
const value2 = 25

const myFunction1 = (value1, value2) => {
    console.log(value1 + value2)
    return value1 + value2
}

const myFunction2 = () => {
    console.log(`Одно из значений пременных (${value1} или ${value2}) ложно.`)
}

value1 && value2
    ? myFunction1(value1, value2)
    : myFunction2()

// Пример 3:
let value3 = 11
console.log(value3 >= 0 ? value3 : -value3) // 11

value3 = -5
const res = value3 >= 0 ? value3 : -value3
console.log(res) // 5