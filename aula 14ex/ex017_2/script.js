function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''

        // Adição
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} + ${c} = ${n + c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }

        // Subtração
        c = 1
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} - ${c} = ${n - c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }

        // Multiplicação (mantido)
        c = 1
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }

        // Divisão
        c = 1
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} / ${c} = ${n / c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}
