var menu_clicked = false;
var ready = function() {

	$('html').on('click', function (e) {
		if (menu_clicked) {
			if (!$(e.target).hasClass('c-hamburger') && !$(e.target).hasClass('menu-mobile')) {
				$('#menu-icon').trigger('click');
			}
		}
	});

	$('#menu-icon').on('click', function () {
		if (!menu_clicked) {
			$('#logo-mobile').hide();

			$('#menu-mobile').animate({
				left: "0px"
			}, 200);

			$('body').animate({
				left: "78.125%"
			}, 200);
		} else {
			$('#logo-mobile').show();
			$('#menu-mobile').animate({
				left: "-78.125%"
			}, 200);
			$('body').animate({
				left: "0px"
			}, 200);
		}
		menu_clicked = !menu_clicked;
	});

	$( window ).resize(function() {
		if ($(window).width() >= 768) {
			if (menu_clicked)
				$('#menu-icon').trigger('click');
		}
	});

	var toggles = document.querySelectorAll(".c-hamburger");
	for (var i = 0; i < toggles.length; i++) {
		var toggle = toggles[i];
		toggleHandler(toggle);
	};

	function toggleHandler(toggle) {
		toggle.addEventListener( "click", function(e) {
			e.preventDefault();
			(this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
		});
	}
}
$(document).ready(ready);
$(document).on('page:load', ready);
