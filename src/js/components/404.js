var $ = jQuery;

$(document).ready(function() {

    //trigger downloads sub menu
    $('.product-404').click(function() {
        $('.downloads').removeClass('sub-menu-open');
        $('.products').toggleClass('sub-menu-open');
    });
    
    //change product menu link on mobile

    let w = window.innerWidth;

    if(w < 1200) {
      $('.product-404').attr('href', '/products');
    } 
});