
// ЦИКЛЫ:
// 1) for
// 2) for ... in ...
// 3) while
// 4) do ... while
// 5) for ... of ...

// 1. for
for (let i = 0; i < 5; i ++) {
    console.log(i)
}

/* Для ПЕРЕБОРА элементов МАССИВОВ циклы использовать не рекомендуется. 
Желательно использовать функции высшего порядка массивов: forEach, map, reduce и т.д. */

const myArray = ['first', 'second', 'third']

// a) for:
for (let i = 0; i < myArray.length; i++) {
    console.log(`Element ${i} = ${myArray[i]}`)
}

// b) forEach (предпочтительный спооб):
myArray.forEach((element, index) => {
    console.log(`Element ${index} = ${element}`)
})
/* В вызываемой функции: первый аргумент (elenent или любое другое название переменной) - содержимое элемента массива;
второй аргумент - (index или любое другое название переменной) - индекс элемента массива. */

/* Вывод:
Element 0 = first
Element 1 = second
Element 2 = third */

// 2. while (условие на ходится до блока имполняемого кода)
let index = 0

while (index < 5) {
    console.log(index)
    index++
}
// Цикл выполняется, пока условие (index < 5) - true.

// 3. do ... while (условие находится перед блоком исполняемого кода)
index = 0

 do {
    console.log(index)
    index++
} while (index < 5)
// Цикл выполняется 1 раз, а далее пока условие (index < 5) - true.

index = 10

 do {
    console.log(index)
    index++
} while (index < 5)
// Цикл выполняется 1 раз.

// 4.1 for ... in ... для объектов:
const myObject = {
    name: 'Mike',
    age: 20,
    jsKnow: true
}

for (const key in myObject) {
    console.log(key, '=', myObject[key])
}
/* key (или любое другое имя переменной) - переменная, содержащая название любого свойства объекта; 
myObject (или любая другая перменная, содержащая ссылку на объект) - объект.

/* Вывод
name = Mike
age = 20
jsKnow = true */

// 4.1.1 forEach для перебора свойств объекта (альтернативный метод):
const myObjectTwo = {
    name: 'Nick',
    age: 30,
    jsKnow: false
}

// Пример 1:
// Метод Object.keys() возвращает массив из наименований свойств объекта:
Object.keys(myObjectTwo).forEach(key => {
    console.log(key, myObjectTwo[key])
})

/* Как работате метод:
const objToArr = Object.keys(myObjectTwo)
console.log(objToArr) // [ 'name', 'age', 'jsKnow' ]

objToArr.forEach(key => {
    console.log(key, myObjectTwo[key])
})
*/

// Пример 2:
// Метод Object.values() возвращает массив из значений свойств объекта:
Object.values(myObjectTwo).forEach(value => {
    console.log(value)
})

// Методы Object.keys() и Object.values() конвертируют объект в массив.

// 4.1 for ... in ... для массивов (не рекомендуется, лучше перебирать методом forEach):
const anyArray = [true, 10, 'hello']

for (const key in anyArray) {
    console.log(key, '=', anyArray[key])
}

/* Вывод:
0 = true
1 = 10
2 = hello */

// 5.1 for ... of ... для строк:
const myString = 'Hey'

// Перебор каждого элемента строки:
for (const letter of myString) {
    console.log(letter)
}

/* Вывод:
H
e
y */

// 5.2 for ... of ... для массивов (не рекомендуется, лучше перебирать методом forEach):
const easyArray = [1, 'abc', true]

for (const element of easyArray) {
    console.log(element)
}

/* Вывод:
1
abc
true */

// 5.3 for ... of ... для объектов не используется!