// criando um map

const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99},
    {nome: 'Impressora', qtde: 0, preco: 649.50},
    {nome: 'Caderno', qtde: 4, preco: 27.10},
    {nome: 'Lapis', qtde: 3, preco: 5.82},
    {nome: 'Tesoura', qtde: 1, preco: 19.20},
]

Array.prototype.meuMap = function(fn){
    const mapped = []
    for (let i=0; i< this.length; i++){ 
        mapped.push(fn(this[i],i,this))
    }
    return mapped
}

//array so com nos nomes
const produto = a => a.nome
console.log(carrinho.meuMap(produto))

//array com os valores multiplicados
const valor = a => (a.qtde)*(a.preco)
console.log(carrinho.meuMap(valor))