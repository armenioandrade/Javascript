let n1 = document.getElementById('numero')
let n2 = Number(n1)
let selectbox = document.getElementById('selectbox')
function gerarTabuada(numero) {
    tabuada = 10
    selectbox.innerHTML = ''
    for (let n = 1; n <= tabuada; n++) {

        console.log(`${n}x${numero}=${n * numero}`)
        
        let option = document.createElement("option")
        option.text = `${n}x${numero}=${n * numero}`
        selectbox.add(option)


    }
}

