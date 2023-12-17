function showAlert(text) {
    $('#alert-text').html(text);
    $('#alert').removeClass('d-none').hide().fadeIn(1000);
    setTimeout(function () {
        $('#alert').fadeOut(1000);
    }, 2000);
}