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