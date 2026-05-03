import { getPostData } from "./services/postServices";
import { getUserData } from './services/userServices';

export const setPostPage = (element = 'app') => {
  app = document.getElementById(element);

  getPostData()
    .then(posts => {
      let postsTable = posts.map( item => `
        <tr>
          <td>${item.id}</td>
          <td>${item.title}</td>
          <td>${item.body}</td>
          <td>${item.userId}</td>
        </tr>
      `).join('')

      app.innerHTML = `
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Publicación</th>
              <th>ID Usuario</th>
            </tr>
          </thead>
          <tbody>
            ${postsTable}
          </tbody>
        </table>
      `
    })
}