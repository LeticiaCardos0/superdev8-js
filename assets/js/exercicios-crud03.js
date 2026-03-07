const botaoSalvarCadastro = document.getElementById("salvar");
    botaoSalvarCadastro.addEventListener("click", salvarCadastro);
const tbody = document.getElementById("resumo-imoveis");

let id = 1;


function salvarCadastro() {
    const campoLocalidade = document.getElementById("campo-localidade");
    const campoProprietario = document.getElementById("campo-proprietario");
    const campoValor = document.getElementById("campo-valor");
    const campoQuantidadeMetros = document.getElementById("campo-quantidade-metros");
    const campoConstrucao = document.getElementById("campo-construcao");

    const localidade = campoLocalidade.value.trim();
    const proprietario = campoProprietario.value.trim();
    const valorImovel = parseFloat(campoValor.value);
    const quantidadeMetros = parseFloat(campoQuantidadeMetros.value);
    const construcao = campoConstrucao.value;

    const valorMetro = valorImovel / quantidadeMetros;

    criarLinha(localidade, proprietario, valorImovel, quantidadeMetros, construcao, valorMetro);

}

function criarLinha(localidade, proprietario, valorImovel, quantidadeMetros, construcao, valorMetro) {
    const linha = `<tr>
                <td>${id}</td>
                <td>${localidade}</td>
                <td>${proprietario}</td>
                <td>R$ ${valorImovel.toFixed(2)}</td>
                <td>${quantidadeMetros} m²</td>
                <td>R$ ${valorMetro.toFixed(2)}</td>
                <td>${construcao}</td>
            </tr>`;
    tbody.innerHTML += linha;
    id += 1;
}