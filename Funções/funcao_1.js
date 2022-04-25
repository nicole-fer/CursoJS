
let a = 4
console.log(a)

// Function Declaration
function bomDia (){
    console.log('Bom Dia')
}

bomDia()

// Function Expression
const boaTarde = function(){       //passa uma função como parametro para uma variavel
    console.log('Boa Tarde')
}

boaTarde()  

// let x = boaTarde() -> undefined

function somar(a,b){
    return a+b
}

let resultado = somar(3,4)
console.log(resultado)

resultado = somar(3,5, 7, 8) //pega so os dois primeiros numeros e desconsidera os outros
console.log(resultado)

resultado = somar(3)    // soma o 3 com o 'undefined' e resulta em 'NaN -> Not a Number'
console.log(resultado)