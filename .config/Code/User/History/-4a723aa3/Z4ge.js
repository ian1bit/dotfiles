const message = 'Um segundo e meio se passaram desde que a pagina foi carregada'

setTimeout(console.log, 1500, message)

const counterContainer = document.querySelector('.counter-container')
const buttonInitCounter = document.querySelector('.button-init-counter')
const buttonStopCounter = document.querySelector('.button-stop-counter')

let timer = null

buttonInitCounter.addEventListener('click', () => {
  timer = setInterval(() => {
    counterContainer.textContent = Number(counterContainer.textContent) + 1
  }, 1000)
})
buttonStopCounter.addEventListener('click', () => {
  clearInterval(timer)
  counterContainer.textContent = 0
})
