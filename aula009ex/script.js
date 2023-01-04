function contar(){
var num1 = document.getElementById('inicio')
var num2 = document.getElementById('fim')
var passo = document.getElementById('passo')
var res = document.getElementById('res')


 if (num1.value.length == 0 || num2.value.length == 0 || passo.value.length == 0) {
    window.alert('[ERRO] Faltam dados.')
 } else {
    res.innerHTML = 'contando:  '
    let i = Number(num1.value)
    let f = Number(num2.value)
    let p = Number(passo.value)
    if (i < f) {
        for(let contador = i; contador <= f; contador += p) {
        res.innerHTML += `${contador} \u{1F449}`
}
    } else { 
        for(let contador = i; contador >= f; contador -= p) {
            res.innerHTML += `${contador} \u{1F449}`
        }

}
        
    
       
}
 
}