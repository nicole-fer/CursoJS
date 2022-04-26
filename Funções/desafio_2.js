// ----------------------------- DESAFIO 02 ---------------------------------------

const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true},
    {nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true},
    {nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false},
    {nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false},
    {nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true},
]

// apenas elementos que tenham fagil true
const getFragil = a => a.fragil === true

// pegar quantidade e preco -> qtde*preco = total
const valor = (a) => (a.qtde)*(a.preco)
const total =  carrinho.filter(getFragil).map(valor)

// gerar a media dos totais
tamanho = total.length
const soma = (a,b) => { 
    return  a+b
}
const somaTotais=  carrinho.filter(getFragil).map(valor).reduce(soma)
console.log('MEDIA ->',somaTotais/tamanho)