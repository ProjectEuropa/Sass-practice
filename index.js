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

    $('#login-button').click(function () {
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
        }
        $('#register-button').removeClass('active');
        $('#register').hide();
        $('#login').show();
    });
    $('#register-button').click(function () {
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
        }
        $('#login-button').removeClass('active');
        $('#login').hide();
        $('#register').show();
    });
    $('#remove').click(function () {
        $('#loading').show().activity({
            segments: 12,
            width: 12,
            space: 6,
            length: 28,
            color: '#fff',
            speed: 1.5
        });
        setTimeout(function () {
            $('.ggmap').remove();
            $('#loading').hide();
        }, 2000);
    });
    $('#show-smart-menu').click(function () {
        $('.smart-show').show();
    });
    $('#hide-smart-menu').click(function () {
        $('.smart-show').hide();
    });
    $('#smart-show-accordion').click(function () {
        $('.smart-show-accordion-sub-menu').show();
        $('#smart-hide-accordion').show();
        $(this).hide();
    });
    $('#smart-hide-accordion').click(function () {
        $('.smart-show-accordion-sub-menu').hide();
        $('#smart-show-accordion').show();
        $(this).hide();
    });

    document.getElementById("nowYear").innerText = new Date().getFullYear();
});
