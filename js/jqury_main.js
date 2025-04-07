var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 5.2,
  spaceBetween: 30,
});
// --------------------------------------------------------------
var swiper = new Swiper(".mySwiper2", {
  initialSlide: 1,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 5,
    stretch: 10,
    depth: 90,
    modifier: 4.5,
    slideShadows: true,
  },
});
// --------------------------------------------------------------
$('a[href="#"]').click(function (e) {
  e.preventDefault();
});

// // --------------------------------------------------------------
var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 11.8,
  spaceBetween: 11,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// --------------------------------------------------------------
$(function () {
  $(".qna_answer").hide();
  $(".qna_list>ul>li").mouseenter(function () {
    $(this).children(".qna_answer").stop().slideDown();
  });
  $(".qna_list>ul>li").mouseleave(function () {
    $(this).children(".qna_answer").stop().slideUp();
  });
});

// ----------------------------------------------------------------
// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.gnb_wrap').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.gnb_wrap').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.gnb_wrap').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}