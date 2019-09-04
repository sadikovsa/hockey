$(function () {

	// sliders
	$('.header-slider').owlCarousel({
		loop: true,
		margin: 0,
		nav: true,
		navText: ['<img src="./img/icons/arrow-left.png" class="header-slider__arrows header-slider__left">', '<img src="./img/icons/arrow-right.png" class="header-slider__arrows header-slider__right">'],
		navContainer: '.header-slider__controls',
		dots: false,
		items: 1,
		slideBy: 1,
		smartSpeed: 1000,
		autoplaySpeed: 1000,
	});
	
	$('.main-news__slider').owlCarousel({
		loop: true,
		margin: 0,
		nav: false,
		dots: true,
		items: 3,
		slideBy: 1,
		smartSpeed: 1000,
		autoplaySpeed: 1000,
		responsive: {
			300: {
				items: 1,
			},
			768: {
				items: 2
			},
			1024: {
				items: 3
			},
			1200: {
				items: 3
			},
		}
	});
	
	// masks
	$(".phone").mask("+99(999) 999-99-99");

	// mobile menu
	if ($(window).width() <= 768) {
		// Mobile Menu
		var burger = $('#burgerBtn');
		var mobileMenuBlock = $('.header-nav');

		burger.on('change', function () {
			mobileMenuBlock.toggleClass('show');
		});

		$(document).on('click', function (e) {
			var target = e.target;
			if (!target.closest('.burger') && !$(target).closest(".header-nav").length) {
				burger.prop('checked', false);
				mobileMenuBlock.removeClass('show');
			}
		});
	}
	
	
});