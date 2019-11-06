$(document).ready(function(){

    // content //

    $('.about__toggle').click(function(){
        event.preventDefault();

        $('.about-content__box').hide();
        var href = $(this).attr('href');
        $(href).fadeIn();
    })

    // hide btn //

    $(window).scroll(function(){
        var windowheight = $(window).height()
        if( $(this).scrollTop() > windowheight ) {
            $('.scrollUp-wrapper').fadeIn();
        } else {
            $('.scrollUp-wrapper').fadeOut();
        }
    })


    // Scroll btn //

    $('.scrollUp-wrapper').click(function(){
        event.preventDefault();
        $('html').animate({scrollTop: 0}, 800);
    })


    $('.link-circle').click(function(){
        event.preventDefault();
        $('html').animate({scrollTop: 1200}, 800);
    })

})