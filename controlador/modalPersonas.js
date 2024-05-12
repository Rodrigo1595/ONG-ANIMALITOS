function traerDatosModalPersonas() {
//traer valores para rellenar la carta
let valorSeleccionG = document.getElementById('inputGenderPersonas')
let valorSeleccionR = document.getElementById('inputRegionPersonas')
let valorSeleccionC = document.getElementById('inputComunaPersonas')
var oDatosFormulario = {
    nombre:document.getElementById('nombrePersonas').value != undefined && document.getElementById('nombrePersonas').value != '' ? document.getElementById('nombrePersonas').value : 'No definido',
    apellido:document.getElementById('apellidoPaPersonas').value != undefined && document.getElementById('apellidoPaPersonas').value != '' ? document.getElementById('apellidoPaPersonas').value : 'No definido',
    apellido2:document.getElementById('apellidoMaPersonas').value != undefined && document.getElementById('apellidoMaPersonas').value != '' ? document.getElementById('apellidoMaPersonas').value : 'No definido',
    rut:document.getElementById('rutPersonas').value != undefined && document.getElementById('rutPersonas').value != '' ? document.getElementById('rutPersonas').value : 'No definido',
    nacimiento:document.getElementById('fechaNacPersonas').value != undefined && document.getElementById('fechaNacPersonas').value != '' ? document.getElementById('fechaNacPersonas').value : 'No definido',
    edad:document.getElementById('edadPersonas').value != undefined && document.getElementById('edadPersonas').value != '' ? document.getElementById('edadPersonas').value : 'No definido',
    profesion:document.getElementById('profesionPersonas').value != undefined && document.getElementById('profesionPersonas').value != '' ? document.getElementById('profesionPersonas').value : 'No definido',
    genero: valorSeleccionG.options[valorSeleccionG.selectedIndex].value != undefined && valorSeleccionG.options[valorSeleccionG.selectedIndex].value != '' ? valorSeleccionG.options[valorSeleccionG.selectedIndex].value : 'No definido' ,
    email: document.getElementById('inputEmailPersonas').value != undefined && document.getElementById('inputEmailPersonas').value != '' ? document.getElementById('inputEmailPersonas').value : 'No definido',
    celular: document.getElementById('telefonoPersonas').value != undefined && document.getElementById('telefonoPersonas').value != '' ? document.getElementById('telefonoPersonas').value : 'No definido',
    direccion1: document.getElementById('inputDirecPersonas').value != undefined && document.getElementById('inputDirecPersonas').value != '' ? document.getElementById('inputDirecPersonas').value : 'No definido',
    direccion2: document.getElementById('inputDirecPersonas2').value != undefined && document.getElementById('inputDirecPersonas2').value != '' ? document.getElementById('inputDirecPersonas2').value : 'No definido',
    region: valorSeleccionR.options[valorSeleccionR.selectedIndex].value != undefined && valorSeleccionR.options[valorSeleccionR.selectedIndex].value != '' ? valorSeleccionR.options[valorSeleccionR.selectedIndex].value : 'No definido' ,
    comuna: valorSeleccionC.options[valorSeleccionC.selectedIndex].value != undefined && valorSeleccionC.options[valorSeleccionC.selectedIndex].value != '' ? valorSeleccionC.options[valorSeleccionC.selectedIndex].value : 'No definido' ,
    zip: document.getElementById('inputCodPostalPersonas').value != undefined && document.getElementById('inputCodPostalPersonas').value != '' ? document.getElementById('inputCodPostalPersonas').value : 'No definido',
    motivacion: document.getElementById('motivacionTexto').value != undefined && document.getElementById('motivacionTexto').value != '' ? document.getElementById('motivacionTexto').value : 'No definido'
}
// Hacer vista previa de la carta del registro
    $(document).ready(function () {
        $('#divModalPersonas').html(
            `
            <div class="fondo-panel border border-dark-subtle">
            <h1 class="text-center m-3"> Formulario personas S.U.A</h1>
            <ul>
                <li>Nombre : ${oDatosFormulario.nombre}</li>
                <li>Apellido Paterno : ${oDatosFormulario.apellido}</li>
                <li>Apellido Materno : ${oDatosFormulario.apellido2}</li>
                <li>RUT : ${oDatosFormulario.rut}</li>
                <li>F.Nacimiento : ${oDatosFormulario.nacimiento}</li>
                <li>Edad : ${oDatosFormulario.edad}</li>
                <li>Profesion : ${oDatosFormulario.profesion}</li>
                <li>Genero : ${oDatosFormulario.genero}</li>
                <li>E-Mail : ${oDatosFormulario.email}</li>
                <li>Celular : ${oDatosFormulario.celular}</li>
                <li>Dirección 1 : ${oDatosFormulario.direccion1}</li>
                <li>Dirección 2 : ${oDatosFormulario.direccion2}</li>
                <li>Region : ${oDatosFormulario.region}</li>
                <li>Comuna : ${oDatosFormulario.comuna}</li>
                <li>Codigo Postal : ${oDatosFormulario.zip}</li>            
            </ul>
            <label>Motivacion : </label>
            <p>${oDatosFormulario.motivacion}</p>
            <div>
            `
        )

        $('#divModalPersonasEnviar').html(`
        <p class="lead m-3"> Postulación de usuario nuevo enviada con éxito.😁 
            En los próximos días serás contactado por el e-mail y se te actualizará sobre tu status.
        </p>
        `);
    });

}