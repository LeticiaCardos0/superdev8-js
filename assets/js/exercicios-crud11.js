const botaoSalvar = document.getElementById("botao-salvar");
    botaoSalvar.addEventListener("click",salvar);

const tbody = document.getElementById("lista-filmes");

let id = 1;

function salvar(){
    const campoNome = document.getElementById("campo-nome");
    const campoGenero = document.getElementById("campo-genero");
    const campoDuracao = document.getElementById("campo-duracao")
    const campoFaixa = document.getElementById("campo-faixa");

    const nome = campoNome.value;
    const genero = campoGenero.value;
    const duracao = parseInt(campoDuracao.value);
    const faixa = parseInt(campoFaixa.value);

    let classificacao = "";

    if (duracao < 120){
        classificacao = "Filme Curto";
    } else {
        classificacao = "Filme Longo";
    }

    let linha = `<tr>
                    <td>${id}</td>
                    <td>${nome}</td>
                    <td>${genero}</td>
                    <td>${duracao}</td>
                    <td>${faixa}</td>
                    <td>${classificacao}</td>
                 </tr>`

    tbody.innerHTML += linha;
    id++

}