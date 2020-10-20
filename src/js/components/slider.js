var $ = jQuery;

$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "fade",
    slideshowSpeed: 7000,
    animationSpeed: 600,  
    animationLoop: true,
	controlNav: true,  
    rtl: true,
  });
});