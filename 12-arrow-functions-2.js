
// Значение параметров функции по умолчанию
// Пример 1:
// Ключевое слово function:
function multByFactor(value, multiplier = 1) {
    return value * multiplier
}

multByFactor(10, 2) // 20
multByFactor(5) // 5, т.к. аргументу multiplier не передано значение, он равен дефолтному значению, т.е. 1.

// Функц. выражение:
const multByFactorFunctionalExpression = function(value, multiplier = 10) {
    return value * multiplier
}

console.log(multByFactorFunctionalExpression(2, 2)) // 4
console.log(multByFactorFunctionalExpression(2)) // 20

// Стрелочная функция:
const multByFactorArrayFunction = (value, multiplier = 5) => {
    return value * multiplier
}

console.log(multByFactorArrayFunction(3, 4)) // 12
console.log(multByFactorArrayFunction(3)) // 15

// Пример 2:
// a) Функция возвращает НЕЯВНОЕ ЗНАЧЕНИЕ (одно из преимуществ стрелочных функций)
const firstPost = {
    heading: 'Training',
    release: 100
}

const newPost = (post, addDate = Date()) => ({
    ...post,
    addDate // то же самое, что и "addDate: addDate"
})
// Название параметра "addDate" функции совпадает с названием свойства нового объекта "newPost"
// Значение параметра "addDate" функции = значению свойства "addDate" нового объекта "newPost"
// "addDate = Date()" - дефолтный параметр, "Date()" - встроенная в JS функция
// В данном примере тело функции обернуто в (), а {} содержат тело объекта

const publishedPost = newPost(firstPost)
console.log(publishedPost)

// b) Аналогичный пример, но С ЯВНЫМ ВОЗВРАТОМ ЗНАЧЕНИЯ ФУНКЦИИ (ОБЪЕКТА)
const newPostTwo = (post, addDate = Date()) => {
    return {
        ...post,
        addDate
    }
}

const publishedPostTwo = newPostTwo(firstPost)
console.log(publishedPostTwo)