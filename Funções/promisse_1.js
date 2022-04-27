
const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMaiuscula = letra => letra.toLowerCase()

new Promise(function(resolve){
    resolve (['Ana','Bia','Carlos','Daniel'])
})
    .then(primeiroElemento)                                    //pega 'Ana'
    .then(primeiroElemento)                              // pega 'A'
    .then(letraMaiuscula)                         // pega 'a'
    .then(console.log)       //imprime 