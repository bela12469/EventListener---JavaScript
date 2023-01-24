// CRIANDO VARIÁVEIS PARA GUARDAR VALORES

let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");
const addProduto = document.getElementById("btn-adicionar-produto-01");
const removeProduto = document.getElementById("btn-subtrair-produto-01");
const quantidadeProduto = document.getElementById("quantidade-produto-01");
//const title = document.getElementsByTagName("h2");

let subtotalInfo = {
  valor: 11.66,
};

// EVENTOS A SEREM EXECUTADOS COM INTERAÇÃO DO USUÁRIO CRIANDO FUNÇÕES
addProduto.addEventListener("click", adicionarProduto)
removeProduto.addEventListener("click", subtrairProduto)

