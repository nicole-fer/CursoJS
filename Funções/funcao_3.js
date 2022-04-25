// ARROW FUNCTION   

// forma mais simples 
const felizNatal = () => console.log('Feliz Natal !!')
felizNatal()

// forma com 1 paramentro (nome) e usando crase pra concatenar 
const saudacao = nome => `Fala ${nome}, blz ?!!`
console.log(saudacao('Maria'))

//usando um array
const somar = (...numeros) =>{          //pega todos os parametros e passa pra um array
    let total = 0
    for (let n of numeros){
        total += n
    }
    return total
}

//console.log(somar([1,2,3,4,5,6,7,8,9,10]))

console.log(somar(1,2,3))
console.log(somar(1,2,3,4,5))
console.log(somar(1,2,3,4,5,6,7,8,9,10))

const subtrair = (a,b) => a-b
console.log(subtrair(10,5))

/* função dentro de outra função usando arrow function
    ANTES:

      function potencia(base){
            return function(exp){
                return Math.pow(base,exp)
             }
        } 

    DEPOIS:                                         */

const potencia = base => exp => Math.pow(base,exp)  //DIMINUI PARA APENAS 1 LINHA DE CODIGO

console.log(potencia(2)(8))

//THIS

Array.prototype.ultimo=function(){
    console.log(this[this.length -1])
}

Array.prototype.primeiro=function(){
    console.log(this[0])
}

const numeros = [1,2,3]
numeros.ultimo()
numeros.primeiro()
