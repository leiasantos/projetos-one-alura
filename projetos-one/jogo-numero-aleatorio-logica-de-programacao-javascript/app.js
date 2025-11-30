//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo da Sorte';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 a 10';

let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = numeroAleatorio();
let tentativas = 1;

function exibirTexto(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}

function mensagemInicial() {
  exibirTexto("h1", "Jogo da Sorte");
  exibirTexto("p", "Escolha um número entre 1 a 10");
}

mensagemInicial();

function verificarChute() {
  let chute = document.querySelector("input").value;

  if (chute == numeroSecreto) {
    exibirTexto("h1", "Acertou");
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;

    exibirTexto("p", mensagemTentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute > numeroSecreto) {
      exibirTexto("p", "O número secreto é menor");
    } else {
      exibirTexto("p", "O número secreto é maior");
    }
    tentativas++;
    limparCampo();
  }
}

// gerando número aleatorio

function numeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeElementos = listaNumerosSorteados.length;
  if (quantidadeElementos == numeroLimite) {
    listaNumerosSorteados = [];
  }

  if (listaNumerosSorteados.includes(numeroEscolhido)) {
    return numeroAleatorio();
  } else {
    listaNumerosSorteados.push(numeroEscolhido);
    console.log(listaNumerosSorteados);
    return numeroEscolhido;
  }
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function reiniciarJogo() {
  numeroSecreto = numeroAleatorio();
  limparCampo();
  tentativas = 1;
  mensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}
