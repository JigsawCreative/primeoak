var $ = jQuery;

$(document).ready(function() {
    let w = window.innerWidth;   
    if(w < 1200) {
        $('.contact-us').click(function() {
        $('.contact-col-1').toggleClass('show-column');
    });
    
    $('.contact__cross').click(function() {
        $('.contact-col-1').removeClass('show-column');
        $('.contact-col-2').removeClass('show-column');
    });
    
    $('.opportunities').click(function() {
        $('.contact-col-2').toggleClass('show-column');
    });    
    }
});