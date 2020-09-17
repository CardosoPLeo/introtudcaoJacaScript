var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];
    
    var tdPeso = paciente.querySelector(".info-peso"); 
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc")

    var pesoValido = true;
    var alturaValida = true;

    if(peso <=0 || peso >= 1000 ){
        pesoValido = false;
        tdImc.textContent= "Peso inválido!";
        paciente.style.backgroundColor = "lightcoral";
        paciente.classList.add("paciente-ivalido");
    }
    if(altura <=0 || altura >=3.00){
        alturaValida = false;
        tdImc.textContent ="Altura inválida!";
        paciente.classList.add("paciente-ivalido");
    }

    if(pesoValido && alturaValida){
        var ICM = peso / (altura * altura);
        tdImc.textContent = ICM.toFixed(2);
    }

    var btnAdiconarPaciente = querySelector("#adicionar-paciente");
    btnAdiconarPaciente.addEventListner("click", function(event){
        event.preventDefault();
       
        var form = querySelector("#adcionarPaciente")
        var nome = form.nome.value;
        var peso = form.peso.value;
        var altura = form.altura.value;
        var gordura = form.gordura.value;

        var pacienteTr = documetn.createElement("tr");

        var nomeTd = document.createElement("td");
        var pesoTd = document.createElement("td");
        var alturaTd = document.createElement("td");
        var gorduraTd = document.createElement("td");
        //var imcTd = document.createElement("td");

    
        nomeTd.textContent = nome;
        pesoTd.textContent = peso;
        alturaTd.textContent = altura;
        gorduraTd.textContent = gordura;
        
        pacienteTr.appendChild(nomeTd);
        pacienteTr.appendChild(pesoTd);
        pacienteTr.appendChild(alturaTd);
        pacienteTr.appendChild(gorduraTd);

        var tabela = document.querySelector("#tabela-pacientes");
        tabela.appendChild(pacienteTr);
    });
}