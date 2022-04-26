const fs = require ('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function exibirConteudo(err, conteudo){
    console.log(conteudo.toString())
}

fs.readFile(caminho,{},exibirConteudo)

//função com arrow function 
fs.readFile(caminho,(_, conteudo) => console.log(conteudo.toString()))

