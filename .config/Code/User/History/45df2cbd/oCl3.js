const button = document.querySelector('button')

button.addEventListener('click', () => {
  console.log('Clicou no botão')
})

const lis = document.querySelectorAll('li')

lis.forEach(li => {
  li.addEventListener('click', event => {
    console.log(li)
  })
})