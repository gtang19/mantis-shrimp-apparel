/******Jquery******/
$(function() {
  $("#menu").click(function() {
      $('.slidenav').toggle("slide");
  });
  $('header, main, footer, #close').click(function(){
    $('.slidenav').hide("slide");
  })
})



/******Vanilla JavaScript******/
