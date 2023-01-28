let computerNumber
let userNumbers = []
let tentativas = 0
let maxTent = 5

function init() {
    computerNumber = Math.floor(Math.random() * 100 + 1)
    console.log(computerNumber)
}

function compareNumbers() {
    const userNumber = Number(document.getElementById('inputBox').value)
    userNumbers.push(userNumber)
    document.getElementById('guesses').innerHTML = userNumbers
    if (tentativas < maxTent ) {
        if (userNumber > computerNumber) {
            document.getElementById('textOutput').innerHTML = 'Seu numero está muito alto'
            document.getElementById('inputBox').value = ''
            tentativas++
            document.getElementById('attempts').innerHTML = tentativas
        } else if (userNumber < computerNumber)
     {
        document.getElementById('textOutput').innerHTML = 'Seu numero está muito baixo'
        document.getElementById('inputBox').value = ''
        tentativas++
        document.getElementById('attempts').innerHTML = tentativas
     } else {
        document.getElementById('textOutput').innerHTML = 'Parabéns, você acertou!'
        tentativas++
        document.getElementById('attempts').innerHTML = tentativas
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
        
     }
    } else {
        document.getElementById('textOutput').innerHTML = 'Você excedeu o máximo de tantivas.'
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
    }
    function newGame () {
        window.location.reload
    }
    

}