 const b = document.querySelector('.header_nav'),
     c = document.querySelector('.header_content'),
     d = document.querySelector('.header_content .social '),
     e = document.querySelector('.header_nav-menu'),
     f = document.querySelector('.btn-burger');


 (function() {
     b && c && (a(), window.addEventListener("scroll", function() { return a() }));

     f && f.addEventListener("click", function() {
        e.classList.toggle("open"), f.classList.toggle("open");
     })

 })();

 function a() {
     scrollY > b.clientHeight ? (b.classList.add("scrolled"), d.classList.add("scrolled")) : scrollY < b.clientHeight && (b.classList.remove("scrolled"), 
        d.classList.remove("scrolled"))
 }

 "use strict";

 (function () {
    new Swiper (".review_slider", {
        slidesPerView: 1,
        loop: !0,
        navigation: {
            nextEl: ".review_slider-next", 
            prevEl: ".review_slider-prev",
        },
        grabCursor: !0,
        breakpoints: {888: {slidesPerView: 3 } }
    })
 })();


 $(function() {
    let link = $('.header_nav-menu a');

    link.on('click',function(e){
        e.preventDefault();

        link.removeClass('active');

        let selector = $(this).addClass('active').attr('href');
        let target = $(selector);

        $('html,body').animate({scrollTop:target.offset().top-88}, 1500);

    })
 });