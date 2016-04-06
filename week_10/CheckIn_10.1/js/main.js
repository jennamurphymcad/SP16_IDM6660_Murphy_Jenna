$(function() {

  //if JS available, hide figcaption p
  $("figcaption p").addClass("hidden");

  if (Modernizr.touchevents) {
    $("figcaption p").addClass("show");
    } else {
    $("figcaption p").addClass("hidden");
    } 

  //mouseenter figure will reveal project description
  $("figure").each(function() {
    $(this).mouseenter(function() {
        $("#" + this.id + "Par").removeClass("hidden").addClass("show");
    });
    $(this).mouseleave(function() {
      $("#" + this.id + "Par").removeClass("show").addClass("hidden");
    })
  });

  $("#navStick ul li a").hover(function() {
    $(this).css("color", "white");
  }, function(){
    $(this).css("color", "#fcd2be");
  });
  //leveraged from own code week 13: when clicked on recipe in nav, will only show the selected recipe and hide others
  $('#navStick ul li').click(function() {
    var selectedArticle = $("#" + this.id + "Article");
    //  $(selectedArticle).animate({"padding-top": "0px"}, {queue: false, duration: "slow"});
        if ($(selectedArticle).is(":visible")) {
          if ($("article").is(":visible")) {
            $("article").hide();
            $(selectedArticle).fadeIn();
            $("article").removeClass("hidden");
          } else {
            $(selectedArticle).fadeOut();
          }
      } else {
        $("article").hide();
        $(selectedArticle).fadeIn();
      }
  });

});
