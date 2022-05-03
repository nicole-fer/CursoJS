const fs = require ('fs')
const path = require('path')

function lerDiretorio(caminho){
    return new Promise((resolve, reject) => {
        try {
            let arquivos = fs.readdirSync(caminho)
            arquivos = arquivos.map(arquivo => path.join(caminho,arquivo))
            resolve(arquivos)
        } catch (e){
            reject(e)
        }
    })
}

function lerArquivo(caminho){
    return new Promise((resolve,reject) => {
        try{
            const conteudo = fs.readFileSync(caminho,{encoding: 'utf-8'})
            resolve(conteudo.toString())
        } catch(e){
            reject(e)
        }
    })
}

//espera ler todos os arquivos para retornar um array

function lerArquivos (caminhos){
    return Promise.all(caminhos.map(caminho => lerArquivo(caminho)))      //espera receber um array de Promise
}

function elementosTerminadosCom(padraoTextual){
    return function(array){
        return array.filter(ele => ele.endsWith(padraoTextual)) 
    }
      // endsWith -> metodo que se for terminado com o padrao (parametro), retorna verdadeiro 
}

function removerSeVazio (array){
    return array.filter(el => el.trim())
}


// a resposta da função sera passada pro then
function removerSeIncluir(padraoTextual){
    return function(array){
        return array.filter(el => !el.includes(padraoTextual))
    }
    
}

function removerSeApenasNumero(array){
    return array.filter(el=>{
        const num = parseInt(el.trim())
        return num !== num
    })
}

function removerSimbolos(simbolos){
    return function(array){
        return array.map(el => {
            return simbolos.reduce((acc, simbolo) => {
                return acc.split(simbolo).join('')      //divide o array e junta sem o simbolo
            }, el)
        })
    }
}

function mesclarElementos (array){
    return array.join(' ')
}

function separarTextoPor(simbolo){
    return function(texto){
        return texto.split(simbolo)
    }
}

function agruparElementos(palavras){
    return Object.values(palavras.reduce((acc,palavra)=> {
        const el = palavra.toLowerCase()
        const qtde= acc[el] ? acc[el].qtde + 1 : 1 
        acc[el] = {elemento: el, qtde}
        return acc
    }, {}))
}

function ordenarPorAtribNumericos(attr, ordem = 'asc'){
    return function(array){
        const desc = (o1, o2) => o2[attr] - o1[attr]
        return array.sort(ordem === 'asc' ? asc : desc)
    }
}

module.exports = {
    lerDiretorio,
    lerArquivo,
    lerArquivos,
    elementosTerminadosCom,
    removerSeVazio,
    removerSeIncluir,
    removerSeApenasNumero,
    removerSimbolos,
    mesclarElementos,
    separarTextoPor,
    agruparElementos,
    ordenarPorAtribNumericos
}