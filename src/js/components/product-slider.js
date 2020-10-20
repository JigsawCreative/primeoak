var $ = jQuery;

$(window).load(function() {
    $('.product-slider').flexslider({
        animation: "fade",
        //slideshowSpeed: 7000,
        animationSpeed: 600,
        animationLoop: false,
        pauseOnAction: false,
        controlNav: true,
        rtl: true,
        customDirectionNav: $(".custom-navigation a")
    });
});