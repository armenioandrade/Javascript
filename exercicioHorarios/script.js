function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()


    msg.innerHTML = `Agora são ${hora} horas ${minutos} minutos. <br>`

    if(hora >= 0 && hora < 12){
        // bom dia
        img.src = 'manha-edit.png'
        msg.innerHTML += 'Bom dia!'
        document.body.style.background = '#FFE4C4'
    }
    else if(hora >= 12 && hora <18){
        //boa tarde
        img.src = 'tarde-edit.png'
        msg.innerHTML += 'Boa tarde!'
        document.body.style.background = '#D2691E' 
    }else{
        //boa noite
        img.src = 'noite-edit.png'
        msg.innerHTML += 'Boa noite!'
        document.body.style.background = '#2F4F4F' 
    }
}


