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
        peso = false;
        tdImc.textContent="Peso inválido!";
    }
    if(altura <=0 || altura >=3.00){
        altura = false;
        tdImc.textContent ="Altura inválida!";
    }

    if(pesoValido && alturaValida){
        var ICM = peso / (altura * altura);
        tdImc.textContent = ICM.toFixed(2);
    }else {
        tdImc.textContent = "Altura e/ou peso inválidos!"
    }

}

