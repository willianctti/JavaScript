function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log('Valor acima do eprmitido')
    } else {
        return area
    }
}
console.log(area(2, 2))
console.log(area(10, 20, 9))