var $ = jQuery;

$(document).ready(function() {
	$('.before').mouseenter(function() {
		$('.before').fadeOut(1500);
	});
});

if($('.image-comparison').length) {
	$(window).load(function() {
	  $("#images_to_compare").twentytwenty();
	});
}