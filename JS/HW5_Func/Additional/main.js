// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
document.write("All in console")

let maxNum = (a, b, c) => {

    if (a > b && a > c) {
        console.log(a);
    }
    if (b > a && b > c) {
        console.log(b);
    }
    if (c > a && c > b) {
        console.log(c);
    }
}

maxNum(1, 2, 3);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

let minNum = (a, b, c) => {

    if (a < b && a < c) {
        console.log(a);
    }
    if (b < a && b < c) {
        console.log(b);
    }
    if (c < a && c < b) {
        console.log(c);
    }
}

minNum(1, 2, 3)

// - створити функцію яка повертає найбільше число з масиву

let listOfNumb = [5, 15, 30, 10, 20, 5, 5, 50, 3, 7];

let maxNumArr = (list) => {
    let max = list[0];
    for (let i = 0; i < list.length; i++) {
        if (max < list[i]) {
            max = list[i];
        }

    }
    return max;
}
console.log(maxNumArr(listOfNumb));

// - створити функцію яка повертає найменьше число з масиву

let minNumArr = (list) => {
    let min = list[0];
    for (let i = 0; i < list.length; i++) {
        if(min > list[i]) {
            min= list[i];
        }

    }
    return min;
}
console.log(minNumArr(listOfNumb));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let sumNumbers = [1, 2, 3, 4]

function total(numb) {
    let a = 0;
    for (let i = 0; i < numb.length; i++) {
        a += numb[i];

    }
    return a
}

console.log(total(sumNumbers));

// - Дано натуральное число n. Выведите все числа от 1 до n.

function setNumbers(n) {
    for (let i = 0; i < n; i++) {
        console.log(i+1);
    }

}

setNumbers(10);


// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания,
//   если A < B, или в порядке убывания в противном случае.

function numbsBetween(a,b) {
    if (a < b) {
        for (let i = a; i <= b; i++) {
            console.log(i);
        }
    }
    if (a > b) {
        for (let i = a; i >= b; i--){
            console.log(i);
        }
    }
}

numbsBetween(20, 30);

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

let ArrOfNumbs = [0, 20, 7, 3, 5, 40];

const change = (mArr, i) => {
    let core = mArr[i];
    mArr[i] = mArr[i + 1];
    mArr[i + 1] = core;
    return ArrOfNumbs;
}
console.log(change(ArrOfNumbs, 4));

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
// Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

let resNumb = [0, 10, 4, 0, 1, 0, 123, 0, 1];
let result = [];
let zeros = 0;
let ind = 0;
//
for (let i = 0; i < resNumb.length; i++) {
    if (resNumb[i] === 0) {
        zeros++;
    } else {
        result[ind++] = resNumb[i];
    }
}
console.log(result);

let zeroArr = result.length;
for (let i = 0; i < zeros; i++) {
    result[zeroArr++] = 0;
}
console.log(result);
