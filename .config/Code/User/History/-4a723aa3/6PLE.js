const logMessage = message => {
  console.log(message)
}

const message = 'Um segundo e meio se passaram desde que a pagina foi carregada'

setTimeout(logMessage, 1500, message)