var $ = jQuery;

(function() {

	// store the slider in a local variable
	var $window = $(window),
		flexslider = { vars:{} };

	// tiny helper function to add breakpoints
	function getGridSize() {
		return (window.innerWidth < 100 ) ? 1 : 1;
	}

	$window.ready(function() {

		 $('.full-image-item-flexslider-container').each(function() {

			$(this).find(".flexslider").flexslider({
				animation: "slide",
				slideshowSpeed: 12000,
				animationLoop: true,
				controlNav: false,
				customDirectionNav: $(this).find(".custom-navigation a"),
				minItems: getGridSize(), // use function to pull in initial value
				maxItems: getGridSize(), // use function to pull in initial value
				start: function(slider) {
					flexslider = slider;
				},
			});
		});
	});
	
	// check grid size on resize event
	$window.resize(function() {
		var gridSize = getGridSize();
		flexslider.vars.minItems = gridSize;
		flexslider.vars.maxItems = gridSize;
	});	
}());