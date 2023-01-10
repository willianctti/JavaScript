const notas = [1, 3, 2, 4, 6, 5, 8, 7, 0, 9]

// sem callback
const notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7)  {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

// Com callback
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas2)

// Com arrow
const notasBaixas3 = notas.filter(nota => nota < 7 )
console.log(notasBaixas3)
