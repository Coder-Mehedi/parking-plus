$(document).ready(function() {
    // $('#menuBtn').on('click', () => {
    //     console.log('clicked');
    // });

    /* Hamburger menu animation */
    $('.menu-btn').click(function() {

        $(this).toggleClass('open');
    });

    /* Menu fade/in out on mobile */
    $(".menu-btn").click(function(e) {
        e.preventDefault();
        $(".mobile-menu").toggleClass('open');
    });

});