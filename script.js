var i = 0;

let nomePrato = "";
let nomeBebida = "";
let nomeDoce = "";

let precoPrato = 0;
let precoBebida = 0;
let precoDoce = 0;

let precoPratoReal = 0;
let precoBebidaReal = 0;
let precoDoceReal = 0;

let soma = 0;

function selecionarComida(selecionado) {
    nomePrato = selecionado.getElementsByTagName('h1')[0].innerHTML;
    precoPrato = selecionado.getElementsByTagName('h3')[0].innerHTML;

    precoPratoReal = parseFloat(precoPrato);

    const botao = document.querySelector(".pedidoFinal");


    const selecionadoAntes = document.querySelector(".pratos .bordaVerde");


    if (selecionadoAntes !== null) {
        precoPratoAntes = selecionadoAntes.getElementsByTagName('h3')[0].innerHTML;
        precoPratoRealAntes = parseFloat(precoPratoAntes);
        selecionadoAntes.classList.remove("bordaVerde");
        soma = soma - precoPratoRealAntes;
        i--;
    }

    selecionado.classList.add("bordaVerde");
    // console.log(precoPratoReal);
    soma = soma + precoPratoReal;
    console.log(soma);

    i++;
    if (i > 2)
        botao.classList.add("botaoVerde");


}

function selecionarBebida(selecionado) {

    nomeBebida = selecionado.getElementsByTagName('h1')[0].innerHTML;
    precoBebida = selecionado.getElementsByTagName('h3')[0].innerHTML;

    precoBebidaReal = parseFloat(precoBebida);
    const botao = document.querySelector(".pedidoFinal");
    const selecionadoAntes = document.querySelector(".bebidas .bordaVerde");

    if (selecionadoAntes !== null) {
        precoBebidaAntes = selecionadoAntes.getElementsByTagName('h3')[0].innerHTML;
        precoBebidaRealAntes = parseFloat(precoBebidaAntes);
        selecionadoAntes.classList.remove("bordaVerde");
        soma = soma - precoBebidaRealAntes;
        i--;
    }

    selecionado.classList.add("bordaVerde");
    // console.log(precoBebidaReal);
    soma = soma + precoBebidaReal;
    console.log(soma);
    i++;
    if (i > 2)
        botao.classList.add("botaoVerde");


}

function selecionarDoce(selecionado) {

    nomeDoce = selecionado.getElementsByTagName('h1')[0].innerHTML;
    precoDoce = selecionado.getElementsByTagName('h3')[0].innerHTML;

    precoDoceReal = parseFloat(precoDoce);
    const botao = document.querySelector(".pedidoFinal");
    const selecionadoAntes = document.querySelector(".doces .bordaVerde");

    if (selecionadoAntes !== null) {
        precoDoceAntes = selecionadoAntes.getElementsByTagName('h3')[0].innerHTML;
        precoDoceRealAntes = parseFloat(precoDoceAntes);
        selecionadoAntes.classList.remove("bordaVerde");
        soma = soma - precoDoceRealAntes;
        i--;
    }

    selecionado.classList.add("bordaVerde");
    // console.log(precoDoceReal);
    soma = soma + precoDoceReal;
    console.log(soma);

    i++;
    if (i > 2)
        botao.classList.add("botaoVerde");

}

function comprar(){

    const tela = document.querySelector('.tela-confirmacao');
    const telaVerde = document.querySelector('.tela-confirma-verde');

    const pratoConfirmado = document.querySelector('.confirma-comida');
    const bebidaConfirmada = document.querySelector('.confirma-bebida');
    const doceConfirmado = document.querySelector('.confirma-doce');
    const totalConfirmado = document.querySelector('.confirma-total');

    if (i > 2) {
        
        tela.classList.remove("escondido");
        telaVerde.classList.remove("escondido");
       
        pratoConfirmado.innerHTML = `${nomePrato}: R$${precoPratoReal.toFixed(2)}`;
        bebidaConfirmada.innerHTML = `${nomeBebida}: R$${precoBebidaReal.toFixed(2)}`;
        doceConfirmado.innerHTML = `${nomeDoce}: R$${precoDoceReal.toFixed(2)}`;
        totalConfirmado.innerHTML = `TOTAL: R$${soma.toFixed(2)}`;

    }
}

function cancelar(){
   
    const tela = document.querySelector('.tela-confirmacao');
    const telaVerde = document.querySelector('.tela-confirma-verde');

    tela.classList.add("escondido");
    telaVerde.classList.add("escondido");
}

function confirmaPedido(){

    let variaveisNoTexto = encodeURIComponent(`Olá, gostaria de fazer o pedido:\n- Prato: ${nomePrato}\n- Bebida: ${nomeBebida}\n- Sobremesa: ${nomeDoce}\nTotal: ${soma.toFixed(2)}`);
    let url = "https://wa.me//5521989896484?text=" + variaveisNoTexto;

    window.open(url, "_blank")
    
}
