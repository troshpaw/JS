
// ФУНКЦИОНАЛЬНЫЕ ВЫРАЖЕНИЯ
// Функциональные выражения всегда анонимины

let a
let b
let c
let d

// Оъявленная функция:
function muFn (paramOne, paramTwo) {
    return a + b
}

// Функциональное выражение:
/*
function(c, d) {
    return c + d
}
*/

// Присваивание функционального выражения переменной variableFunctionalExpression
const variableFunctionalExpression = function(paramOne, paramTwo) {
    return c + d
}

variableFunctionalExpression(1, 2)

// Функциональное выражение в вызове другой функции:
setTimeout(function() {
    console.log('Отложенное сообщение')
}, 1000)