var anoDigitado = document.getElementById('ano')
var anoAtual = 2022;
var res = document.getElementById('resultado');
var radioSexoM = document.getElementById('sexoM')
var radioSexoF = document.getElementById('sexoF')
var img = document.getElementById('imagem')

function calcular() {
    var idade = anoAtual - anoDigitado.value
    //res.innerHTML = `Idade: ${idade}`;
    if (radioSexoF.checked == true) {
        if (idade >= 0 && idade <= 15) {
            img.src = './img/menina-shaped.png'
            res.innerHTML = `${idade} ano(s) de idade`
        } else if (idade > 15 && idade < 60) {
            img.src = './img/mulher-shaped.png'
            res.innerHTML = `${idade} ano(s) de idade`
        }
        else {
            img.src = './img/idosa-shaped.png'
            res.innerHTML = `${idade} ano(s) de idade`
        }
    } else {
        if (idade >= 0 && idade <= 15) {
            // res.innerHTML += `menino!`
            img.src = './img/menino-shaped.png'
            res.innerHTML = `${idade} ano(s) de idade`
        } else if (idade > 15 && idade < 60) {
            img.src = './img/homem-shaped.png'
            res.innerHTML = `${idade} ano(s) de idade`
        }
        else {
            img.src = './img/idoso-shaped.png'
            res.innerHTML = `${idade} ano(s) de idade`
        }
    }


}