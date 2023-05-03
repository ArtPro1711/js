// Масиви та об'єкти:

// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [15, true, 'asd', 145, 31, false, 'w1t23td', 2, 6, 1000]
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {title: 'book1', pageCount: '231', genre: 'Fantasy'}
let book2 = {title: 'book2', pageCount: '510', genre: 'Sci-Fi'}
let book3 = {title: 'book3', pageCount: '132', genre: 'Mystery'}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book4 = {title: 'book1', pageCount: '231', genre: 'Fantasy', authors: ['name', 'age']}
let book5 = {title: 'book2', pageCount: '510', genre: 'Sci-Fi', authors: ['name', 'age']}
let book6 = {title: 'book3', pageCount: '132', genre: 'Mystery', authors: ['name', 'age']}

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {user: 'alex', username: 'alx', password: 'al123ex'},
    {user: 'max', username: 'max322', password: '1235'},
    {user: 'anna', username: 'an98', password: '45373'},
    {user: 'vasya', username: 'vas4566', password: '1347'},
    {user: 'kirill', username: 'kirll99', password: '16547'},
    {user: 'danya', username: 'dan545', password: 'dfxg123'},
    {user: 'masha', username: 'ma76sha', password: 'egs211221'},
    {user: 'petro', username: 'petr98', password: 'nvxxn1256'},
    {user: 'lyuda', username: 'lda2000', password: 'mnnmh7543'},
    {user: 'tanya', username: 'tyn04', password: 'tn898kos'},
];
console.log(users[0]['password']);
console.log(users[1]['password']);
console.log(users[2]['password']);
console.log(users[3]['password']);
console.log(users[4]['password']);
console.log(users[5]['password']);
console.log(users[6]['password']);
console.log(users[7]['password']);
console.log(users[8]['password']);
console.log(users[9]['password']);

// Логічні розгалуження:

//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 1
if (x !== 0)
    console.log('Вірно')
else
    console.log('Невірно')

x = 0
if (x !== 0)
    console.log('Вірно')
else
    console.log('Невірно')

x = -3
if (x !== 0)
    console.log('Вірно')
else
    console.log('Невірно')

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 55
if (time>45)
    console.log('4 четверть')
else if (time>30)
    console.log('3 четверть')
else if (time>15)
    console.log('2 четверть')
else
    console.log('1 четверть')

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 30
if (day>20)
    console.log('це число потрапляє у 3 декаду')
else if (day>10)
    console.log('це число потрапляє у 2 декаду')
else
    console.log('це число потрапляє у 1 декаду')

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let weekday = 1 //prompt('номер дня тижня:')
switch (weekday) {
    case '1':
        document.write('<div>monday</div>')
        break
    case '2':
        document.write('<div>tuesday</div>')
        break
    case '3':
        document.write('<div>wednesday</div>')
        break
    case '4':
        document.write('<div>thursday</div>')
        break
    case '5':
        document.write('<div>friday</div>')
        break
    case '6':
        document.write('<div>saturday</div>')
        break
    case '7':
        document.write('<div>sunday</div>')
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let a = 100
let b = 10
if (a>b)
    console.log(a)
else if (a<b)
    console.log(b)
else
    console.log('a=b')

//     - є змінна y, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній y значення "default"  якщо значення змінної y являється falsy (хибноподібні, тобто приводиться до false)
let y = ''
if (y === false || y === null || y === undefined || y === 0 || y === -0 || y === 0n || y === NaN || y === "" || y === '' || y === ``)
    y = 'default'
console.log(y);

//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
]
if (coursesAndDurationArray[0].monthDuration > 5)
    console.log('Супер')
if (coursesAndDurationArray[1].monthDuration > 5)
    console.log('Супер')
if (coursesAndDurationArray[2].monthDuration > 5)
    console.log('Супер')
if (coursesAndDurationArray[3].monthDuration > 5)
    console.log('Супер')
if (coursesAndDurationArray[4].monthDuration > 5)
    console.log('Супер')
if (coursesAndDurationArray[5].monthDuration > 5)
    console.log('Супер')