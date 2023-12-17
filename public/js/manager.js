$(document).ready(function () {
    $(document).on("click", "button.cancel", onCancel);

    function onCancel() {
        window.location.href = "/manager"
    }

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var form = document.querySelector('.needs-validation')
    form.addEventListener('submit', function (event) {
        event.preventDefault()
        event.stopPropagation()
        form.classList.add('was-validated')

        if (form.checkValidity()) {
            $.ajax({
                type: form.id ? "PUT" : "POST",
                url: `/api/managers${form.id && "/" + form.id}`,
                data: {
                    firstname: $('#firstname').val(),
                    lastname: $('#lastname').val(),
                    department: $('#department').val(),
                },
                success: () => {
                    window.location.href = "/manager"
                },
                error: (msg) => {
                    showAlert(msg.statusText)
                }
            })
        }
    }, false)
});