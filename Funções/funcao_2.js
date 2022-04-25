
console.log('-------------------------PARTE 2 - FUNÇÕES - PASSAR UMA FUNÇÃO COMO PARAMENTRO PARA OUTRA FUNÇÃO -------------------------------')

function bomDia(){
    console.log('Bom Dia')
}

const boaTarde = function(){
    console.log('Boa Tarde')
}

// Passar um função como parâmetro para outra função
function executarQualquerCoisa(fn){     //verifica se o tipo é uma função
    if (typeof fn === 'function'){
        fn()
    }
}

executarQualquerCoisa(3)
executarQualquerCoisa(bomDia)
executarQualquerCoisa(boaTarde)


// -------------------------------- Retornar uma função a partir de uma outra função ---------------------------------
console.log('-------------------------PARTE 2 - FUNÇÕES - RETORNAR FUNÇÃO A PARTIR DE OUTRA FUNÇÃO -------------------------------')

function potencia(base){
    return function(exp){
        return Math.pow(base,exp)
    }
}

const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))

const resultadoPotencia34 = potencia(3)(4)
console.log(resultadoPotencia34)