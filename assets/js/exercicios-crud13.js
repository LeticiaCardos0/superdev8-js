const botaoSalvar = document.getElementById("botao-salvar");
botaoSalvar.addEventListener("click", salvar);

const tbody = document.getElementById("lista-viagens");

let id = 1;

function salvar(){
    const campoDestino = document.getElementById("campo-destino");
    const campoDistancia = document.getElementById("campo-distancia");
    const campoPassageiros = document.getElementById("campo-passageiros");
    const campoValor = document.getElementById("campo-valor");

    const destino = campoDestino.value;
    const distancia = parseInt(campoDistancia.value);
    const passageiros = parseInt(campoPassageiros.value);
    const valor = parseFloat(campoValor.value);

    const total = passageiros * valor;

    let linha = `<tr>
                    <td>${id}</td>
                    <td>${destino}</td>
                    <td>${distancia} km</td>
                    <td>${passageiros}</td>
                    <td>R$ ${valor}</td>
                    <td>R$ ${total}</td>
                 </tr>`

    tbody.innerHTML += linha;
    id++;

    campoDestino.value = "";
    campoDistancia.value = "";
    campoPassageiros.value = "";
    campoValor.value = "";
}