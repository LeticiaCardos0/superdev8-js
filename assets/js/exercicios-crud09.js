const botaoSalvar = document.getElementById("salvar");
    botaoSalvar.addEventListener("click", salvar);

const tbody = document.getElementById("lista-livros")

let id = 1;

function salvar(){
    const campoTitulo = document.getElementById("campo-titulo");
    const campoAutor = document.getElementById("campo-autor");
    const campoPaginas = document.getElementById("campo-paginas");
    const campoAno = document.getElementById("campo-ano");

    const titulo = campoTitulo.value;
    const autor = campoAutor.value;
    const paginas = parseInt(campoPaginas.value)
    const ano = parseInt(campoAno.value);

    let classificacao = "";

    if (ano < 2010){
        classificacao = "Livro Antigo";
    } else {
        classificacao = "Livro Novo";
    }

    const linha =`<tr>
                    <td>${id}</td>
                    <td>${titulo}</td>
                    <td>${autor}</td>
                    <td>${paginas}</td>
                    <td>${ano}</td>
                    <td>${classificacao}</td>
                 </tr> `

    tbody.innerHTML += linha;
    id++

    campoAno.value ="";
    campoAutor.value =""; 
    campoPaginas.value ="";
    campoTitulo.value =""; 
}