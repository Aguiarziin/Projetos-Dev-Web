const btnGenerate = document.getElementById('btn-generate')

function generateColors() {
    //Numeros hexas decimais vai de 0 a F
    const chars = '0123456789ABCDEF'
    //a cor precisa ser armazenada em uma variavel com '#' pro css ler 
    let color = '#'

    for (let i = 0; i < 6; i++) {
        //charAt retorna um string do indice passado dessa string
        color += chars.charAt(getRandomIntergerNumber)
        // é passado uma funcao de numeros aleatorios para o CharAt selecionar uma string sempre com cor diferente
    }
    return color
}
function getRandomIntergerNumber() {
    const randomNumber = Math.floor(Math.random() * (chars.length + 1))
    return randomNumber
}

btnGenerate.addEventListener('click', () => {
    // vai ser construida uma função para cada div da paleta receber a cor gerada na função acima
})