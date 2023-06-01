
// ЦИКЛЫ
// Типы циклов: 1) for, 2) for ... in ..., 3) while, 4) do ... while, 5) for ... of ...
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

// b) forEach:
myArray.forEach((element, index) => {
    console.log(`Element ${index} = ${element}`)
})
/* В вызываемой функции: первый аргумент (elenent или любое другое название переменной) - содержимое элемента массива;
второй аргумент - (index или любое другое название переменной) - индекс элемента массива. */

/* Вывод:
Element 0 = first
Element 1 = second
Element 2 = third
*/

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

// 4. for ... in ...
// для объектов:
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
jsKnow = true
*/

// forEach для ПЕРЕБОРА свойств ОБЪЕКТА
Object.keys(myObject)

// 07:45