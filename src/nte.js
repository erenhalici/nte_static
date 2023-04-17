$(document).ready(() => {
	$(".menu-button").click(() => {
		$(".menu").toggle();
		$(".menu-button").toggleClass("bg-sky-100");
	});
});
