$(function () {

    $('.slide-menu').hover(function () {
        $(this).children('ul').stop().slideToggle();
    });
});
