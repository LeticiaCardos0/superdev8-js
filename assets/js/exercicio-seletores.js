const formularioCadastro = document.getElementById("formulario-cadastro")
formularioCadastro.addEventListener("click", cadastro)

const formularioCadastroPf = document.getElementById("tipo-cadastro-pf")
formularioCadastroPf.addEventListener("click", cadastroPessoaFisica)

const formularioCadastroPj = document.getElementById("tipo-cadastro-pj")
formularioCadastroPj.addEventListener("click", cadastroPessoaJuridica)

function cadastroPessoaFisica(){
    const divFormularioPf = document.querySelector(".botao");
    divFormularioPf.style.display = "block";
}