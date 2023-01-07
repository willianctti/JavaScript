// novo recurso de ECS2015

const pessoa = {
    nome: 'Bruna',
    idade: '15',
    endereco: {
        logradouro: 'centro',
        numero: 328
    }
}

const { nome, idade} = pessoa
console.log(nome, idade)

const { endereco: {logradouro, numero}} = pessoa
console.log(logradouro, numero)