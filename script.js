//criando variáveis para guardar valores 
let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");
const addProduto = document.getElementById ("btn-adicionar-produto-01")
const removeProduto = document.getElementById("btn-subtrair-produto-01")
const qntProduto =- document.getElementById("quantidade-produto-01") 
//const title = document.getElementsByTagName("h2")


let subtotalInfo = {
  valor: 11.66,
};

// eventos a serem executados com interação do usuário chamando as funções 
addProduto.addEventListener('click', adicionarProduto)
removeProduto.addEventListener('click', subtrairProduto)


// funções para atualizar itens do carrinho 

function  updateSubTotalCalculate (qntProduto) {
  valorSubtotal.innerText = (subtotalInfo.valor * qntProduto).toFixed(2);
}

function updateSubTotalText (){
  quantidadeSubtotal.innerText = qntProduto.value == 1? `$(qntProduto.value) item`: `$(qntProduto.value) itens`;
  updateSubTotalCalculate (qntProduto.valueOf)
}

function adicionarProduto() {
  if (qntProduto.valueOf < 10) {
    qntProduto.valueOf = Number (qntProduto.valueOf) + 1     
  } 
  updateSubTotalText ()
}
// essa linha de código para sinalizar quantdade maxima de produtos no carrinho 
  //  else {
  //  title[1].innerText = 'Máximo de 10 itens'
  //}


function subtrairProduto() {
  if (qntProduto.valueOf > 1) {
    qntProduto.valueOf = Number (qntProduto.valueOf) - 1     
  } 
  updateSubTotalText ()
}


