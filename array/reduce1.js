const alunos = [
    { nome: 'Lucas', nota: 9.0, bolsista: false},
    { nome: 'Pedro', nota: 10, bolsista: true},
    { nome: 'Bruna', nota: 5.5, bolsista: false}
]
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador,atual)
    return acumulador + atual
})

