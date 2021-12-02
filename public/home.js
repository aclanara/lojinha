var modal = document.getElementById("modalTomato")
var modalBg = document.getElementById("modal-background")

modal.classList.add("hidden")
modalBg.classList.add("hidden")

function abrirModal(){
    modal.classList.remove("hidden")
    modalBg.classList.remove("hidden")
}

function fecharModal(){
    modal.classList.add("hidden")
    modalBg.classList.add("hidden")
}