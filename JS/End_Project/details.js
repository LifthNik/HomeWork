fetch('https://jsonplaceholder.typicode.com/users')
    .then(list => list.json())                                               //taking users array

    .then(usersArr => usersArr.forEach(user => {

        let div = document.createElement('div');
        div.classList.add('userInfo');

        for (const key in user) {

            if (typeof user[key] == 'object') {

                let divAddress = document.createElement('div');
                divAddress.classList.add('addressDiv')

                let ulList = document.createElement('ul')
                ulList.innerText = `${key}:`
                divAddress.appendChild(ulList)

                let a = user[key];

                        for (const aElement in a) {

                        let liAddress = document.createElement('li');
                        liAddress.innerHTML = `${aElement}: ${JSON.stringify(a[aElement]).replace(/[{}"]/gi, ' ')}`;
                        ulList.appendChild(liAddress);

                        if (a.street === undefined) {
                            liAddress.innerHTML = `${aElement}: ${JSON.stringify(a[aElement])}`;
                            ulList.appendChild(liAddress);
                        }
                        }

                div.appendChild(divAddress);

            } else {

                let userDiv = document.createElement('div');
                userDiv.innerHTML = `${key}: ${user[key]}`


                div.appendChild(userDiv);


                let mainDiv = document.getElementsByClassName('usersInfo')[0];
                div.id = `${user.id}`

                mainDiv.appendChild(div);
            }
        }

    }));
