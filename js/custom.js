$(function () {
    
    //preloader
	$(window).on('load', function () {
		$('.preloader').delay(500).fadeOut(500);
	});
    
    //counter inilitize js
    jQuery(document).ready(function ($) {
        $('.counter').counterUp({
            delay: 10,
            time: 2500,
        });
    });

    //NavBg
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 200) {
            $('.navbar').addClass('navbg');
        }
    });

    //Back to TOp    
    $('.back-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500);
    });

    // back top button fadein fadeout / menu add class  
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 200) {
            $('.back-to-top').fadeIn(500);
        } else {
            $('.back-to-top').fadeOut(500);
        }
        if (scrolling > 200) {
            $('.navbar').addClass('navbg')
        } else {
            $(".navbar").removeClass('navbg');
        }
    });

    //animation scroll js
    var html_body = $('html, body');
    $('.navbar a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 130
                }, 1500, );
                return false;
            }
        }
    });

    //slick slider
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 1500,
        nextArrow: '.fa-long-arrow-right',
        prevArrow: '.fa-long-arrow-left',
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
                },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
                    }
                   ,
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
                    }
                ]
    });

    $('.all-partner').slick({
        infinite: true,
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 200,
        speed: 3000,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
                },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
                    }
                   ,
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
                    }
                ]
    });

    //play video
    $(document).ready(function () {
        $('.venobox').venobox();
    });

    //Modal Popup
    $(document).ready(function () {
        $('#exampleModalCenter').modal('show');
    });



});
