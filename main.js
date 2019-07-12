$(() => {
    /* Hamburger menu animation */
    $('.menu-btn').on('click', () => {
        $('.mobile-menu').toggleClass('open');
        // $('.mobile-menu').slideToggle();
    });


});
$(window).scroll(() => {
    if ($(window).scrollTop() > 588 && $(window).scrollTop() < 1366) {
        $('.white-car').addClass('white-car-animation');
        $('.red-car').addClass('red-car-animation');
    } else {
        $('.white-car').removeClass('white-car-animation');
        $('.red-car').removeClass('red-car-animation');
    }

    if ($(window).scrollTop() > 1183 && $(window).scrollTop() < 1975) {
        $('.off-park-car').addClass('off-park-car-animation');
        $('.bar').addClass('bar-animation');
        $('.light').addClass('light-animation')
        $('.orange').addClass('orange-animation');
        $('.red-pink').addClass('red-pink-animation');
    } else {
        $('.off-park-car').removeClass('off-park-car-animation');
        $('.bar').removeClass('bar-animation');
        $('.light').removeClass('light-animation')
        $('.orange').removeClass('orange-animation');
        $('.red-pink').removeClass('red-pink-animation');

    }


})

$('.play-btn').on('click', () => {
    $('.play-btn').fadeOut('slow', () => {
        $(".video iframe").css("z-index", "1");
    });
})