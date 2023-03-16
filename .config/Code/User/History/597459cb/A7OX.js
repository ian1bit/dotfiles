const form = document.querySelector('.signup-form')

form.addEventListener('submit', event => {
  event.preventDefault()
  
  const username = event.target.username.value
  console.log(username)
})