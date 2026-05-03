import './style.css'

import { setUsersPage } from './usersPage'
import { setPostPage } from './postsPage'
import { setAllPage } from './allPage'
import { setHomePage } from './homePage'
import { setAboutPage } from './aboutPage'

const clearAppPage = () => {
  const app = document.getElementById('app')

  app.innerHTML = `
    <div class="spinner-wrapper">
      <div class="spinner"></div>
    </div>
  `
}

const setNavbar = () => {
  const navbar = document.getElementById('navbar')

  navbar.innerHTML = `
    <a href="#home" id="home_btn">Inicio</a>
    <a href="#todo" id="all">Todo</a>
    <a href="#users" id="users_btn">Usuarios</a>
    <a href="#posts" id="posts_btn">Publicaciones</a>
    <a href="#about" id="about_btn">Acerca de</a>
  `

  document.getElementById('home_btn').addEventListener('click', () => {
    setHomePage()
  })

  document.getElementById('all').addEventListener('click', () => {
    clearAppPage()
    setAllPage()
  })

  document.getElementById('users_btn').addEventListener('click', () => {
    clearAppPage()
    setUsersPage()
  })

  document.getElementById('posts_btn').addEventListener('click', () => {
    clearAppPage()
    setPostPage()
  })

  document.getElementById('about_btn').addEventListener('click', () => {
    setAboutPage()
  })
}

setNavbar()
setHomePage()