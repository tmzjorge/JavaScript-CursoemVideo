var lista = []

function adicionar(num){
    let n = num.value
    let numero = document.getElementById('numero')

    if(n<1 || n>100){
        alert('Dado inválido')
    } else if(numero.value.length === 0){
        alert('Insira um número')
    } else if (lista.indexOf(n) != -1) {
        alert('Número já inserido!')
    } else {
        lista.push(n)
        let add = document.getElementById('lista')
        add.innerHTML += n + '<br>'
    }
    numero.value = ''
    numero.focus()
}

function finalizar() {
    lista = lista.sort(function(a,b){return a-b})
    let soma = 0
    let media
    for(i in lista){
        soma += Number(lista[i])
    }
    if(lista.length == 1){
        media = lista[0]
    } else media = soma/(lista.length)
    let div = document.getElementById('div2')
    let res = document.createElement('p')
    div.innerHTML = ''
    res.innerHTML = `Ao todo temos ${lista.length} elementos<br>
    O maior valor informado foi ${lista[lista.length -1]}<br>
    O menor valor informado foi ${lista[0]}<br>
    Somando todos os valores temos ${soma}<br>
    A média dos valores digitados é ${media}`
    div.appendChild(res)
}
