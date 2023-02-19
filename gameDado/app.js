const buttonToPlay = document.querySelector('.btn-to-play')

buttonToPlay.addEventListener('click', () => {
    // get random Numbers
    const numbers = getRandomintergerNumber() //[n1,n2]

    //select The Img Content
    document.querySelector('#img-1').setAttribute('src', `./img/dice${numbers[0]}.png`)
    document.querySelector('#img-2').setAttribute('src', `./img/dice${numbers[1]}.png`)

    // will check the Numbers if it's correct
    verifyNumbers(numbers[0], numbers[1])

    console.log(numbers)
})

function verifyNumbers(num1, num2) {
    const tittle = document.querySelector('.header')
    if (num1 > num2) {
        return tittle.textContent = 'Jogador 1 Venceu'
    } else if (num2 > num1) {
        return tittle.textContent = 'Jogador 2 Venceu'
    } else {
        return tittle.textContent = 'Empate'
    }

}

const getRandomintergerNumber = () => {
    const number1 = Math.floor(Math.random() * (6 - 1 + 1)) + 1
    const number2 = Math.floor(Math.random() * (6 - 1 + 1)) + 1

    const numberArr = [number1, number2]

    return numberArr
}

console.log(getRandomintergerNumber())