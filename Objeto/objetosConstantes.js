// pessoa => 123 {...}
const pessoa = {nome: 'joão'}
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa <= {...} <= 

//pessoa = { nome: 'Ana'}

Object.freeze(pessoa)

pessoa.nome = 'Maria'
console.log(pessoa.nome)