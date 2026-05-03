import { getUserData } from "./userServices";

//obtener datos de la URL
export function getPosts() {
  const URL = 'https://jsonplaceholder.typicode.com/posts';

  return fetch(URL)
    .then(response => {
      if (!response.ok) throw new Error('Error al cargar posts');
      return response.json();
    })
    .then(posts => Promise.all(
      posts.map(post => 
        getUserData(post.userId)
          .then(user => ({...post, user}))
      )
    ));
}