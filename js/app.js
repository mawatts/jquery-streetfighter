$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		//Show Ryu ready position gif and hide still image
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		//Show Ryu still image and hide ready position gif
		$('.ryu-still').show();
		$('.ryu-ready').hide();
	})
	.mousedown(function() {
		//Play hadouken sound, hide ready gif, and show throwing gif
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').show();
		// animate hadouken to the right of the screen
	})
	.mouseup(function() {
		//Hide throwing gif and show ready gif
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});
});