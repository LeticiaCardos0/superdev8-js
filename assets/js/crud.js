// Pega o elemento do HTML que possui o id "botao-cadastrar"
// e guarda esse elemento dentro da variável botaoCadastrar
const botaoCadastrar = document.getElementById("botao-cadastrar");

// Adiciona um "ouvinte de evento" ao botão.
// Quando o botão for clicado, a função cadastrarJogo será executada.
botaoCadastrar.addEventListener("click", cadastrarJogo);

// Pega o campo de input do HTML que possui o id "campo-nome"
const campoNome = document.getElementById("campo-nome");


// Adiciona um "ouvinte de evento" ao campo
// Quando ocorre o envento do teclado pressionando
campoNome.addEventListener("keydown", eventoEnterCampo);

// Função que sera executada quando ocorre um evento de teclado no campo nome
function eventoEnterCampo(event){

    // Verifica qual tecla foi precionada pelo usuario
    // Se a tecla precionada for enter 
    if (event.key === "Enter"){
        
        // Chama a função cadastrarJogo()
        // Isso faz com que o jogo seja adicionado a lista
        cadastrarJogo();
    }
}


// Função responsável por cadastrar (adicionar) um jogo na lista
function cadastrarJogo(){

    // Pega o valor digitado dentro do input,removendo espaços
    const nome = campoNome.value.trim();

    // Verifica se o nome digitado contem menos de 2 caracteres
    if (nome.length < 2){
        // Apresente uma mensagem que contem menos de 2 caracteres
        alert("O Nome deve conter no minimo 2 caracteres");
        // Encerra a execução desse metodo, pois não deve cadastrar quando o nome é invalido
        return

    }

    // Cria um novo elemento <li> (item de lista) no HTML
    // Exemplo: <li></li>
    const tagLi = document.createElement("li");

    // Coloca dentro do <li> o nome que foi digitado no campo
    // Exemplo: <li>Mario</li>
    tagLi.innerHTML = nome;

    // Pega a lista não ordenada (UL) do HTML que possui o id "jogos"
    // Exemplo de estrutura: <ul id="jogos"></ul>
    const tagUl = document.getElementById("jogos");

    // Adiciona o novo <li> criado dentro da <ul>
    // Ou seja, adiciona um novo item na lista de jogos
    tagUl.appendChild(tagLi);

    // Limpar campo
    campoNome.value = "";

    // Foco no campo do nome
    campoNome.focus();

    

}