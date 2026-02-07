const botaoLimparCompos = document.getElementById("limparCampos")
botaoLimparCompos.addEventListener("click", limparCampos);

const botaoProcessar = document.getElementById("processarPedido")
botaoProcessar.addEventListener("click", processarPedido);

const botaoSoma = document.getElementById("soma")
botaoSoma.addEventListener("click", somar)

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

function somar(){
    
    let campoNumero01 = document.getElementById("numero01");
    console.log(campoNumero01);

    let campoNumero02 = document.getElementById("numero02");
    console.log(campoNumero02);

    let numero01 = parseInt(campoNumero01.value)
    let numero02 = parseInt(campoNumero02.value)

    let soma = numero01 + numero02;

    alert("Soma: " + soma);

}
const botaocalcularMedia = document.getElementById("calcular-media");
botaocalcularMedia.addEventListener("click", calculadoraMedia);

function calculadoraMedia(){
    const campoNome = document.getElementById("nome");
    const campoNota1 = document.getElementById("nota1");
    const campoNota2 = document.getElementById("nota2");
    const campoNota3 = document.getElementById("nota3");

    
    let nome = campoNome.value;
    let nota1 = parseFloat(campoNota1.value);
    let nota2 = parseFloat(campoNota2.value);
    let nota3 = parseFloat(campoNota3.value);
    
    let media = (nota1 + nota2 + nota3) / 3;

    let status = " ";

    if (media < 7){
        status = Reprovado;
    } else {
        status = Aprovado;
    }

    const texto = `Aluno: ${nome}<br>
    Nota 1: ${nota1.toFixed(2).replace(".",",")}<br>
    Nota 1: ${nota2.toFixed(2).replace(".",",")}<br>
    Nota 1: ${nota3.toFixed(2).replace(".",",")}<br>
    Media: ${media.toFixed(2).replace(".",",")}<br>
    Status: ${status}`

    const divResultadoMedia = document.getElementById("resultado-media");
    divResultadoMedia.innerHTML = texto;



    alert(`A média de ${nome} é: ${media}`);

}

