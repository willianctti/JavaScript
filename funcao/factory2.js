function criarProduto(nome, preco) {
    return {
        nome, 
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('notebook', 2199.49))
console.log(criarProduto('tv', 2599.49))
console.log(criarProduto('celular', 4199.49))