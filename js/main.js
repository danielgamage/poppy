$(document).ready(function() {

	$('.cover').click(function() {
		if ($(this).parent().hasClass('open')) {
			$(this).parent().removeClass('open');
		} else {
			$('.block').removeClass('open');
			$(this).parent().addClass('open');
		}
	});

});
