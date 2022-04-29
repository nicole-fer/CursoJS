function Produto(nome, preco, desconto = 0.15){
    this.nome = nome
    this.preco = preco
    this._desconto = desconto

    this.precoFinal = function(){
        return this.preco * (1-this._desconto)
    }
}

Produto.prototype.log = function (){
    console.log(`Nome: ${this.nome}, Preço: ${this.preco}`)
}

Object.defineProperty(Produto.prototype,'desc',{
    get: function(){
        return this._desconto
    }
})

Object.defineProperty(Produto.prototype,'descString',{
    get: function(){
        return `${this._desconto*100}%`
    }
})

const p1 = new Produto('Caneta', 10)
console.log (p1.nome)
p1.log()

const p2 = new Produto('Geladeira', 3000)
console.log (p2.preco)
console.log (p2.precoFinal())
console.log(p2.desc)
console.log(p2.descString)