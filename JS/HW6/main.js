// - Знайти та вивести довижину наступних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let h = 'hello world';
let l = 'lorem ipsum';
let j = 'javascript is cool';

console.log(h.length);
console.log(l.length);
console.log(j.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log(h.toUpperCase());
console.log(l.toUpperCase());
console.log(j.toUpperCase());


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let H = 'HELLO WORLD';
let L = 'LOREM IPSUM';
let J = 'JAVASCRIPT IS COOL';

console.log(H.toLowerCase());
console.log(L.toLowerCase());
console.log(J.toLowerCase());


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str1 = ' dirty string   ';

console.log(str1.trim());
//or
// console.log(str1.substring(1, 13));


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';

let str = 'Ревуть воли як ясла повні';

function stringToArray(str) {

    return str.split(' ');
}
console.log(stringToArray(str));


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let numbs = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];

// let map = numbs.map(number => `${number}`);
//or
let map = numbs.map(number => number.toString());

console.log(map);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11, 21, 3];

function sortNums(num,direction) {

    if (direction === 'ascending') {
        num.sort((a, b) => a - b);
    return num;
    }

    if (direction === 'descending') {
        num.sort((a, b) => b - a);
    return num;
    }

}
console.log(sortNums(nums, 'ascending'));

console.log(sortNums(nums, 'descending'));


// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
//     ];

// -- відсортувати його за спаданням за monthDuration

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
    ];

let sort = coursesAndDurationArray.sort((course1, course2) => course2.monthDuration - course1.monthDuration);

console.log(sort);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filter = coursesAndDurationArray.filter((course) => {
    if (course.monthDuration > 5) {

        return course;
    }
});

console.log(filter);


// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
let playCards = [

    {cardSuit: 'clubs', value: 6, color:'black'},
    {cardSuit: 'clubs', value: 7, color:'black'},
    {cardSuit: 'clubs', value: 8, color:'black'},
    {cardSuit: 'clubs', value: 9, color:'black'},
    {cardSuit: 'clubs', value: 10, color:'black'},
    {cardSuit: 'clubs', value: 'Jack', color:'black'},
    {cardSuit: 'clubs', value: 'Queen', color:'black'},
    {cardSuit: 'clubs', value: 'King', color:'black'},
    {cardSuit: 'clubs', value: 'Ace', color:'black'},

    {cardSuit: 'diamonds', value: 6, color:'red'},
    {cardSuit: 'diamonds', value: 7, color:'red'},
    {cardSuit: 'diamonds', value: 8, color:'red'},
    {cardSuit: 'diamonds', value: 9, color:'red'},
    {cardSuit: 'diamonds', value: 10, color:'red'},
    {cardSuit: 'diamonds', value: 'Jack', color:'red'},
    {cardSuit: 'diamonds', value: 'Queen', color:'red'},
    {cardSuit: 'diamonds', value: 'King', color:'red'},
    {cardSuit: 'diamonds', value: 'Ace', color:'red'},

    {cardSuit: 'hearts', value: 6, color:'red'},
    {cardSuit: 'hearts', value: 7, color:'red'},
    {cardSuit: 'hearts', value: 8, color:'red'},
    {cardSuit: 'hearts', value: 9, color:'red'},
    {cardSuit: 'hearts', value: 10, color:'red'},
    {cardSuit: 'hearts', value: 'Jack', color:'red'},
    {cardSuit: 'hearts', value: 'Queen', color:'red'},
    {cardSuit: 'hearts', value: 'King', color:'red'},
    {cardSuit: 'hearts', value: 'Ace', color:'red'},

    {cardSuit: 'spades', value: 6, color:'black'},
    {cardSuit: 'spades', value: 7, color:'black'},
    {cardSuit: 'spades', value: 8, color:'black'},
    {cardSuit: 'spades', value: 9, color:'black'},
    {cardSuit: 'spades', value: 10, color:'black'},
    {cardSuit: 'spades', value: 'Jack', color:'black'},
    {cardSuit: 'spades', value: 'Queen', color:'black'},
    {cardSuit: 'spades', value: 'King', color:'black'},
    {cardSuit: 'spades', value: 'Ace', color:'black'},

    {value: 'Joker', color:'red'},
    {value: 'Joker', color:'black'},
];

// - знайти піковий туз

let findSpadeAce = [];
for (let card of playCards) {
    if (card.cardSuit === 'spades' && card.value === 'Ace') {
        findSpadeAce.push(card);

    }
}
console.log(findSpadeAce);

//
// - всі шістки

let findAllSix = playCards.filter(card => card.value === 6);

console.log(findAllSix);

//
// - всі червоні карти

let findAllRed = [];
for (let card of playCards) {
    if (card.color === 'red') {
        findAllRed.push(card);
    }
}
console.log(findAllRed);

//
// - всі буби

let allDiamonds = playCards.filter(card => card.cardSuit === 'diamonds');

console.log(allDiamonds);

//
// - всі трефи від 9 та більше

let allHighClubs = [];
for (let cards of playCards) {
    if (cards.cardSuit === 'clubs' && cards.value !== 6 && cards.value !== 7 && cards.value !== 8) {

        allHighClubs.push(cards);
    }
}
console.log(allHighClubs);


// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let reducer = playCards.reduce(function (cardFinder, card) {

    if (card.cardSuit === 'spades') {
        cardFinder.spades.push(card);
    }
        if (card.cardSuit === 'diamonds') {
            cardFinder.diamonds.push(card);
        }
        if (card.cardSuit === 'clubs') {
            cardFinder.clubs.push(card);
            }
        if (card.cardSuit === 'hearts') {
            cardFinder.hearts.push(card);
        }
    return cardFinder;

}, {spades:[], diamonds: [], clubs:[], hearts:[]});
console.log(reducer);

