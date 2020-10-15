var btnAdicionarPaciente = document.querySelector("#adicionar-paciente");
btnAdicionarPaciente.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemDadosDoFormulario(form);

    var pacienteTr  = montandoTr(paciente);

    var erros = validaPaciente(paciente);
    if(erros.length > 0){
        exibeMensagemDeErro (erros);
        return;
    }

    var tabela = document.querySelector("#tabela-pacientes");
        
    tabela.appendChild(pacienteTr);

    form.reset();
    var limpaUl = document.querySelector("mensagens-erro");
    limpaUl.innerHTML = "";
});

function exibeMensagemDeErro(erros){
   var ul = document.querySelector("#mensagens-erro");
   ul.innerHTML = "";
   erros.forEach(function(erro){
       var li = document.createElement("li");
       li.textContent = erro;
       ul.appendChild(li);
   });
}

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

function validaPaciente(paciente) {
    var erros = [];

    if(paciente.nome.length == 0) erros.push("O nome do paciente deve ser informado");
    if(!validaPeso(paciente.peso)) erros.push("O peso é inválido!");
    if(!validaAltura(paciente.altura)) erros.push("A altura está inválida");
    if(paciente.gordura.length == 0) erros.push("O valor da porcentagem de gordura deve ser informada");
    if(paciente.altura.length == 0) erros.push("A altura deve ser informada");
    if(paciente.peso.length == 0)erros.push("O peso do paciente deve ser informado");

    return erros;
}