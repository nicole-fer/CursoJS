/* Passar um função como parâmetro para outra função */

//exemplo anterios com arrow function
const bomDia = () => console.log('Bom Dia!!')
const boaTarde = () => console.log('Boa Tarde!!')

const executarQualquerCoisa = (fn) => {
    if (typeof fn === 'function'){
        fn()
    }
}

executarQualquerCoisa(bomDia)
executarQualquerCoisa(boaTarde)

const exec = (fn, a, b) => {
    return fn(a,b)
}

const somarNoTerminal = (a,b) => console.log(a+b)
const subtrairNoTerminal = (a,b) => console.log(a-b)

const subtrair = (a,b) => (a-b)

exec(somarNoTerminal,56,38)
exec(subtrairNoTerminal,182,27)

const r = exec(subtrair, 50,25)
console.log(r)