function mensaje() {
    alert('hola mundo');
}

function validarFormulario() {
    validaRut();



}

function validaRut() {
    var rut = document.getElementById('txtRut').value;
    console.log('Su rut es:'+rut);
    var num = 3;
    var suma = 0;
    for (let index = 0; index < 8; index++) {
        var caracter = rut.slice(index,index+1);
        console.log(caracter+ ' x '+num);
        suma = suma + ( caracter * num );
        num = num -1;
        if (num == 1) {
            num = 7;
        }
    }
    console.log('suma es:'+suma);
    var resto = suma % 11;
    console.log('resto:'+resto);
    var dv = 11 - resto;
    if ( dv > 9) {
        if ( dv == 10) {
            dv ='K';
        }else{
            dv = 0;
        }
    }
    console.log('dv:' + dv);
    var dv_usuario = rut.slice(-1).toUpperCase();
    if ( dv != dv_usuario ) {
        alert('rut incorrecto');
        return false;
    }
    return true;

}
var searchbar = document.querySelector("#search");
function slide(){
    
    if(searchbar.classList.contains("hide")){
        searchbar.classList.remove("hide");
    }else{
         searchbar.classList.add("hide");
    }
}