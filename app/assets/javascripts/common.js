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
/*
	$('#menu-icon').on('click', function () {
		$('#logo-mobile').show();

		$('#menu-mobile').animate({
			left: "78.125%"
		}, 200);

		$('body').animate({
			left: "0px"
		}, 200);
	});*/
}


$(document).ready(ready);
$(document).on('page:load', ready);
