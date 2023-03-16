// const paragraph = document.querySelector('p')

// console.log(paragraph.classList)

// paragraph.classList.add('error')
// paragraph.classList.remove('error')
// paragraph.classList.add('success')

const paragraphs = document.querySelectorAll('p')

paragraphs.forEach(paragraph => {
  if (paragraph.textContent.includes('error')) {
    paragraph.classList.add('error')
  }
})