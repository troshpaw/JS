
// КЛАССЫ И ПРОТОТИПЫ
/* Классы позволяют создавать прототипы для объектов.
На основании прототипов создаются экземпляры.
Экземпляры могут иметь собственные свойства и методы. 
Экземпляры наследуют свойства и методы прототипов. */

/* Классы в JS - синтаксическая надстройка над функциями и объектами.
Экземпляры класса в JS создаются с помощью вызова функции.
Класс в JS - это шаблон для создания экземпляров класса. */

class Comment {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }

    upvote() {
        this.votesQty += 1
    }
}
// constructor и upvote - методы класса
// constructor вызывается только тогда, когда создается новый экземпляр класса
// метод upvote будет наследоваться всеми экземплярами класса Comment

// this - переменная, которая указывает на экземпляр класса

// Создание новых экземпляров (объектов) класса Comment:
const firstComment = new Comment('First comment') // вызывается функция (метод) constructor
// this.text = 'First comment'
const secondComment = new Comment('Second comment')
// this.text = 'Second comment'

console.log(firstComment) // Comment { text: 'First comment', votesQty: 0 }
// text, votesQty - собственные свойства экземпляра класса
// Более подробно рассмотреть структуру объекта можно в консоли браузера.

// вызов метода upvote (унаследованный метод с родительского класса Comment):
firstComment.upvote()
console.log(firstComment) // Comment { text: 'First comment', votesQty: 1 }

firstComment.upvote()
console.log(firstComment) // Comment { text: 'First comment', votesQty: 2 }

// Проверка принадлежности конкретного экземпляра классам:
firstComment instanceof Comment // true
firstComment instanceof Object // true

/* Вывод:
Объект firstComment имеет собственные свойства, наследует все свойства (методы) класса Comment и класса Object. 
Т.к. Comment наследует свойства (методы) класса Object (цепочка прототипов в JS: firstComment -> Comment -> Object).*/

// Проверка принадлежности какого-либо свойства экземпляру конкретного класса:
firstComment.hasOwnProperty('text') // true
firstComment.hasOwnProperty('votesQty') // true
firstComment.hasOwnProperty('upvote') // false, т.к. upvote не свобственное свойство объекта firstComment, upvote наследуется от родительского класса Comment
firstComment.hasOwnProperty('hasOwnProperty') // false, т.к. hasOwnProperty наследутся от класса Object


// СТАТИЧЕСКИЕ МЕТОДЫ
class CommentWithStaticMethod {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }

    upvote() {
        this.votesQty += 1
    }
    static mergeComments(first, second) {
        return `${first} ${second}`
    }
}
// static метод mergeComments доступен как свойство класса и не наследуется экземплярами класса.

const resMethodMergeComments = CommentWithStaticMethod.mergeComments('First comment', 'Second comment')
console.log(resMethodMergeComments) // First comment Second comment


//РАСШИРЕНИЕ ДРУГИХ КЛАССОВ
class NumbersArray extends Array {
    sum() {
        return this.reduce((el, acc) => acc += el, 0)
    }
}

const myArray = new NumbersArray(2, 5, 7)
/* сначала вызывается конструктор родительского класса Array, который возвращает новый объект (массив),
обладающий методами класса NumbersArray, методами массивов (класс Array) и т.д. по цепочке прототипов. */

console.log(myArray) // NumbersArray(3) [ 2, 5, 7 ]
console.log(myArray.sum()) // 14

// Метод sum() доступен как метод любого экземпляра класса NumbersArray
// Цепочка прототипов в данном примере: myArray -> NumbersArray -> Array -> Object

// Скрытое свойство __proto__
console.log(Comment.prototype === firstComment.__proto__) // true
console.log(NumbersArray.prototype === myArray.__proto__) // true

console.log(Object.prototype === firstComment.__proto__) // false

// Строки и числа ведут себя как объекты:
const myName = 'Jason'
myName.toUpperCase() // JASON

const mySurname = new String('Statham')
mySurname.toUpperCase() // STATHAM