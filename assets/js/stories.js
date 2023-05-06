const stories = document.getElementById("modal-1");
const progressBar = document.querySelector(".progress .progress-bar");

let i = 0;
let numberOfStories = 1;
let pause = false;

if (stories && progressBar) {
  stories.addEventListener("show.bs.modal", () => {
    $(".stories svg").css("stroke-width", "0");
    $("#logo-stories").css("transform", "scale(0.25)");
    // get image filename
    let date = $("#story-container > img.shown")
      ?.attr("src")
      ?.split("/")
      .pop()
      .replace(/%20/g, " ")
      .split(".")
      .shift();
    $("#story-date").text(date ?? "");
    const interval = setInterval(() => {
      progressBar.style.width = `${i}%`;
      if (!pause) i++;
      if (i >= 104) {
        clearInterval(interval);
        $("#modal-1").modal("hide");
        i = 0;
      }
    }, 60);
  });

  stories.addEventListener("hide.bs.modal", () => {
    i = 104;
    pause = false;
    $("#logo-stories").css("transform", "none");
    // No idea why its auto-focusing on the DOM after close on safari
    $(".navbar-brand").css("outline", "none");
    setTimeout(() => {
      $("#top").focus();
      $(".navbar-brand").css("outline", "revert");
    }, 500);
  });
}

$(".modal-body").on("click", function () {
  $("#modal-1").modal("hide");
});

$("#story-container img").on("click", function (e) {
  e.preventDefault();
  e.stopPropagation();
  pause = !pause;
});
