// Argumentos, paramentros e default parameters
const myFunc = function (name = 'Estroncio', lastName = 'Almeira') {
  console.log(`Oi, ${name} ${lastName}!`);
}

myFunc()
myFunc('Ian', 'Pereira')