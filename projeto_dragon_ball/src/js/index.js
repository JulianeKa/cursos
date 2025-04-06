const botoes = document.querySelectorAll('.botao');
const personagens = document.querySelectorAll('.personagem');

botoes.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        const btnSelecionado = document.querySelector('.botao.selecionado');
        const personagemSelecionado = document.querySelector('.personagem.selecionado');
        
        btnSelecionado.classList.remove('selecionado');
        botao.classList.add('selecionado');

        personagemSelecionado.classList.remove('selecionado');
        personagens[indice].classList.add('selecionado');
    });
})



