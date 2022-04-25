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
