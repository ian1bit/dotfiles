// const paragraph = document.querySelector('p')

// console.log(paragraph.classList)

// paragraph.classList.add('error')
// paragraph.classList.remove('error')
// paragraph.classList.add('success')

const paragraphs = document.querySelectorAll('p')

paragraphs.forEach(paragraph => {
  console.log(paragraph.textContent)
})