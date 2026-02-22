//Busca no HTML os elementos que tenham o atrubuto name="fonte" (ex: radios/inputs de tamanho de fonte)

let inputsTamanhoFonte = document.getElementsByName("fonte");
debugger
//   Percorre lista de inputs encontrando (do primeiro ao ultimo)
for(let i = 0; i < inputsTamanhoFonte.length; i += 1) {
    // Pega o input da posição atual (indice i) dentro da lista 
    const inputTamanhoFonte = inputsTamanhoFonte[i];
    // Define que,quando esse input mudar de valor, a função campoFonteAlterado será executado 
    inputTamanhoFonte.onchange = campoFonteAlterado;   
    
    
}
// Função chamada automaticamente quando algum input de fonte mudar (evento "change")
function campoFonteAlterado(event){
    // Pega o valor do input de disparou o evento (por exemplo: "12","16","20" etc.)
    let tamanho = event.target.value;
    // Chama a função responsavel por aplicar o tamanho da fonte no paragrafo
    alterarTamanhoFonte(tamanho);
}

// Função que realmente altera o tamanho da fonte do primeiro <p> da pagina
function alterarTamanhoFonte(tamanho){
    // Busca todas as tags <p> e pega a primera delas (indice 0)
    const tagP = document.getElementsByTagName("p")[0];

    // Define o font-size do paragrafo usando o template string e adicionando "px" ao valor do tamanho 
    tagP.style.fontSize =`${tamanho}px`;
}


// Selecione o elemento de input/select responsavel pela cor do texto
const corTexto = document.getElementById("cor-texto");
    //Adiciona o listener para detectar quando o valor do input/select mudar 
    corTexto.addEventListener("change",definirCores);
    // Seleciona o primeiro parágrafo da pagina
    const tagP = document.getElementsByTagName("p")[0];

function definirCores(event){
    //Obtem o elemento que disparou o envento (o select de cores)
    let campoSelect = event.target;

    //Paga o valor selecionado (a cor escolhida)
    let cor = campoSelect.value;

    // Aplica a cor selecionado ao estilo do primeiro paragrafo
    tagP.style.color = cor;
}

// Seleciona o elemento de input/select responsavel pela cor de fundo
const tagCorFundo = document.getElementById("cor-fundo")

// Adiciona um listener para detectar quando o valor do input/select mudar
tagCorFundo.addEventListener("change", definirCorFundo)

// Funçao que será chamada quando a cor de fundo for alterada
function definirCorFundo(){
    // Pega o valor selecionando (a cor escolhida)
    const corFundo = tagCorFundo.value;
// Seleciona o elemento <body>
    const body = document.getElementsByTagName("body")[0];
// Aplica a cor escolhida ao fundo da pagina (backgroundColor)
    body.style.backgroundColor = corFundo;
}

const imagens = [
    "assets/image/minecraft1.jpg",
    "assets/image/minecraft2.jpg",
    "assets/image/minecraft3.jpg"

];
const imagem = document.getElementById("img-mine")

let indice = 0;

setInterval(() => {

    let imagemSrc = imagens[indice];
    imagem.setAttribute("src", imagemSrc);

    indice = indice + 1;
    if (indice >= 3){
        indice = 0;
    }
},1000);



