function contar() {
    var inicio = Number(document.getElementById('inicio').value)
    var final = Number(document.getElementById('final').value)
    var passo = Number(document.getElementById('passo').value)
    var resultado = document.createElement("p")
    var teste = document.getElementById('div1')
    teste.appendChild(resultado)
    for(i=inicio; i<=final; i+=passo) {
        resultado.innerHTML += i
    }
}