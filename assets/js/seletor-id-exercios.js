const agendarConsulta = document.getElementById("agendar-consulta")
    agendarConsulta.addEventListener("click", agendamento)

function agendamento(){
    let campoNomePaciente = document.getElementById("nome-pet")
    let nomePaciente = (campoNomePaciente.value)

    let campoDataConsulta = document.getElementById("data-consulta")
    let dataConsulta = (campoDataConsulta.value)

    alert(`Consulta agendada com sucesso!
 - Nome Paciente: ${nomePaciente}
 - Data Consulta: ${dataConsulta}`)

}