
// ФУНКЦИИ

function nameFunction(parameter1, parameter2) {} // структура функции
// Значения parameter1, parameter2 определеются в момент вызова функции. 
// Параметры - это переменные, которые действуют только внутри функции.

let a = 1
let b = 2

function sum(a, b) {
    const c = a + b
    console.log(c)
}

sum(a, b) // 3
sum(10,20) // 30

// Функция может быть:
// 1. именованной (пример выше)
// 2. присвоена переменной
// 3. анонимной
// 4. аргументом при вызове другой функции
// 5. значением свойства (метода) объекта

// Функция - это объект
// console.dir(sum) // просмотр структуры объекта sum (функция) в консоли браузера


// RETURN в теле функции
// Функция возвращает undefined, если нет инструкции return.
function functionWithoutReturn(a, b) {
    const c = a + b
}

console.log(functionWithoutReturn(10,20)) // undefined

// Если есть return:
function functionWithReturn(a, b) {
    let c
    a = a + 1
    c = a + b
    return c
}

console.log(functionWithReturn(1, 2)) // 4

// 03:00