const pilotos = ['Joaozinho', 'bruno', 'marcio']
pilotos.push('Pedrao') // adiciona na ultima posicao
console.log(pilotos);

pilotos.shift() // remore o priumeiro 
console.log(pilotos);

pilotos.unshift('Hamilton')
console.log(pilotos);

// splice pode adicionar e remover elementos

// adicionar 
pilotos.splice(2, 0, 'BOttas')
console.log(pilotos);

// remover
pilotos.splice(3, 1,) // removeu marcio
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2) // novo array 

console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2);