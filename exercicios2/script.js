function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('nasc')
    var res = document.getElementById('res')

    if(fAno.value.length == 0 || fAno.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        var fSex = document.getElementsByName('sexo')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fSex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                // criança
                img.setAttribute('src', 'imagens/crianca.png')
            } else if (idade < 21){
                // jovem
                img.setAttribute('src', 'imagens/jovem.jpg')
            } else if (idade < 50){
                // adulto
                img.setAttribute('src', 'imagens/adulto.jpg')
            } else {
                // idoso
                img.setAttribute('src', 'imagens/idoso.jpg')
            }
        } else if (fSex[1].checked) {
            genero = 'Mulher'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com idade ${idade} anos`
        res.appendChild(img)
    }
}
