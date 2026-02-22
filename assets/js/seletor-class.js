const botaoOcultarCaixaAzul = document.getElementById("ocultar-azul");
botaoOcultarCaixaAzul.addEventListener("click", ocultarCaixaAzul);

const botaoMostrarCaixaRoxa = document.getElementById("mostrar-roxo");
botaoMostrarCaixaRoxa.addEventListener("click", mostrarCaixaRoxa);

const botaoAlterarVisibilidadeCaixaRosa = document.getElementById("alterar-visibilidade-rosa");
botaoAlterarVisibilidadeCaixaRosa.addEventListener("click", alterarVisibilidadeCaixaRosa);

const botaoAumentarTamanhoPreto = document.getElementById("aumentar-tamanho-preto");
botaoAumentarTamanhoPreto.addEventListener("click", aumentarTamanhoPreto);
const botaoDiminuirTamanhoPreto = document.getElementById("diminuir-tamanho-preto");
botaoDiminuirTamanhoPreto.addEventListener("click", diminuirTamanhoPreto);

function ocultarCaixaAzul() {
    // <div class="azul">Azul</div>
    const divCaixaAzul = document.getElementsByClassName("azul")[0];
    divCaixaAzul.style.display = "none";
    // Após ocultar o azul apresentar a caixa roxa
    // mostrarCaixaRoxa();
}

function mostrarCaixaRoxa() {
    // <div class="caixa">Azul</div>
    // <div class="caixa">Rosa</div>
    // <div class="caixa">Roxo</div> <-------
    const divCaixaRoxa = document.getElementsByClassName("caixa")[2];
    divCaixaRoxa.style.display = "inline-block";
}

function alterarVisibilidadeCaixaRosa() {
    // <div class="caixa rosa"> <-------
    const divCaixaRosa = document.getElementsByClassName("caixa rosa")[0];

    if (divCaixaRosa.style.display === "none") {
        divCaixaRosa.style.display = "inline-block";
    } else {
        divCaixaRosa.style.display = "none";
    }
}

function aumentarTamanhoPreto() {
    // <div class="caixa preto"> <-------
    const divCaixaPreta = document.getElementsByClassName("caixa preto")[0];
    // divCaixaPreta.style.height = "80px";
    // divCaixaPreta.style.width = "80px";

    let estiloComputadoParaDivCaixaPreta = window.getComputedStyle(divCaixaPreta);
    let alturaDivCaixaPreta = estiloComputadoParaDivCaixaPreta.getPropertyValue("height");
    let alturaAtual = parseInt(alturaDivCaixaPreta);
    let alturaNova = alturaAtual + 5;

    if (alturaNova > 100) {
        alert("Altura máxima é de 100px");

        const desejaRedefeinirAltura = confirm("Deseja redefinir altura?");
        if (desejaRedefeinirAltura === true) {
            divCaixaPreta.style.height = `60px`;
        }

        return;
    }

    divCaixaPreta.style.height = `${alturaNova}px`;
}

function diminuirTamanhoPreto() {
    // <div class="caixa preto"> <-------
    const divCaixaPreta = document.getElementsByClassName("caixa preto")[0];
    // divCaixaPreta.style.height = "80px";
    // divCaixaPreta.style.width = "80px";

    let estiloComputadoParaDivCaixaPreta = window.getComputedStyle(divCaixaPreta);
    let alturaDivCaixaPreta = estiloComputadoParaDivCaixaPreta.getPropertyValue("height");
    let alturaAtual = parseInt(alturaDivCaixaPreta);
    let alturaNova = alturaAtual - 5;

    if (alturaNova < 10) {
        alert("Altura mínima é de 10px");

        const desejaRedefeinirAltura = confirm("Deseja redefinir altura?");
        if (desejaRedefeinirAltura === true) {
            divCaixaPreta.style.height = `60px`;
        }

        return;
    }

    divCaixaPreta.style.height = `${alturaNova}px`;
}
const botaoVerdeDeslocarCima = document.getElementById("deslocar-cima");
botaoVerdeDeslocarCima.addEventListener("click", deslocarCima);

const botaoVerdeDeslocarDireita = document.getElementById("deslocar-direita");
botaoVerdeDeslocarDireita.addEventListener("click", deslocarDireita);

const botaoVerdeDeslocarBaixo = document.getElementById("deslocar-baixo");
botaoVerdeDeslocarBaixo.addEventListener("click", deslocarBaixo);

const botaoVerdeDeslocarEsquerda = document.getElementById("deslocar-esquerda");
botaoVerdeDeslocarEsquerda.addEventListener("click", deslocarEsquerda);

const inputDeslocamento = document.getElementById("deslocamento");

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp") {
        deslocarCima();
    } else if (event.key === "ArrowDown") {
        deslocarBaixo();
    } else if (event.key === "ArrowLeft") {
        deslocarEsquerda();
    } else if (event.key === "ArrowRight") {
        deslocarDireita();
    }
})

const divCaixaVerde = document.getElementsByClassName("caixa verde")[0];

function deslocarCima() {
    const distancia = parseInt(inputDeslocamento.value);
    const computedStyle = window.getComputedStyle(divCaixaVerde);
    const topAtual = parseInt(computedStyle.getPropertyValue("top"));
    // const topNovo = topAtual - 10;
    const topNovo = topAtual - distancia;
    divCaixaVerde.style.top = `${topNovo}px`;
}
function deslocarDireita() {
    const distancia = parseInt(inputDeslocamento.value);
    const computedStyle = window.getComputedStyle(divCaixaVerde);
    const leftAtual = parseInt(computedStyle.getPropertyValue("left"));
    // const leftNovo = leftAtual + 10;
    const leftNovo = leftAtual + distancia;
    divCaixaVerde.style.left = `${leftNovo}px`;
}

function deslocarBaixo() {
    const distancia = parseInt(inputDeslocamento.value);
    const computedStyle = window.getComputedStyle(divCaixaVerde);
    const topAtual = parseInt(computedStyle.getPropertyValue("top"));
    // const topNovo = topAtual + 10;
    const topNovo = topAtual + distancia;
    divCaixaVerde.style.top = `${topNovo}px`;
}

function deslocarEsquerda() {
    const deslocamento = parseInt(inputDeslocamento.value);
    const computedStyle = window.getComputedStyle(divCaixaVerde);
    const leftAtual = parseInt(computedStyle.getPropertyValue("left"));
    // const leftNovo = leftAtual - 10;
    const leftNovo = leftAtual - deslocamento;
    divCaixaVerde.style.left = `${leftNovo}px`;
}