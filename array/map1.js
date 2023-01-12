const nums = [1, 2, 3, 4, 5]

// For com propósito

let resultado = nums.map(function(e){
    return e * 2
})

console.log(resultado)


const nums2 = [10, 20 , 30]
    let resultado2 = nums2.map(function(elementos) {
        return elementos * 10
    })

console.log(resultado2)

const soma10 = e => e + 10
const tripo = e => e * 3
resultado = nums.map(soma10).map(tripo)
console.log(resultado)