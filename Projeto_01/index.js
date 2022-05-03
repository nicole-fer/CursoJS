const path = require('path')
const fn = require('./funcoes')

const caminho = path.join(__dirname,'..','dados','legendas','legendas')
const simbolos = [
    '.', '?', '-',',', '"', '♪' , '_', '<i>', '</i>', '\r', '[', ']','(', ')', "\'"
]

// recebe um array de palavras


fn.lerDiretorio(caminho)
    .then(fn.elementosTerminadosCom('.srt')) //filtra os arquivos srt
    .then(fn.lerArquivos) //ler todo os conteudo
    .then(fn.mesclarElementos)      // o array passa a ser uma grande string com todos os arquivos
    .then(fn.separarTextoPor('\n')) //separa em varias linhas
    .then(fn.removerSeVazio)  //remove linhas vazias e algumas linhas consideradas vazias como /r
    .then(fn.removerSeIncluir('-->'))
    .then(fn.removerSeIncluir('</font>'))
    .then(fn.removerSeApenasNumero)
    .then(fn.removerSimbolos(simbolos))
    .then(fn.mesclarElementos)
    .then(fn.separarTextoPor(' '))
    .then(fn.removerSeVazio)
    .then(fn.removerSeApenasNumero)
    .then(fn.agruparElementos)
    .then(fn.ordenarPorAtribNumericos('qtde', 'desc'))
    .then(console.log)
