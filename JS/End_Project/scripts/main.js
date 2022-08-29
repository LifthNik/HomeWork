fetch('https://jsonplaceholder.typicode.com/users')
    .then(list => list.json())
    .then(users => users.forEach(user => {

        let userDiv = document.createElement('div');
        userDiv.classList.add('userDiv');


        userDiv.innerHTML = `${user.id}. ${user.name}`;

        let firstBox = document.getElementsByClassName('usersBlock')[0];
        firstBox.appendChild(userDiv);


        let postBttn = document.createElement('button');
        postBttn.classList.add('firstPageButton');
        postBttn.id = `${user.id}`;
        postBttn.innerText = 'Details';

        postBttn.onclick = () => {
            location.href = `user-details.html?id=${user.id}`;
        }

        userDiv.appendChild(postBttn);

    }));