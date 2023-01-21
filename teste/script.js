let num1 = document.getElementById('n1')
let num2 = document.getElementById('n2')
total = 0
function calcular() {
    if (document.getElementById('box1').checked) {
        total = num1 + num2
    } else if (document.getElementById(box2).checked) {
        total = num1 - num2
    } else if (document.getElementById(box3).checked) {
        total = num1 * num2
    } else {
        total = num1 / num2
    }
    document.getElementById('resultado').innerHTML = Number(total)
    
}