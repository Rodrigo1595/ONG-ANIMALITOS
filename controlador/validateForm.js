$(document).ready(function() {
    // Cuando el formulario pierde el foco
    $("input").focusout(function() {
        var value = $(this).val();
        if (value.length == 0) {
            // Si el campo está vacío, añade la clase 'is-invalid'
            $(this).addClass("is-invalid");
        } else {
            // Si el campo tiene contenido, elimina la clase 'is-invalid'
            $(this).removeClass("is-invalid");
        }
    });
});