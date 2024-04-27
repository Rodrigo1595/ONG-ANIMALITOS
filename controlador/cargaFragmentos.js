// JS INDEX

$(function () {
  var includes = $("[data-include]");
  $.each(includes, function () {
    var file = $(this).data("include") + ".html";
    $(this).load(file);
  });
});

// Iniciar reconocimiento tooltip
$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);
if (popoverList.length > 0 ) {
  const popover = new bootstrap.Popover(".popover-dismiss", {
    trigger: "focus",
  });
}
