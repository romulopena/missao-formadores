const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como você acha que a tecnologia vai influenciar a decisão de faltas no futuro?",
        alternativas: [
            {
                texto: "A decisão de faltas será baseada em tecnologia de reconhecimento facial",
                afirmacao: "O uso de reconhecimento facial pode reduzir erros humanos."
            },
            {
                texto: "A decisão de faltas será baseada em sensores em tempo real.",
                afirmacao: "Sensores em tempo real podem garantir decisões mais rápidas e precisas."
            }

        ]
    },
    {
        enunciado: "Qual será o impacto das mudanças nas regras de substituições no futuro do futebol?",
        alternativas: [
            {
                texto: "Permissão para substituições ilimitadas durante o jogo.",
                afirmacao: "Substituições ilimitadas podem manter os jogadores mais frescos e o jogo mais dinâmico."
            },
            {
                texto: "Restrição de substituições a um número fixo de vezes por jogo.",
                afirmacao: "Limitar substituições pode aumentar a estratégia e manter o equilíbrio."
            }

        ]
    },
    {
        enunciado: "Como a implementação de uma nova regra sobre o tempo de posse de bola pode afetar o jogo?",
        alternativas: [
            {
                texto: "Introdução de um limite de tempo para manter a posse de bola.",
                afirmacao: "Um limite de tempo pode acelerar o jogo e aumentar o ritmo."
            },
            {
                texto: "Sem limite de tempo para a posse de bola.",
                afirmacao: "Sem limite de tempo, o jogo pode permitir mais controle e estratégias elaboradas."
            }

        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}
function respostaSelecionada(opcaoSelecionada) {
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Resumindo...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}
mostraPergunta();