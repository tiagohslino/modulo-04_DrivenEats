function selecionarComida(opcao){

    const selecionado = document.querySelector("." + opcao);
    const selecionadoAntes = document.querySelector(".pratos .bordaVerde");

    if (selecionadoAntes !== null) {
        selecionadoAntes.classList.remove("bordaVerde");
    }
    
    selecionado.classList.add("bordaVerde");
    
    
}

function selecionarBebida(opcao){

    const selecionado = document.querySelector("." + opcao);
    const selecionadoAntes = document.querySelector(".bebidas .bordaVerde");

    if (selecionadoAntes !== null) {
        selecionadoAntes.classList.remove("bordaVerde");
    }
    
    selecionado.classList.add("bordaVerde");
}

function selecionarDoce(opcao){

    const selecionado = document.querySelector("." + opcao);
    const selecionadoAntes = document.querySelector(".doces .bordaVerde");

    if (selecionadoAntes !== null) {
        selecionadoAntes.classList.remove("bordaVerde");
    }
    
    selecionado.classList.add("bordaVerde");
}