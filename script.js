function selecionarComida(opcao){

    const secao = document.querySelector(".pratos");
    const selecionado = document.querySelector("." + opcao);
    const selecionadoAntes = document.querySelector(".bordaVerde");

    if (selecionadoAntes !== null) {
        selecionadoAntes.classList.remove("bordaVerde");
    }
    
    selecionado.classList.add("bordaVerde");
    
    
}

function selecionarBebida(opcao){

    const selecionado = document.querySelector("." + opcao);
    const selecionadoAntes = document.querySelector(".bordaVerde");

    if (selecionadoAntes !== null) {
        selecionadoAntes.classList.remove("bordaVerde");
    }
    
    selecionado.classList.add("bordaVerde");
}