import { getKeys } from "../utils/api_keys_public.js";

$(document).ready(function () {
    // Eventos
    $("input").focusout(function () {

        let flag = false
        var value = $(this).val();
        if (value.length == 0) {
            flag = true
        }
        if ($(this).attr('id') == 'idNombreAdopcion' || $(this).attr('id') == 'idApellidoAdopcion') {
            if (value.length < 3 || value.length > 20) {
                flag = true
            }
        }

        if ($(this).attr('id') == 'idEmailAdopcion') {
            if (value.length < 15 || value.length > 100) {
                flag = true
            }
        }

        if (flag) {
            $(this).removeClass("is-valid");
            $(this).addClass("is-invalid");
            if (!$('.btn-aceptar').attr('disabled')) {
                $('.btn-aceptar').attr('disabled', true)
            }
        } else {
            // Si el campo tiene contenido, elimina la clase 'is-invalid'
            $(this).removeClass("is-invalid");
            $(this).addClass("is-valid");
            $('.btn-aceptar').removeAttr('disabled')
        }
    });

    $("select").focusout(function () {
        var value = $(this).val();
        if (value.length == 0) {
            // Si el campo está vacío, añade la clase 'is-invalid'
            $(this).removeClass("is-valid");
            $(this).addClass("is-invalid");
            //Deshabilitar boton envio
            if (!$('.btn-aceptar').attr('disabled')) {
                $('.btn-aceptar').attr('disabled', true)
            }
        } else {
            $(this).removeClass("is-invalid");
            $(this).addClass("is-valid");
            $('.btn-aceptar').removeAttr('disabled')
        }
    });
    //Carga API
    // Revisar carga de DOM para luego poner los tooltips
    let apiData = getKeys()
    $.ajax({
        type: "GET",
        url: apiData.values[0].cat_base_url + "/images/search?limit=10",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": apiData.values[0].cat_api_key
        },
        success: function (response) {
            response.forEach(element => {
                let htmlAnimal = `
                    <div class="col-md-3 m-3 p-0">
                      <div class="card shadow-card" style="width: 18rem">
                        <img src="${element.url}" class="card-img-top img-form" alt="" />
                        <div class="card-body">
                          <h5 class="card-title">Placeholder</h5>
                          <p class="card-text"></p>
                          <div class="d-flex justify-content-evenly">
                            <button type="button" class="btn btn-aceptar m-1" data-bs-toggle="modal" data-bs-target="#modalAdoptame">
                              Adoptame!
                            </button>
                            <a tabindex="0" class="btn btn-popover m-1" role="button" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-title="Adopta a placeholder" 
                            data-bs-content="Placeholder contenido">Más info</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    `
                $("#containerAnimales").append(htmlAnimal);
            });
        },
        error: function (error) {
            console.log('No se pudo traer datos', error)
        }
    });

});

$(window).on('load', function () {
    // Iniciar reconocimiento tooltip
    $('[data-toggle="tooltip"]').tooltip();


    const popoverTriggerList = document.querySelectorAll(
        '[data-bs-toggle="popover"]'
    );
    const popoverList = [...popoverTriggerList].map(
        (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
    );
    if (popoverList.length > 0) {
        const popover = new bootstrap.Popover(".popover-dismiss", {
            trigger: "focus",
        });
    }
});

