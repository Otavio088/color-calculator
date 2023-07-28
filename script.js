//CALCULO
function inserir(num) {
  document.querySelector(".tela").textContent += num;
}

function voltar() {
let tela = document.querySelector(".tela").textContent;
document.querySelector(".tela").textContent = tela.substring(0, tela.length - 1);
}

function limpar() {
  document.querySelector(".tela").textContent = "";
}

function calculo() {
let tela = document.querySelector(".tela").textContent;
if (tela) {
  document.querySelector(".tela").textContent = eval(tela);
} else {
    document.querySelector(".tela").textContent = "Sem instruções!";
  }
}


//COR
const background = document.querySelector("body");
const calculadora = document.querySelector(".calculadora");
const telaCalculadora = document.querySelector("#trocaTela");
const botao = document.querySelectorAll("button");
const backgroundBotaoIgual = document.querySelector("#botaoIgual");
const btnCor = document.querySelector("#btnCor");
btnCor.addEventListener("click", trocaCor);

let teste = 0;

function trocaCor() {

let corCalculadora = calculadora.style.backgroundColor

if (corCalculadora != "var(--dark-color)") {
  background.style.background = 'linear-gradient(150deg, #636e72, #b2bec3, #636e72)';
  calculadora.style.backgroundColor = 'var(--dark-color)'
  telaCalculadora.style.backgroundColor = '#111'
  telaCalculadora.style.color = '#fff'
  for (let i = 0; i < botao.length - 1; i++) {
    botao[i].style.backgroundColor = '#000'
    botao[i].style.color = '#ececec'
  }
  backgroundBotaoIgual.style.backgroundColor ='#d63031'
  teste = 1;
} else {
  background.style.background  = 'linear-gradient(150deg,#bdc3c7, #ecf0f1, #bdc3c7)';
  calculadora.style.backgroundColor = '#000'
  corCalculadora = 'backgroundCalculadora.style.backgroundColor'
  telaCalculadora.style.backgroundColor = '#ececec'
  telaCalculadora.style.color = '#2d3436'
  for (let i = 0; i < botao.length - 1; i++) {
    botao[i].style.backgroundColor = '#2d3436'
    botao[i].style.color = '#ececec'
  }
  backgroundBotaoIgual.style.backgroundColor ='#0984e3'
  teste = 2;
  }
}

for (let i = 0; i < botao.length - 1; i++) {
  botao[i].addEventListener("mouseleave", () => {
    if (teste == 1) {
      botao[i].style.backgroundColor = "#000";
    } else if (teste == 0) {
        botao[i].style.backgroundColor = "var(--dark-color)";
    } else {
      botao[i].style.backgroundColor = "var(--dark-color)";
    }
  });
}

for (let i = 0; i < botao.length - 1; i++) {
botao[i].addEventListener("mouseenter", () => {
  botao[i].style.backgroundColor = "#576264";
});
}