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
  logBlogPosts: function () {
    console.log(this.blogPosts)
  }
}

// user.logBlogPosts(user.logBlogPosts)
console.log(this)