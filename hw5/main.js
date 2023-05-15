// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let sRectangle = (a, b) => {return a * b}
document.write(`<p>${sRectangle(4, 7)}</p>`)

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let sCircle = (r) => {return 3.14 * r * r}
document.write(`<p>${sCircle(6)}</p>`)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let sCylinder = (h, r) => {return 2 * 3.14 * r * h + 2 * 3.14 * r * r}
document.write(`<p>${sCylinder(7, 3)}</p>`)

// - створити функцію яка приймає масив та виводить кожен його елемент
let users = [`max`, `vasya`, `polina`, `artem`]
let arr = (array) => {
    for (const arrayElement of array) {
        document.write(`<div>${arrayElement}</div>`)
    }
}
arr(users)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let parahraph = (p) => {document.write(`<p>${p}</p>`)}
let someText = `pklgdsoiniu`
parahraph(someText)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let ulfunc = (text) => {
    document.write(`
        <ul>
            <li>${text}</li>
            <li>${text}</li>
            <li>${text}</li>
        </ul>
        `)
}
let someText2 = `nyx`
ulfunc(someText2)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let vuznli = (list, a) => {
    document.write(`<ul>`)
    for (let i = 0; i < a; i++) {
        document.write(`<li>${list}</li>`)
    }
    document.write(`</ul>`)
}
let someText3 = `phantom`
vuznli(someText3, 4)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let listFunc = (array) => {
    document.write(`<ul>`)
    for (let i = 0; i < array.length; i++) {
        const arrayElement = array[i];
        document.write(`<li>${arrayElement}</li>`)
    }
    document.write(`</ul>`)
}
let arty = [123, `asd`, false]
listFunc(arty)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users1 = [
    {id: 51425, name: `artem`, age: 21},
    {id: 12364, name: `max`, age: 25},
    {id: 58674, name: `vasya`, age: 20}
]
let divFunc = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        const arrElement = arr[i];
        document.write(`<div>id - ${arrElement.id}, name - ${arrElement.name}, ${arrElement.age} years</div>`)
    }
}
divFunc(users1)
// - створити функцію яка повертає найменьше число з масиву
let numbers = [3, 6, 1, 9, 35]
let minNum = (arr) => {
    let min = arr[0]
    for (const number of arr) {
        if (min > number) {
            min = number;
        }
    }
    return min
}
document.write(`<p>${minNum(numbers)}</p>`)

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sum = (arr) => {
    let sumA = 0
    for (let i = 0; i < arr.length; i++) {
        const arrElement = arr[i];
        sumA += arrElement
    }
    return sumA
}
document.write(`<p>${sum([1,2,10])}</p>`)

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap = (arr,index1,index2) => {
    let s1 = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = s1
    return arr
}
document.write(`<p>${swap([11,22,33,44],0,1)}</p>`)

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    for (const currval of currencyValues) {
        if (currval.currency === exchangeCurrency) {
            x = currval.value
        }
    }
    result = sumUAH / x
    return result
}
document.write(`<p>${exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD')}</p>`)