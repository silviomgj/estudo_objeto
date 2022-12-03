// Object.preventExtensions

const produto = Object.preventExtensions ({
    nome: 'qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensivel', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.dexcricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal

const pessoa = {nome: 'Francielle', idade: 32}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Moraes'
delete pessoa.nome
pessoa.idade = 27
console.log(pessoa)

// Object.freeze = Seal + valores constantes