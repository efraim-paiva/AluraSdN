// Função para realizar o sorteio de números aleatórios
function sortear() {
    // Obter os valores digitados pelo usuário
    var quantidade = parseInt(document.getElementById('quantidade').value);
    var de = parseInt(document.getElementById('de').value);
    var ate = parseInt(document.getElementById('ate').value);
    var limite = ate - de + 1;

    // Verificar se a quantidade de números a serem sorteados é maior que o intervalo de números possíveis
    if (quantidade > limite) {
        // Se for maior, exibir um aviso e reiniciar o sorteio se o usuário concordar
        var resposta = confirm('A quantidade de números a serem sorteados é maior que o intervalo de números possíveis. Clique em "OK" para reiniciar.');
        if (resposta) {
            reiniciar();
            return;
        }
    }

    // Inicializar um array para armazenar os números sorteados
    var sorteados = [];
    var numero;

    // Loop para sortear a quantidade de números especificada
    for (var i = 0; i < quantidade; i++) {
        // Gerar um número aleatório dentro do intervalo especificado
        numero = numeroAleatorio(de, ate);

        // Verificar se o número já foi sorteado antes
        while (sorteados.includes(numero)) {
            // Se já foi sorteado, gerar um novo número
            numero = numeroAleatorio(de, ate);
        }
        // Adicionar o número sorteado ao array de números sorteados
        sorteados.push(numero);
    }

    // Exibir os números sorteados na página
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;

    // Alterar o status do botão de reiniciar
    alterarStatusBotao();
}

// Função para gerar um número aleatório dentro de um intervalo
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para alterar o status do botão de reiniciar
function alterarStatusBotao() {
    var botao = document.getElementById('btn-reiniciar');
    // Alternar entre as classes CSS para alterar o estilo do botão
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }

    // Exibir o botão no console para fins de depuração
    console.log(botao);
}

// Função para reiniciar o sorteio
function reiniciar() {
    // Limpar os campos de entrada e o resultado anterior
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    // Alterar o status do botão de reiniciar
    alterarStatusBotao();
    // Recarregar a página para reiniciar o sorteio
    window.location.reload();
}