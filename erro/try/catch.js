function tratarErroELancar(erro) {
   //throw 10
    //throw new Error('erro')

}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('Final')
    }

}

const obj = { name: 'lucas'}
imprimirNomeGritado(obj)
