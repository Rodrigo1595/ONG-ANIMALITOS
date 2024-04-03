
// JS INDEX

$(function(){
    var includes = $('[data-include]')
    $.each(includes, function () { 
        var file = $(this).data('include')+'.html'
        $(this).load(file)
    });
})

// Iniciar reconocimiento tooltip
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
  });
  

