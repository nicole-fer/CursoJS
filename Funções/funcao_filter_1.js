
const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99},
    {nome: 'Impressora', qtde: 0, preco: 649.50},
    {nome: 'Caderno', qtde: 4, preco: 27.10},
    {nome: 'Lapis', qtde: 3, preco: 5.82},
    {nome: 'Tesoura', qtde: 1, preco: 19.20},
]

// pega todos os valores de qtde maior que 1
const qtdeMaiorQue0 = a => a.qtde > 1
console.log(carrinho.filter(qtdeMaiorQue0))

// pega os nomes de todos maiores que 1
const getNome = a => a.nome
console.log(carrinho.filter(qtdeMaiorQue0).map(getNome))