var btnBuscarPacientes = document.querySelector("#buscar-pacientes");
btnBuscarPacientes.addEventListener("click", function(){

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes111");

    xhr.addEventListener("load", function(){
        
        if(xhr.status == 200){
                var resposta = xhr.responseText;
                var pacientes = JSON.parse(resposta);
                
                pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente);
            });
        }else{
            alert("Page not found(404). Algo de errado ocorreu ao buscar as informações.")
        }
    });
    xhr.send();
});
