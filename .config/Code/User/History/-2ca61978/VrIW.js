// variaveis e escopo de bloco

let age = 31

if (true) {
  let age = 51

  console.log(`dentro do 1 bloco de codigo: ${age}`)
}

console.log(`fora do bloco de codigo: ${age}`)