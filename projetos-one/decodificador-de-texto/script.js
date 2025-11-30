
const botaoCriptografar = document.querySelector("#botao-criptografar");
const textEncriptar = document.querySelector("#text-area-pesquisa");
const textoAviso = document.querySelector("#textAviso");
const descriptografar = document.querySelector("#text-area-descripto");
const conteudo = document.querySelector("#container-pesquisa-resultado");
const botaoCopiar = document.querySelector("#botao-copiar");
const botaoDescriptografar = document.querySelector("#botao-descriptografar");


// BOTÃO DE CRIPTOGRAFAR 
botaoCriptografar.addEventListener("click", (e) => {
  e.preventDefault();
  let text = textEncriptar.value;
  let txt = text
    .normalize("NFD")
    .replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

  if (text == "") {
    textoAviso.style.background = "#F5004F";
    textoAviso.style.color = "#FFF";
    textoAviso.style.fontWeight = "700";
    textoAviso.textContent = "Este campo não pode estar vazio";

    setTimeout(() => {
      textoAviso.removeAttribute("style");
    }, 1500);
  } else if (text !== txt) {
    textoAviso.style.background = "#F5004F";
    textoAviso.style.color = "#FFF";
    textoAviso.style.fontWeight = "700";
    textoAviso.textContent = " Apenas letras minúsculas e sem acento";

    setTimeout(() => {
      textoAviso.removeAttribute("style");
    }, 1500);
  } else if (text !== text.toLowerCase()) {
    textoAviso.style.background = "#F5004F";
    textoAviso.style.color = "#FFF";
    textoAviso.style.fontWeight = "700";
    textoAviso.textContent = "Apenas letras minúsculas";

    setTimeout(() => {
      textoAviso.removeAttribute("style");
    }, 1500);
  } else {
    text = text.replace(/e/gm, "enter");
    text = text.replace(/i/gm, "imes");
    text = text.replace(/a/gm, "ai");
    text = text.replace(/o/gm, "ober");
    text = text.replace(/u/gm, "ufat");
  }

  criarElementoResultado(text);
});

// BOTÃO DE DESCRIPTOGRAFAR

botaoDescriptografar.addEventListener("click", (e) => {
  e.preventDefault();
  let text = textEncriptar.value;
  let txt = text
    .normalize("NFD")
    .replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

  if (text == "") {
    textoAviso.style.background = "#F5004F";
    textoAviso.style.color = "#FFF";
    textoAviso.style.fontWeight = "700";
    textoAviso.textContent = "Este campo não pode estar vazio";

    setTimeout(() => {
      textoAviso.removeAttribute("style");
    }, 1500);
  } else if (text !== txt) {
    textoAviso.style.background = "#F5004F";
    textoAviso.style.color = "#FFF";
    textoAviso.style.fontWeight = "700";
    textoAviso.textContent = " Apenas letras minúsculas e sem acento";

    setTimeout(() => {
      textoAviso.removeAttribute("style");
    }, 1500);
  } else if (text !== text.toLowerCase()) {
    textoAviso.style.background = "#F5004F";
    textoAviso.style.color = "#FFF";
    textoAviso.style.fontWeight = "700";
    textoAviso.textContent = "Apenas letras minúsculas";

    setTimeout(() => {
      textoAviso.removeAttribute("style");
    }, 1500);
  } else {
    text = text.replace(/enter/gm, "e");
    text = text.replace(/imes/gm, "i");
    text = text.replace(/ai/gm, "a");
    text = text.replace(/ober/gm, "o");
    text = text.replace(/ufat/gm, "u");
  }

  criarElementoResultado(text);
});

const criarElementoResultado = (textoResultado) => {
  const textAreaResultado = document.createElement("textarea");
  textAreaResultado.innerHTML = textoResultado;
  textAreaResultado.classList.add("textarea__resultado");
  textAreaResultado.id = "text-area-descriptografar";

  const botaoCopiar = document.createElement("button");
  botaoCopiar.innerHTML = "Copiar";
  botaoCopiar.classList.add("botao__copiar");

  botaoCopiar.addEventListener("click", () => {
    navigator.clipboard.writeText(textoResultado);
  });

  conteudo.innerHTML = ``;
  conteudo.appendChild(textAreaResultado);
  conteudo.appendChild(botaoCopiar);
  conteudo.classList.add("resultado");
};

