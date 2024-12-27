var i = 0;
let nomePrato = "";
let preco1 = "";

function selecionarComida(selecionado){

    const botao = document.querySelector(".pedidoFinal");
    const selecionadoAntes = document.querySelector(".pratos .bordaVerde");

    if (selecionadoAntes !== null) {
        selecionadoAntes.classList.remove("bordaVerde");
        i--;
    }
    
    selecionado.classList.add("bordaVerde");
    i++;
    if (i > 2)
        botao.classList.add("botaoVerde");
    
    
}

function selecionarBebida(selecionado){

    const botao = document.querySelector(".pedidoFinal");
    const selecionadoAntes = document.querySelector(".bebidas .bordaVerde");

    if (selecionadoAntes !== null) {
        selecionadoAntes.classList.remove("bordaVerde");
        i--;
    }
    
    selecionado.classList.add("bordaVerde");
    i++;
    if (i > 2)
        botao.classList.add("botaoVerde");


}

function selecionarDoce(selecionado){

    const botao = document.querySelector(".pedidoFinal");
    const selecionadoAntes = document.querySelector(".doces .bordaVerde");

    if (selecionadoAntes !== null) {
        selecionadoAntes.classList.remove("bordaVerde");
        i--;
    }
    
    selecionado.classList.add("bordaVerde");
    i++;
    if (i > 2)
        botao.classList.add("botaoVerde");
    
}

function comprar (){

    nomePrato = "ok";

    if (i>2) {
        document.querySelector(".tela-confirmacao").classList.remove("escondido");
        document.querySelector(".tela-confirma-verde").classList.remove("escondido");
        document.querySelector(".pedidoFinal").classList.remove("botaoVerde");

        const pedido1 = '{nomePrato} : ${preco1}';

        document.querySelector(".confirma-bebida").innerHTML = ""
    }
    
}