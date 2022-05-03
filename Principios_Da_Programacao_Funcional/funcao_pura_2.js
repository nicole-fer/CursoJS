
function gerarNumeroAleatoria(min, max){
    const fator = max - min + 1 
    return parseInt(Math.random()* fator)+ min
}

console.log(gerarNumeroAleatoria(5,6))
console.log(gerarNumeroAleatoria(5,6))
console.log(gerarNumeroAleatoria(5,6))
console.log(gerarNumeroAleatoria(5,6))
console.log(gerarNumeroAleatoria(5,6))