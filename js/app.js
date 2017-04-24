jQuery(document).ready(function($) {
	$('#sliders').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		arrow: true,
		prevArrow: $('.prev-arr'),
		nextArrow: $('.next-arr')
	});
});