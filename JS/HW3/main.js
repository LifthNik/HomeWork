// - Є змінна х, якій ви надаєте довільне числове значення.
//Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 15;

// x = 1; //true
// x = 0; //false
// x = -3; //true

if (x !== 0) {
    console.log(true);

} else {
    console.log(false);
}

// - Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 46;

if (time >= 0 && time <= 14) {
    console.log('first');
} else if
(time >= 15 && time <= 29) {
    console.log('second');
} else if
(time >= 30 && time <= 44) {
    console.log('third');
} else if
(time >= 45 && time <= 59) {
    console.log('fourth');
} else {
    console.log('Type number between 0 - 59')
}

// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 12;

if (day > 1 && day < 10) {
    console.log('First decade');
} else if
(day > 10 && day < 20) {
    console.log('Second decade');
} else if
(day > 21 && day < 31) {
    console.log('Third decade');
} else {
    console.log('There is no such day!')
}

// - Скласти розклад на тиждень за домопоги switch.Користувач вводить порядковий номер дня тижня
// і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let dayOfWeek = prompt('What day of the week is it?');


switch (dayOfWeek) {
    case '1':
        document.write
        (`<h1>Its Monday!</h1>
<ul>TODO:</ul>
<li>something</li>
<li>something</li>
<li>something</li>`)
        break
    case'2':
        document.write
        (`<h1>Its Tuesday!</h1>
<ul>TODO:</ul>
<li>something</li>
<li>something</li>
<li>something</li>`)
        break
    case'3':
        document.write
        (`<h1>Its Wednesday!</h1>
<ul>TODO:</ul>
<li>something</li>
<li>something</li>
<li>something</li>`)
        break
    case'4':
        document.write
        (`<h1>Its Thursday!</h1>
<ul>TODO:</ul>
<li>something</li>
<li>something</li>
<li>something</li>`)
        break
    case'5':
        document.write
        (`<h1>Its Friday!</h1>
<ul>TODO:</ul>
<li>something</li>
<li>something</li>
<li>something</li>`)
        break
    case'6':
        document.write
        (`<h1>Its Saturday!</h1>
<ul>TODO:</ul>
<li>something</li>
<li>something</li>
<li>something</li>`)
        break
    case'7':
        document.write
        (`<h1>Its Sunday!</h1>
<ul>TODO:</ul>
<li>something</li>
<li>something</li>
<li>something</li>`)
        break
    default:
        document.write
        (`<h1>Enter the valid number!</h1>`)
}

// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

let a = prompt('Enter the first number:');
let b = prompt('Enter the second number:');

if (a > b) {
    console.log(`Number ${a} is bigger`);
} else if
(b > a) {
    console.log(`Number ${b} is largest`);
} else if
(b === '' && a === '') {
    console.log('You did not enter the number!'); //хотів врахувати всі можливі варіанти у цій ситуаціі
} else {
    console.log(`First number is equal to second`);
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
// (хибноподыбне, тобто кастується до false)

let c = NaN || "default"; // Х була задіяна в першому завданні, довелось використати С.
console.log(c);