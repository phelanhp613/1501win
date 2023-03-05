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
				responsive: [
					{
						breakpoint: 380,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 4
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
		fn.SlickSyncing('.tab-for', '.tab-nav', 5, 5);
		fn.SlickSyncing('.transfer-tab-for', '.transfer-tab-nav', 3, 3);
		fn.copyToClipboard('.btn-copy');
	});
})(jQuery);