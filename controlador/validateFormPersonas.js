// Revisar generalizacion y modularizacion para todos los forms.

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
        if($(this).attr('id') == 'nombrePersonas' || $(this).attr('id') == 'apellidoPaPersonas' || $(this).attr('id') == 'apellidoMaPersonas'){
            if(value.length < 3 || value.length>20){
                flag=true
            }
        }

        //2.- Revisar si el email trae entre 15 y 100 caracteres
        if($(this).attr('id') == 'inputEmailPersonas'){
            if(value.length < 15 || value.length>100){
                flag=true
            }
        }
        //3.- Revisar si el telefono trae entre 9 y 12 caracteres
        if($(this).attr('id') == 'telefonoPersonas'){
            str = value.toString()
            if(str.length < 9 || str.length>12){
                flag=true
            }
        }
        //4.- Revisar si el RUT trae entre 9 y 10 caracteres
        if($(this).attr('id') == 'rutPersonas'){
            str = value.toString()
            if(str.length < 9 || str.length>10){
                flag=true
            }
        }
        //5.- Revisar si la Edad es entre 18 y 35 años
        if($(this).attr('id') == 'edadPersonas'){  

            if ( value <= 17 || value >= 36 ){
                flag = true                

            }

        }
        
            
                
            
        

        // Revisar si se activa la flag
        if(flag){
            // Si el campo está vacío, añade la clase 'is-invalid'
            $(this).addClass("is-invalid");
            if(!$('#idButtonEnviarPersonas').attr('disabled')){
                $('#idButtonEnviarPersonas').attr('disabled',true)
            }
        }else{
            // Si el campo tiene contenido, elimina la clase 'is-invalid'
            $(this).removeClass("is-invalid");
            $('#idButtonEnviarPersonas').removeAttr('disabled')
        }
    });

    $("select").focusout(function() {
        var value = $(this).val();
        if (value.length == 0) {
            // Si el campo está vacío, añade la clase 'is-invalid'
            $(this).addClass("is-invalid");
            //Deshabilitar boton envio
            if(!$('#idButtonEnviarPersonas').attr('disabled')){
                $('#idButtonEnviarPersonas').attr('disabled',true)
            }
        } else {
            // Si el campo tiene contenido, elimina la clase 'is-invalid'
            // Rehabilitar boton envío
            $(this).removeClass("is-invalid");
            $('#idButtonEnviarPersonas').removeAttr('disabled')
        }
    });
});