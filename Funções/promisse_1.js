let p = new Promise(function(cumprirPromessa){
    cumprirPromessa = (['ana','Bia','Carlos','Daniel'])
})

function primeroElemento (array){
    return array[0]
}

function primeiraLetra(string){
    return string[0]
}

const letraMinuscula = letra => letra.toLowerCase()

    .then(valor => valor[0])                                    //pega 'Ana'
    .then(primeiro => primeiro[0])                              // pega 'A'
    .then(letra => letra.toLowerCase())                         // pega 'a'
    .then(onsole.log)       //imprime 