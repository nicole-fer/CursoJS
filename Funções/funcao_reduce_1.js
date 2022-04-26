// criando uma função Reduce

const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99},
    {nome: 'Impressora', qtde: 0, preco: 649.50},
    {nome: 'Caderno', qtde: 4, preco: 27.10},
    {nome: 'Lapis', qtde: 3, preco: 5.82},
    {nome: 'Tesoura', qtde: 1, preco: 19.20},
]

//array com os valores multiplicados
const valor = (a) => (a.qtde)*(a.preco)

// somar todos os valores a partir do reduce
console.log(carrinho.map(valor))
const total = (a,b) => { 
    console.log(`${a} + ${b}`)
    return a+b
}
console.log('TOTAL ->',carrinho.map(valor).reduce(total))
