//obtener datos de la URL
export function getUsers() {
  const URL = 'https://jsonplaceholder.typicode.com/users';
  
  return fetch(URL)
    .then(response => {
      if (!response.ok) throw new Error('Error al cargar usuarios');
      return response.json();
    }); 
}

export function getUserData(id) {
  const URL = `https://jsonplaceholder.typicode.com/users/${id}`;
  
  return fetch(URL)
    .then(response => {
      if (!response.ok) throw new Error('Error al cargar usuario');
      return response.json();
    });
}