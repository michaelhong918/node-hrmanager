$(document).ready(function () {
    $(document).on("click", "button.delete", handleManagerDelete);
    $(document).on("click", "button.edit", handleManagerEdit);
    $(document).on("click", "button.create", handleManagerCreate);

    function handleManagerDelete() {
        var id = $(this)
            .closest('[data-manager]')
            .attr("data-manager");
        deleteManager(id);
    }

    function handleManagerEdit() {
        var id = $(this)
            .closest('[data-manager]')
            .attr("data-manager");
        window.location.href = `/manager/${id}`;
    }

    function handleManagerCreate() {
        window.location.href = "/manager/create";
    }

    function deleteManager(id) {
        $.ajax({
            method: "DELETE",
            url: "/api/managers/" + id
        })
            .then(function () {
                $(`[data-manager=${id}]`).remove();
            });
    }
});