
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
// ASYNC (асинхронная функция) - это функция, которая возвращает промис.

// Пример объявления:
async function asyncFnExample() {
    // всегда возыращает промис
}

// Пример 1:
const asyncFn = async () => {
    return 'Success!'
}

asyncFn()
    .then(value => console.log(value))

// Пример 2:
const asyncFnWithError = async () => {
    throw new Error('This is error!')
}

asyncFnWithError()
    .then(value => console.log(value))
    .catch(error => console.log(error.message))


// AWAIT (используется только в асинхронных функциях)
// С помощью ключевого слова await можно ожидать результата другого промиса.

// Пример:
const asyncFnWithAwait = async () => {
    // await <Promise> // ожидание результатов промиса  
}

asyncFnWithAwait()

// Пример 2:
const timerPromise = () => 
    new Promise((resolve, reject) => 
        setTimeout(() => resolve(), 2000))

const asyncFnFour = async () => {
    console.log('Timer starts')
    const startTime = performance.now()
    await timerPromise()
    const endTime = performance.now()
    console.log('Timer ended', endTime - startTime)
}

asyncFnFour()

// ПЕРЕХОД С ПРОМИСОВ НА ASYNC/AWAIT
const getDataTwo = (url) => 
    new Promise((resolve, reject) => 
        fetch(url)
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(error => reject(error))
    )

getDataTwo('https://jsonplaceholder.typicode.com/todos/10')
    .then(data => console.log(data))
    .catch(error => console.log(error.message))

// =>

const getDataThree = async (url) => {
    const res = await fetch(url)
    const json = await res.json()
    return json
}

getDataThree('https://jsonplaceholder.typicode.com/todos/10')
    .then(data => console.log(data))
    .catch(error => console.log(error.message))

// =>

const getDataFour = async (url) => {
    const res = await fetch(url)
    const json = await res.json()
    return json
}

const url = 'https://jsonplaceholder.typicode.com/todos/10'

const data = await getDataFour(url) // работает только в браузере   

// =>

const getDataFive = async (url) => {
    const res = await fetch(url)
    const json = await res.json()
    return json
}

try {
    const data = await getDataFive(url) // работает только в браузере
    console.log(data)
} catch (error) { // обработка ошибок
    console.log(error.message)
}

// Выводы:
// 1. async/await - синтаксическая надстройка над промисами.
// 2. await синтаксис возможен только внутри асинхронных функций.
// 3. async функция всегда возвращает Promise.
// 4. async функция ожидает результата иснтрукции await и не выполняет последующие инчтрукции.