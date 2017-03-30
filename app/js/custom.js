// Nav //

// to top right away
if ( window.location.hash ) scroll(0,0);
// void some browsers issue
setTimeout( function() { scroll(0,0); }, 1); 

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

	$('.js-accordion-trigger').bind('click', function(e){
		$(this).blur();
	  $(this).parent().find('.submenu').slideToggle(400);  // apply the toggle to the ul
	  $(this).parent().toggleClass('is-expanded');
	  $(this).parent().siblings().removeClass('is-expanded').find('.submenu').slideUp(200);
	  e.preventDefault();
	});

	// Navigate and scroll

    var hashLocation = false;
    if (location.hash) {
        hashLocation = window.location.hash;
        setTimeout(function() {
            hashLocation = window.location.hash;
        }, 1); // Execute at two moments for browser compatibility reasons
    }
    // console.log(hashLocation);

    // If we have a hash location do stuff
    if(window.location.hash) {

        // smooth scroll to the anchor id
        $('html, body').animate({
            scrollTop: $(window.location.hash).offset().top + 'px'
        }, 1500, 'swing');
    }   

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