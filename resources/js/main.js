$(document).ready( function () {

  var lastPosition = 0;
  var $navHeight = $("nav").height();

  $(window).scroll( function() {
    $scrollDistance = $(this).scrollTop();
    if ($scrollDistance > (lastPosition+50)) {
      $("nav").animate({top: -$navHeight},150);
      lastPosition = $scrollDistance;
    }

    if ($scrollDistance < lastPosition) {
      $("nav").animate({top: 0},150);
      lastPosition = $scrollDistance;
    }

  });


  $('.carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    adaptiveHeight: true
  });

})