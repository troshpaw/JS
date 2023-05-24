
// ДИНАМИЧЕСКАЯ ТИПИЗАЦИЯ ПЕРЕМЕННЫХ

// Пример 1:
let a 
a = 'abc' // string
a = 10 // number
a = undefined // undefined

// Пример 2:
function b() {
    console.log('Hello')
}
b() // 'Hello'

b = 10
// b() //TypeError: a is not a function
console.log(b) // 10

// Правильное объявление функции (использование const):
const c = () => {
    console.log('Hello')
}
c() // 'Hello'
// c = 10 // TypeError: Assignment to constant variable.

// Вывод: стараться использовать const везде, где возможно!