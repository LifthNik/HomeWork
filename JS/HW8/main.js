// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User


function User(id, name, surname, email, phone) {

    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email
    this.phone = phone;
}

let user1 = new User(1, 'vasya', 'sur1', '11111@mail.com', 1111111);
let user2 = new User(2, 'petya', 'sur2', '22222@mail.com', 2222222);
let user3 = new User(3, 'vitya', 'sur3', '33333@mail.com', 3333333);
let user4 = new User(4, 'oleg', 'sur4', '44444@mail.com', 4444444);
let user5 = new User(5, 'dima', 'sur5', '55555@mail.com', 5555555);
let user6 = new User(6, 'jenya', 'sur6', '66666@mail.com', 6666666);
let user7 = new User(7, 'sasha', 'sur7', '77777@mail.com', 7777777);
let user8 = new User(8, 'vova', 'sur8', '88888@mail.com', 8888888);
let user9 = new User(9, 'andrey', 'sur9', '99999@mail.com', 9999999);
let user10 = new User(10, 'nikolay', 'sur10', '10101@mail.com', 1010101);

let arrayOfUsers = [];

arrayOfUsers.push(user1,user2,user3,user4,user5,user6,user7,user8,user9,user10);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)


let filteredUsers = []

for (let u of arrayOfUsers) {
    if (u.id % 2 === 0) {
        filteredUsers.push(u);
    }
}

console.log(filteredUsers);
//OR
console.log(arrayOfUsers.filter(u => u.id % 2 === 0));


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)


let sort = arrayOfUsers.sort((user1, user2) => user2.id - user1.id);

//у массиві об'єкти вже стоять у порядку зростання. Зробив у порядку спадання.
//у порядку зростання було б user1.id - user2.id

console.log(sort);


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client


class Client {
    constructor(id,name,surname,email,phone,order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;

    }
}

let arrOfClients = [];

let client1 = new Client(1, 'vasya', 'sur1', '11111@mail.com', 1111111, ['tea', 'cola', 'beer', 'tomato']);
let client2 = new Client(2, 'petya', 'sur2', '22222@mail.com', 2222222,['tea','cola','beer',]);
let client3 = new Client(3, 'vitya', 'sur3', '33333@mail.com', 3333333,['cola','tomato']);
let client4 = new Client(4, 'oleg', 'sur4', '44444@mail.com', 4444444,['tea','cola','beer','car','wheels']);
let client5 = new Client(5, 'dima', 'sur5', '55555@mail.com', 5555555,['tomato']);
let client6 = new Client(6, 'jenya', 'sur6', '66666@mail.com', 6666666,['tea','cola','candy','beer','breed','tomato']);
let client7 = new Client(7, 'sasha', 'sur7', '77777@mail.com', 7777777,['tea', 'cola','tomato']);
let client8 = new Client(8, 'vova', 'sur8', '88888@mail.com', 8888888,['car']);
let client9 = new Client(9, 'andrey', 'sur9', '99999@mail.com', 9999999, ['tea', 'cola', 'tomato', 'candy']);
let client10 = new Client(10, 'nikolay', 'sur10', '10101@mail.com', 1010101, ['beer', 'tomato']);

arrOfClients.push(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)


let clientSort = arrOfClients.sort((cl1, cl2) => cl2.order.length - cl1.order.length);

console.log(clientSort);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function CarConstructor(model, producer, year, maxSpeed, engine) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;

    this.drive = function () {
        console.log(`Їдемо зі швидкістю ${maxSpeed} км. на годину`);
    };


    this.info = function () {

        console.log(`Model - ${model}, Producer - ${producer}, Year - ${year}, Max Speed - ${maxSpeed}, Engine - ${engine}`);
    };


    this.increaseMaxSpeed = function (newSpeed) {

        console.log(maxSpeed + newSpeed);
    };


    this.changeYear = function (newValue) {

        console.log(this.year = newValue);
    };

    this.addDriver = function (driverName, driverAge, driverPhone) {

        this.driver = [];
        this.driver.Name = driverName;
        this.driver.Age = driverAge;
        this.driver.Phone = driverPhone;

    };
}


let car = new CarConstructor('Lancer', 'Japan',2010,230,1.5);


car.addDriver('Vasya', 29, 1111111);


car.drive();

car.info();

car.increaseMaxSpeed(50);

car.changeYear(2020);


console.log(car.driver);

console.log(car);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car





// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку