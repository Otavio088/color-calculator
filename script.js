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


const body = document.querySelector("body");
const calculadora = document.querySelector(".calculadora");
const botao = document.querySelector("button");
const botaoIgual = document.querySelector("#botaoIgual");

const btnCor = document.querySelector("#btnCor");

btnCor.addEventListener("click", trocaCor);

function trocaCor() {
let calculadoraCorAtual = calculadora.style.backgroundColor

if (calculadoraCorAtual != "blue") {
  calculadora.style.backgroundColor = 'blue'
  return;
}

calculadora.style.backgroundColor = 'black'  
}