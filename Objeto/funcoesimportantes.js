const pessoa = {
    nome: 'Rebeca',
    idade: 24,
    peso: 50,
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa));

Object.entries(pessoa).forEach(([chave,valor]) => {
    console.log(`${chave}: ${valor}`);
})

Object.defineProperty(pessoa, 'DataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})
console.log(pessoa.DataNascimento);

// Object.assign

const dest = { a: 1}
const o1 = { b: 2}
const o2 = { c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)
console.log(dest)

Object.freeze(obj)