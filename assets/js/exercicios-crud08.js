const botaoSalvar = document.getElementById("salvar");
    botaoSalvar.addEventListener("click",salvar)

const tbody = document.getElementById("funcionarios");

let id = 1;

function salvar(){
    const campoNome = document.getElementById("campo-nome");
    const campoCargo = document.getElementById("campo-cargo");
    const campoSalario = document.getElementById("campo-salario");
    const campoFilhos = document.getElementById("campo-filhos");

    const nome = campoNome.value;
    const cargo = campoCargo.value;
    const salario = parseFloat(campoSalario.value);
    const filhos = parseInt(campoFilhos.value);

    let auxilio = 0;

    if (filhos > 0){
        auxilio = filhos * 150
    } else {
        auxilio = 0;
    }

    let salarioFinal = salario + auxilio

    let linha = `<tr>
                    <td>${id}</td>
                    <td>${nome}</td>
                    <td>${cargo}</td>
                    <td>R$ ${salario.toFixed(2)}</td>
                    <td>${filhos}</td>
                    <td>R$ ${auxilio.toFixed(2)}</td>
                    <td>R$ ${salarioFinal.toFixed(2)}</td>
                 </tr>`

    tbody.innerHTML += linha;
    id++

    campoNome.value ="";
    campoCargo.value = "";
    campoSalario.value = "";
    campoFilhos.value = "";

}