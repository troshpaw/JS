
// 1. Экспорт по умолчанию
const sum = (a, b) => a + b

export default sum

// 2. Несколько экспортов
// Имена переменных в разных модулях должны совпадать!
const one = 1
const two = 'two'

export {
    one,
    two
}

// 3. Переименование импортов
const three = 3
const four = 4

export {
    three,
    four
}