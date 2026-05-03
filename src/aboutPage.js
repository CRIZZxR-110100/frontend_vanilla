export const setAboutPage = (element = 'app') => {
  const app = document.getElementById(element)

  app.innerHTML = `
    <div class="about-wrapper">
      <h1 class="titles">Acerca del proyecto</h1>
      <p class="about-lead">
        Esta aplicación es un cliente web construido con <strong>JavaScript Vanilla</strong> y <strong>Vite</strong>
        como entorno de desarrollo, sin frameworks ni librerías externas de UI.
      </p>

      <div class="about-section">
        <h2 class="titles">¿Qué hace?</h2>
        <p>
          Consume datos de <a href="https://jsonplaceholder.typicode.com" target="_blank" rel="noopener">JSONPlaceholder</a>,
          una API REST pública de prueba, y los presenta en tablas interactivas con navegación por secciones.
        </p>
      </div>

      <div class="about-section">
        <h2 class="titles">Tecnologías</h2>
        <ul class="about-list">
          <li><strong>JavaScript ES Modules</strong> — módulos nativos del navegador</li>
          <li><strong>Vite</strong> — servidor de desarrollo y bundler</li>
          <li><strong>CSS Vanilla</strong> — estilos sin frameworks</li>
          <li><strong>JSONPlaceholder API</strong> — fuente de datos de prueba</li>
        </ul>
      </div>

      <div class="about-section">
        <h2 class="titles">Objetivo</h2>
        <p>
          Practicar el consumo de APIs REST, la manipulación del DOM y la organización
          de una SPA (Single Page Application) sin dependencias externas.
        </p>
      </div>
    </div>
  `
}
