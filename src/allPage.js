import "./style.css"

import { setUsersPage } from "./usersPage";
import { setPostPage } from "./postsPage";

export const setAllPage = (element = 'app') => {
  const app = document.getElementById(element)

  app.innerHTML = `
    <section id="users"></section>
    <section id="posts"></section>
  `

  setUsersPage('users')
  setPostPage('posts')
}