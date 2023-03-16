// variaveis e escopo de bloco

let age = 31

if (true) {
  let age = 51
  let name = 'Ian'

  console.log(`dentro do 1 bloco de codigo: ${age} ${name}`)
}

console.log(`fora do bloco de codigo: ${age} ${name}`)