function esperarPor(){
    const futuro = Date.now() + tempo
    while(Date.now() < futuro) {}
}

esperarPor(5000)
console.log('Fim!')