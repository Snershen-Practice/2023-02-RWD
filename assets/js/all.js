$(document).ready(function () {
  $("#header").load("ajax/header.html");
  $("#footer").load("ajax/footer.html");
  $(".btn-like").on("click", function (e) {
    e.preventDefault();
    $(this).children(".fa-regular").toggle();
    $(this).children(".fa-solid").toggle();
  });
});
