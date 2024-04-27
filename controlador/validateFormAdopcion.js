$(document).ready(function() {
    $("input").focusout(function() {

        let flag = false
        var value = $(this).val();
        if (value.length == 0) {
            flag = true
        } 
        if($(this).attr('id') == 'idNombreAdopcion' || $(this).attr('id') == 'idApellidoAdopcion'){
            if(value.length < 3 || value.length>20){
                flag=true
            }
        }

        if($(this).attr('id') == 'idEmailAdopcion'){
            if(value.length < 15 || value.length>100){
                flag=true
            }
        }

        if(flag){
            $(this).addClass("is-invalid");
            if(!$('#idButtonEnviar').attr('disabled')){
                $('#idButtonEnviar').attr('disabled',true)
            }
        }else{
            // Si el campo tiene contenido, elimina la clase 'is-invalid'
            $(this).removeClass("is-invalid");
            $(this).addClass("is-valid");
            $('#idButtonEnviar').removeAttr('disabled')
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
            $(this).removeClass("is-invalid");
            $(this).addClass("is-valid");
            $('#idButtonEnviar').removeAttr('disabled')
        }
    });
});