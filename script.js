function selecionarComida(selecionado){

    const selecionadoAntes = document.querySelector(".pratos .bordaVerde");

    if (selecionadoAntes !== null) {
        selecionadoAntes.classList.remove("bordaVerde");
    }
    
    selecionado.classList.add("bordaVerde");
    
    
}

function selecionarBebida(selecionado){

    const selecionadoAntes = document.querySelector(".bebidas .bordaVerde");

    if (selecionadoAntes !== null) {
        selecionadoAntes.classList.remove("bordaVerde");
    }
    
    selecionado.classList.add("bordaVerde");
}

function selecionarDoce(selecionado){

    const selecionadoAntes = document.querySelector(".doces .bordaVerde");

    if (selecionadoAntes !== null) {
        selecionadoAntes.classList.remove("bordaVerde");
    }
    
    selecionado.classList.add("bordaVerde");
}