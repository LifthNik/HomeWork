function toUpper(text) {
    return text[0].toUpperCase() + text.slice(1);
} //не відноситься до завдання.

let url = new URL(location.href);

let id = url.searchParams.get('id');
let post = +url.searchParams.get('post');


fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)

    .then(userPosts => userPosts.json())
    .then(posts => {

        let mainDiv = document.createElement('div');
        mainDiv.classList.add('mainDiv')

        for (const postes of posts) {

            if (+postes.id === post) {
                for (const key in postes) {

                    let div = document.createElement('div');
                    div.classList.add('divPost');
                    div.innerText = `${toUpper(key)}: ${postes[key]}`;
                    mainDiv.appendChild(div);
                }
            }
        }

        let inner = document.getElementsByClassName('postInfo')[0];
        inner.appendChild(mainDiv);
    });


fetch(`https://jsonplaceholder.typicode.com/posts/${post}/comments`)
    .then(comments => comments.json())
    .then(comment => {

        for (let commentObj of comment) {

            let div = document.createElement('div');
            div.classList.add('comment');


            for (const commentKey in commentObj) {

                let divIn = document.createElement('p')
                divIn.innerText = `${toUpper(commentKey)}: ${commentObj[commentKey]}`;

                div.appendChild(divIn);

                let d = document.getElementsByClassName('comments')[0];
                d.appendChild(div);
            }
        }
    });