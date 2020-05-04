$(document).ready(function(){

	let $btns = $('.project-area .btn-group button');

	$btns.click(function(e){


		$('.project-area .btn-group button').removeClass('active');
		e.target.classList.add('active');

		let selector = $(e.target).attr('data-filter');
		$('.project-area .grid').isotope({
			filter: selector
		});

		return false;
    })

       


    $('.project-area .grid .test-popup-link').magnificPopup({
        type:'image',
        gallery:{enabled:true}

    });
	
    // Owl-carousel
    $(".site-main .about-area .owl-carousel").owlCarousel({
    	dots:true,
    	loop:true,
    	items:4,
    	autoplay:true,
    	autoplayTimeout:1000,
    	autoplayHoverPause:true,
    	margin:10,
    	responsive:{
    		0:{
    			items:1,
    		},
    		600:{
    			items:2,
    		}
    	}	
    });

   // sticky navigation menu

let nav_offset_top = $('.header_area').height() + 50;

function navbarFixed(){
	if($('.header_area').length){
		$(window).scroll(function(){
			let scroll = $(window).scrollTop();
			if(scroll >= nav_offset_top){
				$('.header_area .main-menu').addClass('navbar_fixed');

			} else {
				$('.header_area .main-menu').removeClass('navbar_fixed');
			}
		})
	}
}

navbarFixed();

});