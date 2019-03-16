$("#splashpage").append("<div id=clickme>Click me</div>");

$("#changepage").on("click", () => {
  $("body").attr(
    "style",
    "background-image: url('assets/images/laptop-plant.jpg')"
  );
  $("#changepage").remove();
});

// $("#changepage").on("click", () => {
//   console.log("Clicked");
//   $("body").addClass("new-background");
// });
