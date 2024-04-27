$(document).ready(function() {
    // Cuando el formulario pierde el foco
    $("input").focusout(function() {
        //Validacion general de input
        let flag = false
        var value = $(this).val();
        if (value.length == 0) {
            flag = true
        } 
        //1.- Revisar si el nombre trae entre 3 y 20 caracteres
        if($(this).attr('id') == 'idNombreContacto'){
            if(value.length < 3 || value.length>20){
                flag=true
            }
        }
        //2.- Revisar si el apellido trae entre 3 y 20 caracteres
        if($(this).attr('id') == 'idApellidoContacto'){
            if(value.length < 3 || value.length>20){
                flag=true
            }
        }
        //3.- Revisar si el email trae entre 15 y 100 caracteres
        if($(this).attr('id') == 'idEmailContacto'){
            if(value.length < 15 || value.length>100){
                flag=true
            }
        }
        //4.- Revisar si el telefono trae entre 9 y 12 caracteres
        if($(this).attr('id') == 'idCelularContacto'){
            str = value.toString()
            if(str.length < 9 || str.length>12){
                flag=true
            }
        }
        if(flag){
            // Si el campo está vacío, añade la clase 'is-invalid'
            $(this).addClass("is-invalid");
            if(!$('#idButtonEnviar').attr('disabled')){
                $('#idButtonEnviar').attr('disabled',true)
            }
        }else{
            // Si el campo tiene contenido, elimina la clase 'is-invalid'
            $(this).removeClass("is-invalid");
        }
    });
    $("select").focusout(function() {
        var value = $(this).val();
        if (value.length == 0) {
            // Si el campo está vacío, añade la clase 'is-invalid'
            $(this).addClass("is-invalid");
            //Deshabilitar boton envio
            if(!$('#idButtonEnviar').attr('disabled')){
                $('#idButtonEnviar').attr('disabled',true)
            }
        } else {
            // Si el campo tiene contenido, elimina la clase 'is-invalid'
            // Rehabilitar boton envío
            $(this).removeClass("is-invalid");
            $('#idButtonEnviar').removeAttr('disabled')
        }
    });
});