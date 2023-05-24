
// МУТАЦИЯ переменных

const person = {
    name: 'Nick',
    age: 30
}

// Пример 1:
person.age = 35 // мутация объекта, на который ссылается переменная person
person.sex = 'man' // мутация объекта

// Пример 2 (мутирование копии):
const person2 = person // копирование ссылки (copy by reference)

console.log(person.name) // Nick

person2.name = 'Mike'

console.log(person.name) // Mike - мутация значения свойства name объекта person
console.log(person2.name) // Mike

// СПОСОБЫ ИЗБЕЖАТЬ МУТАЦИЙ

const person3 = {
    name: 'John',
    age: 10
}

// Вариант 1
const person4 = Object.assign({}, person) // создание нового объекта (новая ссылка на новый объект) с идентичными свойствами и их значениями

person4.age = 15
console.log(person3.age) // 10
console.log(person4.age) // 15 
// => значение свойства age объекта person3 не изменилось

// Если у объекта есть вложенные объекты, то способ не работает (сохраняются ссылки на вложенные объекты).

// Вариант 2
const person5 = {
    name: 'John',
    age: 10
}

const person6 = { ...person5 } // новая ссылка на новый объект; ... - оператор разделения объекта на свойства

// Если у объекта есть вложенные объекты, то способ также не работает.

// Вариант 3
const person7 = {
    name: 'John',
    age: 10
}

const person8 = JSON.parse(JSON.stringify(person7))

// В текущем методе ссылки на вложенные объекты (объект содержит в свойствах объект) не сохраняются, т.е. способ работает и при наличии вложенных объектов.
// Пример вложенного объекта (hobby - вложенный объект):
const person9 = {
    name: 'John',
    age: 10,
    hobby: {
        first: 'futbool',
        second: 'hockey'
    }
}