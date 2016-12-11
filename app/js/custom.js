// Nav //
// Wait for the DOM to be ready (all elements printed on page regardless if loaded or not)
$(function() {
	// Toggle navigation
	$('.toggle-nav').click(function() {
		if ($('body').hasClass('show-nav')) {
			$('body').removeClass('show-nav').addClass('hide-nav');

			setTimeout(function() {
				$('body').removeClass('hide-nav');
			}, 500);

		} else {
			$('body').removeClass('hide-nav').addClass('show-nav');
		}
		// console.log("you clicked me");
		return false;
	});

});

// Toggle with hitting of ESC
$(document).keyup(function(e) {
    if (e.keyCode == 27) {
        $('body').removeClass('show-nav');
    }
});