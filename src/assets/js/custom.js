$(document).ready(function() {
    // grab the initial top offset of the navigation
    var stickyNavTop = $('nav').offset().top;

    // our function that decides weather the navigation bar should have "fixed" css position or not.
    var stickyNav = function(){
        var scrollTop = $(window).scrollTop(); // our current vertical position from the top

        // if we've scrolled more than the navigation, change its position to fixed to stick to top,
        // otherwise change it back to relative
        if (scrollTop > stickyNavTop) {
            $('nav').addClass('sticky');
            $('.change-logo').attr('src','../../assets/img/anatel-logo2.png');
            $('.navbar').css('background', '#fff!important');
            $('.navbar').css('height', '60px');
            $('.navbar-nav > li > a').css('color', '#333');
            $('.navbar-collaspse').removeClass('show');

        } else {
            $('nav').removeClass('sticky');
            $('.change-logo').attr('src','../../assets/img/anatel-ventures-white.png');;
            $('.navbar').css('background', 'transparent');
            $('.navbar').css('height', '80px');
            $('.navbar-nav > li > a').css('color', '#fff');
            $('.navbar-collaspse').removeClass('show');
           

        }
    };

    stickyNav();
    // and run it again every time you scroll
    $(window).scroll(function() {
        stickyNav();
    });


// Carousel Show

    $('.customer-logos').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});