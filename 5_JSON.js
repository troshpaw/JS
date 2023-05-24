
// JSON - JavaScript Object Notation - формат обменна данными между хостами.
// Пример JSON:
/*
{
    "user": 1,
    "id": 100,
    "status": {
        "completed": true
    }
}
*/

// JSON передается в виде строки

// Простой объект:
const myOldCity = {
    city: 'Moscow',
    popular: true,
    country: 'Russia'
}

// Конвертация объекта в JSON:
const postStringify = JSON.stringify(myOldCity)
console.log(postStringify) // {"city":"Moscow","popular":true,"country":"Russia"} - JSON

// Конвертация JSON в объект:
const postParse = JSON.parse(postStringify)
console.log(postParse) // { city: 'Moscow', popular: true, country: 'Russia' } - объект

