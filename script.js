function selecionarComida(opcao){

    const selecionado = document.querySelector("." + opcao);
    const selecionadoAntes = document.querySelector(".bordaVerde");

    if (selecionadoAntes !== null) {
        selecionadoAntes.classList.remove("bordaVerde");
    }
    
    selecionado.classList.add("bordaVerde");
    
    
}