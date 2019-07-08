$(() => {
    /* Hamburger menu animation */
    $('.menu-btn').on('click', () => {
        $('.mobile-menu').toggleClass('open');
        // $('.mobile-menu').slideToggle();
    });


});
$(window).scroll(() => {
    if ($(window).scrollTop() > 510) {
        $('.white-car').addClass('white-car-animation');
        $('.red-car').addClass('red-car-animation');
    } else {
        $('.white-car').removeClass('white-car-animation');
        $('.red-car').removeClass('red-car-animation');
    }

    if ($(window).scrollTop() > 760) {
        $('.park-car').addClass('park-car-animation');
        $('.bar').addClass('bar-animation');
        $('.orange-car').addClass('orange-car-animation')
    } else {
        $('.park-car').removeClass('park-car-animation');
        $('.bar').removeClass('bar-animation');
        $('.orange-car').removeClass('orange-car-animation')
    }


})