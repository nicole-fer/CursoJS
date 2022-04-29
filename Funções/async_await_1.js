
function esperarPor(tempo=2000){
    return new Promise(function(resolve){
        setTimeout(() => resolve() ,tempo)
    })
}

/*
esperarPor(2000)
    .then(() => console.log('Executando Promise 1....'))
    .then(esperarPor)
    .then(() => console.log('Executando Promise 2....'))
    .then(esperarPor)
    .then(() => console.log('Executando Promise 3....'))

*/

    // usando Async/Await -> a idéia é que ele pareça sincrono, mesmo sendo assincrono

function retornarValor(){
    return new Promise(resolve =>{
        setTimeout(() => resolve(10),3000)  //retornar  valor 10 apos 5s
    })
}

// primeiro resolve 'valor' para poder a parte de baixo ser resolvida

async function executar(){          // async retorna um valor dentro de uma promise e await extrai o valor somente quando a promise for resolvida
    let valor = await retornarValor() //espera a promise er reolvida

    await esperarPor(2000)
    console.log(`Async/Await ${valor}...`)

    await esperarPor(2000)
    console.log(`Async/Await ${valor +1}...`)

    await esperarPor(2000)
    console.log(`Async/Await ${valor +2}...`)

    return valor + 3
}

executar().then(console.log) //depois que tudo estive resolvido e o valor atualizado, ele imprime o valor