//obtener datos de la URL
export function getPostData() {
  const URL = 'https://jsonplaceholder.typicode.com/posts';

  return fetch(URL)
    .then(response => {
      if (!response.ok) throw new Error('Error al cargar posts');
      return response.json();
    }); 
}