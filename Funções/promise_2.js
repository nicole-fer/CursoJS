
/*setTimeout(function(){
    console.log('Executando callback...')
    setTimeout(function(){
        console.log('Executando callback...')
        setTimeout(function(){
            console.log('Executando callback...')
        }, 2000)
    },2000)
},2000)                    // depois de 2 segundos, essa função será executada

*/


function esperarPor(tempo=2000){
    return new Promise(function(resolve){
        setTimeout(function(){       // depois de 2s ele chama o resolve
            console.log('Executando Promisse...')
            resolve('vishhh...')
        }, tempo)
    })
}

esperarPor()
    .then(()=> esperarPor())
    .then(esperarPor)