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

	// Mobile scroll nav

	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop(); 
		var mastheadHeight = $('#masthead').outerHeight() + 5;   
	    if (scroll >= mastheadHeight && $(window).width() < 768) {				
			$('header').addClass('smaller');
	    } else if(scroll <= mastheadHeight) {
			$('header').removeClass('smaller');
		}
	});

	// Word looping

	i = 0;
	skillArray = ['social media strategies.', 'pay-per-click campaigns.', 'e-commerce sites.', 'marketing automation.', 'WordPress sites.', 'print materials.'];
	setInterval(function() {
		$('#looper').fadeOut(500, function() {
			$(this).text(skillArray[i % skillArray.length]).fadeIn(500);
			i++;
		});
	}, 3000);

	// Splash page

	// $('#splash-content').on('mouseover click touch', function(e) {
	// 	e.preventDefault();
	// 	$(this).closest('section').addClass('splash-hover');
	// });

	// Accordion 

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

    	// calculate distance
    	elementOffset = $(window.location.hash).offset().top;
    	console.log(elementOffset);
		msPerPixel = 1;
		minScrollTime = 250;
		maxScrollTime = 750;
		scrollTime = elementOffset * msPerPixel;
		scrollTime = Math.min(scrollTime, maxScrollTime);
		scrollTime = Math.max(scrollTime, minScrollTime);

        // smooth scroll to the anchor id
        setTimeout(function() {
			$('html, body').stop().animate({
				scrollTop: $(window.location.hash).offset().top
				}, scrollTime, 'swing');
			}, 200);
    };     

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

// Checkboxes

// $('form').on('submit', function(e) {
// 	checkedBoxes = $('input:checked').map(function() {
// 		return this.name	;
// 	}).get().join(',');
// 	console.log(checkedBoxes);
// });

/* attach a submit handler to the form */
$('#form').submit(function(e) {

	// e.preventDefault();
	$('#submit').attr("disabled", "disabled");
	$('#submit span').html('<div class="typing_loader"></div>');

	data = {};


	$(this).find(':input:not([type="checkbox"])').each(function(index, value){

		name = $(this).attr('name');
		value = $(this).val();

		data[name] = value;
	});

	var checkboxGroup = '';
	name = 'services';
	checkedCheckBoxes = $(this).find("input:checked");

	$(checkedCheckBoxes).each(function (i, checkedBox) {
		checkboxGroup += $(checkedBox).attr('name') + ",";
	});
	checkboxGroup = checkboxGroup.slice(0, -1);

	data[name] = checkboxGroup;

	console.log(data);

	$.ajax({
		type: "POST",
		url: "../bin/mail.php",
		data: data,
		success: postFormSuccess,
		failure: postFormError,
		complete: postComplete
  });
  return false;

});

postFormSuccess = function () {
    "use strict";
	setTimeout(function() {
		$('#form').slideUp(2000).delay(1000).fadeOut(1000);
		$('#contact-form h3').slideUp(1000);
		$('#success').delay(1950).slideDown(1000);
	}, 2000);    
};

postFormError = function () {
    "use strict";
    $('#form').css("background-color", "red");
};

postComplete = function () {
    "use strict";

	// push pageview to GA
	ga('send', 'pageview', location.pathname+'/thank-you');

	// push lead to FB
	fbq('track', 'Lead', {
	  content_name: location.pathname+'/thank-you'
	});

    setTimeout(function() {
    $('#submit').removeAttr('disabled');
    }, 2000);
};

    // // run Marketo form submission on click of submit button
    // $('#submit').on("click", function (e) {
    //     $('#form').trigger('submit');
    // });
