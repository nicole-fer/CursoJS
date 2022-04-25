// somar(3)(4)(5)

function somar(n1){
    return function(n2){
        return function(n3){
            return n1+n2+n3
        }
    }
}

const somaN = somar(1)(2)(3)
console.log(somaN)

//calcular (3)(7)(fn)
console.log('------------------------------------PARTE II ----------------------------------')

function calcula(v1){
    return function(v2){
        return function (fn){
            return fn(v1,v2)
        }
    }
}
function subtrair(a,b){
    return a-b
}

function somar2(a,b){
    return a+b
}

function multiplicar(a,b){
    return a*b
}

function dividir(a,b){
    return a/b
}

console.log('Valores -> 10 e 5')

const subtraiV = calcula(10)(5)(subtrair)
console.log( 'SUBTRAÇÃO -> ',subtraiV)

const somaV = calcula(10)(5)(somar2)
console.log('SOMA -> ',somaV)

const multiplicaV = calcula(10)(5)(multiplicar)
console.log('MULTIPLICAÇÃO -> ',multiplicaV)

const divideV = calcula(10)(5)(dividir)
console.log('DIVISÃO -> ',divideV,)