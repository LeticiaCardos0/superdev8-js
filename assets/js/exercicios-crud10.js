const botaoSalvar = document.getElementById("botao-salvar");
    botaoSalvar.addEventListener("click",salvar);

const tbody = document.getElementById("lista-pedidos");

let id = 1;

function salvar(){
    const campoNome = document.getElementById("campo-nome");
    const campoMesa = document.getElementById("campo-mesa");
    const campoPedido = document.getElementById("campo-pedido");
    const campoQuantidade = document.getElementById("campo-quantidade");
    const campoValor = document.getElementById("campo-valor");
  
    const nome = campoNome.value;
    const mesa = campoMesa.value;
    const pedido = campoPedido.value;
    const quantidade = parseFloat(campoQuantidade.value);
    const valor = parseFloat(campoValor.value).toFixed(2)

    const valorTotal = (valor * quantidade).toFixed(2);

    const linha = `<tr>
                       <td>${id}</td>
                       <td>${nome}</td>
                       <td>${mesa}</td>
                       <td>${pedido}</td>
                       <td>${quantidade}</td>
                       <td>R$ ${valor}</td>
                       <td>R$ ${valorTotal}</td>
                   </tr>`;
    id++
    tbody.innerHTML += linha;


    campoMesa.value = "";
    campoNome.value = "";
    campoPedido.value = "";
    campoQuantidade.value = "";
    campoValor.value = "";
}