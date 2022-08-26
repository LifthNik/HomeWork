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

        let bttnDiv = document.getElementsByClassName('bttn')[0];
        bttnDiv.appendChild(bttn);

        bttn.onclick = () => {
            let titles = document.getElementsByClassName('postsTitle')[0];
            titles.classList.add('disFlex');
        };
    });

