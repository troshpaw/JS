
// ОБРАБОТКА ОШИБОК
// Рекомендуется все блоки кода, в которых могут возникать ошибки, помещать в TRY/CATCH блок

// 1. Без использования TRY/CATCH
const fnWithError = () => {
    throw new Error('This is ERROR!') // ошибка
}
/*
fnWithError()  // программа останавливается в момент вызова функции, содержащей ошибку

console.log("Continue") // код не выполнен
*/

//2. С использованием TRY/CATCH
try {
    fnWithError()
} catch (error) {
    console.error(error)
    console.log(error.message)
}

console.log("Continue") // программа выполнена полностью, код выполнен, ошибка "поймана"