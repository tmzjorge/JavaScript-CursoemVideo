
function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
        msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12 ){
        img.src = 'imagens/manha.png'
        msg.innerHTML += "<br>'Bom Dia'"
        document.body.style.background = '#f5db76'
    } else if(hora >= 12 && hora < 18){
        msg.innerHTML += "<br>'Boa Tarde'"
        img.src = 'imagens/tarde.png'
        document.body.style.background = 'rgb(41, 41, 156)'
    } else {
        img.src = 'imagens/noite.png'
        msg.innerHTML += "<br>'Boa noite'"
        document.body.style.background = 'black'
    }
}