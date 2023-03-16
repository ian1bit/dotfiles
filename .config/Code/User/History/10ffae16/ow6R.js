// const ul = document.querySelector('ul')

// ul.remove()

const lis = document.querySelectorAll('li')

lis.forEach(li => {
  li.addEventListener('click', event => {
    const clickedElement = event.target

    clickedElement.remove()
  })
})