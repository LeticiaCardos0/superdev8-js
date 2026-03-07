const botaoSalvar = document.getElementById("salvar");
botaoSalvar.addEventListener("click", salvar);
const tbody = document.getElementById("resumo-filmes");

let id = 1;


function salvar() {
    const campoNome = document.getElementById("campo-nome");
    const campoGenero = document.getElementById("campo-genero");
    const campoDuracao = document.getElementById("campo-duracao");
    const campoNota = document.getElementById("campo-nota");
    const campoCinema = document.getElementById("campo-cinema");

    const nome = campoNome.value;
    const genero = campoGenero.value;
    const duracao = campoDuracao.value;
    const nota = campoNota.value;
    const cinema = campoCinema.value;

    let classificacao = "";

    if (nota < 5) {
        classificacao = "Ruim";
    } else if (nota <= 7) {
        classificacao = "Regular";
    } else {
        classificacao = "Bom";
    }


    const linha = `<tr>
        <td>${id}</td>
        <td>${nome}</td>
        <td>${genero}</td>
        <td>${duracao} min</td>
        <td>${nota}</td>
        <td>${classificacao}</td>
        <td>${cinema}</td>
    </tr>`;

    tbody.innerHTML += linha;
    id++;
}