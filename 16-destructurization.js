
// ДЕСТРУКТУРИЗАЦИЯ
// 1) Деструктуризация объекта
const userProfile = {
    nameUser: 'Nick',
    ageUser: 20,
    confirmed: true
}
// Объявление новых переменных и присваивание значений на основе элементов массива
const {nameUser, ageUser} = userProfile
const {confirmed} = userProfile

console.log(nameUser) // Nick
console.log(ageUser) // 20
console.log(confirmed) // true

// 2) Деструктуризация массива
const fruits = ['apple', 'banana', 'grape']

/* Объявление новых переменных и присваивание значений на основе элементов массива.
При деструкт. массива именна новых переменных можно использовать любые, но в определенном порядке: fruitOne = fruits[0],  fruitTwo = fruits[1] и т.д.*/
const [fruitOne, fruitTwo] = fruits

console.log(fruitOne) // apple
console.log(fruitTwo) // banana

// Объявление новых переменных и присваивание значений на основе элементов массива (anyFruit = fruits[0], anyFruit2 = fruits[1] и т.д.)
const [anyFruit, anyFruit2, anyFruit3] = fruits

console.log(anyFruit) // apple
console.log(anyFruit2) // banana
console.log(anyFruit3) // grape

// 3) Деструкт. в функциях
const userProfile2 = {
    nameUser: 'Mike',
    commentsQty: 25,
    // commentsQty: 0,
    confirmed: false
}

const userInfo = ({nameUser, commentsQty}) => {
    if (!commentsQty) {
        return `User ${nameUser} doesn,t have comment.` 
    }
    return `User ${nameUser} have ${commentsQty} comments.`
}

const resultFn = userInfo(userProfile2)

console.log(resultFn) // User Mike have 25 comments.