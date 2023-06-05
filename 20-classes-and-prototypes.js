
// КЛАССЫ И ПРОТОТИПЫ
/* Классы позволяют создавать прототипы для объектов.
На основании прототипов создаются экземпляры.
Экземпляры могут иметь собственные свойства и методы. 
Экземпляры наследуют свойства и методы прототипов. */

class Comment {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }

    upvote() {
        this.votesQty += 1
    }
}

const firstComment = new Comment('First comment')

console.log(firstComment) // Comment { text: 'First comment', votesQty: 0 }
// Более подробно рассмотреть структуру объекта можно в консоли браузера.

// Проверка принадлежности конкретного экземпляра классам:
firstComment instanceof Comment // true
firstComment instanceof Object // true

