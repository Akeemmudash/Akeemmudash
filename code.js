(function ($) {
  // variables
  (elementWidth = $("ul").width()),
    (containerWidth = $("nav").width()),
    (difference = elementWidth - containerWidth),
    (finalWidth = difference * 1.5),
    (element = $("ul"));

  // active on click
  $("li").on("click", function () {
    $("li").removeClass("active");
    $(this).addClass("active");
  });
})(jQuery);
//  = document.querySelector("");
// const nav = document.querySelector("#nav-bar");
function openNav() {
  const slide = document.querySelector("#nav-bar");
  slide.classList.toggle("nav-slide-up");
}
