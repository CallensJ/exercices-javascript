const button = document.querySelector('#counter')
let count = 0

const render = () => {
  button.textContent = `Compte : ${count}`
}

button.addEventListener('click', () => {
  count += 1
  render()
})

render()
