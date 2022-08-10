document.write(`<div style="margin-bottom: 20px">Task 1 - 4 in console</div>`);
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let s = (a, b) => a * b;

console.log(s(10,20));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

let q = (r, p) => p * (r * r);

console.log(q(5, 3.14 ));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let v = (p, r, h) => 2 * p * r * (h + r)

console.log(v(3.14, 3, 10))


// - створити функцію яка приймає масив та виводить кожен його елемент

        function inArr(array) {
            for (let item of array) {
                console.log(item);
            }
}

let array = [
	{
		title: 'milk',
		price: 22,
		image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
	},
	{
		title: 'juice',
		price: 27,
		image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
	},
	{
		title: 'tomato',
		price: 47,
		image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
	},
	{
		title: 'tea',
		price: 15,
		image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
	},
];

inArr(array);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент


function parag(a) {
    document.write(`Task 5<p>${a}</p>`);
}

parag('Some random text');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

document.write('Task 6');

function youL(lee) {
    document.write(`<ul>
    					<li>${lee}</li>
    					<li>${lee}</li>
    					<li>${lee}</li>
    				</ul>`)
}
youL('Lorem');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

document.write('Task 7');

function ulLoop(text, a) {
	document.write(`<ul>`);

	for (let i = 0; i < a; i++) {
		document.write(`<li>${text}</li>`);

	}

	document.write(`</ul>`);
}

ulLoop('Lorem', 3);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
document.write('Task 8');

let arrPri = [1, 10, 'qwe', 'asd', true, false, 5, 'zxc', null];

function arrUlLi(array) {

	document.write(`<ul>`);

	for (let item of array) {
		document.write(`<li>${item}</li>`);
	}
	document.write(`</ul>`);
}
arrUlLi(arrPri);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
document.write('Task 9');


function userBlock() {

document.write(`<div class="head">`)

	for (let k = 0; k < users.length; k++) {
		let user = users[k];
			document.write
			(`<div class="idCard"><ul>
				<li>ID:${user.id}</li> 
				<li>Name: ${user.name}</li> 
				<li>Age: ${user.age}</li> 
			</ul></div>`);

	}

document.write(`</div>`)
	}

let users = [
    		{id: 1, name: 'vasya', age: 31},
    		{id: 2, name: 'petya', age: 30},
    		{id: 3, name: 'kolya', age: 29},
    		{id: 4, name: 'olya', age: 28},
    		{id: 5, name: 'max', age: 30},
    		{id: 6, name: 'anya', age: 31},
    		{id: 7, name: 'oleg', age: 28},
    		{id: 8, name: 'andrey', age: 29},
    		{id: 9, name: 'masha', age: 30},
    		{id: 10, name: 'olya', age: 31},
    		{id: 11, name: 'max', age: 31},
];
userBlock();

// - створити функцію яка повертає найменьше число з масиву
document.write('Task 10, 11 in console');

function findMin(list) {
	let min = list[0];
	for (let i = 0; i < list.length; i++) {
		if (min > list[i]) {
			min = list[i];
		}
	}
	return min
}
let listOfNumb = [5, 15, 30, 10, 20, 5, 5, 3, 7];

console.log(findMin(listOfNumb));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

function total(item) {
	let a = 0;
	for (let i = 0; i < item.length; i++) {
		a += item[i];

	} return a
}

console.log(total(listOfNumb));