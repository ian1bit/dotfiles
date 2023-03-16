const form = document.querySelector('.signup-form')
const feedback = document.querySelector('.feedback')

const testUsername = username => /^[a-zA-Z]{6,12}$/.test(username)

form.addEventListener('submit', event => {
  event.preventDefault()
  
  const username = event.target.username.value
  const usernameRegex = /^[a-zA-Z]{6,12}$/
  const isAValidUsername = usernameRegex.test(username)

  if (isAValidUsername) {
    feedback.textContent = 'username válido =)'
    return
  }

  feedback.textContent = 'o username deve conter entre 6 a 12 caracteres e deve conter apenas letras.'
})

form.username.addEventListener('keyup', event => {
  const username = event.target.value

  if () {

  }
})