var $ = jQuery;

$(document).ready(function() {
	if($('.ba-image-comparison').length || $('.post-ba-image-comparison').length) {
		$(window).load(function() {
		$(".ba_images_to_compare").twentytwenty();
		});
	}
});