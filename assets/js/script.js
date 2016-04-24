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

});