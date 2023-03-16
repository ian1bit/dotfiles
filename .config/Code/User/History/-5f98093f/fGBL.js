const form = document.querySelector('.signup-form')
// const usernameInput = document.querySelector('#username')

form.addEventListener('submit', event => {
  event.preventDefault()
  
  console.log(event.target.username.value)
})

const username = '@ianper77!'
const pattern = /[a-z]{6,}/
const result = pattern.test(username)

console.log(result)