function traerDatosModal() {
    let valorSeleccion = document.getElementById('idMotivoContacto')
    var oDatosFormulario = {
        nombre:document.getElementById('idNombreAdopcion').value != undefined && document.getElementById('idNombreAdopcion').value != '' ? document.getElementById('idNombreAdopcion').value : 'Nombre Adoptante',
        apellido:document.getElementById('idApellidoAdopcion').value != undefined && document.getElementById('idApellidoAdopcion').value != '' ? document.getElementById('idApellidoAdopcion').value : 'Apellido Adoptante'
    } 

    $(document).ready(function () {
        $('#divModalBodyContent').html(
            `
            <div class="fondo-panel border border-dark-subtle">
            <h2 class="text-center m-3">COMPROMISO DE ADOPCIÓN</h2>

                Yo ${oDatosFormulario.nombre} ${oDatosFormulario.apellido} me comprometo, mediante la firma de este contrato, a:
                <ul>
                <li>Ofrecer los cuidados necesarios al animal, incluyendo alimentación, paseos, higiene y cariño.</li>
                <li>No dejar al animal libremente en la vía pública sin supervisión.</li>
                <li>No abandonar, regalar, ceder o vender al animal sin autorización.</li>
                <li>No realizar amputaciones por motivos estéticos.</li>
                <li>Informar cualquier cambio de domicilio o pérdida del animal.</li>
                <li>Cumplir con la Ley de tenencia responsable de mascotas.</li>

                OBSERVACIONES

                <li>El adoptante se hace cargo civilmente del animal.</li>
                <li>El representante de la adopción puede retirar la custodia si no se cumplen las condiciones del contrato.</li>
                <li>En caso de no poder seguir cuidando al animal, el adoptante informará y colaborará en la búsqueda de un nuevo adoptante.</li>
                </div>
            `
        )
    });
}