
    const inputTexto = document.querySelector(".input-texto");
    const mensajeTexto = document.querySelector(".mensaje");

    var mensaje;
    var mensaje2;


    //ENCRIPTADO

    function btnEncriptar(){
        const textEncriptado = encriptar(inputTexto.value);
        mensajeTexto.value = textEncriptado;
        mensajeTexto.style.backgroundImage = "none";
        inputTexto.value = "";
    }


    function encriptar(textoEncriptado){
        textoEncriptado = textoEncriptado.toLowerCase();
        mensaje = textoEncriptado.replace(/e/g,"enter");
        mensaje2 = mensaje.replace(/i/g,"imes");
        mensaje = mensaje2.replace(/a/g,"ai");
        mensaje2 = mensaje.replace(/o/g,"ober");
        mensaje = mensaje2.replace(/u/g,"ufat");
        
        return mensaje;
    }

    //DESENCRIPTADO

    function btnDesencriptar(){
        const textDesencriptado = desencriptar(inputTexto.value);
        mensajeTexto.value = textDesencriptado;
        mensajeTexto.style.backgroundImage = "none";
        inputTexto.value = "";
    }

    function desencriptar(textoDesencriptar){
        textoDesencriptar = textoDesencriptar.toLowerCase();
        mensaje = textoDesencriptar.replace(/enter/g,"e");
        mensaje2 = mensaje.replace(/imes/g,"i");
        mensaje = mensaje2.replace(/ai/g,"a");
        mensaje2 = mensaje.replace(/ober/g,"o");
        mensaje = mensaje2.replace(/ufat/g,"u");
       
        return mensaje;
    }


    function copiar(){
        mensajeTexto.select();
        navigator.clipboard.writeText(mensajeTexto.value);
        mensajeTexto.value = "";
        alert("Texto copiado");
    }



