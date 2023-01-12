const produtos = [
    { nome: 'Notebook', preco: 4392, fragil: true},
    { nome: 'Televisao', preco: 12324, fragil: true},
    { nome: 'Iphone', preco: 43832, fragil: true},
    { nome:' copo de platisco', preco: 10, fragil: false}
    
]

console.log(produtos.filter(function(p){
    return false
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil
console.log(produtos.filter(caro).filter(fragil))