// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// усі зайві ДІВ побудовані для відображення завдань у рядок.

document.write(`<div class="Tasks">`); //task 1 - 5 start

document.write(`<div class="task1">`);
    document.write(`<h2>Task 1</h2>`);

    for (let a = 0; a < 10; a++) {
        document.write(`<div>Some text</div>`);
}
        document.write(`</div>`);


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

document.write(`<div class="task2">`);
document.write(`<h2>Task 2</h2>`);

    for (let b = 0; b < 10; b++) {
        document.write(`<div> Some text. Index: ${b} </div>`);
}
    document.write(`</div>`);

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

document.write(`<div class="task3">`);
document.write(`<h2>Task 3</h2>`);

let c = 0;
while (c < 20) {
    document.write(`<div><h1>Text</h1></div>`);
    c++;
}
document.write(`</div>`);
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

document.write(`<div class="task4">`);
document.write(`<h2>Task 4</h2>`);

let d = 0;
while (d < 20) {
    document.write(`<div><h1>Text. Index ${d}</h1></div>`);
    d++
}
document.write(`</div>`);


// - Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];


document.write(`<div class="task5"><h2>Task 5</h2>`);
document.write(`<ul>`);

for (let e = 0; e < listOfItems.length; e++) {
    let itemList = listOfItems[e];
    document.write(`<li>${itemList}</li>`)
}
    document.write(`</ul></div>`);

document.write(`</div>`); //task 1 - 5 end

// Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону
// Зробити адекватну стилізацію

let products = [
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

document.write(`<h2 class="flcent" ">Task 6:</h2>
                <div class= "productCards">`);

for (let p = 0; p < products.length; p++) {
    let product = products[p];
    document.write(`<div class= "productCard">

<h3 class="product-title">${product.title}. Price: ${product.price}</h3>

<img src=${product.image} alt="" class="product-image"></div>`)

}
    document.write(`</div>`)


document.write(`<h1 class="flcent" style="font-size: 50px">Task 7 in console</h1>`)
// є масив users  за допомоги циклу вивести:
//  - користувачів зі статусом true
//  - користувачів зі статусом false
//  - користувачів які старші за 30 років

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

console.log('користувачі зі статусом true')
for (let u of users) {
    if (u.status === true)
        console.log(u);

}

console.log('користувачі зі статусом false')
for (let u of users) {
    if (u.status === false)
        console.log(u);
}

console.log('користувачі які старші за 30 років')
for (let u of users) {
    if (u.age > 30)
        console.log(u);
}