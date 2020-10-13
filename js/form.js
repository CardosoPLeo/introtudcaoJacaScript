var btnAdicionarPaciente = document.querySelector("#adicionar-paciente");
btnAdicionarPaciente.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemDadosDoFormulario(form);

    var pacienteTr  = montandoTr(paciente);

    var tabela = document.querySelector("#tabela-pacientes");
        
    tabela.appendChild(pacienteTr);

    form.reset();
});

function obtemDadosDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente
}

function montandoTr(paciente) {

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montandoTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montandoTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montandoTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montandoTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montandoTd(paciente.imc, "info-imc"));
    
    return pacienteTr;
}

function montandoTd(dado, classe) {
    var Td = document.createElement("td");
    Td.textContent = dado;
    Td.classList.add(classe);
    return Td;
}