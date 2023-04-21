const heroImg = document.querySelector(".hero-img");

$(function () {
  $(".menu-btn").click(function () {
    const img = $(".menu-btn img");
    $(".menu-show").slideToggle(100);
    document.body.classList.toggle("body-color");
    if (img.attr("src") === "./assets/images/icon-menu.svg") {
      img.attr("src", "./assets/images/icon-menu-close.svg");
    } else {
      img.attr("src", "./assets/images/icon-menu.svg");
    }
  });
});
