// funcao sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)
imprimirSoma(3,)
imprimirSoma(2,6,4,3,5,6,3)

// funcao com retorno

function soma(a, b = 0){
    return a + b
}

console.log(soma(2, ))

  