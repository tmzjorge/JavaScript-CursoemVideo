function calcular() {
    var num = Number(document.getElementById('numero').value)
    var res = document.getElementById('res')
    res.innerHTML = ''
    res.style.textAlign = 'center'
    for(i=0; i<10; i++){
        res.innerHTML += `${num} X ${i} = ${num*i} <br>`
    }
}