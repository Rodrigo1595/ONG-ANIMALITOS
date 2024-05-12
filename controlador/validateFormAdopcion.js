import { getKeys } from "../utils/api_keys_public.js";
$(document).ready(async function () {
  // Eventos
  $("input").focusout(function () {
    let flag = false;
    var value = $(this).val();
    if (value.length == 0) {
      flag = true;
    }
    if (
      $(this).attr("id") == "idNombreAdopcion" ||
      $(this).attr("id") == "idApellidoAdopcion"
    ) {
      if (value.length < 3 || value.length > 20) {
        flag = true;
      }
    }

    if ($(this).attr("id") == "idEmailAdopcion") {
      if (value.length < 15 || value.length > 100) {
        flag = true;
      }
    }

    if (flag) {
      $(this).removeClass("is-valid");
      $(this).addClass("is-invalid");
      if (!$(".btn-aceptar").attr("disabled")) {
        $(".btn-aceptar").attr("disabled", true);
      }
    } else {
      // Si el campo tiene contenido, elimina la clase 'is-invalid'
      $(this).removeClass("is-invalid");
      $(this).addClass("is-valid");
      $(".btn-aceptar").removeAttr("disabled");
    }
  });

  $("select").focusout(function () {
    var value = $(this).val();
    if (value.length == 0) {
      // Si el campo está vacío, añade la clase 'is-invalid'
      $(this).removeClass("is-valid");
      $(this).addClass("is-invalid");
      //Deshabilitar boton envio
      if (!$(".btn-aceptar").attr("disabled")) {
        $(".btn-aceptar").attr("disabled", true);
      }
    } else {
      $(this).removeClass("is-invalid");
      $(this).addClass("is-valid");
      $(".btn-aceptar").removeAttr("disabled");
    }
  });

  //Carga API
  let apiData = getKeys();
  // Revisar carga de DOM para luego poner los tooltips
  let data = await getData(apiData);
  let dataAleatoria = [];
    while (dataAleatoria.length < 6) {
        let element = await randomNoRepeats(data.data)
        dataAleatoria.push(element())
    }
  for (let index = 0; index < dataAleatoria.length; index++) {
    const element = dataAleatoria[index];
    const descripcionAdicional = element.desc_adicional.replace(/<p>|<\/p>/g, "");
    let htmlAnimal = `
            <div class="col-md-3 m-3 p-0">
              <div class="card shadow-card" style="width: 18rem">
                <img src="${element.imagen}" class="card-img-top img-form" alt="" />
                <div class="card-body">
                  <h5 class="card-title">${element.nombre}</h5>
                  <p class="card-text">
                    <ul>
                        <li>${element.tipo} </li>
                        <li>${capitalize(element.genero)}</li>
                        <li>${element.edad}</li>
                        <li>Ubicación: ${element.comuna} , ${element.region}</li>
                        
                    </ul>
                  </p>
                  <div class="d-flex justify-content-evenly">
                    <button type="button" class="btn btn-aceptar m-1" data-bs-toggle="modal" data-bs-target="#modalAdoptame">
                      Adoptame!
                    </button>
                    <a tabindex="0" class="btn btn-popover m-1" role="button" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-title="Adopta a ${element.nombre} " 
                    data-bs-content="${descripcionAdicional}">Más info</a>
                  </div>
                </div>
              </div>
            </div>
            `;
    $("#containerAnimales").append(htmlAnimal);
  }


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
      trigger: "manual",
    });
  }
});

// Llamar API externa para traer datos
async function getData(params) {
  try {
    let data = $.ajax({
      type: "GET",
      async: false,
      url: params.values[2].huachitos,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return data;
  } catch (error) {
    console.log("Error al traer datos :", error);
    throw error;
  }
}

function capitalize(cadena) {
    return cadena.charAt(0).toUpperCase() + cadena.slice(1);
}

// funcion para traer data random pero sin repetir
async function randomNoRepeats(array) {
    var copy = array.slice(0);
    return function() {
      if (copy.length < 1) { copy = array.slice(0); }
      var index = Math.floor(Math.random() * copy.length);
      var item = copy[index];
      copy.splice(index, 1);
      return item;
    };
  }
  
  