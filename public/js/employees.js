$(document).ready(function () {
  $(document).on("click", "button.delete", handleEmployeeDelete);
  $(document).on("click", "button.edit", handleEmployeeEdit);
  $(document).on("click", "button.create", handleEmployeeCreate);

  function handleEmployeeDelete() {
    var id = $(this)
      .closest('[data-employee]')
      .attr("data-employee");
    deleteEmployee(id);
  }

  function handleEmployeeEdit() {
    var id = $(this)
      .closest('[data-employee]')
      .attr("data-employee");
    window.location.href = `/employee/${id}`;
  }

  function handleEmployeeCreate() {
    window.location.href = "/employee/create";
  }

  function deleteEmployee(id) {
    $.ajax({
      method: "DELETE",
      url: "/api/employees/" + id
    })
      .then(function () {
        $(`[data-employee=${id}]`).remove();
      });
  }
});