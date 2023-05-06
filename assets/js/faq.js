$("#accordions").on("click", function () {
  if (
    $(".accordion-button.collapsed:not('#shamelessplugbutton')").length === 0
  ) {
    $("#shamelessplug").removeClass("hidden").addClass("shown");
    $("#accordions").off();
  }
});

$("#r-r").on("click", function () {
  this.href = "https://youtu.be/dQw4w9WgXcQ";
});
