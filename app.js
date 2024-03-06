function sortear() {
    var quantidade = parseInt(document.getElementById('quantidade').value);
    var de = parseInt(document.getElementById('de').value);
    var ate = parseInt(document.getElementById('ate').value);


    var sorteados = [];
    var numero;
    for (var i = 0; i < quantidade; i++) {
        numero = numeroAleatorio(de, ate);
        sorteados.push(numero);
    }

    alert(sorteados);

}

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

}