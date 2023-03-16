// a palavra-chave this
let user = {
  name: 'Joao',
  age: 31,
  email: 'joaocardoso@gmail.com',
  city: 'Sao Paulo',
  blogPosts: ['Empadao de frango', '4 receitas de pure de batata'],
  login: function () {
    console.log('Usuario logado')
  },
  logout: function () {
    console.log('Usuario deslogado')
  },
  logBlogPosts: funciton () {
    console.log(this)
  }
}

user.logBlogPosts(user.logBlogPosts)