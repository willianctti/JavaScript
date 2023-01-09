const notas = [1, 5, 3, 6, 5, 2, 6]
for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Bruna',
    sobrenome: 'Nicoletti',
    idade: 18,
    peso: 47
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}