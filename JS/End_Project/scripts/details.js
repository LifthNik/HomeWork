let url = new URL(location.href);
let id = url.searchParams.get('id');
fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(list => list.json())
    .then(user => {

            let div = document.createElement('div');
            div.classList.add('textPart');

        for (const divKey in user) {
            if (typeof user[divKey] === "object") {

                let addressDiv = document.createElement('div');
                addressDiv.classList.add('textInfo');
                addressDiv.innerText = `${divKey.toUpperCase()}:`;

                let ul = document.createElement('ul');
                addressDiv.appendChild(ul);

                let a = user[divKey];
                for (const aElement in a) {
                    let liAddress = document.createElement('li');
                    liAddress.innerHTML = `${aElement.toUpperCase()}: ${JSON.stringify(a[aElement]).replace(/[{}"]/gi, ' ')}`;
                    ul.appendChild(liAddress);
                }

                div.appendChild(addressDiv);

            } else {

                let userDiv = document.createElement('div');
                userDiv.classList.add('textInfo');
                userDiv.innerText = `${divKey.toUpperCase()}: ${user[divKey]}`;

                div.appendChild(userDiv);


                let insert = document.getElementsByClassName('userInfo')[0];
                insert.appendChild(div);
            }
        }

        //big button staff
        let bttn = document.createElement('button');
        bttn.classList.add('mainButton');
        bttn.innerText = 'Posts of current user'

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

            idTitle.innerText = `Post ID: ${posts[i].id}
            Title: ${posts[i].title}`;

            titleDiv.appendChild(idTitle);


            let titleButton = document.createElement('button');
            titleButton.classList.add('titButton');
            titleButton.innerText = 'Details';

            idTitle.appendChild(titleButton);


            titleButton.onclick = () => {
                location.href = `post-details.html?id=${user.id}&post=${posts[i].id}`;
            }
        }
        let chain = document.getElementsByClassName('postsTitle')[0];
        chain.appendChild(titleDiv)
        }
    )
            let titles = document.getElementsByClassName('postsTitle')[0];
            titles.classList.add('disFlex');
        };
    });

