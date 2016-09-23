function setHeight() {
	windowHeight = $(window).innerHeight();
	
	final_height = windowHeight;
		$('.main-login-box').css('height', final_height);
	}
	
	$(document).ready(function () {
		setHeight();
	$(window).resize(function () {
		setHeight();
	});
});

