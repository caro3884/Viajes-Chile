$(function() {

    //tooltip para imagenes con descripcion del lugar
    $('[data-toggle="tooltip"]').tooltip()

    //seccion cards para apareder y desaparecer el texto
    $(".card-title").click(function() {
        $(".card-text").toggle();
    });

});