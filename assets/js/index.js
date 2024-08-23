$(document).ready(function() {
    $('#submitButton').click(function(event) {
        event.preventDefault(); 

        
        alert('Enviado');

        
        $(this).text('Enviado');

        
        $(this).attr('disabled', true);
    });
});
