const message = 'Um segundo e meio se passaram desde que a pagina foi carregada'

setTimeout(console.log, 1500, message)

const buttonInitCounter = document.querySelector('.button-init-counter')
const buttonStopCounter = document.querySelector('.button-stop-counter')

buttonInitCounter.addEventListener('click', () => {
  setInterval(() => {
    console.log('Incrementar contador')
  }, 1000)
})
buttonStopCounter.addEventListener('click', () => {
  console.log('Parar contador')
})