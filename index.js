$(function () {

    $('.slide-menu').hover(function () {
        $(this).children('ul').stop().slideToggle();
    });
    $('.slick-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    });
    $('#calendar').fullCalendar();
    document.getElementById("nowYear").innerText = new Date().getFullYear();
});
