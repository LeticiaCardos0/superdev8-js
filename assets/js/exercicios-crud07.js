const botaoCalcularMedia = document.getElementById("calcular-media");
    botaoCalcularMedia.addEventListener("click",calcularMedia);
const tbody = document.getElementById("resumo-alunos")
let id = 1;

function calcularMedia(){
    const campoNome = document.getElementById("campo-nome");
    const campoNota1 = document.getElementById("campo-nota1");
    const campoNota2 = document.getElementById("campo-nota2");
    const campoNota3 = document.getElementById("campo-nota3");

    const nome = campoNome.value;
    const nota1 = parseFloat(campoNota1.value);
    const nota2 = parseFloat(campoNota2.value);
    const nota3 = parseFloat(campoNota3.value);

    let somaNota = nota1 + nota2 + nota3;
    let media = somaNota / 3;

    let situacao = "";

    if (media < 7){
        situacao = "Reprovado"; 
    } else if (media >= 7 ){
        situacao = "Aprovado";
    }

    let linha = `<tr>
                    <td>${id}</td>
                    <td>${nome}</td>
                    <td>${nota1}</td>
                    <td>${nota2}</td>
                    <td>${nota3}</td>
                    <td>${media.toFixed(2)}</td>
                    <td>${situacao}</td>
                 </tr>`

    tbody.innerHTML+= linha;
    id++;

    campoNome.value = "";
    campoNota1.value = "";
    campoNota2.value = "";
    campoNota3.value = "";

}