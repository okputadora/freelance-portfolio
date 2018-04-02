console.log("connected")
$(window).on("load", function(){
  $("#about-btn").click(function(){
    $('html, body').animate({
        scrollTop: $("#about").offset().top - 100
    }, 500);
  })
  $("#projects-btn").click(function(){
    $('html, body').animate({
        scrollTop: $("#projects").offset().top - 50
    }, 500);
  })
  $("#contact-btn").click(function(){
    $('html, body').animate({
        scrollTop: $("#contact").offset().top - 50
    }, 500);
  })
})
