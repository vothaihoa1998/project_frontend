$('.dropdown').on('click', function(e) {
    var target = $(e.target);
    var dropdown = target.closest('.dropdown');
    return !dropdown.hasClass('open') || !target.hasClass('dropdown-menu__search__input');
});

(function($) { // Begin jQuery
    $(function() { // DOM ready
        // Toggle open and close nav styles on click
        $('#nav-toggle').click(function() {
            $('nav ul').slideToggle();
        });
        // Hamburger to X toggle
        $('#nav-toggle').on('click', function() {
            this.classList.toggle('active');
        });
    }); // end DOM ready
})(jQuery); // end jQuery

// slick

$(document).ready(function(){
    $('.slick-banner').slick({
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        pauseOnDotsHover:true,
        autoplaySpeed:1200,
        dots: true,
        arrows: false,
        infinite: true

        // dots: true,
        // infinite: true,
        // speed: 300,
        // slidesToShow: 1,
        // adaptiveHeight: true
    });
});

$(document).ready(function(){
    $('.home-courses-events').slick({
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        pauseOnDotsHover:true,
        autoplaySpeed:1200,
        dots: true,
        arrows: false,
        infinite: true

        // dots: true,
        // infinite: true,
        // speed: 300,
        // slidesToShow: 1,
        // adaptiveHeight: true
    });
});

// $(document).ready(function(){
//     $('.home-book').slick({
//         dots: true,
//         infinite: true,
//         speed: 300,
//         slidesToShow: 1,
//         adaptiveHeight: true
//     });
//
// });



