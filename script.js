function gerarTabuada() {
    var num = document.getElementById('txtn')
    var escreva = document.getElementById('res')
    
    if(num.value.length == 0 ) {
        alert('Por favor, digite um número')
    } else {
        var n = Number(num.value)

        escreva.innerHTML = ''

        for(var c = 1; c <= 10; c++) {
            escreva.innerHTML += `${n} x ${c} = ${n*c} <br>`
        }
    }
    
    
    /*var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')

    if(num.value.length == 0 ) {
        alert('Por favor, digite um número')
    } else {
        var n = Number(num.value)

        tab.innerHTML= ''

        for(var c = 1; c <= 10; c++) {
            var item = document.createElement('option')
            item.text= `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }*/
}


























/*
function gerarTabuada(){
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')

    if(num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        var n = Number(num.value)
        tab.innerHTML= ''
        for(var c = 1; c <= 10; c++){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}
*/