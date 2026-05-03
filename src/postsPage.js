import { getPosts } from "./services/postServices";

export const setPostPage = (element = 'app') => {
  const app = document.getElementById(element);

  getPosts()
    .then(posts => {
      let postsTable = posts.map( item => {
        
        return `
          <tr>
            <td>${item.id}</td>
            <td>${item.title}</td>
            <td>${item.body}</td>
            <td>${item.user.name}</td>
          </tr>
        `}
      ).join('')

      app.innerHTML = `
        <h1 class="titles">Publicaciones</h1>

        <table>
          <thead class="titles">
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Publicación</th>
              <th>Usuario</th>
            </tr>
          </thead>
          <tbody>
            ${postsTable}
          </tbody>
        </table>
      `
    })
}