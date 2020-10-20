var $ = jQuery;

$(document).ready(function() {
    $('#menu-open').click(function() {
        $('#menu-open span').toggleClass('open');
        $('.nav').slideToggle('slow');  
    });

    //products sub menu
    $('.products-menu-link>a').click(function() {
        $('.downloads').removeClass('sub-menu-open');
        $('.products').toggleClass('sub-menu-open');
    });  

    //downloads sub menu
    $('.download-menu-link').click(function() {
        $('.products').removeClass('sub-menu-open');
        $('.downloads').toggleClass('sub-menu-open');
    });

    //change product menu link on mobile

    let w = window.innerWidth;

    if(w < 1200) {
      $('.products-menu-link>a').attr('href', '/products');
      $('.download-menu-link>a').attr('href', '/downloads');
    } 

  //collapsible menus function
  function setup_collapsible_submenus() {
    var $menu = $('#mobile_menu'),
      top_level_link = '#mobile_menu .menu-item-has-children > a';
      console.log($menu);
    $menu.find('a').each(function() {
      $(this).off('click');
       
      if ( $(this).is(top_level_link) ) {
        $(this).attr('href', '#');
      }
       
      if ( ! $(this).siblings('.sub-menu').length ) {
        $(this).on('click', function(event) {
          $(this).parents('.menu-button').trigger('click');
        });
      } else {
        $(this).on('click', function(event) {
          event.preventDefault();
          $(this).parent().toggleClass('visible');
        });
      }
    });
  }
   
  $(window).load(function() {
    setTimeout(function() {
      setup_collapsible_submenus();
    }, 700);
  });
});