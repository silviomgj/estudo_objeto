const pessoa = {
    nome: 'Cecilia',
    idade: 4,
    peso: 15    
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) =>{
    console.log(`${chave}, ${valor}`)
})

Object.defineProperty(pessoa, 'dataDeNascimento', {
    enumerable: true,
    writable: false,
    value: '03/06/2018'
})


pessoa.dataDeNascimento = 01/01/2019
console.log(pessoa.dataDeNascimento)
console.log(Object.keys(pessoa))
 
// Object.assign (ECMAScript 2015 )

const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)   //os ultimos elementos sobrescrevem os antecessores//

Object.freeze(obj)
obj.c = 1234
console.log(obj)
