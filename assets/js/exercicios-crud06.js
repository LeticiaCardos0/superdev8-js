const botaoCadastrar = document.getElementById("cadastrar");
    botaoCadastrar.addEventListener("click",cadastrar)

const tbody = document.getElementById("produtos")

let id = 1;

function cadastrar(){
    const campoNome = document.getElementById("campo-nome");
    const campoCategoria = document.getElementById("campo-categoria");
    const campoPreco = document.getElementById("campo-preco");
    const campoQuantidade = document.getElementById("campo-quantidade");

    const nome = campoNome.value;
    const categoria = campoCategoria.value;
    const preco = parseFloat (campoPreco.value).toFixed(2);
    const quantidade = campoQuantidade.value;

    let valorEstoque = parseFloat (quantidade * preco).toFixed(2)

    const linha = `
                <tr>
                    <td>${id}</td>
                    <td>${nome}</td>
                    <td>${categoria}</td>
                    <td>R$ ${preco}</td>
                    <td>${quantidade}</td>
                    <td>R$ ${valorEstoque}</td>
                </tr>`

    
    tbody.innerHTML += linha
    id++
}