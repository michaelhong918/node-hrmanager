$(document).ready(function () {
    $(document).on("click", "button.cancel", onCancel);

    function onCancel() {
        window.location.href = "/employee"
    }
});