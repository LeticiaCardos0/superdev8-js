let id = 1;
const botaoSalvar = document.getElementById("botao-salvar");
    botaoSalvar.addEventListener("click",salvar);
const tbody = document.getElementById("veiculos");

function salvar(){
    const campoModelo = document.getElementById("campo-modelo");
    const campoMarca = document.getElementById("campo-marca");
    const campoAno = document.getElementById("campo-ano");
    const campoValor = document.getElementById("campo-valor");
    const campoPortas = document.getElementById("campo-quantidade-portas");

    let modelo = campoModelo.value;
    let marca = campoMarca.value;
    let ano = campoAno.value;
    let valor = parseFloat(campoValor.value).toFixed(2);
    let portas = campoPortas.value;
    let idadeVeiculo = 2026 - ano;

    const linha = `<tr>
        <td>${id}</td>
        <td>${modelo}</td>
        <td>${marca}</td>
        <td>${ano}</td>
        <td>R$ ${valor}</td>
        <td>${portas}</td>
        <td>${idadeVeiculo}</td>
    </tr>`;

    tbody.innerHTML += linha;
    id++;
     
    campoModelo.value = "";
    campoMarca.value = "";
    campoAno.value = "";
    campoValor.value = "";
    campoPortas.value = "";
   
}