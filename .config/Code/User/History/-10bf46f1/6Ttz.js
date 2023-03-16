// objetos em array

const posts = [
  { title: 'Melhores animes', likes: 30 },
  { title: 'Lugares que deseja viajar', likes: 51 }
]

let user = {
  name: 'Ian',
  age: 21,
  email: 'ian@outlook.com',
  city: 'Salvador',
  blogPosts: ['Melhores animes', 'Lugares que deseja viajar'],
  login: function () {
    console.log('Usuario logado')
  },
  logout: function () {
    console.log('Usuario deslogado')
  },
  logBlogPosts () {
    console.log(`${this.name} escreveu os seguintes posts:`)

    this.blogPosts.forEach(post => {
      console.log(post)
    })
  }
}

user.logout()

const myName = 'Joao'

myName.toUpperCase()