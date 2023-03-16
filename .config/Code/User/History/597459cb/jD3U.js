const form = document.querySelector('.signup-form')

form.addEventListener('submit', event => {
  event.preventDefault()
  
  const username = event.target.username.value
  const usernameRegex = /^[a-zA-Z]{6,12}$/
  console.log(username)
})