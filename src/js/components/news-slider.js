var $ = jQuery;

$(window).load(function() {
    $('.news-slider').flexslider({
        animation: "fade",
        slideshowSpeed: 7000,
        animationSpeed: 600,
        animationLoop: true,
        pauseOnAction: false,
        //controlNav: true,  
        rtl: true,
        customDirectionNav: $(".custom-navigation a")
    });
});