
// gerar numeros da megasena

function gerarNumerosEntre(min,max, numerosProibidos) {
    if(min>max)[max,min] = [min,max]         //investe o valor das variáveis
    return new Promise((resolve,reject) =>{
        const fator = max-min +1
        const aleatorio = parseInt(Math.random() * fator) + min

        if (numerosProibidos.includes(aleatorio)){
            reject('Numero Repetido!')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtdeNumeros, tentativa = 1){
    try {
        const numeros = []
        for(let _ of Array(qtdeNumeros).fill()){
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros
    } catch(e){
        if (tentativa > 100){       // tenta gerar 25 numeros sem repetição até no maximo 100x, caso for maior que 100 aparece a mensagem de erro
            throw "Não deu certo!"
        } else {
            return gerarMegaSena(qtdeNumeros, tentativa+1)
        }
    }
}

gerarMegaSena(25)           //gera 25 numeros
    .then(console.log)
    .catch(console.log)


