let n1 = document.getElementById('n1')
let n2 = document.getElementById('n2')

function calcular(){
    let num1 = parseFloat(n1.value)
    let num2 = parseFloat(n2.value)

    if(!isNaN(num1) && !isNaN(num2)){
        let soma = num1 + num2
        let resposta = document.getElementById('txt')
        resposta.innerHTML = `A soma de ${num1} + ${num2} = ${soma}`
    }
}
    