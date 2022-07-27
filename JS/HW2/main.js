// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let mass = ['metal', 'element', 25 + 10, 3.14, true, false, 'git', "javaScript", 10, 10 % 3];

console.log(mass[0]);
console.log(mass[1]);
console.log(mass[2]);
console.log(mass[3]);
console.log(mass[4]);
console.log(mass[5]);
console.log(mass[6]);
console.log(mass[7]);
console.log(mass[8]);
console.log(mass[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: 'JS 4 Kids',
    pageCount: +'300',
    genre: 'Edu',
};

let book2 = {
    title: 'HTML/CSS 4 Kids',
    pageCount: +'50',
    genre: 'Comic',
};

let book3 = {
    title: 'React 4 Kids',
    pageCount: +'1000000',
    genre: 'BrainF__k',
};

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - масив.
// Кожен автор має поля name,age

let bookAut1 = {
    title: 'Simpsons',
    pageCount: +'5000',
    genre: 'Satire',
    Authors: [
        {name: 'Matt Groening', age: 68},
        {name: 'Sam Simon', age: 59}
    ]
};

let bookAut2 = {
    title: 'Forgotten Realms',
    pageCount: +'2000',
    genre: 'Fantasy',
    Authors: [
        {name: 'Robert Salvatore', age: 64},
        {name: 'Ed Greenwood', age: 63}
    ]
};

let bookAut3 = {
    title: 'Stick Control',
    pageCount: +'46',
    genre: 'Drum Book',
    Authors: [
        {name: 'George Lawrence Stone', age: 81},
        {name: 'Dom Famularo', age: 69}
    ]
};

//- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача

let user = [
    {name: 'Kostya Man', username: 'koskoks', password: 'kOsTya88'},
    {name: 'Dima May', username: 'dredd', password: 'qwerty'},
    {name: 'Vanya Sept', username: 'IvanDIvan', password: '12345'},
    {name: 'Victor Free', username: 'Vik93', password: 'qweasd'},
    {name: 'VasUA Good', username: 'deadorcs', password: '200+300=blessing'},
    {name: 'Antonov Bridge', username: 'None', password: 'NoWhere2Run'},
    {name: 'Crimea', username: 'NearFuture', password: 'Goodwill_gesture'},
    {name: 'HIMARS', username: 'HolyFire', password: 'FreeLand'},
    {name: 'Bayraktar TB2', username: 'KaBoom', password: 'PidigrivsyaNavar'},
    {name: 'North Potato', username: '4Positions', password: 'IllShowYou'},
]

console.log(user[0].password);
console.log(user[1].password);
console.log(user[2].password);
console.log(user[3].password);
console.log(user[4].password);
console.log(user[5].password);
console.log(user[6].password);
console.log(user[7].password);
console.log(user[8].password);
console.log(user[9].password);