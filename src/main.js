import './style.css'
import { exercises } from './exercises.js'

const cards = exercises
  .map(
    ({ title, description, path }) => `
      <a class="card" href="${path}">
        <h2>${title}</h2>
        <p>${description}</p>
      </a>
    `
  )
  .join('')

document.querySelector('#app').innerHTML = `
  <header>
    <h1>Exercices JavaScript</h1>
    <p>Une collection d'exercices pratiques pour apprendre JavaScript.</p>
  </header>
  <main class="grid">
    ${cards}
  </main>
`
