function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res') 
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente')
    }   else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade <= 10 ) {
                //bebe
                img.setAttribute('src', 'imagens/bebe.png') 
            } else if (idade < 50) {
                //Jovem
                img.setAttribute('src', 'imagens/jovemh.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idosoh.png')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade <= 10 ) {
                //bebe
                img.setAttribute('src', 'imagens/bebe.png')
            } else if (idade < 50) {
                //Jovem
                img.setAttribute('src', 'imagens/jovemm.png')
            } else {
                // Idosa
                img.setAttribute('src', 'imagens/idosom.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com idade ${idade} anos`
        res.appendChild(img)





    }
} 