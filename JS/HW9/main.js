function divBuilder(style, task) {
        let mainDiv = document.createElement('div');
        mainDiv.classList.add(style);
        mainDiv.innerHTML = `<h1>${task}</h1>`;
        document.body.appendChild(mainDiv);
    } //не відноситься до дз.

    //Початок тут//
    // - є масив
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    }
];

// Проітерувати його, створивши для кожного об'єкту масиву <div class='member'>
// та наповнити його даними з об'єкту.
// Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

    divBuilder('simpsonFamily', 'Task 1');

for (const simpson of simpsons) {

    let div = document.createElement('div');
    div.classList.add('member');


    let header = document.createElement('h3');
    header.innerText = simpson.name + ' ' + simpson.surname;
    div.appendChild(header);

    let age = document.createElement('h4');
    age.innerText = 'Age:' + " " + simpson.age;
    div.appendChild(age);

    let img = document.createElement('img');
    img.src = simpson.photo
    div.appendChild(img);

    let info = document.createElement("p");
    info.innerText = simpson.info;
    div.appendChild(info);


    let targets = document.body.getElementsByClassName('simpsonFamily');
    let target = targets[0];
    target.appendChild(div);

}


// Цикл в циклі
// - Є масив

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись
// значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структури знаходиться у файлі example.png

    divBuilder('coursesMain', 'Task 2');


    for (const course of coursesArray) {

        let courseCard = document.createElement('div');
        courseCard.classList.add('card');

        let titleDiv = document.createElement('div');
        titleDiv.classList.add('header')
        titleDiv.innerText = course.title;
        courseCard.appendChild(titleDiv);

        let durations = document.createElement('div');
        durations.classList.add('durations');
        courseCard.appendChild(durations);


            let duration = document.createElement("div");
        duration.classList.add('in');
        duration.innerText = course.monthDuration + ' ' + 'mouth'
        durations.appendChild(duration)

            let hourDuration = document.createElement('div');
        hourDuration.classList.add('in');
        hourDuration.innerText = 'Hour duration' + ' ' + course.hourDuration;
        durations.appendChild(hourDuration);


        let moduleBox = document.createElement('div');
        moduleBox.classList.add('modulesList');
        courseCard.appendChild(moduleBox);

        let ul = document.createElement('ul');

            for (const element of course.modules) {
                let li = document.createElement('li');
                li.innerText = element;
                ul.appendChild(li);
            }
            moduleBox.appendChild(ul);



        let targets = document.body.getElementsByClassName('coursesMain');
        let target = targets[0];
        target.appendChild(courseCard);

    }


divBuilder('boxClone', 'Task 3');

//     - створити блок,


let box = document.createElement('div');

//     - додати йому класи wrap, collapse, alpha, beta

box.classList.add('wrap', 'collapse', 'alpha', 'beta');

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту

box.style.width = '200px';
box.style.height = '200px';

box.style.background = 'red';

// - додати цей блок в body.

let targets = document.body.getElementsByClassName('boxClone');
let target = targets[0];
target.appendChild(box);


// - клонувати його повністю, та додати клон в body.

let clone = box.cloneNode(true);

target.appendChild(clone);





// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

divBuilder('task4', 'Task 4');

let t4 = document.createElement('div');
t4.innerText = 'Task 4 in template1.html file'

let tk4 = document.body.getElementsByClassName('task4');
let target4 = tk4[0];
target4.appendChild(t4);


// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
divBuilder('task5', 'Task 5')


for (const coursesElement of coursesAndDurationArray) {
    let div = document.createElement('div');
        div.classList.add('courseList');
            div.innerText = `Title: ${coursesElement.title} 
            Duration: ${coursesElement.monthDuration}`;


    let targets = document.body.getElementsByClassName('task5');
    let target = targets[0];
    target.appendChild(div);
}


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];


// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу,
// та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.
divBuilder('task6', 'Task 6');


for (const coursesElement of coursesAndDurationArray) {
    let div = document.createElement('div');
    div.classList.add('item');

    let head = document.createElement('h2');
    head.classList.add('heading');
    head.innerText = `Title: ${coursesElement.title}`
    div.appendChild(head);

    let paragraph = document.createElement("p");
    paragraph.classList.add('description');
    paragraph.innerText = `Duration: ${coursesElement.monthDuration} month`;
    div.appendChild(paragraph);


    let targets = document.body.getElementsByClassName('task6');
    let target = targets[0];
    target.appendChild(div);

}


//- Створити довільний елемент з id = text.
// Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
divBuilder('deleteButton', 'Task 7');


let bbDiv = document.createElement('div');
bbDiv.style.height = '200px';
bbDiv.style.width = '200px';
bbDiv.style.background = 'black';

bbDiv.setAttribute('id', 'text')



let tk7 = document.body.getElementsByClassName('deleteButton');
let target7 = tk7[0];
target7.appendChild(bbDiv);

let button = document.createElement("button");
button.innerText = 'Click Here'
target7.appendChild(button);

button.onclick = function () {
    let del = document.getElementById('text');
    del.parentElement.removeChild(del);

};


//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача
divBuilder('inputs', 'Task 8');


let div = document.createElement('div');

let form = document.createElement('form');
form.setAttribute('name', 'form1');
div.appendChild(form);

let inp = document.createElement('input');
inp.setAttribute('type', 'number')
form.appendChild(inp);


let butt = document.createElement('button');
butt.innerText = 'Check age';
form.appendChild(butt);


let inputs = document.body.getElementsByClassName('inputs');
let input = inputs[0];
input.appendChild(div);


form.onsubmit = function (a) {
    a.preventDefault();
    if (inp.value >= 18) {
        alert('More then 18');
    } else {
        alert('Less then 18');
    }
}


// Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додаткова частина для завдання)









