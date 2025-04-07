// Seleciona todos os botões e personagens na tela
const botoes = document.querySelectorAll('.botao');
const personagens = document.querySelectorAll('.personagem');

// Função que remove a classe 'selecionado' do botão atualmente ativo
function desmarcarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.botao.selecionado');
    if (botaoSelecionado) {
        botaoSelecionado.classList.remove('selecionado');
    }
}

// Função que adiciona a classe 'selecionado' ao botão clicado
function marcarBotaoSelecionado(botao) {
    botao.classList.add('selecionado');
}

// Função que remove a classe 'selecionado' do personagem atualmente ativo
function desmarcarPersonagemSelecionado() {
    const personagemSelecionado = document.querySelector('.personagem.selecionado');
    if (personagemSelecionado) {
        personagemSelecionado.classList.remove('selecionado');
    }
}

// Função que adiciona a classe 'selecionado' ao personagem correspondente ao botão clicado
function marcarPersonagemSelecionado(indice) {
    personagens[indice].classList.add('selecionado');
}

// Função principal que adiciona os eventos aos botões
function configurarEventosDosBotoes() {
    botoes.forEach((botao, indice) => {
        botao.addEventListener('click', () => {
            desmarcarBotaoSelecionado();
            marcarBotaoSelecionado(botao);

            desmarcarPersonagemSelecionado();
            marcarPersonagemSelecionado(indice);
        });
    });
}

// Inicializa o comportamento da página
configurarEventosDosBotoes();
