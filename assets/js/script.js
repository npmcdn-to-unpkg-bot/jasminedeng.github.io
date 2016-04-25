$(document).ready(function() {
  
	$(window).scroll(function() {
		if ($('body').scrollTop() > 250) {
			$('#header-container').addClass('header-inactive');
			$('.header-item').css('font-size', 15);
			$('.website-name').css('font-size', 25);
			$('.header-item').css('top', 75);
			$('.website-name').css('top', 70);
		} else {
			$('#header-container').removeClass('header-inactive');
			$('.header-item').css('font-size', 25);
			$('.website-name').css('font-size', 45);
			$('.header-item').css('top', '50%');
			$('.website-name').css('top', '50%');
		}
	});


	$('#elem1').click(function() {
		if (parseInt($('.page-overlay').css('z-index')) != 5) {
			$('#timeline-1').css('opacity', 1);
			$('#timeline-1').css('z-index', 10);
			$('.page-overlay').css('background-color', 'rgba(0,0,0,0.5)');
			$('.page-overlay').css('z-index', 5);
			$('.photo-viewer').css('background-color', 'white');
			$('.timeline-element').css('z-index', 0);
		}
	});

	$('#elem2').click(function() {
		if (parseInt($('.page-overlay').css('z-index')) != 5) {
			$('#timeline-2').css('opacity', 1);
			$('#timeline-2').css('z-index', 10);
			$('.page-overlay').css('background-color', 'rgba(0,0,0,0.5)');
			$('.page-overlay').css('z-index', 5);
			$('.photo-viewer').css('background-color', 'white');
			$('.timeline-element').css('z-index', 0);
		}
	});

	$('#elem3').click(function() {
		if (parseInt($('.page-overlay').css('z-index')) != 5) {
			$('#timeline-3').css('opacity', 1);
			$('#timeline-3').css('z-index', 10);
			$('.page-overlay').css('background-color', 'rgba(0,0,0,0.5)');
			$('.page-overlay').css('z-index', 5);
			$('.photo-viewer').css('background-color', 'white');
			$('.timeline-element').css('z-index', 0);
		}
	});

	$('#elem4').click(function() {
		if (parseInt($('.page-overlay').css('z-index')) != 5) {
			$('#timeline-4').css('opacity', 1);
			$('#timeline-4').css('z-index', 10);
			$('.page-overlay').css('background-color', 'rgba(0,0,0,0.5)');
			$('.page-overlay').css('z-index', 5);
			$('.photo-viewer').css('background-color', 'white');
			$('.timeline-element').css('z-index', 0);
		}
	});

	$('#elem5').click(function() {
		if (parseInt($('.page-overlay').css('z-index')) != 5) {
			$('#timeline-5').css('opacity', 1);
			$('#timeline-5').css('z-index', 10);
			$('.page-overlay').css('background-color', 'rgba(0,0,0,0.5)');
			$('.page-overlay').css('z-index', 5);
			$('.photo-viewer').css('background-color', 'white');
			$('.timeline-element').css('z-index', 0);
		}
	});

	$('#elem6').click(function() {
		if (parseInt($('.page-overlay').css('z-index')) != 5) {
			$('#timeline-6').css('opacity', 1);
			$('#timeline-6').css('z-index', 10);
			$('.page-overlay').css('background-color', 'rgba(0,0,0,0.5)');
			$('.page-overlay').css('z-index', 5);
			$('.photo-viewer').css('background-color', 'white');
			$('.timeline-element').css('z-index', 0);
		}
	});

	$('#elem7').click(function() {
		if (parseInt($('.page-overlay').css('z-index')) != 5) {
			$('#timeline-7').css('opacity', 1);
			$('#timeline-7').css('z-index', 10);
			$('.page-overlay').css('background-color', 'rgba(0,0,0,0.5)');
			$('.page-overlay').css('z-index', 5);
			$('.photo-viewer').css('background-color', 'white');
			$('.timeline-element').css('z-index', 0);
		}
	});

	$('#elem8').click(function() {
		if (parseInt($('.page-overlay').css('z-index')) != 5) {
			$('#timeline-8').css('opacity', 1);
			$('#timeline-8').css('z-index', 10);
			$('.page-overlay').css('background-color', 'rgba(0,0,0,0.5)');
			$('.page-overlay').css('z-index', 5);
			$('.photo-viewer').css('background-color', 'white');
			$('.timeline-element').css('z-index', 0);
		}
	});

	$('#elem9').click(function() {
		if (parseInt($('.page-overlay').css('z-index')) != 5) {
			$('#timeline-9').css('opacity', 1);
			$('#timeline-9').css('z-index', 10);
			$('.page-overlay').css('background-color', 'rgba(0,0,0,0.5)');
			$('.page-overlay').css('z-index', 5);
			$('.photo-viewer').css('background-color', 'white');
			$('.timeline-element').css('z-index', 0);
		}
	});

	$('#elem10').click(function() {
		if (parseInt($('.page-overlay').css('z-index')) != 5) {
			$('#timeline-10').css('opacity', 1);
			$('#timeline-10').css('z-index', 10);
			$('.page-overlay').css('background-color', 'rgba(0,0,0,0.5)');
			$('.page-overlay').css('z-index', 5);
			$('.photo-viewer').css('background-color', 'white');
			$('.timeline-element').css('z-index', 0);
		}
	});

	$('.page-overlay').click(function() {
		if (parseInt($('.page-overlay').css('z-index')) === 5) {
			$('#timeline-1').css('opacity', 0);
			$('#timeline-1').css('z-index', 0);
			$('#timeline-2').css('opacity', 0);
			$('#timeline-2').css('z-index', 0);
			$('#timeline-3').css('opacity', 0);
			$('#timeline-3').css('z-index', 0);
			$('#timeline-4').css('opacity', 0);
			$('#timeline-4').css('z-index', 0);
			$('#timeline-5').css('opacity', 0);
			$('#timeline-5').css('z-index', 0);
			$('#timeline-6').css('opacity', 0);
			$('#timeline-6').css('z-index', 0);
			$('#timeline-7').css('opacity', 0);
			$('#timeline-7').css('z-index', 0);
			$('#timeline-8').css('opacity', 0);
			$('#timeline-8').css('z-index', 0);
			$('#timeline-9').css('opacity', 0);
			$('#timeline-9').css('z-index', 0);
			$('#timeline-10').css('opacity', 0);
			$('#timeline-10').css('z-index', 0);
			$('.page-overlay').css('background-color', 'rgba(0,0,0,0)');
			$('.page-overlay').css('z-index', -5);
			$('.photo-viewer').css('background-color', 'rgba(0,0,0,0)');
			$('.photo-viewer').css('z-index', -5);
			$('.timeline-element').css('z-index', 0);
		}
	});

});