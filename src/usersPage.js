import { getUsers } from './services/userServices';

export const setUsersPage = (element = 'app') => {
  const app = document.getElementById(element);

  getUsers()
    .then(users => {
      let usersTable = users.map( item => {
        const adress = item.address

        return `<tr>
          <td>${item.id}</td>
          <td>${item.name}</td>
          <td>${item.username}</td>
          <td>${item.email}</td>
          <td>${adress.suite} ${adress.street}. ${adress.city}</td>
        </tr>`
      }
      ).join('')

      app.innerHTML = `
        <h1 class="titles">Usuarios</h1>
      
        <table>
          <thead class="titles">
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Nombre de Usuario</th>
              <th>Email</th>
              <th>Dirección</th>
            </tr>
          </thead>
          <tbody>
            ${usersTable}
          </tbody>
        </table>
      `
    })
}