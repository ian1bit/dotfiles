const paragraph = document.querySelector('.copy-me')

paragraph.addEventListener('copy', () => {
  console.log('Texto copiado')
})

const div = document.querySelector('.box')

div.addEventListener('mousemove', event => {
  console.log(event)
})