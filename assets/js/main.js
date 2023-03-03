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
	            arrows: true,
	            fade: false,
	            infinite: false,
	            useTransform: true,
	            speed: 400,
	            adaptiveHeight: true,
	            asNavFor: tabNav,
            });
            $(tabNav).slick({
                slidesToShow: slidesToShow,
                slidesToScroll: slidesToScroll,
                dots: false,
                focusOnSelect: true,
                infinite: false,
	            asNavFor: tabFor,
            });
            $(tabNav).on('click', '.slick-slide', function (event) {
                event.preventDefault();
                var goToSingleSlide = $(this).data('slick-index');
	            $(tabFor).slick('slickGoTo', goToSingleSlide);
            });
        }
    }

	$(document).ready(function () {
        fn.SlickSlider($('.home-banner-slider'));
        fn.SlickSyncing('.tab-for', '.tab-nav', 5, 5);
		fn.SlickSyncing('.transfer-tab-for', '.transfer-tab-nav', 3, 3);
    });
})(jQuery);