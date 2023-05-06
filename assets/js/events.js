const eventCard = document.getElementById("modal-3");

if (eventCard) {
  eventCard.addEventListener("show.bs.modal", (e) => {
    const source = e.relatedTarget;
    const hasDuration = !source.hasAttribute("data-event-hidetime");
    const duration =
      Math.abs(source.style?.gridRowStart - source.style?.gridRowEnd) / 4;
    const imgSource =
      source.getElementsByTagName("img")[0].attributes["src"]?.value;
    const eventTitle = source.getElementsByTagName("span")[0]?.innerText;
    $("#event-logo").attr("src", imgSource ?? "assets/img/logos/DeerHacks.svg");
    $("#event-host").text(
      imgSource?.split("/").pop().replace(/%20/g, " ").split(".").shift() ??
        "DeerHacks"
    );
    //source.attributes["data-event-title"]?.value ?? "uh oh"
    $("#event-title").text(eventTitle ?? "uh oh");
    if (hasDuration) {
      $("#event-duration-chip").removeClass("d-none");
      $("#event-duration").text(
        duration < 1 ? `${duration * 60} mins` : `${duration} hr`
      );
    } else {
      $("#event-duration-chip").addClass("d-none");
    }

    $("#event-type").text(
      source.attributes["data-event-type"]?.value ?? "Activity"
    );

    $("#event-location").text(
      source.attributes["data-event-location"]?.value ?? "behind you"
    );
    $("#event-description").text(
      source.attributes["data-event-description"]?.value ??
        "oops something went wrong"
    );
  });
}
