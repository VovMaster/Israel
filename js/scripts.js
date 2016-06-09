$(document).ready(function() {

	try {
        $.browserSelector();
        if($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch(err) {

    };

	if($('#parallax1').length){
		var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

		new ScrollMagic.Scene({triggerElement: "#parallax1"}).setTween(".parallax-bg", {y: "100%", ease: Linear.easeNone}).addTo(controller);
	}









	if ($('.vertical-slider').length) {
		var clearVerticalAnimate;	

		$('.vertical-slider').owlCarousel({
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			nav: true,
			loop:true,
			dots: false,
			items:1,
			autoplay: false,
			margin:0,
			stagePadding:0,
			mouseDrag: false,
			touchDrag: false,
			// smartSpeed:450,
			navText: '',

		});
		$('.vertical-slider').on('changed.owl.carousel', function(event) {
    			$('.wrap-vertical-slide > div').removeClass('flipInX');
    			$('.owl-item:not(.active) .wrap-vertical-slide > div').removeClass('fadeOutDown animated');
    		setTimeout(function(){
	    		$('.owl-item.active .wrap-vertical-slide > div').addClass('flipInX animated');
	    		$('.owl-item:not(.active) .wrap-vertical-slide > div').addClass('fadeOutDown animated');
    		}, 100);
		});
	}

	if ($('.horizontal-slider').length) {

		$('.horizontal-slider').owlCarousel({
			nav: true,
			loop:true,
			dots: false,
			items:4,
			margin:12,
			stagePadding:0,
			smartSpeed:450,
			navText: '',
			responsive:{
				0:{
					items:1
				},
				520:{
					items:2
				},
				768:{
					items:3
				},
				1130:{
					items:4
				}
			}
		});

	}

	var wow = null;
	// Elements Animation
	if($('.wow').length){
		wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       50,          // distance to the element when triggering the animation (default is 0)
			mobile:       true,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();

	}



	$('.button-top').click(function(){
		$('html, body').animate({ scrollTop: 0 }, 500);
	});


	$(".fancybox").fancybox();;
	$(".various").fancybox({
		maxWidth	: 800,
		maxHeight	: 600,
		fitToView	: false,
		width		: '70%',
		height		: '70%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});

	$('.sizes button').click(function(){
		var nameButton = $(this).attr('name');
		$('.sizes button').removeClass('active');
		$(this).addClass('active');
		if(nameButton == "Small") {
			$('html').addClass('html-size1');
			$('html').removeClass('html-size2');
			$('html').removeClass('html-size3');
		}
		if(nameButton == "Middle") {
			$('html').addClass('html-size2');
			$('html').removeClass('html-size1');
			$('html').removeClass('html-size3');
		}
		if(nameButton == "Big") {
			$('html').addClass('html-size3');
			$('html').removeClass('html-size2');
			$('html').removeClass('html-size1');
		}
	});

});


