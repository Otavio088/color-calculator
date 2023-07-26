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
const trocaTela = document.querySelector("#trocaTela");
const botao = document.querySelectorAll("button");
const botaoIgual = document.querySelector("#botaoIgual");

const btnCor = document.querySelector("#btnCor");

btnCor.addEventListener("click", trocaCor);


function trocaCor() {
let calculadoraCorAtual = calculadora.style.backgroundColor
calculadoraCorAtual.style.backgroundColor = '#fff'
console.log(calculadoraCorAtual.style.backgroundColor)

if (calculadoraCorAtual != "#2d3436") {
  body.style.background = 'linear-gradient(150deg, #636e72, #b2bec3, #636e72)';
  calculadora.style.backgroundColor = '#2d3436'
  trocaTela.style.backgroundColor = '#111'
  trocaTela.style.color = '#fff'

  for(let i = 0; i<botao.length; i++) {
    botao[i].style.backgroundColor = '#000'
  }

  botaoIgual.style.backgroundColor ='#d63031'
  return;
} else if (calculadoraCorAtual == "#2d3436") {
  body.style.background  = 'linear-gradient(150deg,#bdc3c7, #ecf0f1, #bdc3c7)';
  calculadora.style.backgroundColor = '#000'
  trocaTela.style.backgroundColor = '#ececec'
  trocaTela.style.color = '#2d3436'
  
  for(let i = 0; i<botao.length; i++) {
    botao[i].style.backgroundColor = '#2d3436'
  }
  botaoIgual.style.backgroundColor ='#0984e3'
  }
}