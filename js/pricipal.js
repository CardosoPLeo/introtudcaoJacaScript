var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso"); 
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc")

var pesoValido = true;
var alturaValida = true;

if(peso <=0 || pesopeso >= 1000 ){
    peso = false;
    tdImc.textContent="Peso inválido!";
}
if(altura <=0 || altura >=3.00){
    altura = false;
    tdImc.textContent ="Altura iinválida!";
}

if(pesoValido && alturaValida){
    var ICM = peso / (altura * altura);
    tdImc.textContent = ICM;
}
