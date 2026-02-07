const botaoLimparCompos = document.getElementById("limparCampos")
botaoLimparCompos.addEventListener("click", limparCampos);

const botaoProcessar = document.getElementById("processarPedido")
botaoProcessar.addEventListener("click", processarPedido);

function limparCampos(){
    let campoPlacaMae = document.getElementById("placa-mae")
    console.log(campoPlacaMae);

    let campoPlacaVideo = document.getElementById("placa-video")
    console.log(campoPlacaVideo);

    campoPlacaMae.value = "";
    campoPlacaVideo.value = "";

}

function processarPedido(){
    let campoPlacaMae = document.getElementById("placa-mae");
    let campoPlacaVideo = document.getElementById("placa-video");

    let placaMae = campoPlacaMae.value;
    let placaVideo = campoPlacaVideo.value;

    alert (placaMae + " " + placaVideo)
}
