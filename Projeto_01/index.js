const path = require('path')
const fn = require('./funcoes')

const caminho = path.join(__dirname,'..','dados','legendas','legendas')
const simbolos = [
    '.', '?', '-', '"', '♪' , '_', '<i>', '</i>', '\r', '[', ']','(', ')'
]

const mesclarConteudos = array => array.join('\n')
const separarPorLinhas = todoConteudo => todoConteudo.split('\n')
const separarPorPalavras = todoConteudo => todoConteudo.split(' ')

fn.lerDiretorio(caminho)
    .then(fn.elementosTerminadosCom('.srt')) //filtra os arquivos srt
    .then(fn.lerArquivos) //ler todo os conteudo
    .then(mesclarConteudos)      // o array passa a ser uma grande string com todos os arquivos
    .then(separarPorLinhas) //separa em varias linhas
    .then(fn.removerSeVazio)  //remove linhas vazias e algumas linhas consideradas vazias como /r
    .then(fn.removerSeIncluir('-->'))
    .then(fn.removerSeIncluir('</font>'))
    .then(fn.removerSeApenasNumero)
    .then(fn.removerSimbolos(simbolos))
    .then(mesclarConteudos)
    .then(separarPorPalavras)
    .then(console.log)
