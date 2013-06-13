$(document).ready(function() {

	$('.cover').click(function() {
		$('.tools a').removeClass('open');
		$(this).siblings('.tools').children().each(function() {
			if ($(this).hasClass('open')) {
				$(this).removeClass('open');
			} else {
				$(this).addClass('open');
			}
		});
	});

});