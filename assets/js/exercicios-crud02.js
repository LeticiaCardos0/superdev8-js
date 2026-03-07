const botaoValidarCadastro = document.getElementById("botao-validar-cadastro");
    botaoValidarCadastro.addEventListener("click",validarCadastro);

function validarCadastro(){
    const campoNick = document.getElementById("campo-nick");
    const campoQuantidadeStrikes = document.getElementById("campo-quantidade-strikes");

    const nick = campoNick.value;
    const quantidadeStrikes = campoQuantidadeStrikes.value

    if (quantidadeStrikes > 3){
        const tagLi = document.createElement("li");
        tagLi.innerHTML =`Nick: ${nick} | Quantidade Strikes: ${quantidadeStrikes}`;
        const tagUl = document.getElementById("canais-banidos");
        tagUl.appendChild(tagLi);

    }else {
        const tagLi = document.createElement("li");
        tagLi.innerHTML =`Nick: ${nick} | Quantidade Strikes: ${quantidadeStrikes}`;
        const tagUl = document.getElementById("canais-disponiveis");
        tagUl.appendChild(tagLi);

    }

    campoNick.value = "";
    campoQuantidadeStrikes.value = "";
    

}