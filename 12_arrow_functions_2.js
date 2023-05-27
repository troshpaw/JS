
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
// 04:57:37 - 05:08:22