(function ($) {
	"use strict";

	let fn = {
		SlickSlider: function (slider) {
			slider.slick({
				autoplay: true,
				autoplaySpeed: 2000,
			});
		},
		SlickSyncing: function (tabFor, tabNav, slidesToShow, slidesToScroll) {
			$(tabFor).slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: false,
			});
			$(tabNav).slick({
				slidesToShow: slidesToShow,
				slidesToScroll: slidesToScroll,
				infinite: false,
			});
			$(tabNav).on('click', '.slick-slide', function (event) {
				event.preventDefault();
				$(".slick-slide").removeClass('active');
				$(this).addClass('active');
				$(tabFor).slick('slickGoTo', $(this).data('slick-index'));
			});
		}
	}

	$(document).ready(function () {
		fn.SlickSlider($('.home-banner-slider'));
		fn.SlickSyncing('.tab-for', '.tab-nav', 5, 5);
		fn.SlickSyncing('.transfer-tab-for', '.transfer-tab-nav', 3, 3);
	});
})(jQuery);