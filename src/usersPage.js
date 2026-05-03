import { getUserData } from './services/userServices';

export const setUsersPage = (element = 'app') => {
  app = document.getElementById(element);

  getUsers()
    .then(users => {
      let usersTable = users.map( item => `
        <tr>
          <td>${item.id}</td>
          <td>${item.name}</td>
          <td>${item.username}</td>
          <td>${item.email}</td>
        </tr>
      `).join('')

      app.innerHTML = `
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Nombre de Usuario</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            ${usersTable}
          </tbody>
        </table>
      `
    })
}