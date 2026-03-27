const botaoSalvar = document.getElementById("botao-salvar");
botaoSalvar.addEventListener("click", salvar);

const tbody = document.getElementById("lista-celulares");

let id = 1;

function salvar(){
    const campoMarca = document.getElementById("campo-marca");
    const campoModelo = document.getElementById("campo-modelo");
    const campoValor = document.getElementById("campo-valor");
    const campoQuantidade = document.getElementById("campo-quantidade");

    const marca = campoMarca.value;
    const modelo = campoModelo.value;
    const valor = parseFloat(campoValor.value);
    const quantidade = parseInt(campoQuantidade.value);

    const total = valor * quantidade;

    let linha = `<tr>
                    <td>${id}</td>
                    <td>${marca}</td>
                    <td>${modelo}</td>
                    <td>R$ ${valor}</td>
                    <td>${quantidade}</td>
                    <td>R$ ${total}</td>
                 </tr>`

    tbody.innerHTML += linha;
    id++;

    campoMarca.value = "";
    campoModelo.value = "";
    campoValor.value = "";
    campoQuantidade.value = "";
}