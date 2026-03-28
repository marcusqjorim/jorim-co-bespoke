$(document).ready(function () {
    // Scroll-based animations
    $(window).scroll(function () {
        $('.animate__animated').each(function () {
            const elementPosition = $(this).offset().top;
            const scrollPosition = $(window).scrollTop() + $(window).height();
            if (scrollPosition > elementPosition) {
                $(this).addClass('animate__fadeIn');
            }
        });
    });

    // Interactive elements
    $('.design-item img').hover(function() {
        $(this).toggleClass('animate__pulse');
    });

    // Smooth scroll for navigation
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });
});