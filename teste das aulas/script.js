function gerarTabuadas() {
    let num = document.getElementById('txtn');

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!');
    } else {
        let n = Number(num.value);
        let tabuadasContainer = document.getElementById('tabuadas-container');
        tabuadasContainer.innerHTML = ''; // Limpa tabuadas anteriores

        // Gera as tabuadas para cada operação
        gerarTabuada(tabuadasContainer, n, '+', 'Adição');
        gerarTabuada(tabuadasContainer, n, '-', 'Subtração');
        gerarTabuada(tabuadasContainer, n, '*', 'Multiplicação');
        gerarTabuada(tabuadasContainer, n, '/', 'Divisão');
    }
}

function gerarTabuada(container, numero, operacao, nomeOperacao) {
    let divTabuada = document.createElement('div');
    divTabuada.classList.add('tab-box');

    let titulo = document.createElement('h2');
    titulo.textContent = `${nomeOperacao}`;

    let listaTabuada = document.createElement('ul');

    for (let c = 1; c <= 10; c++) {
        let item = document.createElement('li');
        item.textContent = `${numero} ${operacao} ${c} = ${calcularResultado(numero, c, operacao)}`;
        listaTabuada.appendChild(item);
    }

    divTabuada.appendChild(titulo);
    divTabuada.appendChild(listaTabuada);
    container.appendChild(divTabuada);
}

function calcularResultado(numero, c, operacao) {
    switch (operacao) {
        case '+':
            return numero + c;
        case '-':
            return numero - c;
        case '*':
            return numero * c;
        case '/':
            return numero / c;
        default:
            return '';
    }
}
