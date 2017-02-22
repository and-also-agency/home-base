// Nav //
// Wait for the DOM to be ready (all elements printed on page regardless if loaded or not)
$(function() {

	// Toggle navigation
	$('#menu-toggle').click(function() {
		// $(this).toggleClass('open');
		if ($('body').hasClass('show-nav')) {
			$('body').removeClass('show-nav').addClass('hide-nav');

			setTimeout(function() {
				$('body').removeClass('hide-nav');
			}, 1700);

		} else {
			$('body').removeClass('hide-nav').addClass('show-nav');
		}
		// console.log("you clicked me");
		return false;
	});

	// Word looping

	i = 0;
	skillArray = ['seo.', 'analytics.', 'automation.', 'mobile.', 'stuff.'];
	setInterval(function() {
		i++;
		$('#looper').fadeOut(500, function() {
			$(this).text(skillArray[i % skillArray.length]).fadeIn(500);
		});
	}, 3000);

});

// Toggle with hitting of ESC
$(document).keyup(function(e) {
    if (e.keyCode == 27) {
		if ($('body').hasClass('show-nav')) {
			$('body').removeClass('show-nav').addClass('hide-nav');

			setTimeout(function() {
				$('body').removeClass('hide-nav');
			}, 1700);

		}
    }
});