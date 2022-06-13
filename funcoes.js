// Variáveis
// Dados de entrada
// Dados de saída
const elementoResposta = document.querySelector("#resposta") //querySelector, significa para pesquisar dentro do documento pelo id declarado, e colocar dentro desta variável.
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector("#buttonPerguntar")

const respostas = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",
  ]

//Clicar em Fazer Pergunta

function fazerPergunta() {

    if (inputPergunta.value == "") {
        alert("Digite sua Pergunta")
        return
    }

    buttonPerguntar.setAttribute("disabled", true)

const pergunta = "<div>" + inputPergunta.value + "</div>"

// Gerando o Número Aleatório

const totalRespostas = respostas.length //length lendo a quantidade de posições do arrey.
const numeroAleatorio = Math.floor(Math.random() * totalRespostas) // Math.floor arredonda o número para baixo,Math.random gera um número eleatório de até 0.99 e por fim multiplica pela qt de posições do arrey.
    
    elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

    //sumir a resposta depois de 3s

    elementoResposta.style.opacity = 1;
    setTimeout(function() {
        elementoResposta.style.opacity = 0;
        buttonPerguntar.removeAttribute("disabled")
    }, 3000)
}