var banner = document.querySelector("#mlh-badge svg");
var navmenu = document.querySelector(".nav-menu");
var checklist = document.querySelector("#checklist-float");

if (banner) {
  function draw() {
    banner.classList.add("active");
  }

  function erase() {
    banner.classList.remove("active");
  }

  setTimeout(draw, 100);
}

if (navmenu && checklist) {
  var element = navmenu.children[0];
  var width = element.offsetWidth;
  checklist.classList.remove("hidden");
  checklist.classList.add("shown");
  window.addEventListener("scroll", function () {
    var scrollDistance = window.pageYOffset;

    if (scrollDistance > 200) {
      element.style.marginLeft = `calc(99.5% - ${width}px)`;
    } else {
      element.style.marginLeft = "0";
    }

    if (
      $(window).scrollTop() + $(window).height() >
      $(document).height() - 200
    ) {
      checklist.classList.remove("shown");
      checklist.classList.add("hidden");
    } else {
      checklist.classList.remove("hidden");
      checklist.classList.add("shown");
    }
  });
}
