function traerDatosModal() {
    //traer valores para rellenar la carta
    let valorSeleccion = document.getElementById('idMotivoContacto')
    var oDatosFormulario = {
        nombre:document.getElementById('idNombreContacto').value != undefined && document.getElementById('idNombreContacto').value != '' ? document.getElementById('idNombreContacto').value : 'No definido',
        apellido:document.getElementById('idApellidoContacto').value != undefined && document.getElementById('idApellidoContacto').value != '' ? document.getElementById('idApellidoContacto').value : 'No definido',
        email: document.getElementById('idEmailContacto').value != undefined && document.getElementById('idEmailContacto').value != '' ? document.getElementById('idEmailContacto').value : 'No definido',
        celular : document.getElementById('idCelularContacto').value != undefined && document.getElementById('idCelularContacto').value != '' ? document.getElementById('idCelularContacto').value : 'No definido',
        motContacto: valorSeleccion.options[valorSeleccion.selectedIndex].value != undefined && valorSeleccion.options[valorSeleccion.selectedIndex].value != '' ? valorSeleccion.options[valorSeleccion.selectedIndex].value : 'No definido' ,
        comentario: document.getElementById('idComentariosContactos').value != undefined && document.getElementById('idComentariosContactos').value != '' ? document.getElementById('idComentariosContactos').value : 'No definido'
    }
    
    // Hacer vista previa de la carta
    $(document).ready(function () {
        $('#divModalBodyContent').html(
            `
            <div class="fondo-panel border border-dark-subtle">
            <h1 class="text-center m-3"> Formulario contacto S.U.A</h1>
            <ul>
                <li>Nombre : ${oDatosFormulario.nombre}</li>
                <li>Apellido : ${oDatosFormulario.apellido}</li>
                <li>E-Mail : ${oDatosFormulario.email}</li>
                <li>Celular : ${oDatosFormulario.celular}</li>
                <li>Motivo de contacto : ${oDatosFormulario.motContacto}</li>
            </ul>
            <label>Comentarios : </label>
            <p>${oDatosFormulario.comentario}</p>
            <div>
            `
        )
    });
    
}