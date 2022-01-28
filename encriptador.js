
function validar() {
    var msjEntrada = document.getElementById('msj-entrada').value.toLowerCase();
    var excepciones1 = /[0-9]/g;
    var excepciones2 = /\W/g;
    var msjError = ''


    if (excepciones1.test(msjEntrada)){
        valido = false;
        msjError = '* No se permiten numeros'
    }

    if ( excepciones2.test(msjEntrada.replace(/ |\n/g,''))){
        valido = false;
        if (msjError == ''){
            msjError = '* No se permiten tildes ni caracteres especiales';
        } else {
            msjError = msjError + ', tildes ni caracteres especiales';
        }
    }

    if (msjError !== ''){
        mostrarError(msjError);
    }
    return msjError == ''
}

function encriptar() {
    var msjEntrada = document.getElementById('msj-entrada').value.toLowerCase();
    var msjEncriptado = '';

    if (validar()){
        for (let i = 0; i < msjEntrada.length; i++) {
            letra = msjEntrada[i];
            switch(letra){
                case 'a' : letra ='ai'; break;
                case 'e' : letra ='enter'; break;
                case 'i' : letra ='imes'; break;
                case 'o' : letra ='ober'; break;
                case 'u' : letra ='ufat'; break;
            }
            msjEncriptado += letra;
        }
        document.getElementById('msj-salida').value = msjEncriptado;
        document.getElementById('msj-error').style.visibility = 'hidden';
    }
}

function desencriptar() {
    var msjEntrada = document.getElementById('msj-entrada').value.toLowerCase();
    var msjSalida = document.getElementById('msj-salida');
    if (validar()){
        if (/ai|enter|imes|ober|ufat/g.test(msjEntrada)){
            var msjEncriptado = msjEntrada.replace(/ai/g,'a').replace(/enter/g,'e').replace(/imes/g,'i').replace(/ober/g,'o').replace(/ufat/g,'u');
            msjSalida.value = msjEncriptado 
        } else {
            console.log('No es un mensaje que se pueda encriptar')
        }
        
    }
}

function copiar() {
    var msjSalida = document.getElementById('msj-salida');
    msjSalida.select();
    document.execCommand('copy');
}

function cambiarColorCont(n){
    var texarea = document.getElementById('cont-texarea'+n);
    texarea.style.border = '1px solid #000000'
}

function resetColorCont(n){
    var texarea = document.getElementById('cont-texarea'+n);
    texarea.style.border = '1px solid #828282c2'
}

function mostrarError(error){
    var spanError = document.getElementById('msj-error');
    var texarea = document.getElementById('cont-texarea1');
    spanError.innerHTML = error + '.';
    spanError.style.visibility = 'visible'
    texarea.style.border = '1px solid #ff0000'
}