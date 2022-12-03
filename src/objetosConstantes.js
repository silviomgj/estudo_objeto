// pessoa -> 123 -> {...}
const pessoa = {nome: 'Ana'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa =  {nome: 'Ana'}

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua 123'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome:'João'}) // trava o objeto transformando em constante
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)


