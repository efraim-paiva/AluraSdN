function sortear() {
    var quantidade = parseInt(document.getElementById('quantidade').value);
    var de = parseInt(document.getElementById('de').value);
    var ate = parseInt(document.getElementById('ate').value);
    var limite = ate - de + 1;

    if (quantidade > limite) {
        var resposta = confirm('A quantidade de números a serem sorteados é maior que o intervalo de números possíveis. Clique em "OK" para reiniciar.');
        if (resposta) {
            reiniciar();
            return;
        }
    }

    var sorteados = [];
    var numero;


    for (var i = 0; i < quantidade; i++) {
        numero = numeroAleatorio(de, ate);

        while (sorteados.includes(numero)) {
            numero = numeroAleatorio(de, ate);
        }
        sorteados.push(numero);
    }

    var resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;

    alterarStatusBotao();
}

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    var botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }

    console.log(botao);
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
    window.location.reload();
}


