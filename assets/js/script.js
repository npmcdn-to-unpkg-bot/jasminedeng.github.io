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


	var photo_view = function(id) {
		if (parseInt($('.page-overlay').css('z-index')) != 5) {
			$(id).css('opacity', 1);
			$(id).css('z-index', 10);
			$('.page-overlay').css('background-color', 'rgba(0,0,0,0.5)');
			$('.page-overlay').css('z-index', 5);
			$('.photo-viewer').css('background-color', 'white');
			$('.timeline-element').css('z-index', 0);
		}
	};

	$('#elem1').click(function() {
		photo_view('#timeline-1');
	});

	$('#elem2').click(function() {
		photo_view('#timeline-2');
	});

	$('#elem3').click(function() {
		photo_view('#timeline-3');
	});

	$('#elem4').click(function() {
		photo_view('#timeline-4');
	});

	$('#elem5').click(function() {
		photo_view('#timeline-5');
	});

	$('#elem6').click(function() {
		photo_view('#timeline-6');
	});

	$('#elem7').click(function() {
		photo_view('#timeline-7');
	});

	$('#elem8').click(function() {
		photo_view('#timeline-8');
	});

	$('#elem9').click(function() {
		photo_view('#timeline-9');
	});

	$('#elem10').click(function() {
		photo_view('#timeline-10');
	});

	var reset_view = function(id) {
		$(id).css('opacity', 0);
		$(id).css('z-index', 0);
	}

	$('.page-overlay').click(function() {
		if (parseInt($('.page-overlay').css('z-index')) === 5) {
			reset_view('#timeline-1');
			reset_view('#timeline-2');
			reset_view('#timeline-3');
			reset_view('#timeline-4');
			reset_view('#timeline-5');
			reset_view('#timeline-6');
			reset_view('#timeline-7');
			reset_view('#timeline-8');
			reset_view('#timeline-9');
			reset_view('#timeline-10');
			$('.page-overlay').css('background-color', 'rgba(0,0,0,0)');
			$('.page-overlay').css('z-index', -5);
			$('.photo-viewer').css('background-color', 'rgba(0,0,0,0)');
			$('.photo-viewer').css('z-index', -5);
			$('.timeline-element').css('z-index', 0);
		}
	});

});