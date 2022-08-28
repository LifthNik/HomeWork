let url = new URL(location.href);
let id = url.searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(list => list.json())
    .then(user => {

function toUpper(text) {
    return text[0].toUpperCase() + text.slice(1);
} //не відноситься до завдання.

            let div = document.createElement('div');
            div.classList.add('textPart');

        for (const key in user) {
            if (typeof user[key] === "object") {

                let addressDiv = document.createElement('div');
                addressDiv.classList.add('textInfo');
                addressDiv.innerText = `${toUpper(key)}:`;

                let ul = document.createElement('ul');
                addressDiv.appendChild(ul);

                let a = user[key];
                for (const aElement in a) {
                    let liAddress = document.createElement('li');
                    liAddress.innerHTML = `${toUpper(aElement)}: ${JSON.stringify(a[aElement]).replace(/[{}"]/gi, ' ')}`;
                    ul.appendChild(liAddress);
                }

                div.appendChild(addressDiv);

            } else {

                let userDiv = document.createElement('div');
                userDiv.classList.add('textInfo');
                userDiv.innerText = `${toUpper(key)}: ${user[key]}`;

                div.appendChild(userDiv);


                let insert = document.getElementsByClassName('userInfo')[0];
                insert.appendChild(div);
            }
        }


        let bttn = document.createElement('button');
        bttn.classList.add('mainButton');
        bttn.innerText = 'Posts of current user';

        let bigButton = document.getElementsByClassName('bttn')[0];
        bigButton.appendChild(bttn);

        bttn.onclick = () => {
            bttn.disabled = true;



fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    .then(titles => titles.json())
    .then(posts => {

        let titleDiv = document.createElement('div');
        titleDiv.classList.add('titleCard');

        for (let i = 0; i < posts.length; i++) {

            let idTitle = document.createElement('div');
            idTitle.classList.add('cards');

            idTitle.innerText = `Title: ${posts[i].title}`;

            titleDiv.appendChild(idTitle);


            let titleButton = document.createElement('button');
            titleButton.classList.add('titButton');
            titleButton.innerText = 'Details';

            idTitle.appendChild(titleButton);


            titleButton.onclick = () => {
                location.href = `post-details.html?id=${user.id}&post=${posts[i].id}`;
            }
        }

        let postPage = document.getElementsByClassName('postsTitle')[0];
        postPage.appendChild(titleDiv);

        }
    )
            let titles = document.getElementsByClassName('postsTitle')[0];
            titles.classList.add('show');
        };
    });