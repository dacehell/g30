$(function () {
  $('[ data-bs-toggle="tooltip"]').tooltip();

  $("#enviar").click(function () {
    alert("El correo fue enviado");
  });
  $("body").on("dblclick", "h3", function () {
    $(this).css("color", "red");
  });

  $(".card-title").click(function () {
    $(".card-text").toggle();
  });

  $("p").click(function () {
    $(this).css("background-color", "green");
  });
});
