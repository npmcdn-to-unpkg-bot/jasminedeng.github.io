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

	
	$('.gallery-grid').masonry({
		itemSelector: '.grid-item',
		columnWidth: 100
	});

	var onHover = function(id) {
		if (!($(id + ' .button').hasClass('button-active'))) {
			$(id + ' .button').addClass('button-active');
			$(id + ' .item-active').css('opacity', 1);
		}
	};

	var offHover = function(id) {
		if ($(id + ' .button').hasClass('button-active')) {
			$(id + ' .button').removeClass('button-active');
			$(id + ' .item-active').css('opacity', 0);
		}
	};

	$('#img1').hover(function() { console.log("hi"); onHover('#img1') }, function() { offHover('#img1'); });
	$('#img2').hover(function() { onHover('#img2') }, function() { offHover('#img2'); });
	$('#img3').hover(function() { onHover('#img3') }, function() { offHover('#img3'); });
	$('#img4').hover(function() { onHover('#img4') }, function() { offHover('#img4'); });
	$('#img5').hover(function() { onHover('#img5') }, function() { offHover('#img5'); });
	$('#img6').hover(function() { onHover('#img6') }, function() { offHover('#img6'); });
	$('#img7').hover(function() { onHover('#img7') }, function() { offHover('#img7'); });
	$('#img8').hover(function() { onHover('#img8') }, function() { offHover('#img8'); });
	$('#img9').hover(function() { onHover('#img9') }, function() { offHover('#img9'); });
	$('#img10').hover(function() { onHover('#img10') }, function() { offHover('#img10'); });
	$('#img11').hover(function() { onHover('#img11') }, function() { offHover('#img11'); });
	$('#img12').hover(function() { onHover('#img12') }, function() { offHover('#img12'); });
	$('#img13').hover(function() { onHover('#img13') }, function() { offHover('#img13'); });
	$('#img14').hover(function() { onHover('#img14') }, function() { offHover('#img14'); });
	$('#img15').hover(function() { onHover('#img15') }, function() { offHover('#img15'); });
	$('#img16').hover(function() { onHover('#img16') }, function() { offHover('#img16'); });

	$('.share-img').click(function() {
		document.getElementById('kt-fb').click();
	});

	var addDownloadClick = function(id_num) {
		console.log('created' + id_num);
		$('#img' + id_num + ' .download-img').click(function() {
			document.getElementById('download' + id_num).click();
		});
	};

	for (i = 1; i < 17; i++) {
		addDownloadClick(i);
	}

});