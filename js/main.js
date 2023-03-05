(function ($) {
	"use strict";

	let fn = {
		SlickSlider: function (slider) {
			slider.slick({
				autoplay: true,
				autoplaySpeed: 2000,
			});
		},
		SlickSyncing: function (tabFor, tabNav, slidesToShow, slidesToScroll, breakpoint380slidesToShow, breakpoint380slidesToScroll) {
			$(tabFor).slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: false,
			});
			$(tabNav).slick({
				slidesToShow: slidesToShow,
				slidesToScroll: slidesToScroll,
				infinite: false,
				responsive: [
					{
						breakpoint: 380,
						settings: {
							slidesToShow: breakpoint380slidesToShow,
							slidesToScroll: breakpoint380slidesToScroll
						}
					}
				]
			});
			$(tabNav).on('click', '.slick-slide', function (event) {
				event.preventDefault();
				$(".slick-slide").removeClass('active');
				$(this).addClass('active');
				$(tabFor).slick('slickGoTo', $(this).data('slick-index'));
			});
		},

		copyToClipboard: function (btn) {
			$(btn).on('click', function () {
				const parent = $(this).parent('.copy-group');
				var aux = document.createElement("input");
				aux.setAttribute("value", parent.find('.copy-content').html());
				console.log(parent.find('.copy-content').html());
				document.body.appendChild(aux);
				aux.select();
				document.execCommand("copy");
				document.body.removeChild(aux);
				$(this).html($(this).data("copied"));
			})
		}
	}

	$(document).ready(function () {
		fn.SlickSlider($('.home-banner-slider'));
		fn.SlickSyncing('.tab-for', '.tab-nav', 5, 5, 4, 4);
		fn.SlickSyncing('.transfer-tab-for', '.transfer-tab-nav', 3, 3, 3, 3);
		fn.copyToClipboard('.btn-copy');
	});
})(jQuery);