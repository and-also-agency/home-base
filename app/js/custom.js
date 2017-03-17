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
	skillArray = ['email campaigns.', 'analytics.', 'automation.', 'mobile.', 'advertising.', 'pay-per-click.', 'AdWords.', 'e-commerce.', 'WordPress.'];
	setInterval(function() {
		i++;
		$('#looper').fadeOut(500, function() {
			$(this).text(skillArray[i % skillArray.length]).fadeIn(500);
		});
	}, 3000);

	// Splash page

	$('#splash-content').on('mouseover click touch', function(e) {
		console.log('You clicked me');
		e.preventDefault();
		$(this).closest('section').addClass('splash-hover');
	});

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

// Float label

$('input, textarea').on('input', function() {
    if ($(this).val() !== '') {
        $(this).addClass('visible');
    } else {
        $(this).removeClass('visible');
    };
});