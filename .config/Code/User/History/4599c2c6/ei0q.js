const button = document.querySelector('button')
const popup = document.querySelector('.popup-wrapper')

button.addEventListener('click', () => {
  popup.style.display = 'block'
})

popup.addEventListener('click', event => {
  const classNameOfClickedElement = event.target.classList[0]
  const shouldClosePopup = classNameOfClickedElement === 'popup-close' || classNameOfClickedElement === 'popup-link' || classNameOfClickedElement === 'popup-wrapper'

  if (shouldClosePopup) {
    popup.style.display = 'none'
  }
})