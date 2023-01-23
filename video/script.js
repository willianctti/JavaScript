function calcular() {
    let num1 = Number(document.getElementById('n1').value)
    let num2 = Number(document.getElementById('n2').value)
    total = 0

    if (document.getElementById('box1').checked) {
        total = num1 + num2
    } else if (document.getElementById('box2').checked) {
        total = num1 - num2
    } else if (document.getElementById('box3').checked) {
        total = num1 * num2
    } else {
        total = num1 / num2
    }

    document.getElementById('resultado').innerHTML = Number(total)
}