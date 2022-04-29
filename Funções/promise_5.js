function funcionarOuNao (valor, chanceErro){
    return new Promise((resolve, reject) =>{
        try{
            if(Math.random()< chanceErro){
                reject('Ocorreu um erro')
            } else{
                resolve(valor)
            }
        } catch(e){
            reject(e)
        }
    })
}

funcionarOuNao('testando...',0.5)
    .then(v => console.log(`Valor: ${v}`))
    .then(
        v => console.log(v),
        err => console.log(`Erro Esp.: ${err}`)
    )
    .then(()=> console.log('Quase fim'))
    .catch(er => console.log(`Erro: ${er}`))    //geralmente chatch é no final
    .then(() => console.log('Fim!'))