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
        setTimeout(function () {
            $('.ggmap').remove();
        }, 2000);
    });
    $('#show-smart-menu').click(function () {
        $('.smart-show').show();
    });
    $('#hide-smart-menu').click(function () {
        $('.smart-show').hide();
    });

    document.getElementById("nowYear").innerText = new Date().getFullYear();
});
