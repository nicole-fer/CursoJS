function funcionarOuNao (valor, chanceErro){
    return new Promise((resolve, reject) =>{
        if(Math.random()< chanceErro){
            reject('Ocorreu um erro')
        } else{
            resolve(valor)
        }
    })
}

funcionarOuNao('testando...',0.5)
    .then(v => console.log(`Valor: ${v}`))
    .catch(er => console.log(`Erro: ${er}`))
    .then(() => console.log('Fim!'))