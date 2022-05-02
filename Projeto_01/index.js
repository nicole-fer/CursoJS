const path = require('path')
const fn = require('./funcoes')

const caminho = path.join(__dirname,'..','dados','legendas','legendas')

fn.lerDiretorio(caminho)
    .then(arquivos => fn.elementosTerminadosCom(arquivos, '.srt')) //filtra os arquivos srt
    .then(arquivosSRT => fn.lerArquivos(arquivosSRT)) //ler todo os conteudo
    .then(conteudos => conteudos.join('\n'))      // o array passa a ser uma grande string com todos os arquivos
    .then(TodoConteudo => TodoConteudo.split('\n')) //separa em varias linhas
    .then(linhas => fn.removerSeVazio(linhas))  //remove linhas vazias e algumas linhas consideradas vazias como /r
    .then(console.log)
