$(document).ready(function () {
    $(document).on("click", "button.cancel", onCancel);

    function onCancel() {
        window.location.href = "/employee"
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
                url: `/api/employees${form.id && "/" + form.id}`,
                data: {
                    firstname: $('#firstname').val(),
                    lastname: $('#lastname').val(),
                    email: $('#email').val(),
                    address: $('#address').val(),
                    salary: $('#salary').val(),
                    position: $('#position').val(),
                    status: $('#status').val(),
                    managerId: $('#manager').val(),
                    hireDate: $('#hireDate').val(),
                    terminateDate: $('#terminateDate').val(),
                },
                success: () => {
                    window.location.href = "/employee"
                },
                error: (msg) => {
                    showAlert(msg.statusText)
                }
            })
        }
    }, false)
});