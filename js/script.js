function mensaje(){
    alert('Datos Guardados Correctamente');
}


function ValidarFormulario() {
    var resp = validarNombre();
    if (resp == false) {
        return false;
    }
    var resp = validarApellido();
    if (resp == false) {
        return false;
    }
    var resp = validarEmail();
    if (resp == false) {
        return false;
    }
    
    var resp = validarUsuario();
    if (resp == false) {
        return false;
    }
    
    var resp = validarPassword();
    if (resp == false) {
        return false;
    }
    var resp = validarTelefono();
    if (resp == false) {
        return false;
    }

    return true;
}

function validarNombre(){
    var nombre = document.getElementById('txtNombre').value;
    if (nombre.trim().length == 0 ){
        alert('ingrese nombre');
        return false;    
    }    
    console.log ('nombre:'+ nombre);
}


function validarApellido(){
    var apellido = document.getElementById('txtApellido').value;
    if (apellido.trim().length == 0 ){
        alert('ingrese apellido');
        return false;    
    }    
    console.log ('apellido:'+ apellido);
}

function validarEmail() {
    var Email = document.getElementById('txtEmail').value;
    if (Email.trim().length == 0 ){
        alert('ingrese Email');
        return false;        
    }   
    console.log ('Email:'+ Email);
}  

function validarUsuario(){
    var usuario = document.getElementById('txtUsuario').value;
    if (usuario.trim().length == 0 ){
        alert('ingrese usuario');
        return false;    
    }    
    console.log ('usuario:'+ usuario);
}

function validarPassword(){
    var password = document.getElementById('txtPass').value;
    if (password.trim().length == 0 ){
        alert('ingrese password');
        return false;    
    }    
    console.log ('password:'+ password);
}

function validarTelefono(){
    var telefono = document.getElementById('txtFono').value;
    if (telefono.trim().length == 0 ){
        alert('ingrese telefono');
        return false;    
    }    
    console.log ('telefono:'+ telefono);
}




var searchbar = document.querySelector("#search");
function slide(){

    if(searchbar.classList.contains("hide")){
        searchbar.classList.remove("hide");
    }else{
         searchbar.classList.add("hide");
    }
}


