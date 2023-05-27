
// ОПЕРАТОРЫ
// Оператор - встроенная (внутренняя) в JS функция.

// А) символьные и текстовые:
// Основные символьные операторы:
// 1. арифметические: +, -, *, / 
// 2. сравненя: ===, !==, <=, >=
// 3. логические: !, &&, ||
// 4. присваивания: =

// Текстовые операторы: typeof, instanceof, new, delete и т.д.

// , - тоже оператор.

// B) унарные и бинарные:
// У унарных операторов всегда один операнд (аргумент): a++, +a, delete a, typeof a, new Object().
// У бинарных операторов два операнда: a = 5, a + b, a += b, a === b, a && b.

// Оператор === сравнивает и типы, и значения переменных. Т.е. 5 (число) != (не равно) '5' (строка).

// C) Форматы записи операторов: 
// 1. Инфиксная запись (оператор находится между операндами): a + b.
// 2. Префиксная запись (оператор перед операндом): ++a.
// 3. Постфиксная запись: a++, myFunction(). Здесь () - оператор вызова функции.

// ЛОГИЧЕСКИЕ ОПЕРАТОРЫ: !, &&, ||
// ! - не, всегда возвращает значение типа boolean (treu или false)
// && - и, || - или, возвращают значение одного из операторов.

// Ложные значения - значения, которые при приведении к логическому типу дают false.
// Boolean(value) -> false - приведение к логическому типу, Boolean() - встроенная функция.
// Основные ложные значения:
// 1. false,
// 2. 0,
// 3. '' (пустая строка),
// 4. undefined,
// 5. null.

// Примеры (можно в консоли браузера):
console.log(Boolean('')) // false
console.log(Boolean(null)) // false
console.log(Boolean(' ')) // true
console.log(typeof 123) // number
console.log(typeof '123') // string
console.log(typeof '') // string
console.log(typeof false) // boolean
console.log(typeof true) // boolean
console.log(typeof 10 === 'number') // true, т.к. сравниваются операнд "typeof 10" и "'number'", т.е. 'number' = 'number'
console.log((typeof 10) === 'number') // true, то же самое, что и в примере выше, но более наглядно с примененим скобок
console.log(typeof (10 === 'number')) // boolean

let isUndefined
console.log(typeof isUndefined === 'undefined') // true

// Приеры с оператором: "!" (дает либо true, либо false):
console.log(!10) // false
console.log(!0) // true
console.log(!'abc') // false
console.log(!undefined) // true
// !! позволяет проверить ложность значения:
console.log(!!10) // true
console.log(!0) // false
console.log(!!'') // false
console.log(!!' ') // true

// && и || - операторы короткого замыкания
// Примеры c &&: 
'Expression_1' && 'Expression_2' 
// Если выражение_1 ложно, то выражение_2 игнорируется и возвращается результат выражения_1.
console.log(undefined && 100) // undefined
// Если выражение_1 истинно, то проверяется значение выражения_2 и возвращается результат выражения_2.
console.log(50 && '100') // 100

// Примеры с ||:
'Expression_1' || 'Expression_2' 
// Если выражение_1 истинно, то выражение_2 игнорируется и возращается результат выражения_1.
console.log(50 || '100') // 50
// Если выражение_1 ложно, то проверяется значение выражения_2 и возращается результат выражения_2.
console.log(undefined || 100) // 100

// Прием в JS для взоа функции в зависимости от значений каких-либо перменных:
const b = 10
let result 

result = b && console.log('Выполнено!')
console.log(result) // undefined, но при этом функция console.log() выполнилась.

let c
resulet = c && console.log('Выполнено!')
console.log(result) // undefined, но функция console.log() не выполнилась.

// ОПЕРАТОР РАЗДЕЛЕНИЯ ОБЪЕКТА НА СВОЙСТВА ...
const button = {
    width: 100,
    text: 'OK'
}
const redButton = {
    ...button,
    color: 'red'
}
console.log(redButton) // { width: 100, text: 'OK', color: 'red' }
console.table(redButton) // вывод в виде таблицы
// Если бы у button уже было бы свойство color, то его значение было бы перезаписано на red.

// Объедиение объектов:
const anyButton = {
    ...button,
    ...redButton
}

// Оператор ... создает новый объект!

// КОНКАТЕНАЦИЯ СТРОК
'Hello' + ' ' + 'World!'

const hello = 'Hello'
const world = "World"
const greeting = hello + ' ' + world + '!'
console.log(greeting)

// Шаблонные строки
const greetingTwo = `${hello} ${world}! This is JS!` // на месте hello или word может находиться любое выражение, например, вызов функции.
console.log(greetingTwo) // Hello World! This is JS!

const templateString = `${console.log()} ${world}! This is JS!`
console.log(templateString) // undefined World! This is JS!

// Автоматическая конвертация типов
const number = 10
console.log(typeof number) // number
const word = 'string'
console.log(typeof word) // string

const convertedString = number + word

console.log(convertedString) // 10string - содержимое строки
console.log(typeof convertedString) // string

console.log(undefined + 'abc') // undefinedabc - содержимое строки