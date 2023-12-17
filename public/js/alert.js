function showAlert(text) {
    $('#alert-text').html(text);
    $('#alert').removeClass('d-none').hide().fadeIn(300);
    setTimeout(function () {
        $('#alert').fadeOut(300);
    }, 2000);
}