// $( "menuIcon" ).click(function() {
//   $( this ).next().addClass("show");
// });
$(document).ready(function() {
    $('.bxslider').bxSlider();

  $( '.menu-btn' ).click(function(){
  $('.responsive-menu').toggleClass('expand')

  })
});
