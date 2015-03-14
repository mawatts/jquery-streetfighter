//Mouse functions for animation/image changes
$(document).ready(function() {
	playGame();
	intro();
});

//Hadouken audio function
function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}

//Cool audio function
function playCool () {
	$('#cool-sound')[0].volume = 0.5;
	$('#cool-sound')[0].play();
}

//Intro theme music
function playIntro () {
	$('#ryu-theme')[0].volume = 0.2;
	$('#ryu-theme')[0].load();
	$('#ryu-theme')[0].play();
}

function playGame() {
	$('.ryu').mouseenter(function() {
		//Show Ryu ready position gif and hide still image
		$('.ryu-hide').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		//Show Ryu still image and hide ready position gif
		$('.ryu-hide').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		//Play hadouken sound, hide ready gif, and show throwing gif
		playHadouken();
		$('.ryu-hide').hide();
		$('.ryu-throwing').show();
		// animate hadouken to the right of the screen
		$('.hadouken').finish().show().animate(
			{'left': '1020px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '540px');
				}
			);
	})
	.mouseup(function() {
		//Hide throwing gif and show ready gif
		$('.ryu-hide').hide();
		$('.ryu-ready').show();
	});

	//Keypress animation for audio and gif
	$(document).keydown(function(e) {
		if (e.keyCode == 88) {
			$('#ryu-theme')[0].pause();
			$('#ryu-theme')[0].load();
			playCool();
			$('.ryu-hide').hide();
			$('.ryu-cool').show();
		}
	})
	.keyup(function(e) {
		if (e.keyCode == 88) {
			$('#cool-sound')[0].pause();
			$('#cool-sound')[0].load();
			playIntro();
			$('.ryu-hide').hide();
			$('.ryu-still').show();
		}
	});
}

function intro() {
	playIntro();

}