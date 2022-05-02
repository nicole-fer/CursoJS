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
            const conteudo = fs.readdirSync(caminho,{encoding: 'utf-8'})
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

function elementosTerminadosCom(array, padrao){
      // endsWith -> metodo que se for terminado com o padrao (parametro), retorna verdadeiro
    return array.filter(ele => ele.endsWith(padrao))      
}

module.exports = {
    lerDiretorio,
    lerArquivo,
    lerArquivos,
    elementosTerminadosCom
}