AOS.init({ duration: 1000 });

$(document).ready(function () {
  $(".testimonials").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    dots: true,
    adaptiveHeight: true,
  });
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 200) {
    document.querySelector("header").classList.add("fixHeader");
  }

  if (window.pageYOffset <= 0) {
    document.querySelector("header").classList.remove("fixHeader");
  }
});
