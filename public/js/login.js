$(document).ready(function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var form = document.querySelector('.needs-validation')
    form.addEventListener('submit', function (event) {
        event.preventDefault()
        event.stopPropagation()
        form.classList.add('was-validated')

        if (form.checkValidity()) {
            $.ajax({
                type: "POST",
                url: '/api/login',
                data: {
                    username: $('#username').val(),
                    email: $('#email').val(),
                    password: $('#password').val(),
                },
                success: () => {
                    window.location.href = "/employee"
                },
                error: () => {
                    showAlert("Looks like the credentials you entered don't match!")
                }
            })
        }
    }, false)
});