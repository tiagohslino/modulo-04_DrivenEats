var i = 0;
let nomePrato = "";
let nomeBebida = "";
let nomeDoce = "";

let precoPrato = 0;
let precoBebida = 0;
let precoDoce = 0;

let soma = 0;

function selecionarComida(selecionado){
    nomePrato = selecionado.getElementsByTagName('h1')[0].innerHTML;
    precoPrato = selecionado.getElementsByTagName('h3')[0].innerHTML;
    
    let precoPratoReal = parseFloat(precoPrato);
  
    const botao = document.querySelector(".pedidoFinal");
    const selecionadoAntes = document.querySelector(".pratos .bordaVerde");

    if (selecionadoAntes !== null) {
        selecionadoAntes.classList.remove("bordaVerde");
        soma = soma - precoPratoReal;
        i--;
    }

    selecionado.classList.add("bordaVerde");
    console.log("Cliquei agora em", + precoPratoReal);
    soma = soma + precoPratoReal;
    console.log("Acumulado eh", + soma);
    
    i++;
    if (i > 2)
        botao.classList.add("botaoVerde");
    
    
}

function selecionarBebida(selecionado){

    nomeBebida = selecionado.getElementsByTagName('h1')[0].innerHTML;
    precoBebida = selecionado.getElementsByTagName('h3')[0].innerHTML;
    
    let precoBebidaReal = parseFloat(precoBebida);
    const botao = document.querySelector(".pedidoFinal");
    const selecionadoAntes = document.querySelector(".bebidas .bordaVerde");

    if (selecionadoAntes !== null) {
        selecionadoAntes.classList.remove("bordaVerde");
        soma = soma - precoBebidaReal;
        i--;
    }
    
    selecionado.classList.add("bordaVerde");
    console.log(precoBebidaReal);
    soma = soma + precoBebidaReal;
    console.log(soma);
    i++;
    if (i > 2)
        botao.classList.add("botaoVerde");


}

function selecionarDoce(selecionado){

    nomeDoce = selecionado.getElementsByTagName('h1')[0].innerHTML;
    precoDoce = selecionado.getElementsByTagName('h3')[0].innerHTML;
    
    let precoDoceReal = parseFloat(precoDoce);
    const botao = document.querySelector(".pedidoFinal");
    const selecionadoAntes = document.querySelector(".doces .bordaVerde");

    if (selecionadoAntes !== null) {
        selecionadoAntes.classList.remove("bordaVerde");
        soma = soma - precoDoceReal;
        i--;
    }
    
    selecionado.classList.add("bordaVerde");
    console.log(precoDoceReal);
    soma = soma + precoDoceReal;
    console.log(soma);

    i++;
    if (i > 2)
        botao.classList.add("botaoVerde");
    
}

