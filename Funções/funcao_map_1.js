
const nums = [1,2,3,4,5] // vetor
const dobro = n => n*2  //função

//map
console.log(nums.map(dobro))     

// com dois parametros, em que i é a soma dos numeros dos vetores

const nums1 = [1,2,3,4,5] 
const dobro1 = (n,i) => n*2 + i

console.log(nums1.map(dobro1))  

// com tres parametros, em que a é  o tamanho do vetor (nesse caso, 5)

const nums2 = [1,2,3,4,5] 
const dobro2 = (n,i,a) => n*2 + i + a.length

console.log(nums2.map(dobro2))  

// com string

const nome = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa']
const primeiraLetra = a => a[0]
console.log(nome,nome.map(primeiraLetra))