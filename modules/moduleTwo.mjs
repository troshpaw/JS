
// 1. Экспорт по умолчанию
import sumNumbers from './moduleOne.mjs'

const res1 = sumNumbers(5, 10)
console.log(res1) // 15

// В импортируемом файле - sum, в текущем - sumNumbers.

// 2. Несколько экспортов
import {
    one,
    two
} from './moduleOne.mjs'

console.log(one) // 1
console.log(two) // two

// 3. Переименование импортов
import {
    three as varThree,
    four as varFour
} from './moduleOne.mjs'

console.log(varThree) // 3
console.log(varFour) // 4