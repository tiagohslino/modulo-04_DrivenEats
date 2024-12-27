var i = 0;

function selecionarComida(selecionado){

    const botao = document.querySelector(".pedidoFinal");
    const selecionadoAntes = document.querySelector(".pratos .bordaVerde");

    if (selecionadoAntes !== null) {
        selecionadoAntes.classList.remove("bordaVerde");
        i--;
        alert(i);
    }
    
    selecionado.classList.add("bordaVerde");
    i++;
    alert(i);
    if (i > 2)
        botao.classList.add("botaoVerde");
    
    
}

function selecionarBebida(selecionado){

    const botao = document.querySelector(".pedidoFinal");
    const selecionadoAntes = document.querySelector(".bebidas .bordaVerde");

    if (selecionadoAntes !== null) {
        selecionadoAntes.classList.remove("bordaVerde");
        i--;
        alert(i);
    }
    
    selecionado.classList.add("bordaVerde");
    i++;
    alert(i);
    if (i > 2)
        botao.classList.add("botaoVerde");


}

function selecionarDoce(selecionado){

    const botao = document.querySelector(".pedidoFinal");
    const selecionadoAntes = document.querySelector(".doces .bordaVerde");

    if (selecionadoAntes !== null) {
        selecionadoAntes.classList.remove("bordaVerde");
        i--;
        alert(i);
    }
    
    selecionado.classList.add("bordaVerde");
    i++;
    alert(i);
    if (i > 2)
        botao.classList.add("botaoVerde");
    
}

