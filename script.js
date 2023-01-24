// CRIANDO VARIÁVEIS PARA GUARDAR VALORES

let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");
const addProduto = document.getElementById("btn-adicionar-produto-01");
const removeProduto = document.getElementById("btn-subtrair-produto-01");
const quantidadeProduto = document.getElementById("quantidade-produto-01");
const title = document.getElementsByTagName("h2");

let subtotalInfo = {
  valor: 11.66,
};



// EVENTOS A SEREM EXECUTADOS COM INTERAÇÃO DO USUÁRIO CRIANDO FUNÇÕES
addProduto.addEventListener("click", adicionarProduto)
removeProduto.addEventListener("click", subtrairProduto)



//CRIANDO FUNÇÕES PARA ATUALIZAR ITENS DO CARRINHO

function updateSubtotalValue (quantidadeProduto){
  valorSubtotal.innerText = (subtotalInfo.valor * quantidadeProduto).toFixed(2);
}

function updateSubtotalText(){
  quantidadeSubtotal.innerText = quantidadeProduto.value ==1 ? `${quantidadeProduto.value}item` : `${quantidadeProduto.value}itens`;
  updateSubtotalValue (quantidadeProduto.value)
}


function adicionarProduto(){
  if (quantidadeProduto.value < 10) {
    quantidadeProduto.value = Number (quantidadeProduto.value) + 1 
  //} else {
 //  title[1].innerText = "Máximo 10 produtos no carrinho"
  }
  updateSubtotalText()
}


function subtrairProduto(){
  if (quantidadeProduto.value > 1){
    quantidadeProduto.value = Number (quantidadeProduto.value) - 1
  }
  updateSubtotalText()
 }