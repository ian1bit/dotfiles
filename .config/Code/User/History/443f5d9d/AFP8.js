const ul = document.querySelector('ul')
const button = document.querySelector('button')

button.addEventListener('click', () => {
  const li = document.createElement('li')
  
  li.textContent = 'Novo item'
  ul.prepend(li)
})

ul.addEventListener('click', event => {
  console.log(event.target)
})