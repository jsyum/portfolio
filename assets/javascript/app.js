$(document).ready(function() {
  $("html").niceScroll();
});

$("#splashpage").append("<div id=clickme>Click me</div>");

$("#clickme").on("click", () => {
  console.log("Clicked");
  window.location = "#about";
  //   scrollIntoView(true);
});

// $("#changepage").on("click", () => {
//   console.log("Clicked");
//   $("body").addClass("new-background");
// });
