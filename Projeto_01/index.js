const path = require('path')
const fn = require('./funcoes')

const caminho = path.join(__dirname,'..','dados','legendas','legendas')

fn.lerDiretorio(caminho)
    .then(fn.elementosTerminadosCom('.srt')) //filtra os arquivos srt
    .then(fn.lerArquivos) //ler todo os conteudo
    .then(conteudos => conteudos.join('\n'))      // o array passa a ser uma grande string com todos os arquivos
    .then(TodoConteudo => TodoConteudo.split('\n')) //separa em varias linhas
    .then(fn.removerSeVazio)  //remove linhas vazias e algumas linhas consideradas vazias como /r
    .then(fn.removerSeIncluir('-->'))
    .then(fn.removerSeApenasNumero)
    .then(console.log)
