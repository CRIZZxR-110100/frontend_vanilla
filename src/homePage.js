export const setHomePage = (element = 'app') => {
  const app = document.getElementById(element)

  app.innerHTML = `
    <div class="home-hero">
      <h1 class="titles home-title">¡Bienvenido!</h1>
      <p class="home-subtitle">
        Esta aplicación es un cliente web desarrollado con <strong>JavaScript Vanilla</strong> que
        consume datos en tiempo real desde una API REST pública. Sin frameworks, sin librerías de UI:
        solo JS, CSS y el navegador.
      </p>
      <p class="home-subtitle">
        Utiliza el menú superior para navegar entre las diferentes secciones disponibles.
        Cada una se carga de forma dinámica sin recargar la página.
      </p>

      <div class="home-cards">
        <div class="home-card">
          <h1 class="titles">Usuarios</h2>
          <p>
            Consulta el listado completo de usuarios registrados en el sistema.
            Incluye nombre, nombre de usuario, correo electrónico y dirección postal.
          </p>
        </div>
        <div class="home-card">
          <h1 class="titles">Publicaciones</h2>
          <p>
            Navega por todas las publicaciones disponibles. Cada entrada muestra
            el título, el contenido completo y el usuario que la escribió.
          </p>
        </div>
        <div class="home-card">
          <h1 class="titles">Todo</h2>
          <p>
            Vista consolidada que muestra simultáneamente la tabla de usuarios
            y la de publicaciones, ideal para una revisión general de los datos.
          </p>
        </div>
      </div>
    </div>
  `
}

