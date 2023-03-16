const message = 'Um segundo e meio se passaram desde que a pagina foi carregada'

setTimeout(console.log, 1500, message)

const counterContainer = document.querySelector('.counter-container')
const buttonInitCounter = document.querySelector('.button-init-counter')
const buttonStopCounter = document.querySelector('.button-stop-counter')

let counter = 0

buttonInitCounter.addEventListener('click', () => {
  setInterval(() => {
    counterContainer.textContent = counter++
  }, 1000)
})
buttonStopCounter.addEventListener('click', () => {
  console.log('Parar contador')
})

// 12min