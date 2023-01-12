Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i <this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados = ['Lucas', 'Bruna', 'Willian', 'Pedro']
aprovados.forEach2(function(nome, indice) {
    console.log(`${indice +1}) ${nome}`)
})


// Se eu posso usar o forEach

const aprovados1 = ['Joaozinho', 'Danísio', 'Helder', 'Kleber']
    aprovados1.forEach(function(nome, indice) {
        console.log(`${indice +1}) ${nome}`)
    })