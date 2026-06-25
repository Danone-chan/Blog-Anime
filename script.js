function darLike(botao) {
    // Seleciona a tag onde fica o número dentro do botão clicado
    let elementoContador = botao.querySelector('.contador');
    let curtidas = parseInt(elementoContador.innerText);

    // Se o botão já foi clicado (tem a classe 'curtido'), diminui o número
    if (botao.classList.contains('curtido')) {
        curtidas--;
        botao.classList.remove('curtido');
    } else {
        // Se não foi clicado, aumenta o número e muda o visual do botão
        curtidas++;
        botao.classList.add('curtido');
    }

    // Mostra o novo número na tela
    elementoContador.innerText = curtidas;
}
