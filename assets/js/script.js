$(function () {
    $('[data-toggle="popover"]').popover()
})

$('span').on('dblclick', function() {
    $(this).css('color', 'red');
})

$('#enviarCorreo').on('click', function() {
    alert('El correo fue enviado correctamente...');
})

$('.card-title').on('click', function() {
    $('.card-img-top').toggle('slow');
    $('.card-text').toggle('slow');
})