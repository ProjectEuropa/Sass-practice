$(function () {

    $('.slide-menu').hover(function () {
        $(this).children('ul').stop().slideToggle();
    });
});
//    function collapseNavbar() {
//        if ($("#main-menu").offset().top > 50) {
//            $("#main-menu").addClass("fixed-top");
//        } else {
//            $("#main-menu").removeClass("fixed-top");
//        }
//    }
//
//    $(window).scroll(collapseNavbar);
//    $(document).ready(collapseNavbar);