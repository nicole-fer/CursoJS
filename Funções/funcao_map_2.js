// gerar um array so com os nomes, gerar outro array multiplicando a quantidade pelo preço

const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99},
    {nome: 'Impressora', qtde: 0, preco: 649.50},
    {nome: 'Caderno', qtde: 4, preco: 27.10},
    {nome: 'Lapis', qtde: 3, preco: 5.82},
    {nome: 'Tesoura', qtde: 1, preco: 19.20},
]

//array so com nos nomes
const produto = a => a.nome
console.log(carrinho.map(produto))

//array com os valores multiplicados
const valor = (a) => (a.qtde)*(a.preco)
console.log(carrinho.map(valor))