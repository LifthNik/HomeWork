let url = new URL(location.href);
console.log(url);

let id = url.searchParams.get('id');
let post = +url.searchParams.get('post');

console.log(id);
console.log(post)

fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)

    .then(userPosts => userPosts.json())
    .then(posts =>  {
        for (const postes of posts) {
            if (+postes.id === post) {
                console.log(postes)
            }
        }

    });
