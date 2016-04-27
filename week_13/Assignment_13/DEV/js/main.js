$(document).ready(function(){

		$( "#menu-btn" ).removeClass( "hidden" ).addClass( "expand" );

		$("nav" ).removeClass("nonJSnav").addClass( "responsive-menu" );

	$(window).scroll(function(){
		if ($(this).scrollTop() > 300) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});


	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});


	  $( '.menu-btn' ).click(function(){
	  $('.responsive-menu').toggleClass('expand')

	});


	$('.img-wrap img:gt(0)').hide();

	$('.next').click(function() {
	    $('.img-wrap img:first-child').fadeOut().next().fadeIn().end().appendTo('.img-wrap');
	});

	$('.prev').click(function() {
	    $('.img-wrap img:first-child').fadeOut();
	    $('.img-wrap img:last-child').prependTo('.img-wrap').fadeOut();
	    $('.img-wrap img:first-child').fadeIn();
	});
});
