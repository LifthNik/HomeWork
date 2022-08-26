//Divs for Users

fetch('https://jsonplaceholder.typicode.com/users')
    .then(list => list.json())                                    //taking users array
    .then(users => users.forEach(user => {

        let userDiv = document.createElement('div');      //adding user Div
        userDiv.classList.add('userDiv');


        userDiv.innerHTML = `${user.id}. ${user.name}`;           // adding text

        let firstBox = document.getElementsByClassName('usersBlock')[0];
        firstBox.appendChild(userDiv);                            //adding Users Divs


        let postBttn = document.createElement('button'); //button staff
        postBttn.classList.add('firstPageButton');
        postBttn.id = `${user.id}`
        postBttn.innerText = 'Details';

        postBttn.onclick = () => {

            location.href = `user-details.html?id=${user.id}`;//next page


        }

        userDiv.appendChild(postBttn);                            //add Button

    }));