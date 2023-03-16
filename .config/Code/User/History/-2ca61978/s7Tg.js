// variaveis e escopo de bloco

let age = 31

if (true) {
  let age = 51
  let name = 'Ian'

  console.log(`dentro do 1 bloco de codigo: ${age} ${name}`)

  if (true) {
    console.log(`dentro do 2 bloco de codigo? ${age}`)
  }
}

console.log(`fora do bloco de codigo: ${age} ${name}`)