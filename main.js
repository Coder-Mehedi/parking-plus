$(() => {
    /* Hamburger menu animation */
    $('.menu-btn').on('click', () => {
        $('.mobile-menu').toggleClass('open');
        // $('.mobile-menu').slideToggle();
    });
});