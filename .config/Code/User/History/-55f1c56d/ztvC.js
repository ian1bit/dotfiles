const paragraph = document.querySelector('p')

// paragraph.innerText += ' Texto inserido'

const paragraphs = document.querySelectorAll('p')

paragraphs.forEach(paragraph => {
  paragraph.innerText += ` Novo texto ${index + 1}`
})