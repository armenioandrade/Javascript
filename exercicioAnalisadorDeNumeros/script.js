let numArray = [];

function addNumerosArray(n) {

    numArray.push(n)
    let selectbox = document.getElementById("selectbox")
    let option = document.createElement("option")
    let finalizar = document.getElementById("botaoFinalizar")
    for (pos in numArray) {
        option.text = `O número ${numArray[pos]} foi adicionado`
        selectbox.add(option)
    }
}

function mostrar() {
    let span = document.getElementById("mostrar")
    let soma = parseInt(0)
    for (pos in numArray) {
        soma = soma + parseInt(numArray[pos])
    }
    span.innerHTML = `Ao todo temos ${numArray.length} cadastrados<br>
    A soma de tudo é ${soma}<br>`

    menorValor(numArray)
    maiorValor(numArray)
    mediaValor(numArray)
}

function menorValor(tempArray) {
    let varAuxMenor = parseInt(numArray[0])
    let span = document.getElementById("mostrar")
    for (pos in numArray) {
        if (numArray[pos] < varAuxMenor) {
            varAuxMenor = numArray[pos]
        }
    }
    span.innerHTML += `o menor valor é ${varAuxMenor}<br>`
}
function maiorValor(tempArray) {
    let varAuxMaior = parseInt(numArray[0])
    let span = document.getElementById("mostrar")
    for (pos in numArray) {
        if (numArray[pos] > varAuxMaior) {
            varAuxMaior = numArray[pos]
        }
    }
    span.innerHTML += `o maior valor é ${varAuxMaior}<br>`
}
function mediaValor(tempArray) {
    let mediaValor = parseInt(0)
    let somaValores = parseInt(0)
    let span = document.getElementById("mostrar")
    for (pos in numArray) {
        somaValores += parseInt(numArray[pos])
    }
    span.innerHTML += `a media dos valores é ${somaValores/numArray.length}`
}