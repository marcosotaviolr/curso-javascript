let numeros = []
let txtn = document.querySelector('#txtn')
let res = document.querySelector('#divres')
let listanum = document.querySelector('#listanum')

function adicionar() {
    res.innerHTML = ''
    let num = Number(txtn.value)
    lista(num)
}

function lista(n) {
    if (n > 100 || n < 1) {
        window.alert('Número inválido')
    } else if (numeros.indexOf(n) != -1) {
        window.alert('Esse número ja está na lista')
    } else {
        numeros.push(n)
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado.`
        listanum.appendChild(item)
    }
}

function finalizar() {
    if (numeros.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
        return
    }
    let maior = -Infinity
    let menor = Infinity
    let soma = 0
    let media = 0
    let tamanho = numeros.length
    for (let n of numeros) {
        soma += n
        if (n > maior) {
            maior = n
        } 
        if (n < menor) {
            menor = n
        }
    }
    media = (soma / tamanho).toFixed(2)
    res.innerHTML = `Ao todo temos ${tamanho} números cadastrados. <br> O maior valor informado foi ${maior}. <br> O menor valor informado foi ${menor}. <br> Somando todos os valores, temos ${soma}. <br> A média dos valores digitados é ${media}`
}