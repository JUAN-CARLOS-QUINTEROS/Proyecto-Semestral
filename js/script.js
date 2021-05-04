

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
        
    else
        alert('Formulario validado Pinchar en registrar')
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











var searchbar = document.querySelector("#search");
function slide(){

    if(searchbar.classList.contains("hide")){
        searchbar.classList.remove("hide");
    }else{
         searchbar.classList.add("hide");
    }
}


function EnviarMensaje() {

    var resp = validarEmail();
    if (resp == false) {
        return false;
    }  
    var resp = validarNombreCompleto();
    if (resp == false) {
        return false;    }
    
    var resp = validarMensaje();
    if (resp == false) {
        return false;
    }
    
    var resp = validarTelefono();
    if (resp == false) {
        return false;
    } 
    else
        alert('mensaje enviado')
   
   
    return true;
    
    }
function validarEmail() {
        var Email = document.getElementById('txtEmail').value;
        if (Email.trim().length == 0 ){
            alert('ingrese Email');
            return false;        
        }   
        console.log ('Email:'+ Email);
    }
function validarNombreCompleto(){
        var nombrecompleto = document.getElementById('txtNombreCompleto').value;
        if (nombrecompleto.trim().length == 0 ){
            alert('ingrese  el nombre completo');
            return false;    
        }    
        console.log ('nombrecompleto:'+ nombrecompleto);
    }
function validarMensaje() {
        var mensaje = document.getElementById('txtMensaje').value;
        if (mensaje.trim().length == 0 ){
            alert('ingrese un mensaje');
            return false;        
        }   
        console.log ('mensaje:'+ mensaje);
    }
function validarTelefono(){
        var telefono = document.getElementById('txtFono').value;
        if (telefono.trim().length == 0 ){
            alert('ingrese telefono');
            return false;    
        }    
        console.log ('telefono:'+ telefono);
    }
