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


const telaTotal = document.querySelector("body");
const corCalculadora = document.querySelector(".calculadora");
const corBotao = document.querySelector("button");
const corBotaoIgual = document.querySelector("span");

const btnCor = document.querySelector("#btnCor");

btnCor.addEventListener("click", trocaCor);

function trocaCor() {
    telaTotal.classList.add("cor");
    corCalculadora.classList.add("corCalcula");
    corBotao.classList.add("corButton");
    corBotaoIgual.classList.add("corIgual");
}