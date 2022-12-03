// usando a notação literal 
const obj1 = {}
console.log(obj1)

//object em JS
console.log(typeof object , typeof new Object,)
const obj2 = new Object 
console.log(obj2)

// Funções construtoras
function produto (nome, preco, desc) {
    this.nome = nome
    this.gerPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new produto ('caneta', 7.99, 0.15)
const p2 = new produto ('notebook', 3000.00, 0.25)
console.log(p1.gerPrecoComDesconto())
console.log(p2.gerPrecoComDesconto())

//função factory

function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('joão', 7100, 4)
const f2 = criarFuncionario('maria', 11000, 1)
console.log(f1.getSalario(), f2.getSalario())

// função object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// uma função famosa que retorna objeto....
const fromJSON = JSON.parse('{"info":"sou um JSON"}')
console.log(fromJSON.info)
