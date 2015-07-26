var ready = function() {

	$('#menu-icon').on('click', function () {
		$('#logo-mobile').hide();
		$('#menu-icon').hide();

		$('#menu-mobile').animate({
			left: "0px"
		}, 200);

		$('body').animate({
			left: "78.125%"
		}, 200);
	});

	$( window ).resize(function() {
		if ($(window).width() >= 768) {
			$('#logo-mobile').show();
			$('#menu-icon').show();
			$('#menu-mobile').animate({
				left: "-78.125%"
			}, 200);
			$('body').animate({
				left: "0px"
			}, 200);
}
	});
}

$(document).ready(ready);
$(document).on('page:load', ready);
