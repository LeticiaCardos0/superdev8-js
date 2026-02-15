const agendarConsulta = document.getElementById("agendar-consulta");
    agendarConsulta.addEventListener("click", agendamento);

function agendamento(){
    let campoNomePaciente = document.getElementById("nome-pet");
    let nomePaciente = (campoNomePaciente.value);

    let campoDataConsulta = document.getElementById("data-consulta");
    let dataConsulta = (campoDataConsulta.value);

    let campoTipoAnimal = document.getElementById("tipo-animal");
    let tipoAnimal = (campoTipoAnimal.value);

    let campoIdadeAnimal = document.getElementById("idade")
    let idadeAninal = (campoIdadeAnimal.value)


    alert(`Consulta agendada com sucesso!
 - Nome Paciente: ${nomePaciente}
 - Idade Paciente: ${idadeAninal}
 - Tipo Paciente: ${tipoAnimal} 
 - Data Consulta: ${dataConsulta}`)
}