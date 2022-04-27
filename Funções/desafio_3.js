// passar um arquivo para a promisse e o resultado sera oq tem dentro do arquivo

const fs = require ('fs')
const path = require('path')


function passaArquivo(caminho){
    return new Promise(resolve => {
        fs.readFile(caminho,function(_, conteudo){
            resolve(conteudo.toString())
        })
    })
}

const caminho = path.join(__dirname, 'dados.txt')

passaArquivo(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => console.log(linhas[1]))