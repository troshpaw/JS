
// ПРОМИСЫ
// Промисы позволяют обрабатывать отложенные во времени события.
// Промис может вернуть ошибку, если результат предоставить невозможно.

// Состояния промиса:
// 1. ожидание (pending)
// 2. исполнен (resolve)
// 3. отклонен (reject)

// Вновь созданный промис имеет состояние pending. Создание промиса:
const myPromise = new Promise ((resolve, reject) => {
    /**
     * Выполнение асинхронных действий
     * 
     * Внутри этой функции нужно вызвать одну из функций resolve или reject
     */
})

// Получение результата промиса:
myPromise
    .then(value => {
        /**
         * Действие в случае успешного исполнения промиса
         * Значение value - это значение, переданное в вызове функции resolve внутри промиса
         */
    })
    .catch(error => {
        /**
         * Действие в случае отклюнения промиса
         * Значение error - это значение, переданное в вызове функции reject внутри промиса
         */
    })

// Пример получения данных с помощью FETCH API
/*
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.error(error))
*/
/* Промис создается: 1. внутри fetch, 2. внутри метода json.
Метод json возвращает промис. */

// Пример 2:
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        console.log(response)
        return response.json()
    })
    .then(json => console.log(json))
    .catch(error => console.error(error))

// Пример 3 (упрощение: ранее два промиса в примере, в текущем один)):
const getData = (url) => 
    new Promise((resolve, reject) => 
        fetch(url)
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(error => reject(error))
    )
// Функцию getData можно вынести в отдельный модуль и экспортировать при необходимости.

getData('https://jsonplaceholder.typicode.com/todos/10')
    .then(data => console.log(data))
    .catch(error => console.log(error.message))


// ASYNC/AWAIT
// 10:23:28